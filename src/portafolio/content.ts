import type { Locale } from '@/dictionaries/types';

type Localized<T> = T | Record<Locale, T>;

// Devuelve el valor del idioma si es un objeto { es, en }, o el valor tal cual
export const L = <T,>(value: Localized<T>, lang: Locale): T =>
  value && typeof value === 'object' && !Array.isArray(value) && 'es' in value
    ? (value as Record<Locale, T>)[lang]
    : (value as T);

export const EMAIL = 'ceau922@gmail.com';

export type Mockup = 'antoky' | 'slot' | 'cal' | 'jr' | 'ec' | 'cm';

export type Project = {
  title: string;
  mockup: Mockup;
  kind: Localized<string>;
  desc: Localized<string>;
  tech: string;
  href: string;
  linkLabel?: Localized<string>;
};

export const PROJECTS: Project[] = [
  {
    title: 'Antoky', mockup: 'antoky',
    kind: { es: 'Empresa · Cofundador', en: 'Company · Co-founder' },
    desc: {
      es: 'Empresa colombiana de tecnología que cofundé con Sebastián Valle. Desarrollamos software a medida, automatizaciones, integración de sistemas e IA aplicada para que empresas de agroindustria y distribución trabajen con más eficiencia y menos procesos manuales. Participo desde el diagnóstico de cada operación hasta la construcción de la solución, y desarrollé el sitio web de la marca.',
      en: 'A Colombian technology company I co-founded with Sebastián Valle. We build custom software, automations, systems integrations and applied AI so agribusiness and distribution companies can run more efficiently with fewer manual processes. I take part from diagnosing each operation to building the solution, and I built the brand’s website.',
    },
    tech: 'Next.js / TypeScript / Resend / Upstash Redis / Vercel',
    href: 'https://antoky.com',
    linkLabel: { es: 'Visitar antoky.com', en: 'Visit antoky.com' },
  },
  {
    title: 'MySlotFy', mockup: 'slot',
    kind: { es: 'SaaS · Multi-tenant', en: 'SaaS · Multi-tenant' },
    desc: {
      es: 'Plataforma SaaS multi-tenant de agendamiento de citas para negocios de servicios: barberías, salones, spas, clínicas, gimnasios y estudios de tatuaje. Cada negocio gestiona citas, personal, servicios y horarios desde un panel web, y sus clientes reservan en una página pública o conversando por WhatsApp con un agente de IA que agenda, consulta, reprograma y cancela en lenguaje natural.',
      en: 'A multi-tenant SaaS appointment booking platform for service businesses: barber shops, salons, spas, clinics, gyms and tattoo studios. Each business manages appointments, staff, services and schedules from a web admin panel, while customers book through a public page or by chatting on WhatsApp with an AI agent that books, checks, reschedules and cancels in natural language.',
    },
    tech: 'Next.js 16 / React 19 / TypeScript / Tailwind CSS 4 / Shadcn/UI / Zustand / Supabase / Zod / FullCalendar / Framer Motion / Sentry / N8N + Gemini / Evolution API',
    href: 'https://www.myslotfy.com/',
    linkLabel: { es: 'Visitar myslotfy.com', en: 'Visit myslotfy.com' },
  },
  {
    title: 'Calendar App', mockup: 'cal',
    kind: { es: 'Web · MERN', en: 'Web · MERN' },
    desc: {
      es: 'Calendario full stack para organizar eventos. El frontend en React y Redux Toolkit ofrece vistas de mes, semana y día en español, creación y edición de eventos desde un modal con validaciones y micro-interacciones con Framer Motion. Lo respalda una API REST propia en Node.js, Express y MongoDB, con registro, inicio de sesión y renovación de sesión mediante JWT y rutas protegidas por token.',
      en: 'A full stack calendar for organizing events. The React and Redux Toolkit frontend offers month, week and day views in Spanish, event creation and editing from a validated modal, and micro-interactions with Framer Motion. It is backed by a custom REST API in Node.js, Express and MongoDB, with sign-up, login and session renewal via JWT and token-protected routes.',
    },
    tech: 'React 19 / Vite / Redux Toolkit / React Router / react-big-calendar / date-fns / Framer Motion / Axios / Node.js / Express / MongoDB + Mongoose / JWT',
    href: 'https://github.com/CarlosAriasLK/CalendarApp',
  },
  {
    title: 'Journal', mockup: 'jr',
    kind: { es: 'Web · React + Firebase', en: 'Web · React + Firebase' },
    desc: {
      es: 'Diario personal con autenticación en Firebase (correo y Google), notas guardadas en Firestore y un editor con subida de imágenes y galería. Tema oscuro propio en Material UI con efectos glass, animaciones de entrada y microinteracciones; estado global con Redux Toolkit y pruebas con Jest y Testing Library.',
      en: 'A personal journal with Firebase authentication (email and Google), notes stored in Firestore and an editor with image uploads and a gallery. Custom dark Material UI theme with glass effects, entrance animations and micro-interactions; global state with Redux Toolkit and tests with Jest and Testing Library.',
    },
    tech: 'React 19 / Vite / Material UI / Redux Toolkit / React Router / Firebase Auth + Firestore / Cloudinary / Jest + Testing Library',
    href: 'https://github.com/CarlosAriasLK/JournalApp',
  },
  {
    title: 'Ecommerce App', mockup: 'ec',
    kind: { es: 'Móvil · Flutter', en: 'Mobile · Flutter' },
    desc: {
      es: 'Tienda móvil en Flutter conectada a la API de Platzi: autenticación, catálogo por categorías, detalle de producto, búsqueda y carrito de compras con persistencia local en SQLite. Construida con Clean Architecture organizada por funcionalidades (domain, infrastructure, presentation), Riverpod con generación de código y navegación con Go Router.',
      en: 'A Flutter mobile store connected to the Platzi API: authentication, catalog by category, product detail, search and a shopping cart persisted locally in SQLite. Built with feature-first Clean Architecture (domain, infrastructure, presentation), Riverpod with code generation and Go Router navigation.',
    },
    tech: 'Flutter / Dart / Riverpod + Generator / Go Router / Dio / Sqflite / Shared Preferences / Animate Do',
    href: 'https://github.com/CarlosAriasLK/ECommercePlatzi',
  },
  {
    title: 'Cinemapedia', mockup: 'cm',
    kind: { es: 'Móvil · Flutter', en: 'Mobile · Flutter' },
    desc: {
      es: 'App móvil en Flutter para explorar películas con datos de The Movie Database (TMDB): cartelera en cines, próximos estrenos, populares, búsqueda, detalle con tráileres de YouTube y favoritos guardados localmente en SQLite. Arquitectura por capas (domain, infrastructure, presentation) con Riverpod, Dio y Go Router.',
      en: 'A Flutter mobile app to explore movies with data from The Movie Database (TMDB): now playing, upcoming, popular, search, detail pages with YouTube trailers and favorites saved locally in SQLite. Layered architecture (domain, infrastructure, presentation) with Riverpod, Dio and Go Router.',
    },
    tech: 'Flutter / Dart / Riverpod / Dio / Go Router / TMDB API / Sqflite / YouTube Player / Staggered Grid View',
    href: 'https://github.com/CarlosAriasLK/CinemapediaApp',
  },
];

