import React from 'react';
import { Lock } from 'lucide-react';
import HeroCover from './HeroCover';
import ActionButton from './ActionButton';

/**
 * ITERACIONES: Paused section in slate gray aesthetic if visited directly via URL hash (#iteraciones).
 */
export default function IterationsView() {
  return (
    <div>
      <HeroCover
        eyebrow="Diseño y validación · En pausa"
        title="Iteraciones del sitio web"
        description="Esta etapa comienza cuando cerremos las validaciones y definamos la identidad visual."
        accent="slate"
      />

      <div className="mx-auto mt-5 w-[min(94%,1370px)]">
        <article className="dc-glass-locked rounded-[24px] p-6 sm:p-8">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-500/40 bg-slate-800/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <Lock className="h-3.5 w-3.5 text-slate-400" />
            <span>En pausa</span>
          </div>

          <h2 className="mt-3 text-2xl font-semibold text-slate-200">
            ¿Qué habilita esta etapa?
          </h2>
          <p className="mt-2 max-w-3xl text-[15px] sm:text-base leading-[1.52] text-slate-300">
            El equipo debe cerrar las validaciones pendientes de las entrevistas y contar con el
            nuevo logo y la identidad visual. A partir de ese punto podrá evaluar recorridos,
            contenidos y prototipos del sitio común.
          </p>

          <div className="mt-5 rounded-xl border border-slate-600/50 border-l-4 border-l-slate-400 bg-slate-900/80 p-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Cómo se documentará cada iteración
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-300">
              Registrar la necesidad, la versión del diseño, la tarea probada, quién participó,
              qué ocurrió y qué se decidió cambiar. Vincular la siguiente versión para poder
              reconstruir el aprendizaje.
            </p>
          </div>

          <div className="mt-6">
            <ActionButton variant="secondary" href="#conclusiones/0">
              <span>Ver hallazgos de entrevistas →</span>
            </ActionButton>
          </div>
        </article>
      </div>
    </div>
  );
}
