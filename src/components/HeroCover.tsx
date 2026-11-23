import React from 'react';
import NetworkCanvas from './NetworkCanvas';

interface HeroCoverProps {
  eyebrow?: string;
  title: string;
  description: string;
  accent?: 'blue' | 'indigo' | 'teal' | 'cyan' | 'slate';
  actions?: React.ReactNode;
}

const ACCENT_STYLES: Record<
  NonNullable<HeroCoverProps['accent']>,
  {
    border: string;
    bg: string;
    pill: string;
    shadow: string;
  }
> = {
  blue: {
    border: 'border-[#34537a]',
    bg: 'bg-[radial-gradient(ellipse_at_86%_80%,#254d82_0%,transparent_48%),linear-gradient(110deg,#0d1931,#152a4e)]',
    pill: 'bg-[#173761]/80 border-[#5085b8]/55 text-[#b6d7ff]',
    shadow: 'shadow-[0_18px_46px_-30px_rgba(37,138,255,0.5)]',
  },
  indigo: {
    border: 'border-indigo-500/35',
    bg: 'bg-[radial-gradient(ellipse_at_86%_80%,rgba(67,56,202,0.42)_0%,transparent_50%),linear-gradient(110deg,#0e1730,#18244a)]',
    pill: 'bg-indigo-950/80 border-indigo-400/45 text-indigo-200',
    shadow: 'shadow-[0_18px_46px_-30px_rgba(99,102,241,0.45)]',
  },
  teal: {
    border: 'border-teal-500/35',
    bg: 'bg-[radial-gradient(ellipse_at_86%_80%,rgba(15,118,110,0.42)_0%,transparent_50%),linear-gradient(110deg,#0c192c,#112c3e)]',
    pill: 'bg-teal-950/80 border-teal-400/45 text-teal-200',
    shadow: 'shadow-[0_18px_46px_-30px_rgba(20,184,166,0.42)]',
  },
  cyan: {
    border: 'border-cyan-500/35',
    bg: 'bg-[radial-gradient(ellipse_at_86%_80%,rgba(14,116,144,0.45)_0%,transparent_50%),linear-gradient(110deg,#0c182d,#112a45)]',
    pill: 'bg-cyan-950/80 border-cyan-400/45 text-cyan-200',
    shadow: 'shadow-[0_18px_46px_-30px_rgba(56,189,248,0.42)]',
  },
  slate: {
    border: 'border-slate-600/40',
    bg: 'bg-[radial-gradient(ellipse_at_86%_80%,rgba(51,65,85,0.4)_0%,transparent_50%),linear-gradient(110deg,#0f172a,#1e293b)]',
    pill: 'bg-slate-800/80 border-slate-500/45 text-slate-300',
    shadow: 'shadow-[0_18px_46px_-30px_rgba(15,23,42,0.6)]',
  },
};

/**
 * Compact Hero banner for Inicio and the indices of Entrevistas and Estrategia.
 * Features a low-intensity constellation network on the right keeping the text area unobstructed.
 */
export default function HeroCover({
  eyebrow,
  title,
  description,
  accent = 'blue',
  actions,
}: HeroCoverProps) {
  const theme = ACCENT_STYLES[accent] || ACCENT_STYLES.blue;

  return (
    <section
      className={`relative isolate mx-auto mt-4 w-[min(94%,1370px)] overflow-hidden rounded-[22px] border ${theme.border} ${theme.bg} ${theme.shadow}`}
    >
      {/* Subtle 44x44 editorial grid overlay */}
      <div className="dc-hero-grid pointer-events-none absolute inset-0 z-0" />

      {/* Low-intensity constellation network positioned on the right, away from text */}
      <NetworkCanvas
        accentColor={accent}
        variant="hero"
        className="absolute inset-y-0 right-0 z-0 h-full w-[68%] opacity-25 md:w-[40%] md:opacity-85"
      />

      <div className="relative z-10 px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7">
        <div className="max-w-full md:w-[66%]">
          {eyebrow && (
            <span
              className={`mb-2 inline-block rounded-full border px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] ${theme.pill}`}
            >
              {eyebrow}
            </span>
          )}

          <h1 className="text-[clamp(24px,2.9vw,38px)] font-medium leading-[1.12] tracking-[-0.035em] text-white">
            {title}
          </h1>

          <p className="mt-2 max-w-[680px] text-[15px] leading-[1.52] text-[#c8d7eb] sm:text-base">
            {description}
          </p>

          {actions && <div className="mt-4 flex flex-wrap items-center gap-3">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
