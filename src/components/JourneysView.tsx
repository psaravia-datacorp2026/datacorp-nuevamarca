import React, { useMemo } from 'react';
import { Layers } from 'lucide-react';
import { JOURNEY_BRANDS } from '../data/journeysData';
import {
  JourneyBrandRecord,
  JourneyCellBadge,
  JourneyCutRecord,
  JourneyDimensionRecord,
  JourneyKpiRecord,
} from '../types/hub';

interface JourneysViewProps {
  brandIndexOrId?: string;
  cutOrStageParam?: string;
}

const KPI_VALUE_COLORS: Record<JourneyKpiRecord['tone'], string> = {
  cyan: 'text-[#38bdf8]',
  red: 'text-[#f87171]',
  orange: 'text-[#fb923c]',
  emerald: 'text-[#4ade80]',
  blue: 'text-[#60a5fa]',
};

const BADGE_STYLES: Record<JourneyCellBadge['tone'], string> = {
  red: 'border-[#f87171] bg-[#f87171]/20 text-[#f87171]',
  orange: 'border-[#fb923c] bg-[#fb923c]/20 text-[#fb923c]',
  emerald: 'border-[#4ade80] bg-[#4ade80]/20 text-[#4ade80]',
  cyan: 'border-[#38bdf8] bg-[#38bdf8]/20 text-[#7dd3fc]',
  purple: 'border-[#c084fc] bg-[#c084fc]/20 text-[#d8b4fe]',
};

const DIMENSION_NATURE_BADGE: Record<JourneyDimensionRecord['category'], string> = {
  interpretacion: 'border-sky-400/35 bg-sky-500/15 text-sky-200',
  medicion: 'border-cyan-400/45 bg-cyan-500/20 text-cyan-200',
  friccion: 'border-amber-400/45 bg-amber-500/15 text-amber-200',
  'hipotesis-emocional': 'border-indigo-400/35 bg-indigo-500/15 text-indigo-200',
  oportunidad: 'border-teal-400/45 bg-teal-500/15 text-teal-200',
};

/**
 * Highlights numbers, percentages, session/click/impression counts, and JS error snippets inside cell bullets,
 * matching the `.metric-highlight` appearance in the reference capture «Customer Journey Map — Datasur.com».
 */
