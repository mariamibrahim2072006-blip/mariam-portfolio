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
    video: "1zRjK9HzljdU491XRnq7fhsrg8PrIcx0g",
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

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-sage">
    <span className="h-px w-8 bg-sage/60" />
    {children}
  </p>
);

export default function App() {
  const [filter, setFilter] = useState<"All" | Kind>("All");
  const [open, setOpen] = useState<Project | null>(null);
  useReveal();

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  const list = projects.filter((p) => filter === "All" || p.kind === filter);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(55%_45%_at_85%_0%,rgba(201,162,74,0.16),transparent),radial-gradient(40%_40%_at_0%_35%,rgba(15,31,61,0.06),transparent)]" />

      <header className="sticky top-0 z-40 border-b border-sage/10 bg-forest/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="font-display text-2xl font-semibold tracking-wide text-sage">
            Mariam<span className="text-gold">.</span>
          </a>
          <nav className="hidden gap-9 text-sm text-sage/75 md:flex">
            {["Work", "About", "Skills", "Journey", "Contact"].map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="transition hover:text-gold">
                {n}
              </a>
            ))}
          </nav>
          <a
            href={DRIVE_FOLDER}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-sage/30 px-4 py-2 text-sm text-sage transition hover:bg-sage hover:text-forest"
          >
            Videos & files
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-14 md:grid-cols-[1.15fr_0.85fr] md:pt-24">
          <div className="order-2 md:order-1">
            <p className="rise flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-moss-light">
              <span className="h-px w-8 bg-moss-light/60" /> Frontend & full-stack developer
            </p>
            <h1 className="rise mt-6 font-display text-5xl font-medium leading-[1.02] text-sage [animation-delay:.1s] md:text-7xl">
              Mariam
              <br />
              <span className="italic text-gold">Ibrahim</span>
            </h1>
            <p className="rise mt-7 max-w-xl text-lg leading-8 text-sage/75 [animation-delay:.2s]">
              AI student at Delta University. I design and build complete web products, from the
              interface to the API and database, including bilingual English / Arabic experiences.
            </p>
            <div className="rise mt-10 flex flex-wrap gap-3 [animation-delay:.3s]">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-sage px-7 py-3.5 font-semibold text-forest transition hover:bg-gold hover:text-sage">
                View my work <ArrowUpRight size={18} />
              </a>
              <a href="/Mariam-Ibrahim-CV.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-sage/30 px-7 py-3.5 font-semibold text-sage transition hover:border-sage hover:bg-sage/10">
                <Download size={17} /> Download CV
              </a>
            </div>
            <dl className="rise mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-sage/15 pt-7 [animation-delay:.4s]">
              {[
                [String(projects.length), "Projects"],
                ["EN · AR", "Bilingual"],
                ["AI", "Major"],
              ].map(([a, b]) => (
                <div key={b}>
                  <dt className="font-display text-3xl text-sage">{a}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-sage/55">{b}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rise order-1 relative mx-auto w-[78%] max-w-sm [animation-delay:.15s] md:order-2 md:w-full md:max-w-md">
            <div className="absolute -inset-6 rounded-t-full bg-moss/40 blur-3xl" />
            <div className="float absolute -left-6 top-10 z-10 hidden rounded-2xl border border-sage/20 bg-forest/90 px-4 py-3 text-sm text-sage shadow-xl backdrop-blur md:block">
              <span className="font-mono text-[10px] uppercase tracking-widest text-moss-light">Now</span>
              <br />
              Building full-stack apps
            </div>
            <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[2rem] border border-sage/20 bg-pine p-2 shadow-2xl shadow-sage/15">
              <img
                src={shots.photo}
                alt="Mariam Ibrahim"
                className="aspect-[3/4] w-full rounded-t-[999px] rounded-b-[1.5rem] object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="overflow-hidden border-y border-sage/10 bg-sage py-4 text-forest/80">
          <div className="marquee flex w-max gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em]">
            {Array.from({ length: 2 }).flatMap((_, i) =>
              ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Tailwind", "Python", "PyTorch", "Stripe"].map((t) => (
                <span key={`${i}-${t}`} className="flex gap-10">
                  {t} <span className="text-gold">◆</span>
                </span>
              )),
            )}
          </div>
        </div>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-28">
          <div data-reveal className="reveal flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="mt-4 font-display text-5xl text-sage md:text-6xl">Projects</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    filter === f ? "border-sage bg-sage text-forest" : "border-sage/25 text-sage/80 hover:border-sage"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {list.map((p, i) => {
              const big = i === 0 && filter === "All";
              return (
                <article
                  key={p.title}
                  data-reveal
                  className={`reveal group flex flex-col overflow-hidden rounded-[1.75rem] border border-sage/15 bg-pine/70 transition duration-500 hover:-translate-y-1.5 hover:border-sage/40 hover:shadow-2xl hover:shadow-sage/15 ${
                    big ? "md:col-span-2 md:grid md:grid-cols-[1.35fr_1fr]" : ""
                  }`}
                >
                  <div className={`relative overflow-hidden bg-forest ${big ? "min-h-[320px]" : "aspect-[16/10]"}`}>
                    <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-sage/25 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-sage/30 bg-forest/80 px-3 py-1 font-mono text-[11px] text-sage backdrop-blur">{p.kind}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-7 md:p-9">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-3xl text-sage md:text-4xl">{p.title}</h3>
                      <span className="font-mono text-xs text-sage/50">{p.year}</span>
                    </div>
                    <p className="mt-1 text-sm text-moss-light">{p.tag}</p>
                    <p className="mt-4 leading-7 text-sage/75">{p.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <li key={s} className="rounded-full border border-sage/15 bg-forest px-3 py-1 text-xs text-sage/80">{s}</li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-wrap gap-5 pt-7 text-sm font-semibold text-sage">
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 transition hover:text-gold">
                          Live demo <ArrowUpRight size={16} />
                        </a>
                      )}
                      {p.video && (
                        <button onClick={() => setOpen(p)} className="inline-flex items-center gap-1 transition hover:text-gold">
                          <Play size={15} /> Watch video
                        </button>
                      )}
                      {p.code && (
                        <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 transition hover:text-gold">
                          <Github size={16} /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <a data-reveal href={DRIVE_FOLDER} target="_blank" rel="noreferrer" className="reveal mt-10 flex items-center justify-between gap-4 rounded-[1.75rem] border border-sage/20 bg-gradient-to-r from-white to-moss/70 p-7 transition hover:border-sage/50">
            <span className="flex items-center gap-4 text-sage">
              <FolderOpen size={28} />
              <span>
                <span className="block font-display text-2xl text-sage">Project videos, screenshots and CV</span>
                <span className="text-sm text-sage/70">Everything organized in one Google Drive folder, including full walkthroughs.</span>
              </span>
            </span>
            <ArrowUpRight className="shrink-0 text-sage" />
          </a>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-16 border-y border-sage/10 bg-white py-28">
          <div data-reveal className="reveal mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.4fr]">
            <div>
              <Eyebrow>About</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight text-sage md:text-5xl">
                Developer with an <span className="italic">AI mindset.</span>
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-sage/75">
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
        <section id="skills" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-28">
          <div data-reveal className="reveal">
            <Eyebrow>Skills</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-sage md:text-5xl">What I work with</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {skills.map(([t, d], i) => (
              <div key={t} data-reveal style={{ transitionDelay: `${i * 80}ms` }} className="reveal rounded-[1.5rem] border border-sage/15 bg-pine/60 p-8 transition hover:border-sage/40">
                <span className="font-mono text-xs text-moss-light">0{i + 1}</span>
                <h3 className="mt-2 font-display text-3xl text-sage">{t}</h3>
                <p className="mt-3 leading-7 text-sage/70">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey" className="scroll-mt-16 border-y border-sage/10 bg-white py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div data-reveal className="reveal">
              <Eyebrow>Journey</Eyebrow>
              <h2 className="mt-4 font-display text-4xl text-sage md:text-5xl">Training & education</h2>
            </div>
            <ul className="mt-12 divide-y divide-sage/15 border-y border-sage/15">
              {journey.map(([o, t, k]) => (
                <li key={o} data-reveal className="reveal grid gap-2 py-6 md:grid-cols-[1fr_2fr_auto] md:items-center">
                  <span className="font-display text-2xl text-sage">{o}</span>
                  <span className="text-sage/70">{t}</span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-moss-light">{k}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-32 text-center">
          <div data-reveal className="reveal">
            <div className="flex justify-center"><Eyebrow>Contact</Eyebrow></div>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-5xl leading-tight text-sage md:text-7xl">
              Have a project? <span className="italic text-sage">Let's build it.</span>
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3.5 font-semibold text-forest transition hover:bg-gold hover:text-sage"><Mail size={18} /> {EMAIL}</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-sage/30 px-6 py-3.5 font-semibold text-sage transition hover:bg-sage/10"><Linkedin size={18} /> LinkedIn</a>
              <a href={GH} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-sage/30 px-6 py-3.5 font-semibold text-sage transition hover:bg-sage/10"><Github size={18} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-sage/10 py-8 text-center text-sm text-sage/50">
        © {new Date().getFullYear()} Mariam Ibrahim
      </footer>

      {open?.video && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-sage/20 bg-forest" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-5 py-3 text-sage">
              <span className="font-display text-xl">{open.title}</span>
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
