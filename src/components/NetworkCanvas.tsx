import React, { useEffect, useRef } from 'react';

interface NetworkCanvasProps {
  accentColor?: 'blue' | 'cyan' | 'indigo' | 'teal' | 'slate';
  variant?: 'hero' | 'ambient';
  className?: string;
}

const COLOR_MAP: Record<NonNullable<NetworkCanvasProps['accentColor']>, { dot: string; lineRgb: string }> = {
  blue: { dot: '#77bcff', lineRgb: '106, 183, 255' },
  cyan: { dot: '#67e8f9', lineRgb: '56, 189, 248' },
  indigo: { dot: '#a5b4fc', lineRgb: '129, 140, 248' },
  teal: { dot: '#5eead4', lineRgb: '45, 212, 191' },
  slate: { dot: '#94a3b8', lineRgb: '148, 163, 184' },
};

/**
 * Low-intensity network of lines and points for hero covers and dashboard ambient space.
 * - Keeps text area clear by concentrating nodes in the right/outer zone.
 * - Respects prefers-reduced-motion (renders a static constellation without animation).
 * - Pauses animation loop when the tab/window is hidden (document.visibilityState), while always rendering the initial frame.
 * - Releases requestAnimationFrame, ResizeObserver, and listeners when unmounted.
 */
export default function NetworkCanvas({
  accentColor = 'blue',
  variant = 'hero',
  className = '',
}: NetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const palette = COLOR_MAP[accentColor] || COLOR_MAP.blue;
    const nodeCount = variant === 'hero' ? 38 : 28;
    const linkDistance = variant === 'hero' ? 98 : 120;
    const baseOpacity = variant === 'hero' ? 0.52 : 0.22;

    // Deterministic quasi-random distribution (golden ratio sequence matching Hub_DataCorp.html)
    const points = Array.from({ length: nodeCount }, (_, i) => ({
      x: (i * 0.618034) % 1,
      y: (i * 0.754878) % 1,
    }));

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let rafId = 0;
    let isDisposed = false;

    const drawFrame = (timestamp: number) => {
      if (isDisposed || !canvas.isConnected) return;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width || canvas.clientWidth;
      const height = rect.height || canvas.clientHeight;
      if (width === 0 || height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const targetW = Math.round(width * dpr);
      const targetH = Math.round(height * dpr);
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const reduced = mediaQuery.matches;
      const t = reduced ? 0 : timestamp / 4600;

      const coords = points.map((p, i) => [
        p.x * width + 15 * Math.sin(t + i),
        p.y * height + 13 * Math.cos(t * 0.77 + i),
      ]);

      for (let i = 0; i < coords.length; i++) {
        const [x, y] = coords[i];
        for (let j = i + 1; j < coords.length; j++) {
          const [u, v] = coords[j];
          const dist = Math.hypot(x - u, y - v);
          if (dist <= linkDistance) {
            const alpha = (baseOpacity * (1 - dist / linkDistance)).toFixed(3);
            ctx.strokeStyle = `rgba(${palette.lineRgb}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(u, v);
            ctx.stroke();
          }
        }
        ctx.fillStyle = palette.dot;
        ctx.globalAlpha = variant === 'hero' ? 0.9 : 0.45;
        ctx.beginPath();
        ctx.arc(x, y, 1.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      if (!reduced && !document.hidden) {
        rafId = window.requestAnimationFrame(drawFrame);
      }
    };

    const startOrStop = () => {
      window.cancelAnimationFrame(rafId);
      // Always paint at least one frame so static constellation is visible even if tab starts unfocused
      drawFrame(performance.now());
    };

    startOrStop();

    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            window.cancelAnimationFrame(rafId);
            drawFrame(performance.now());
          })
        : null;

    if (resizeObserver) {
      resizeObserver.observe(canvas);
    }

    const handleVisibility = () => startOrStop();
    const handleMotionChange = () => startOrStop();
    const handleResize = () => startOrStop();

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('resize', handleResize);
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleMotionChange);
    }

    return () => {
      isDisposed = true;
      window.cancelAnimationFrame(rafId);
      if (resizeObserver) resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('resize', handleResize);
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', handleMotionChange);
      }
    };
  }, [accentColor, variant]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none block select-none ${className}`}
    />
  );
}
