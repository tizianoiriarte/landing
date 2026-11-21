import Effects from './Effects';

const NAV = [
  { href: '#quien-soy', label: 'Quién soy' },
  { href: '#filosofia', label: 'Filosofía' },
  { href: '#metodo', label: 'Método' },
  { href: '#casos', label: 'Casos' },
  { href: '#capacidades', label: 'Capacidades' },
];

const SEGMENTOS = [
  {
    tag: 'Segmento A',
    title: 'Profesionales creativos',
    text: 'Talentos independientes con habilidades y visión que necesitan transformar ese potencial en una identidad clara y un posicionamiento diferencial.',
  },
  {
    tag: 'Segmento B',
    title: 'Founders y emprendedores',
    text: 'Personas con un proyecto o negocio que quieren una estrategia de contenido para conectar con su audiencia y generar oportunidades.',
  },
];

const PRINCIPIOS = [
  { title: 'Intención antes que ejecución', text: 'Cada decisión creativa tiene que responder a un propósito.' },
  { title: 'Diferenciación desde la identidad', text: 'No se trata de imitar fórmulas, sino de descubrir qué hace único a cada proyecto.' },
  { title: 'Creatividad con estrategia', text: 'La creatividad atrae, pero la estrategia le da dirección y sentido.' },
  { title: 'Autenticidad y conexión', text: 'Marcas con algo genuino que transmitir y personas con las que conectar.' },
  { title: 'Evolución constante', text: 'Una mentalidad de aprendizaje, experimentación y mejora.' },
];

const FASES = [
  {
    title: 'Diagnóstico de negocio',
    desc: 'Entendemos en profundidad tu servicio para diseñar un sistema alineado a resultados.',
    items: [
      'Para quién es tu servicio',
      'La transformación que generás',
      'Por qué elegirte a vos y no a otro',
      'Miedos y dudas de tus clientes',
      'Tu método, paso a paso',
      'El antes y el después del cliente',
    ],
    result: 'claridad sobre qué ofrecés, a quién y por qué te eligen.',
  },
  {
    title: 'Narrativa',
    desc: 'Definimos la identidad verbal y estratégica del contenido: narrativa, tono, mensaje y pilares.',
    items: [
      'Founder story',
      'Arquetipo comunicacional y posicionamiento',
      'Mensaje central (big idea)',
      'El enemigo común',
      'Banco de insights y optimización del perfil',
      'Pilares: tu historia, filosofía y knowledge',
    ],
    result: 'un mensaje propio, claro y diferencial.',
  },
  {
    title: 'Branding',
    desc: 'Construimos la identidad visual del contenido a partir de la narrativa.',
    items: [
      'Referencias y perfiles de inspiración',
      'Moodboards',
      'Estética audiovisual',
      'Portadas',
      'Briefs de reels y carruseles',
    ],
    result: 'una estética coherente y reconocible.',
  },
  {
    title: 'Estrategia',
    desc: 'Conectamos las metas de tu negocio con acciones concretas de contenido.',
    items: [
      'Objetivos de negocio a 90 días (KPIs)',
      'Ecosistema circular',
      'Minería de ideas',
      'Calendarización y frecuencia de publicación',
    ],
    result: 'un plan de contenido medible y sostenible.',
  },
];

