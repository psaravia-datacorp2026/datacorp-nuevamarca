import React from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  ClipboardCheck,
  HelpCircle,
  Lightbulb,
} from 'lucide-react';
import { ACTIVE_DEFAULT_STUDY } from '../data/studiesData';
import { FindingGroupId } from '../types/hub';
import ActionButton from './ActionButton';
import EvidenceAccordion from './EvidenceAccordion';

interface StudyDetailViewProps {
  mode: 'conclusiones' | 'decisiones';
  selectedIndex: number;
  originFindingIndex?: number | null;
}

const GROUP_STYLE: Record<
  FindingGroupId,
  {
    tabActive: string;
    badge: string;
    icon: React.ComponentType<{ className?: string }>;
  }
> = {
  positivas: {
    tabActive:
      'bg-indigo-600/95 border-indigo-400 text-white shadow-[0_6px_20px_-6px_rgba(99,102,241,0.65)]',
    badge: 'border-emerald-400/40 bg-emerald-500/15 text-emerald-200',
    icon: Lightbulb,
  },
  riesgos: {
    tabActive:
      'bg-amber-600/95 border-amber-400 text-white shadow-[0_6px_20px_-6px_rgba(245,158,11,0.6)]',
    badge: 'border-amber-400/45 bg-amber-500/15 text-amber-200',
    icon: AlertTriangle,
  },
};

/**
 * Detail view of "Jefaturas y referentes internos" (Noviembre 2026):
 * - Three visible tabs in order: «Conclusiones positivas», «Riesgos identificados», «Acuerdos pendientes (7)».
 * - Counter (7) is derived dynamically from `study.decisions.length`.
 * - Removes the previous bottom accordion and «Áreas sugeridas».
 * - In «Acuerdos pendientes (7)»: displays the intro text, 7 short titles on the left,
 *   and a single editorial reading card on the right (without nesting 4 sub-cards inside the card):
 *   question headline, «Qué está en juego», «Cómo resolverlo», «Para qué»,
 *   and the closing single highlighted sentence «Podemos cerrar este acuerdo cuando…».
 * - Bidirectional link: «Ver acuerdo pendiente» inside «Qué falta decidir» opens the 3rd tab
 *   and selects the exact agreement; returning restores the origin finding.
 */
