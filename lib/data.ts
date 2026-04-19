const appMenu = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const roles = [
  "Senior React Native Engineer",
  "Mobile App Specialist",
  "Frontend Engineer (React & Next.js)",
  "Full-Stack JavaScript Developer",
];

const profile = {
  status: "Open to Opportunities",
  name: "Beladiri Buulolo",
  bio1: "Software Engineer dengan",
  bio2: "5+ tahun pengalaman",
  bio3: "mengembangkan aplikasi mobile & web skala startup hingga enterprise. Spesialis di React Native, dengan fokus pada performa, scalability, dan clean architecture.",
};

const about = {
  title: "About Me",
  titleBold1: "Building scalable",
  titleBold2: "digital products",
  titleBold3: "that",
  titleBold4: "deliver impact.",
  paragraph1: `Saya adalah Software Engineer dengan latar belakang S1 Sistem Informasi dan pengalaman lebih dari 5 tahun di pengembangan aplikasi mobile dan web. Saya telah terlibat dalam berbagai proyek, mulai dari startup hingga enterprise (termasuk Astra Group).`,
  paragraph2: `Fokus utama saya adalah React Native untuk mobile development, serta Next.js untuk web. Saya juga memiliki pengalaman di backend menggunakan Node.js dan MySQL. Saya percaya bahwa software yang baik bukan hanya berjalan, tetapi scalable, maintainable, dan memberikan impact nyata bagi bisnis.`,
};

export type IconChips = "graduationCap" | "mapPin" | "briefcase" | "code2";

type InfoChipsItem = {
  icon: IconChips;
  text: string;
};

const infoChips: InfoChipsItem[] = [
  {
    icon: "graduationCap",
    text: "Bachelor of Information Systems",
  },
  { icon: "mapPin", text: "Jakarta, Indonesia" },
  { icon: "briefcase", text: "5+ Years Experience" },
  {
    icon: "code2",
    text: "Mobile Focused Engineer",
  },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "10+", label: "Clients & Products" },
  { value: "3+", label: "Core Tech Stack" },
];

const otherLabel = {
  appName: "Eldiro",
  download: "Download CV",
  seeProject: "View Projects",
  contactMe: "Contact Me",
  area: "Jakarta, Indonesia",
  scroll: "SCROLL",
  toolsNother: "Tools & Ecosystem",
  techStack: "Tech Stack",
  skillsNexp: "Skills & Expertise",
  journey: "Career Journey",
  exp: "Work Experience",
  portfolio: "Portfolio",
  feature: "Featured Projects",
  seeAll: "View All →",
  github: "GitHub",
  liveDemo: "Live Demo",
  contact: "Contact",
  letJoin: "Let's Work Together",
  openJoin:
    "Open for full-time roles, freelance projects, or collaborations. Feel free to reach out — I usually respond within 24 hours.",
};

type ContactItem = {
  icon: IconKey;
  href: string;
  label: string;
  value: string;
};

const contacts: ContactItem[] = [
  {
    icon: "email",
    label: "Email",
    value: "eldirb04@email.com",
    href: "mailto:eldirb04@email.com",
  },
  {
    icon: "mapPin",
    label: "Location",
    value: "Jakarta, Indonesia",
    href: "#",
  },
  {
    icon: "github",
    label: "GitHub",
    value: "github.com/eldirb21",
    href: "https://github.com/eldirb21",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/eldirb",
    href: "https://linkedin.com/in/eldirb",
  },
];

export type IconKey = "github" | "linkedin" | "email" | "mapPin";

type SosmedItem = {
  icon: IconKey;
  href: string;
  label: string;
};

const sosmed: SosmedItem[] = [
  {
    icon: "github",
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: "linkedin",
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: "email",
    href: "mailto:eldirb04@email.com",
    label: "Email",
  },
];

const skillGroups = [
  {
    category: "Mobile Engineering",
    color: "#4fffb0",
    skills: [
      { name: "React Native", level: 92, years: "5+ yrs" },
      { name: "Expo Ecosystem", level: 85, years: "3+ yrs" },
      { name: "Navigation & Performance", level: 88, years: "4+ yrs" },
      { name: "State Management (MobX / Redux)", level: 85, years: "4+ yrs" },
    ],
  },
  {
    category: "Frontend Web",
    color: "#00d4ff",
    skills: [
      { name: "React.js", level: 90, years: "5+ yrs" },
      { name: "Next.js", level: 88, years: "3+ yrs" },
      { name: "TypeScript", level: 85, years: "3+ yrs" },
      { name: "Tailwind CSS", level: 86, years: "3+ yrs" },
    ],
  },
  {
    category: "Backend & API",
    color: "#a78bfa",
    skills: [
      { name: "Node.js / Express", level: 80, years: "4+ yrs" },
      { name: "MySQL / Prisma", level: 78, years: "4+ yrs" },
      { name: "REST API Design", level: 85, years: "4+ yrs" },
      { name: "Authentication (JWT)", level: 80, years: "3+ yrs" },
    ],
  },
];

