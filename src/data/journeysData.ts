/**
 * ARCHIVO EDITABLE Y VERSIONABLE: Mapas de Recorridos Digitales (Customer Journey Maps)
 * Ruta: src/data/journeysData.ts
 *
 * Cómo agregar un nuevo corte documental a una marca:
 * 1. Ubica la marca en \`JOURNEY_BRANDS\` ('datasur' o 'imex').
 * 2. Agrega un nuevo objeto \`JourneyCutRecord\` al arreglo \`cuts\` (por ejemplo con \`id: 'datasur-2026-12'\`).
 *    El corte anterior se conserva intacto en el historial y puede consultarse desde el selector de corte.
 * 3. Actualiza \`activeCutId\` si deseas que el nuevo corte sea el predeterminado al abrir Recorridos.
 * 4. Distingue siempre:
 *    - \`performedMonth\`: mes del corte documental.
 *    - \`incorporatedAt\`: fecha de incorporación al hub (YYYY-MM-DD).
 *    - \`measurementPeriod\`: período exacto medido (o nota explícita si no está especificado en la fuente).
 */
import { JourneyBrandRecord } from '../types/hub';

export const JOURNEY_BRANDS: JourneyBrandRecord[] = [
  {
    id: 'datasur',
    legacyIndex: 0,
    brand: 'DataSur',
    domain: 'Datasur.com',
    description: 'Portal LATAM y acceso transaccional a plataforma D-Comex.',
    activeCutId: 'datasur-2026-11',
    cuts: [
      {
        id: 'datasur-2026-11',
        cutKey: '2026-11',
        cutLabel: 'Corte documental · Noviembre 2026',
        performedMonth: 'Noviembre 2026',
        incorporatedAt: '2026-11-23',
        measurementPeriod:
          'Período exacto de medición no especificado en origen (requiere confirmación · corte documental de noviembre de 2026)',
        sourceFile: 'JourneyMap_DataSur.html',
        title: 'Customer Journey Map — Datasur.com (Estado Actual & Matriz de Fricción)',
        archetype: 'Analista Comex / Usuario Recurrente / Lead Cualificado (Tráfico Orgánico y Directo)',
        sourcesIntegrated:
          'Microsoft Clarity (113,469 sesiones), Google Search Console 2026 y Benchmark de Rebranding B2B Comex.',
        methodologyNote:
          'El corte documental (noviembre de 2026) indica cuándo se incorporó el mapa; el período exacto medido en Clarity y GSC requiere confirmación. Los indicadores agregados describen señales de uso observadas (no constituyen un embudo individual con GA4). Las emociones y causas son interpretaciones del análisis.',
        kpis: [
          {
            id: 'kpi-ds-sesiones',
            label: 'Volumen Total Sesiones',
            value: '113,469',
            detail: '51,313 usuarios únicos (51.2% recurrentes)',
            tone: 'cyan',
            nature: 'medicion',
          },
          {
            id: 'kpi-ds-fuga',
            label: 'Fuga Inicial / Clic Atrás',
            value: '10.69%',
            detail: '12,130 sesiones con "Clic atrás rápido"',
            tone: 'red',
            nature: 'medicion',
          },
          {
            id: 'kpi-ds-inactivos',
            label: 'Clics Inactivos (Rage/Dead)',
            value: '6.93%',
            detail: '7,859 sesiones con confusión de interfaz',
            tone: 'orange',
            nature: 'medicion',
          },
          {
            id: 'kpi-ds-js',
            label: 'Error Crítico JavaScript',
            value: '21,248',
            detail: '98.15% por "unexpected identifier \'can\'"',
            tone: 'red',
            nature: 'medicion',
          },
          {
            id: 'kpi-ds-lcp',
            label: 'Enganche Técnico (LCP)',
            value: '3.29s',
            detail: 'Tiempo medio de carga principal (Core Web Vital)',
            tone: 'orange',
            nature: 'medicion',
          },
        ],
        stages: [
          {
            id: 'ds-stage-1',
            order: 1,
            shortTitle: 'Descubrimiento & Búsqueda',
            fullTitle: '1. Descubrimiento & Búsqueda',
          },
          {
            id: 'ds-stage-2',
            order: 2,
            shortTitle: 'Aterrizaje en Home / Landing',
            fullTitle: '2. Aterrizaje en Home / Landing',
          },
          {
            id: 'ds-stage-3',
            order: 3,
            shortTitle: 'Intención de Login / Consulta',
            fullTitle: '3. Intención de Login / Consulta',
          },
          {
            id: 'ds-stage-4',
            order: 4,
            shortTitle: 'Interacción / Formularios',
            fullTitle: '4. Interacción / Formularios',
          },
          {
            id: 'ds-stage-5',
            order: 5,
            shortTitle: 'Conversión & Salida',
            fullTitle: '5. Conversión & Salida',
          },
        ],
        dimensions: [
          {
            id: 'dim-jtbd',
            order: 1,
            title: 'JTBD & Objetivos del Usuario',
            shortLabel: 'Objetivo de la persona',
            natureLabel: 'Interpretación · Tarea buscada',
            category: 'interpretacion',
            sourceHint: 'Síntesis UX & Service Design',
          },
          {
            id: 'dim-touchpoints',
            order: 2,
            title: 'Puntos de Contacto & Tráfico (Clarity)',
            shortLabel: 'Contacto y tráfico',
            natureLabel: 'Medición · Microsoft Clarity',
            category: 'medicion',
            sourceHint: 'Denominador: 113,469 sesiones Clarity',
          },
          {
            id: 'dim-frictions',
            order: 3,
            title: 'Fricciones & Puntos del Dolor (Data Evident)',
            shortLabel: 'Fricciones detectadas',
            natureLabel: 'Medición + Interpretación técnica',
            category: 'friccion',
            sourceHint: 'Señales Clarity / Core Web Vitals',
          },
          {
            id: 'dim-emotion',
            order: 4,
            title: 'Estado Emocional & Mente del Usuario',
            shortLabel: 'Estado emocional',
            natureLabel: 'Interpretación · Hipótesis del análisis',
            category: 'hipotesis-emocional',
            sourceHint: 'Inferencia cualitativa del recorrido',
          },
          {
            id: 'dim-opportunities',
            order: 5,
            title: 'Oportunidades de Rediseño (Para Marca Unificada)',
            shortLabel: 'Oportunidades',
            natureLabel: 'Oportunidad · Propuesta de diseño',
            category: 'oportunidad',
            sourceHint: 'Benchmark Rebranding B2B Comex',
          },
        ],
        cells: {
          'ds-stage-1': {
            'dim-jtbd': {
              stageId: 'ds-stage-1',
              dimensionId: 'dim-jtbd',
              lead: 'Buscar información Comex específica:',
              bullets: [
                'Analizar importadores/exportadores en Chile/Perú.',
                'Encontrar "productos para importar en Perú 2026".',
                'Validar respaldo institucional de Datasur.',
              ],
              rawSummary:
                'Buscar información Comex específica: Analizar importadores/exportadores en Chile/Perú. Encontrar "productos para importar en Perú 2026". Validar respaldo institucional de Datasur.',
            },
            'dim-touchpoints': {
              stageId: 'ds-stage-1',
              dimensionId: 'dim-touchpoints',
              bullets: [
                'Google Orgánico (32,627 ses)',
                'Directo / Referencias Email (4,427 ses)',
                'Bing (4,072 ses)',
                'IA / ChatGPT (369 ses)',
              ],
              rawSummary:
                'Google Orgánico (32,627 ses) · Directo / Referencias Email (4,427 ses) · Bing (4,072 ses) · IA / ChatGPT (369 ses)',
            },
            'dim-frictions': {
              stageId: 'ds-stage-1',
              dimensionId: 'dim-frictions',
              badges: [{ text: 'Fuga SEO', tone: 'red' }],
              bullets: [
                'Búsquedas con intención de plataforma directa caen en contenido institucional genérico.',
                'Keywords desalineadas con la oferta real.',
              ],
              rawSummary:
                'Fuga SEO: Búsquedas con intención de plataforma directa caen en contenido institucional genérico. Keywords desalineadas con la oferta real.',
            },
            'dim-emotion': {
              stageId: 'ds-stage-1',
              dimensionId: 'dim-emotion',
              emotionIcon: '😐',
              emotionLabel: 'Expectante / Enfocado',
              bullets: ['Expectante / Enfocado al iniciar la búsqueda de datos de comercio exterior.'],
              rawSummary: '😐 Expectante / Enfocado',
            },
            'dim-opportunities': {
              stageId: 'ds-stage-1',
              dimensionId: 'dim-opportunities',
              badges: [{ text: 'Arquitectura SEO', tone: 'cyan' }],
              bullets: ['Crear landings transaccionales claras por país y por sector sin dispersión.'],
              rawSummary:
                'Arquitectura SEO: Crear landings transaccionales claras por país y por sector sin dispersión.',
            },
          },
          'ds-stage-2': {
            'dim-jtbd': {
              stageId: 'ds-stage-2',
              dimensionId: 'dim-jtbd',
              lead: 'Entender propuesta de valor:',
              bullets: [
                'Identificar rápido si el sitio ofrece bases de datos o software.',
                'Encontrar enlace directo de ingreso o demostración.',
              ],
              rawSummary:
                'Entender propuesta de valor: Identificar rápido si el sitio ofrece bases de datos o software. Encontrar enlace directo de ingreso o demostración.',
            },
            'dim-touchpoints': {
              stageId: 'ds-stage-2',
              dimensionId: 'dim-touchpoints',
              bullets: [
                'Home (datasur.com): 44,083 ses',
                'Landings Específicas: 2,286 ses',
                'Blogs/Páginas SEO: 1,507 ses',
              ],
              rawSummary:
                'Home (datasur.com): 44,083 ses · Landings Específicas: 2,286 ses · Blogs/Páginas SEO: 1,507 ses',
            },
            'dim-frictions': {
              stageId: 'ds-stage-2',
              dimensionId: 'dim-frictions',
              badges: [
                { text: 'LCP Alto: 3.29s', tone: 'red' },
                { text: 'Clics Inactivos: 6.93%', tone: 'orange' },
              ],
              bullets: [
                'Carga lenta percibida por el usuario.',
                'Elementos visuales engañosos que generan clics muertos sin respuesta.',
              ],
              rawSummary:
                'LCP Alto: 3.29s · Clics Inactivos: 6.93%. Carga lenta percibida por el usuario. Elementos visuales engañosos que generan clics muertos sin respuesta.',
            },
            'dim-emotion': {
              stageId: 'ds-stage-2',
              dimensionId: 'dim-emotion',
              emotionIcon: '🧐',
              emotionLabel: 'Impaciente por lentitud de carga',
              bullets: ['Impaciente por lentitud de carga y elementos sin respuesta al clic.'],
              rawSummary: '🧐 Impaciente por lentitud de carga',
            },
            'dim-opportunities': {
              stageId: 'ds-stage-2',
              dimensionId: 'dim-opportunities',
              badges: [{ text: 'Optimización WPO', tone: 'cyan' }],
              bullets: ['Reducir LCP < 1.8s. Limpiar scripts obsoletos y corregir el error JS del tracker.'],
              rawSummary:
                'Optimización WPO: Reducir LCP < 1.8s. Limpiar scripts obsoletos y corregir el error JS del tracker.',
            },
          },
          'ds-stage-3': {
            'dim-jtbd': {
              stageId: 'ds-stage-3',
              dimensionId: 'dim-jtbd',
              lead: 'Acceder a la Plataforma Motor:',
              bullets: [
                'Redirigirse rápidamente al motor de búsqueda (engines/seekers).',
                'Evitar pasos intermedios institucionales si ya es cliente.',
              ],
              rawSummary:
                'Acceder a la Plataforma Motor: Redirigirse rápidamente al motor de búsqueda (engines/seekers). Evitar pasos intermedios institucionales si ya es cliente.',
            },
            'dim-touchpoints': {
              stageId: 'ds-stage-3',
              dimensionId: 'dim-touchpoints',
              bullets: [
                'Página Login Usuarios: 46,909 ses',
                'Sección d-comex: 3,499 ses',
                'Redirección Motores: 4,857 ses',
              ],
              rawSummary:
                'Página Login Usuarios: 46,909 ses · Sección d-comex: 3,499 ses · Redirección Motores: 4,857 ses',
            },
            'dim-frictions': {
              stageId: 'ds-stage-3',
              dimensionId: 'dim-frictions',
              badges: [{ text: 'Clic Atrás Rápido: 10.69%', tone: 'red' }],
              bullets: [
                '12,130 sesiones hacen bounce inmediato al no encontrar el botón o caja de logueo directa.',
                'Confusión entre portal informativo e ingreso a software.',
              ],
              rawSummary:
                'Clic Atrás Rápido: 10.69%. 12,130 sesiones hacen bounce inmediato al no encontrar el botón o caja de logueo directa. Confusión entre portal informativo e ingreso a software.',
            },
            'dim-emotion': {
              stageId: 'ds-stage-3',
              dimensionId: 'dim-emotion',
              emotionIcon: '😤',
              emotionLabel: 'Frustrado por no hallar acceso directo',
              bullets: ['Frustrado por no hallar acceso directo a su plataforma habitual.'],
              rawSummary: '😤 Frustrado por no hallar acceso directo',
            },
            'dim-opportunities': {
              stageId: 'ds-stage-3',
              dimensionId: 'dim-opportunities',
              badges: [{ text: 'UX Login Integrado', tone: 'cyan' }],
              bullets: [
                'Colocar botón "Acceso a Plataforma" visible y fijo en la cabecera (Header Persistente).',
                'Soportar autenticación unificada (SSO).',
              ],
              rawSummary:
                'UX Login Integrado: Colocar botón "Acceso a Plataforma" visible y fijo en la cabecera (Header Persistente). Soportar autenticación unificada (SSO).',
            },
          },
          'ds-stage-4': {
            'dim-jtbd': {
              stageId: 'ds-stage-4',
              dimensionId: 'dim-jtbd',
              lead: 'Solicitar Cotización / Demo:',
              bullets: [
                'Rellenar formulario de contacto sin fricción.',
                'Consultar planes d-comex o actividades del sector.',
              ],
              rawSummary:
                'Solicitar Cotización / Demo: Rellenar formulario de contacto sin fricción. Consultar planes d-comex o actividades del sector.',
            },
            'dim-touchpoints': {
              stageId: 'ds-stage-4',
              dimensionId: 'dim-touchpoints',
              bullets: [
                'Página de Contacto: 2,151 ses',
                'Formularios enviables: 3,051 ses',
                'Interacciones Mostrar Más: 183 ses',
              ],
              rawSummary:
                'Página de Contacto: 2,151 ses · Formularios enviables: 3,051 ses · Interacciones Mostrar Más: 183 ses',
            },
            'dim-frictions': {
              stageId: 'ds-stage-4',
              dimensionId: 'dim-frictions',
              badges: [{ text: 'Error JS Crítico', tone: 'red' }],
              bullets: [
                "21,248 errores de JS (unexpected identifier 'can') bloquean comportamientos dinámicos e interacciones de formularios.",
              ],
              rawSummary:
                "Error JS Crítico: 21,248 errores de JS (unexpected identifier 'can') bloquean comportamientos dinámicos e interacciones de formularios.",
            },
            'dim-emotion': {
              stageId: 'ds-stage-4',
              dimensionId: 'dim-emotion',
              emotionIcon: '😕',
              emotionLabel: 'Confundido por fallos JS o formularios rígidos',
              bullets: ['Confundido por fallos JS o formularios rígidos al intentar cotizar.'],
              rawSummary: '😕 Confundido por fallos JS o formularios rígidos',
            },
            'dim-opportunities': {
              stageId: 'ds-stage-4',
              dimensionId: 'dim-opportunities',
              badges: [{ text: 'Formularios Inteligentes', tone: 'cyan' }],
              bullets: [
                'Remplazar formularios estáticos por captadores progresivos de leads con calificación instantánea.',
              ],
              rawSummary:
                'Formularios Inteligentes: Remplazar formularios estáticos por captadores progresivos de leads con calificación instantánea.',
            },
          },
          'ds-stage-5': {
            'dim-jtbd': {
              stageId: 'ds-stage-5',
              dimensionId: 'dim-jtbd',
              lead: 'Completar Tarea / Logueo:',
              bullets: ['Acceder al sistema SaaS transaccional o recibir contacto comercial.'],
              rawSummary: 'Completar Tarea / Logueo: Acceder al sistema SaaS transaccional o recibir contacto comercial.',
            },
            'dim-touchpoints': {
              stageId: 'ds-stage-5',
              dimensionId: 'dim-touchpoints',
              bullets: [
                'Clic de Salida (External): 47,238 ses (41.6%)',
                'Login Exitoso: 33,457 ses (29.5%)',
                'Contacto Exitoso: 949 ses (0.84%)',
              ],
              rawSummary:
                'Clic de Salida (External): 47,238 ses (41.6%) · Login Exitoso: 33,457 ses (29.5%) · Contacto Exitoso: 949 ses (0.84%)',
            },
            'dim-frictions': {
              stageId: 'ds-stage-5',
              dimensionId: 'dim-frictions',
              badges: [{ text: 'Baja Tasa Conversión Lead', tone: 'orange' }],
              bullets: [
                'Solo 0.84% llega a completar contacto de ventas.',
                '41.6% abandona el sitio por redirecciones mal encauzadas.',
              ],
              rawSummary:
                'Baja Tasa Conversión Lead: Solo 0.84% llega a completar contacto de ventas. 41.6% abandona el sitio por redirecciones mal encauzadas.',
            },
            'dim-emotion': {
              stageId: 'ds-stage-5',
              dimensionId: 'dim-emotion',
              emotionIcon: '🚪',
              emotionLabel: 'Salida o Alivio si logra ingresar a motores',
              bullets: ['Salida sin convertir o alivio si logra ingresar a los motores de búsqueda.'],
              rawSummary: '🚪 Salida o Alivio si logra ingresar a motores',
            },
            'dim-opportunities': {
              stageId: 'ds-stage-5',
              dimensionId: 'dim-opportunities',
              badges: [{ text: 'Estrategia Absorción Marca', tone: 'cyan' }],
              bullets: [
                'Estructurar navegación por "Solución según Necesidad" (estilo Thomson Reuters / Refinitiv).',
              ],
              rawSummary:
                'Estrategia Absorción Marca: Estructurar navegación por "Solución según Necesidad" (estilo Thomson Reuters / Refinitiv).',
            },
          },
        },
        benchmarkTitle:
          'Alineación Estratégica con Benchmark de Rebranding B2B (Panjiva, Refinitiv, Experian)',
        benchmarks: [
          {
            id: 'bench-ds-1',
            title: 'Absorción Directa (Caso Panjiva → S&P)',
            label: 'Patrón',
            description:
              'Proteger búsquedas web de Datasur enviando al usuario directamente al nuevo módulo de la plataforma sin confundirlo en el login.',
          },
          {
            id: 'bench-ds-2',
            title: 'Nueva Marca Creada (Caso Thomson Reuters → Refinitiv)',
            label: 'Patrón',
            description:
              'Si la nueva marca sombrilla unifica Datasur + IMEX, organizar el menú por "Solución según dolor" en lugar de listar nombres de sistemas técnicos antiguos.',
          },
          {
            id: 'bench-ds-3',
            title: 'Marca Sombrilla / Cross-Selling (Caso Experian Business)',
            label: 'Patrón',
            description:
              'Nombres simples y descriptivos en el menú que faciliten la compra de módulos adicionales o consumo via API.',
          },
        ],
      },
    ],
  },
  {
    id: 'imex',
    legacyIndex: 1,
    brand: 'Imex',
    domain: 'ImexDBusiness.com',
    description: 'Proveedor internacional de bases de datos de comercio exterior y APIs B2B.',
    activeCutId: 'imex-2026-11',
    cuts: [
      {
        id: 'imex-2026-11',
        cutKey: '2026-11',
        cutLabel: 'Corte documental · Noviembre 2026',
        performedMonth: 'Noviembre 2026',
        incorporatedAt: '2026-11-23',
        measurementPeriod:
          'Período exacto de medición no especificado en origen (requiere confirmación · corte documental de noviembre de 2026)',
        sourceFile: 'JourneyMap_ImexDB.html',
        title: 'Customer Journey Map — ImexDBusiness.com (Estado Actual & Matriz de Fricción)',
        archetype: 'Analista Comex Internacional / B2B Trader / Integrador de APIs (Tráfico Global)',
        sourcesIntegrated:
          'Google Search Console IMEX (102,983 impresiones, 1,066 clics), Benchmark de Rebranding B2B e Investigación UX.',
        methodologyNote:
          'El corte documental (noviembre de 2026) indica cuándo se incorporó el mapa; el período exacto medido en Google Search Console requiere confirmación. Las impresiones y clics describen rendimiento en búsqueda orgánica (no sesiones individuales ni embudo GA4). Las emociones son hipótesis del análisis.',
        kpis: [
          {
            id: 'kpi-imex-impresiones',
            label: 'Impresiones Orgánicas',
            value: '102,983',
            detail: 'Fuerte presencia en EE.UU. (54.4k) e India (8.6k)',
            tone: 'cyan',
            nature: 'medicion',
          },
          {
            id: 'kpi-imex-clics',
            label: 'Clics Totales (Búsqueda)',
            value: '1,066',
            detail: '63.5% Clics de Navegación Navigational Brand',
            tone: 'cyan',
            nature: 'medicion',
          },
          {
            id: 'kpi-imex-ctr',
            label: 'CTR Promedio Global',
            value: '1.04%',
            detail: 'Bajo CTR informativo en blogs (0.15% - 0.31%)',
            tone: 'orange',
            nature: 'medicion',
          },
          {
            id: 'kpi-imex-brand',
            label: 'Búsquedas de Marca (Navigational)',
            value: '417 Clics',
            detail: 'Keywords "imexdbusiness" / "imex business" (CTR > 70%)',
            tone: 'emerald',
            nature: 'medicion',
          },
          {
            id: 'kpi-imex-desktop',
            label: 'Dispositivos Predominantes',
            value: '86.0% Desktop',
            detail: 'Ordenador (88.6k impresiones, 767 clics)',
            tone: 'blue',
            nature: 'medicion',
          },
        ],
        stages: [
          {
            id: 'imex-stage-1',
            order: 1,
            shortTitle: 'Búsqueda Global & Intent',
            fullTitle: '1. Búsqueda Global & Intent',
          },
          {
            id: 'imex-stage-2',
            order: 2,
            shortTitle: 'Landing Informativa / Blog',
            fullTitle: '2. Landing Informativa / Blog',
          },
          {
            id: 'imex-stage-3',
            order: 3,
            shortTitle: 'Exploración de Datos por País',
            fullTitle: '3. Exploración de Datos por País',
          },
          {
            id: 'imex-stage-4',
            order: 4,
            shortTitle: 'Evaluación B2B / FAQ',
            fullTitle: '4. Evaluación B2B / FAQ',
          },
          {
            id: 'imex-stage-5',
            order: 5,
            shortTitle: 'Intención de Integración API / Salida',
            fullTitle: '5. Intención de Integración API / Salida',
          },
        ],
        dimensions: [
          {
            id: 'dim-jtbd',
            order: 1,
            title: 'JTBD & Objetivos del Usuario',
            shortLabel: 'Objetivo de la persona',
            natureLabel: 'Interpretación · Tarea buscada',
            category: 'interpretacion',
            sourceHint: 'Síntesis UX & Intención de búsqueda',
          },
          {
            id: 'dim-touchpoints',
            order: 2,
            title: 'Puntos de Contacto & Tráfico (GSC)',
            shortLabel: 'Contacto y tráfico',
            natureLabel: 'Medición · Google Search Console',
            category: 'medicion',
            sourceHint: 'Denominador: 102,983 imp / 1,066 clics GSC',
          },
          {
            id: 'dim-frictions',
            order: 3,
            title: 'Fricciones & Puntos del Dolor (Data Evident)',
            shortLabel: 'Fricciones detectadas',
            natureLabel: 'Medición + Interpretación de fuga',
            category: 'friccion',
            sourceHint: 'Señales GSC y arquitectura de páginas',
          },
          {
            id: 'dim-emotion',
            order: 4,
            title: 'Estado Emocional & Mente del Usuario',
            shortLabel: 'Estado emocional',
            natureLabel: 'Interpretación · Hipótesis del análisis',
            category: 'hipotesis-emocional',
            sourceHint: 'Inferencia cualitativa del recorrido',
          },
          {
            id: 'dim-opportunities',
            order: 5,
            title: 'Oportunidades de Rediseño (Para Marca Unificada)',
            shortLabel: 'Oportunidades',
            natureLabel: 'Oportunidad · Propuesta de diseño',
            category: 'oportunidad',
            sourceHint: 'Benchmark Rebranding B2B e Integración',
          },
        ],
        cells: {
          'imex-stage-1': {
            'dim-jtbd': {
              stageId: 'imex-stage-1',
              dimensionId: 'dim-jtbd',
              lead: 'Consultar Tendencias de Comercio Internacional:',
              bullets: [
                'Buscar rutas de importación "India to USA" o tendencias asiáticas 2026.',
                'Consultar registros de aduana por país (Pakistán, Ghana, India).',
                'Buscar listados de aeropuertos y aerolíneas mundiales.',
              ],
              rawSummary:
                'Consultar Tendencias de Comercio Internacional: Buscar rutas de importación "India to USA" o tendencias asiáticas 2026. Consultar registros de aduana por país (Pakistán, Ghana, India). Buscar listados de aeropuertos y aerolíneas mundiales.',
            },
            'dim-touchpoints': {
              stageId: 'imex-stage-1',
              dimensionId: 'dim-touchpoints',
              bullets: [
                'Google Global Search (EE.UU. 54.4k imp, India 8.6k imp)',
                'Búsqueda Marca Directa (405 clics)',
                'Búsqueda Descriptiva / Long-Tail (616 clics)',
              ],
              rawSummary:
                'Google Global Search (EE.UU. 54.4k imp, India 8.6k imp) · Búsqueda Marca Directa (405 clics) · Búsqueda Descriptiva / Long-Tail (616 clics)',
            },
            'dim-frictions': {
              stageId: 'imex-stage-1',
              dimensionId: 'dim-frictions',
              badges: [{ text: 'CTR Informativo Crítico', tone: 'red' }],
              bullets: [
                '17,857 impresiones en el artículo de exportaciones de Asia generan solo 56 clics (CTR 0.31%).',
                'Snippet de Google desalineado o sin CTA directo.',
              ],
              rawSummary:
                'CTR Informativo Crítico: 17,857 impresiones en el artículo de exportaciones de Asia generan solo 56 clics (CTR 0.31%). Snippet de Google desalineado o sin CTA directo.',
            },
            'dim-emotion': {
              stageId: 'imex-stage-1',
              dimensionId: 'dim-emotion',
              emotionIcon: '🔎',
              emotionLabel: 'Curioso / Búsqueda Específica',
              bullets: ['Curioso / Búsqueda específica de rutas o registros aduaneros globales.'],
              rawSummary: '🔎 Curioso / Búsqueda Específica',
            },
            'dim-opportunities': {
              stageId: 'imex-stage-1',
              dimensionId: 'dim-opportunities',
              badges: [{ text: 'SEO Semántico B2B', tone: 'cyan' }],
              bullets: [
                'Reorientar las meta-descripciones y títulos para enfatizar "Bases de datos B2B y APIs de Comercio Exterior" y elevar CTR.',
              ],
              rawSummary:
                'SEO Semántico B2B: Reorientar las meta-descripciones y títulos para enfatizar "Bases de datos B2B y APIs de Comercio Exterior" y elevar CTR.',
            },
          },
          'imex-stage-2': {
            'dim-jtbd': {
              stageId: 'imex-stage-2',
              dimensionId: 'dim-jtbd',
              lead: 'Consumir Contenido Informativo:',
              bullets: [
                'Validar datos de volumen de carga y estadísticas globales.',
                'Verificar si el sitio ofrece descargas, reportes o acceso a datos brutos.',
              ],
              rawSummary:
                'Consumir Contenido Informativo: Validar datos de volumen de carga y estadísticas globales. Verificar si el sitio ofrece descargas, reportes o acceso a datos brutos.',
            },
            'dim-touchpoints': {
              stageId: 'imex-stage-2',
              dimensionId: 'dim-touchpoints',
              bullets: [
                'Home (/): 677 clics / 2,841 imp (CTR 23.8%)',
                'Blog India to USA: 73 clics / 7,335 imp',
                'Blog Asia Export 2026: 56 clics / 17,857 imp (CTR 0.31%)',
              ],
              rawSummary:
                'Home (/): 677 clics / 2,841 imp (CTR 23.8%) · Blog India to USA: 73 clics / 7,335 imp · Blog Asia Export 2026: 56 clics / 17,857 imp (CTR 0.31%)',
            },
            'dim-frictions': {
              stageId: 'imex-stage-2',
              dimensionId: 'dim-frictions',
              badges: [{ text: 'Tráfico Curioso vs B2B', tone: 'orange' }],
              bullets: [
                'Páginas como /airports/ y /airlines/ atraen alto volumen (14.7k impresiones) pero con intención no cualificada (CTR < 0.22%).',
              ],
              rawSummary:
                'Tráfico Curioso vs B2B: Páginas como /airports/ y /airlines/ atraen alto volumen (14.7k impresiones) pero con intención no cualificada (CTR < 0.22%).',
            },
            'dim-emotion': {
              stageId: 'imex-stage-2',
              dimensionId: 'dim-emotion',
              emotionIcon: '📄',
              emotionLabel: 'Evaluador pasivo de contenido',
              bullets: ['Evaluador pasivo de contenido informativo sin puente hacia producto.'],
              rawSummary: '📄 Evaluador pasivo de contenido',
            },
            'dim-opportunities': {
              stageId: 'imex-stage-2',
              dimensionId: 'dim-opportunities',
              badges: [{ text: 'Lead Magnets en Blogs', tone: 'cyan' }],
              bullets: [
                'Incrustar widgets de vista previa interactiva (Sample Data) dentro de artículos populares como "Asia Export Trends".',
              ],
              rawSummary:
                'Lead Magnets en Blogs: Incrustar widgets de vista previa interactiva (Sample Data) dentro de artículos populares como "Asia Export Trends".',
            },
          },
          'imex-stage-3': {
            'dim-jtbd': {
              stageId: 'imex-stage-3',
              dimensionId: 'dim-jtbd',
              lead: 'Verificar Cobertura de Datos:',
              bullets: [
                'Consultar fichas /country-detail/ (Pakistán, India, Ghana, Chile).',
                'Revisar niveles de detalle (Bill of Lading, manifiestos).',
              ],
              rawSummary:
                'Verificar Cobertura de Datos: Consultar fichas /country-detail/ (Pakistán, India, Ghana, Chile). Revisar niveles de detalle (Bill of Lading, manifiestos).',
            },
            'dim-touchpoints': {
              stageId: 'imex-stage-3',
              dimensionId: 'dim-touchpoints',
              bullets: [
                'Ficha Pakistán: 36 clics / 2,988 imp',
                'Ficha India: 12 clics / 1,591 imp',
                'Ficha Ghana: 12 clics / 724 imp',
              ],
              rawSummary:
                'Ficha Pakistán: 36 clics / 2,988 imp · Ficha India: 12 clics / 1,591 imp · Ficha Ghana: 12 clics / 724 imp',
            },
            'dim-frictions': {
              stageId: 'imex-stage-3',
              dimensionId: 'dim-frictions',
              badges: [{ text: 'Falta de Preview Dinámico', tone: 'red' }],
              bullets: [
                'Las páginas de países (/country-detail/*) son estáticas y no muestran muestras de datos reales en tiempo real (preview de manifiestos).',
              ],
              rawSummary:
                'Falta de Preview Dinámico: Las páginas de países (/country-detail/*) son estáticas y no muestran muestras de datos reales en tiempo real (preview de manifiestos).',
            },
            'dim-emotion': {
              stageId: 'imex-stage-3',
              dimensionId: 'dim-emotion',
              emotionIcon: '🤔',
              emotionLabel: 'Dudoso sobre la actualización del dato',
              bullets: ['Dudoso sobre la actualización, campos disponibles y frescura del dato.'],
              rawSummary: '🤔 Dudoso sobre la actualización del dato',
            },
            'dim-opportunities': {
              stageId: 'imex-stage-3',
              dimensionId: 'dim-opportunities',
              badges: [{ text: 'Fichas de País Interactivas', tone: 'cyan' }],
              bullets: [
                'Transformar /country-detail/ en tableros interactivos con volumen de embarques actualizado semanalmente.',
              ],
              rawSummary:
                'Fichas de País Interactivas: Transformar /country-detail/ en tableros interactivos con volumen de embarques actualizado semanalmente.',
            },
          },
          'imex-stage-4': {
            'dim-jtbd': {
              stageId: 'imex-stage-4',
              dimensionId: 'dim-jtbd',
              lead: 'Evaluar Capacidad Tecnológica:',
              bullets: [
                'Revisar quiénes son (/about-us/) y preguntas frecuentes (/frequent-asked-questions/).',
                'Determinar si la plataforma ofrece acceso vía API o exportación masiva.',
              ],
              rawSummary:
                'Evaluar Capacidad Tecnológica: Revisar quiénes son (/about-us/) y preguntas frecuentes (/frequent-asked-questions/). Determinar si la plataforma ofrece acceso vía API o exportación masiva.',
            },
            'dim-touchpoints': {
              stageId: 'imex-stage-4',
              dimensionId: 'dim-touchpoints',
              bullets: [
                'About Us: 16 clics / 1,202 imp',
                'FAQ: 13 clics / 993 imp',
                'Airlines / Airports: 26 clics / 14.7k imp',
              ],
              rawSummary:
                'About Us: 16 clics / 1,202 imp · FAQ: 13 clics / 993 imp · Airlines / Airports: 26 clics / 14.7k imp',
            },
            'dim-frictions': {
              stageId: 'imex-stage-4',
              dimensionId: 'dim-frictions',
              badges: [{ text: 'Opacidad Comercial', tone: 'orange' }],
              bullets: [
                'Baja navegación hacia /about-us/ y /faq/ (menos de 30 clics combinados).',
                'El usuario no comprende claramente si IMEX vende reportes o infraestructura API.',
              ],
              rawSummary:
                'Opacidad Comercial: Baja navegación hacia /about-us/ y /faq/ (menos de 30 clics combinados). El usuario no comprende claramente si IMEX vende reportes o infraestructura API.',
            },
            'dim-emotion': {
              stageId: 'imex-stage-4',
              dimensionId: 'dim-emotion',
              emotionIcon: '🧐',
              emotionLabel: 'Escéptico sobre la entidad corporativa',
              bullets: ['Escéptico sobre la entidad corporativa y el modelo de entrega técnica.'],
              rawSummary: '🧐 Escéptico sobre la entidad corporativa',
            },
            'dim-opportunities': {
              stageId: 'imex-stage-4',
              dimensionId: 'dim-opportunities',
              badges: [{ text: 'Posicionamiento API-First', tone: 'cyan' }],
              bullets: [
                'Destacar la oferta de APIs B2B con documentación visible, Sandbox interactivo y precios por volumen.',
              ],
              rawSummary:
                'Posicionamiento API-First: Destacar la oferta de APIs B2B con documentación visible, Sandbox interactivo y precios por volumen.',
            },
          },
          'imex-stage-5': {
            'dim-jtbd': {
              stageId: 'imex-stage-5',
              dimensionId: 'dim-jtbd',
              lead: 'Solicitar Cotización B2B / API:',
              bullets: ['Establecer contacto comercial corporativo para compra de datos o API B2B.'],
              rawSummary:
                'Solicitar Cotización B2B / API: Establecer contacto comercial corporativo para compra de datos o API B2B.',
            },
            'dim-touchpoints': {
              stageId: 'imex-stage-5',
              dimensionId: 'dim-touchpoints',
              bullets: [
                'Formulario de Contacto / API Request: Sin rastreo transaccional directo.',
                'Fuga por Falta de Call To Action: Abandono masivo en artículos SEO.',
              ],
              rawSummary:
                'Formulario de Contacto / API Request: Sin rastreo transaccional directo · Fuga por Falta de Call To Action: Abandono masivo en artículos SEO.',
            },
            'dim-frictions': {
              stageId: 'imex-stage-5',
              dimensionId: 'dim-frictions',
              badges: [{ text: 'Sin Embudo Conversional', tone: 'red' }],
              bullets: [
                'No hay botones claros de "Prueba de API" o "Solicitar Muestra de Datos" en las páginas de alto tráfico SEO.',
              ],
              rawSummary:
                'Sin Embudo Conversional: No hay botones claros de "Prueba de API" o "Solicitar Muestra de Datos" en las páginas de alto tráfico SEO.',
            },
            'dim-emotion': {
              stageId: 'imex-stage-5',
              dimensionId: 'dim-emotion',
              emotionIcon: '🚪',
              emotionLabel: 'Frustrado y Salida sin Convertir',
              bullets: ['Frustrado y salida sin convertir al no encontrar acceso a muestra o sandbox.'],
              rawSummary: '🚪 Frustrado y Salida sin Convertir',
            },
            'dim-opportunities': {
              stageId: 'imex-stage-5',
              dimensionId: 'dim-opportunities',
              badges: [{ text: 'Cross-Selling Datasur', tone: 'cyan' }],
              bullets: [
                'Aplicar el patrón Experian Business: Recomendar herramientas visuales de Datlas o datos de Datasur en consultas globales.',
              ],
              rawSummary:
                'Cross-Selling Datasur: Aplicar el patrón Experian Business: Recomendar herramientas visuales de Datlas o datos de Datasur en consultas globales.',
            },
          },
        },
        benchmarkTitle:
          'Estrategia de Integración en la Nueva Arquitectura Unificada (Datlas / Marca Sombrilla)',
        benchmarks: [
          {
            id: 'bench-imex-1',
            title: 'Estructura de Navegación "Solución por Dolor"',
            label: 'Alineación Benchmark',
            description:
              'Remplazar nombres de subsistemas técnicos aislados por categorías claras como "Datos de Importación/Exportación Global", "APIs B2B para Empresas" e "Inteligencia de Mercado".',
          },
          {
            id: 'bench-imex-2',
            title: 'Captura & Conversión de Tráfico Orgánico Internacional',
            label: 'Redirección Directa',
            description:
              'Canalizar las impresiones globales de IMEX (EE.UU., India, Pakistán, Colombia) hacia la nueva plataforma con un mensaje claro: "IMEX, a Datlas Company" o "Powered by Datlas".',
          },
          {
            id: 'bench-imex-3',
            title: 'Cross-Selling de Módulos (Datasur + IMEX)',
            label: 'Sinergia de Datos',
            description:
              'Ofrecer a los usuarios de Datasur (foco LATAM) la posibilidad de ampliar sus coberturas con la API global de IMEX directamente en la misma interfaz de trabajo.',
          },
        ],
      },
    ],
  },
];
