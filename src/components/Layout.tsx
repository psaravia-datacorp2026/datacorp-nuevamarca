import React from 'react';
import {
  Compass,
  FileSpreadsheet,
  Home,
  Lock,
  MessageSquareQuote,
} from 'lucide-react';
import { SectionId } from '../types/hub';
import logoSvg from '../assets/Logo.svg';

interface LayoutProps {
  activeSection: SectionId;
  isPresentationMode?: boolean;
  children: React.ReactNode;
}

interface NavItemConfig {
  id: SectionId;
  label: string;
  href: string;
  locked?: boolean;
  activeClass: string;
  dotClass: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItemConfig[] = [
  {
    id: 'inicio',
    label: 'Inicio',
    href: '#inicio',
    activeClass: 'bg-[#1c3d6e] text-white shadow-[inset_0_0_0_1px_#4f83bd]',
    dotClass: 'bg-[#38bdf8]',
    Icon: Home,
  },
  {
    id: 'entrevistas',
    label: 'Entrevistas',
    href: '#entrevistas',
    activeClass: 'bg-indigo-900/75 text-white shadow-[inset_0_0_0_1px_rgba(129,140,248,0.65)]',
    dotClass: 'bg-indigo-400',
    Icon: MessageSquareQuote,
  },
  {
    id: 'journey',
    label: 'Recorridos',
    href: '#journey/0',
    activeClass: 'bg-cyan-900/75 text-white shadow-[inset_0_0_0_1px_rgba(56,189,248,0.65)]',
    dotClass: 'bg-cyan-400',
    Icon: Compass,
  },
  {
    id: 'estrategia',
    label: 'Estrategia',
    href: '#estrategia',
    activeClass: 'bg-teal-900/75 text-white shadow-[inset_0_0_0_1px_rgba(45,212,191,0.6)]',
    dotClass: 'bg-teal-400',
    Icon: FileSpreadsheet,
  },
  {
    id: 'iteraciones',
    label: 'Iteraciones · En pausa',
    href: '#iteraciones',
    locked: true,
    activeClass: '',
    dotClass: 'bg-slate-500',
    Icon: Lock,
  },
];

const SECTION_BADGE: Record<SectionId, { text: string; classes: string }> = {
  inicio: {
    text: 'Hub de Marca',
    classes: 'border-blue-400/30 bg-blue-500/10 text-blue-200',
  },
  entrevistas: {
    text: 'Entrevistas · Investigación',
    classes: 'border-indigo-400/35 bg-indigo-500/15 text-indigo-200',
  },
  journey: {
    text: 'Recorridos Digitales',
    classes: 'border-cyan-400/35 bg-cyan-500/15 text-cyan-200',
  },
  estrategia: {
    text: 'Estrategia de Marca',
    classes: 'border-teal-400/35 bg-teal-500/15 text-teal-200',
  },
  iteraciones: {
    text: 'Iteraciones · En pausa',
    classes: 'border-slate-500/35 bg-slate-700/25 text-slate-300',
  },
};

/**
 * Single global sticky navigation bar.
 * - Matches datacorp-onboarding header finish (sticky, dark backdrop-blur, corporate logo + section badge).
 * - Gives each section a distinct recognizable color accent + icon + textual indicator.
 * - Keeps "Iteraciones · En pausa" visually disabled and non-interactive (no hover, click, or tab focus).
 */
export default function Layout({
  activeSection,
  isPresentationMode = false,
  children,
}: LayoutProps) {
  const badge = SECTION_BADGE[activeSection] || SECTION_BADGE.inicio;

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#070e1e] text-[#e2ebf8] selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b border-[#8bb8f1]/20 bg-[#060d1e]/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[66px] w-[min(94%,1370px)] flex-wrap items-center justify-between gap-3 py-2.5">
          {/* Corporate Logos Block + Section Identity Pill */}
          <div className="flex min-w-0 items-center gap-3">
            <a
              href="#inicio"
              aria-label="Ir al inicio del Hub de Investigación y Estrategia de Marca DataCorp"
              className="flex items-center rounded-lg py-1 transition-opacity hover:opacity-90"
            >
              <img
                src={logoSvg}
                alt="Datasur · ImexDBusiness · Datlas"
                width="432"
                height="45"
                className="block h-auto w-[clamp(136px,22vw,250px)] object-contain"
              />
            </a>
            <span
              className={`hidden sm:inline-flex shrink-0 items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${badge.classes}`}
            >
              {badge.text}
            </span>
          </div>

          {/* Global Navigation Pill Container */}
          {!isPresentationMode && (
            <nav
              aria-label="Navegación principal del hub"
              className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-[#8bb8f1]/25 bg-[#101d33]/90 p-1 dc-matrix-scroll"
            >
              {NAV_ITEMS.map((item) => {
                const isCurrent = activeSection === item.id;
                const Icon = item.Icon;

                if (item.locked) {
                  return (
                    <span
                      key={item.id}
                      aria-disabled="true"
                      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-slate-400/75 select-none"
                    >
                      <Icon className="h-3.5 w-3.5 text-slate-500" />
                      <span>{item.label}</span>
                    </span>
                  );
                }

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs sm:text-[13px] font-medium transition-all duration-150 ${
                      isCurrent
                        ? item.activeClass
                        : 'text-[#c4d4ea] hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 opacity-85" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>
          )}
        </div>
      </header>

      <main className="relative z-10 flex flex-1 flex-col pb-16">{children}</main>
    </div>
  );
}
