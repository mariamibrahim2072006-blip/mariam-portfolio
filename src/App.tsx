import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  Play,
  Server,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  github?: string;
  demoUrl?: string;
  image: string;
  featured?: boolean;
  icon: typeof Code2;
}

const projects: Project[] = [
  {
    title: "HR Management System",
    subtitle: "Full-Stack HRMS",
    category: "Full-Stack Development",
    description:
      "A complete human resources management system with employee management, attendance, leaves, payroll, authentication, role-based permissions, and a real database.",
    technologies: [
      "React",
      "Express.js",
      "MySQL",
      "JWT",
      "REST API",
      "JavaScript",
    ],
    github:
      "https://github.com/mariamibrahim2072006-blip/hr-system",
    demoUrl:
      "https://drive.google.com/file/d/1h8qyeDtTty4zwnJpTHZ1jKzKBRWZUk-b/preview",
    image: "/projects/hrms.png",
    featured: true,
    icon: BriefcaseBusiness,
  },

  {
    title: "ELARA",
    subtitle: "Luxury Candle E-Commerce",
    category: "E-Commerce",
    description:
      "A modern candle e-commerce platform with product browsing, cart management, checkout flow, database integration, and Stripe payment integration.",
    technologies: [
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Vite",
    ],
    github:
      "https://github.com/mariamibrahim2072006-blip/elara-essence",
    demoUrl:
      "https://drive.google.com/file/d/1ndKufLgXnPOzQnRP2-ij6rZo8yruXyBF/preview",
    image: "/projects/elara.png",
    featured: true,
    icon: Sparkles,
  },

  {
    title: "Aromiq",
    subtitle: "Perfume E-Commerce",
    category: "Web Development",
    description:
      "A perfume e-commerce website focused on a polished shopping experience, product presentation, responsive design, and backend integration.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Node.js",
      "Express.js",
      "Database",
    ],
    github:
      "https://github.com/mariamibrahim2072006-blip/aromiq-store",
    demoUrl:
      "https://drive.google.com/file/d/1pEuN5CbSrByRl90rmbZ-iwdQaWin3B1o/preview",
    image: "/projects/Aromiq.png",
    featured: true,
    icon: Layers3,
  },

  {
    title: "Baianat Store",
    subtitle: "Modern E-Commerce Platform",
    category: "Frontend & Backend",
    description:
      "An e-commerce platform combining a modern responsive interface with product management and backend services.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github:
      "https://github.com/mariamibrahim2072006-blip/baianat-store",
    image: "/projects/baianat.png",
    icon: Code2,
  },

  {
    title: "Admin Dashboard",
    subtitle: "Management Dashboard",
    category: "Dashboard Development",
    description:
      "A professional admin dashboard designed to manage application data, monitor information, and provide a clear and organized management interface.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Responsive UI",
      "Dashboard",
    ],
    image: "/projects/admin-dashboard.png",
    icon: Server,
  },

  {
    title: "Skin Vision",
    subtitle: "AI-Powered Skin Analysis",
    category: "AI & Computer Vision",
    description:
      "An AI-powered skin analysis application that combines image processing and machine learning to analyze skin conditions and provide useful results through an interactive web interface.",
    technologies: [
      "Python",
      "Flask",
      "PyTorch",
      "Computer Vision",
      "EfficientNet-B0",
      "SQLite",
    ],
    image: "/projects/skin-vision.png",
    icon: Brain,
  },
];

const skills = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Building responsive and modern web interfaces.",
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    description:
      "Developing APIs and connecting applications to databases.",
    items: ["Node.js", "Express.js", "REST APIs", "Prisma", "MySQL"],
  },
  {
    title: "AI & Engineering",
    icon: Brain,
    description:
      "Applying AI concepts to practical software projects.",
    items: ["Python", "Machine Learning", "Computer Vision", "Git", "SQL"],
  },
];

const trainings = [
  {
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    title: "Agentic AI & Generative AI System Developer",
    type: "Professional Training",
  },
  {
    organization: "Baianat",
    title: "Frontend Development Summer Workshop",
    type: "Workshop",
  },
  {
    organization: "CodeAlpha",
    title: "Software Development Internship",
    type: "Internship",
  },
  {
    organization: "Huawei ICT Academy",
    title: "HCIA Cloud Computing",
    type: "Technical Training",
  },
  {
    organization: "Huawei ICT Academy",
    title: "Artificial Intelligence Training",
    type: "Technical Training",
  },
];

