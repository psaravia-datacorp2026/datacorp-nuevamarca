import React from 'react';
import { ArrowRight } from 'lucide-react';
import HeroCover from './HeroCover';
import NetworkCanvas from './NetworkCanvas';

/**
 * Custom 52px linear icons with a single 200ms detail animation on card hover/focus.
 * Loops are avoided and prefers-reduced-motion disables transitions automatically via CSS.
 */
function EntrevistasBubblesIcon() {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-indigo-400/35 bg-indigo-500/12 text-indigo-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors duration-200 group-hover:border-indigo-300/70 group-hover:bg-indigo-500/20">
      <svg
        width="34"
        height="34"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className="overflow-visible"
      >
        {/* Back speech bubble */}
        <path
          d="M6 10.5C6 8.567 7.567 7 9.5 7H21.5C23.433 7 25 8.567 25 10.5V17.5C25 19.433 23.433 21 21.5 21H13L8.2 24.6C7.54 25.095 6.6 24.624 6.6 23.8V21C6.26863 20.4 6 19.433 6 17.5V10.5Z"
          stroke="currentColor"
          strokeWidth="1.85"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-indigo-300"
        />
        {/* Front speech bubble - shifts subtly on hover/focus (200ms) */}
        <g className="transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-0.5">
          <path
            d="M14 16.5C14 14.8431 15.3431 13.5 17 13.5H27C28.6569 13.5 30 14.8431 30 16.5V22.5C30 24.1569 28.6569 25.5 27 25.5H25.5V28.3C25.5 29.04 24.655 29.462 24.06 29.02L19.5 25.5H17C15.3431 25.5 14 24.1569 14 22.5V16.5Z"
            fill="#111d38"
            stroke="#a5b4fc"
            strokeWidth="1.85"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="18"
            y1="18.2"
            x2="26"
            y2="18.2"
            stroke="#c7d2fe"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <line
            x1="18"
            y1="21.4"
            x2="23.5"
            y2="21.4"
            stroke="#c7d2fe"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}

function RecorridosRouteIcon() {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/35 bg-cyan-500/12 text-cyan-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors duration-200 group-hover:border-cyan-300/70 group-hover:bg-cyan-500/20">
      <svg
        width="34"
        height="34"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className="overflow-visible"
      >
        {/* Connecting route curve between three milestones */}
        <path
          d="M8 26C12.5 26 12.5 18 18 18C23.5 18 23.5 10 28 10"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeDasharray="3 2.5"
        />
        {/* Milestone 1 */}
        <circle
          cx="8"
          cy="26"
          r="3.3"
          fill="#0d1b30"
          stroke="currentColor"
          strokeWidth="1.9"
        />
        {/* Milestone 2 */}
        <circle
          cx="18"
          cy="18"
          r="3.5"
          fill="#0d1b30"
          stroke="#67e8f9"
          strokeWidth="1.9"
          className="origin-center transition-transform duration-200 ease-out group-hover:scale-115 group-focus-visible:scale-115"
        />
        {/* Milestone 3 - advances subtly on hover/focus (200ms) */}
        <g className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5">
          <circle
            cx="28"
            cy="10"
            r="3.8"
            fill="#083344"
            stroke="#a5f3fc"
            strokeWidth="2"
          />
          <circle cx="28" cy="10" r="1.4" fill="#a5f3fc" />
        </g>
      </svg>
    </div>
  );
}

function EstrategiaCompassIcon() {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-teal-400/35 bg-teal-500/12 text-teal-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors duration-200 group-hover:border-teal-300/70 group-hover:bg-teal-500/20">
      <svg
        width="34"
        height="34"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className="overflow-visible"
      >
        {/* Outer compass ring */}
        <circle
          cx="18"
          cy="18"
          r="11.5"
          stroke="currentColor"
          strokeWidth="1.85"
        />
        {/* Cardinal ticks */}
        <path
          d="M18 6.5V8.5M18 27.5V29.5M6.5 18H8.5M27.5 18H29.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Compass diamond needle - rotates 18deg over 220ms on hover/focus */}
        <g className="origin-[18px_18px] transition-transform duration-[220ms] ease-out group-hover:rotate-[18deg] group-focus-visible:rotate-[18deg]">
          <polygon
            points="23.2,12.8 19.9,19.9 12.8,23.2 16.1,16.1"
            fill="rgba(45,212,191,0.22)"
            stroke="#5eead4"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <circle cx="18" cy="18" r="1.4" fill="#99f6e4" />
        </g>
      </svg>
    </div>
  );
}

