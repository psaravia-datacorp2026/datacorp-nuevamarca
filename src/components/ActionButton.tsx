import React from 'react';

export type ActionVariant = 'primary' | 'secondary' | 'tertiary';

interface ActionButtonProps {
  variant?: ActionVariant;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  size?: 'sm' | 'md';
}

/**
 * Three reusable action variants:
 * - primary: Solid electric blue CTA (at most one per context, e.g. "Presentar a jefaturas").
 * - secondary: Bordered glass action for alternative navigation (e.g. "Ver decisiones").
 * - tertiary: Text/icon action for back links, sources, expanding answers, or exiting.
 */
export default function ActionButton({
  variant = 'secondary',
  href,
  onClick,
  children,
  className = '',
  ariaLabel,
  disabled = false,
  size = 'md',
}: ActionButtonProps) {
  const sizeClasses =
    size === 'sm'
      ? 'px-3.5 py-1.5 text-xs gap-1.5'
      : variant === 'tertiary'
        ? 'px-3 py-1.5 text-sm gap-1.5'
        : 'px-5 py-2.5 text-sm gap-2';

  const variantClasses: Record<ActionVariant, string> = {
    primary:
      'rounded-full border border-[#5c9ade] bg-gradient-to-br from-[#2075d1] to-[#154d93] text-white font-semibold shadow-[0_6px_24px_-6px_rgba(22,137,248,0.75)] hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-[0.98]',
    secondary:
      'rounded-full border border-[#4d79ab]/75 bg-[#132540]/85 text-[#e2eefc] font-medium shadow-[0_6px_18px_-10px_rgba(15,23,42,0.85)] hover:border-[#72a8e3] hover:bg-[#1b355a] hover:text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
    tertiary:
      'rounded-lg border border-transparent bg-transparent text-[#9bc9ff] font-medium hover:bg-white/[0.06] hover:text-white active:scale-[0.98]',
  };

  const baseClasses = `inline-flex items-center justify-center transition-all duration-150 select-none ${sizeClasses} ${variantClasses[variant]} ${
    disabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : 'cursor-pointer'
  } ${className}`;

  if (href && !disabled) {
    return (
      <a href={href} onClick={onClick} aria-label={ariaLabel} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
