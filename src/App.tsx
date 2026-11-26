import { shots } from "./shots";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Download,
  FolderOpen,
  Mail,
  Play,
  X,
} from "lucide-react";

const Github = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>
);
const Linkedin = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.600 0 4.300 2.400 4.300 5.500v6.200ZM5.300 7.400a2.100 2.100 0 1 1 0-4.200 2.100 2.100 0 0 1 0 4.200ZM7.100 20.500H3.600V9h3.500v11.500Z"/></svg>
);

const GH = "https://github.com/mariamibrahim2072006-blip";
const LINKEDIN = "https://www.linkedin.com/in/mariam-ibrahim-109a8a350/";
const EMAIL = "mariamibrahim2072006@gmail.com";
const DRIVE_FOLDER =
  "https://drive.google.com/drive/folders/10-DIl3Bpq5GK5aKIceZMw0c25m1Symos";

type Kind = "Full-Stack" | "E-Commerce" | "Frontend" | "AI";

interface Project {
  title: string;
  tag: string;
  kind: Kind;
  year: string;
  description: string;
  stack: string[];
  image: string;
  live?: string;
  code?: string;
  video?: string; // Google Drive file id or preview url
}

const projects: Project[] = [
  {
    title: "ESTORA",
    tag: "Real estate platform (EN / AR)",
    kind: "Frontend",
    year: "2026",
    description:
      "A premium real estate website with search and filters, buy and rent listings, property details with map, new projects, agents, customer accounts with favorites, an add-property flow, an admin dashboard and a full English / Arabic switch with RTL layout.",
    stack: ["React", "TypeScript", "Vite", "RTL / i18n"],
    image: shots.estora,
    live: "https://estora-real-estate-alpha.vercel.app",
    video: "1aVkiCAM9iikJB4cMyXDZNbajEg9nDBmU",
  },
  {
    title: "VANTOR",
    tag: "Premium menswear store",
    kind: "E-Commerce",
    year: "2026",
    description:
      "A fashion storefront with shop and search, collections, cart, wishlist, demo checkout and an admin area. Built around a calm green palette and editorial typography.",
    stack: ["React", "TypeScript", "Vite", "Cart & Wishlist"],
    image: shots.vantor,
    live: "https://vantor-flax.vercel.app",
  },
  {
    title: "HR Management System",
    tag: "Full-stack HRMS",
    kind: "Full-Stack",
    year: "2026",
    description:
      "Employees, attendance, leaves, payroll, authentication and role-based permissions on a real database.",
    stack: ["React", "Express", "MySQL", "JWT", "REST"],
    image: "/projects/hrms.png",
    code: `${GH}/hr-system`,
    video: "1h8qyeDtTty4zwnJpTHZ1jKzKBRWZUk-b",
  },
  {
    title: "ELARA",
    tag: "Luxury candle store",
    kind: "E-Commerce",
    year: "2026",
    description:
      "Product browsing, cart, checkout flow, database integration and Stripe payments.",
    stack: ["React", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    image: "/projects/elara.png",
    code: `${GH}/elara-essence`,
    video: "1ndKufLgXnPOzQnRP2-ij6rZo8yruXyBF",
  },
  {
    title: "Aromiq",
    tag: "Perfume store",
    kind: "E-Commerce",
    year: "2026",
    description:
      "A polished perfume shopping experience with responsive design and backend integration.",
    stack: ["React", "Node.js", "Express", "Database"],
    image: "/projects/Aromiq.png",
    code: `${GH}/aromiq-store`,
    video: "1pEuN5CbSrByRl90rmbZ-iwdQaWin3B1o",
  },
  {
    title: "Baianat Store",
    tag: "E-commerce platform",
    kind: "Full-Stack",
    year: "2026",
    description:
      "A responsive storefront with product management and backend services.",
    stack: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB"],
    image: "/projects/baianat.png",
    code: `${GH}/baianat-store`,
  },
  {
    title: "Skin Vision",
    tag: "AI skin analysis",
    kind: "AI",
    year: "2026",
    description:
      "Image processing and machine learning that analyze skin conditions through an interactive web interface.",
    stack: ["Python", "Flask", "PyTorch", "EfficientNet-B0"],
    image: "/projects/skin-vision.png",
  },
  {
    title: "Admin Dashboard",
    tag: "Management dashboard",
    kind: "Frontend",
    year: "2026",
    description:
      "A clean dashboard for managing and monitoring application data.",
    stack: ["React", "JavaScript", "CSS"],
    image: "/projects/admin-dashboard.png",
  },
];

const filters: ("All" | Kind)[] = ["All", "Full-Stack", "E-Commerce", "Frontend", "AI"];

const skills = [
  ["Frontend", "React, TypeScript, JavaScript, Tailwind CSS, Vite, RTL / i18n"],
  ["Backend", "Node.js, Express, Prisma, REST APIs, JWT, Stripe"],
  ["Data & AI", "Python, Machine Learning, Computer Vision, SQL, MySQL, PostgreSQL"],
  ["Tools", "Git, GitHub, Vercel, Figma-to-code workflow"],
];

const journey = [
  ["DEPI", "Agentic AI & Generative AI System Developer", "Training"],
  ["Baianat", "Frontend Development Summer Workshop", "Workshop"],
  ["CodeAlpha", "Machine Learning & Data Science tasks", "Internship"],
  ["Huawei ICT Academy", "HCIA-AI and HCIA-Cloud Computing", "Training"],
  ["Delta University", "B.Sc. student, Artificial Intelligence", "Education"],
];

function driveEmbed(v: string) {
  return v.startsWith("http") ? v : `https://drive.google.com/file/d/${v}/preview`;
}

export default function App() {
  const [filter, setFilter] = useState<"All" | Kind>("All");
  const [open, setOpen] = useState<Project | null>(null);

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  const list = projects.filter((p) => filter === "All" || p.kind === filter);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="font-display text-xl font-bold">
            Mariam Ibrahim<span className="text-clay">.</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            {["Work", "About", "Skills", "Journey", "Contact"].map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-clay">
                {n}
              </a>
            ))}
          </nav>
          <a
            href={DRIVE_FOLDER}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:bg-clay"
          >
            Videos & files
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 md:pt-28">
          <p className="rise font-mono text-xs uppercase tracking-[0.25em] text-clay">
            Frontend & full-stack developer · AI student
          </p>
          <h1 className="rise mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight [animation-delay:.08s] md:text-8xl">
            I design and build web products people{" "}
            <em className="font-medium text-clay">enjoy using.</em>
          </h1>
          <p className="rise mt-8 max-w-2xl text-lg leading-8 text-ink/70 [animation-delay:.16s]">
            I'm Mariam, an AI student at Delta University. I build complete
            products, from the interface to the API and database, including
            bilingual English / Arabic experiences.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-3 [animation-delay:.24s]">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3.5 font-semibold text-white transition hover:bg-ink">
              See selected work <ArrowUpRight size={18} />
            </a>
            <a href="/Mariam-Ibrahim-CV.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3.5 font-semibold transition hover:border-ink hover:bg-ink hover:text-paper">
              <Download size={17} /> CV
            </a>
          </div>
          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-ink/15 pt-8">
            {[
              [String(projects.length), "Projects"],
              ["2", "Languages (EN / AR)"],
              ["AI", "Major"],
            ].map(([a, b]) => (
              <div key={b}>
                <dt className="font-display text-4xl font-bold">{a}</dt>
                <dd className="mt-1 text-sm text-ink/60">{b}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* MARQUEE */}
        <div className="overflow-hidden border-y border-ink/10 bg-ink py-4 text-paper">
          <div className="marquee flex w-max gap-10 whitespace-nowrap font-mono text-sm uppercase tracking-widest">
            {Array.from({ length: 2 }).flatMap((_, i) =>
              ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Tailwind", "Python", "PyTorch", "Stripe"].map((t) => (
                <span key={`${i}-${t}`} className="flex gap-10">
                  {t} <span className="text-clay">✦</span>
                </span>
              )),
            )}
          </div>
        </div>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-clay">Selected work</p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-6xl">Projects</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    filter === f ? "border-ink bg-ink text-paper" : "border-ink/20 hover:border-ink"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {list.map((p, i) => (
              <article
                key={p.title}
                className={`group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/10 ${
                  i === 0 && filter === "All" ? "md:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden bg-ink/5 ${i === 0 && filter === "All" ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
                  <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]" />
                  <span className="absolute left-4 top-4 rounded-full bg-paper/95 px-3 py-1 font-mono text-xs">{p.kind}</span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-3xl font-bold">{p.title}</h3>
                    <span className="font-mono text-xs text-ink/50">{p.year}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-clay">{p.tag}</p>
                  <p className="mt-4 leading-7 text-ink/70">{p.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <li key={s} className="rounded-full bg-paper px-3 py-1 text-xs font-medium">{s}</li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-4 pt-7 text-sm font-semibold">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-clay">
                        Live demo <ArrowUpRight size={16} />
                      </a>
                    )}
                    {p.video && (
                      <button onClick={() => setOpen(p)} className="inline-flex items-center gap-1 hover:text-clay">
                        <Play size={15} /> Watch video
                      </button>
                    )}
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-clay">
                        <Github size={16} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <a href={DRIVE_FOLDER} target="_blank" rel="noreferrer" className="mt-10 flex items-center justify-between rounded-3xl bg-clay p-7 text-white transition hover:bg-ink">
            <span className="flex items-center gap-4">
              <FolderOpen size={28} />
              <span>
                <span className="block font-display text-2xl font-bold">Project videos, screenshots and CV</span>
                <span className="text-sm text-white/80">Everything organized in one Google Drive folder, including full walkthroughs.</span>
              </span>
            </span>
            <ArrowUpRight />
          </a>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-16 bg-white py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-clay">About</p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Developer with an AI mindset.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-ink/75">
              <p>
                I'm a Computer Science & AI student who likes taking an idea all the way to a working,
                polished product. I build the interface, the API and the database myself.
              </p>
              <p>
                My recent work includes a bilingual real estate platform with an admin dashboard, e-commerce
                stores with payments, an HR system with role-based access and an AI skin-analysis app.
              </p>
              <p>I care about clear layouts, smooth interaction and code that is easy to keep growing.</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-clay">Skills</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">What I work with</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2">
            {skills.map(([t, d]) => (
              <div key={t} className="bg-paper p-8">
                <h3 className="font-display text-2xl font-bold">{t}</h3>
                <p className="mt-3 leading-7 text-ink/70">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey" className="scroll-mt-16 bg-ink py-24 text-paper">
          <div className="mx-auto max-w-6xl px-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-clay">Journey</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Training & education</h2>
            <ul className="mt-12 divide-y divide-paper/15 border-y border-paper/15">
              {journey.map(([o, t, k]) => (
                <li key={o} className="grid gap-2 py-6 md:grid-cols-[1fr_2fr_auto] md:items-center">
                  <span className="font-display text-2xl font-bold">{o}</span>
                  <span className="text-paper/75">{t}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-clay">{k}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-28 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-clay">Contact</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-bold leading-tight md:text-7xl">
            Have a project? <em className="font-medium text-clay">Let's build it.</em>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-paper transition hover:bg-clay"><Mail size={18} /> {EMAIL}</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3.5 font-semibold transition hover:bg-ink hover:text-paper"><Linkedin size={18} /> LinkedIn</a>
            <a href={GH} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3.5 font-semibold transition hover:bg-ink hover:text-paper"><Github size={18} /> GitHub</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 py-8 text-center text-sm text-ink/55">
        © {new Date().getFullYear()} Mariam Ibrahim
      </footer>

      {open?.video && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink/80 p-4" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-ink" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-5 py-3 text-paper">
              <span className="font-display text-lg font-bold">{open.title}</span>
              <button onClick={() => setOpen(null)} aria-label="Close"><X /></button>
            </div>
            <div className="aspect-video">
              <iframe src={driveEmbed(open.video)} title={open.title} allow="autoplay" allowFullScreen className="h-full w-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
