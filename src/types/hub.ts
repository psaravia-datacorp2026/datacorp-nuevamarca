export type SectionId = 'inicio' | 'entrevistas' | 'journey' | 'estrategia' | 'iteraciones';

export type FindingGroupId = 'positivas' | 'riesgos';

export interface EvidenceRecord {
  id: string;
  sourceId: string;
  participantName: string;
  shortName: string;
  participantRole: string;
  timestamp: string;
  question: string;
  inferred: boolean;
  quote: string;
  contextAnswer: string;
}

export interface FindingRecord {
  id: string;
  legacyIndex: number;
  groupId: FindingGroupId;
  groupLabel: string;
  shortTitle: string; // Short title for the left navigation list
  title: string; // Concrete headline on the right reading sheet
  bodyLead: string; // First 1-2 sentences of the paragraph
  highlightedSentence: string; // Single bold sentence for Pedro to read aloud
  bodyTail?: string; // Optional closing sentence
  whatToDecide: string; // Two sentences: open choice + evidence/test that helps resolve it
  primaryAgreementId: string;
  primaryAgreementIndex: number;
  primaryAgreementTitle: string;
  evidenceNamesLabel: string; // e.g. "Rodolfo y Rocío"
  evidence: EvidenceRecord[];
}

export interface DecisionRecord {
  id: string;
  legacyIndex: number;
  shortTitle: string; // Short title in the left list (e.g. "Imex y sus proveedores de datos")
  questionHeadline: string; // Top question requiring a decision
  whatIsAtStake: string; // "Qué está en juego"
  howToResolve: string; // "Cómo resolverlo"
  whatFor: string; // "Para qué"
  closingHighlightedSentence: string; // Single highlighted sentence: "Podemos cerrar este acuerdo cuando…"
  closingExtraSentence?: string; // Optional follow-up sentence not bolded
  attributionNote?: string; // Optional attribution clarification (e.g. Renato Andrades note)
  targetFindingId: string;
  targetFindingIndex: number;
  targetFindingShortTitle: string;
  evidenceNamesLabel: string;
  evidence: EvidenceRecord[];
}

export interface StudyRecord {
  id: string;
  monthKey: string; // YYYY-MM e.g. '2026-11'
  monthLabel: string; // e.g. 'Noviembre 2026'
  performedMonth: string; // Mes de realización
  incorporatedAt: string; // Fecha de incorporación (YYYY-MM-DD)
  measurementPeriod: string; // Período de medición / levantamiento
  scopeExplanation: string; // Explica el alcance interno de las entrevistas una vez en el estudio
  decisionsIntroText: string; // Texto de entrada de la tercera pestaña Acuerdos pendientes
  categoryLabel: string;
  title: string;
  summary: string;
  participantsCount?: number;
  status: 'active' | 'upcoming';
  upcomingNote?: string;
  groups: { id: FindingGroupId; label: string; description: string }[];
  findings: FindingRecord[];
  decisions: DecisionRecord[];
}

export type DimensionCategory =
  | 'interpretacion'
  | 'medicion'
  | 'friccion'
  | 'hipotesis-emocional'
  | 'oportunidad';

export interface JourneyKpiRecord {
  id: string;
  label: string;
  value: string;
  detail: string;
  tone: 'cyan' | 'red' | 'orange' | 'emerald' | 'blue';
  nature: 'medicion' | 'indicador';
}

export interface JourneyCellBadge {
  text: string;
  tone: 'red' | 'orange' | 'emerald' | 'cyan' | 'purple';
}

export interface JourneyCellRecord {
  stageId: string;
  dimensionId: string;
  lead?: string;
  badges?: JourneyCellBadge[];
  bullets: string[];
  emotionIcon?: string;
  emotionLabel?: string;
  rawSummary: string;
}

export interface JourneyStageRecord {
  id: string;
  order: number;
  shortTitle: string;
  fullTitle: string;
}

export interface JourneyDimensionRecord {
  id: string;
  order: number;
  title: string;
  shortLabel: string;
  natureLabel: string;
  category: DimensionCategory;
  sourceHint: string;
}

export interface JourneyBenchmarkItem {
  id: string;
  title: string;
  label: string;
  description: string;
}

export interface JourneyCutRecord {
  id: string;
  cutKey: string;
  cutLabel: string;
  performedMonth: string;
  incorporatedAt: string;
  measurementPeriod: string;
  sourceFile: string;
  title: string;
  archetype: string;
  sourcesIntegrated: string;
  methodologyNote: string;
  kpis: JourneyKpiRecord[];
  stages: JourneyStageRecord[];
  dimensions: JourneyDimensionRecord[];
  cells: Record<string, Record<string, JourneyCellRecord>>;
  benchmarkTitle: string;
  benchmarks: JourneyBenchmarkItem[];
}

export interface JourneyBrandRecord {
  id: 'datasur' | 'imex';
  legacyIndex: number;
  brand: string;
  domain: string;
  description: string;
  activeCutId: string;
  cuts: JourneyCutRecord[];
}

export type StrategyBlockType = 'h' | 'p' | 't';

export type StrategyBlock =
  | ['h', string]
  | ['p', string]
  | ['t', string[][]];

export interface StrategyDocumentRecord {
  id: string;
  legacyIndex: number;
  group: string;
  title: string;
  source: string;
  incorporatedAt: string;
  blocks: StrategyBlock[];
}