export type Experience = {
  period: Localized<string>;
  role: Localized<string>;
  org: Localized<string>;
  bullets: Localized<string[]>;
  tags: Localized<string>;
};

export const EXP: Experience[] = [
  {
    period: { es: 'Actual', en: 'Current' }, role: { es: 'Cofundador', en: 'Co-founder' }, org: 'Antoky S.A.S',
    bullets: {
      es: ['Cofundé una empresa colombiana de software a medida, automatización de procesos, integración de sistemas e IA aplicada para agroindustria y distribución.', 'Acompaño a cada cliente desde entender su operación y diagnosticar oportunidades hasta construir y evolucionar la solución.', 'Desarrollé el sitio web de la marca con Next.js.'],
      en: ['Co-founded a Colombian company delivering custom software, process automation, systems integration and applied AI for agribusiness and distribution.', 'I work with each client from understanding their operation and diagnosing opportunities to building and evolving the solution.', 'Built the brand’s website with Next.js.'],
    },
    tags: { es: 'Software a medida · Automatización · Integración · IA aplicada', en: 'Custom software · Automation · Integration · Applied AI' },
  },
  {
    period: { es: 'Oct 2025 — Hoy', en: 'Oct 2025 — Present' }, role: { es: 'Desarrollador Full Stack · IA', en: 'Full Stack Developer · AI' }, org: 'Ikatech Solutions',
    bullets: {
      es: ['Desarrollo full stack en distintos entornos: backend, frontend e inteligencia artificial.', 'Creación de agentes de IA de extremo a extremo: flujos con nodos y grafos, bases vectoriales, voz con Deepgram y Cartesia, orquestación con LangChain.', 'Diseño, desarrollo y mantenimiento de sitios y aplicaciones web; configuración de servidores y bases de datos.'],
      en: ['Full stack development across environments: backend, frontend and artificial intelligence.', 'Building AI agents end to end: node and graph workflows, vector databases, voice with Deepgram and Cartesia, orchestration with LangChain.', 'Design, development and maintenance of websites and web apps; server and database configuration.'],
    },
    tags: 'React · Django · Node.js · LangChain · Deepgram · Cartesia · Vector DB',
  },
  {
    period: '2025', role: { es: 'Tecnólogo en Análisis y Desarrollo de Software', en: 'Technologist in Software Analysis & Development' }, org: 'SENA — Pereira',
    bullets: { es: ['Graduado como aprendiz en excelencia.'], en: ['Graduated with the apprentice of excellence distinction.'] },
    tags: '',
  },
  {
    period: { es: 'Feb — Oct 2024', en: 'Feb — Oct 2024' }, role: { es: 'Desarrollador Frontend · React', en: 'Frontend Developer · React' }, org: { es: 'TEINNOVA — Semillero de investigación', en: 'TEINNOVA — Research group' },
    bullets: { es: ['Desarrollo de aplicaciones y participación en proyectos colaborativos del semillero.', 'Fortalecimiento del trabajo en equipo y la comunicación.'], en: ['Built applications and contributed to the group’s collaborative projects.', 'Strengthened teamwork and communication skills.'] },
    tags: 'JavaScript · React · Figma · Postman · Git',
  },
  {
    period: '2023', role: { es: 'Técnico en Programación de Software', en: 'Software Programming Technician' }, org: 'SENA — Santa Rosa de Cabal',
    bullets: { es: ['Formación técnica en fundamentos de programación y calidad de software.'], en: ['Technical training in programming fundamentals and software quality.'] },
    tags: '',
  },
];