function renderHighlightedBullet(text: string): React.ReactNode {
  const tokenRegex =
    /(\b\d[\d,.]*(?:k|%|\s*ses(?:iones)?|\s*clics|\s*imp(?:resiones)?|\s*errores de JS|s\b)|\bCTR\s*(?:[<>]\s*)?\d[\d,.]*%|<\s*\d[\d,.]*s\b|unexpected identifier 'can'|\/country-detail\/\*?|\/about-us\/|\/frequent-asked-questions\/|\/faq\/|\/airports\/|\/airlines\/)/gi;

  const parts = text.split(tokenRegex);
  return parts.map((part, idx) => {
    if (!part) return null;
    if (tokenRegex.test(part)) {
      tokenRegex.lastIndex = 0;
      const isCodeOrPath =
        part.startsWith('/') || part.toLowerCase().includes('unexpected identifier');
      if (isCodeOrPath) {
        return (
          <code
            key={idx}
            className="rounded bg-white/10 px-1 py-0.5 font-mono text-[11px] text-cyan-200"
          >
            {part}
          </code>
        );
      }
      return (
        <span key={idx} className="font-mono font-bold text-[#fb923c]">
          {part}
        </span>
      );
    }
    tokenRegex.lastIndex = 0;
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}

/**
 * 4. RECORRIDOS · La matriz es la navegación
 * - Keeps the complete horizontal matrix, its 5 stages, KPIs, DataSur/Imex selector,
 *   sticky stage headers, and sticky first column.
 * - Removes prev/next buttons, column selectors, step counters, and any duplicate phase navigation bar.
 * - Matrix is navigated natively via mouse, trackpad, touch, and keyboard horizontal scrolling.
 * - Replaces the separate methodological notes box with a discreet line next to the KPIs
 *   stating source, cut, incorporation month vs measurement period, and labeling emotions/inferred causes as hypotheses.
 */
export default function JourneysView({
  brandIndexOrId = '0',
  cutOrStageParam,
}: JourneysViewProps) {
  const selectedBrand: JourneyBrandRecord = useMemo(() => {
    const byId = JOURNEY_BRANDS.find(
      (b) => b.id.toLowerCase() === String(brandIndexOrId).toLowerCase()
    );
    if (byId) return byId;
    const num = Number(brandIndexOrId);
    if (!Number.isNaN(num) && JOURNEY_BRANDS[num]) {
      return JOURNEY_BRANDS[num];
    }
    return JOURNEY_BRANDS[0];
  }, [brandIndexOrId]);

  const selectedCut: JourneyCutRecord = useMemo(() => {
    if (cutOrStageParam) {
      const foundCut = selectedBrand.cuts.find((c) => c.id === cutOrStageParam);
      if (foundCut) return foundCut;
    }
    return (
      selectedBrand.cuts.find((c) => c.id === selectedBrand.activeCutId) ||
      selectedBrand.cuts[0]
    );
  }, [selectedBrand, cutOrStageParam]);

  return (
    <div className="mx-auto mt-3 w-[min(94%,1370px)]">
      {/* Work Header: Title, Brand Selector, Archetype, Sources, KPIs, and Discreet Source/Cut Line */}
      <section className="rounded-2xl border border-slate-700/80 bg-[#0d1629]/95 px-4 py-3.5 sm:px-6 sm:py-4 shadow-lg">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-700/80 pb-3">
          <div className="min-w-0 flex-1">
            <h1 className="text-[clamp(18px,2vw,25px)] font-bold leading-snug tracking-tight text-[#38bdf8]">
              {selectedCut.title}
            </h1>
            <div className="mt-1.5 space-y-0.5 text-xs sm:text-[13px] text-[#94a3b8]">
              <p className="m-0">
                <strong className="text-[#e2e8f0]">Arquetipo Evaluado:</strong>{' '}
                {selectedCut.archetype}
              </p>
              <p className="m-0">
                <strong className="text-[#e2e8f0]">Fuentes de Datos Integradas:</strong>{' '}
                {selectedCut.sourcesIntegrated}
              </p>
            </div>
          </div>

          {/* Brand Selector: DataSur / Imex */}
          <div
            role="group"
            aria-label="Selector de marca del recorrido"
            className="inline-flex rounded-full border border-cyan-500/35 bg-[#091221] p-1"
          >
            {JOURNEY_BRANDS.map((b) => {
              const isActive = b.id === selectedBrand.id;
              return (
                <a
                  key={b.id}
                  href={`#journey/${b.legacyIndex}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-full px-3.5 py-1 text-xs sm:text-[13px] font-semibold transition-all ${
                    isActive
                      ? 'bg-[#0284c7] text-white shadow-[0_0_16px_rgba(56,189,248,0.45)]'
                      : 'text-[#94a3b8] hover:text-white'
                  }`}
                >
                  {b.brand} ({b.domain})
                </a>
              );
            })}
          </div>
        </div>

        {/* Compact KPI Strip */}
        <div
          aria-label={`Indicadores de ${selectedBrand.brand}`}
          className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5"
        >
          {selectedCut.kpis.map((kpi) => (
            <article
              key={kpi.id}
              className="rounded-xl border border-[#334155] bg-[#1e293b]/95 px-3.5 py-2.5 shadow-sm"
            >
              <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">
                {kpi.label}
              </span>
              <div
                className={`mt-1 text-lg sm:text-xl font-bold tracking-tight ${
                  KPI_VALUE_COLORS[kpi.tone]
                }`}
              >
                {kpi.value}
              </div>
              <div className="mt-0.5 text-[11px] leading-snug text-[#94a3b8]">{kpi.detail}</div>
            </article>
          ))}
        </div>

        {/* Discreet line next to indicators with source, documentary cut, measurement period distinction, and hypothesis label */}
        <p className="mt-2.5 mb-0 text-[11.5px] leading-relaxed text-[#94a3b8]">
          <strong className="text-slate-300">Fuente:</strong> {selectedCut.sourceFile} ·{' '}
          <strong className="text-slate-300">Corte incorporado:</strong> noviembre de 2026 (período
          exacto de medición no especificado en origen) · Las emociones y causas inferidas se
          etiquetan como hipótesis del análisis.
        </p>
      </section>

      {/* CONTINUOUS SEMANTIC HORIZONTAL MATRIX (Native Scroll & Accessible Keyboard Focus) */}
      <div
        tabIndex={0}
        role="region"
        aria-label={`Matriz horizontal del recorrido digital de ${selectedBrand.brand} (${selectedBrand.domain}): cinco etapas por cinco dimensiones`}
        className="dc-matrix-scroll relative mt-3 max-h-[75vh] w-full overflow-x-auto overflow-y-auto rounded-2xl border border-[#2b3f5c] bg-[#0b1325] pb-2 shadow-2xl"
      >
        <table className="w-max min-w-full border-separate border-spacing-[8px] text-left">
          <thead>
            <tr>
              {/* Top-Left Sticky Corner */}
              <th
                scope="col"
                className="sticky top-0 left-0 z-40 w-[116px] min-w-[116px] max-w-[116px] sm:w-[188px] sm:min-w-[188px] sm:max-w-[188px] rounded-lg border border-[#263852] bg-[#0b1325] px-2.5 py-3 text-xs sm:text-[13px] font-bold text-white shadow-[4px_0_12px_rgba(2,6,23,0.65)]"
              >
                Etapa / Fases
              </th>

              {/* 5 Sticky Stage Column Headers in Cyan */}
              {selectedCut.stages.map((stage) => (
                <th
                  key={stage.id}
                  scope="col"
                  className="sticky top-0 z-30 w-[232px] min-w-[232px] sm:w-[278px] sm:min-w-[278px] rounded-lg border border-[#334155] border-b-[3px] border-b-[#38bdf8] bg-[#1e293b] px-3 py-3 text-center text-xs sm:text-[14px] font-bold text-[#38bdf8]"
                >
                  {stage.fullTitle}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {selectedCut.dimensions.map((dimension) => (
              <tr key={dimension.id} className="align-top">
                {/* Sticky Left Row Header: Dimension Title + Nature Badge */}
                <th
                  scope="row"
                  className="sticky left-0 z-20 w-[116px] min-w-[116px] max-w-[116px] sm:w-[188px] sm:min-w-[188px] sm:max-w-[188px] rounded-lg border border-[#293d5a] border-l-4 border-l-[#38bdf8] bg-[#141e33] p-2.5 sm:p-3.5 text-left align-middle shadow-[6px_0_14px_rgba(2,6,23,0.75)]"
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs sm:text-[13px] font-bold leading-snug text-[#f8fafc]">
                      {dimension.title}
                    </span>
                    <span
                      className={`inline-block w-fit rounded border px-1.5 py-0.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide ${
                        DIMENSION_NATURE_BADGE[dimension.category]
                      }`}
                    >
                      {dimension.natureLabel}
                    </span>
                  </div>
                </th>

                {/* 5 Stage Cells for this Dimension Row */}
                {selectedCut.stages.map((stage) => {
                  const cell = selectedCut.cells[stage.id]?.[dimension.id];
                  if (!cell) return <td key={stage.id} />;

                  return (
                    <td
                      key={`${stage.id}-${dimension.id}`}
                      className="w-[232px] min-w-[232px] sm:w-[278px] sm:min-w-[278px] rounded-lg border border-[#334155] bg-[#1e293b]/95 p-3 text-xs leading-relaxed transition-colors hover:border-cyan-500/45"
                    >
                      {cell.emotionIcon ? (
                        <div className="flex items-center gap-2 font-medium text-[#f8fafc]">
                          <span className="text-lg" aria-hidden="true">
                            {cell.emotionIcon}
                          </span>
                          <span>{cell.emotionLabel}</span>
                        </div>
                      ) : (
                        <div className="flex h-full flex-col justify-between gap-2">
                          <div>
                            {(cell.lead || (cell.badges && cell.badges.length > 0)) && (
                              <div className="flex flex-wrap items-center gap-1">
                                {cell.lead && (
                                  <strong className="block text-[12px] font-bold text-white">
                                    {cell.lead}
                                  </strong>
                                )}
                                {cell.badges &&
                                  cell.badges.map((badge, bIdx) => (
                                    <span
                                      key={bIdx}
                                      className={`inline-block rounded border px-1.5 py-0.5 text-[10px] font-bold ${
                                        BADGE_STYLES[badge.tone]
                                      }`}
                                    >
                                      {badge.text}
                                    </span>
                                  ))}
                              </div>
                            )}

                            <ul className="mt-1.5 m-0 list-disc space-y-1.5 pl-4 text-[#f1f5f9]">
                              {cell.bullets.map((bullet, idx) => (
                                <li key={idx} className="leading-[1.45]">
                                  {renderHighlightedBullet(bullet)}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Strategic Benchmark Alignment Section from Original JourneyMap HTML */}
      <section className="mt-4 rounded-2xl border border-[#334155] bg-[#1e293b]/90 p-4 sm:p-5">
        <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#38bdf8]">
          <Layers className="h-4 w-4 shrink-0 text-cyan-400" />
          <h2>{selectedCut.benchmarkTitle}</h2>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
          {selectedCut.benchmarks.map((bench) => (
            <article
              key={bench.id}
              className="rounded-xl border border-[#334155] bg-[#0f172a] p-3.5 text-xs leading-relaxed"
            >
              <h3 className="font-bold text-[#38bdf8]">{bench.title}</h3>
              <p className="mt-1.5 m-0 text-[#cbd5e1]">
                <strong className="text-white">{bench.label}:</strong> {bench.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