const CASOS = [
  {
    meta: 'Caso 01 · Modelaje · Instagram · Nov 2025 – Mar 2026',
    name: 'Guido Tristán',
    paragraphs: [
      'Tenía una buena base de seguidores, muchas ideas y dudas sobre cómo concretarlas, pero el contenido no generaba consultas. El objetivo: lanzar una marca personal sólida y posicionarse como referente transparente y profesional del modelaje en Argentina.',
      'Trabajamos el diagnóstico, los pilares de contenido, el mensaje central, la identidad visual, los guiones y la optimización de ganchos.',
    ],
    images: [
      {
        href: 'https://www.instagram.com/tristanguido/',
        label: 'Ver el Instagram de Guido Tristán',
        src: '/assets/guido-perfil.jpg',
        width: 1081,
        height: 300,
        alt: 'Perfil de Instagram de Guido Tristán, @tristanguido',
      },
      {
        href: 'https://www.instagram.com/tristanguido/reels/',
        label: 'Ver los reels de Guido Tristán',
        src: '/assets/guido-reels.jpg',
        width: 1215,
        height: 756,
        alt: 'Selección de reels de Guido Tristán con sus visualizaciones',
      },
    ],
    stats: [
      { value: '+500 K', label: 'visualizaciones orgánicas en 30 días; más del 75 % de no seguidores', accent: true },
      { value: '9,7 K → 25 K', label: 'seguidores; +30,9 % solo en el último mes' },
      { value: '+124 %', label: 'cuentas alcanzadas frente al período anterior (+220 K)' },
      { value: '+44 K', label: 'interacciones, sin inversión en publicidad' },
    ],
    imageFirst: false,
    tex: 'tex-oscuro-d',
    variant: 'case--1',
  },
  {
    meta: 'Caso 02 · Negocios · Instagram + TikTok · 9 meses · 2025',
    name: 'Leonel Rossi',
    paragraphs: [
      'Dueño de negocios con años de recorrido emprendedor que no sabía cómo ordenar lo que sabe ni cómo trasladarlo al contenido. El objetivo: convertir su experiencia en una presencia digital con dirección estratégica.',
      'Trabajamos estrategia, optimización del perfil, guiones, historias y edición, con una comunicación directa apoyada en oportunidades de negocio e historias emprendedoras.',
    ],
    images: [
      {
        href: 'https://www.instagram.com/leonelrossi__/',
        label: 'Ver el Instagram de Leonel Rossi',
        src: '/assets/leo-instagram.jpg',
        width: 1053,
        height: 300,
        alt: 'Perfil de Instagram de Leonel Rossi, @leonelrossi__',
      },
      {
        href: 'https://www.tiktok.com/@leonel.rossi1',
        label: 'Ver el TikTok de Leonel Rossi',
        src: '/assets/leo-tiktok.jpg',
        width: 1813,
        height: 1171,
        alt: 'Perfil de TikTok de Leonel Rossi con sus videos más populares',
      },
    ],
    stats: [
      { value: '3,7 M', label: 'reproducciones en un solo video de TikTok', accent: true },
      { value: '631 K', label: 'reproducciones en el video más visto de Instagram' },
      { value: '0 → +30 K', label: 'seguidores en TikTok' },
      { value: '+500 K', label: 'cuentas alcanzadas en Instagram' },
    ],
    imageFirst: true,
    tex: 'tex-oscuro-e',
    variant: 'case--2',
  },
];

const CAPACIDADES = [
  {
    title: 'Posicionamiento de marca personal',
    text: 'Definición del mensaje central, diferencial, identidad comunicacional y tono de voz a partir de la esencia, experiencia y objetivos de cada marca.',
  },
  {
    title: 'Estrategia y dirección de contenido',
    text: 'Diseño de sistemas de contenido alineados a los objetivos de marca: pilares, temáticas, formatos, frecuencia y planificación editorial.',
  },
  {
    title: 'Conceptualización, guiones y narrativa',
    text: 'Desarrollo de ideas, conceptos, ganchos y estructuras narrativas que transforman conocimientos y experiencias en contenido atractivo y relevante.',
  },
  {
    title: 'Dirección y producción audiovisual',
    text: 'Traducción de la estrategia en piezas audiovisuales. Dirección del lenguaje visual, edición y desarrollo de contenido listo para publicar.',
  },
  {
    title: 'Arquitectura y optimización de perfiles',
    text: 'Organización de la identidad visual, presentación, biografía y recorrido del perfil para comunicar la propuesta de valor con claridad.',
  },
  {
    title: 'Análisis de rendimiento y optimización',
    text: 'Interpretación de métricas, identificación de patrones y oportunidades de mejora para ajustar la estrategia y potenciar los contenidos que generan resultados.',
  },
];

// Escalonado: cada elemento de una grilla aparece un poco después del anterior
const stagger = (i) => ({ '--d': `${i * 0.12}s` });
const pad = (n) => String(n).padStart(2, '0');

