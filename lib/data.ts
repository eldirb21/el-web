const appMenu = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

const roles = [
  "Frontend Developer",
  "React Native Engineer",
  "Next.js Developer",
  "NodeJs Developer",
  "Full-Stack Developer",
];

const profile = {
  status: "Available for work",
  name: "Beladiri Buulolo",
  bio1: "Lulusan S1 Sistem Informasi dengan",
  bio2: "5 tahun pengalaman",
  bio3: "membangun aplikasi mobile & web yang scalable. Fokus di React Native, Next.js, dan Node.js — dari pixel pertama sampai server production.",
};
const about = {
  title: "about me",
  titleBold1: "Building digital",
  titleBold2: "experiences",
  titleBold3: `that`,
  titleBold4: `matter.`,
  paragraph1: `Saya adalah seorang developer lulusan S1 Sistem Informasi yang
              passionate di dunia frontend dan mobile development. Selama 5
              tahun berkecimpung di industri ini, saya telah membangun berbagai
              aplikasi dari skala startup hingga enterprise.`,
  paragraph2: `Keahlian utama saya ada di React Native untuk mobile, dan Next.js
              untuk web — dilengkapi dengan kemampuan backend menggunakan
              Node.js/Express dan database MySQL. Saya percaya bahwa kode yang
              baik adalah yang bisa dibaca dan di-maintain oleh tim.`,
};

export type IconChips = "graduationCap" | "mapPin" | "briefcase" | "code2";

type InfoChipsItem = {
  icon: IconChips;
  text: string;
};

const infoChips: InfoChipsItem[] = [
  {
    icon: "graduationCap",
    text: "S1 Sistem Informasi",
  },
  { icon: "mapPin", text: "Jakarta, Indonesia" },
  { icon: "briefcase", text: "5 Tahun Pengalaman" },
  {
    icon: "code2",
    text: "Full-Stack → Frontend Focused",
  },
];

const stats = [
  { value: "5+", label: "Tahun Pengalaman" },
  { value: "20+", label: "Proyek Selesai" },
  { value: "10+", label: "Klien Puas" },
  { value: "3", label: "Stack Utama" },
];

const otherLabel = {
  appName: "Eldiro",
  download: "Download CV",
  seeProject: "Lihat Projects",
  contactMe: "Hubungi Saya",
  area: "Jakarta, Indonesia",
  scroll: "SCROLL",
  toolsNother: "Tools & Others",
  techStack: "tech stack",
  skillsNexp: "Skills & Expertise",
};

export type IconKey = "github" | "linkedin" | "email";

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
    category: "Mobile Development",
    color: "#4fffb0",
    skills: [
      { name: "React Native", level: 92, years: "5 tahun" },
      { name: "Expo", level: 85, years: "3 tahun" },
      { name: "React Navigation", level: 88, years: "4 tahun" },
      { name: "Redux / Mobx", level: 82, years: "3 tahun" },
    ],
  },
  {
    category: "Frontend Web",
    color: "#00d4ff",
    skills: [
      { name: "React.js", level: 90, years: "5 tahun" },
      { name: "Next.js", level: 88, years: "3 tahun" },
      { name: "TypeScript", level: 82, years: "3 tahun" },
      { name: "Tailwind CSS", level: 86, years: "3 tahun" },
    ],
  },
  {
    category: "Backend & Database",
    color: "#a78bfa",
    skills: [
      { name: "Node.js / Express", level: 78, years: "4 tahun" },
      { name: "MySQL / Prisma", level: 75, years: "4 tahun" },
      { name: "REST API Design", level: 82, years: "4 tahun" },
      { name: "JWT Auth", level: 78, years: "3 tahun" },
    ],
  },
];
const tools = [
  "Git / GitHub",
  "Figma",
  "Postman",
  "VS Code",
  "Docker (basic)",
  "Jira",
  "Redux Toolkit",
  "Axios",
  "Firebase",
  "Vercel",
  "Railway",
  "OpenAPI/Swagger",
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
};
