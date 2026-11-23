import React, { useMemo } from 'react';
import { ArrowRight, Calendar, Lock, MessageSquareQuote } from 'lucide-react';
import { STUDIES_DATA } from '../data/studiesData';
import { StudyRecord } from '../types/hub';
import HeroCover from './HeroCover';
import ActionButton from './ActionButton';

/**
 * 2. ENTREVISTAS · Una sola entrada al estudio
 * - Keeps grouping «Noviembre 2026» ordered from newest to oldest.
 * - Card «Jefaturas y referentes internos» shows «11 entrevistas internas» only once,
 *   the concise summary, and a single CTA «Ver hallazgos» (removes metadata table and triple buttons).
 * - Keeps future customer interviews card disabled.
 */
export default function InterviewsIndexView() {
  const groupedMonths = useMemo(() => {
    const map = new Map<string, { monthKey: string; monthLabel: string; studies: StudyRecord[] }>();
    for (const study of STUDIES_DATA) {
      const existing = map.get(study.monthKey);
      if (existing) {
        existing.studies.push(study);
      } else {
        map.set(study.monthKey, {
          monthKey: study.monthKey,
          monthLabel: study.monthLabel,
          studies: [study],
        });
      }
    }
    return Array.from(map.values()).sort((a, b) => b.monthKey.localeCompare(a.monthKey));
  }, []);

  return (
    <div>
      <HeroCover
        eyebrow="Archivo de investigación"
        title="Entrevistas con los equipos"
        description="Revisa qué oportunidades comerciales y riesgos operativos identificaron las áreas internas frente a la unificación de DataSur, Imex y Datlas."
        accent="indigo"
      />

      <div className="mx-auto mt-6 w-[min(94%,1370px)] space-y-8">
        {groupedMonths.map((group) => (
          <section key={group.monthKey} aria-labelledby={`month-${group.monthKey}`}>
            <div className="mb-4 flex items-center gap-2.5 border-b border-indigo-400/20 pb-2.5">
              <Calendar className="h-5 w-5 text-indigo-400" />
              <h2
                id={`month-${group.monthKey}`}
                className="text-xl font-semibold tracking-tight text-white"
              >
                {group.monthLabel}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {group.studies.map((study) => {
                if (study.status === 'upcoming') {
                  return (
                    <article
                      key={study.id}
                      aria-disabled="true"
                      className="dc-glass-locked flex flex-col justify-between rounded-[22px] p-6 sm:p-7 select-none"
                    >
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-600/50 bg-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-300">
                          <Lock className="h-3.5 w-3.5 text-slate-400" />
                          <span>{study.categoryLabel}</span>
                        </span>

                        <h3 className="mt-3.5 text-2xl font-semibold tracking-tight text-slate-300">
                          {study.title}
                        </h3>
                        <p className="mt-2 text-[15px] sm:text-base leading-[1.52] text-slate-400">
                          {study.summary}
                        </p>
                      </div>
                    </article>
                  );
                }

                return (
                  <article
                    key={study.id}
                    className="dc-glass-card relative flex flex-col justify-between overflow-hidden rounded-[22px] border-indigo-400/35 p-6 sm:p-7"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-400 to-indigo-400" />

                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/40 bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-200">
                        <MessageSquareQuote className="h-3.5 w-3.5 text-indigo-300" />
                        <span>11 entrevistas internas</span>
                      </span>

                      <h3 className="mt-3.5 text-2xl font-semibold tracking-tight text-white">
                        {study.title}
                      </h3>
                      <p className="mt-2 text-[15px] sm:text-base leading-[1.52] text-[#d5e1f0]">
                        {study.summary}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-white/10 pt-4">
                      <ActionButton variant="primary" href="#conclusiones/0">
                        <span>Ver hallazgos</span>
                        <ArrowRight className="h-4 w-4" />
                      </ActionButton>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