function IteracionesPrototypeIcon() {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-600/45 bg-slate-800/60 text-slate-400">
      <svg
        width="34"
        height="34"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
      >
        {/* Browser/prototype frame */}
        <rect
          x="6.5"
          y="8"
          width="23"
          height="20"
          rx="3.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <line
          x1="6.5"
          y1="13.5"
          x2="29.5"
          y2="13.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        {/* Wireframe blocks inside prototype */}
        <rect
          x="10"
          y="16.8"
          width="6.5"
          height="7.5"
          rx="1.2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="19.5"
          y1="17.8"
          x2="26"
          y2="17.8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="19.5"
          y1="21"
          x2="24.5"
          y2="21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/**
 * 1. INICIO · Un índice visual
 * - Compact Hero focused on the purpose of the hub, without presentation/decisions buttons.
 * - Four category cards: each active card is a single link with a 56px linear icon, title,
 *   concise 15-16px sentence (line-height 1.5), and specific action verb.
 * - Iteraciones del sitio is paused and non-interactive (no link, active hover, or CTA).
 */
export default function HomeView() {
  return (
    <div className="relative">
      {/* Low-intensity ambient particle network in the dashboard background */}
      <NetworkCanvas
        accentColor="blue"
        variant="ambient"
        className="fixed inset-0 -z-10 h-full w-full opacity-50"
      />

      <HeroCover
        eyebrow="DataCorp · Investigación y estrategia"
        title="La investigación detrás de la nueva marca"
        description="Consulta lo que aprendimos de los equipos, cómo navegan los clientes y qué falta resolver para la transición."
        accent="blue"
      />

      <section
        aria-label="Secciones del hub"
        className="mx-auto mt-5 w-[min(94%,1370px)]"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* 1. ENTREVISTAS (Indigo) */}
          <a
            href="#entrevistas"
            className="group dc-glass-card relative flex flex-col justify-between overflow-hidden rounded-[22px] border-indigo-400/40 p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-300/75 hover:shadow-[0_22px_50px_-20px_rgba(99,102,241,0.48)] active:translate-y-0 active:scale-[0.995]"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-400 to-indigo-400" />

            <div className="flex items-start gap-4 sm:gap-5">
              <EntrevistasBubblesIcon />
              <div className="min-w-0 flex-1">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                  Entrevistas
                </h2>
                <p className="mt-2 text-[15px] sm:text-base leading-[1.52] text-[#d5e1f0]">
                  Qué aprendimos al conversar con 11 referentes internos sobre el cambio de marca.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-3.5 text-sm font-semibold text-indigo-300 transition-colors group-hover:text-white">
              <span>Explorar entrevistas</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </a>

          {/* 2. RECORRIDOS DIGITALES (Cyan) */}
          <a
            href="#journey/0"
            className="group dc-glass-card relative flex flex-col justify-between overflow-hidden rounded-[22px] border-cyan-400/35 p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300/75 hover:shadow-[0_22px_50px_-20px_rgba(56,189,248,0.45)] active:translate-y-0 active:scale-[0.995]"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500" />

            <div className="flex items-start gap-4 sm:gap-5">
              <RecorridosRouteIcon />
              <div className="min-w-0 flex-1">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                  Recorridos digitales
                </h2>
                <p className="mt-2 text-[15px] sm:text-base leading-[1.52] text-[#d5e1f0]">
                  Dónde llegan los visitantes de DataSur e Imex y qué dificultades aparecen en el
                  camino.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-3.5 text-sm font-semibold text-cyan-300 transition-colors group-hover:text-white">
              <span>Comparar recorridos</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </a>

          {/* 3. ESTRATEGIA DE MARCA (Turquoise / Teal) */}
          <a
            href="#estrategia"
            className="group dc-glass-card relative flex flex-col justify-between overflow-hidden rounded-[22px] border-teal-400/35 p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 hover:border-teal-300/75 hover:shadow-[0_22px_50px_-20px_rgba(20,184,166,0.45)] active:translate-y-0 active:scale-[0.995]"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-500" />

            <div className="flex items-start gap-4 sm:gap-5">
              <EstrategiaCompassIcon />
              <div className="min-w-0 flex-1">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                  Estrategia de marca
                </h2>
                <p className="mt-2 text-[15px] sm:text-base leading-[1.52] text-[#d5e1f0]">
                  La propuesta de marca, el portafolio y los planes para la transición.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-3.5 text-sm font-semibold text-teal-300 transition-colors group-hover:text-white">
              <span>Consultar estrategia</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </a>

          {/* 4. ITERACIONES DEL SITIO (Slate Gray - En pausa, non-interactive, no CTA) */}
          <article
            aria-disabled="true"
            className="dc-glass-locked relative flex flex-col justify-between overflow-hidden rounded-[22px] p-6 sm:p-7 select-none"
          >
            <div className="flex items-start gap-4 sm:gap-5">
              <IteracionesPrototypeIcon />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-300">
                    Iteraciones del sitio
                  </h2>
                  <span className="rounded-full border border-slate-600/60 bg-slate-800/80 px-2.5 py-0.5 text-xs font-semibold text-slate-300">
                    En pausa
                  </span>
                </div>
                <p className="mt-2 text-[15px] sm:text-base leading-[1.52] text-slate-400">
                  Esta etapa comienza cuando cerremos las validaciones y definamos la identidad
                  visual.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
