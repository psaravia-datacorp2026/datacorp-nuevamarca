/**
 * ARCHIVO EDITABLE Y VERSIONABLE: Estudios, Entrevistas, Hallazgos y Acuerdos Pendientes
 * Ruta: src/data/studiesData.ts
 *
 * Cómo agregar un nuevo estudio o ronda de entrevistas:
 * 1. Añade un nuevo objeto `StudyRecord` en `STUDIES_DATA`.
 * 2. Usa `monthKey` en formato 'YYYY-MM' (ej. '2026-12') y `monthLabel` (ej. 'Diciembre 2026').
 *    El archivo de entrevistas agrupa automáticamente los estudios por `monthKey` y los ordena
 *    de más reciente a más antiguo.
 * 3. Conserva en los datos del estudio `performedMonth`, `incorporatedAt` y `measurementPeriod`.
 */
import { StudyRecord } from '../types/hub';

export const STUDIES_DATA: StudyRecord[] = [
  {
    "id": "estudio-2026-11-stakeholders-internos",
    "monthKey": "2026-11",
    "monthLabel": "Noviembre 2026",
    "performedMonth": "Noviembre 2026",
    "incorporatedAt": "2026-11-23",
    "measurementPeriod": "Noviembre 2026 (11 entrevistas en profundidad a jefaturas y referentes internos)",
    "scopeExplanation": "Estos hallazgos recogen la experiencia de 11 jefaturas y referentes internos de DataSur, Imex y Datlas. Los siete acuerdos pendientes son propuestas y las validaciones descritas son acciones futuras para contrastar con clientes y proveedores.",
    "decisionsIntroText": "Las entrevistas dejaron siete decisiones abiertas. Aquí explicamos qué está en juego y qué necesitamos confirmar para resolver cada una.",
    "categoryLabel": "11 entrevistas internas",
    "title": "Jefaturas y referentes internos",
    "summary": "Los equipos identificaron oportunidades comerciales y riesgos para los clientes y proveedores que ya trabajan con nosotros.",
    "participantsCount": 11,
    "status": "active",
    "groups": [
      {
        "id": "positivas",
        "label": "Conclusiones positivas",
        "description": "Oportunidades de portafolio, cobertura y servicio que la marca común puede potenciar."
      },
      {
        "id": "riesgos",
        "label": "Riesgos identificados",
        "description": "Fricciones de acceso, relación con proveedores de datos y límites técnicos a resguardar."
      }
    ],
    "findings": [
      {
        "id": "hallazgo-01-servicios-ocultos",
        "legacyIndex": 0,
        "groupId": "positivas",
        "groupLabel": "Conclusiones positivas",
        "shortTitle": "Servicios poco visibles",
        "title": "Hay clientes de DataSur que aún desconocen la API y la reportería",
        "bodyLead": "Rodolfo señala que algunos clientes desconocen la API y la reportería. Rocío cuenta que su equipo descubre qué ofrecer al conversar con cada cuenta.",
        "highlightedSentence": "Una marca común podría ayudar al cliente a encontrar otros servicios desde la web.",
        "whatToDecide": "¿Dónde debería buscar un cliente que quiere llevar los datos a su propio tablero? Probemos el catálogo con esa tarea y observemos dónde entra y si encuentra cómo cotizar.",
        "primaryAgreementId": "decision-03-portafolio-comercial",
        "primaryAgreementIndex": 2,
        "primaryAgreementTitle": "Entradas al catálogo",
        "evidenceNamesLabel": "Rodolfo, Rocío, Francisco Toro y Renato",
        "evidence": [
          {
            "id": "ev-2026-11-g00-1",
            "sourceId": "src-entrevista-rodolfo-delaire",
            "participantName": "Rodolfo Delaire",
            "shortName": "Rodolfo",
            "participantRole": "Jefe Área de Producción de Datos / Gerente Área de Experiencia de Usuarios",
            "timestamp": "05:01 - 09:40",
            "question": "¿Cómo nos hacemos cargo de dos experiencias de usuario tan distintas sin que uno de los dos sienta que la marca no le está hablando a él, por ejemplo?",
            "inferred": false,
            "quote": "hay usuarios de Datasur que no saben que existe la API",
            "contextAnswer": "Estoy tratando de ponerme en el escenario, ya porque son, como te digo, son demasiado difíciles. Yo creo que cualquier cambio que hagamos a nivel estratégico tiene que ser extremadamente bien pensado para que no genere estos tipos de distorsiones. Pero por otro lado, también busca ordenar el tema: busca ordenar que bajo una marca paraguas haya una diversificación de servicios para que el usuario conozca cosas que hoy día no conoce. Hoy día hay usuarios de Datasur que no saben que existe la API, hay usuarios de Datasur que no saben que existe la reportería, aunque se lo hemos dicho 500 veces a todos los cuatro vientos y así todo no lo saben. Yo creo que un poco lo que busca este entorno de unificar todo en una sola marca también es que haya una diversificación de servicios más clara, que el usuario pueda decir: 'Ah, perfecto, mira, acá tengo una plataforma, pero no es lo que necesito, necesito una alternativa más personalizada; ah, perfecto, tienen también servicios personalizados'. Yo creo que por d-comex ha sido difícil que los usuarios vean eso: ha sido muy en la mano, muy en la reunión, en el boca a boca, así como llegó porque preguntó una cuestión y se enteró ahí de que tenemos otras alternativas de servicio. Entonces ahí creo yo donde está el gran desafío: cómo esta gran marca logra decir 'Oye, acá hay un entorno mucho mayor que sencillamente un aplicativo o venta por API o venta por reportería'. Ahí no sé cuál sea la fórmula exacta."
          },
          {
            "id": "ev-2026-11-g00-2",
            "sourceId": "src-entrevista-rocio-de-los-angeles-gonzalez",
            "participantName": "Rocío de los Ángeles González",
            "shortName": "Rocío",
            "participantRole": "Coordinadora del Área Experiencia Clientes — Datasur.com",
            "timestamp": "08:12 - 10:39",
            "question": "¿ves a tu equipo ofreciendo estas nuevas herramientas o crees que los clientes se puedan interesar en estas herramientas que salen un poco de lo que es Datasur?",
            "inferred": false,
            "quote": "tratamos de hacer un diagnóstico del cliente para efectivamente saber qué ofrecerle",
            "contextAnswer": "Ya que me está sonriendo porque yo no sé qué tan seria tengo que estar en estas reuniones, pero tú estabas preguntándome qué hacemos nosotros en este minuto: los perseguimos, vamos por todo el centro, por el mall ahí persiguiéndolos: '¡No te vayas, cliente!'. Me río internamente. Y de paso vuelves y me preguntas qué seríamos capaces de ofrecer: yo ofrezco hasta mi perro. Nosotros le ofrecemos el mundo entero, entonces mientras más cosas tengamos que ofrecer, pues obviamente las vamos a desplegar todas, uno le muestra por todas partes.\n\nAhora que hay un poquito de crecimiento dentro del equipo —donde hay una persona que se encarga únicamente del área comercial, Estefanía está enfocada en lo que tiene que hacer y Rocío está dispersa por todas partes, pero ella también trata de concentrarse—, tratamos de hacer un diagnóstico del cliente para efectivamente saber qué ofrecerle y no ofrecerle todo el menú: porque si es vegetariano, yo no le voy a mostrar el menú de carne, ¿cierto?, nada que ver. Pero mientras más páginas tenga ese menú, más oportunidades vamos a tener nosotros de retenerlo por una cosa o la otra. Siempre y cuando —y voy a hacer enfática— sea de manera preventiva con el tema de la capacitación: que la gente sepa qué es, para poder hacer el diagnóstico correcto. Pero una vez que tengamos todos el conocimiento transversal, va a ser súper beneficioso poder tener una vitrina más extensa, totalmente que sí."
          },
          {
            "id": "ev-2026-11-g07-1",
            "sourceId": "src-entrevista-francisco-toro",
            "participantName": "Francisco Toro",
            "shortName": "Francisco Toro",
            "participantRole": "Jefe de Ventas — Datasur / Grupo Datacorp",
            "timestamp": "11:19 - 13:34",
            "question": "¿te imaginas a tu equipo ofreciendo eso? ¿Crees que dentro de la cartera que manejas hoy hay apetito por estos productos más complejos?",
            "inferred": false,
            "quote": "de los siete contactos de calidad que llegaron la semana pasada, cinco ya estaban preguntando por API",
            "contextAnswer": "Sí, no, de hecho hoy en día la mayoría —yo creo que más del 50% que se está acercando, independientemente del canal, no solamente a nivel digital, sino que en ferias o referidos— está preguntando cada vez más por API. De hecho, yo hablaba la semana pasada con Rocío para ver cómo le está yendo con esto, y de los siete contactos de calidad que llegaron la semana pasada, cinco ya estaban preguntando por API. Como que preguntan inicialmente por API y no por la plataforma: entienden qué es d-comex, pero su necesidad apunta a 'quiero ese servicio, pero que esté en mi nube, que se integre en mi plataforma', entonces ya quieren API.\n\nEntonces yo creo que sí o sí tienen que capacitar a toda el área comercial, entender cómo se ofrece, porque hoy en día el lead nuevo que busca API quiere un precio de inmediato, y el protocolo no es lo mismo que d-comex —donde existen planes puntuales que uno sabe cuánto valen—, sino que la API depende de muchos factores: cantidad de datos, peso, cuántos campos, etcétera. Es un producto que a nivel de ticket entrega mucho más beneficio a la empresa, pero es mucho más lenta y técnica la negociación. Yo siento que d-comex es mucho más fácil de vender que una API."
          },
          {
            "id": "ev-2026-11-g07-2",
            "sourceId": "src-entrevista-renato-andrades",
            "participantName": "Renato Andrades",
            "shortName": "Renato",
            "participantRole": "General Manager International — ImexDBusiness",
            "timestamp": "07:19 - 08:34",
            "question": "¿Cómo, desde tu perspectiva, podríamos asegurarnos de que este usuario pueda encontrar lo que necesita y no termine confundido dentro de este catálogo que se pueda ofrecer en esta marca unificada?",
            "inferred": false,
            "quote": "si está todo ahí junto con plataforma y otras cosas, puede llegar a confundirse",
            "contextAnswer": "Ese es un poco también el fundamento de por qué se reconstruyó la página de Imex hacia lo que hoy en día transmite: que somos alimentadores y proveedores de datos, tanto por API... No se habla tanto de 'dato en bruto' porque es riesgoso también salir a vender públicamente dato en bruto, pero habla de que Imex es un proveedor de datos y alimenta datos de distintas maneras.\n\nRespondiendo a tu pregunta de cómo no se podría confundir, sería dejar súper claro eso; pero efectivamente, claro, si está todo ahí junto con plataforma y otras cosas, puede llegar a confundirse."
          }
        ]
      },
      {
        "id": "hallazgo-02-credibilidad-cobertura",
        "legacyIndex": 1,
        "groupId": "positivas",
        "groupLabel": "Conclusiones positivas",
        "shortTitle": "Cobertura y promesa de inteligencia",
        "title": "La promesa global gana credibilidad cuando mostramos la cobertura y el entregable real",
        "bodyLead": "Ventas recibe consultas por Asia y Europa que D-Comex por sí solo no siempre resuelve, mientras Imex suma fuentes estadísticas, espejo y de aduana. A su vez, Diego y Felipe observan que parte del análisis sigue en manos del cliente y que muchos equipos prefieren descargar datos limpios para su propio BI.",
        "highlightedSentence": "Mostrar un ejemplo por mercado con fuente, período y forma de entrega permite explicar qué capacidad aporta el grupo y qué puede contratar el cliente hoy.",
        "whatToDecide": "¿El comprador entiende qué recibirá cuando le ofrecemos «inteligencia» en plataforma, datos o estudios? Mostremos las descripciones y un ejemplo por mercado a un analista y a un comprador técnico para confirmar qué esperan recibir antes de cotizar.",
        "primaryAgreementId": "decision-05-propuesta-valor",
        "primaryAgreementIndex": 4,
        "primaryAgreementTitle": "Promesa por solución",
        "evidenceNamesLabel": "Francisco Toro, Francisco Morales, Diego y Felipe",
        "evidence": [
          {
            "id": "ev-2026-11-g01-1",
            "sourceId": "src-entrevista-francisco-toro",
            "participantName": "Francisco Toro",
            "shortName": "Francisco Toro",
            "participantRole": "Jefe de Ventas — Datasur / Grupo Datacorp",
            "timestamp": "15:19 - 16:50",
            "question": "¿qué dolor o problema ves en los clientes que hoy Datasur no los puede resolver, pero que sí podría resolverlo un grupo tecnológico global, que es lo que aspiramos ahora?",
            "inferred": false,
            "quote": "cobertura de países de Asia y de Europa",
            "contextAnswer": "Sí. Primero, el nivel de cobertura de data de otros países. Porque hoy en día, si bien a nivel de plataforma —que es el producto que nosotros vendemos directamente, d-comex— ha aumentado bastante en términos de cobertura, siempre está esa cobertura ligada directamente a Latam. Entonces cada vez más van llegando leads de otros países que no necesariamente son de Latinoamérica, y eso viene como una exigencia que hoy en día no les podemos satisfacer: cobertura de países de Asia y de Europa.\n\nPor lo que yo tengo noción a nivel de Exim, de reportería y de Imex, existe una cobertura que apunta mucho más a fuera de Latinoamérica, pero eso hoy en día no está en d-comex. Entonces yo creo que con esta fusión que vamos a tener a nivel de diferentes productos, vamos a estar supliendo esa debilidad que tenemos como plataforma hoy en día, que de hecho es por lo que nos comparan mucho con la competencia."
          },
          {
            "id": "ev-2026-11-g01-2",
            "sourceId": "src-entrevista-francisco-morales",
            "participantName": "Francisco Morales",
            "shortName": "Francisco Morales",
            "participantRole": "Business Development Manager — ImexDBusiness",
            "timestamp": "11:33 - 13:23",
            "question": "¿tú crees que es suficiente un mensaje de marca corporativo de este tipo como conectar oportunidades globales, o crees que ellos necesitan una narrativa más técnica, por ejemplo, hablar de latencia, cobertura, ese tipo de cosas?",
            "inferred": false,
            "quote": "nosotros tenemos de varios tipos: Global, Mirror, estadística, aduana",
            "contextAnswer": "Sí, no, 'conectar oportunidades globales' está bien —o sea, no sé si a modo de eslogan, pero sí algo que vaya por ese enfoque— está bien en una primera presentación. Y bueno, los temas de cobertura y cosas así también se pueden ir hablando dentro de la misma página o dentro de las mismas reuniones.\n\nSí hay cosas que pueden enganchar también rápidamente, como decir en una primera instancia la cantidad de países que tenemos —que es atractivo; mientras más países tenga una marca, claramente puede llegar a ser más atractivo— y los tipos de data que se tienen, porque algunos trabajan con más data estadística y otros solamente con data de aduana, mientras nosotros tenemos de varios tipos: Global, Mirror, estadística, aduana. Entonces sí, yo creo que por ahí están un poco los ganchos que podrían hacer que en una primera instancia se atraiga al público, pero lo primero que tú dijiste me parece una buena entrada."
          },
          {
            "id": "ev-2026-11-g06-1",
            "sourceId": "src-entrevista-diego-vera",
            "participantName": "Diego Vera",
            "shortName": "Diego",
            "participantRole": "Jefe de Inteligencia de Productos — Grupo Datacorp / Datasur",
            "timestamp": "06:35 - 10:33",
            "question": "¿sientes que esa narrativa representa nuestra realidad o crees que la marca está prometiendo un nivel de inteligencia que hoy nos queda grande, por decirlo así?",
            "inferred": false,
            "quote": "la inteligencia con esos datos la va a construir el usuario",
            "contextAnswer": "Sí, yo creo que no es que nos quede grande, pero sí creo que la promesa está como en el perímetro. O sea, es como que nos faltara el último paso. Creo que las herramientas facilitan los insumos y el acceso a datos como algo bien básico dentro de todo, y confiamos en que la inteligencia con esos datos la va a construir el usuario —y de alguna manera tienen que estar haciéndola, si no no habría usuarios en d-comex, pero sigue siendo mayormente un misterio cómo lo están haciendo—.\n\nPor eso se nos produce una brecha al entrar al terreno de la inteligencia. El problema es que hablar constantemente de 'inteligencia' es algo demasiado grande y sin forma. Hay que seleccionar un pedacito acotado, definido, de lo que podríamos considerar inteligencia a partir de los datos y empezar a desarrollarlo y probarlo. Hay plataformas competidoras —como Trademo o ExportPlanning— que tienen una línea editorial clara de lo que es inteligencia: Trademo trabaja mucho compliance, impuestos a pagar y análisis de cadena de suministro para identificar eslabones riesgosos (no apuestan a 'inteligencia de mercado' vagamente definida); ExportPlanning tiene otro approach que prepara a las empresas para analizar si están listas para internacionalizarse mediante revisión interna y búsqueda de mercados competitivos. Nosotros no tenemos apuesta porque se abusa de decir 'inteligencia' muchas veces esperando que signifique algo. Hay que escoger una apuesta e intentarla, si no nos quedamos en esa capa que es 'casi inteligencia'."
          },
          {
            "id": "ev-2026-11-g06-2",
            "sourceId": "src-entrevista-felipe-osorio",
            "participantName": "Felipe Osorio",
            "shortName": "Felipe",
            "participantRole": "Gerente de Innovación y Desarrollo — Grupo Datacorp / Datasur",
            "timestamp": "10:47 - 13:25",
            "question": "¿qué dato, indicador o cruce de información crees que realmente podría hacer que los clientes se sientan atraídos y que deberíamos priorizar bajo esta nueva marca?",
            "inferred": false,
            "quote": "la mayoría de los usuarios descargan el archivo y lo cargan en sus archivos BI",
            "contextAnswer": "Yo creo que la principal problemática que tiene la gente actualmente —depende del tipo de usuario, pero voy a tratar de generalizarlo a todos— es siempre el tipo de información o que falta información. Por ejemplo, muchos nos preguntan: 'Oye, ¿por qué no está Brasil?', '¿Por qué no está completo el dato de RUT de importador de Chile?', 'Oye, ¿por qué no está este campo? Me falta esta información'. Algo que queremos empezar a trabajar bien justamente con esta nueva área de Gobernanza de Datos es cómo alimentamos o complementamos las bases de datos para que tengan mayor información.\n\nY esto también implica no solamente complementarlas, sino una limpieza de bases de datos: que las bases de datos que están en cirílico estén en inglés, por ejemplo. Ese tipo de cosas sí le afecta al usuario, y es lo que hablamos un poquito: yo puedo generar un dashboard en la plataforma para generar inteligencia, pero la mayoría de los usuarios descargan el archivo y lo cargan en sus archivos BI o en su plataforma BI. Entonces, en realidad, lo que ellos necesitan es una información limpia. Es más, hay muchas empresas que nos están comprando datos para ellos limpiarlos y luego ser plataformas. Entonces, al final, lo que nos falta a nosotros o en lo que nos estamos convirtiendo es en entregar un commodity; la idea es no dejar de ser un commodity [competitivo] y entregar una base de datos limpia que pueda ser fácilmente digerida. Y ahí es donde creo que está justamente el nicho, porque aparte lo que está creciendo son las conexiones de API, y justamente lo que hace la API es unir los datos simplemente. Entonces, entre más limpios estén los datos, más nos van a preferir a nosotros."
          }
        ]
      },
      {
        "id": "hallazgo-03-atencion-equipos",
        "legacyIndex": 2,
        "groupId": "positivas",
        "groupLabel": "Conclusiones positivas",
        "shortTitle": "Atención cercana y consultiva",
        "title": "La atención de los equipos puede hacer reconocible a la nueva marca",
        "bodyLead": "Rocío identifica la rapidez de respuesta como algo que sus clientes valoran. Paz explica que, en Estudios, conversar antes de preparar el entregable permite acordar criterios distintos para cada industria.",
        "highlightedSentence": "Identificar al ejecutivo responsable y conservar la definición humana del encargo hará tangible la cercanía que DataCorp busca proyectar.",
        "whatToDecide": "¿Qué pasa con una consulta después de que entra por el contacto global? Simulemos una solicitud de plataforma, otra de API y un estudio a medida para comprobar destinatario, canal y seguimiento.",
        "primaryAgreementId": "decision-07-atencion-global",
        "primaryAgreementIndex": 6,
        "primaryAgreementTitle": "Atención bajo una marca común",
        "evidenceNamesLabel": "Rocío y Paz",
        "evidence": [
          {
            "id": "ev-2026-11-g02-1",
            "sourceId": "src-entrevista-rocio-de-los-angeles-gonzalez",
            "participantName": "Rocío de los Ángeles González",
            "shortName": "Rocío",
            "participantRole": "Coordinadora del Área Experiencia Clientes — Datasur.com",
            "timestamp": "10:40 - 13:13",
            "question": "¿qué rasgo de nuestra atención o cercanía actual es intocable y que no podemos perder bajo ningún motivo?",
            "inferred": false,
            "quote": "lo que siempre han valorado estos clientes es la atención rápida",
            "contextAnswer": "No sé cómo funcionan las otras marcas actualmente, porque no estoy tan familiarizada con la manera en que se manejan, pero a nivel de d-comex lo que siempre han valorado estos clientes es la atención rápida. Todos se sorprenden siempre: '¡Wow, qué me respondieron tan rápido!', y yo como: 'No, nos tardamos un montón, para mí me tardé muchísimo'. O la entrega personalizada de la experiencia, porque efectivamente, aunque siempre hemos sido tan pocas personas en el área, se trata de que el cliente siempre sepa que es escuchado y que no fue responderle y pasemos al otro, sino que yo quiero saber efectivamente de dónde viene, cómo te sientes, cómo lo percibes.\n\nHay mucho involucramiento con la percepción que tiene el cliente del servicio, de la experiencia, del producto, de la atención, porque incluso nos ponemos en tela de juicio sin hacer una encuesta genérica —a mí me han tocado muchísimas encuestas que nunca hago, por cierto: '¿Qué te pareció nuestra atención hoy, líder?'; no la hago—. Obviamente no va por ese lado, sino que me interesa: 'Mira fulanito, terminamos la llamada, ¿te pareció la respuesta que te entregué? ¿Quedaste conforme? Quedamos disponibles'. O sea, siempre esa importancia que tiene para nosotros el cliente: no como número, no como una factura, sino por entregar realmente lo que necesita. Entonces eso es innegociable. Eso no puede cambiar por nada. Podemos cambiar todo lo que ustedes quieran de la marca, pero el día de mañana, si por ejemplo los van a atender mayoritariamente a través de un chatbot, vamos a perder obviamente eso que nos caracteriza y nos diferencia respecto a las otras empresas que ofrecen este tipo de servicio."
          },
          {
            "id": "ev-2026-11-g02-2",
            "sourceId": "src-entrevista-paz-acevedo",
            "participantName": "Paz Acevedo",
            "shortName": "Paz",
            "participantRole": "Coordinadora de Estudios y Reportería Especializada — Datasur",
            "timestamp": "11:21 - 13:21",
            "question": "¿qué característica del servicio que entregas hoy —puede ser el nivel de detalle, la presentación, la atención, etcétera— no podemos estandarizar ni automatizar jamás, por muy global que se vuelva esta nueva marca?",
            "inferred": false,
            "quote": "Para mí es innegociable la atención al cliente.",
            "contextAnswer": "Sí, yo creo que la atención. La atención siempre va a tener que ser esta parte de la cara humana, de negociar todo, conversarlo todo antes de tener el entregable. Nosotros primero hacemos todo el detalle y luego, si implementamos una IA, le damos las directrices; porque sola no lo puede hacer, nosotros siempre vamos a tener que estar atrás solicitándole 'Oye, tienes que hacer esto'. Segmentar y procesar la IA lo puede hacer, pero uno siempre va a tener que estar en la supervisión y en el primer paso de cara al cliente.\n\nEn el tema de preguntas y requerimientos también es todo tan distinto: todos tienen un mundo diferente a pesar de que es la misma base de datos; todos tienen diferentes parámetros o detalles, y no es lo mismo para una empresa de maquinaria que para los que trabajan con cosméticos. Entonces automatizar respuestas automáticas, no lo sé, me queda la duda. Para mí es innegociable la atención al cliente."
          }
        ]
      },
      {
        "id": "hallazgo-04-cambio-nombre-acceso",
        "legacyIndex": 3,
        "groupId": "riesgos",
        "groupLabel": "Riesgos identificados",
        "shortTitle": "Continuidad de acceso y trayectoria",
        "title": "Cambiar el nombre y el acceso a la vez puede desorientar a clientes históricos",
        "bodyLead": "Francisco Toro advierte que muchos compradores conocen la plataforma como DataSur y Rocío describe clientes que entran desde un favorito con su sesión guardada. Además, Felipe señala que presentar un nombre nuevo atribuyéndole veinte años de historia puede generar dudas si no se explica el respaldo de DataSur.",
        "highlightedSentence": "Una campaña puede explicar el nuevo nombre y dejar sin resolver algo más cotidiano: cómo entrar mañana y quién respalda el servicio.",
        "whatToDecide": "¿En qué orden cambiamos el nombre y la entrada a D-Comex? Antes de retirar el acceso habitual, comprobemos si una cuenta reconoce al proveedor y logra entrar desde su favorito.",
        "primaryAgreementId": "decision-01-transicion-datasur",
        "primaryAgreementIndex": 0,
        "primaryAgreementTitle": "Transición de DataSur",
        "evidenceNamesLabel": "Francisco Toro, Rocío y Felipe",
        "evidence": [
          {
            "id": "ev-2026-11-g03-1",
            "sourceId": "src-entrevista-francisco-toro",
            "participantName": "Francisco Toro",
            "shortName": "Francisco Toro",
            "participantRole": "Jefe de Ventas — Datasur / Grupo Datacorp",
            "timestamp": "03:53 - 06:48",
            "question": "¿Sientes tú que presentar esta nueva marca de esta manera te podría abrir más puertas o crees que podría hacerte tener que dar más explicaciones con respecto a lo que es esto?",
            "inferred": false,
            "quote": "Entonces Datasur ya tiene una posición en el mercado",
            "contextAnswer": "Yo siento que me va a hacer dar más explicaciones. O sea, quizás va a ser inicialmente la primera etapa una etapa en que voy a tener que dar muchas más explicaciones porque ya si se quita el concepto de nombre de fantasía Datasur, mucha gente no asocia a Datasur ni siquiera a d-comex.\n\nTodo el mundo que compra el producto que nosotros hacemos y vendemos —que es la plataforma de impo/expo— casi nunca la asocia a d-comex, sino que es 'Datasur'. Entonces Datasur ya tiene una posición en el mercado, de hecho frente a la competencia, no solamente acá en Chile, sino que a nivel latinoamericano. Entonces va a ser un poco más difícil sacarle ese concepto a las personas y empezar a decirles —quizás algunos ya saben que d-comex y Datasur es lo mismo— que ya sacamos de una el concepto Datasur para introducir esto. No es imposible ni muy difícil, pero va a tomar un poco más de tiempo que la gente se vaya familiarizando con el concepto.\n\nAdemás obviamente va a influir mucho cómo esté esta nueva web de nuestra plataforma, porque hoy en día uno se va a la página de Datasur y casi todo el lenguaje y todo lo que se habla apunta a d-comex. Entonces cuando hagamos esta reestructuración y haya otros productos —ya sea Imex, Exim y otras cosas que se van a incluir—, va a ser un poco más confuso, y quizá el protagonismo que hoy en día tiene d-comex/Datasur va a pasar a segundo plano. Hay que hacer un trabajo ahí para que no se pierda mucho, y obviamente también darle la oportunidad a los otros productos para que tengan importancia en la página. Pero va a ser desafiante quitar el concepto Datasur, que ya lleva muchos años desde que se inició (antes el portal se llamaba Datasur y recién cuando empezó Claudia se introdujo el concepto d-comex, Datamérica, etc.)."
          },
          {
            "id": "ev-2026-11-g03-2",
            "sourceId": "src-entrevista-rocio-de-los-angeles-gonzalez",
            "participantName": "Rocío de los Ángeles González",
            "shortName": "Rocío",
            "participantRole": "Coordinadora del Área Experiencia Clientes — Datasur.com",
            "timestamp": "02:12 - 04:19",
            "question": "¿qué microfricción crees tú —o un pequeño detalle quizás— que les va a molestar en su rutina diaria general? ¿Crees que existen otras fricciones que podrían surgir desde ahí?",
            "inferred": false,
            "quote": "la mayoría tiene guardada la sesión en un link de favoritos",
            "contextAnswer": "Depende de cómo va a ser el recorrido. Porque el cliente, si va a tener el acceso como lo tiene ahora en un par de clics, no va a tener mayor fricción con respecto a la logística. Solo lo que estás mencionando: un cambio de color o que quizás el login ya no está en el lado derecho, que igual sí tiene su impacto. Eso de que le cambies de posición algo, el cliente funciona en automático, inmediatamente se descoloca, se desubica. Entonces sí obviamente tiene impacto cualquier cambio que le hagas.\n\nPero más allá de eso, es lo que vaya a tardar de diferente: si van a hacer los mismos dos clics, le va a dar igual; pero si ahora para poder ingresar a hacer el login va a tener que hacer cinco clics, pues sí va a tener una microfricción —no tan micro, pero sí va a existir—. Porque cualquier tipo de cambio por menor que sea, como te menciono, la mayoría viene en automático, la mayoría tiene guardada la sesión en un link de favoritos y ya tiene su usuario y su clave ahí guardada de por vida y qué sé yo. Es así para antiguos y para nuevos, eso sí es generalizado. Entonces cualquier cambio que se haga, así sea estético, sí tiene algún tipo de impacto. Pero esa sería mi mayor preocupación: lo que se pueda extender en el tránsito de la página para poder llegar a donde llegan ahora."
          },
          {
            "id": "ev-2026-11-g08-1",
            "sourceId": "src-entrevista-rocio-de-los-angeles-gonzalez",
            "participantName": "Rocío de los Ángeles González",
            "shortName": "Rocío",
            "participantRole": "Coordinadora del Área Experiencia Clientes — Datasur.com",
            "timestamp": "04:20 - 05:39",
            "question": "¿Sientes que la marca Datasur hoy les genera alguna limitación o se percibe muy local? ¿Y crees que presentarnos quizás con esta nueva marca nos pueda dar un poco ese peso de empresa global, que es lo que se apunta en esta estrategia?",
            "inferred": false,
            "quote": "el cliente no la percibe como una empresa chica o una empresa local",
            "contextAnswer": "Bueno, dependerá mucho de cómo vayas a presentar esta nueva marca, pero obviamente de la manera en como está distribuida ahora no se siente que sea local. O sea, en este minuto cualquier usuario que exista fuera de Datasur no inmediatamente asocia la página web de d-comex con Chile; no necesariamente.\n\nSí, culturalmente el cliente no la percibe como una empresa chica o una empresa local actualmente en este minuto. Que se pueda ver un poco más global a medida que ustedes vayan haciendo ese viaje o ese cambio de estructura por la marca, pues esperemos que sí. Pero no lo percibo como que actualmente se vea algo de 'Datasur chileno', ¿no? No sé si por ahí iba o yo malinterpreté tu pregunta."
          },
          {
            "id": "ev-2026-11-g08-2",
            "sourceId": "src-entrevista-felipe-osorio",
            "participantName": "Felipe Osorio",
            "shortName": "Felipe",
            "participantRole": "Gerente de Innovación y Desarrollo — Grupo Datacorp / Datasur",
            "timestamp": "08:43 - 10:46",
            "question": "¿cuál de esos atributos crees que nos va a costar más transmitir en la experiencia real del cliente bajo esta nueva marca global?",
            "inferred": false,
            "quote": "esta marca está respaldada por Datasur",
            "contextAnswer": "Mira, lo único que creo que se podría perder de la marca es la confianza, más que nada por los años que llevaba Datasur como marca —o sea, en realidad uno habla de los años de Datasur, pero antes era Consultora Macroscope, Datasur empezó a surgir como el 2016 o 2017 para ser exactos, y antes tuvimos tantas marcas: Infonet, Pymecomex, etcétera—. Pero yo creo que algo que sí —y creo que voy a romper algo que dije antes, que era que la gente no es leal a la marca: en sí no es leal a la marca, pero sí le hace ruido que yo vaya y le diga que la empresa lleva más de 20 años trabajando con información a través de una marca que está recién naciendo—.\n\nEntonces ahí habría que ver justamente cómo manejamos el discurso de: 'No, mira, lo que pasa es que esta marca está respaldada por Datasur, o está creada por Datasur, o es una nueva marca de Datasur'. Que a mí me pasa un poco con Datlas cuando me dicen: 'Ya, pero ¿cuánto tiempo lleva?', 'No, mira, es que estamos recién empezando, debe llevar dos años'. Entonces claro, ahí también pesa un poco el tema de la historia, y volvemos al tema de 'No, mira, yo te voy a atender, yo te voy a entregar esto'. Pero sí creo que es el historial y la confianza lo que se pierde un poco cuando uno cambia de marca."
          }
        ]
      },
      {
        "id": "hallazgo-05-condiciones-proveedores",
        "legacyIndex": 4,
        "groupId": "riesgos",
        "groupLabel": "Riesgos identificados",
        "shortTitle": "Relación con proveedores de datos",
        "title": "Una firma corporativa puede cambiar las condiciones de compra de datos",
        "bodyLead": "Renato distingue dos conversaciones de Imex: al comprador le mostramos cómo puede usar los datos, pero al proveedor la misma firma puede sugerirle que su base se distribuirá en una plataforma.",
        "highlightedSentence": "Según el testimonio de Renato, si una fuente interpreta que su base se mostrará a terceros en una plataforma, eso podría afectar el precio o su disposición a vender.",
        "whatToDecide": "¿Qué necesitamos confirmar con los proveedores antes de presentar a Imex bajo la nueva marca? Revisemos qué uso se acordó para cada base y confirmemos las condiciones por fuente antes de cambiar la firma.",
        "primaryAgreementId": "decision-02-relacion-proveedores",
        "primaryAgreementIndex": 1,
        "primaryAgreementTitle": "Imex y sus proveedores de datos",
        "evidenceNamesLabel": "Renato Andrades",
        "evidence": [
          {
            "id": "ev-2026-11-g04-1",
            "sourceId": "src-entrevista-renato-andrades",
            "participantName": "Renato Andrades",
            "shortName": "Renato",
            "participantRole": "General Manager International — ImexDBusiness",
            "timestamp": "04:39 - 05:25",
            "question": "¿También tienes como ese complejo si trabajamos con una marca como tal?",
            "inferred": false,
            "quote": "Eso o tiene otro precio o se niegan a venderla",
            "contextAnswer": "Claro, o sea, si las adquirimos y yo opero bajo la nueva marca con el logo, correo, etcétera, lo primero que van a preguntar o van a saber es que existe una plataforma y van a decir: 'Ah, pero esta base que yo les voy a vender va a ser ofrecida en plataforma a distintos clientes'. Eso o tiene otro precio o se niegan a venderla, porque la gracia que tiene Imex es que no tiene plataforma."
          }
        ]
      },
      {
        "id": "hallazgo-06-precision-acceso-global",
        "legacyIndex": 5,
        "groupId": "riesgos",
        "groupLabel": "Riesgos identificados",
        "shortTitle": "Límites técnicos y migración",
        "title": "Anunciar acceso global obliga a precisar qué datos y plataformas podemos entregar hoy",
        "bodyLead": "Jorge identifica un escenario donde las consultas intensivas de un cliente afectan el portal compartido, y Ricardo señala que parte del histórico de D-Comex sigue en un modelo anterior. Mientras avanza la convergencia hacia una sola plataforma, reunir herramientas sin aclarar su función puede dejar opciones redundantes.",
        "highlightedSentence": "El país puede estar cubierto y, aun así, ciertos años históricos o formas de acceso tener condiciones técnicas distintas.",
        "whatToDecide": "¿Qué cobertura podemos anunciar y entregar hoy y qué tareas deben seguir funcionando antes de retirar el acceso anterior? Armemos una ficha verificada por país y modalidad y comprobemos las consultas habituales en ambos entornos.",
        "primaryAgreementId": "decision-06-cobertura-internacional",
        "primaryAgreementIndex": 5,
        "primaryAgreementTitle": "Cobertura internacional",
        "evidenceNamesLabel": "Jorge, Ricardo, Felipe y Diego",
        "evidence": [
          {
            "id": "ev-2026-11-g05-1",
            "sourceId": "src-entrevista-jorge-arana",
            "participantName": "Jorge Arana",
            "shortName": "Jorge",
            "participantRole": "Jefe del Área de Producción de Datos — Grupo Datacorp / Datasur",
            "timestamp": "00:56 - 02:59",
            "question": "¿qué proceso actual va a ser el primero en sufrir o ralentizarse ahí?",
            "inferred": false,
            "quote": "Los usuarios del portal son los que sufrirían en primera instancia esto.",
            "contextAnswer": "Eh, mira, si vamos a tener ese escenario, sufre toda la infraestructura. Porque allí ya el tema de los usuarios que utilicen el portal van a ver y van a sentir esa decaída del rendimiento de los recursos si un solo usuario o un servicio específico comienza a explotar los recursos del servidor.\n\nLos usuarios del portal son los que sufrirían en primera instancia esto."
          },
          {
            "id": "ev-2026-11-g05-2",
            "sourceId": "src-entrevista-ricardo-rodriguez",
            "participantName": "Ricardo Rodríguez",
            "shortName": "Ricardo",
            "participantRole": "Jefe de Desarrollo de Producto — Grupo Datacorp / Datasur",
            "timestamp": "11:02 - 13:15",
            "question": "¿cuál para ti es la que te da más miedo que reviente cuando vayamos a integrar todo comercialmente bajo el mismo paraguas de esta nueva marca?",
            "inferred": false,
            "quote": "el mayor dolor es el tema de integración de las bases de datos",
            "contextAnswer": "A mí me da más miedo el d-comex antiguo. Sí, ese me da más miedo. Bueno, de hecho, sin ir más lejos, hace un par de semanas empezamos a trabajar en eso porque justo salió esta noticia mundial de PHP y yo me agarré de eso, dije: 'Oye, ya vengo alegando hace meses que quiero cambiar esto de PHP' y me dijeron 'ya, ahora dale'. Entonces con Jorge [Jorge Arana / equipo] hemos estado trabajando en eso para tenerlo para el próximo año ya alineado con las mismas tecnologías de vanguardia que estamos utilizando en la otra plataforma.\n\nPero sí, yo creo que ahí el mayor dolor es el tema de integración de las bases de datos, eso es lo complicado. Porque además esa información del d-comex antiguo guarda la información histórica de los países que tienen hace 10 años de datos ahí, que no es información que va a trabajar con el nuevo modelo de datos tampoco que estamos trabajando. Entonces quizás ofrecer una búsqueda global en la versión antigua no sé si es tan plausible de momento —quizás solventable con la API que se está trabajando ahora actualmente—. Pero creo que ese sería como el mayor miedo, con esa plataforma. Las otras han estado todas evolucionando hacia solventar esa problemática, así que con el d-comex antiguo me pasa eso."
          },
          {
            "id": "ev-2026-11-g09-1",
            "sourceId": "src-entrevista-felipe-osorio",
            "participantName": "Felipe Osorio",
            "shortName": "Felipe",
            "participantRole": "Gerente de Innovación y Desarrollo — Grupo Datacorp / Datasur",
            "timestamp": "06:49 - 08:42",
            "question": "¿cómo podríamos hacernos cargo quizás de dos experiencias distintas para que uno no sienta que la marca no le habla a él y sí al otro, por ejemplo?",
            "inferred": false,
            "quote": "unificar las plataformas y dejar una sola",
            "contextAnswer": "Sí, lo que pasa es que la idea de aquí —bueno, no sé en realidad el rango de tiempo, no lo hemos conversado porque no es cercano— es justamente unificar las plataformas y dejar una sola. De hecho, por eso Exim lo estamos trabajando con la idea de traer todo lo de d-comex: estamos trabajando la base estadística, luego vamos a trabajar los manifiestos, y la idea es que lo que está en Exim esté para cuando un usuario diga: 'Oye, ¿sabes qué? Pucha, es que me ofreces una plataforma [limitada]', 'Ah, perfecto, no te quedes con eso, te puedo mostrar esta otra plataforma que tenemos'. Y la idea es que se vaya a esa plataforma si lo necesitas.\n\nLo mismo pasa con las bases de datos que no están cargadas en Exim y que sí están en d-comex: la idea es que justamente ese ya no sea [separado], sino que sea esta nueva marca, y que de esa forma lo vayamos migrando: 'Mira, no te vayas porque este nuevo país está en esta plataforma que también es de nosotros, entonces lo miramos para allá'. La idea es justamente ir haciendo ese cambio con las funcionalidades que no tiene una plataforma, llevar al usuario cuando quiere algo más a la otra."
          },
          {
            "id": "ev-2026-11-g09-2",
            "sourceId": "src-entrevista-diego-vera",
            "participantName": "Diego Vera",
            "shortName": "Diego",
            "participantRole": "Jefe de Inteligencia de Productos — Grupo Datacorp / Datasur",
            "timestamp": "00:40 - 06:34",
            "question": "¿tú ves algún riesgo de que los clientes puedan notar cierta desconexión al encontrarse en este nuevo espacio con plataformas aisladas, y cómo podríamos mitigar que la nueva marca no se vea tan fragmentada?",
            "inferred": false,
            "quote": "no encontrar el lugar en donde cada plataforma, funcionalidad o herramienta calza dentro de una estructura o una narrativa de producto más grande",
            "contextAnswer": "Vale, vale, vale. Yo creo que el gran riesgo es no encontrar el lugar en donde cada plataforma, funcionalidad o herramienta calza dentro de una estructura o una narrativa de producto más grande. Si no se encuentra esa narrativa y ese lugar que ocupan las cosas, constantemente —no solo los usuarios, sino que nosotros mismos— vamos a luchar en contra de hacerle sentido, teniendo siempre una tensión presente respecto de qué es lo que estamos mirando y cómo conceptualizar las funcionalidades.\n\nYo creo que ese es el gran riesgo: que te quede como un 'Frankenstein' de cosas que juntaste porque las tenías no más. E incluso un riesgo grande es una cierta redundancia: tener distintas herramientas que básicamente son todas buscadores, en las que la única diferencia es que una tiene más o menos filtros y la otra tiene más o menos países. En ese sentido, Exim y d-comex son básicamente lo mismo; no hay algo auténticamente distinto. Yo preferiría seleccionar uno de los dos en vez de tratar de juntar los dos, y tratar de construir algo que sea verdaderamente distinto a un buscador o que se comunique con uno de los buscadores. La forma de mitigar el riesgo de que todo parezca lo mismo o distinto sin tener una narrativa es intencionar más esa estrategia de construir un producto digital vertical."
          }
        ]
      }
    ],
    "decisions": [
      {
        "id": "decision-01-transicion-datasur",
        "legacyIndex": 0,
        "shortTitle": "Transición de DataSur",
        "questionHeadline": "¿En qué orden cambiamos el nombre, los correos y el acceso a D-Comex?",
        "whatIsAtStake": "Hay clientes que conocen la plataforma como DataSur y entran desde un favorito. Pueden entender el anuncio y, al día siguiente, tener dudas sobre dónde ingresar.",
        "howToResolve": "Mostrar el aviso a clientes históricos y pedirles que entren desde su enlace habitual. Observar si reconocen al proveedor, llegan a su cuenta y encuentran a quién contactar.",
        "whatFor": "Elegir qué se puede cambiar de inmediato y qué acceso necesita una transición gradual.",
        "closingHighlightedSentence": "Podemos cerrar este acuerdo cuando tengamos una secuencia de cambio probada y una alternativa para los accesos que fallen.",
        "targetFindingId": "hallazgo-04-cambio-nombre-acceso",
        "targetFindingIndex": 3,
        "targetFindingShortTitle": "Continuidad de acceso y trayectoria",
        "evidenceNamesLabel": "Francisco Toro y Rocío",
        "evidence": [
          {
            "id": "ev-2026-11-g03-1",
            "sourceId": "src-entrevista-francisco-toro",
            "participantName": "Francisco Toro",
            "shortName": "Francisco Toro",
            "participantRole": "Jefe de Ventas — Datasur / Grupo Datacorp",
            "timestamp": "03:53 - 06:48",
            "question": "¿Sientes tú que presentar esta nueva marca de esta manera te podría abrir más puertas o crees que podría hacerte tener que dar más explicaciones con respecto a lo que es esto?",
            "inferred": false,
            "quote": "Entonces Datasur ya tiene una posición en el mercado",
            "contextAnswer": "Yo siento que me va a hacer dar más explicaciones. O sea, quizás va a ser inicialmente la primera etapa una etapa en que voy a tener que dar muchas más explicaciones porque ya si se quita el concepto de nombre de fantasía Datasur, mucha gente no asocia a Datasur ni siquiera a d-comex.\n\nTodo el mundo que compra el producto que nosotros hacemos y vendemos —que es la plataforma de impo/expo— casi nunca la asocia a d-comex, sino que es 'Datasur'. Entonces Datasur ya tiene una posición en el mercado, de hecho frente a la competencia, no solamente acá en Chile, sino que a nivel latinoamericano. Entonces va a ser un poco más difícil sacarle ese concepto a las personas y empezar a decirles —quizás algunos ya saben que d-comex y Datasur es lo mismo— que ya sacamos de una el concepto Datasur para introducir esto. No es imposible ni muy difícil, pero va a tomar un poco más de tiempo que la gente se vaya familiarizando con el concepto.\n\nAdemás obviamente va a influir mucho cómo esté esta nueva web de nuestra plataforma, porque hoy en día uno se va a la página de Datasur y casi todo el lenguaje y todo lo que se habla apunta a d-comex. Entonces cuando hagamos esta reestructuración y haya otros productos —ya sea Imex, Exim y otras cosas que se van a incluir—, va a ser un poco más confuso, y quizá el protagonismo que hoy en día tiene d-comex/Datasur va a pasar a segundo plano. Hay que hacer un trabajo ahí para que no se pierda mucho, y obviamente también darle la oportunidad a los otros productos para que tengan importancia en la página. Pero va a ser desafiante quitar el concepto Datasur, que ya lleva muchos años desde que se inició (antes el portal se llamaba Datasur y recién cuando empezó Claudia se introdujo el concepto d-comex, Datamérica, etc.)."
          },
          {
            "id": "ev-2026-11-g03-2",
            "sourceId": "src-entrevista-rocio-de-los-angeles-gonzalez",
            "participantName": "Rocío de los Ángeles González",
            "shortName": "Rocío",
            "participantRole": "Coordinadora del Área Experiencia Clientes — Datasur.com",
            "timestamp": "02:12 - 04:19",
            "question": "¿qué microfricción crees tú —o un pequeño detalle quizás— que les va a molestar en su rutina diaria general? ¿Crees que existen otras fricciones que podrían surgir desde ahí?",
            "inferred": false,
            "quote": "la mayoría tiene guardada la sesión en un link de favoritos",
            "contextAnswer": "Depende de cómo va a ser el recorrido. Porque el cliente, si va a tener el acceso como lo tiene ahora en un par de clics, no va a tener mayor fricción con respecto a la logística. Solo lo que estás mencionando: un cambio de color o que quizás el login ya no está en el lado derecho, que igual sí tiene su impacto. Eso de que le cambies de posición algo, el cliente funciona en automático, inmediatamente se descoloca, se desubica. Entonces sí obviamente tiene impacto cualquier cambio que le hagas.\n\nPero más allá de eso, es lo que vaya a tardar de diferente: si van a hacer los mismos dos clics, le va a dar igual; pero si ahora para poder ingresar a hacer el login va a tener que hacer cinco clics, pues sí va a tener una microfricción —no tan micro, pero sí va a existir—. Porque cualquier tipo de cambio por menor que sea, como te menciono, la mayoría viene en automático, la mayoría tiene guardada la sesión en un link de favoritos y ya tiene su usuario y su clave ahí guardada de por vida y qué sé yo. Es así para antiguos y para nuevos, eso sí es generalizado. Entonces cualquier cambio que se haga, así sea estético, sí tiene algún tipo de impacto. Pero esa sería mi mayor preocupación: lo que se pueda extender en el tránsito de la página para poder llegar a donde llegan ahora."
          }
        ]
      },
      {
        "id": "decision-02-relacion-proveedores",
        "legacyIndex": 1,
        "shortTitle": "Imex y sus proveedores de datos",
        "questionHeadline": "¿Qué necesitamos confirmar con los proveedores antes de presentar a Imex bajo la nueva marca?",
        "whatIsAtStake": "Imex compra bases de datos a proveedores. Renato advierte que, si el proveedor ve en el correo o la presentación una marca que también opera una plataforma, podría interpretar que su base se mostrará a terceros. Según su testimonio, eso podría afectar el precio o su disposición a vender. Queda por confirmar en qué relaciones existe ese riesgo.",
        "howToResolve": "Revisar qué uso se acordó para cada base y cómo se entrega realmente. Cuando haya dudas, explicarle ese uso al proveedor y preguntarle si la distribución prevista está contemplada y si cambiarían sus condiciones. Registrar la respuesta por fuente.",
        "whatFor": "Decidir en qué relaciones se puede cambiar la firma y en cuáles hace falta aclarar el uso de los datos antes de comunicar el cambio.",
        "closingHighlightedSentence": "Podemos cerrar este acuerdo cuando cada fuente afectada tenga el uso previsto y sus condiciones confirmados, o una decisión explícita de mantener pendiente el cambio en esa relación.",
        "attributionNote": "Evidencia principal · Testimonio de Renato Andrades. La alerta proviene de la experiencia de Renato en Imex; no corresponde a una objeción ya expresada por un proveedor.",
        "targetFindingId": "hallazgo-05-condiciones-proveedores",
        "targetFindingIndex": 4,
        "targetFindingShortTitle": "Relación con proveedores de datos",
        "evidenceNamesLabel": "Renato Andrades",
        "evidence": [
          {
            "id": "ev-2026-11-g04-1",
            "sourceId": "src-entrevista-renato-andrades",
            "participantName": "Renato Andrades",
            "shortName": "Renato",
            "participantRole": "General Manager International — ImexDBusiness",
            "timestamp": "04:39 - 05:25",
            "question": "¿También tienes como ese complejo si trabajamos con una marca como tal?",
            "inferred": false,
            "quote": "Eso o tiene otro precio o se niegan a venderla",
            "contextAnswer": "Claro, o sea, si las adquirimos y yo opero bajo la nueva marca con el logo, correo, etcétera, lo primero que van a preguntar o van a saber es que existe una plataforma y van a decir: 'Ah, pero esta base que yo les voy a vender va a ser ofrecida en plataforma a distintos clientes'. Eso o tiene otro precio o se niegan a venderla, porque la gracia que tiene Imex es que no tiene plataforma."
          }
        ]
      },
      {
        "id": "decision-03-portafolio-comercial",
        "legacyIndex": 2,
        "shortTitle": "Entradas al catálogo",
        "questionHeadline": "¿Cómo encontrará el comprador la solución que necesita?",
        "whatIsAtStake": "Alguien que quiere alimentar su tablero podría buscar una API en «Datos» o en «Integraciones». Ambas opciones tienen sentido desde su tarea.",
        "howToResolve": "Probar el menú con compradores usando encargos concretos: buscar compradores internacionales, alimentar un tablero, solicitar un estudio y ofrecer una plataforma propia. Registrar dónde empiezan y si llegan a la solución y al contacto correcto.",
        "whatFor": "Elegir nombres y rutas que permitan cotizar sin depender de una explicación del ejecutivo.",
        "closingHighlightedSentence": "Podemos cerrar este acuerdo cuando sepamos qué entradas funcionan y hayamos vuelto a probar las rutas que generaron confusión.",
        "targetFindingId": "hallazgo-01-servicios-ocultos",
        "targetFindingIndex": 0,
        "targetFindingShortTitle": "Servicios poco visibles",
        "evidenceNamesLabel": "Francisco Toro y Renato",
        "evidence": [
          {
            "id": "ev-2026-11-g07-1",
            "sourceId": "src-entrevista-francisco-toro",
            "participantName": "Francisco Toro",
            "shortName": "Francisco Toro",
            "participantRole": "Jefe de Ventas — Datasur / Grupo Datacorp",
            "timestamp": "11:19 - 13:34",
            "question": "¿te imaginas a tu equipo ofreciendo eso? ¿Crees que dentro de la cartera que manejas hoy hay apetito por estos productos más complejos?",
            "inferred": false,
            "quote": "de los siete contactos de calidad que llegaron la semana pasada, cinco ya estaban preguntando por API",
            "contextAnswer": "Sí, no, de hecho hoy en día la mayoría —yo creo que más del 50% que se está acercando, independientemente del canal, no solamente a nivel digital, sino que en ferias o referidos— está preguntando cada vez más por API. De hecho, yo hablaba la semana pasada con Rocío para ver cómo le está yendo con esto, y de los siete contactos de calidad que llegaron la semana pasada, cinco ya estaban preguntando por API. Como que preguntan inicialmente por API y no por la plataforma: entienden qué es d-comex, pero su necesidad apunta a 'quiero ese servicio, pero que esté en mi nube, que se integre en mi plataforma', entonces ya quieren API.\n\nEntonces yo creo que sí o sí tienen que capacitar a toda el área comercial, entender cómo se ofrece, porque hoy en día el lead nuevo que busca API quiere un precio de inmediato, y el protocolo no es lo mismo que d-comex —donde existen planes puntuales que uno sabe cuánto valen—, sino que la API depende de muchos factores: cantidad de datos, peso, cuántos campos, etcétera. Es un producto que a nivel de ticket entrega mucho más beneficio a la empresa, pero es mucho más lenta y técnica la negociación. Yo siento que d-comex es mucho más fácil de vender que una API."
          },
          {
            "id": "ev-2026-11-g07-2",
            "sourceId": "src-entrevista-renato-andrades",
            "participantName": "Renato Andrades",
            "shortName": "Renato",
            "participantRole": "General Manager International — ImexDBusiness",
            "timestamp": "07:19 - 08:34",
            "question": "¿Cómo, desde tu perspectiva, podríamos asegurarnos de que este usuario pueda encontrar lo que necesita y no termine confundido dentro de este catálogo que se pueda ofrecer en esta marca unificada?",
            "inferred": false,
            "quote": "si está todo ahí junto con plataforma y otras cosas, puede llegar a confundirse",
            "contextAnswer": "Ese es un poco también el fundamento de por qué se reconstruyó la página de Imex hacia lo que hoy en día transmite: que somos alimentadores y proveedores de datos, tanto por API... No se habla tanto de 'dato en bruto' porque es riesgoso también salir a vender públicamente dato en bruto, pero habla de que Imex es un proveedor de datos y alimenta datos de distintas maneras.\n\nRespondiendo a tu pregunta de cómo no se podría confundir, sería dejar súper claro eso; pero efectivamente, claro, si está todo ahí junto con plataforma y otras cosas, puede llegar a confundirse."
          }
        ]
      },
      {
        "id": "decision-04-migracion-producto",
        "legacyIndex": 3,
        "shortTitle": "Migración de producto",
        "questionHeadline": "¿Qué tareas deben seguir funcionando antes de retirar el acceso anterior?",
        "whatIsAtStake": "Una cuenta puede depender de años de información, filtros o exportaciones que utiliza para trabajar. Moverla sin revisar esas tareas puede interrumpir su operación.",
        "howToResolve": "Elegir consultas habituales con las cuentas usuarias. Repetirlas en ambos entornos y comparar años disponibles, campos, resultados y archivos exportados.",
        "whatFor": "Definir qué se puede migrar y qué requiere una alternativa antes del retiro.",
        "closingHighlightedSentence": "Podemos cerrar este acuerdo cuando las tareas críticas sean reproducibles o la cuenta haya comprobado que la alternativa le sirve.",
        "targetFindingId": "hallazgo-06-precision-acceso-global",
        "targetFindingIndex": 5,
        "targetFindingShortTitle": "Límites técnicos y migración",
        "evidenceNamesLabel": "Felipe y Diego",
        "evidence": [
          {
            "id": "ev-2026-11-g09-1",
            "sourceId": "src-entrevista-felipe-osorio",
            "participantName": "Felipe Osorio",
            "shortName": "Felipe",
            "participantRole": "Gerente de Innovación y Desarrollo — Grupo Datacorp / Datasur",
            "timestamp": "06:49 - 08:42",
            "question": "¿cómo podríamos hacernos cargo quizás de dos experiencias distintas para que uno no sienta que la marca no le habla a él y sí al otro, por ejemplo?",
            "inferred": false,
            "quote": "unificar las plataformas y dejar una sola",
            "contextAnswer": "Sí, lo que pasa es que la idea de aquí —bueno, no sé en realidad el rango de tiempo, no lo hemos conversado porque no es cercano— es justamente unificar las plataformas y dejar una sola. De hecho, por eso Exim lo estamos trabajando con la idea de traer todo lo de d-comex: estamos trabajando la base estadística, luego vamos a trabajar los manifiestos, y la idea es que lo que está en Exim esté para cuando un usuario diga: 'Oye, ¿sabes qué? Pucha, es que me ofreces una plataforma [limitada]', 'Ah, perfecto, no te quedes con eso, te puedo mostrar esta otra plataforma que tenemos'. Y la idea es que se vaya a esa plataforma si lo necesitas.\n\nLo mismo pasa con las bases de datos que no están cargadas en Exim y que sí están en d-comex: la idea es que justamente ese ya no sea [separado], sino que sea esta nueva marca, y que de esa forma lo vayamos migrando: 'Mira, no te vayas porque este nuevo país está en esta plataforma que también es de nosotros, entonces lo miramos para allá'. La idea es justamente ir haciendo ese cambio con las funcionalidades que no tiene una plataforma, llevar al usuario cuando quiere algo más a la otra."
          },
          {
            "id": "ev-2026-11-g09-2",
            "sourceId": "src-entrevista-diego-vera",
            "participantName": "Diego Vera",
            "shortName": "Diego",
            "participantRole": "Jefe de Inteligencia de Productos — Grupo Datacorp / Datasur",
            "timestamp": "00:40 - 06:34",
            "question": "¿tú ves algún riesgo de que los clientes puedan notar cierta desconexión al encontrarse en este nuevo espacio con plataformas aisladas, y cómo podríamos mitigar que la nueva marca no se vea tan fragmentada?",
            "inferred": false,
            "quote": "no encontrar el lugar en donde cada plataforma, funcionalidad o herramienta calza dentro de una estructura o una narrativa de producto más grande",
            "contextAnswer": "Vale, vale, vale. Yo creo que el gran riesgo es no encontrar el lugar en donde cada plataforma, funcionalidad o herramienta calza dentro de una estructura o una narrativa de producto más grande. Si no se encuentra esa narrativa y ese lugar que ocupan las cosas, constantemente —no solo los usuarios, sino que nosotros mismos— vamos a luchar en contra de hacerle sentido, teniendo siempre una tensión presente respecto de qué es lo que estamos mirando y cómo conceptualizar las funcionalidades.\n\nYo creo que ese es el gran riesgo: que te quede como un 'Frankenstein' de cosas que juntaste porque las tenías no más. E incluso un riesgo grande es una cierta redundancia: tener distintas herramientas que básicamente son todas buscadores, en las que la única diferencia es que una tiene más o menos filtros y la otra tiene más o menos países. En ese sentido, Exim y d-comex son básicamente lo mismo; no hay algo auténticamente distinto. Yo preferiría seleccionar uno de los dos en vez de tratar de juntar los dos, y tratar de construir algo que sea verdaderamente distinto a un buscador o que se comunique con uno de los buscadores. La forma de mitigar el riesgo de que todo parezca lo mismo o distinto sin tener una narrativa es intencionar más esa estrategia de construir un producto digital vertical."
          }
        ]
      },
      {
        "id": "decision-05-propuesta-valor",
        "legacyIndex": 4,
        "shortTitle": "Promesa por solución",
        "questionHeadline": "¿Qué resultado concreto recibe quien compra «inteligencia»?",
        "whatIsAtStake": "Un analista puede esperar una respuesta en pantalla; un equipo técnico, datos para su propio BI; y quien contrata un estudio, una interpretación lista para usar.",
        "howToResolve": "Mostrar una descripción y un ejemplo de cada modalidad a compradores de esos perfiles. Pedirles que expliquen qué recibirían y cómo lo usarían en una decisión reciente. Comparar su expectativa con la entrega real.",
        "whatFor": "Redactar una promesa comercial que el comprador entienda y el servicio pueda cumplir.",
        "closingHighlightedSentence": "Podemos cerrar este acuerdo cuando cada modalidad tenga un ejemplo comprobado y se hayan aclarado las expectativas que el mensaje inicial dejó abiertas.",
        "targetFindingId": "hallazgo-02-credibilidad-cobertura",
        "targetFindingIndex": 1,
        "targetFindingShortTitle": "Cobertura y promesa de inteligencia",
        "evidenceNamesLabel": "Diego y Felipe",
        "evidence": [
          {
            "id": "ev-2026-11-g06-1",
            "sourceId": "src-entrevista-diego-vera",
            "participantName": "Diego Vera",
            "shortName": "Diego",
            "participantRole": "Jefe de Inteligencia de Productos — Grupo Datacorp / Datasur",
            "timestamp": "06:35 - 10:33",
            "question": "¿sientes que esa narrativa representa nuestra realidad o crees que la marca está prometiendo un nivel de inteligencia que hoy nos queda grande, por decirlo así?",
            "inferred": false,
            "quote": "la inteligencia con esos datos la va a construir el usuario",
            "contextAnswer": "Sí, yo creo que no es que nos quede grande, pero sí creo que la promesa está como en el perímetro. O sea, es como que nos faltara el último paso. Creo que las herramientas facilitan los insumos y el acceso a datos como algo bien básico dentro de todo, y confiamos en que la inteligencia con esos datos la va a construir el usuario —y de alguna manera tienen que estar haciéndola, si no no habría usuarios en d-comex, pero sigue siendo mayormente un misterio cómo lo están haciendo—.\n\nPor eso se nos produce una brecha al entrar al terreno de la inteligencia. El problema es que hablar constantemente de 'inteligencia' es algo demasiado grande y sin forma. Hay que seleccionar un pedacito acotado, definido, de lo que podríamos considerar inteligencia a partir de los datos y empezar a desarrollarlo y probarlo. Hay plataformas competidoras —como Trademo o ExportPlanning— que tienen una línea editorial clara de lo que es inteligencia: Trademo trabaja mucho compliance, impuestos a pagar y análisis de cadena de suministro para identificar eslabones riesgosos (no apuestan a 'inteligencia de mercado' vagamente definida); ExportPlanning tiene otro approach que prepara a las empresas para analizar si están listas para internacionalizarse mediante revisión interna y búsqueda de mercados competitivos. Nosotros no tenemos apuesta porque se abusa de decir 'inteligencia' muchas veces esperando que signifique algo. Hay que escoger una apuesta e intentarla, si no nos quedamos en esa capa que es 'casi inteligencia'."
          },
          {
            "id": "ev-2026-11-g06-2",
            "sourceId": "src-entrevista-felipe-osorio",
            "participantName": "Felipe Osorio",
            "shortName": "Felipe",
            "participantRole": "Gerente de Innovación y Desarrollo — Grupo Datacorp / Datasur",
            "timestamp": "10:47 - 13:25",
            "question": "¿qué dato, indicador o cruce de información crees que realmente podría hacer que los clientes se sientan atraídos y que deberíamos priorizar bajo esta nueva marca?",
            "inferred": false,
            "quote": "la mayoría de los usuarios descargan el archivo y lo cargan en sus archivos BI",
            "contextAnswer": "Yo creo que la principal problemática que tiene la gente actualmente —depende del tipo de usuario, pero voy a tratar de generalizarlo a todos— es siempre el tipo de información o que falta información. Por ejemplo, muchos nos preguntan: 'Oye, ¿por qué no está Brasil?', '¿Por qué no está completo el dato de RUT de importador de Chile?', 'Oye, ¿por qué no está este campo? Me falta esta información'. Algo que queremos empezar a trabajar bien justamente con esta nueva área de Gobernanza de Datos es cómo alimentamos o complementamos las bases de datos para que tengan mayor información.\n\nY esto también implica no solamente complementarlas, sino una limpieza de bases de datos: que las bases de datos que están en cirílico estén en inglés, por ejemplo. Ese tipo de cosas sí le afecta al usuario, y es lo que hablamos un poquito: yo puedo generar un dashboard en la plataforma para generar inteligencia, pero la mayoría de los usuarios descargan el archivo y lo cargan en sus archivos BI o en su plataforma BI. Entonces, en realidad, lo que ellos necesitan es una información limpia. Es más, hay muchas empresas que nos están comprando datos para ellos limpiarlos y luego ser plataformas. Entonces, al final, lo que nos falta a nosotros o en lo que nos estamos convirtiendo es en entregar un commodity; la idea es no dejar de ser un commodity [competitivo] y entregar una base de datos limpia que pueda ser fácilmente digerida. Y ahí es donde creo que está justamente el nicho, porque aparte lo que está creciendo son las conexiones de API, y justamente lo que hace la API es unir los datos simplemente. Entonces, entre más limpios estén los datos, más nos van a preferir a nosotros."
          }
        ]
      },
      {
        "id": "decision-06-cobertura-internacional",
        "legacyIndex": 5,
        "shortTitle": "Cobertura internacional",
        "questionHeadline": "¿Qué cobertura podemos anunciar y entregar hoy?",
        "whatIsAtStake": "Tener información de un país deja abiertas otras preguntas: qué fuente usamos, qué años cubre, cuándo se actualiza y si se entrega por plataforma o API.",
        "howToResolve": "Armar una ficha por país y modalidad. Verificar el detalle con la fuente y ejecutar una consulta representativa. Si se ofrece un plazo o un nivel de rendimiento, comprobarlo bajo las condiciones previstas.",
        "whatFor": "Dar a Ventas una respuesta defendible cuando un comprador pregunte qué incluye su contratación.",
        "closingHighlightedSentence": "Podemos cerrar este acuerdo cuando cada afirmación que se quiera publicar tenga alcance y respaldo verificables.",
        "closingExtraSentence": "La primera comprobación es interna.",
        "targetFindingId": "hallazgo-06-precision-acceso-global",
        "targetFindingIndex": 5,
        "targetFindingShortTitle": "Límites técnicos y migración",
        "evidenceNamesLabel": "Jorge y Ricardo",
        "evidence": [
          {
            "id": "ev-2026-11-g05-1",
            "sourceId": "src-entrevista-jorge-arana",
            "participantName": "Jorge Arana",
            "shortName": "Jorge",
            "participantRole": "Jefe del Área de Producción de Datos — Grupo Datacorp / Datasur",
            "timestamp": "00:56 - 02:59",
            "question": "¿qué proceso actual va a ser el primero en sufrir o ralentizarse ahí?",
            "inferred": false,
            "quote": "Los usuarios del portal son los que sufrirían en primera instancia esto.",
            "contextAnswer": "Eh, mira, si vamos a tener ese escenario, sufre toda la infraestructura. Porque allí ya el tema de los usuarios que utilicen el portal van a ver y van a sentir esa decaída del rendimiento de los recursos si un solo usuario o un servicio específico comienza a explotar los recursos del servidor.\n\nLos usuarios del portal son los que sufrirían en primera instancia esto."
          },
          {
            "id": "ev-2026-11-g05-2",
            "sourceId": "src-entrevista-ricardo-rodriguez",
            "participantName": "Ricardo Rodríguez",
            "shortName": "Ricardo",
            "participantRole": "Jefe de Desarrollo de Producto — Grupo Datacorp / Datasur",
            "timestamp": "11:02 - 13:15",
            "question": "¿cuál para ti es la que te da más miedo que reviente cuando vayamos a integrar todo comercialmente bajo el mismo paraguas de esta nueva marca?",
            "inferred": false,
            "quote": "el mayor dolor es el tema de integración de las bases de datos",
            "contextAnswer": "A mí me da más miedo el d-comex antiguo. Sí, ese me da más miedo. Bueno, de hecho, sin ir más lejos, hace un par de semanas empezamos a trabajar en eso porque justo salió esta noticia mundial de PHP y yo me agarré de eso, dije: 'Oye, ya vengo alegando hace meses que quiero cambiar esto de PHP' y me dijeron 'ya, ahora dale'. Entonces con Jorge [Jorge Arana / equipo] hemos estado trabajando en eso para tenerlo para el próximo año ya alineado con las mismas tecnologías de vanguardia que estamos utilizando en la otra plataforma.\n\nPero sí, yo creo que ahí el mayor dolor es el tema de integración de las bases de datos, eso es lo complicado. Porque además esa información del d-comex antiguo guarda la información histórica de los países que tienen hace 10 años de datos ahí, que no es información que va a trabajar con el nuevo modelo de datos tampoco que estamos trabajando. Entonces quizás ofrecer una búsqueda global en la versión antigua no sé si es tan plausible de momento —quizás solventable con la API que se está trabajando ahora actualmente—. Pero creo que ese sería como el mayor miedo, con esa plataforma. Las otras han estado todas evolucionando hacia solventar esa problemática, así que con el d-comex antiguo me pasa eso."
          }
        ]
      },
      {
        "id": "decision-07-atencion-global",
        "legacyIndex": 6,
        "shortTitle": "Atención bajo una marca común",
        "questionHeadline": "¿Qué pasa con una consulta después de que entra por el contacto global?",
        "whatIsAtStake": "La rapidez y el trato personal aparecen como fortalezas. Un formulario común puede diluir esa experiencia si el cliente debe repetir su solicitud en cada derivación.",
        "howToResolve": "Simular tres casos: ayuda para ingresar a D-Comex, una consulta técnica sobre la API y un estudio a medida. Seguir cada caso hasta que alguien lo reciba con su contexto. Comprobar idioma, canal y forma de seguimiento.",
        "whatFor": "Mantener una atención reconocible aunque cambie la puerta de entrada.",
        "closingHighlightedSentence": "Podemos cerrar este acuerdo cuando cada caso tenga un destinatario, una vía de respuesta y un seguimiento comprobado.",
        "closingExtraSentence": "Si queda una duda sobre la experiencia del cliente, contrastarla con una cuenta antes de extender el flujo.",
        "targetFindingId": "hallazgo-03-atencion-equipos",
        "targetFindingIndex": 2,
        "targetFindingShortTitle": "Atención cercana y consultiva",
        "evidenceNamesLabel": "Rocío y Paz",
        "evidence": [
          {
            "id": "ev-2026-11-g02-1",
            "sourceId": "src-entrevista-rocio-de-los-angeles-gonzalez",
            "participantName": "Rocío de los Ángeles González",
            "shortName": "Rocío",
            "participantRole": "Coordinadora del Área Experiencia Clientes — Datasur.com",
            "timestamp": "10:40 - 13:13",
            "question": "¿qué rasgo de nuestra atención o cercanía actual es intocable y que no podemos perder bajo ningún motivo?",
            "inferred": false,
            "quote": "lo que siempre han valorado estos clientes es la atención rápida",
            "contextAnswer": "No sé cómo funcionan las otras marcas actualmente, porque no estoy tan familiarizada con la manera en que se manejan, pero a nivel de d-comex lo que siempre han valorado estos clientes es la atención rápida. Todos se sorprenden siempre: '¡Wow, qué me respondieron tan rápido!', y yo como: 'No, nos tardamos un montón, para mí me tardé muchísimo'. O la entrega personalizada de la experiencia, porque efectivamente, aunque siempre hemos sido tan pocas personas en el área, se trata de que el cliente siempre sepa que es escuchado y que no fue responderle y pasemos al otro, sino que yo quiero saber efectivamente de dónde viene, cómo te sientes, cómo lo percibes.\n\nHay mucho involucramiento con la percepción que tiene el cliente del servicio, de la experiencia, del producto, de la atención, porque incluso nos ponemos en tela de juicio sin hacer una encuesta genérica —a mí me han tocado muchísimas encuestas que nunca hago, por cierto: '¿Qué te pareció nuestra atención hoy, líder?'; no la hago—. Obviamente no va por ese lado, sino que me interesa: 'Mira fulanito, terminamos la llamada, ¿te pareció la respuesta que te entregué? ¿Quedaste conforme? Quedamos disponibles'. O sea, siempre esa importancia que tiene para nosotros el cliente: no como número, no como una factura, sino por entregar realmente lo que necesita. Entonces eso es innegociable. Eso no puede cambiar por nada. Podemos cambiar todo lo que ustedes quieran de la marca, pero el día de mañana, si por ejemplo los van a atender mayoritariamente a través de un chatbot, vamos a perder obviamente eso que nos caracteriza y nos diferencia respecto a las otras empresas que ofrecen este tipo de servicio."
          },
          {
            "id": "ev-2026-11-g02-2",
            "sourceId": "src-entrevista-paz-acevedo",
            "participantName": "Paz Acevedo",
            "shortName": "Paz",
            "participantRole": "Coordinadora de Estudios y Reportería Especializada — Datasur",
            "timestamp": "11:21 - 13:21",
            "question": "¿qué característica del servicio que entregas hoy —puede ser el nivel de detalle, la presentación, la atención, etcétera— no podemos estandarizar ni automatizar jamás, por muy global que se vuelva esta nueva marca?",
            "inferred": false,
            "quote": "Para mí es innegociable la atención al cliente.",
            "contextAnswer": "Sí, yo creo que la atención. La atención siempre va a tener que ser esta parte de la cara humana, de negociar todo, conversarlo todo antes de tener el entregable. Nosotros primero hacemos todo el detalle y luego, si implementamos una IA, le damos las directrices; porque sola no lo puede hacer, nosotros siempre vamos a tener que estar atrás solicitándole 'Oye, tienes que hacer esto'. Segmentar y procesar la IA lo puede hacer, pero uno siempre va a tener que estar en la supervisión y en el primer paso de cara al cliente.\n\nEn el tema de preguntas y requerimientos también es todo tan distinto: todos tienen un mundo diferente a pesar de que es la misma base de datos; todos tienen diferentes parámetros o detalles, y no es lo mismo para una empresa de maquinaria que para los que trabajan con cosméticos. Entonces automatizar respuestas automáticas, no lo sé, me queda la duda. Para mí es innegociable la atención al cliente."
          }
        ]
      }
    ]
  },
  {
    "id": "estudio-futuro-usuarios-clientes",
    "monthKey": "2026-11",
    "monthLabel": "Noviembre 2026",
    "performedMonth": "Por programar",
    "incorporatedAt": "2026-11-23",
    "measurementPeriod": "Pendiente de ejecución",
    "scopeExplanation": "",
    "decisionsIntroText": "",
    "categoryLabel": "Próximamente",
    "title": "Entrevistas con usuarios y clientes",
    "summary": "Pronto se irán incluyendo más entrevistas. Cada nueva ronda aparecerá bajo el mes en que se realice.",
    "status": "upcoming",
    "upcomingNote": "Pronto se irán incluyendo más entrevistas",
    "groups": [],
    "findings": [],
    "decisions": []
  }
];

export const ACTIVE_DEFAULT_STUDY = STUDIES_DATA.find((s) => s.status === 'active')!;