export type Layer = {
  n: string;
  name: Localized<string>;
  items: Localized<string[]>;
  note?: Localized<string>;
  ai?: boolean;
};

export const LAYERS: Layer[] = [
  { n: '01', name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Shadcn'] },
  { n: '02', name: 'Backend', items: ['Node.js', 'Express', 'Django', 'Python'] },
  { n: '03', name: { es: 'Datos', en: 'Data' }, items: ['PostgreSQL', 'Supabase', 'MySQL', 'MongoDB', 'Sequelize'] },
  { n: '04', name: { es: 'IA y agentes', en: 'AI & agents' }, items: { es: ['LangChain', 'N8N', 'Gemini', 'Grafos y nodos', 'Bases vectoriales', 'Deepgram', 'Cartesia'], en: ['LangChain', 'N8N', 'Gemini', 'Graphs & nodes', 'Vector databases', 'Deepgram', 'Cartesia'] } },
  { n: '05', name: { es: 'Móvil', en: 'Mobile' }, items: ['Flutter', 'Dart', 'Riverpod', 'Sqflite'] },
  { n: '06', name: { es: 'Herramientas', en: 'Tooling' }, items: ['Git', 'Docker', 'Figma', 'Postman'] },
  { n: '07', ai: true, name: { es: 'IA en mi flujo de trabajo', en: 'AI in my workflow' }, note: { es: 'Desarrollo, diseño y prototipado de soluciones digitales asistidos por IA.', en: 'AI-assisted development, design and prototyping of digital solutions.' }, items: ['Claude', 'Claude Design'] },
];

export const SOCIALS = [
  { label: 'GitHub', handle: 'CarlosAriasLK', href: 'https://github.com/CarlosAriasLK' },
  { label: 'LinkedIn', handle: '1carlosarias5', href: 'https://www.linkedin.com/in/1carlosarias5/' },
  { label: 'Instagram', handle: 'carlitos_arias15', href: 'https://www.instagram.com/carlitos_arias15' },
];