export default function StudyDetailView({
  mode,
  selectedIndex,
  originFindingIndex = null,
}: StudyDetailViewProps) {
  const study = ACTIVE_DEFAULT_STUDY;
  const findings = study.findings;
  const decisions = study.decisions;

  const isDecisionsTab = mode === 'decisiones';

  const safeFindingIdx = Math.min(findings.length - 1, Math.max(0, selectedIndex));
  const safeDecisionIdx = Math.min(decisions.length - 1, Math.max(0, selectedIndex));

  const currentFinding = findings[safeFindingIdx];
  const currentDecision = decisions[safeDecisionIdx];

  const activeGroupId: FindingGroupId = currentFinding?.groupId || 'positivas';
  const groupFindings = findings.filter((f) => f.groupId === activeGroupId);

  // Determine the finding to return to when viewing an agreement:
  // If navigated via `?origen=N`, use finding N; otherwise use the agreement's targetFindingIndex.
  const returnFinding =
    originFindingIndex !== null &&
    originFindingIndex >= 0 &&
    originFindingIndex < findings.length
      ? findings[originFindingIndex]
      : findings[currentDecision?.targetFindingIndex ?? 0] || findings[0];

  return (
    <div className="mx-auto mt-3 w-[min(94%,1370px)]">
      {/* Compact Context Bar: Back link + Study title + Three Visible Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-indigo-400/25 bg-[#0e1a32]/90 px-4 py-2.5 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-2.5">
          <ActionButton variant="tertiary" size="sm" href="#entrevistas">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Entrevistas</span>
          </ActionButton>

          <span className="text-slate-600">/</span>

          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
            <span className="font-semibold text-white">{study.title}</span>
            <span className="rounded-full border border-indigo-400/30 bg-indigo-500/15 px-2.5 py-0.5 text-[11px] font-medium text-indigo-200">
              {study.monthLabel} · {study.categoryLabel}
            </span>
          </div>
        </div>

        {/* Three Visible Tabs in Order: Conclusiones positivas, Riesgos identificados, Acuerdos pendientes (7) */}
        <div
          role="tablist"
          aria-label="Categorías del estudio"
          className="flex flex-wrap items-center gap-2"
        >
          {study.groups.map((grp) => {
            const isCurrentGroup = !isDecisionsTab && grp.id === activeGroupId;
            const style = GROUP_STYLE[grp.id];
            const Icon = style.icon;
            const firstInGroup = findings.find((f) => f.groupId === grp.id);
            const countInGroup = findings.filter((f) => f.groupId === grp.id).length;

            // If we are on the 3rd tab and click back to the group tab of our origin finding, restore that finding
            const tabTargetIndex =
              isDecisionsTab && returnFinding.groupId === grp.id
                ? returnFinding.legacyIndex
                : (firstInGroup?.legacyIndex ?? 0);

            return (
              <a
                key={grp.id}
                role="tab"
                aria-selected={isCurrentGroup}
                href={`#conclusiones/${tabTargetIndex}`}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs sm:text-[13px] font-semibold transition-all duration-150 ${
                  isCurrentGroup
                    ? style.tabActive
                    : 'border-[#304560] bg-[#111f36]/90 text-[#c2d2e8] hover:border-indigo-400/50 hover:text-white'
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span>{grp.label}</span>
                <span className="rounded-full bg-black/25 px-1.5 py-0.2 text-[11px]">
                  {countInGroup}
                </span>
              </a>
            );
          })}

          {/* 3rd Tab: Acuerdos pendientes (7) */}
          <a
            role="tab"
            aria-selected={isDecisionsTab}
            href={
              !isDecisionsTab
                ? `#decisiones/${currentFinding?.primaryAgreementIndex ?? 0}?origen=${safeFindingIdx}`
                : `#decisiones/${safeDecisionIdx}`
            }
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs sm:text-[13px] font-semibold transition-all duration-150 ${
              isDecisionsTab
                ? 'border-sky-400 bg-sky-600/95 text-white shadow-[0_6px_20px_-6px_rgba(14,165,233,0.65)]'
                : 'border-[#304560] bg-[#111f36]/90 text-[#c2d2e8] hover:border-sky-400/50 hover:text-white'
            }`}
          >
            <ClipboardCheck className="h-3.5 w-3.5 shrink-0" />
            <span>Acuerdos pendientes ({decisions.length})</span>
          </a>
        </div>
      </div>

      {/* Intro sentence when on the 3rd Tab: Acuerdos pendientes */}
      {isDecisionsTab && (
        <p className="mt-3.5 mb-0 rounded-xl border border-sky-400/25 bg-[#0d1c33]/85 px-4 py-2.5 text-sm sm:text-[15px] leading-relaxed text-[#d5e3f4]">
          {study.decisionsIntroText}
        </p>
      )}

      {/* Main Two-Column Workspace: Short Titles on Left, Single Reading Card on Right */}
      <div className="mt-4 grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(250px,0.34fr)_1fr]">
        {/* Left Navigation List */}
        <nav
          aria-label={isDecisionsTab ? 'Seleccionar acuerdo pendiente' : 'Seleccionar hallazgo'}
          className="flex gap-2.5 overflow-x-auto pb-1 lg:grid lg:overflow-visible lg:pb-0 dc-matrix-scroll"
        >
          {isDecisionsTab
            ? decisions.map((dec, idx) => {
                const isSelected = dec.legacyIndex === safeDecisionIdx;
                return (
                  <a
                    key={dec.id}
                    href={`#decisiones/${dec.legacyIndex}`}
                    aria-current={isSelected ? 'page' : undefined}
                    className={`flex min-w-[215px] lg:min-w-0 flex-col rounded-xl border p-3.5 text-left transition-all duration-150 ${
                      isSelected
                        ? 'border-sky-400/80 bg-gradient-to-r from-sky-950/95 to-[#152a47] text-white shadow-[inset_3px_0_0_#38bdf8,0_10px_26px_-18px_rgba(56,189,248,0.65)]'
                        : 'border-[#243752] bg-gradient-to-br from-[#16253c]/90 to-[#0d192b]/90 text-[#cbd8e9] hover:border-sky-400/45 hover:text-white'
                    }`}
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-300">
                      Acuerdo {idx + 1} de {decisions.length}
                    </span>
                    <span className="mt-1 text-[15px] font-semibold leading-snug">
                      {dec.shortTitle}
                    </span>
                  </a>
                );
              })
            : groupFindings.map((finding, idxInGroup) => {
                const isSelected = finding.legacyIndex === safeFindingIdx;
                return (
                  <a
                    key={finding.id}
                    href={`#conclusiones/${finding.legacyIndex}`}
                    aria-current={isSelected ? 'page' : undefined}
                    className={`flex min-w-[215px] lg:min-w-0 flex-col rounded-xl border p-3.5 text-left transition-all duration-150 ${
                      isSelected
                        ? 'border-indigo-400/80 bg-gradient-to-r from-indigo-950/95 to-[#152a47] text-white shadow-[inset_3px_0_0_#818cf8,0_10px_26px_-18px_rgba(99,102,241,0.7)]'
                        : 'border-[#243752] bg-gradient-to-br from-[#16253c]/90 to-[#0d192b]/90 text-[#cbd8e9] hover:border-indigo-400/45 hover:text-white'
                    }`}
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-300">
                      {finding.groupLabel} · {idxInGroup + 1}/{groupFindings.length}
                    </span>
                    <span className="mt-1 text-[15px] font-semibold leading-snug">
                      {finding.shortTitle}
                    </span>
                  </a>
                );
              })}
        </nav>

        {/* Right Reading Sheet */}
        <section aria-live="polite" className="min-w-0">
          {!isDecisionsTab && currentFinding ? (
            <article className="dc-glass-card rounded-[24px] p-6 sm:p-8">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                  GROUP_STYLE[currentFinding.groupId].badge
                }`}
              >
                <span>{currentFinding.groupLabel}</span>
              </span>

              {/* Headline that explains the finding */}
              <h1 className="mt-3 text-[clamp(22px,2.5vw,32px)] font-semibold leading-[1.16] tracking-[-0.03em] text-white">
                {currentFinding.title}
              </h1>

              {/* 2-3 sentence paragraph with a single bolded sentence for Pedro to read aloud */}
              <p className="mt-4 text-[15.5px] sm:text-[16.5px] leading-[1.58] text-[#d5e2f2]">
                {currentFinding.bodyLead}{' '}
                <strong className="font-semibold text-white">
                  {currentFinding.highlightedSentence}
                </strong>
                {currentFinding.bodyTail ? ` ${currentFinding.bodyTail}` : ''}
              </p>

              {/* Brief «Qué falta decidir» block + direct link «Ver acuerdo pendiente» to the 3rd tab */}
              {currentFinding.whatToDecide && (
                <div className="mt-5 rounded-2xl border border-[#3c648b] border-l-4 border-l-[#4daaff] bg-gradient-to-r from-[#173558]/95 to-[#152742]/95 p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a8d3ff]">
                      <HelpCircle className="h-4 w-4 text-[#63b3ff]" />
                      <h2>Qué falta decidir</h2>
                    </div>

                    <a
                      href={`#decisiones/${currentFinding.primaryAgreementIndex}?origen=${currentFinding.legacyIndex}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/45 bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-200 transition-colors hover:border-sky-300 hover:bg-sky-500/25 hover:text-white"
                    >
                      <span>Ver acuerdo pendiente</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <p className="mt-2 mb-0 text-[15px] sm:text-base leading-[1.52] text-white">
                    {currentFinding.whatToDecide}
                  </p>
                </div>
              )}

              {/* Single access to verbatim evidence: «Leer respuestas de [nombres]» */}
              <EvidenceAccordion
                key={currentFinding.id}
                evidence={currentFinding.evidence}
                namesLabel={currentFinding.evidenceNamesLabel}
              />
            </article>
          ) : (
            /* 3rd Tab Reading Card: Single Editorial Sheet (No 4 nested cards inside the card) */
            currentDecision && (
              <article className="dc-glass-card rounded-[24px] p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/45 bg-sky-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-sky-200">
                    <span>Acuerdo propuesto · {currentDecision.shortTitle}</span>
                  </span>

                  <a
                    href={`#conclusiones/${returnFinding.legacyIndex}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/35 bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-200 transition-colors hover:border-indigo-300 hover:bg-indigo-500/25 hover:text-white"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Hallazgo de origen: {returnFinding.shortTitle}</span>
                  </a>
                </div>

                {/* Top Question requiring a decision */}
                <h1 className="mt-3.5 text-[clamp(22px,2.5vw,32px)] font-semibold leading-[1.16] tracking-[-0.03em] text-white">
                  {currentDecision.questionHeadline}
                </h1>

                {/* Editorial flow: Qué está en juego, Cómo resolverlo, Para qué (without nesting 4 boxes) */}
                <div className="mt-5 space-y-4 border-t border-white/10 pt-4 text-[15.5px] sm:text-base leading-[1.58] text-[#d5e2f2]">
                  <p className="m-0">
                    <span className="font-semibold text-sky-300">Qué está en juego · </span>
                    {currentDecision.whatIsAtStake}
                  </p>

                  <p className="m-0">
                    <span className="font-semibold text-sky-300">Cómo resolverlo · </span>
                    {currentDecision.howToResolve}
                  </p>

                  <p className="m-0">
                    <span className="font-semibold text-sky-300">Para qué · </span>
                    {currentDecision.whatFor}
                  </p>
                </div>

                {/* Closing Criterion Line: Single Highlighted Sentence «Podemos cerrar este acuerdo cuando…» */}
                <p className="mt-5 mb-0 border-l-3 border-sky-400 pl-4 text-[15.5px] sm:text-[16.5px] leading-[1.55] text-[#d5e2f2]">
                  <strong className="font-semibold text-white">
                    {currentDecision.closingHighlightedSentence}
                  </strong>
                  {currentDecision.closingExtraSentence
                    ? ` ${currentDecision.closingExtraSentence}`
                    : ''}
                </p>

                {/* Optional attribution clarification (e.g. Renato Andrades testimony in Imex) */}
                {currentDecision.attributionNote && (
                  <p className="mt-4 mb-0 text-xs sm:text-[13px] leading-relaxed text-[#acc0d9]">
                    {currentDecision.attributionNote}
                  </p>
                )}

                {/* Original Verbatim Quotes as Evidence */}
                <EvidenceAccordion
                  key={currentDecision.id}
                  evidence={currentDecision.evidence}
                  namesLabel={currentDecision.evidenceNamesLabel}
                />
              </article>
            )
          )}

          {/* Single study-level scope explanation at the foot of the study (no duplicate accordion) */}
          <p className="mt-4 mb-0 px-1 text-xs sm:text-[13px] leading-relaxed text-[#acc0d9]">
            {study.scopeExplanation}
          </p>
        </section>
      </div>
    </div>
  );
}