const certificates = [
  {
    title: "HCIA Cloud Computing",
    organization: "Huawei ICT Academy",
  },
  {
    title: "Software Development Internship",
    organization: "CodeAlpha",
  },
  {
    title: "Frontend Development",
    organization: "Baianat",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const closeMenu = () => setMenuOpen(false);

  const openProject = (project: Project) => {
    if (project.demoUrl) {
      setSelectedProject(project);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a
            href="#home"
            className="text-xl font-extrabold tracking-tight text-slate-950"
          >
            Mariam<span className="text-blue-600">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {["About", "Skills", "Projects", "Training", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                >
                  {item}
                </a>
              ),
            )}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-blue-600 hover:text-blue-600 md:block"
          >
            Let's Talk
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
            <nav className="flex flex-col gap-4">
              {["About", "Skills", "Projects", "Training", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={closeMenu}
                    className="text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </a>
                ),
              )}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <main id="home">
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 pt-20 text-white">
          <div className="absolute inset-0">
            <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-600/15 blur-3xl" />

            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:60px_60px]" />
          </div>

          <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]" />
                Available for opportunities
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
                Frontend Developer · AI Student
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                I build digital
                <span className="block text-blue-500">
                  experiences
                </span>
                that work.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                I’m Mariam Ibrahim, an AI student and developer focused on
                building modern web applications, full-stack systems, and
                practical AI-powered solutions.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
                >
                  Explore My Work

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="/Mariam-Ibrahim-CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white hover:text-slate-950"
                >
                  View CV
                  <ExternalLink size={17} />
                </a>
              </div>

              <div className="mt-12 flex items-center gap-8 text-sm text-slate-400">
                <div>
                  <strong className="block text-2xl font-bold text-white">
                    6
                  </strong>
                  Projects
                </div>

                <div className="h-10 w-px bg-slate-700" />

                <div>
                  <strong className="block text-2xl font-bold text-white">
                    5
                  </strong>
                  Trainings
                </div>

                <div className="h-10 w-px bg-slate-700" />

                <div>
                  <strong className="block text-2xl font-bold text-white">
                    AI
                  </strong>
                  Major
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-5 rounded-3xl bg-blue-500/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-xl">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-green-400" />
                    </div>

                    <span className="font-mono text-xs text-slate-500">
                      developer.ts
                    </span>
                  </div>

                  <div className="font-mono text-sm leading-8">
                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-300">mariam</span> = {"{"}
                    </p>

                    <p className="pl-5">
                      <span className="text-slate-400">role:</span>{" "}
                      <span className="text-green-300">
                        "Frontend Developer"
                      </span>
                      ,
                    </p>

                    <p className="pl-5">
                      <span className="text-slate-400">major:</span>{" "}
                      <span className="text-green-300">"AI"</span>,
                    </p>

                    <p className="pl-5">
                      <span className="text-slate-400">focus:</span> [
                    </p>

                    <p className="pl-10 text-blue-300">"React",</p>
                    <p className="pl-10 text-blue-300">"Full-Stack",</p>
                    <p className="pl-10 text-blue-300">"AI"</p>

                    <p className="pl-5">],</p>

                    <p className="pl-5">
                      <span className="text-slate-400">mindset:</span>{" "}
                      <span className="text-green-300">
                        "Build & Learn"
                      </span>
                    </p>

                    <p>{"};"}</p>
                  </div>

                  <div className="mt-8 flex items-center gap-3 rounded-xl border border-blue-400/20 bg-blue-500/10 p-4">
                    <CheckCircle2
                      className="text-blue-400"
                      size={20}
                    />

                    <span className="text-sm text-slate-300">
                      Turning ideas into working products.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#about"
            className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium uppercase tracking-widest text-slate-500 transition hover:text-white lg:flex"
          >
            Scroll to explore
            <ArrowDown size={15} />
          </a>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  About me
                </p>

                <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  Developer with an
                  <span className="block text-blue-600">
                    AI mindset.
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  I’m a Computer Science & AI student passionate about
                  software development and building useful digital products.
                </p>

                <p>
                  My work combines frontend development, backend engineering,
                  databases, and AI. I enjoy taking an idea from a concept to
                  a working, polished application.
                </p>

                <div className="grid gap-4 pt-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <GraduationCap
                      className="mb-4 text-blue-600"
                      size={25}
                    />

                    <h3 className="font-bold text-slate-950">
                      AI Student
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Building a strong foundation in AI & software
                      engineering.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <Code2
                      className="mb-4 text-blue-600"
                      size={25}
                    />

                    <h3 className="font-bold text-slate-950">
                      Developer
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Creating responsive and functional web applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="border-y border-slate-200 bg-slate-50 py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                What I work with
              </p>

              <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Skills & Technologies
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                A growing technical toolkit built through university,
                training, internships, and real projects.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-950">
                      {skill.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {skill.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Selected work
                </p>

                <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  Projects
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-slate-500">
                Real projects built to practice product development,
                full-stack engineering, AI, and modern web technologies.
              </p>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              {projects.map((project, index) => {
                const Icon = project.icon;

                return (
                  <article
                    key={project.title}
                    className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-slate-200/70 ${project.featured
                        ? "md:col-span-2"
                        : ""
                      }`}
                  >
                    {/* PROJECT IMAGE */}
                    <div
                      className={`relative overflow-hidden bg-slate-100 ${project.featured
                          ? "h-[300px] md:h-[390px]"
                          : "h-[260px]"
                        }`}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} project screenshot`}
                        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />

                      <div className="absolute left-5 top-5 flex items-center gap-3">
                        <span className="rounded-lg border border-white/20 bg-slate-950/80 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                          0{index + 1}
                        </span>

                        <span className="rounded-lg border border-white/20 bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* PROJECT INFO */}
                    <div className="p-7 md:p-8">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <p className="text-sm font-semibold text-blue-600">
                            {project.subtitle}
                          </p>

                          <h3 className="mt-1 text-2xl font-black text-slate-950">
                            {project.title}
                          </h3>
                        </div>

                        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:flex">
                          <Icon size={21} />
                        </div>
                      </div>

                      <p className="mt-4 text-base leading-7 text-slate-600">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {project.demoUrl && (
                          <button
                            onClick={() => openProject(project)}
                            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                          >
                            <Play size={16} fill="currentColor" />
                            Watch Demo
                          </button>
                        )}

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                          >
                            <span className="text-base font-bold">
                              GH
                            </span>
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* TRAINING */}
        <section
          id="training"
          className="border-y border-slate-200 bg-slate-950 py-24 text-white"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Continuous learning
              </p>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Training & Experience
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Training experiences that helped me expand my technical
                knowledge beyond university.
              </p>
            </div>

            <div className="relative">
              <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-slate-800 sm:block" />

              <div className="space-y-5">
                {trainings.map((training) => (
                  <div
                    key={`${training.organization}-${training.title}`}
                    className="relative flex gap-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-blue-500/40"
                  >
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
                      <CalendarDays size={18} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                        {training.type}
                      </p>

                      <h3 className="mt-1 text-lg font-bold text-white">
                        {training.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        {training.organization}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Credentials
              </p>

              <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Certificates
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {certificates.map((certificate) => (
                <div
                  key={`${certificate.organization}-${certificate.title}`}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <ShieldCheck size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950">
                      {certificate.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {certificate.organization}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-7 py-16 text-center text-white md:px-16">
              <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />

              <div className="relative">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                  Get in touch
                </p>

                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  Have an idea?
                  <span className="block text-blue-500">
                    Let’s build it.
                  </span>
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400">
                  I’m always interested in new projects, internships,
                  collaborations, and opportunities to learn and build.
                </p>

                <div className="mt-9 flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:mariamibrahim2072006@gmail.com"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3.5 font-bold text-white transition hover:border-white hover:bg-white hover:text-slate-950"
                  >
                    <Mail size={18} />
                    Email Me
                  </a>

                  <a
                    href="https://github.com/mariamibrahim2072006-blip"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3.5 font-bold text-white transition hover:border-white"
                  >
                    <span className="text-base font-bold">GH</span>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-7 text-sm text-slate-500 md:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} Mariam Ibrahim. All rights
            reserved.
          </p>

          <div className="flex items-center gap-2">
            Built with
            <span className="font-semibold text-slate-800">
              React
            </span>
            <span>·</span>
            <span className="font-semibold text-blue-600">
              TypeScript
            </span>
          </div>
        </div>
      </footer>

      {/* VIDEO MODAL */}
      {selectedProject && selectedProject.demoUrl && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between border-b border-slate-800 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Project Demo
                </p>

                <h3 className="mt-1 font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                aria-label="Close demo"
              >
                <X size={22} />
              </button>
            </div>

            <div className="min-h-0 flex-1 bg-black">
              <iframe
                src={selectedProject.demoUrl}
                title={`${selectedProject.title} demo`}
                className="h-full w-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>

            <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-slate-800 bg-slate-900 px-5 py-4">
              <span className="text-xs text-slate-500">
                Video demonstration of the project
              </span>

              <div className="flex gap-2">
                <a
                  href={selectedProject.demoUrl.replace(
                    "/preview",
                    "/view",
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:border-slate-500"
                >
                  Open Demo
                  <ExternalLink size={15} />
                </a>

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    <span className="text-xs font-bold">GH</span>
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;