const tools = [
  "Git & GitHub",
  "Figma",
  "Postman",
  "VS Code",
  "Docker (Basic)",
  "Jira",
  "Datadog",
  "Firebase",
  "Redux Toolkit",
  "Axios",
  "Vercel",
  "Railway",
  "OpenAPI / Swagger",
];

const experiences = [
  {
    period: "Des 2024 — Okt 2025",
    role: "React Native Developer",
    company: "PT Nityo Infotech",
    client: "PT Astra International Tbk",
    type: "Full-time",
    description:
      "Memimpin dan berkolaborasi dalam pengembangan aplikasi mobile berbasis React Native untuk skala enterprise. Mengoptimalkan arsitektur state management menggunakan MobX, sehingga berhasil menurunkan bug di production hingga 40% serta meningkatkan stabilitas aplikasi.",
    stack: [
      "React Native",
      "TypeScript",
      "MobX",
      "Firebase",
      "Push Notification (FCM, Notifee)",
      "Node.js",
      "MySQL",
      "Datadog",
    ],
    highlights: [
      "Project skala enterprise (Astra)",
      "40% pengurangan bug",
      "Kolaborasi tim 15+ developer",
    ],
  },
  {
    period: "Apr 2024 — Nov 2024",
    role: "Senior Mobile Apps Developer",
    company: "PT Humanindo Amana Properti",
    type: "Full-time",
    description:
      "Mengembangkan dan mengelola aplikasi mobile untuk kebutuhan sales dan operasional properti. Melakukan refactor arsitektur dengan Redux Toolkit untuk meningkatkan maintainability serta mengurangi bug production hingga 50%.",
    stack: [
      "React Native",
      "TypeScript",
      "Redux Toolkit + Thunk",
      "React Navigation",
      "React Hook Form",
      "Firebase (FCM)",
      "Push Notification",
      "Axios",
      "Node.js",
      "MySQL",
    ],
    highlights: [
      "Aplikasi untuk tim sales",
      "50% pengurangan bug",
      "iOS & Android deployment",
    ],
  },
  {
    period: "Sep 2022 — Apr 2024",
    role: "Mobile Developer",
    company: "PT Indocyber Global Teknologi",
    client: "PT Serasi Autoraya Tbk (Member of Astra)",
    type: "Full-time",
    description:
      "Berperan dalam pengembangan berbagai aplikasi mobile dan web untuk klien enterprise. Terlibat dalam implementasi fitur, integrasi API, serta peningkatan performa aplikasi menggunakan React dan React Native.",
    stack: [
      "React Native",
      "React.js",
      "JavaScript",
      "Redux + Thunk",
      "React Navigation",
      "Firebase (Auth, FCM, Crashlytics)",
      "Sentry",
      "Axios",
      "Maps & Geolocation",
      "REST API",
    ],
    highlights: [
      "Project untuk Astra Group",
      "10+ proyek klien",
      "Pengalaman multi-industri",
    ],
  },
  {
    period: "Nov 2020 — Sep 2022",
    role: "Programmer",
    company: "PT Peksi Andaru Sakti",
    type: "Full-time",
    description:
      "Mengembangkan aplikasi web dan mobile untuk berbagai klien dengan pendekatan end-to-end, mulai dari implementasi UI hingga integrasi API. Berkontribusi pada berbagai proyek menggunakan React, React Native, dan Vue (Nuxt.js), serta memastikan performa dan skalabilitas aplikasi di berbagai kebutuhan bisnis.",
    stack: [
      "React Native",
      "React.js",
      "Vue.js (Nuxt.js)",
      "JavaScript",
      "Redux / Vuex",
      "Axios",
      "Firebase",
      "Maps & Geolocation",
      "REST API",
    ],
    highlights: [
      "10+ proyek klien",
      "Multi teknologi (React & Vue)",
      "Pengalaman end-to-end development",
    ],
  },
  {
    period: "Jun 2020 — Sep 2020",
    role: "Junior Programmer",
    company: "PT Emco Digital Indonesia",
    type: "Internship",
    description:
      "Memulai karier sebagai frontend developer dengan membangun fitur sederhana menggunakan React.js serta berkontribusi pada pengembangan aplikasi internal perusahaan.",
    stack: ["HTML/CSS", "JavaScript", "React.js", "NodeJS", "Git"],
    highlights: [
      "Kontribusi fitur pertama",
      "Belajar React dari dasar",
      "Pengalaman Agile workflow",
    ],
  },
];

export type IconProjectKey = "globe" | "smartphone";

