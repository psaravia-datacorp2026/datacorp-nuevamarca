/**
 * ARCHIVO EDITABLE Y VERSIONABLE: Documentación de Estrategia y Planificación
 * Ruta: src/data/strategyData.ts
 *
 * Cómo agregar o editar un documento estratégico:
 * 1. Mantén el campo `id` estable y único (ej. 'doc-30-nuevo-tema').
 * 2. Especifica `group` (categoría lateral), `title`, `source` (archivo de origen) e `incorporatedAt`.
 * 3. En `blocks`, usa tuplas:
 *    - ['h', 'Subtítulo de sección']
 *    - ['p', 'Párrafo de contenido']
 *    - ['t', [['Encabezado 1', 'Encabezado 2'], ['Celda 1', 'Celda 2']]]
 */
import { StrategyDocumentRecord } from '../types/hub';

export const STRATEGY_DOCUMENTS: StrategyDocumentRecord[] = [
  {
    "id": "doc-00-estrategia-arquitectura-de-marca",
    "legacyIndex": 0,
    "group": "Estrategia",
    "title": "Arquitectura de marca",
    "source": "Arquitectura de marca.docx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "h",
        "Arquitectura de marca"
      ],
      [
        "p",
        "La propuesta consiste en posicionar a Datacorp como una compañía global de inteligencia, datos y tecnología para los negocios internacionales, integrando bajo una sola identidad corporativa todos los productos, servicios y capacidades que actualmente desarrollan Datasur, IMEX y Datlas."
      ],
      [
        "p",
        "La decisión de trabajar con una marca unificada implica que no construiremos diferentes divisiones comerciales con identidades propias. En cambio, tendremos una marca central, una comunicación coherente y una cartera de soluciones segmentada según las necesidades de cada tipo de cliente."
      ],
      [
        "p",
        "Cartera de Soluciones"
      ],
      [
        "p",
        "Inteligencia comercial: Plataforma D-Comex, reportes y estudio de mercados"
      ],
      [
        "p",
        "Datos comerciales: Bases de datos, Data Feeds y API"
      ],
      [
        "p",
        "Integraciones: conectividad, integración de información y soluciones a medida"
      ],
      [
        "p",
        "Plataformas: White Label y D-Comex"
      ],
      [
        "p",
        "Principios de arquitectura:"
      ],
      [
        "p",
        "Basado en la conformación de una sola marca, se proponen los siguientes puntos:"
      ],
      [
        "p",
        "Presencia en todos los puntos de contacto."
      ],
      [
        "p",
        "Los productos tendrán nombres propios"
      ],
      [
        "p",
        "No se crearán identidades visuales independientes para cada línea de servicio."
      ],
      [
        "p",
        "La experiencia comercial y digital será consistente en todos los mercados."
      ],
      [
        "p",
        "Las marcas anteriores se retirarán una vez finalizada la transición, según el periodo a definir."
      ],
      [
        "p",
        "No se trata de eliminar el valor acumulado por estas marcas, sino de transferirlo hacia un activo corporativo de mayor alcance. Logrando comunicar la continuidad de servicios, equipos, plataformas y relación con la cartera de clientes."
      ],
      [
        "h",
        "Posicionamiento estratégico de Datacorp"
      ],
      [
        "p",
        "Se propone presentar a la marca y que el eje de la creación de este sea: “ Más inteligencia, datos y tecnología para conectar empresas con oportunidades globales.”"
      ],
      [
        "p",
        "Con esto, se busca ser una compañía global que transforma información comercial en inteligencia accionable, proporcionando datos, tecnología y soluciones digitales que permitan a las organizaciones comprender mercados, identificar oportunidades y tomar mejores decisiones de negocio, logrando posicionarse mejor en el mercado."
      ],
      [
        "h",
        "Propuesta de valor"
      ],
      [
        "p",
        "La nueva marca debe comunicar tres beneficios centrales:"
      ],
      [
        "t",
        [
          [
            "Beneficio",
            "Qué entrega al cliente"
          ],
          [
            "Conocimiento",
            "Comprensión de mercados, competidores y oportunidades comerciales."
          ],
          [
            "Acceso",
            "Información comercial estructurada, histórica y actualizada."
          ],
          [
            "Capacidad tecnológica",
            "Herramientas, integraciones y plataformas adaptadas a sus operaciones."
          ]
        ]
      ],
      [
        "p",
        "La diferenciación no estará solamente en disponer de información, sino en ofrecer distintas formas de acceder a ella, analizarla, integrarla y convertirla en oportunidades comerciales."
      ],
      [
        "h",
        "Personalidad de marca"
      ],
      [
        "p",
        "Se propone construir una personalidad con cinco atributos:"
      ],
      [
        "p",
        "Global: capacidad de operar y comprender diferentes mercados."
      ],
      [
        "p",
        "Tecnológica: innovación, integración y desarrollo de soluciones."
      ],
      [
        "p",
        "Analítica: rigurosidad y conocimiento basado en datos."
      ],
      [
        "p",
        "Confiable: consistencia, precisión y continuidad."
      ],
      [
        "p",
        "Estratégica: orientación a resultados y decisiones empresariales."
      ],
      [
        "h",
        "Segmentación comercial"
      ],
      [
        "h",
        "Criterios para segmentar el mercado"
      ],
      [
        "p",
        "Para la segmentación es importante considerar cuatro variables:"
      ],
      [
        "t",
        [
          [
            "Variable",
            "Qué debemos identificar"
          ],
          [
            "Perfil empresarial",
            "Tipo de organización, industria y modelo de negocio."
          ],
          [
            "Necesidad comercial",
            "Qué quiere conseguir o resolver la empresa."
          ],
          [
            "Uso de la información",
            "Cómo consulta, analiza, integra o comercializa los datos."
          ],
          [
            "Potencial de negocio",
            "Capacidad de contratación, recurrencia y posibilidades de expansión."
          ]
        ]
      ],
      [
        "p",
        "Esto nos permitirá identificar clientes que pueden pertenecer a industrias diferentes, pero que comparten una misma necesidad tecnológica o comercial."
      ],
      [
        "h",
        "Segmentos estratégicos propuestos"
      ],
      [
        "p",
        "Se propone establecer seis segmentos comerciales. Esta clasificación permite incorporar tanto los clientes actuales como los nuevos mercados que Datacorp quiere desarrollar."
      ],
      [
        "p",
        "Segmentación de clientes"
      ],
      [
        "p",
        "Propuesta inicial - Segmentos comerciales identificados"
      ],
      [
        "p",
        "Comercio internacional: Importadores, exportadores y distribuidores."
      ],
      [
        "p",
        "Inteligencia y consultoría: Consultoras, investigadores y analistas."
      ],
      [
        "p",
        "Tecnología y datos; SaaS, fintech, desarrolladores y empresas de software."
      ],
      [
        "p",
        "Corporaciones y grandes empresas: Organizaciones con necesidades de información y plataformas propias."
      ],
      [
        "p",
        "Instituciones y organismos: Cámaras, asociaciones, entidades públicas y universidades."
      ],
      [
        "p",
        "Intermediarios y distribuidores de información: Empresas que revenden, redistribuyen o incorporan datos a su oferta."
      ],
      [
        "p",
        "El sexto segmento es especialmente relevante: debemos distinguir a quienes consumen información para sus propias decisiones de quienes utilizan los datos como insumo para construir o comercializar sus propios productos."
      ],
      [
        "h",
        "Matriz de segmentación comercial"
      ],
      [
        "p",
        "Esta es la primera matriz de trabajo para definir la relación entre clientes y servicios."
      ],
      [
        "t",
        [
          [
            "Segmento",
            "Necesidad principal",
            "Solución ",
            "Servicios asociados"
          ],
          [
            "Comercio internacional",
            "Encontrar oportunidades, proveedores y compradores.",
            "Inteligencia comercial.",
            "Plataforma, reportes, estudios."
          ],
          [
            "Inteligencia y consultoría",
            "Analizar mercados, tendencias y competidores.",
            "Investigación e inteligencia de mercados.",
            "Estudios, reportes y bases de datos, plataforma."
          ],
          [
            "Tecnología y datos",
            "Incorporar información externa a sus sistemas.",
            "Infraestructura de datos.",
            "APIs, Data Feeds, bases de datos e integraciones."
          ],
          [
            "Corporaciones",
            "Centralizar información y disponer de herramientas propias.",
            "Soluciones empresariales.",
            "Integraciones y White Label."
          ],
          [
            "Instituciones",
            "Acceder a información para estudios y planificación.",
            "Información e investigación especializada.",
            "Bases de datos, reportes y estudios."
          ],
          [
            "Intermediarios y distribuidores",
            "Comercializar información a sus propios clientes.",
            "Distribución y monetización de datos.",
            "Data Feeds, APIs, bases de datos y White Label."
          ]
        ]
      ],
      [
        "h",
        "Profundización por segmento: perfiles de cliente"
      ],
      [
        "p",
        "Para que esta segmentación sea útil comercialmente, debemos traducirla a perfiles de compra."
      ],
      [
        "t",
        [
          [
            "Segmento",
            "Decisor económico",
            "Usuario del servicio",
            "Principal argumento de venta"
          ],
          [
            "Comercio internacional",
            "Gerente general / Comercial",
            "Analista de comercio exterior",
            "Encontrar oportunidades comerciales."
          ],
          [
            "Inteligencia y consultoría",
            "Director de consultoría",
            "Analista / Investigador",
            "Acceder a información para desarrollar análisis."
          ],
          [
            "Tecnología y datos",
            "CTO / CIO / CEO",
            "Desarrollador / Data Engineer",
            "Integrar información mediante APIs y feeds."
          ],
          [
            "Corporaciones",
            "Gerente de transformación / Tecnología",
            "Equipos de operaciones y análisis",
            "Contar con una solución adaptada a su operación."
          ],
          [
            "Instituciones",
            "Director / Jefe de estudios",
            "Investigadores / Analistas",
            "Obtener información confiable para sus proyectos."
          ],
          [
            "Intermediarios",
            "Director comercial / CEO",
            "Equipos de producto y tecnología",
            "Incorporar datos a su propia oferta comercial."
          ]
        ]
      ],
      [
        "h",
        "Necesidades y oportunidades comerciales por segmento"
      ],
      [
        "h",
        "01. Comercio internacional"
      ],
      [
        "p",
        "Prioridad alta"
      ],
      [
        "p",
        "Problemas del cliente"
      ],
      [
        "p",
        "No identifica fácilmente nuevos proveedores o compradores."
      ],
      [
        "p",
        "Tiene poca visibilidad sobre los movimientos de sus competidores."
      ],
      [
        "p",
        "Necesita conocer el comportamiento de determinados mercados."
      ],
      [
        "p",
        "No cuenta con información suficiente para tomar decisiones de expansión."
      ],
      [
        "p",
        "Oportunidad Datacorp: ofrecer inteligencia comercial para prospección, análisis de mercados y desarrollo de negocios internacionales."
      ],
      [
        "p",
        "Productos: plataformas de consulta, reportes, estudios y bases de datos."
      ],
      [
        "h",
        "02. Inteligencia y consultoría"
      ],
      [
        "p",
        "Prioridad alta"
      ],
      [
        "p",
        "Problemas del cliente"
      ],
      [
        "p",
        "Necesita información histórica y actualizada."
      ],
      [
        "p",
        "Requiere desarrollar estudios de mercado."
      ],
      [
        "p",
        "Tiene dificultades para consolidar fuentes de información."
      ],
      [
        "p",
        "Necesita respaldar recomendaciones con datos."
      ],
      [
        "p",
        "Oportunidad Datacorp: proporcionar información estructurada y capacidades de investigación para análisis estratégicos."
      ],
      [
        "p",
        "Productos: bases de datos, reportes especializados y estudios de mercado."
      ],
      [
        "h",
        "03. Tecnología y datos"
      ],
      [
        "p",
        "Prioridad de expansión"
      ],
      [
        "p",
        "Problemas del cliente"
      ],
      [
        "p",
        "Necesita información externa para alimentar sus plataformas."
      ],
      [
        "p",
        "Requiere datos estructurados y actualizados."
      ],
      [
        "p",
        "Busca automatizar procesos de consulta."
      ],
      [
        "p",
        "Necesita ampliar sus servicios digitales con nuevas fuentes de datos."
      ],
      [
        "p",
        "Oportunidad Datacorp: comercializar infraestructura de datos, acceso programático y soluciones de integración."
      ],
      [
        "p",
        "Productos: APIs, Data Feeds, bases de datos y servicios de integración."
      ],
      [
        "h",
        "04. Corporaciones y grandes empresas"
      ],
      [
        "p",
        "Problemas del cliente"
      ],
      [
        "p",
        "Trabaja con múltiples fuentes de información."
      ],
      [
        "p",
        "Necesita centralizar los procesos de consulta y análisis."
      ],
      [
        "p",
        "Requiere herramientas específicas para diferentes áreas."
      ],
      [
        "p",
        "Busca soluciones que puedan integrarse a sus sistemas."
      ],
      [
        "p",
        "Oportunidad Datacorp: desarrollar soluciones tecnológicas y plataformas empresariales personalizadas."
      ],
      [
        "p",
        "Productos: plataformas personalizadas, White Label, APIs e integraciones."
      ],
      [
        "h",
        "05. Instituciones y organismos"
      ],
      [
        "p",
        "Problemas del cliente"
      ],
      [
        "p",
        "Necesita información para investigaciones y estudios económicos."
      ],
      [
        "p",
        "Requiere datos para analizar sectores productivos."
      ],
      [
        "p",
        "Busca respaldar políticas, programas o iniciativas de desarrollo."
      ],
      [
        "p",
        "Oportunidad Datacorp: entregar información especializada para investigación y análisis institucional."
      ],
      [
        "p",
        "Productos: estudios, reportes y bases de datos."
      ],
      [
        "h",
        "06. Intermediarios y distribuidores de información"
      ],
      [
        "p",
        "Problemas del cliente"
      ],
      [
        "p",
        "Necesita ampliar su catálogo de datos."
      ],
      [
        "p",
        "Busca nuevas fuentes para comercializar."
      ],
      [
        "p",
        "Requiere integrar información sin desarrollar toda la infraestructura."
      ],
      [
        "p",
        "Necesita ofrecer información bajo su propia marca."
      ],
      [
        "p",
        "Oportunidad Datacorp: convertirse en proveedor estratégico de datos e infraestructura para terceros."
      ],
      [
        "p",
        "Productos: bases de datos, APIs, Data Feeds y White Label."
      ],
      [
        "h",
        "Catálogo preliminar de productos y servicios"
      ],
      [
        "p",
        "Se propone organizar la oferta en cuatro grandes categorías de soluciones, que funcionarán como estructura comercial y de navegación, sin fragmentar la identidad corporativa:"
      ],
      [
        "p",
        "Inteligencia comercial: transformar información en conocimiento para decisiones comerciales."
      ],
      [
        "p",
        "Plataformas de inteligencia comercial."
      ],
      [
        "p",
        "Reportes de mercado."
      ],
      [
        "p",
        "Estudios especializados."
      ],
      [
        "p",
        "Datos comerciales: acceder a información estructurada para analizar, consultar y desarrollar negocios."
      ],
      [
        "p",
        "Bases de datos."
      ],
      [
        "p",
        "Datos históricos y actualizados."
      ],
      [
        "p",
        "Conjuntos de datos especializados y datos alternativos."
      ],
      [
        "p",
        "APIs e integraciones: conectar información comercial con sistemas y productos digitales."
      ],
      [
        "p",
        "APIs."
      ],
      [
        "p",
        "Data Feeds."
      ],
      [
        "p",
        "Integraciones y distribución de información."
      ],
      [
        "p",
        "Plataformas y soluciones digitales: desarrollar herramientas tecnológicas adaptadas a las necesidades de cada organización."
      ],
      [
        "p",
        "Plataformas personalizadas."
      ],
      [
        "p",
        "White Label."
      ],
      [
        "p",
        "Soluciones empresariales premium."
      ],
      [
        "h",
        "Catálogo preliminar de productos y servicios"
      ],
      [
        "t",
        [
          [
            "Categoría",
            "Producto / servicio propuesto",
            "Función"
          ],
          [
            "Inteligencia comercial",
            "Plataforma de inteligencia comercial",
            "Consultar y analizar información de importaciones y exportaciones."
          ],
          [
            "Inteligencia comercial",
            "Reportes comerciales",
            "Entregar análisis de mercados, productos y empresas."
          ],
          [
            "Inteligencia comercial",
            "Estudios de mercado",
            "Desarrollar investigaciones específicas y personalizadas."
          ],
          [
            "Datos comerciales",
            "Bases de datos comerciales",
            "Comercializar información estructurada por país, empresa, producto o período, según disponibilidad."
          ],
          [
            "Datos comerciales",
            "Datos alternativos",
            "Ofrecer fuentes complementarias de información para nuevos casos de uso."
          ],
          [
            "APIs e integraciones",
            "APIs comerciales",
            "Permitir consultas e incorporación de información en sistemas externos."
          ],
          [
            "APIs e integraciones",
            "Data Feeds",
            "Entregar conjuntos de datos mediante flujos o mecanismos de distribución."
          ],
          [
            "APIs e integraciones",
            "Integraciones personalizadas",
            "Conectar las fuentes de Datacorp con sistemas de clientes."
          ],
          [
            "Plataformas digitales",
            "Plataformas personalizadas",
            "Crear entornos digitales adaptados a cada organización."
          ],
          [
            "Plataformas digitales",
            "White Label",
            "Permitir que clientes operen plataformas bajo su propia identidad."
          ],
          [
            "Plataformas digitales",
            "Soluciones premium",
            "Desarrollar funcionalidades y experiencias avanzadas para clientes corporativos."
          ]
        ]
      ],
      [
        "p",
        "Distinción que se debe mantener:"
      ],
      [
        "p",
        "Una base de datos es un activo de información que se comercializa."
      ],
      [
        "p",
        "Una API es un mecanismo de acceso programático."
      ],
      [
        "p",
        "Un Data Feed es un mecanismo de distribución de datos."
      ],
      [
        "p",
        "Una plataforma es una experiencia de consulta, análisis o gestión."
      ],
      [
        "p",
        "Un estudio es un servicio de investigación y análisis."
      ],
      [
        "p",
        "No debemos presentarlos como productos equivalentes, porque responden a modelos de compra y necesidades diferentes."
      ],
      [
        "h",
        "Relación entre el portafolio actual y el nuevo"
      ],
      [
        "p",
        "Esta matriz permitirá controlar la migración de los productos y evitar que se pierdan capacidades durante la transformación."
      ],
      [
        "t",
        [
          [
            "Origen",
            "Productos y capacidades actuales",
            "Destino"
          ],
          [
            "Datasur",
            "D-Comex",
            "Plataforma de inteligencia comercial"
          ],
          [
            "Datasur",
            "Reportes",
            "Reportes comerciales"
          ],
          [
            "Datasur",
            "Estudios",
            "Estudios de mercado"
          ],
          [
            "IMEX",
            "Bases de datos",
            "Bases de datos comerciales"
          ],
          [
            "IMEX",
            "Trade Data Feeds",
            "Data Feeds"
          ],
          [
            "IMEX",
            "APIs",
            "APIs comerciales"
          ],
          [
            "IMEX",
            "Integraciones",
            "Integraciones personalizadas"
          ],
          [
            "Datlas",
            "White Label",
            "Plataformas digitales White Label"
          ],
          [
            "Datacorp",
            "Macroscope y capacidades asociadas",
            "Por validar dentro del catálogo de plataformas y analítica"
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-01-competencia-resumen-ejecutivo",
    "legacyIndex": 1,
    "group": "Competencia",
    "title": "Resumen ejecutivo",
    "source": "Benchmark_Competitivo_Datasur_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Benchmark competitivo digital: Datasur e IMEX",
            "Análisis estratégico cualitativo; revisar con métricas de herramientas antes de tomar decisiones de inversión."
          ],
          [
            "Objetivo",
            "Identificar competidores, comprender su posicionamiento y priorizar oportunidades en web, SEO, GEO y redes sociales."
          ],
          [
            "Datasur: posicionamiento recomendado",
            "Consolidarse como referente de inteligencia comercial para análisis de importaciones, exportaciones, mercados y empresas; conectar D-Comex, reportes, estudios, integraciones y capacitación con resultados comerciales."
          ],
          [
            "IMEX: posicionamiento recomendado",
            "Construir autoridad como proveedor tecnológico de datos comerciales, destacando APIs, feeds, integraciones y plataformas personalizadas para empresas."
          ],
          [
            "Hallazgo clave",
            "Datasur y IMEX operan en mercados relacionados, pero no idénticos. Datasur se orienta al usuario que consulta y analiza datos; IMEX también atiende organizaciones que integran o distribuyen datos en sus propios sistemas y productos."
          ],
          [
            "Referente SEO",
            "Volza: estudiar su arquitectura de páginas por país, producto, comprador y proveedor."
          ],
          [
            "Referente de propuesta de valor",
            "ImportGenius: conecta datos con resultados prácticos como descubrir clientes, analizar competidores y verificar proveedores."
          ],
          [
            "Referente enterprise",
            "Panjiva y Descartes Datamyne: referentes para comunicar profundidad de datos, inteligencia de cadena de suministro y valor empresarial."
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-02-competencia-competidores",
    "legacyIndex": 2,
    "group": "Competencia",
    "title": "Competidores",
    "source": "Benchmark_Competitivo_Datasur_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Marca",
            "Relevancia para",
            "Posicionamiento / propuesta de valor",
            "Cómo compite / señal estratégica",
            "Sitio web",
            "Lectura estratégica para Datasur e IMEX"
          ],
          [
            "Panjiva",
            "Datasur e IMEX",
            "Inteligencia de cadenas de suministro, perfiles empresariales, registros de embarques y análisis de proveedores/clientes.",
            "Asocia la propuesta con amplitud de información e inteligencia de supply chain; referencia para posicionamiento de alto valor empresarial.",
            "https://panjiva.com/",
            "Comunicar valor estratégico del dato y decisiones empresariales, no solo acceso a registros."
          ],
          [
            "ImportGenius",
            "Datasur; parcialmente IMEX",
            "Datos de embarques para descubrir compradores, analizar competidores y verificar proveedores.",
            "Traduce registros de comercio en resultados comerciales concretos; buen referente de páginas de producto y mercado.",
            "https://www.importgenius.com/",
            "Enfatizar los resultados que habilitan los datos y crear páginas orientadas a intenciones comerciales."
          ],
          [
            "Volza",
            "Datasur e IMEX",
            "Descubrimiento de compradores, proveedores y oportunidades mediante datos de comercio internacional.",
            "Arquitectura de contenidos orientada a país, producto y empresa; referencia para SEO de long tail.",
            "https://www.volza.com/",
            "Desarrollar páginas específicas por país, industria, producto y necesidad, siempre con contenido diferenciado."
          ],
          [
            "Trademo",
            "Datasur e IMEX",
            "Inteligencia comercial, visibilidad de cadenas de suministro y análisis de riesgos.",
            "Amplía el valor del dato hacia visibilidad, riesgo y decisiones empresariales.",
            "https://www.trademo.com/",
            "Conectar datos con aplicaciones estratégicas y casos de uso empresariales."
          ],
          [
            "Descartes Datamyne",
            "Datasur e IMEX",
            "Datos globales de comercio y soporte para inteligencia de mercados y procesos empresariales.",
            "Referencia de posicionamiento enterprise y comunicación de información para análisis y operaciones.",
            "https://www.datamyne.com/",
            "Fortalecer credibilidad, profundidad de información y aplicaciones en procesos empresariales."
          ],
          [
            "TradeImeX",
            "Datasur e IMEX",
            "Datos de comercio global e investigación de mercados asistida por IA.",
            "Conecta bases de datos con investigación de mercados y herramientas de IA.",
            "https://www.tradeimex.com/",
            "Publicar contenido que explique cómo interpretar datos y tomar decisiones, no solo describir funcionalidades."
          ],
          [
            "ImportYeti",
            "Competidor indirecto de Datasur",
            "Buscador de registros de importación y embarques.",
            "Puede captar demanda inicial de investigación de proveedores y usuarios que buscan opciones de consulta.",
            "https://www.importyeti.com/",
            "Considerar alternativas gratuitas y búsquedas informativas dentro del mapa competitivo."
          ],
          [
            "Fuentes oficiales de comercio exterior",
            "Competidores indirectos",
            "Estadísticas oficiales de importación, exportación y comercio por país.",
            "Compiten en consultas estadísticas e informativas; pueden ser fuentes de respaldo y autoridad.",
            "Depende del país / organismo",
            "Diferenciar el valor agregado: usabilidad, comparabilidad, análisis, actualización, integración y soporte."
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-03-competencia-matriz-digital",
    "legacyIndex": 3,
    "group": "Competencia",
    "title": "Matriz digital",
    "source": "Benchmark_Competitivo_Datasur_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Marca",
            "Posicionamiento",
            "Web / conversión",
            "SEO / contenidos",
            "GEO / motores generativos",
            "Redes sociales",
            "Estado de evidencia"
          ],
          [
            "Datasur",
            "Inteligencia comercial y datos de importaciones/exportaciones; D-Comex, reportes, estudios e integraciones.",
            "Portafolio diversificado. Oportunidad de separar rutas de conversión para demo, reporte, estudio y capacitación.",
            "Ampliar páginas por país, industria, producto y necesidad; conectar artículos con soluciones.",
            "Publicar análisis propios, definiciones, preguntas frecuentes y metodología verificable.",
            "LinkedIn para autoridad B2B; Instagram para educación visual y reconocimiento; YouTube para demos y contenido profundo.",
            "Evaluación estratégica; validar métricas y estructura actual con auditoría."
          ],
          [
            "IMEX",
            "Infraestructura de datos comerciales: Trade Data Feeds, APIs, bases de datos y plataformas personalizadas.",
            "Priorizar páginas de producto, documentación, casos de uso y contacto técnico/comercial.",
            "Trabajar términos como trade data API, customs data feeds, import export database API y white-label trade intelligence platform.",
            "Documentación indexable, ejemplos de integración, esquemas de datos y respuestas técnicas.",
            "LinkedIn para responsables de producto, tecnología, datos y desarrollo de negocios.",
            "Requiere confirmar URL pública definitiva y auditar dominio."
          ],
          [
            "Panjiva",
            "Inteligencia de cadena de suministro y relaciones comerciales globales.",
            "Comunica plataforma, perfiles empresariales y datos de embarques; CTA comercial.",
            "Términos de supply chain intelligence, embarques, proveedores y análisis de competencia.",
            "Oportunidad de ser fuente de referencia; citación efectiva requiere pruebas por consulta.",
            "Contenido corporativo y especializado para decisiones de supply chain.",
            "Basado en propuesta pública; no se incluyen métricas comparativas."
          ],
          [
            "ImportGenius",
            "Datos de embarques para prospección, análisis de competidores y proveedores.",
            "Páginas por mercado y caso de uso, con beneficios comerciales.",
            "Captación por consultas transaccionales y comerciales específicas.",
            "Potencial para consultas sobre investigación de importadores y proveedores; validar por mercado.",
            "Contenido educativo y casos comerciales.",
            "Basado en propuesta pública; no se incluyen métricas comparativas."
          ],
          [
            "Volza",
            "Descubrimiento de compradores, proveedores y oportunidades comerciales.",
            "Páginas por país, producto y directorios; información comercial específica.",
            "Referencia para arquitectura programática y long tail.",
            "Datos concretos, entidades y preguntas frecuentes pueden facilitar comprensión si son accesibles y confiables.",
            "Contenido vinculado a prospección, exportación y oportunidades.",
            "Basado en estructura pública; no equivale a auditoría técnica."
          ],
          [
            "Trademo",
            "Inteligencia comercial, visibilidad de cadena de suministro y riesgo.",
            "Orientación a soluciones empresariales.",
            "Competencia en global trade intelligence, proveedores y visibilidad de supply chain.",
            "Conectar datos, riesgo, abastecimiento y decisiones empresariales.",
            "Audiencias de comercio global, operaciones y riesgo.",
            "Cualitativo."
          ],
          [
            "Descartes Datamyne",
            "Datos globales para inteligencia de mercado y procesos empresariales.",
            "Orientación a necesidades empresariales y análisis.",
            "Búsquedas de datos aduaneros e investigación comercial.",
            "Autoridad temática y confianza empresarial como ejes.",
            "Contenido corporativo para logística, abastecimiento y comercio internacional.",
            "Cualitativo."
          ],
          [
            "TradeImeX",
            "Datos de comercio global e investigación de mercados asistida por IA.",
            "Investigación, descubrimiento de empresas y análisis de mercados.",
            "Datos aduaneros, mercados, compradores y análisis con IA.",
            "Potencial para consultas de análisis comercial e investigación asistida por IA.",
            "Contenido sobre tecnología, IA y oportunidades.",
            "Cualitativo."
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-04-competencia-estrategia-web",
    "legacyIndex": 4,
    "group": "Competencia",
    "title": "Estrategia web",
    "source": "Benchmark_Competitivo_Datasur_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Marca",
            "Sección / iniciativa",
            "Qué debe comunicar",
            "Objetivo SEO / comercial",
            "Prioridad sugerida"
          ],
          [
            "Datasur",
            "Página principal: inteligencia comercial",
            "Propuesta de valor, cobertura, diferenciadores y caminos claros por necesidad.",
            "Aclarar categoría y dirigir a la solución apropiada.",
            "Alta"
          ],
          [
            "Datasur",
            "Datos por país",
            "Cobertura, tipos de datos, usos, limitaciones y ejemplos.",
            "Captar búsquedas específicas por mercado.",
            "Alta"
          ],
          [
            "Datasur",
            "Análisis por industria",
            "Demanda, competidores, compradores, proveedores y tendencias.",
            "Captar intención de investigación comercial.",
            "Alta"
          ],
          [
            "Datasur",
            "D-Comex",
            "Funcionalidades, beneficios, demostración y casos de uso.",
            "Convertir demanda en demos y oportunidades.",
            "Alta"
          ],
          [
            "Datasur",
            "Reportes y estudios",
            "Alcance, entregables, metodología, ejemplos y personalización.",
            "Captar solicitudes de estudios y reportes.",
            "Media-alta"
          ],
          [
            "Datasur",
            "APIs e integraciones",
            "Capacidades, datos disponibles, escenarios de integración y contacto técnico.",
            "Aclarar oferta técnica sin diluir el posicionamiento principal.",
            "Media-alta"
          ],
          [
            "Datasur",
            "Blog y recursos",
            "Guías, análisis originales, glosario y preguntas frecuentes.",
            "Construir autoridad temática y apoyar conversión.",
            "Alta"
          ],
          [
            "IMEX",
            "Trade Data Feeds",
            "Cobertura, frecuencia de actualización, campos, formatos y entrega.",
            "Captar demanda de datos a escala.",
            "Alta"
          ],
          [
            "IMEX",
            "APIs & Integrations",
            "Documentación, autenticación, ejemplos, formatos y flujos de integración.",
            "Captar demanda técnica y prospectos empresariales.",
            "Alta"
          ],
          [
            "IMEX",
            "Plataforma personalizada",
            "Personalización de marca, funcionalidades, experiencia y soporte.",
            "Generar oportunidades B2B de mayor valor.",
            "Alta"
          ],
          [
            "IMEX",
            "Data Coverage",
            "Mercados, fuentes, tipos de registros, limitaciones y disponibilidad.",
            "Responder preguntas concretas sobre cobertura.",
            "Alta"
          ],
          [
            "IMEX",
            "Casos de uso",
            "Cómo plataformas, consultoras y empresas incorporan datos.",
            "Demostrar valor y reducir objeciones.",
            "Media-alta"
          ],
          [
            "IMEX",
            "Recursos técnicos",
            "Guías, glosario, documentación y FAQ.",
            "Autoridad temática y visibilidad en GEO.",
            "Media-alta"
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-05-competencia-seo-y-geo",
    "legacyIndex": 5,
    "group": "Competencia",
    "title": "SEO y GEO",
    "source": "Benchmark_Competitivo_Datasur_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Factor",
            "Datasur: enfoque",
            "IMEX: enfoque",
            "Acciones recomendadas",
            "Indicador de seguimiento"
          ],
          [
            "Palabras clave",
            "Datos de importaciones/exportaciones, datos aduaneros, inteligencia comercial, D-Comex.",
            "Trade data API, customs data feeds, trade data provider, white-label trade intelligence.",
            "Agrupar keywords por intención y asignar una página principal a cada grupo.",
            "Impresiones, clics, CTR y posición por grupo."
          ],
          [
            "SEO por país",
            "Páginas por mercado con cobertura, aplicaciones y datos disponibles.",
            "Disponibilidad de fuentes y opciones de entrega por mercado.",
            "Crear páginas solo cuando exista información única y útil; evitar contenido duplicado.",
            "Clics orgánicos y conversiones por página."
          ],
          [
            "SEO por industria",
            "Análisis sectoriales, demanda, competencia y oportunidades.",
            "Casos de uso por industria para plataformas, integradores y empresas tecnológicas.",
            "Mapear necesidades del público a páginas y recursos específicos.",
            "Tráfico no de marca y leads."
          ],
          [
            "Autoridad",
            "Estudios originales, análisis de comercio y guías prácticas.",
            "Documentación, guías técnicas, comparativas y ejemplos de integración.",
            "Añadir metodología, fechas, fuentes, autores y límites de los datos.",
            "Enlaces externos relevantes, tráfico y conversiones asistidas."
          ],
          [
            "GEO",
            "Responder preguntas sobre mercados, compradores, importadores, exportadores y estadísticas.",
            "Responder preguntas sobre integración, cobertura, actualización y consumo de datos.",
            "Publicar respuestas claras y verificables; estructurar entidades y enlazar fuentes.",
            "Menciones, citas y páginas citadas en motores generativos."
          ],
          [
            "SEO técnico",
            "Indexación, HTTP, canonicals, hreflang, sitemap, rendimiento y enlaces internos.",
            "Lo mismo, con foco adicional en documentación técnica indexable.",
            "Auditoría con Screaming Frog, Search Console y herramientas de rendimiento.",
            "Errores críticos, URLs indexables y páginas válidas."
          ],
          [
            "Conversión",
            "Demo D-Comex, solicitud de estudio y contacto según intención.",
            "Solicitud de muestra, consulta técnica, documentación y contacto comercial.",
            "Alinear CTA y formularios con intención y etapa de compra.",
            "Tasa de conversión, MQL, SQL y oportunidades."
          ],
          [
            "Medición GEO",
            "Pruebas periódicas de consultas sobre datos, mercados y análisis comercial.",
            "Pruebas sobre APIs, feeds, integración y plataformas de datos.",
            "Mantener un conjunto fijo de consultas y registrar marca, cita, URL y competidores.",
            "Share of mentions/citations en set de consultas."
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-06-competencia-redes-sociales",
    "legacyIndex": 6,
    "group": "Competencia",
    "title": "Redes sociales",
    "source": "Benchmark_Competitivo_Datasur_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Marca",
            "Canal",
            "Público prioritario",
            "Pilares de contenido",
            "Formatos sugeridos",
            "CTA",
            "Objetivo"
          ],
          [
            "Datasur",
            "LinkedIn",
            "Responsables comerciales, exportadores/importadores, analistas y líderes de negocio.",
            "Educación; inteligencia de mercado; producto; autoridad; conversión.",
            "Carruseles con datos, análisis, casos de uso, videos cortos, artículos y webinars.",
            "Solicitar demo, descargar recurso, pedir reporte o inscribirse a capacitación.",
            "Autoridad B2B, demanda y leads."
          ],
          [
            "Datasur",
            "Instagram",
            "Audiencia profesional interesada en comercio exterior, tendencias y educación visual.",
            "Educación; tendencias; explicaciones visuales; reconocimiento de marca.",
            "Reels, carruseles, infografías, historias y clips de webinars.",
            "Visitar perfil/sitio, ver contenido completo o consultar solución.",
            "Descubrimiento, reconocimiento y tráfico."
          ],
          [
            "Datasur",
            "YouTube",
            "Usuarios que necesitan entender productos, datos y análisis.",
            "Tutoriales, demostraciones, análisis de mercados y entrevistas.",
            "Demos, tutoriales, vodcast, Shorts y grabaciones de capacitaciones.",
            "Solicitar demo o visitar la página de solución.",
            "Profundidad, confianza y apoyo a conversión."
          ],
          [
            "IMEX",
            "LinkedIn",
            "Responsables de producto, tecnología, datos, integración y desarrollo de negocios.",
            "Tecnología; producto; casos de uso; eficiencia; confianza.",
            "Diagramas de integración, demos, casos, artículos técnicos y videos breves.",
            "Solicitar muestra, conversar con equipo técnico o consultar API.",
            "Leads B2B técnicos y oportunidades empresariales."
          ],
          [
            "IMEX",
            "YouTube / demos",
            "Compradores técnicos y equipos que evalúan integración.",
            "Integraciones, flujos de datos, arquitectura y demostraciones.",
            "Demos técnicas, tutoriales y walkthroughs.",
            "Solicitar documentación o reunión técnica.",
            "Reducir fricción de evaluación y generar confianza."
          ],
          [
            "Ambas",
            "Regla de diferenciación",
            "Audiencias distintas aunque compartan experiencia de datos.",
            "Datasur: decisiones comerciales. IMEX: infraestructura e integración de datos.",
            "Adaptar ejemplos, vocabulario, visuales y CTA a cada audiencia.",
            "Evitar replicar el mismo mensaje en ambas marcas.",
            "Evitar canibalización y mejorar claridad de posicionamiento."
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-07-referencias-marcas-y-mercados-regionales",
    "legacyIndex": 7,
    "group": "Referencias",
    "title": "Marcas y mercados regionales",
    "source": "Branding logístico regional-asia-latam y usa,canada.docx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "h",
        "1. ASIA"
      ],
      [
        "p",
        "El mercado asiático se caracteriza por una fuerte lealtad corporativa local, donde pasar a una marca única requiere un gran cuidado cultural o, por el contrario, un despliegue de músculo financiero muy agresivo."
      ],
      [
        "p",
        "Cambio Drástico (Masterbrand / Absorción total):"
      ],
      [
        "p",
        "Ejemplo: Nippon Express a \"NX Group\"."
      ],
      [
        "p",
        "Qué hicieron: Una de las mayores empresas de transporte y logística de Japón eliminó sus múltiples nombres históricos y filiales fragmentadas para unificarse bajo la marca global NX."
      ],
      [
        "p",
        "Estrategia y Reto: La estrategia fue unificar el comercio transpacífico bajo un estándar corporativo occidentalizado y moderno. Gráficamente pasaron de caracteres tradicionales a un isotipo minimalista geométrico en rojo y negro. El reto fue enorme a nivel interno: convencer a las oficinas tradicionales y clientes locales de que la esencia no se perdía."
      ],
      [
        "p",
        "Modelo Sombrilla / Híbrido (Endoso):"
      ],
      [
        "p",
        "Ejemplo: Sinotrans / grandes holdings estatales de logística en China."
      ],
      [
        "p",
        "Qué hicieron: Al integrar diversas compañías navieras y de carga terrestre bajo una sombrilla estatal (como China Merchants Group), mantienen las submarcas operativas intactas para contratos locales específicos, pero introducen un sello corporativo común en los reportes anuales y grandes contratos internacionales."
      ],
      [
        "h",
        "2. LATINOAMÉRICA"
      ],
      [
        "p",
        "En Latinoamérica, la confianza descansa en la relación comercial cercana y el conocimiento de las aduanas locales. Los cambios muy bruscos suelen generar desconfianza en los importadores."
      ],
      [
        "p",
        "Cambio Drástico (Absorción total):"
      ],
      [
        "p",
        "Ejemplo: BLU Logistics a Rhenus Group."
      ],
      [
        "p",
        "Qué hicieron: El gigante alemán de logística Rhenus adquirió y absorbió por completo a BLU Logistics (un fuerte operador en la región andina y Cono Sur), migrando toda la identidad visual, correos, plataformas y flota al branding europeo de Rhenus."
      ],
      [
        "p",
        "Estrategia y Reto: La estrategia fue posicionar un solo proveedor global de extremo a extremo (end-to-end). El reto principal fue retener la cuenta de medianos exportadores que sentían afinidad con el trato local de la marca anterior, amortiguándolo con campañas masivas de acompañamiento en los puertos principales."
      ],
      [
        "p",
        "Modelo Sombrilla / Híbrido (Endoso o Transición Escalonada):"
      ],
      [
        "p",
        "Ejemplo: SAAM Logistics (ahora parte de Hapag-Lloyd) o integraciones de agencias aduanales regionales."
      ],
      [
        "p",
        "Qué hicieron: Utilizar la fórmula \"Nombre de la Marca Global + de respaldo la trayectoria local\" durante al menos un año fiscal. Gráficamente, el isotipo de la marca compradora o sombrilla toma el protagonismo, pero se añade un descriptor geográfico o histórico en las cotizaciones y facturas locales (ej. \"Una compañía de...\") para evitar que el cliente piense que contrató a un proveedor completamente nuevo y desconocido para sus despachos de aduana."
      ],
      [
        "h",
        "3. ESTADOS UNIDOS Y CANADÁ (Norteamérica)"
      ],
      [
        "p",
        "El mercado norteamericano valora la eficiencia de procesos, la digitalización y la estandarización corporativa por encima del sentimentalismo de marca."
      ],
      [
        "p",
        "Cambio Drástico (Masterbrand agresiva):"
      ],
      [
        "p",
        "Ejemplo: DSC Logistics a CJ Logistics."
      ],
      [
        "p",
        "Qué hicieron: DSC Logistics era un operador de cadena de suministro sumamente respetado en Estados Unidos. Fue adquirido por el conglomerado global CJ Logistics, y tras un periodo breve, desapareció por completo el nombre y el logo de DSC para llamarse 100% CJ Logistics."
      ],
      [
        "p",
        "Estrategia y Reto: Estandarizar la tecnología de almacenes (WMS) y las flotas de transporte bajo una misma identidad visual corporativa. Gráficamente se adoptó una imagen corporativa limpia, altamente digital y orientada a interfaces B2B. El reto fue legal y de sistemas (migrar contratos de miles de clientes estadounidenses sin fricciones en las cadenas de suministro)."
      ],
      [
        "p",
        "Modelo Sombrilla / Holding Corporativo:"
      ],
      [
        "p",
        "Ejemplo: XPO Logistics / RXO (Separaciones y marcas sombrilla)."
      ],
      [
        "p",
        "Qué hicieron: En lugar de fusionarlo todo en una sola entidad pesada, el corporativo dividió sus unidades de negocio de carga última milla, corretaje de carga (freight brokerage) y transporte pesado en marcas independientes bajo una sombrilla financiera, o bien utilizando estructuras de portafolio donde cada empresa conserva su nombre si atiende nichos muy especializados (ej. transporte farmacéutico en frío vs. carga industrial masiva)."
      ]
    ]
  },
  {
    "id": "doc-08-foda-resumen-ejecutivo",
    "legacyIndex": 8,
    "group": "FODA",
    "title": "Resumen ejecutivo",
    "source": "FODA_Marca_Global_Datacorp_Datasur_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "ANÁLISIS FODA | PROYECTO MARCA GLOBAL DATACORP",
            "",
            ""
          ],
          [
            "Objetivo",
            "Evaluar la creación de una marca global que conecte las capacidades de Datacorp, Datasur, IMEX y Datlas, preservando especialización, reconocimiento y crecimiento comercial.",
            ""
          ],
          [
            "Conclusión estratégica",
            "La oportunidad central no es solo unificar marcas: es convertir los activos de datos, tecnología e inteligencia comercial en una propuesta internacional escalable y diferenciada.",
            ""
          ],
          [
            "Hipótesis de arquitectura",
            "Nueva marca comercial global respaldada por Datacorp, sujeta a validación con investigación de mercado y revisión jurídica.",
            ""
          ],
          [
            "Principio rector",
            "Identidad global común + propuestas de valor diferenciadas por audiencia, producto y modelo de negocio.",
            ""
          ],
          [
            "Advertencia",
            "Este FODA es una evaluación estratégica inicial. Los factores externos y las hipótesis internas deben contrastarse con datos de mercado, clientes, competencia, operación y finanzas.",
            ""
          ],
          [
            "PRIORIDAD",
            "ACCIÓN",
            "RESULTADO ESPERADO"
          ],
          [
            "1",
            "Definir arquitectura de marca y relación entre Datacorp, marca global, Datasur, IMEX, Datlas y productos.",
            "Evitar confusión comercial, jurídica y de portafolio."
          ],
          [
            "2",
            "Priorizar mercados, segmentos y productos de los primeros dos años.",
            "Concentrar recursos en oportunidades viables."
          ],
          [
            "3",
            "Validar diferenciación y razones para creer con clientes y competidores.",
            "Sustentar la promesa de marca con evidencia."
          ],
          [
            "4",
            "Proteger activos existentes: SEO, dominios, clientes, contratos, plataformas y reconocimiento.",
            "Reducir riesgo de pérdida de valor durante la transición."
          ],
          [
            "5",
            "Definir medición por negocio y segmento antes del lanzamiento.",
            "Medir demanda cualificada, conversión, CAC, adopción y migración."
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-09-foda-matriz-foda",
    "legacyIndex": 9,
    "group": "FODA",
    "title": "Matriz FODA",
    "source": "FODA_Marca_Global_Datacorp_Datasur_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "CÓDIGO",
            "CUADRANTE",
            "FACTOR",
            "DESCRIPCIÓN",
            "IMPLICANCIA PARA EL PROYECTO",
            "PRIORIDAD",
            "EVIDENCIA / VALIDACIÓN PENDIENTE"
          ],
          [
            "F1",
            "Fortalezas",
            "Portafolio complementario de soluciones",
            "El grupo puede atender necesidades distintas: análisis comercial mediante plataformas y estudios, y provisión de datos e infraestructura tecnológica para terceros.",
            "Diseñar una marca paraguas que conecte capacidades sin confundir propuestas comerciales.",
            "Alta",
            "Mapear productos, casos de uso y sinergias reales."
          ],
          [
            "F2",
            "Fortalezas",
            "Diversidad de modelos de ingresos",
            "Suscripciones, reportes, estudios, bases de datos, APIs, Data Feeds y soluciones White Label permiten atender distintos presupuestos y necesidades.",
            "Definir arquitectura de portafolio y mensajes por modelo de compra.",
            "Alta",
            "Validar ingresos y rentabilidad por línea."
          ],
          [
            "F3",
            "Fortalezas",
            "Conocimiento especializado en comercio internacional",
            "Experiencia y activos de datos pueden sustentar una propuesta especializada frente a proveedores generalistas.",
            "Convertir conocimiento y datos en diferenciadores verificables.",
            "Alta",
            "Documentar cobertura, calidad, actualización y casos."
          ],
          [
            "F4",
            "Fortalezas",
            "Capacidades tecnológicas escalables",
            "APIs, integraciones y plataformas permiten desarrollar soluciones reutilizables para clientes y mercados diferentes.",
            "Aprovechar escalabilidad en el posicionamiento global.",
            "Media",
            "Validar capacidad técnica, SLA e integraciones."
          ],
          [
            "F5",
            "Fortalezas",
            "Activos comerciales existentes",
            "Datasur cuenta con trayectoria y reconocimiento en determinados mercados latinoamericanos, además de relaciones comerciales y activos digitales.",
            "Preservar el valor de Datasur durante la transición.",
            "Crítica",
            "Medir marca, clientes, tráfico, SEO, contratos y renovaciones."
          ],
          [
            "F6",
            "Fortalezas",
            "Atención a distintos perfiles B2B",
            "El grupo atiende tanto a empresas que toman decisiones comerciales como a organizaciones que incorporan datos a sus propios productos.",
            "Crear rutas de solución diferenciadas por audiencia.",
            "Alta",
            "Validar perfiles ICP y recorridos comerciales."
          ],
          [
            "D1",
            "Debilidades",
            "Reconocimiento desigual entre marcas",
            "Datasur tiene activos de marca; IMEX presenta posicionamiento débil y Datlas tiene potencial, pero escaso reconocimiento previo.",
            "La nueva marca debe aprovechar activos sin asumir que todas las marcas parten del mismo nivel.",
            "Crítica",
            "Estudio de reconocimiento por país y segmento."
          ],
          [
            "D2",
            "Debilidades",
            "Diferencias entre modelos comerciales",
            "Los clientes de Datasur buscan inteligencia para decisiones; los de IMEX buscan datos e infraestructura para sus propios servicios.",
            "Evitar mensajes y embudos comerciales idénticos para ambos negocios.",
            "Crítica",
            "Mapear ICP, ciclo de venta, propuesta y conversión por línea."
          ],
          [
            "D3",
            "Debilidades",
            "Complejidad de arquitectura de marca",
            "Se debe definir la relación entre Datacorp, marca global, empresas comerciales y productos, sin confundir identidad comercial y entidades jurídicas.",
            "Resolver arquitectura antes del naming y del diseño web.",
            "Crítica",
            "Decisión formal del comité y revisión jurídica."
          ],
          [
            "D4",
            "Debilidades",
            "Decisiones corporativas pendientes",
            "Arquitectura, mercados prioritarios, presupuesto y recursos deben definirse antes de cerrar alcance y cronograma.",
            "Riesgo de retrasos y retrabajo si se inicia producción prematuramente.",
            "Crítica",
            "Acta de inicio, presupuesto y cronograma aprobados."
          ],
          [
            "D5",
            "Debilidades",
            "Desafíos de adquisición digital",
            "Antecedentes de campañas SEM de Datasur muestran desafíos de calidad de leads y ajustes presupuestarios.",
            "La marca nueva no sustituye la optimización de segmentación, conversión y calificación.",
            "Alta",
            "Analizar CPL, calidad, MQL/SQL y conversión por canal."
          ],
          [
            "D6",
            "Debilidades",
            "Complejidad de migración",
            "La unificación implica dominios, SEO, plataformas, CRM, contratos, mensajes y continuidad de atención.",
            "Planificar migración por etapas con responsables y criterios de salida.",
            "Crítica",
            "Inventario de activos y plan técnico/comercial."
          ],
          [
            "O1",
            "Oportunidades",
            "Expansión internacional con identidad coherente",
            "Una marca global puede facilitar el posicionamiento en nuevos mercados y reducir dependencia de una marca local.",
            "Crear plataforma de marca internacional y localización por mercado.",
            "Alta",
            "Elegir países prioritarios y analizar demanda/competencia."
          ],
          [
            "O2",
            "Oportunidades",
            "Demanda de datos integrables",
            "Empresas tecnológicas, plataformas B2B, fintechs y proveedores de inteligencia pueden requerir datos estructurados, APIs y Data Feeds.",
            "Potenciar IMEX con mensajes centrados en integración, cobertura y utilidad técnica.",
            "Alta",
            "Validar demanda, casos de uso y requisitos de integración."
          ],
          [
            "O3",
            "Oportunidades",
            "Escalamiento de White Label",
            "IMEX puede ofrecer infraestructura para que terceros comercialicen servicios con su propia identidad.",
            "Desarrollar propuesta y contenido para distribuidores y partners.",
            "Alta",
            "Validar margen, soporte, modelo de partners y contratos."
          ],
          [
            "O4",
            "Oportunidades",
            "Venta cruzada entre necesidades complementarias",
            "Algunos clientes podrían necesitar tanto inteligencia comercial como acceso a datos e integraciones, cuando exista compatibilidad real.",
            "Diseñar rutas de cross-sell con reglas claras, sin mezclar ofertas indiscriminadamente.",
            "Media",
            "Identificar solapamiento real de clientes y necesidades."
          ],
          [
            "O5",
            "Oportunidades",
            "Diferenciación por especialización y confianza",
            "Cobertura, calidad, trazabilidad y utilidad de los datos pueden diferenciar frente a proveedores generalistas.",
            "Respaldar mensajes con evidencias y casos verificables.",
            "Alta",
            "Benchmark de calidad y pruebas por mercado."
          ],
          [
            "O6",
            "Oportunidades",
            "Contenido y activos digitales para generar demanda",
            "Informes, rankings, análisis abiertos, casos, documentación técnica y recursos educativos pueden atraer distintos perfiles B2B.",
            "Crear estrategia de contenidos segmentada para Datasur e IMEX bajo una narrativa común.",
            "Alta",
            "Medir búsquedas, demanda por tema y conversión."
          ],
          [
            "O7",
            "Oportunidades",
            "Arquitectura preparada para nuevos productos",
            "Una marca global bien diseñada puede facilitar la incorporación de nuevas soluciones.",
            "Definir reglas de extensión de marca y naming de productos.",
            "Media",
            "Roadmap de productos y criterios de arquitectura."
          ],
          [
            "A1",
            "Amenazas",
            "Competencia internacional consolidada",
            "Plataformas de inteligencia comercial, proveedores de datos y soluciones tecnológicas pueden contar con mayor reconocimiento o recursos.",
            "Elegir espacios de diferenciación por segmento y mercado.",
            "Alta",
            "Benchmark competitivo por país y categoría."
          ],
          [
            "A2",
            "Amenazas",
            "Dificultad para diferenciarse",
            "Expresiones genéricas como inteligencia global o tecnología avanzada pueden resultar poco distintivas sin beneficios concretos.",
            "Evitar posicionamiento genérico y demostrar valor específico.",
            "Alta",
            "Pruebas de posicionamiento con clientes y prospectos."
          ],
          [
            "A3",
            "Amenazas",
            "Restricciones legales y de uso de datos",
            "La expansión internacional requiere revisar licencias, privacidad, derechos de uso y requisitos de cada mercado.",
            "Incorporar revisión jurídica al inicio y antes de cada despliegue.",
            "Crítica",
            "Matriz legal por jurisdicción y tipo de dato."
          ],
          [
            "A4",
            "Amenazas",
            "Cambios en búsqueda y adquisición digital",
            "Competencia publicitaria, evolución de buscadores y costos de adquisición pueden afectar la demanda.",
            "Diversificar canales y medir adquisición por mercado/segmento.",
            "Media",
            "Análisis de dependencia por canal y escenarios de CAC."
          ],
          [
            "A5",
            "Amenazas",
            "Pérdida de confianza durante la transición",
            "Clientes podrían interpretar el cambio como discontinuidad, cambio contractual o desaparición de productos conocidos.",
            "Preparar comunicación, soporte y continuidad contractual.",
            "Crítica",
            "Plan de comunicación y mapa de clientes afectados."
          ],
          [
            "A6",
            "Amenazas",
            "Expectativas distintas por mercado",
            "Cobertura, actualización, integración, soporte y condiciones comerciales pueden variar por país y tipo de cliente.",
            "Adaptar oferta y mensajes a la realidad de cada mercado.",
            "Alta",
            "Investigación de requisitos por mercado."
          ],
          [
            "A7",
            "Amenazas",
            "Desajuste entre promesa y capacidad operativa",
            "Una marca internacional eleva expectativas de cobertura, calidad y servicio.",
            "Alinear claims de marca con capacidades reales y roadmap de producto.",
            "Crítica",
            "Validación de claims con Producto y Operaciones."
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-10-foda-datasur-vs-imex",
    "legacyIndex": 10,
    "group": "FODA",
    "title": "Datasur vs IMEX",
    "source": "FODA_Marca_Global_Datacorp_Datasur_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "DIMENSIÓN",
            "DATASUR",
            "IMEX",
            "IMPLICANCIA PARA MARCA GLOBAL",
            "VALIDACIÓN PENDIENTE"
          ],
          [
            "Propuesta principal",
            "Inteligencia de comercio exterior para analizar importaciones, exportaciones, mercados, productos y competencia.",
            "Infraestructura de datos para terceros: bases de datos, APIs, Data Feeds, integraciones y plataformas White Label.",
            "Una narrativa global común, con propuestas y páginas diferenciadas por necesidad.",
            "Validar propuesta con clientes actuales y prospectos."
          ],
          [
            "Comprador típico",
            "Importadores, exportadores, analistas, investigadores y empresas que necesitan inteligencia comercial.",
            "Empresas de software, plataformas B2B, fintechs, consultoras, integradores y proveedores de inteligencia.",
            "Diseñar journeys, contenidos, argumentos y conversiones por ICP.",
            "Validar ICP por país y ciclo de venta."
          ],
          [
            "Modelo de comercialización",
            "Plataforma/suscripción, reportes, estudios y acceso a datos.",
            "BBDD, APIs, Data Feeds, integraciones y plataforma White Label.",
            "Definir arquitectura de portafolio y relación entre soluciones.",
            "Confirmar modelos, precios y márgenes actuales."
          ],
          [
            "Activos a proteger o potenciar",
            "Trayectoria, reconocimiento en determinados mercados, activos SEO, clientes y productos como D-Comex.",
            "Relaciones comerciales y capacidad de datos/integración; el documento fuente indica reconocimiento de marca aún débil.",
            "Preservar activos de Datasur y construir mayor claridad y visibilidad para IMEX.",
            "Auditoría de marca, SEO, clientes y activos técnicos."
          ],
          [
            "Mensaje a priorizar",
            "Convertir datos de comercio exterior en información útil para detectar oportunidades y tomar decisiones.",
            "Permitir que otras empresas integren y comercialicen datos y soluciones mediante APIs, Data Feeds y White Label.",
            "No usar un mensaje único y genérico para ambos; adaptar el mensaje por audiencia.",
            "Testear mensajes con usuarios de cada segmento."
          ],
          [
            "Oportunidad de crecimiento",
            "Contenido de inteligencia, estudios, reportes, plataforma y captación de demanda cualificada.",
            "Escalamiento mediante integraciones, distribución, partners y productos de terceros.",
            "Compartir reputación corporativa y recursos sin borrar la especialización comercial.",
            "Medir demanda, conversión y rentabilidad por línea."
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-11-foda-estrategias-cruzadas",
    "legacyIndex": 11,
    "group": "FODA",
    "title": "Estrategias cruzadas",
    "source": "FODA_Marca_Global_Datacorp_Datasur_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "TIPO",
            "CRUCE FODA",
            "ESTRATEGIA",
            "ACCIONES PROPUESTAS",
            "PRIORIDAD",
            "RESPONSABLE PROPUESTO",
            "INDICADOR DE SEGUIMIENTO",
            "ESTADO"
          ],
          [
            "FO — Potenciar",
            "F1, F2, F4 + O1, O2, O3",
            "Conectar el portafolio bajo una marca global con rutas diferenciadas.",
            "Definir arquitectura de soluciones; crear páginas/journeys por necesidad; priorizar casos de uso de APIs, plataformas y estudios.",
            "Alta",
            "Marketing + Producto",
            "Conversión por segmento y línea de negocio",
            "No iniciado"
          ],
          [
            "DO — Corregir",
            "D1, D2, D3 + O1, O6, O7",
            "Resolver arquitectura y fortalecer posicionamiento por negocio.",
            "Definir marca paraguas y reglas de submarcas; elaborar mensajes separados para Datasur e IMEX; plan de contenidos multisegmento.",
            "Crítica",
            "Comité + Marketing",
            "Comprensión de propuesta y reconocimiento por marca",
            "No iniciado"
          ],
          [
            "FA — Proteger",
            "F3, F5, F6 + A1, A2, A7",
            "Competir con especialización demostrable, no con mensajes genéricos.",
            "Documentar cobertura, calidad, actualización, casos y capacidades técnicas; validar claims con Producto y Comercial.",
            "Alta",
            "Producto + Marketing",
            "Pruebas de diferenciación y satisfacción",
            "No iniciado"
          ],
          [
            "DA — Reducir riesgos",
            "D4, D6 + A3, A5, A7",
            "Realizar una transición gradual con gobierno y controles.",
            "Aprobar presupuesto y cronograma; auditar activos; preparar plan legal, contractual, SEO y comunicación; realizar QA antes de migrar.",
            "Crítica",
            "Líder del proyecto + Jurídica + Tecnología",
            "Incidentes de migración, errores y continuidad de clientes",
            "No iniciado"
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-12-foda-plan-de-prioridades",
    "legacyIndex": 12,
    "group": "FODA",
    "title": "Plan de prioridades",
    "source": "FODA_Marca_Global_Datacorp_Datasur_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "ORDEN",
            "PRIORIDAD",
            "ACCIÓN",
            "DESCRIPCIÓN",
            "DEPENDENCIA",
            "ENTREGABLE",
            "RESPONSABLE PROPUESTO",
            "ESTADO",
            "FECHA OBJETIVO",
            "COMENTARIOS"
          ],
          [
            "1.0",
            "Crítica",
            "Definir arquitectura de marca",
            "Resolver relación entre Datacorp, marca global, Datasur, IMEX, Datlas y productos.",
            "Inicio del proyecto",
            "Decisión formal del comité",
            "Gerencia Corporativa + Comité",
            "No iniciado",
            "",
            ""
          ],
          [
            "2.0",
            "Crítica",
            "Priorizar mercados y segmentos",
            "Elegir países, ICP y productos para los primeros dos años.",
            "Diagnóstico y datos comerciales",
            "Matriz de mercados y segmentos priorizados",
            "Comité + Inteligencia Comercial",
            "No iniciado",
            "",
            ""
          ],
          [
            "3.0",
            "Crítica",
            "Validar diferenciación",
            "Contrastar propuesta con clientes, prospectos y competidores; definir razones para creer.",
            "Investigación de mercado",
            "Posicionamiento validado",
            "Marketing + Inteligencia Comercial",
            "No iniciado",
            "",
            ""
          ],
          [
            "4.0",
            "Crítica",
            "Proteger activos existentes",
            "Levantar SEO, dominios, clientes, contratos, plataformas y reconocimiento.",
            "Auditoría de marcas",
            "Inventario y plan de preservación",
            "Marketing + Tecnología + Jurídica",
            "No iniciado",
            "",
            ""
          ],
          [
            "5.0",
            "Alta",
            "Resolver mensajes por negocio",
            "Construir narrativa común y propuestas diferenciadas para Datasur e IMEX.",
            "Arquitectura de marca",
            "Mensajes por ICP y línea de negocio",
            "Marketing + Comercial + Producto",
            "No iniciado",
            "",
            ""
          ],
          [
            "6.0",
            "Alta",
            "Diseñar medición antes del lanzamiento",
            "Establecer línea base, metas y reporting de marca, adquisición y migración.",
            "Acceso a CRM, analítica y datos financieros",
            "Dashboard y diccionario de KPIs",
            "Marketing + Inteligencia Comercial + Finanzas",
            "No iniciado",
            "",
            ""
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-13-foda-alcance-y-metodologia",
    "legacyIndex": 13,
    "group": "FODA",
    "title": "Alcance y metodología",
    "source": "FODA_Marca_Global_Datacorp_Datasur_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "TEMA",
            "DETALLE"
          ],
          [
            "Base documental",
            "Documento “Proyecto de Creación de Marca Global Datacorp” y antecedentes compartidos sobre Datasur, IMEX, sus productos, audiencias y desafíos de marketing."
          ],
          [
            "Hechos del documento fuente",
            "El proyecto propone ocho etapas de construcción de marca; reconoce activos de Datasur, posicionamiento aún débil de IMEX y potencial de Datlas; identifica riesgos de migración, diferenciación, claridad jurídica y capacidad operativa."
          ],
          [
            "Contexto aportado para el análisis",
            "Datasur: D-Comex, reportes, estudios y APIs para inteligencia de comercio exterior. IMEX: bases de datos, APIs, integraciones, Data Feeds y plataformas White Label para terceros."
          ],
          [
            "Inferencias estratégicas",
            "La complementariedad del portafolio, la oportunidad de cross-sell, los mercados prioritarios y la diferenciación competitiva son hipótesis que requieren validación; no deben presentarse como resultados de investigación ya ejecutada."
          ],
          [
            "Limitaciones",
            "No se cuenta aquí con un benchmark actualizado por país, investigación de clientes, datos financieros completos ni auditoría legal por jurisdicción. Los factores externos se deben verificar antes de una decisión de inversión."
          ],
          [
            "Uso recomendado",
            "Revisar los factores con responsables de Marketing, Comercial, Producto, Tecnología, Inteligencia Comercial y Jurídica. Añadir evidencia, asignar responsables y actualizar estados en cada comité."
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-14-foda-foco-empresas-2027",
    "legacyIndex": 14,
    "group": "FODA",
    "title": "FOCO EMPRESAS 2027",
    "source": "FODA_Marca_Global_Datacorp_Datasur_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Estrategia diferenciada para las tres empresas 2027",
            ""
          ],
          [
            "Datasur",
            "Profundizar mercados y fidelizar"
          ],
          [
            "Foco geográfico",
            "Latinoamérica y Europa, con prioridad en España."
          ],
          [
            "Objetivo: ",
            "fortalecer la presencia comercial, aumentar la recurrencia de uso y construir una relación continua con los usuarios."
          ],
          [
            "Propuesta de valor: ",
            "ayudar a empresas y profesionales a descubrir oportunidades comerciales a partir de datos de comercio exterior."
          ],
          [
            "IMEX",
            "Monetización y diversificación"
          ],
          [
            "Foco geográfico",
            " India y Asia."
          ],
          [
            "Objetivo",
            "Monetizar las bases de datos existentes, desarrollar nuevas fuentes de ingresos y explorar segmentos de datos alternativos."
          ],
          [
            "Propuesta de valor",
            "ofrecer datos estructurados, fuentes especializadas e infraestructura de integración para empresas que necesitan enriquecer sus productos y procesos."
          ],
          [
            "Datlas",
            "Escalamiento tecnológico"
          ],
          [
            "Foco geográfico",
            " Estados Unidos, Canadá y Europa."
          ],
          [
            "Objetivo",
            "escalar el modelo White Label y preparar el lanzamiento de la plataforma premium."
          ],
          [
            "Propuesta de valor",
            "permitir que otras empresas comercialicen inteligencia comercial mediante una plataforma adaptable a su marca y necesidades."
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-15-plan-de-proyecto-carta-gantt",
    "legacyIndex": 15,
    "group": "Plan de proyecto",
    "title": "Carta Gantt",
    "source": "Matriz_Proyecto_Marca_Datacorp.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Fase",
            "Acción / actividad",
            "Inicio",
            "Término",
            "Responsable principal",
            "Dependencias",
            "Entregable / hito",
            "Prioridad",
            "Estado",
            "26/10/2026",
            "26/11/2026",
            "26/12/2026",
            "27/01/2026",
            "27/02/2026",
            "27/03/2026",
            "27/04/2026",
            "27/05/2026",
            "27/06/2026"
          ],
          [
            "Gobierno y definición",
            "Nombrar sponsor ejecutivo, líder único y comité transversal",
            "29/10/2026",
            "06/11/2026",
            "Gerencia Datacorp",
            "—",
            "Gobierno del proyecto y responsables formalizados",
            "Crítica",
            "Iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Gobierno y definición",
            "Realizar kickoff y alinear alcance, objetivos, criterios de éxito y forma de trabajo",
            "19/10/2026",
            "",
            "Líder del proyecto + Marketing",
            "1.1",
            "Acta de inicio y alcance aprobado",
            "Crítica",
            "Iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Gobierno y definición",
            "Resolver decisiones estratégicas: marca independiente o respaldada por Datacorp; rol de las marcas actuales",
            "19/10/2026",
            "13/11/2026",
            "Comité ejecutivo",
            "1.1",
            "Decisión de arquitectura preliminar",
            "Crítica",
            "En proceso",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Diagnóstico de marca",
            "Inventariar marcas, productos, submarcas, dominios, sitios, redes, campañas y materiales actuales",
            "30/10/2026",
            "09/11/2026",
            "Marketing + gerentes de negocio",
            "1.2",
            "Inventario consolidado de activos",
            "Alta",
            "En proceso",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Diagnóstico de marca",
            "Auditar tráfico, búsquedas de marca, rankings, backlinks, URLs, conversiones y rendimiento SEO",
            "20/10/2026",
            "15/11/2026",
            "SEO +  Growth ",
            "2.1",
            "Baseline SEO y analítica por marca/dominio",
            "Alta",
            "En proceso",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Diagnóstico de marca",
            "Entrevistar internamente a equipos comerciales, producto, tecnología y atención al cliente",
            "09/11/2026",
            "13/11/2026",
            "Marketing + líderes de negocio",
            "2.1",
            "Hallazgos internos y fricciones de marca/portafolio",
            "Alta",
            "Realizado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Diagnóstico de marca",
            "Determinar reconocimiento, atributos y activos que se deben conservar, transformar o migrar",
            "23/11/2026",
            "04/12/2026",
            "Marketing + Inteligencia Comercial",
            "2.2; 2.3; 2.4",
            "Diagnóstico de marca y mapa de riesgos aprobado",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Investigación de mercado",
            "Consolidar estudios previos de Macroscope, How2Go, Transformer y otras fuentes disponibles",
            "19/10/2026",
            "20/11/2026",
            "Marketing+Inteligencia Comercial",
            "1.4",
            "Repositorio de investigación y brechas de información",
            "Alta",
            "En proceso",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Investigación de mercado",
            "Definir segmentos/ICP y necesidades: importadores/exportadores, analistas, compradores de datos, integradores, white-label y grandes empresas",
            "16/11/2026",
            "04/12/2026",
            "Marketing + Comercial + Producto",
            "3.1",
            "Matriz ICP, necesidades, pains y jobs-to-be-done",
            "Crítica",
            "En proceso",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Investigación de mercado",
            "Mapear competidores, referentes internacionales, categorías, claims, precios y espacios de diferenciación",
            "20/10/2026",
            "20/11/2026",
            "Marketing + Inteligencia Comercial",
            "3.1",
            "Mapa competitivo y territorios de posicionamiento",
            "Alta",
            "En proceso",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Investigación de mercado",
            "Definir propuesta de valor por segmento y relación entre marca maestra, soluciones y productos",
            "09/11/2026",
            "20/11/2026",
            "Marketing + Producto + Comercial",
            "2.5; 3.4",
            "Mapa de valor por audiencia y portafolio",
            "Crítica",
            "En proceso",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Estrategia y arquitectura",
            "Definir propósito, visión, promesa, posicionamiento, personalidad, diferenciadores y razones para creer",
            "01/12/2026",
            "18/12/2026",
            "Marketing + Comité ejecutivo",
            "2.5; 3.5",
            "Plataforma estratégica de marca v1",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Estrategia y arquitectura",
            "Diseñar arquitectura de marca: marca global respaldada por Datacorp y relación con Datasur, IMEX/Imexdbusiness y Datlas",
            "07/12/2026",
            "21/12/2026",
            "Marketing + Gerencias + Producto",
            "1.3; 3.5",
            "Modelo de arquitectura de marca y endosos",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Estrategia y arquitectura",
            "Ordenar portafolio por necesidad y tipo de comprador, sin confundir inteligencia comercial con infraestructura de datos",
            "14/12/2026",
            "08/01/2027",
            "Producto + Marketing + Comercial",
            "4.2",
            "Taxonomía de soluciones, productos y módulos",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Estrategia y arquitectura",
            "Definir mensajes, beneficios y casos de uso por segmento; establecer límites de promesa según capacidades reales",
            "14/12/2026",
            "08/01/2027",
            "Marketing + Desarrollo",
            "4.1; 4.3",
            "Matriz de mensajes por segmento y producto",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Estrategia y arquitectura",
            "Aprobar plataforma estratégica y arquitectura de marca",
            "11/01/2027",
            "15/01/2027",
            "Comité ejecutivo",
            "4.1; 4.2; 4.3; 4.4",
            "Gate 1: estrategia y arquitectura aprobadas",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Naming y protección legal",
            "Definir territorios creativos y criterios ponderados de evaluación del nombre",
            "04/01/2027",
            "15/01/2027",
            "Marketing ",
            "4.1",
            "Brief de naming y matriz de evaluación",
            "Alta",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Naming y protección legal",
            "Generar alternativas de nombre y filtrar pronunciación, significado, memorabilidad y amplitud de portafolio",
            "14/12/2027",
            "28/12/2027",
            "Marketing",
            "5.1",
            "Longlist y shortlist de 5–8 nombres",
            "Alta",
            "En proceso",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Naming y protección legal",
            "Revisar dominios, redes, búsquedas, asociaciones lingüísticas y disponibilidad marcaria preliminar",
            "04/01/2027",
            "14/01/2027",
            "Legal + SEO + Marketing",
            "5.2",
            "Informe preliminar de viabilidad",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Naming y protección legal",
            "Realizar revisión legal formal y aprobar nombre; asegurar dominios prioritarios",
            "18/01/2027",
            "19/02/2027",
            "Legal + Gerencia",
            "5.3; 5.4",
            "Gate 2: nombre aprobado y plan de protección",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Identidad visual y verbal",
            "Desarrollar concepto creativo, sistema de logotipo, símbolo y versiones principales",
            "01/02/2027",
            "27/02/2027",
            "Diseño + UX/UI ",
            "5.5",
            "Rutas visuales y logotipo seleccionado",
            "Alta",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Identidad visual y verbal",
            "Definir paleta, tipografías, iconografía, visualización de datos, UI y accesibilidad",
            "01/02/2027",
            "27/02/2027",
            "Diseño + UX/UI ",
            "6.1",
            "Sistema visual y componentes digitales",
            "Alta",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Identidad visual y verbal",
            "Desarrollar storytelling, tagline/claims, tono de voz, vocabulario y guía editorial multilingüe",
            "01/02/2027",
            "27/02/2027",
            "Marketing + Contenidos",
            "4.4; 5.5",
            "Sistema verbal y mensajes por audiencia",
            "Alta",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Identidad visual y verbal",
            "Diseñar aplicaciones comerciales: presentaciones, cotizaciones, firmas, redes, informes, eventos y fichas de producto",
            "01/02/2027",
            "27/02/2027",
            "Diseño + Marketing + Comercial",
            "6.2; 6.3",
            "Kit de aplicaciones comerciales",
            "Alta",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Identidad visual y verbal",
            "Crear manual de marca, reglas de co-branding/endoso y gobernanza de uso",
            "01/02/2027",
            "02/04/2027",
            "Marketing + Agencia + Legal",
            "6.2; 6.3",
            "Manual de marca v1 aprobado",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Experiencia digital y web",
            "Definir arquitectura de información web por necesidades, industrias, tipo de usuario y soluciones",
            "18/01/2027",
            "12/02/2027",
            "UX + Marketing + Producto",
            "4.3; 4.4",
            "Sitemap, navegación y journeys priorizados",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Experiencia digital y web",
            "Diseñar recorridos de conversión: demo, cotización, prueba, registro, API, partner y contacto",
            "25/01/2027",
            "19/02/2027",
            "UX + Growth + Comercial",
            "7.1",
            "Mapa de conversión y requerimientos CRM",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Experiencia digital y web",
            "Definir estrategia SEO internacional, SEO programático, migración de URLs, idiomas, hreflang y redirecciones",
            "01/02/2027",
            "26/02/2027",
            "SEO + Growth ",
            "2.2; 7.1",
            "Plan SEO técnico y de migración",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Experiencia digital y web",
            "Preparar wireframes, prototipo UX/UI y pruebas tempranas de navegación",
            "15/02/2027",
            "12/03/2027",
            "UX/UI + Producto",
            "7.1; 7.2; 6.1",
            "Prototipo navegable validado internamente",
            "Alta",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Experiencia digital y web",
            "Definir contenidos web: soluciones, productos, sectores, recursos, casos, inteligencia abierta y comunidad",
            "22/02/2027",
            "26/03/2027",
            "Marketing + Desarrollo",
            "4.4; 6.3; 7.1",
            "Inventario y brief de contenidos web",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Experiencia digital y web",
            "Especificar integración con Zoho CRM, enrutamiento a Macroscope/IMEX/Datlas y reglas de asignación",
            "22/02/2027",
            "19/03/2027",
            "CRM",
            "7.2",
            "Especificación funcional y matriz de enrutamiento",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Experiencia digital y web",
            "Desarrollar portal, componentes, formularios, analítica, rendimiento, accesibilidad y seguridad",
            "15/03/2027",
            "14/05/2027",
            "Desarrollo + UX/UI + Marketing",
            "7.4; 7.5; 7.6",
            "Portal beta funcional",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Experiencia digital y web",
            "Redactar, traducir y cargar contenidos prioritarios; implementar metadatos y enlaces internos",
            "05/04/2027",
            "21/05/2027",
            "Contenidos + SEO + Producto",
            "7.5; 6.5",
            "Contenidos cargados y optimizados",
            "Alta",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Experiencia digital y web",
            "Integrar formularios/CRM y probar asignación, tracking, consentimientos y notificaciones",
            "19/04/2027",
            "21/05/2027",
            "Growth + SEO",
            "7.6; 7.7",
            "Flujos CRM y medición validados",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Validación y preparación",
            "Realizar validación estratégica, comercial y de usabilidad con representantes de los segmentos",
            "19/04/2027",
            "30/04/2027",
            "Marketing + Comercial + UX",
            "6.5; 7.4",
            "Informe de validación y ajustes priorizados",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Validación y preparación",
            "Ajustar marca, mensajes, arquitectura de productos y web según resultados",
            "03/05/2027",
            "14/05/2027",
            "Marketing + Diseño + Producto + UX",
            "8.1",
            "Versión final aprobada",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Validación y preparación",
            "Preparar plan de lanzamiento, narrativa de transición, FAQ, comunicaciones a clientes y partners",
            "05/04/2027",
            "14/05/2027",
            "Marketing  + Comercial",
            "4.2; 6.3; 6.5",
            "Plan de comunicación y kit de transición",
            "Alta",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Validación y preparación",
            "Ejecutar QA integral: dispositivos, idiomas, formularios, analítica, SEO, accesibilidad, rendimiento y seguridad",
            "17/05/2027",
            "28/05/2027",
            "Tecnología + SEO + UX + Growth",
            "7.7; 7.8; 7.9; 8.2",
            "Checklist de go-live aprobado",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Validación y preparación",
            "Definir baseline y tablero de KPIs de marca, demanda, SEO, conversión, adopción y retención",
            "10/05/2027",
            "28/05/2027",
            "Growth ",
            "2.2; 2.3",
            "Dashboard inicial y metas acordadas",
            "Alta",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Lanzamiento y transición",
            "Lanzar marca global y portal en una primera ola controlada",
            "31/05/2027",
            "04/06/2027",
            "Marketing + Tecnología + Comercial",
            "9.1",
            "Marca y portal publicados",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Lanzamiento y transición",
            "Activar campaña coordinada para clientes, prospectos, colaboradores, partners y mercados prioritarios",
            "31/05/2027",
            "11/06/2027",
            "Marketing + Comunicaciones + Comercial",
            "9.2",
            "Campaña de lanzamiento y comunicaciones desplegadas",
            "Alta",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Lanzamiento y transición",
            "Implementar redirecciones y migración SEO por oleadas, preservando URLs de valor y accesos a servicios",
            "31/05/2027",
            "15/06/2027",
            "SEO + Tecnología + Producto",
            "7.3; 9.2",
            "Migración inicial monitorizada",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Lanzamiento y transición",
            "Ejecutar estrategia de transición de D-Comex y demás productos bajo la marca maestra, con comunicación explícita de continuidad",
            "31/05/2027",
            "15/06/2027",
            "Marketing + Producto + Customer Success",
            "4.3; 8.3; 9.2",
            "Plan de transición de producto por etapas activado",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Consolidación inicial",
            "Monitorear tráfico, indexación, rankings, leads, conversiones, errores, consultas y feedback de clientes",
            "01/06/2027",
            "15/06/2027",
            "SEO + Growth ",
            "9.2; 9.4",
            "Reporte de monitoreo de las primeras dos semanas",
            "Crítica",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Consolidación inicial",
            "Corregir incidencias prioritarias y optimizar páginas, formularios, enrutamiento y mensajes",
            "08/06/2027",
            "15/06/2027",
            "Marketing",
            "10.1",
            "Backlog priorizado y correcciones críticas ejecutadas",
            "Alta",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ],
          [
            "Consolidación inicial",
            "Presentar evaluación ejecutiva de resultados y hoja de ruta de consolidación julio-diciembre 2027",
            "08/06/2027",
            "15/06/2027",
            "Líder del proyecto ",
            "10.1; 10.2",
            "Informe de cierre de fase y roadmap de consolidación",
            "Alta",
            "No iniciado",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-16-plan-de-proyecto-reunion-semanal",
    "legacyIndex": 16,
    "group": "Plan de proyecto",
    "title": "Reunión semanal",
    "source": "Matriz_Proyecto_Marca_Datacorp.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Semana / fecha",
            "Fase revisada",
            "Logros desde la última reunión",
            "Tareas completadas",
            "Próximos hitos",
            "Bloqueos / riesgos",
            "Decisión requerida",
            "Responsable de resolver",
            "Fecha compromiso",
            "Acuerdos y notas"
          ],
          [
            "19/ 10",
            "Entrega de documentación y excel para dar inicio al proyecto.",
            "",
            "",
            "Revisión de competencia para evaluar posición en el mercado",
            "",
            "",
            "Coordinadora de Marketing digital - Diseñadora gráfica -  Analista de experiencia de usuario",
            "23/10/2026",
            "Revisión de documentación y de competencia"
          ],
          [
            "22/10/2026",
            "Análisis y revisión de competidores",
            "Propuesta de header para segmentar los servicios en una sola página",
            "Revisión de competidores, revisión de propuesta de menú para segmentar mejor a los usuarios y servicios.",
            "Revisión de cómo mostrar cada productos a los usuarios, dependiendo de cada segmento desde la solución y dolor.  ",
            "",
            "",
            "Coordinadora de Marketing digital - Diseñadora gráfica -  Analista de experiencia de usuario",
            "30/10/2026",
            "*Revisar como presentar cada servicio. *Propuesta de testing en blog presentando los servicios en las diferentes marcas para evaluar recepción"
          ],
          [
            "30/10/2026",
            "Segmentación de servicios",
            "",
            "Revisión de segmentación de servicios asociado a los dolores, Revisión de cómo empresas del rubro de comex se han integrado y lo han ejecutado. Información de creación de carta gantt",
            "Pauta entrevista para áreas comerciales para conocer dolores y nombre de la marca (tentativos)",
            "",
            "1º Paso para comunicar esta integración de marca a los usuarios",
            "Coordinadora de Marketing digital - Diseñadora gráfica -  Analista de experiencia de usuario",
            "06/11/2026",
            "*Revisión preguntas para conocer el servicio *Definir entrevistas con áreas comerciales "
          ],
          [
            "06/11/2026",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-17-plan-de-proyecto-riesgos",
    "legacyIndex": 17,
    "group": "Plan de proyecto",
    "title": "Riesgos",
    "source": "Matriz_Proyecto_Marca_Datacorp.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "ID",
            "Riesgo",
            "Prevención / mitigación",
            "Responsable propuesto",
            "Probabilidad 1-5",
            "Impacto 1-5",
            "Exposición",
            "Señal de alerta",
            "Estado"
          ],
          [
            "R1",
            "Pérdida de reconocimiento de Datasur u otras marcas",
            "Migración progresiva, auditoría de activos y comunicación clara",
            "Marketing",
            "3.0",
            "5.0",
            "15",
            "Caída de búsquedas, tráfico, renovaciones",
            "Abierto"
          ],
          [
            "R2",
            "Nombre no registrable o dominio no disponible",
            "Revisión jurídica temprana y alternativas de respaldo",
            "Jurídica",
            "3.0",
            "5.0",
            "15",
            "Conflictos de marca o dominio",
            "Abierto"
          ],
          [
            "R3",
            "Caída de tráfico orgánico durante migración",
            "Mapa de URLs, redirecciones probadas y monitoreo",
            "Marketing SEO + Tecnología",
            "3.0",
            "5.0",
            "15",
            "404, caída de ranking o sesiones",
            "Abierto"
          ],
          [
            "R4",
            "Confusión sobre qué sociedad factura o responde",
            "Definir reglas legales y mensajes comerciales",
            "Jurídica + Comercial",
            "3.0",
            "5.0",
            "15",
            "Consultas, errores de facturación",
            "Abierto"
          ],
          [
            "R5",
            "Promesa de marca superior a capacidades reales",
            "Validar claims con Producto y evidencia disponible",
            "Producto",
            "3.0",
            "5.0",
            "15",
            "Reclamos o brechas de servicio",
            "Abierto"
          ],
          [
            "R6",
            "Retrasos por falta de decisiones, presupuesto o responsables",
            "Acordar líder, comité, alcance y calendario al inicio",
            "Líder del proyecto",
            "4.0",
            "5.0",
            "20",
            "Hitos sin fecha o bloqueados",
            "Abierto"
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-18-transicion-resumen-ejecutivo",
    "legacyIndex": 18,
    "group": "Transición",
    "title": "Resumen ejecutivo",
    "source": "Plan_Transicion_Marca_Datasur_Datlas_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Plan de transición de marca: Datasur, Datlas e IMEX",
            "Guía para unificar marcas y proteger valor de marca, posicionamiento digital y continuidad comercial."
          ],
          [
            "Objetivo",
            "Integrar las marcas sin perder reconocimiento, confianza, tráfico orgánico, clientes ni oportunidades comerciales."
          ],
          [
            "Principio central",
            "La unificación no es solo un cambio de nombre: debe gestionar marca, productos, clientes, activos digitales, tecnología y procesos comerciales."
          ],
          [
            "Modelo a evaluar",
            "Marca maestra única con productos diferenciados. Compararla con marca única sin submarcas y grupo de marcas respaldadas."
          ],
          [
            "Activos a proteger",
            "Valor de marca: reconocimiento, reputación, confianza y asociaciones. Posicionamiento digital: tráfico orgánico, consultas, URLs, backlinks, contenido indexado y búsquedas de marca."
          ],
          [
            "Casos de referencia",
            "Experian/Sinacofi Buró; S&P Global/IHS Markit; Dun & Bradstreet; Accuris. Los resultados públicos no prueban que el branding por sí solo causara mejoras financieras."
          ],
          [
            "Riesgo principal",
            "Cambiar nombres o dominios antes de definir propuesta de valor, arquitectura de productos, comunicación y migración SEO."
          ],
          [
            "Etapas sugeridas",
            "1) Preparación y línea base; 2) transición y asociación entre marcas; 3) consolidación y medición."
          ],
          [
            "Condición 1",
            "Ninguna página estratégica debe desaparecer sin un destino equivalente definido."
          ],
          [
            "Condición 2",
            "Los clientes deben comprender la continuidad de servicios, contratos, accesos, soporte y facturación."
          ],
          [
            "Condición 3",
            "La nueva marca debe heredar atributos concretos de las anteriores y explicar el beneficio de la integración."
          ],
          [
            "Nota metodológica",
            "La migración controlada reduce riesgos, pero no garantiza mantener todas las posiciones SEO. Definir plazos y umbrales con datos reales."
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-19-transicion-casos-de-referencia",
    "legacyIndex": 19,
    "group": "Transición",
    "title": "Casos de referencia",
    "source": "Plan_Transicion_Marca_Datasur_Datlas_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Caso",
            "Qué hicieron",
            "Cómo gestionaron el valor",
            "Resultados o señales reportadas",
            "Aplicación al proyecto",
            "Fuente"
          ],
          [
            "Experian + Sinacofi Buró (Chile)",
            "Experian adquirió una participación mayoritaria en las operaciones de Sinacofi Buró y luego el negocio pasó a utilizar la marca Experian.",
            "Comunicaron la combinación de datos locales con capacidades de análisis y la continuidad de la propuesta.",
            "La comunicación pública destacó la combinación de capacidades; no se atribuye un resultado financiero específico al cambio de marca.",
            "Explicar qué se integra, qué sigue funcionando y qué beneficios recibe el cliente.",
            "https://www.experian.cl/comunicado-de-prensa"
          ],
          [
            "S&P Global + IHS Markit",
            "Fusión completada en febrero de 2022; integración de activos de datos, capacidades y operaciones.",
            "Mantuvieron productos especializados e integraron capacidades comerciales y tecnológicas.",
            "S&P Global informó 6.700 referencias para venta cruzada generadas desde el cierre de la fusión en su carta anual de 2022; no equivale a ventas cerradas.",
            "Unificar narrativa y coordinar ventas, datos y procesos sin eliminar prematuramente el valor de los productos.",
            "https://www.spglobal.com/en/annual-reports/2022/ceo-letter"
          ],
          [
            "Dun & Bradstreet",
            "Reposicionamiento desde una imagen tradicionalmente asociada a informes de crédito hacia datos, analítica y decisiones empresariales.",
            "Simplificó la arquitectura de marca y mantuvo productos reconocibles como D&B Hoovers y D&B Connect.",
            "La consultora participante reporta mejoras en percepción y credibilidad; no es una medición financiera independiente.",
            "Marca maestra fuerte y nombres de producto diferenciados cuando aporten reconocimiento.",
            "https://vivaldigroup.com/es/work/how-vivaldi-repositioned-dun-bradstreet-for-the-modern-data-economy/"
          ],
          [
            "Accuris",
            "Nueva identidad tras la adquisición del negocio Engineering Solutions de S&P Global por KKR.",
            "Desarrolló nueva identidad y narrativa para una etapa empresarial distinta.",
            "La agencia participante reporta recepción positiva, tráfico web y consultas; sin cifras suficientes para atribución causal.",
            "La nueva marca debe representar el futuro y acompañarse de una transición de activos digitales y mensajes.",
            "https://www.emotif.us/accuris"
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-20-transicion-activos-a-proteger",
    "legacyIndex": 20,
    "group": "Transición",
    "title": "Activos a proteger",
    "source": "Plan_Transicion_Marca_Datasur_Datlas_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Activo",
            "Qué incluye",
            "Riesgo",
            "Acción preventiva",
            "Responsable sugerido"
          ],
          [
            "Reconocimiento",
            "Notoriedad, asociaciones y reputación.",
            "Clientes no reconocen la nueva marca.",
            "Estudio previo y comunicación por segmentos.",
            "Marketing / Investigación"
          ],
          [
            "Confianza y atributos",
            "Cobertura de datos, experiencia, calidad, soporte y conocimiento de mercado.",
            "Pérdida de diferenciación.",
            "Definir atributos que hereda la nueva marca y respaldarlos con evidencia.",
            "Marketing / Producto"
          ],
          [
            "Clientes y contratos",
            "Cartera, contratos, renovaciones, accesos, facturación y soporte.",
            "Confusión o pérdida de clientes.",
            "Plan de comunicación y validación legal/operativa.",
            "Comercial / Customer Success / Legal"
          ],
          [
            "Dominios y URLs",
            "Dominios, páginas posicionadas y documentación.",
            "Pérdida de tráfico, errores 404 y conversiones.",
            "Inventario, mapeo URL a URL y redirecciones probadas.",
            "SEO / Web / IT"
          ],
          [
            "Backlinks",
            "Enlaces externos a dominios actuales.",
            "Pérdida de señales externas.",
            "Priorizar URLs con enlaces y pedir actualización a socios cuando sea posible.",
            "SEO / PR"
          ],
          [
            "Contenido indexado",
            "Artículos, estudios, glosario, productos y recursos.",
            "Pérdida de rankings y autoridad.",
            "Conservar contenido útil y su intención de búsqueda.",
            "SEO / Contenidos"
          ],
          [
            "Demanda de marca",
            "Búsquedas de Datasur, Datlas, IMEX y variantes.",
            "Demanda histórica no conecta con la nueva marca.",
            "Asociación temporal de nombres y monitoreo de consultas.",
            "SEO / Brand"
          ],
          [
            "Productos",
            "Nombres, funcionalidades, APIs y experiencia de usuario.",
            "Confusión sobre qué solución resuelve cada necesidad.",
            "Arquitectura de productos y descriptores claros.",
            "Producto / Marketing / Tecnología"
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-21-transicion-transicion-por-etapas",
    "legacyIndex": 21,
    "group": "Transición",
    "title": "Transición por etapas",
    "source": "Plan_Transicion_Marca_Datasur_Datlas_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Etapa",
            "Periodo orientativo",
            "Objetivo",
            "Acciones",
            "Entregables",
            "Criterio para avanzar"
          ],
          [
            "1. Preparación",
            "Por definir",
            "Establecer línea base y decisiones antes de anunciar.",
            "Auditar reconocimiento; inventariar productos y públicos; exportar datos SEO; mapear dominios, URLs y backlinks; revisar clientes y contratos.",
            "Línea base de marca y digital; inventario de activos; mapa de riesgos.",
            "Línea base confiable y activos críticos identificados."
          ],
          [
            "2. Transición",
            "Por definir",
            "Introducir la nueva marca sin romper la relación con las anteriores.",
            "Comunicar asociación entre marcas; actualizar materiales; formar ventas; preparar sitio y redirecciones; conservar referencias históricas útiles.",
            "Mensajes de transición; sitio preparado; plan de migración; kit comercial y FAQ.",
            "QA técnico, pruebas de usuario y aprobaciones completadas."
          ],
          [
            "3. Consolidación",
            "Por definir",
            "Aumentar reconocimiento y optimizar el ecosistema.",
            "Concentrar campañas; actualizar perfiles; medir búsquedas y tráfico; corregir errores; mantener nombres de producto útiles.",
            "Dashboard; plan de optimización; informe post-lanzamiento.",
            "Indicadores dentro de umbrales acordados o con acciones correctivas activas."
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-22-transicion-plan-seo-migracion",
    "legacyIndex": 22,
    "group": "Transición",
    "title": "Plan SEO migración",
    "source": "Plan_Transicion_Marca_Datasur_Datlas_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Paso",
            "Tarea",
            "Detalle operativo",
            "Prioridad",
            "Validación"
          ],
          [
            "1",
            "Línea base SEO",
            "Exportar clics, impresiones, CTR, posiciones, consultas, páginas y países desde Search Console; revisar GA4 y conversiones por dominio.",
            "Crítica",
            "Exportaciones fechadas por dominio."
          ],
          [
            "2",
            "Inventario de URLs",
            "Rastrear sitios con Screaming Frog; registrar status code, indexabilidad, canonical, title, H1, tráfico y backlinks si están disponibles.",
            "Crítica",
            "Inventario consolidado."
          ],
          [
            "3",
            "Mapeo URL a URL",
            "Asignar a cada URL relevante un destino equivalente. No redirigir indiscriminadamente todas las páginas a la home.",
            "Crítica",
            "Mapa con URL antigua, nueva y motivo."
          ],
          [
            "4",
            "Redirecciones",
            "Implementar 301 permanentes cuando corresponda; evitar cadenas, bucles y destinos irrelevantes.",
            "Crítica",
            "Pruebas automáticas y manuales."
          ],
          [
            "5",
            "SEO on-page",
            "Actualizar enlaces internos, canonicals, títulos, metadescripciones, datos estructurados cuando corresponda y referencias de marca.",
            "Alta",
            "Rastreo QA antes y después."
          ],
          [
            "6",
            "Internacionalización",
            "Revisar hreflang, equivalencias por idioma, canonicals y sitemaps de versiones locales.",
            "Alta",
            "Validación de etiquetas y URLs."
          ],
          [
            "7",
            "Sitemaps y rastreo",
            "Publicar sitemap actualizado; revisar robots.txt y acceso de rastreo e indexación.",
            "Alta",
            "Sitemap procesado y páginas indexables."
          ],
          [
            "8",
            "Backlinks",
            "Priorizar enlaces externos valiosos y pedir actualización a socios, directorios y medios cuando sea posible.",
            "Media-alta",
            "Lista de backlinks y solicitudes."
          ],
          [
            "9",
            "Lanzamiento",
            "Verificar HTTPS, redirecciones, formularios, analítica, píxeles, consentimiento y páginas críticas.",
            "Crítica",
            "Checklist de lanzamiento firmado."
          ],
          [
            "10",
            "Monitorización",
            "Revisar inicialmente a diario y luego semanalmente: 404, 5xx, indexación, clics, impresiones, tráfico, leads y conversiones.",
            "Crítica",
            "Dashboard de incidencias."
          ],
          [
            "11",
            "Marcas históricas",
            "Mantener referencias como 'antes Datasur' cuando sea útil y apropiado; conservar páginas de transición si aportan claridad.",
            "Media-alta",
            "Mensajes aprobados."
          ],
          [
            "12",
            "Correcciones",
            "Investigar caídas por plantilla, idioma, directorio, consulta o landing page; corregir causas concretas.",
            "Crítica",
            "Registro de causa raíz y resolución."
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-23-transicion-matriz-de-comunicacion",
    "legacyIndex": 23,
    "group": "Transición",
    "title": "Matriz de comunicación",
    "source": "Plan_Transicion_Marca_Datasur_Datlas_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Audiencia",
            "Qué debe saber",
            "Mensaje central",
            "Canales",
            "Momento",
            "Responsable"
          ],
          [
            "Clientes activos",
            "Continuidad de servicio, accesos, contratos, soporte y facturación.",
            "La marca evoluciona; los servicios contratados y los equipos de atención continúan según el plan comunicado.",
            "Email personalizado, ejecutivo de cuenta, FAQ, reuniones.",
            "Antes del lanzamiento y durante la transición.",
            "Comercial / Customer Success"
          ],
          [
            "Prospectos",
            "Qué ofrece la nueva marca y cómo se relaciona con soluciones existentes.",
            "Un ecosistema de soluciones para necesidades complementarias de datos, inteligencia e integración.",
            "Web, campañas, LinkedIn, webinars y materiales comerciales.",
            "Anuncio y consolidación.",
            "Marketing"
          ],
          [
            "Partners y proveedores",
            "Cambios de identidad, URLs, contratos, facturación y materiales.",
            "La integración simplifica la relación y define puntos de contacto claros.",
            "Comunicación directa, documentación y reuniones.",
            "Antes de la transición.",
            "Alianzas / Operaciones"
          ],
          [
            "Equipo comercial",
            "Arquitectura de productos, nomenclatura, pitch, pricing y derivación de leads.",
            "Una narrativa común con soluciones diferenciadas por necesidad.",
            "Capacitación, playbook, CRM y sesiones internas.",
            "Antes del anuncio público.",
            "Marketing / Ventas / Producto"
          ],
          [
            "Equipo interno",
            "Razón del cambio, visión, roles y calendario.",
            "La nueva marca integra capacidades y facilita una experiencia coherente.",
            "Town hall, intranet, FAQ y liderazgo.",
            "Antes y durante.",
            "Dirección / RR. HH. / Comunicaciones"
          ],
          [
            "Usuarios digitales",
            "Correspondencia entre páginas antiguas y nuevas.",
            "Las páginas relevantes tienen destinos equivalentes y contenido actualizado.",
            "Web, redirecciones, sitemaps, perfiles y analítica.",
            "Lanzamiento y seguimiento.",
            "SEO / Web / IT"
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-24-transicion-kpis-y-alertas",
    "legacyIndex": 24,
    "group": "Transición",
    "title": "KPIs y alertas",
    "source": "Plan_Transicion_Marca_Datasur_Datlas_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Dimensión",
            "KPI",
            "Cómo medir",
            "Frecuencia",
            "Alerta sugerida (definir con baseline)",
            "Responsable"
          ],
          [
            "Marca",
            "Reconocimiento espontáneo/asistido",
            "Encuestas comparables antes y después.",
            "Prelanzamiento y trimestral",
            "Caída frente a baseline o confusión alta.",
            "Brand / Investigación"
          ],
          [
            "Marca",
            "Asociación de servicios",
            "Encuesta sobre qué ofrece la nueva marca y qué productos se relacionan con ella.",
            "Prelanzamiento y trimestral",
            "Los públicos no la conectan con categorías prioritarias.",
            "Brand / Marketing"
          ],
          [
            "SEO",
            "Clics orgánicos no asociados a marca",
            "Search Console por consulta y landing page.",
            "Semanal / mensual",
            "Caída persistente tras considerar estacionalidad.",
            "SEO"
          ],
          [
            "SEO",
            "Clics de marca",
            "Search Console para Datasur, Datlas, IMEX y nombre nuevo/variantes.",
            "Semanal / mensual",
            "Búsquedas históricas no encuentran destino esperado.",
            "SEO"
          ],
          [
            "SEO técnico",
            "Errores 404 / 5xx",
            "Crawl y logs cuando estén disponibles.",
            "Diario al inicio",
            "Páginas críticas con error o aumento anormal.",
            "SEO / IT"
          ],
          [
            "SEO técnico",
            "Indexación de URLs estratégicas",
            "Search Console e inspección de URLs.",
            "Semanal",
            "Páginas prioritarias excluidas o sin indexar.",
            "SEO"
          ],
          [
            "Web",
            "Conversión por solución",
            "Eventos GA4 y CRM por landing/producto.",
            "Semanal / mensual",
            "Caída en formularios, demos o leads.",
            "Marketing Ops"
          ],
          [
            "Comercial",
            "MQL, SQL y oportunidades",
            "CRM con definiciones y atribución acordadas.",
            "Mensual",
            "Descenso de calidad o volumen más allá de variación esperada.",
            "Marketing / Ventas"
          ],
          [
            "Clientes",
            "Retención y renovaciones",
            "CRM, facturación y Customer Success.",
            "Mensual / trimestral",
            "Aumento de cancelaciones o consultas por confusión.",
            "Customer Success"
          ],
          [
            "Ventas cruzadas",
            "Oportunidades multiproducto",
            "Cuentas que incorporan más de una solución en CRM.",
            "Mensual / trimestral",
            "No aumenta la identificación de oportunidades tras capacitar.",
            "Ventas / Marketing"
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-25-transicion-riesgos-y-mitigacion",
    "legacyIndex": 25,
    "group": "Transición",
    "title": "Riesgos y mitigación",
    "source": "Plan_Transicion_Marca_Datasur_Datlas_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Riesgo",
            "Impacto posible",
            "Prevención",
            "Plan de respuesta",
            "Señal temprana"
          ],
          [
            "Pérdida de tráfico SEO",
            "Menos visitas, leads y visibilidad.",
            "Baseline, mapeo URL a URL, redirecciones y QA.",
            "Corregir redirecciones, páginas, canonicals y bloqueos; priorizar URLs de valor.",
            "Caída de clics/impresiones o errores tras lanzamiento."
          ],
          [
            "Pérdida de reconocimiento",
            "Clientes no reconocen la nueva marca.",
            "Investigación previa y asociación temporal de marcas.",
            "Reforzar comunicación y contacto con segmentos afectados.",
            "Encuestas y consultas reflejan confusión."
          ],
          [
            "Dilución de diferenciación",
            "La oferta parece genérica o los productos se confunden.",
            "Arquitectura y mensajes por público.",
            "Revisar navegación, descriptores, pitch y páginas.",
            "Baja conversión o prospectos no comprenden diferencias."
          ],
          [
            "Interrupción de servicio",
            "Problemas de acceso, soporte o facturación.",
            "Coordinación de IT, operaciones, legal y atención.",
            "Protocolo de incidencias y comunicación directa.",
            "Aumento de tickets o fallas de acceso."
          ],
          [
            "Canibalización de contenidos",
            "Páginas similares compiten entre sí.",
            "Mapa de keywords y rol de cada página.",
            "Consolidar o diferenciar contenidos y enlaces internos.",
            "URLs alternan posiciones para la misma consulta."
          ],
          [
            "Conflicto interno",
            "Mensajes, procesos y prioridades separadas.",
            "Gobernanza, roles, playbook y objetivos comunes.",
            "Escalar al comité de marca y producto.",
            "Materiales contradictorios o leads mal derivados."
          ],
          [
            "Resultados no atribuibles",
            "No se puede evaluar impacto del cambio.",
            "Baseline, tracking, CRM y atribución documentada.",
            "Corregir tracking y transparentar limitaciones.",
            "Datos incongruentes entre GA4, CRM y ventas."
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-26-transicion-checklist-lanzamiento",
    "legacyIndex": 26,
    "group": "Transición",
    "title": "Checklist lanzamiento",
    "source": "Plan_Transicion_Marca_Datasur_Datlas_IMEX.xlsx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Estado",
            "Tarea",
            "Área",
            "Evidencia / comentario"
          ],
          [
            "Pendiente",
            "Aprobar arquitectura de marca y nombres de productos.",
            "Dirección / Marketing",
            ""
          ],
          [
            "Pendiente",
            "Documentar atributos de Datasur, Datlas e IMEX que se conservan.",
            "Brand / Producto",
            ""
          ],
          [
            "Pendiente",
            "Definir propuesta de valor y mensajes por audiencia.",
            "Marketing",
            ""
          ],
          [
            "Pendiente",
            "Inventariar dominios, subdominios y URLs.",
            "SEO / IT",
            ""
          ],
          [
            "Pendiente",
            "Exportar baseline de Search Console y GA4 por dominio.",
            "SEO / Analítica",
            ""
          ],
          [
            "Pendiente",
            "Inventariar backlinks y páginas con conversiones.",
            "SEO / Marketing Ops",
            ""
          ],
          [
            "Pendiente",
            "Aprobar mapa de redirecciones URL a URL.",
            "SEO / Web",
            ""
          ],
          [
            "Pendiente",
            "Validar formularios, demos, login, documentación y soporte.",
            "Producto / IT",
            ""
          ],
          [
            "Pendiente",
            "Configurar GA4, Search Console, CRM, UTMs y eventos.",
            "Analítica / Marketing Ops",
            ""
          ],
          [
            "Pendiente",
            "Actualizar sitemap, robots.txt, canonicals y hreflang.",
            "SEO / IT",
            ""
          ],
          [
            "Pendiente",
            "Preparar FAQ y mensajes para clientes, partners y equipo.",
            "Comunicaciones / Comercial",
            ""
          ],
          [
            "Pendiente",
            "Capacitar a ventas en portafolio y venta cruzada.",
            "Ventas / Marketing",
            ""
          ],
          [
            "Pendiente",
            "Probar redirecciones, errores HTTP y páginas críticas.",
            "SEO / QA",
            ""
          ],
          [
            "Pendiente",
            "Definir dashboard, umbrales y responsables de respuesta.",
            "Dirección / Analítica",
            ""
          ],
          [
            "Pendiente",
            "Aprobar plan de contingencia para el lanzamiento.",
            "Dirección / IT / Marketing",
            ""
          ]
        ]
      ]
    ]
  },
  {
    "id": "doc-27-estrategia-diseno-del-proyecto",
    "legacyIndex": 27,
    "group": "Estrategia",
    "title": "Diseño del proyecto",
    "source": "Proyecto de Creación de Marca Global Datacorp.docx",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "p",
        "Proyecto de Creación de Marca Global Datacorp"
      ],
      [
        "p",
        "De tres empresas y múltiples productos a una marca internacional de inteligencia para los negocios"
      ],
      [
        "p",
        "La creación de una nueva marca comercial para Datacorp debe considerarse uno de los proyectos estratégicos importantes de la transformación corporativa 2027. No se trata solamente de diseñar un nombre, un logotipo y una nueva página web, sino de construir una identidad que represente el valor de todo el grupo, unifique su posicionamiento internacional y permita comercializar un portafolio creciente de productos y servicios bajo una propuesta reconocible y diferenciadora."
      ],
      [
        "p",
        "Mi recomendación es abordar este desafío como un proyecto de estrategia de marca, arquitectura comercial, identidad corporativa y transformación digital, liderado desde Datacorp, con participación de Marketing, Comercial, Producto, Tecnología y las gerencias de Macroscope, Imexdbusiness y Datlas."
      ],
      [
        "p",
        "La pregunta inicial no debería ser ¿cómo se llamará nuestra nueva marca?, sino: ¿Qué queremos que el mundo piense, sienta y espere cuando se encuentre con nuestra marca, y por qué debería elegirnos frente a cualquier otra alternativa?"
      ],
      [
        "h",
        "1. Primero, distinguir tres conceptos fundamentales"
      ],
      [
        "p",
        "En la nueva estrategia debemos separar la identidad del grupo, la marca que se presenta al mercado y los productos que comercializamos."
      ],
      [
        "p",
        "DATACORP"
      ],
      [
        "p",
        "Identidad corporativa · Propiedad · Gobierno · Cultura · Estrategia"
      ],
      [
        "p",
        "NUEVA MARCA GLOBAL"
      ],
      [
        "p",
        "Identidad comercial · Posicionamiento · Reputación · Marketing · Experiencia digital"
      ],
      [
        "p",
        "Plataformas y suscripciones, BBDD y APIs, White-label y módulos, Estudios y reportes, Inteligencia avanzada. Nuevos productos"
      ],
      [
        "p",
        "Macroscope, Imexdbusiness y Datlas actúan como vehículos comerciales y contractuales especializados por mercados y modelos de negocio."
      ],
      [
        "p",
        "Esto permite que la nueva marca sea reconocida globalmente mientras las empresas conservan sus estructuras legales, equipos comerciales, responsabilidades económicas y especializaciones territoriales."
      ],
      [
        "p",
        "Una sola identidad comercial no exige que exista una sola sociedad jurídica."
      ],
      [
        "h",
        "2. El proceso de creación de marca: ocho etapas"
      ],
      [
        "p",
        "01 Diagnóstico y auditoría de marcas: Comprender el valor actual de Datasur, Imex, Datlas y Datacorp."
      ],
      [
        "p",
        "02 Investigación de mercado y posicionamiento: Descubrir necesidades, percepciones, competidores y espacios de diferenciación."
      ],
      [
        "p",
        "03 Plataforma estratégica de marca: Definir propósito, promesa, personalidad, posicionamiento y arquitectura."
      ],
      [
        "p",
        "04 Naming y validación: Crear y seleccionar un nombre registrable, global y comercialmente viable."
      ],
      [
        "p",
        "05 Identidad visual y verbal: Diseñar logotipo, lenguaje, storytelling y sistema gráfico."
      ],
      [
        "p",
        "06 Arquitectura web y experiencia digital: Construir la presencia digital unificada y su integración comercial."
      ],
      [
        "p",
        "07 Validación y lanzamiento: Probar, preparar equipos y activar la nueva marca."
      ],
      [
        "p",
        "08 Migración y consolidación: Proteger posicionamiento, medir adopción y optimizar resultados."
      ],
      [
        "h",
        "3. Etapa 1: Diagnóstico y auditoría de las marcas actuales"
      ],
      [
        "p",
        "Antes de crear una nueva identidad debemos comprender qué valor poseen las marcas existentes y qué elementos conviene conservar."
      ],
      [
        "p",
        "Datasur cuenta con trayectoria y reconocimiento en determinados mercados, principalmente Latinoamérica. Imex posee relaciones comerciales y posicionamiento en la comercialización de datos, pero es muy débil aún. Datlas representa una propuesta tecnológica con potencial de expansión, sin reconocimiento de marca existente"
      ],
      [
        "p",
        "No sería estratégico descartar estos activos sin medirlos al menos someramente en el ambiente digital. La auditoría debe estudiar cuatro dimensiones:"
      ],
      [
        "t",
        [
          [
            "Dimensión",
            "Qué investigar"
          ],
          [
            "Reconocimiento",
            "Qué tan conocidas son las marcas y en qué mercados"
          ],
          [
            "Percepción",
            "Qué atributos asocian los clientes a cada empresa"
          ],
          [
            "Valor digital",
            "Dominios, tráfico orgánico, enlaces, búsquedas de marca y posicionamiento"
          ],
          [
            "Valor comercial",
            "Clientes, contratos, recomendaciones, reputación y confianza"
          ]
        ]
      ],
      [
        "p",
        "Se deben realizar sólo si es necesario entrevistas a clientes, exclientes, prospectos, partners, vendedores y colaboradores, pero si es obligatorio el  analizar datos del CRM y comportamiento digital."
      ],
      [
        "p",
        "Entregable: diagnóstico de activos de marca y riesgos de integración, con una recomendación sobre qué conservar, transformar o migrar."
      ],
      [
        "h",
        "4. Etapa 2: Investigación de mercado y posicionamiento"
      ],
      [
        "p",
        "La nueva marca debe responder a necesidades reales de los segmentos que Datacorp busca conquistar."
      ],
      [
        "p",
        "El principal desafío es que el grupo comercializa soluciones muy distintas: desde bases de datos en bruto para plataformas tecnológicas hasta suscripciones SaaS, APIs, estudios, white-label y módulos embebibles."
      ],
      [
        "p",
        "La marca debe tener suficiente amplitud para representar todo ese portafolio, pero suficiente especialización para ser reconocida por un valor concreto."
      ],
      [
        "p",
        "Propongo investigar seis grandes perfiles:"
      ],
      [
        "p",
        "Empresas exportadoras e importadoras."
      ],
      [
        "p",
        "Analistas e investigadores de comercio internacional."
      ],
      [
        "p",
        "Plataformas y empresas que compran datos en bruto."
      ],
      [
        "p",
        "Integradores tecnológicos y desarrolladores."
      ],
      [
        "p",
        "Cámaras, asociaciones y distribuidores white-label."
      ],
      [
        "p",
        "Grandes organizaciones que necesitan inteligencia comercial avanzada."
      ],
      [
        "p",
        "La investigación debe identificar qué problemas tienen, qué buscan en internet, qué valoran de un proveedor, qué marcas conocen y por qué están dispuestos a pagar, acá es clave basarse en estudios ya realizados por macroscope, por How2go, Transformer, y otras agencias de marketing, etc."
      ],
      [
        "p",
        "También debe analizar referentes internacionales de plataformas de datos, inteligencia comercial y software B2B, para identificar espacios de posicionamiento todavía poco desarrollados."
      ],
      [
        "p",
        "Entregable: mapa competitivo, perfiles ICP y propuesta de territorio de marca."
      ],
      [
        "h",
        "5. Etapa 3: Construcción de la plataforma estratégica de marca"
      ],
      [
        "p",
        "Esta es la etapa más importante. Aquí se define lo que la marca será antes de diseñar cómo se verá. Recomiendo trabajar sobre siete elementos."
      ],
      [
        "t",
        [
          [
            "Elemento",
            "Definición propuesta para Datacorp"
          ],
          [
            "Propósito",
            "Transformar datos en conocimiento que impulse mejores decisiones y oportunidades internacionales"
          ],
          [
            "Visión",
            "Convertirse en un referente global de inteligencia para los negocios internacionales"
          ],
          [
            "Promesa",
            "Información confiable, tecnología y conocimiento para descubrir oportunidades y actuar con mayor certeza"
          ],
          [
            "Posicionamiento",
            "Una marca global que integra datos, inteligencia y soluciones tecnológicas para el comercio internacional"
          ],
          [
            "Personalidad",
            "Experta, innovadora, confiable, cercana y propositiva"
          ],
          [
            "Diferenciación",
            "Cobertura internacional, diversidad de datos, modularidad, conocimiento especializado y múltiples modelos de acceso"
          ],
          [
            "Razón para creer",
            "Trayectoria, activos de datos, cobertura, capacidades técnicas, clientes y casos de uso verificables"
          ]
        ]
      ],
      [
        "p",
        "Estos elementos son hipótesis iniciales de posicionamiento que deben validarse con la investigación."
      ],
      [
        "p",
        "El storytelling central"
      ],
      [
        "p",
        "La marca necesita una narrativa que explique por qué existe. Una dirección conceptual que considero adecuada sería:"
      ],
      [
        "p",
        "El comercio internacional genera una enorme cantidad de información, pero disponer de datos no significa comprender los mercados."
      ],
      [
        "p",
        "Nuestra misión es transformar esa información en inteligencia accesible, útil y accionable para que empresas y organizaciones descubran oportunidades, comprendan su entorno y construyan mejores negocios."
      ],
      [
        "p",
        "Unimos datos, tecnología y conocimiento para acercar la inteligencia del comercio internacional a quienes toman decisiones."
      ],
      [
        "p",
        "Esta narrativa permite representar tanto a quien compra una suscripción de plataforma como a quien adquiere millones de registros mediante una API."
      ],
      [
        "h",
        "6. Etapa 4: Naming, el proceso de creación del nombre"
      ],
      [
        "p",
        "El naming debe responder a criterios estratégicos, lingüísticos, digitales y jurídicos. La marca ideal debería ser:"
      ],
      [
        "p",
        "Fácil de pronunciar en español e inglés, y razonablemente adaptable a otros mercados."
      ],
      [
        "p",
        "Memorable y diferenciable."
      ],
      [
        "p",
        "Breve o de estructura simple."
      ],
      [
        "p",
        "Asociable a inteligencia, datos, oportunidades o negocios globales."
      ],
      [
        "p",
        "Suficientemente amplia para representar nuevos productos."
      ],
      [
        "p",
        "Registrable en las jurisdicciones prioritarias."
      ],
      [
        "p",
        "Compatible con una estrategia digital internacional."
      ],
      [
        "p",
        "Metodología propuesta"
      ],
      [
        "p",
        "Primero se desarrollan territorios creativos: inteligencia, descubrimiento, conexiones, comercio global, conocimiento y futuro."
      ],
      [
        "p",
        "Luego se generan múltiples alternativas, se eliminan las que presenten problemas evidentes y se construye una lista corta de cinco a ocho nombres."
      ],
      [
        "p",
        "Esa lista se somete a pruebas de comprensión, pronunciación, memorabilidad, asociaciones culturales, dominios y disponibilidad marcaria. Finalmente, se presentan tres alternativas finalistas.."
      ],
      [
        "p",
        "Matriz para evaluar nombres"
      ],
      [
        "p",
        "Evaluación interactiva de nombres candidatos"
      ],
      [
        "p",
        "Asigne una puntuación de 1 a 5 a cada criterio. El resultado ponderado es sobre 100 puntos."
      ],
      [
        "t",
        [
          [
            "Criterio",
            "Alternativa A",
            "Alternativa B",
            "Alternativa C"
          ],
          [
            "Diferenciación y memorabilidad\nPeso: 25%",
            "3",
            "3",
            "3"
          ],
          [
            "Adecuación al posicionamiento\nPeso: 20%",
            "3",
            "3",
            "3"
          ],
          [
            "Pronunciación internacional\nPeso: 15%",
            "3",
            "3",
            "3"
          ],
          [
            "Versatilidad de portafolio\nPeso: 15%",
            "3",
            "3",
            "3"
          ],
          [
            "Potencial digital\nPeso: 15%",
            "3",
            "3",
            "3"
          ],
          [
            "Preferencia en pruebas de usuarios\nPeso: 10%",
            "3",
            "3",
            "3"
          ],
          [
            "Puntaje final",
            "60/100",
            "60/100",
            "60/100"
          ]
        ]
      ],
      [
        "p",
        "La evaluación comercial no sustituye la revisión legal de marcas y dominios. La disponibilidad jurídica debe ser una condición excluyente antes de aprobar el nombre."
      ],
      [
        "h",
        "7. Etapa 5: Diseño de la identidad visual y verbal"
      ],
      [
        "p",
        "Una vez definida la estrategia y seleccionado el nombre, corresponde desarrollar la identidad de la marca."
      ],
      [
        "p",
        "Esta debe funcionar en una plataforma tecnológica, un estudio de comercio exterior, una presentación de ventas, un portal white-label, redes sociales y un evento internacional."
      ],
      [
        "p",
        "No basta con que el logotipo sea atractivo. Debe existir un sistema visual completo y consistente."
      ],
      [
        "p",
        "Componentes de la identidad"
      ],
      [
        "p",
        "Sistema de logotipo y símbolo"
      ],
      [
        "p",
        "Marca principal, versiones horizontales, reducidas, monocromáticas, favicon e iconografía para plataformas y aplicaciones."
      ],
      [
        "p",
        "Paleta cromática y tipografía"
      ],
      [
        "p",
        "Colores, jerarquías, estilos de texto, contrastes, accesibilidad y criterios de uso internacional."
      ],
      [
        "p",
        "Lenguaje visual digital"
      ],
      [
        "p",
        "Componentes UI, gráficos, tablas, mapas, ilustraciones, iconos, fotografías y criterios de visualización de datos."
      ],
      [
        "p",
        "Aplicaciones corporativas y comerciales"
      ],
      [
        "p",
        "Presentaciones, cotizaciones, firmas de correo, redes sociales, documentos, stands, informes y comunicaciones."
      ],
      [
        "p",
        "Referencias visuales orientativas; no representan una identidad propuesta ni aprobada para Datacorp."
      ],
      [
        "p",
        "También deberá desarrollarse una identidad verbal: tono de voz, vocabulario, mensajes por audiencia, estilo editorial, claims, tagline y guías de redacción en distintos idiomas."
      ],
      [
        "p",
        "Recomiendo una marca visualmente sofisticada, tecnológica y confiable, pero que evite parecer excesivamente fría o inaccesible."
      ],
      [
        "p",
        "La inteligencia debe verse poderosa y, al mismo tiempo, comprensible."
      ],
      [
        "h",
        "8. Etapa 6: Una sola web como principal activo de marca y generación de demanda"
      ],
      [
        "p",
        "La nueva web no debe ser un catálogo institucional."
      ],
      [
        "p",
        "Debe constituir la principal infraestructura digital de adquisición, educación, demostración de valor y conversión comercial del grupo."
      ],
      [
        "p",
        "Se debe estructurar desde las necesidades de los usuarios o prospectos y no desde las tres empresas."
      ],
      [
        "p",
        "PORTAL GLOBAL DE LA NUEVA MARCA"
      ],
      [
        "p",
        "Una experiencia digital: · Multilingüe · Multimercado"
      ],
      [
        "p",
        "Soluciones: Por necesidad, industria y tipo de usuario"
      ],
      [
        "p",
        "Productos: Plataformas, BBDD, APIs, white-label y módulos"
      ],
      [
        "p",
        "Mercados: Países, sectores y oportunidades internacionales"
      ],
      [
        "p",
        "Inteligencia abierta: Rankings, análisis, reportes y contenido gratuito"
      ],
      [
        "p",
        "Recursos: Estudios, casos, formación y documentación"
      ],
      [
        "p",
        "Comunidad: Eventos, webinars, capacitaciones y certificaciones, alianzas y conocimiento"
      ],
      [
        "p",
        "Conversión y enrutamiento comercial: Demo · Cotización · Prueba · Registro · Contacto · API · Partner"
      ],
      [
        "p",
        "CRM ZOHO corporativo → Macroscope / Imex / Datlas"
      ],
      [
        "p",
        "Asignación según mercado, producto, relación comercial y reglas corporativas"
      ],
      [
        "p",
        "La web deberá diseñarse para SEO técnico, SEO programático, accesibilidad, rendimiento, medición de conversiones e integración con CRM."
      ],
      [
        "p",
        "El contenido debe permitir que los usuarios descubran el valor de los datos antes de convertirse en clientes."
      ],
      [
        "p",
        "Por ejemplo, una persona podría consultar información gratuita sobre importadores de determinado producto y posteriormente contratar acceso a una plataforma, comprar una base de datos o solicitar una API."
      ],
      [
        "p",
        "Ese recorrido debe estar diseñado desde el inicio."
      ],
      [
        "h",
        "9. Etapa 7: Validación de la nueva marca"
      ],
      [
        "p",
        "Antes del lanzamiento, se debe validar tres dimensiones."
      ],
      [
        "p",
        "Validación estratégica: comprobar que la marca transmite los atributos deseados y representa correctamente todo el portafolio."
      ],
      [
        "p",
        "Validación comercial: verificar que clientes y prospectos comprenden qué ofrece, para quién es relevante y por qué deberían elegirla."
      ],
      [
        "p",
        "Validación digital: comprobar usabilidad, navegación, claridad de propuestas, rendimiento, conversión y compatibilidad internacional."
      ],
      [
        "p",
        "Las pruebas deben realizarse con representantes de los principales segmentos de Macroscope, Imex y Datlas. No se debe aprobar una marca solamente porque resulte atractiva internamente."
      ],
      [
        "p",
        "La decisión debe apoyarse en evidencia de mercado."
      ],
      [
        "h",
        "10. Etapa 8: Lanzamiento y migración de las marcas existentes"
      ],
      [
        "p",
        "La transición debe ser progresiva y controlada. Este punto es especialmente importante porque Datasur y las demás marcas pueden poseer activos comerciales y digitales que conviene proteger, sobretodo Datasur, acá debemos armar una estrategia de incorporación de la nueva marca, ejemplo reemplazar D-Comex por la nueva marca."
      ],
      [
        "p",
        "Tres momentos"
      ],
      [
        "p",
        "Momento A. Preparación"
      ],
      [
        "p",
        "La nueva marca comienza a construirse mientras las marcas actuales mantienen sus operaciones."
      ],
      [
        "p",
        "Se preparan contenidos, comunicaciones, arquitectura web, equipos comerciales, contratos, dominios y materiales."
      ],
      [
        "p",
        "Momento B. Lanzamiento"
      ],
      [
        "p",
        "La nueva marca se presenta públicamente, explicando su relación con las empresas que comercializan sus soluciones."
      ],
      [
        "p",
        "Se ejecuta una campaña coordinada hacia clientes, prospectos, partners, colaboradores y mercados internacionales."
      ],
      [
        "p",
        "Momento C. Consolidación"
      ],
      [
        "p",
        "Se realiza una migración digital gradual, preservando URLs relevantes cuando corresponda, implementando redirecciones y monitoreando tráfico, posicionamiento, conversiones y consultas comerciales."
      ],
      [
        "p",
        "La transición no debe comprometer renovaciones, acceso a plataformas, contratos ni confianza de clientes."
      ],
      [
        "h",
        "11. Gobierno del proyecto: quién debe liderarlo"
      ],
      [
        "p",
        "Debe existir un comité corporativo que tome las decisiones estratégicas y asegure coherencia entre marca, productos, tecnología y modelo comercial."
      ],
      [
        "t",
        [
          [
            "Participante",
            "Responsabilidad"
          ],
          [
            "Gerencia Corporativa Datacorp",
            "Patrocinio, decisiones estratégicas y aprobación final"
          ],
          [
            "Gerencia de Marketing Digital y Growth",
            "Liderazgo integral del proyecto"
          ],
          [
            "Gerentes Macroscope, Imex y Datlas",
            "Validación comercial y territorial"
          ],
          [
            "Inteligencia Comercial",
            "Investigación de mercado y evaluación de impacto"
          ],
          [
            "Desarrollo / UX",
            "Arquitectura digital y experiencia de marca"
          ],
          [
            "Asesoría jurídica",
            "Marcas, dominios, propiedad intelectual y contratos"
          ]
        ]
      ],
      [
        "p",
        "Recomiendo nombrar un líder único del proyecto, responsable de presupuesto, cronograma, entregables, riesgos y coordinación de proveedores."
      ],
      [
        "h",
        "12. Principales riesgos estratégicos"
      ],
      [
        "p",
        "Hay cuatro riesgos que considero especialmente importantes de considerar:"
      ],
      [
        "p",
        "Perder reconocimiento existente. Una migración demasiado rápida podría deteriorar el posicionamiento y la confianza acumulada por Datasur u otras marcas."
      ],
      [
        "p",
        "Construir una marca demasiado genérica. Si la identidad intenta representar cualquier tipo de dato o tecnología, puede perder especialización y diferenciación."
      ],
      [
        "p",
        "Confundir marca comercial con empresas jurídicas. Los clientes deben saber claramente quién factura, presta el servicio y responde contractualmente."
      ],
      [
        "p",
        "Diseñar una marca sin capacidad operacional para sostener su promesa. Si prometemos inteligencia global, actualización y tecnología avanzada, los productos y datos deben respaldar efectivamente esa promesa."
      ],
      [
        "p",
        "Por eso, el proyecto debe conectar identidad, propuesta comercial, experiencia de usuario y calidad productiva."
      ],
      [
        "h",
        "13. Las decisiones que recomiendo tomar primero"
      ],
      [
        "p",
        "Antes de iniciar el diseño creativo, se debería resolver cinco preguntas:"
      ],
      [
        "p",
        "¿La nueva marca será completamente distinta de Datacorp u otra marca del grupo como Datasur, o aprovechará ese nombre?"
      ],
      [
        "p",
        "¿Qué atributos y promesa comercial queremos que represente globalmente?"
      ],
      [
        "p",
        "¿Qué reconocimiento de Datasur, Imex y Datlas debemos preservar?"
      ],
      [
        "p",
        "¿Qué productos y mercados serán prioritarios durante sus primeros dos años?"
      ],
      [
        "p",
        "¿Qué inversión y recursos se destinarán a construir y posicionar la marca?"
      ],
      [
        "p",
        "La primera pregunta es particularmente relevante. Existen tres alternativas estratégicas de arquitectura de marca."
      ],
      [
        "t",
        [
          [
            "Alternativa",
            "Característica",
            "Implicancia"
          ],
          [
            "Datacorp como marca comercial",
            "El nombre corporativo también identifica toda la oferta",
            "Mayor simplicidad, pero exige evaluar su posicionamiento y diferenciación"
          ],
          [
            "Nueva marca independiente",
            "Se crea una identidad comercial distinta, respaldada por Datacorp",
            "Mayor libertad creativa, pero requiere construir reconocimiento desde cero"
          ],
          [
            "Nueva marca respaldada por Datacorp",
            "Una marca comercial protagonista con respaldo corporativo visible",
            "Permite diferenciar oferta comercial y propiedad corporativa"
          ]
        ]
      ],
      [
        "p",
        "Para el modelo que estamos construyendo, me inclinaría inicialmente por evaluar con prioridad la tercera alternativa: una nueva marca global respaldada por Datacorp, siempre que la investigación y las verificaciones legales confirmen su conveniencia."
      ],
      [
        "p",
        "Esto permite construir una identidad comercial diseñada específicamente para conquistar mercados internacionales, sin perder la claridad de pertenencia al grupo."
      ],
      [
        "h",
        "15. Resultado esperado del proyecto"
      ],
      [
        "p",
        "Al finalizar, Datacorp debería contar con un conjunto concreto de activos:"
      ],
      [
        "p",
        "Estrategia y plataforma de marca aprobadas."
      ],
      [
        "p",
        "Nombre validado comercial, lingüística y jurídicamente."
      ],
      [
        "p",
        "Identidad visual y verbal completa."
      ],
      [
        "p",
        "Manual corporativo de marca."
      ],
      [
        "p",
        "Arquitectura de productos y submarcas."
      ],
      [
        "p",
        "Storytelling global y mensajes por segmento."
      ],
      [
        "p",
        "Portal digital unificado y estrategia SEO internacional."
      ],
      [
        "p",
        "Materiales comerciales y comunicacionales."
      ],
      [
        "p",
        "Plan de transición desde las marcas actuales."
      ],
      [
        "p",
        "Sistema de indicadores de reconocimiento, adquisición y valor de marca."
      ],
      [
        "p",
        "Pero el resultado verdaderamente importante debe ser más profundo."
      ],
      [
        "p",
        "Datacorp debe pasar de ser un conjunto de empresas que comercializan datos y soluciones a convertirse en una marca global reconocida por transformar información de comercio internacional en inteligencia, oportunidades y mejores decisiones."
      ],
      [
        "p",
        "La nueva marca no será solamente la imagen del grupo. Será el activo que conecte la producción de datos, la innovación, los productos, el Marketing Digital y las tres fuerzas comerciales en un mismo sistema de crecimiento."
      ],
      [
        "p",
        "Y, por ello, su construcción deberá evaluarse finalmente por su contribución a generar más demanda cualificada, reducir costos de adquisición, aumentar confianza, expandir ingresos recurrentes y fortalecer el valor económico de Datacorp."
      ]
    ]
  },
  {
    "id": "doc-28-referencias-integracion-de-marcas-por-region",
    "legacyIndex": 28,
    "group": "Referencias",
    "title": "Integración de marcas por región",
    "source": "Branding logístico regional.pdf",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "p",
        "Estrategias de marca en la integración Datacorp Cómo los grandes operadores gestionan su identidad tras fusiones y adquisiciones en tres regiones."
      ],
      [
        "p",
        "Dos caminos de integración de marca CAMBIO DRÁSTICO MODELO SOMBRILLA Una masterbrand absorbe identidad, sistemas y El holding conserva marcas, añade endoso o presencia comercial. Gana velocidad y consistencia; arriesga confianza local. VS separa unidades. Gana continuidad; exige una arquitectura clara."
      ],
      [
        "p",
        "1 ASIA La lealtad corporativa local hace que una marca única exija cuidado cultural — o un despliegue financiero muy agresivo."
      ],
      [
        "p",
        "ASIA · CAMBIO DRÁSTICO Nippon Express → NX Group La nueva identidad unifica negocios, mercados y narrativa global. El cambio señala escala y ambición, pero necesita una transición interna disciplinada."
      ],
      [
        "p",
        "2 LATINOAMÉRICA La confianza vive en la relación cercana y el dominio de las aduanas. Los cambios bruscos pueden inquietar al importador."
      ],
      [
        "p",
        "LATINOAMÉRICA · CAMBIO DRÁSTICO BLU Logistics → Rhenus Group ABSORCIÓN TOTAL La escala global reemplaza la marca adquirida. El reto no es solo visual: hay que trasladar confianza comercial, equipos y conocimiento aduanero. Grupo Rhenus adquirió Blu Logistics en octubre de 2023 y, en abril de 2025, anunció oficialmente el cambio de marca de Blu Logistics LATAM para operar comercialmente como Rhenus Logistics. El Grupo Rhenus compró Blu Logistics y sus filiales en Colombia, Argentina, Ecuador, México, Paraguay, Uruguay, China y Hong Kong"
      ],
      [
        "p",
        "LATINOAMÉRICA · TRANSICIÓN ESCALONADA SAAM Logistics + Hapag-Lloyd 01 ENDOSO La marca local mantiene el frente comercial mientras la matriz aporta respaldo. 02 MIGRACIÓN Procesos, sistemas y señalización cambian por etapas, con comunicación directa al cliente. Continuidad primero. Uniformidad después. https://www.saam.com/blog/2022/10/04/saam-acuerda-venta-a-hapag- lloyd-de-sus-terminales-portuarios-y-operaciones-logisticas-asociadas/ https://www.saam.com/blog/2022/10/04/saam-acuerda-venta-a-hapag- lloyd-de-sus-terminales-portuarios-y-operaciones-logisticas-asociadas/"
      ],
      [
        "p",
        "3 EE. UU. Y CANADÁ Eficiencia, digitalización y estandarización pesan más que el sentimentalismo de marca."
      ],
      [
        "p",
        "NORTEAMÉRICA · CAMBIO DRÁSTICO DSC Logistics → CJ Logistics MASTERBRAND AGRESIVA Una identidad única acelera ventas cruzadas, tecnología y estándares. La promesa se valida en la ejecución operativa."
      ],
      [
        "p",
        "NORTEAMÉRICA · HOLDING CORPORATIVO XPO Logistics y RXO XPO Operaciones y activos RXO Brokerage y tecnología Separar negocios puede crear foco, valoración y relatos de marca distintos — sin perder disciplina corporativa."
      ],
      [
        "p",
        "Una estrategia, tres lógicas regionales ASIA LATINOAMÉRICA NORTEAMÉRICA Legitimidad cultural Relación comercial Eficiencia operativa + escala financiera + saber aduanero + estandarización La mejor arquitectura no es la más uniforme: es la que protege la confianza mientras captura sinergias."
      ]
    ]
  },
  {
    "id": "doc-29-competencia-tres-precedentes-para-la-migracion-digital",
    "legacyIndex": 29,
    "group": "Competencia",
    "title": "Tres precedentes para la migración digital",
    "source": "Captura-Análisis de competidores.jpeg",
    "incorporatedAt": "2026-11-23",
    "blocks": [
      [
        "t",
        [
          [
            "Caso de la comparativa",
            "Aplicación propuesta en la fuente"
          ],
          [
            "Panjiva y S&P Global",
            "Conservar el acceso directo al módulo conocido durante la transición."
          ],
          [
            "Thomson Reuters y Refinitiv",
            "Organizar la web por necesidades del comprador cuando se introduce un nombre nuevo."
          ],
          [
            "Experian Business",
            "Dar a conocer las herramientas de Datlas y las APIs de Imex desde los recorridos habituales de DataSur."
          ]
        ]
      ]
    ]
  }
];