function Caso({ caso }) {
  const visual = (
    <div className="reveal visual-caso" style={caso.imageFirst ? undefined : { '--d': '.15s' }}>
      {caso.images.map((img) => (
        <a key={img.src} href={img.href} target="_blank" rel="noopener" aria-label={img.label}>
          <img src={img.src} width={img.width} height={img.height} loading="lazy" alt={img.alt} />
        </a>
      ))}
    </div>
  );
  const text = (
    <div className="reveal col case-text" style={caso.imageFirst ? { '--d': '.15s' } : undefined}>
      <p className="case-meta">{caso.meta}</p>
      <h3>{caso.name}</h3>
      {caso.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );

  return (
    <section className={`tex ${caso.tex} container case ${caso.variant}`}>
      <div className={`case-row${caso.imageFirst ? ' case-row--reverse' : ''}`}>
        {caso.imageFirst ? (
          <>
            {visual}
            {text}
          </>
        ) : (
          <>
            {text}
            {visual}
          </>
        )}
      </div>
      <div className="reveal stats">
        {caso.stats.map((s) => (
          <div className="stat" key={s.value + s.label}>
            <p className={`count${s.accent ? ' count--accent' : ''}`}>{s.value}</p>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <nav className="nav" aria-label="Principal">
          <a className="logo" href="#inicio">tizi.iriarte</a>
          <div className="nav-links">
            {NAV.map((l) => (
              <a key={l.href} className="nav-link" href={l.href}>{l.label}</a>
            ))}
            <a className="nav-link nav-link--accent" href="#contacto">Contacto</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Portada */}
        <section id="inicio" className="bg-wrap">
          <div className="bg-layer bg-celeste" aria-hidden="true" />
          <div className="hero-in hero-content">
            <p className="hero-kicker">Tiziano Iriarte</p>
            <h1>Estratega y Creativo digital</h1>
            <p className="hero-text">
              Ayudo a profesionales creativos y founders a transformar su potencial en una identidad clara, un
              posicionamiento diferencial y una estrategia de contenido que genera oportunidades.
            </p>
            <div className="buttons">
              <a className="btn btn-primario" href="#contacto">Trabajemos juntos</a>
              <a className="btn btn-secundario" href="#casos">Ver casos de éxito</a>
            </div>
          </div>
        </section>

        {/* 01 · Quién soy */}
        <section id="quien-soy" className="tex tex-oscuro-a container">
          <div className="reveal col about-photo-col">
            <p className="eyebrow">01 / Quién soy</p>
            <img
              className="about-photo"
              src="/assets/retrato-tiziano.jpg"
              width={959}
              height={1280}
              loading="lazy"
              alt="Retrato de Tiziano Iriarte en blanco y negro"
            />
          </div>
          <div className="reveal col about-text-col" style={{ '--d': '.15s' }}>
            <h2 className="h2">
              Hola, soy Tiziano. Combino estrategia, comunicación y creatividad para desarrollar marcas personales.
            </h2>
            <p className="body-lg">
              Desde chico tuve curiosidad por explorar distintas formas de crear: dibujar, bailar, hacer música, sacar
              fotos y grabar videos. Grabando descubrí la creación de contenido y empecé a preguntarme qué hace que una
              marca logre comunicar, posicionarse y diferenciarse.
            </p>
            <p className="body-lg">
              Mi primer paso fue la edición de video. Durante más de dos años trabajé con infoproductores, traders,
              coaches fitness, atletas y una agencia de modelaje, y entendí que podía aportar mucho más que la
              ejecución: detrás de cada contenido que funciona hay narrativa, estrategia y ejecución trabajando juntas.
            </p>
            <p className="body-lg">
              Hoy acompaño a marcas personales a construir una comunicación clara, un posicionamiento sólido y sistemas
              de contenido que les permitan crecer de forma consistente. Complemento la práctica con la Tecnicatura en
              Comercialización y Marketing en la Universidad de Belgrano.
            </p>
          </div>
        </section>

        {/* 02 · Con quién trabajo */}
        <section className="tex tex-verde section-verde">
          <div className="container section-verde-inner">
            <div className="reveal section-intro" style={{ maxWidth: 860 }}>
              <p className="eyebrow eyebrow--light">02 / Con quién trabajo</p>
              <h2 className="h2">Para el creador de valor que quiere construir una marca propia.</h2>
              <p className="lead">
                No buscan simplemente publicar contenido. Buscan construir algo que los represente y los haga crecer.
              </p>
            </div>
            <div className="segments">
              {SEGMENTOS.map((s, i) => (
                <div key={s.tag} className="reveal card card-borde segment" style={stagger(i)}>
                  <p className="tag">{s.tag}</p>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 · Filosofía */}
        <section id="filosofia" className="tex tex-oscuro-b container">
          <div className="philo-top">
            <div className="reveal col philo-title-col">
              <p className="eyebrow">03 / Mi filosofía</p>
              <h2>Esencia versátil.</h2>
            </div>
            <div className="reveal col philo-text-col" style={{ '--d': '.15s' }}>
              <p className="body-lg">
                Creo en construir desde la identidad y comunicar con intención. Cada persona, proyecto o negocio tiene
                una esencia, una visión y un valor que lo hacen único. Mi trabajo consiste en descubrirlos, darles
                dirección y transformarlos en una comunicación auténtica, creativa y estratégica.
              </p>
              <p className="body-lg">
                No busco seguir tendencias ni replicar fórmulas. Busco crear con propósito, generar conexiones genuinas y
                construir marcas que trasciendan el contenido que publican.
              </p>
            </div>
          </div>
          <div className="principles">
            {PRINCIPIOS.map((p, i) => (
              <div key={p.title} className="reveal principle" style={stagger(i)}>
                <p className="num">{pad(i + 1)}</p>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 04 · Método */}
        <section id="metodo" className="tex tex-claro">
          <div className="container metodo-inner">
            <div className="reveal section-intro" style={{ maxWidth: 820 }}>
              <p className="eyebrow eyebrow--green">04 / Mi enfoque</p>
              <h2 className="h2">El contenido como un sistema, no como publicaciones aisladas.</h2>
              <p className="lead">
                Las marcas personales más sólidas no se construyen persiguiendo tendencias, sino con una identidad
                clara, una reputación consistente y una comunicación alineada con lo que realmente representan. Por eso
                trabajo en cuatro fases.
              </p>
            </div>
            <div className="phases">
              {FASES.map((f, i) => (
                <div key={f.title} className="reveal card card-claro phase" style={stagger(i)}>
                  <p className="tag">FASE {pad(i + 1)}</p>
                  <h3>{f.title}</h3>
                  <p className="desc">{f.desc}</p>
                  <ul>
                    {f.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  <p className="result">
                    <strong>Resultado:</strong> {f.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 · Casos */}
        <section id="casos" className="tex tex-oscuro-c container">
          <div className="reveal section-intro">
            <p className="eyebrow">05 / Casos de éxito</p>
            <h2 className="h2">Resultados reales, construidos desde la identidad de cada marca.</h2>
          </div>
        </section>

        {CASOS.map((c) => (
          <Caso key={c.name} caso={c} />
        ))}

        {/* 06 · Capacidades */}
        <section id="capacidades" className="tex tex-oscuro-c">
          <div className="container cap-inner">
            <div className="reveal section-intro" style={{ maxWidth: 820 }}>
              <p className="eyebrow">06 / Capacidades</p>
              <h2 className="h2">De la estrategia a la pieza publicada.</h2>
            </div>
            <div className="caps">
              {CAPACIDADES.map((c, i) => (
                <div key={c.title} className="reveal card card-oscuro cap" style={stagger(i)}>
                  <p className="num">{pad(i + 1)}</p>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 07 · Contacto */}
        <section id="contacto" className="bg-wrap">
          <div className="bg-layer bg-verde" aria-hidden="true" />
          <div className="reveal contact-card">
            <p className="eyebrow">07 / Contacto</p>
            <h2 className="titulo-contacto">¿Construimos tu marca?</h2>
            <p className="body">
              Si tenés una visión, un proyecto o un talento que querés transformar en una marca con dirección,
              escribime.
            </p>
            <div className="buttons">
              <a className="btn btn-secundario btn-mail" href="mailto:tizianoiriarte.work@gmail.com">
                tizianoiriarte.work@gmail.com
              </a>
              <a
                className="btn btn-primario btn-ig"
                href="https://instagram.com/tizi.iriarte"
                target="_blank"
                rel="noopener"
              >
                Instagram · @tizi.iriarte
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>tizi.iriarte · Estratega y Creativo Digital</p>
        <p>© 2026 · Argentina</p>
      </footer>

      <Effects />
    </div>
  );
}