type ProjectItem = {
  icon: IconProjectKey;
  title: string;
  type: string;
  description: string;
  stack: string[];
  color: string;
  status: string;
  github: string;
  demo: string;
};

const projects: ProjectItem[] = [
  {
    title: "OSP - MRA",
    type: "Mobile App",
    icon: "smartphone",
    description:
      "Aplikasi mobile enterprise untuk operasional internal dengan fitur monitoring, manajemen data, dan integrasi API skala besar.",
    stack: [
      "React Native",
      "MobX",
      "Expo",
      "Firebase",
      "Datadog",
      "MMKV",
      "Google Maps API",
    ],
    color: "#4fffb0",
    status: "Enterprise",
    github: "#",
    demo: "#",
  },
  {
    title: "Digiroom",
    type: "Mobile App",
    icon: "smartphone",
    description:
      "Aplikasi mobile berbasis React Native dengan arsitektur scalable, push notification, dan integrasi analytics untuk monitoring performa aplikasi.",
    stack: [
      "React Native",
      "MobX",
      "Expo Router",
      "Firebase",
      "Datadog",
      "MMKV",
    ],
    color: "#00d4ff",
    status: "Enterprise",
    github: "#",
    demo: "#",
  },
  {
    title: "FAST App",
    type: "Mobile App",
    icon: "smartphone",
    description:
      "Aplikasi mobile untuk operasional bisnis dengan fitur push notification, integrasi API, dan optimasi performa aplikasi.",
    stack: ["React Native CLI", "Redux", "Firebase", "REST API"],
    color: "#a78bfa",
    status: "Production",
    github: "#",
    demo: "#",
  },
  {
    title: "OLX Mobbi",
    type: "Mobile App",
    icon: "smartphone",
    description:
      "Enterprise-grade mobile application under Astra Group, focusing on performance, security, and scalability. Contributed to feature development, bug fixing, and performance optimization in a large-scale production environment.",
    stack: [
      "React Native",
      "Redux",
      "Firebase",
      "Datadog",
      "SSL Pinning",
      "Google Maps API",
    ],
    color: "#f97316",
    status: "Enterprise Production",
    github: "#",
    demo: "#",
  },
  {
    title: "VClub",
    type: "Mobile App",
    icon: "smartphone",
    description:
      "Aplikasi mobile dengan fitur scanning, user interaction, dan integrasi backend untuk kebutuhan bisnis.",
    stack: ["React Native", "MobX", "React Native CLI", "REST API"],
    color: "#ec4899",
    status: "Production",
    github: "#",
    demo: "#",
  },
  {
    title: "Book Store App",
    type: "Mobile App",
    icon: "smartphone",
    description:
      "Aplikasi mobile untuk manajemen dan pembelian buku dengan fitur katalog, pencarian, dan integrasi backend.",
    stack: ["React Native", "Redux", "Firebase", "Google Maps API"],
    color: "#eab308",
    status: "Production",
    github: "#",
    demo: "#",
  },
  {
    title: "Contact App",
    type: "Mobile App",
    icon: "smartphone",
    description:
      "Aplikasi manajemen kontak dengan penyimpanan lokal dan fitur CRUD sederhana.",
    stack: ["React Native", "Redux", "SQLite"],
    color: "#22c55e",
    status: "Personal",
    github: "#",
    demo: "#",
  },
  {
    title: "Andaru Collection & Delivery",
    type: "Mobile & Web App",
    icon: "globe",
    description:
      "Sistem aplikasi untuk manajemen collection dan delivery, termasuk mobile app dan web dashboard.",
    stack: ["React Native", "Redux", "Firebase", "Nuxt.js", "Vue.js"],
    color: "#3b82f6",
    status: "Production",
    github: "#",
    demo: "#",
  },
  {
    title: "Temu Akrab App",
    type: "Mobile App",
    icon: "smartphone",
    description:
      "Aplikasi event dan komunitas dengan fitur manajemen peserta dan interaksi user.",
    stack: ["React Native", "Redux", "Firebase"],
    color: "#f43f5e",
    status: "Production",
    github: "#",
    demo: "#",
  },
  {
    title: "My Supir",
    type: "Mobile App",
    icon: "smartphone",
    description:
      "Aplikasi transportasi dengan fitur tracking lokasi, komunikasi real-time, dan manajemen driver.",
    stack: [
      "React Native",
      "MobX",
      "Expo",
      "Firebase",
      "Geolocation",
      "Pusher",
    ],
    color: "#14b8a6",
    status: "Production",
    github: "#",
    demo: "#",
  },
];

export {
  appMenu,
  roles,
  profile,
  about,
  infoChips,
  stats,
  otherLabel,
  sosmed,
  skillGroups,
  tools,
  experiences,
  projects,
  contacts,
};
