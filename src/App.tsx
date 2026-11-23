import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ACTIVE_DEFAULT_STUDY } from './data/studiesData';
import { STRATEGY_DOCUMENTS } from './data/strategyData';
import { SectionId } from './types/hub';
import Layout from './components/Layout';
import HomeView from './components/HomeView';
import InterviewsIndexView from './components/InterviewsIndexView';
import StudyDetailView from './components/StudyDetailView';
import JourneysView from './components/JourneysView';
import StrategyView from './components/StrategyView';
import IterationsView from './components/IterationsView';

interface ParsedRoute {
  route: string;
  paramA?: string;
  paramB?: string;
  queryParams: URLSearchParams;
  activeSection: SectionId;
}

/**
 * Maps legacy links to #presentar/* or #conclusiones/6..8
 * while preserving #decisiones/0..6 (and #acuerdos/0..6) for the 3rd tab «Acuerdos pendientes (7)».
 */
function resolveLegacyRedirect(rawHash: string): string | null {
  const cleaned = rawHash.replace(/^#\/?/, '');
  const [pathPart] = cleaned.split('?');
  const [route = '', paramA = '0'] = pathPart.split('/').filter(Boolean);
  const lowerRoute = route.toLowerCase();
  const idx = parseInt(paramA, 10) || 0;

  if (lowerRoute === 'presentar') {
    const mapPres: Record<number, number> = { 0: 0, 1: 3, 2: 4, 3: 0, 4: 0 };
    return `#conclusiones/${mapPres[idx] ?? 0}`;
  }

  if (lowerRoute === 'conclusiones' && !Number.isNaN(parseInt(paramA, 10)) && idx >= 6) {
    const mapOldBeforeLaunch: Record<number, number> = {
      6: 1, // ¿El comprador entiende qué recibirá cuando le ofrecemos “inteligencia”? -> Hallazgo 2 (idx 1)
      7: 0, // ¿Una empresa que quiere alimentar su tablero encontrará la API? -> Hallazgo 1 (idx 0)
      8: 3, // ¿Qué necesita oír una cuenta histórica y qué prueba pide un prospecto nuevo? -> Hallazgo 4 (idx 3)
    };
    return `#conclusiones/${mapOldBeforeLaunch[idx] ?? 0}`;
  }

  return null;
}

function parseHash(rawHash: string): ParsedRoute {
  const cleaned = rawHash.replace(/^#\/?/, '');
  const [pathPart, queryPart = ''] = cleaned.split('?');
  const segments = pathPart.split('/').filter(Boolean);
  const route = (segments[0] || 'inicio').toLowerCase();
  const paramA = segments[1];
  const paramB = segments[2];
  const queryParams = new URLSearchParams(queryPart);

  let activeSection: SectionId = 'inicio';
  if (
    ['entrevistas', 'conclusiones', 'decisiones', 'decision', 'acuerdos', 'presentar'].includes(
      route
    )
  ) {
    activeSection = 'entrevistas';
  } else if (route === 'journey' || route === 'recorridos') {
    activeSection = 'journey';
  } else if (route === 'estrategia') {
    activeSection = 'estrategia';
  } else if (route === 'iteraciones') {
    activeSection = 'iteraciones';
  }

  return { route, paramA, paramB, queryParams, activeSection };
}

function resolveFindingIndex(param?: string): number {
  if (!param) return 0;
  const byId = ACTIVE_DEFAULT_STUDY.findings.find((f) => f.id === param);
  if (byId) return byId.legacyIndex;
  const num = parseInt(param, 10);
  if (!Number.isNaN(num)) {
    return Math.min(ACTIVE_DEFAULT_STUDY.findings.length - 1, Math.max(0, num));
  }
  return 0;
}

function resolveDecisionIndex(param?: string): number {
  if (!param) return 0;
  const byId = ACTIVE_DEFAULT_STUDY.decisions.find((d) => d.id === param);
  if (byId) return byId.legacyIndex;
  const num = parseInt(param, 10);
  if (!Number.isNaN(num)) {
    return Math.min(ACTIVE_DEFAULT_STUDY.decisions.length - 1, Math.max(0, num));
  }
  return 0;
}

function resolveStrategyDocIndex(param?: string): number | null {
  if (param === undefined || param === '') return null;
  const byId = STRATEGY_DOCUMENTS.find((d) => d.id === param);
  if (byId) return byId.legacyIndex;
  const num = parseInt(param, 10);
  if (!Number.isNaN(num) && num >= 0 && num < STRATEGY_DOCUMENTS.length) {
    return num;
  }
  return 0;
}

export default function App() {
  const [hash, setHash] = useState<string>(() => {
    const initial = window.location.hash || '#inicio';
    const redirected = resolveLegacyRedirect(initial);
    if (redirected) {
      window.history.replaceState(null, '', redirected);
      return redirected;
    }
    return initial;
  });

  const [strategySearchQuery, setStrategySearchQuery] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      const currentRaw = window.location.hash || '#inicio';
      const redirected = resolveLegacyRedirect(currentRaw);
      const effectiveHash = redirected || currentRaw;

      if (redirected) {
        window.history.replaceState(null, '', redirected);
      }

      const nextParsed = parseHash(effectiveHash);

      setHash((prevHash) => {
        const prevRoute = parseHash(prevHash).route;
        const nextRoute = nextParsed.route;
        const bothInStudy =
          ['conclusiones', 'decisiones', 'decision', 'acuerdos'].includes(prevRoute) &&
          ['conclusiones', 'decisiones', 'decision', 'acuerdos'].includes(nextRoute);
        if (prevRoute !== nextRoute && !bothInStudy) {
          window.scrollTo({ top: 0, behavior: 'auto' });
        }
        return effectiveHash;
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const parsed = useMemo(() => parseHash(hash), [hash]);
  const isStudyDetail = ['conclusiones', 'decisiones', 'decision', 'acuerdos'].includes(
    parsed.route
  );
  const isDecisionsMode = ['decisiones', 'decision', 'acuerdos'].includes(parsed.route);

  const explicitOriginFindingIdx = useMemo(() => {
    if (parsed.queryParams.has('origen')) {
      const n = parseInt(parsed.queryParams.get('origen') || '', 10);
      if (!Number.isNaN(n)) return n;
    }
    return null;
  }, [parsed.queryParams]);

  return (
    <Layout activeSection={parsed.activeSection}>
      <AnimatePresence mode="wait">
        <motion.div
          key={isStudyDetail ? 'estudio-detalle' : parsed.route}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {parsed.route === 'inicio' && <HomeView />}

          {parsed.route === 'entrevistas' && <InterviewsIndexView />}

          {isStudyDetail && (
            <StudyDetailView
              mode={isDecisionsMode ? 'decisiones' : 'conclusiones'}
              selectedIndex={
                isDecisionsMode
                  ? resolveDecisionIndex(parsed.paramA)
                  : resolveFindingIndex(parsed.paramA)
              }
              originFindingIndex={explicitOriginFindingIdx}
            />
          )}

          {(parsed.route === 'journey' || parsed.route === 'recorridos') && (
            <JourneysView
              brandIndexOrId={parsed.paramA || '0'}
              cutOrStageParam={parsed.paramB}
            />
          )}

          {parsed.route === 'estrategia' && (
            <StrategyView
              selectedDocIndex={resolveStrategyDocIndex(parsed.paramA)}
              searchQuery={strategySearchQuery}
              onSearchChange={setStrategySearchQuery}
            />
          )}

          {parsed.route === 'iteraciones' && <IterationsView />}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
