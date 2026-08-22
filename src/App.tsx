import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Bot,
  Briefcase,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Globe,
  GraduationCap,
  Mail,
  Menu,
  Monitor,
  Rocket,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  type: "icon" | "image";
  icon?: LucideIcon;
  imageSrc?: string;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  const skills = [
    {
      title: "Frontend Development",
      description:
        "Building elegant, responsive and interactive interfaces with modern frontend technologies.",
      icon: Monitor,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
      title: "Backend & APIs",
      description:
        "Creating reliable backend services and REST APIs that connect modern applications with data.",
      icon: Database,
      technologies: ["Node.js", "Express", "Prisma", "MongoDB"],
    },
    {
      title: "AI & Engineering",
      description:
        "Combining Artificial Intelligence with software engineering to create useful digital experiences.",
      icon: Bot,
      technologies: ["Python", "Machine Learning", "AI", "Git"],
    },
  ];

  const projects: Project[] = [
    {
      title: "Baianat Store",
      category: "FULL-STACK E-COMMERCE",
      description:
        "A modern e-commerce application featuring a responsive React frontend with backend integration for products, authentication and orders.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      github: "https://github.com/mariamibrahim2072006-blip/baianat-store",
      live: "https://baianat-frontend.vercel.app",
      type: "image",
      imageSrc: "/baianat-store.png",
    },
    {
      title: "Skin Vision",
      category: "AI / COMPUTER VISION",
      description:
        "An AI-powered system for preliminary burn assessment from mobile images using image segmentation and classification.",
      technologies: [
        "Python",
        "PyTorch",
        "EfficientNet-B0",
        "U-Net",
        "Flask",
        "Computer Vision",
      ],
      github: "https://github.com/mariamibrahim2072006-blip",
      live: "#",
      type: "image",
      imageSrc: "/skin-vision.jpg",
    },
    {
      title: "Baianat Admin Dashboard",
      category: "ADMIN DASHBOARD & ANALYTICS",
      description:
        "A comprehensive administrative dashboard featuring sales analytics overview, interactive charts, and recent orders management.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart Analytics"],
      github: "https://github.com/mariamibrahim2072006-blip/baianat-store",
      live: "https://baianat-frontend.vercel.app/admin",
      type: "image",
      imageSrc: "/admin-dashboard.png",
    },
  ];

  const education = [
    {
      title: "Artificial Intelligence Student",
      organization: "Delta University for Science and Technology",
      description:
        "Studying Artificial Intelligence with a focus on software engineering, machine learning and modern technologies.",
      icon: GraduationCap,
    },
  ];

  const training = [
    {
      title: "Baianat Summer Workshop",
      organization: "Frontend Development",
      description:
        "Practical frontend development training focused on modern web applications, responsive interfaces and real-world projects.",
      icon: Briefcase,
    },
    {
      title: "Digital Egypt Pioneers Initiative",
      organization: "Agentic AI & Generative AI System Developer",
      description:
        "Training focused on Artificial Intelligence, Generative AI and building intelligent software systems.",
      icon: Bot,
    },
    {
      title: "CodeAlpha Internship",
      organization: "Software Development",
      description:
        "Practical internship experience focused on software development, problem solving and technical projects.",
      icon: Rocket,
    },
  ];

  const certificates = [
    {
      title: "HCIA Cloud Computing",
      organization: "Huawei ICT Academy",
      description: "Cloud computing training through the Huawei ICT Academy.",
      icon: Award,
    },
    {
      title: "CodeAlpha Internship Certificate",
      organization: "CodeAlpha",
      description: "Internship experience in software development and practical technical work.",
      icon: Award,
    },
    {
      title: "Baianat Summer Workshop",
      organization: "Baianat",
      description: "Frontend development workshop and practical project experience.",
      icon: Award,
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5efe6] text-[#2d211b] selection:bg-[#8a6248] selection:text-white">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(173,132,92,0.18),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(112,75,51,0.12),transparent_25%),radial-gradient(circle_at_50%_85%,rgba(201,167,126,0.15),transparent_30%)]" />
        <div className="absolute -left-32 top-40 h-96 w-96 animate-[pulse_8s_ease-in-out_infinite] rounded-full bg-[#b58a63]/10 blur-3xl" />
        <div className="absolute -right-32 top-[45%] h-96 w-96 animate-[pulse_10s_ease-in-out_infinite] rounded-full bg-[#704b35]/10 blur-3xl" />
        <div className="absolute left-[40%] top-[75%] h-80 w-80 animate-[pulse_12s_ease-in-out_infinite] rounded-full bg-[#d3b28d]/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,rgba(70,45,30,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(70,45,30,0.8)_1px,transparent_1px)] bg-size-[70px_70px]" />
      </div>

      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#6f503c]/10 bg-[#f5efe6]/80 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8a6248]/20 bg-[#8a6248]/10 text-[#704b35] transition duration-300 group-hover:rotate-6 group-hover:bg-[#8a6248]/15">
              <Terminal size={20} />
            </span>
            <span className="text-lg font-bold tracking-tight text-[#30231d]">
              Mariam <span className="text-[#8a6248]">Ibrahim</span>
            </span>
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {[
              ["about", "About"],
              ["skills", "Skills"],
              ["education", "Education"],
              ["training", "Training"],
              ["projects", "Projects"],
              ["certificates", "Certificates"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-sm font-medium text-[#806d60] transition hover:text-[#704b35]"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/Mariam-Ibrahim-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#6f503c]/15 bg-white/60 px-4 py-2.5 text-sm font-semibold text-[#5d4637] transition hover:border-[#8a6248]/30 hover:bg-white hover:text-[#704b35]"
            >
              <FileText size={16} />
              CV
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-xl bg-[#5c3d2b] px-5 py-2.5 text-sm font-bold text-[#fffaf3] shadow-lg shadow-[#5c3d2b]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#704b35]"
            >
              Let's Talk
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-[#6f503c]/15 bg-white/50 p-2 text-[#5d4637] md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#6f503c]/10 bg-[#f5efe6]/95 px-6 py-5 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-5">
              {[
                ["about", "About"],
                ["skills", "Skills"],
                ["education", "Education"],
                ["training", "Training"],
                ["projects", "Projects"],
                ["certificates", "Certificates"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-left text-[#6f5a4b] transition hover:text-[#704b35]"
                >
                  {label}
                </button>
              ))}
              <a
                href="/Mariam-Ibrahim-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#6f5a4b] transition hover:text-[#704b35]"
              >
                <FileText size={17} />
                View CV
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="rounded-xl bg-[#5c3d2b] px-5 py-3 text-center font-bold text-[#fffaf3]"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pb-20 pt-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#8a6248]/20 bg-white/60 px-4 py-2 text-sm font-medium text-[#76523b] shadow-sm backdrop-blur">
              <Sparkles size={16} />
              Frontend Developer & AI Student
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[1.03] tracking-tight text-[#30231d] sm:text-6xl lg:text-7xl">
              I build{" "}
              <span className="bg-linear-to-r from-[#5c3d2b] via-[#8a6248] to-[#b48a64] bg-clip-text text-transparent">
                digital experiences
              </span>{" "}
              that feel alive.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#806d60]">
              I'm Mariam Ibrahim, an AI student and frontend developer
              passionate about creating beautiful, responsive and
              intelligent web experiences using modern technologies.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center gap-2 rounded-2xl bg-[#5c3d2b] px-7 py-4 font-bold text-[#fffaf3] shadow-xl shadow-[#5c3d2b]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#704b35]"
              >
                View My Work
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <a
                href="/Mariam-Ibrahim-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#6f503c]/15 bg-white/70 px-7 py-4 font-semibold text-[#5d4637] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#8a6248]/30 hover:bg-white"
              >
                <Download size={18} />
                View CV
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[#958174]">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#7b8a5a]" />
                Available for opportunities
              </span>
              <span className="flex items-center gap-2">
                <Globe size={16} />
                Egypt
              </span>
            </div>
          </div>

          {/* CODE CARD */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-4xl bg-[#8a6248]/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-4xl border border-[#6f503c]/15 bg-[#fffaf3]/85 p-6 shadow-2xl shadow-[#5c3d2b]/10 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#b97968]" />
                  <span className="h-3 w-3 rounded-full bg-[#c6a15b]" />
                  <span className="h-3 w-3 rounded-full bg-[#7b8a5a]" />
                </div>
                <span className="text-xs text-[#a18d7f]">skin-vision.ts</span>
              </div>

              <div className="rounded-2xl border border-[#6f503c]/10 bg-[#30231d] p-6 font-mono text-sm shadow-inner">
                <p className="text-[#9e8777]">// skin vision app</p>
                <p className="mt-4">
                  <span className="text-[#d6a56d]">const</span>{" "}
                  <span className="text-[#d8b98c]">skinVision</span>{" "}
                  <span className="text-[#a78f7d]">=</span>{" "}
                  <span className="text-[#b9c18a]">{"{"}</span>
                </p>
                <p className="pl-5">
                  <span className="text-[#a78f7d]">name:</span>{" "}
                  <span className="text-[#e0c49d]">'Skin Vision'</span>,
                </p>
                <p className="pl-5">
                  <span className="text-[#a78f7d]">feature:</span>{" "}
                  <span className="text-[#e0c49d]">'AI Burn Assessment'</span>,
                </p>
                <p className="pl-5">
                  <span className="text-[#a78f7d]">tech:</span>{" "}
                  <span className="text-[#e0c49d]">['U-Net', 'EfficientNet']</span>
                </p>
                <p>
                  <span className="text-[#b9c18a]">{"}"}</span>
                </p>
                <div className="mt-6 flex items-center gap-2 text-[#d3a873]">
                  <Zap size={15} />
                  <span>AI Powered...</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#9a8678] transition hover:text-[#704b35]"
          aria-label="Scroll down"
        >
          <ArrowDown size={22} />
        </button>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="border-t border-[#6f503c]/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6248]">
                About Me
              </p>
              <h2 className="text-4xl font-bold leading-tight text-[#30231d] sm:text-5xl">
                Turning ideas into{" "}
                <span className="text-[#8a6248]">real products.</span>
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-[#806d60]">
              <p>
                I'm an Artificial Intelligence student with a strong interest in
                Frontend Development and modern web technologies.
              </p>
              <p>
                I enjoy transforming ideas and designs into clean, responsive
                and interactive user interfaces like Skin Vision.
              </p>
              <p>
                My AI background gives me a different perspective when building
                intelligent and data-driven digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="border-y border-[#6f503c]/10 bg-[#ebe1d4]/45 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6248]">
              My Skills
            </p>
            <h2 className="text-4xl font-bold text-[#30231d] sm:text-5xl">
              Technologies I work with
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <article
                  key={skill.title}
                  className="group rounded-3xl border border-[#6f503c]/10 bg-[#fffaf3]/75 p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#8a6248]/25 hover:bg-[#fffaf3] hover:shadow-xl hover:shadow-[#5c3d2b]/10"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8a6248]/10 text-[#704b35] transition duration-500 group-hover:scale-110 group-hover:bg-[#8a6248]/15">
                    <Icon size={27} />
                  </div>
                  <h3 className="text-xl font-bold text-[#382920]">
                    {skill.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#806d60]">
                    {skill.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {skill.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-[#6f503c]/10 bg-[#f5efe6] px-3 py-1.5 text-xs text-[#6f5a4b]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6248]">
              Education
            </p>
            <h2 className="text-4xl font-bold text-[#30231d] sm:text-5xl">
              Academic Background
            </h2>
          </div>
          <div className="grid gap-6">
            {education.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-4xl border border-[#6f503c]/10 bg-[#fffaf3]/75 p-8 shadow-sm transition duration-500 hover:border-[#8a6248]/25 hover:bg-[#fffaf3] hover:shadow-xl hover:shadow-[#5c3d2b]/10"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#8a6248]/20 bg-[#8a6248]/10 text-[#704b35]">
                      <Icon size={30} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#382920]">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-medium text-[#8a6248]">
                        {item.organization}
                      </p>
                      <p className="mt-4 max-w-3xl leading-7 text-[#806d60]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TRAINING ================= */}
      <section
        id="training"
        className="border-y border-[#6f503c]/10 bg-[#ebe1d4]/45 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6248]">
              Training & Experience
            </p>
            <h2 className="text-4xl font-bold text-[#30231d] sm:text-5xl">
              Learning by building.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {training.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-[#6f503c]/10 bg-[#fffaf3]/75 p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#8a6248]/25 hover:bg-[#fffaf3] hover:shadow-xl hover:shadow-[#5c3d2b]/10"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8a6248]/10 text-[#704b35] transition group-hover:scale-110">
                    <Icon size={27} />
                  </div>
                  <h3 className="text-xl font-bold text-[#382920]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#8a6248]">
                    {item.organization}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#806d60]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6248]">
                Selected Work
              </p>
              <h2 className="text-4xl font-bold text-[#30231d] sm:text-5xl">
                Featured Projects
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#958174]">
              A selection of projects showcasing my frontend, full-stack, AI and
              problem-solving skills.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => {
              return (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-4xl border border-[#6f503c]/10 bg-[#fffaf3]/80 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#8a6248]/25 hover:shadow-2xl hover:shadow-[#5c3d2b]/10"
                >
                  <div className="relative h-64 overflow-hidden bg-[#e8ddcf]">
                    <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(92,61,43,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(92,61,43,0.08)_1px,transparent_1px)] bg-size-[40px_40px]" />

                    {project.type === "image" ? (
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <img
                          src={project.imageSrc}
                          alt={project.title}
                          className="h-full w-full rounded-2xl object-cover shadow-xl transition duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-3xl border border-[#6f503c]/10 bg-[#fffaf3]/80 p-8 shadow-2xl backdrop-blur-xl transition duration-500 group-hover:scale-105">
                          {project.icon && (
                            <project.icon size={55} className="text-[#704b35]" />
                          )}
                        </div>
                      </div>
                    )}

                    <div className="absolute left-6 top-6 rounded-full border border-[#6f503c]/10 bg-[#fffaf3]/85 px-3 py-1.5 text-xs font-medium text-[#76523b] backdrop-blur">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#382920]">
                      {project.title}
                    </h3>
                    <p className="mt-4 leading-7 text-[#806d60]">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg bg-[#ebe1d4] px-3 py-1.5 text-xs text-[#6f5a4b]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 flex items-center gap-5 border-t border-[#6f503c]/10 pt-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[#6f5a4b] transition hover:text-[#704b35]"
                      >
                        <Code2 size={17} />
                        GitHub
                      </a>
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#704b35] transition hover:text-[#8a6248]"
                        >
                          Live Demo
                          <ExternalLink size={17} />
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

      {/* ================= CERTIFICATES ================= */}
      <section
        id="certificates"
        className="border-y border-[#6f503c]/10 bg-[#ebe1d4]/45 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6248]">
              Certificates & Credentials
            </p>
            <h2 className="text-4xl font-bold text-[#30231d] sm:text-5xl">
              Continuous learning.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {certificates.map((certificate) => {
              const Icon = certificate.icon;
              return (
                <article
                  key={certificate.title}
                  className="group rounded-3xl border border-[#6f503c]/10 bg-[#fffaf3]/75 p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#8a6248]/25 hover:bg-[#fffaf3] hover:shadow-xl hover:shadow-[#5c3d2b]/10"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8a6248]/10 text-[#704b35] transition group-hover:scale-110">
                    <Icon size={27} />
                  </div>
                  <h3 className="text-xl font-bold text-[#382920]">
                    {certificate.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#8a6248]">
                    {certificate.organization}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#806d60]">
                    {certificate.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PROFILES ================= */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6248]">
              Find Me Online
            </p>
            <h2 className="text-4xl font-bold text-[#30231d] sm:text-5xl">
              Let's connect.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <a
              href="https://github.com/mariamibrahim2072006-blip"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-[#6f503c]/10 bg-[#fffaf3]/75 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#8a6248]/25 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#30231d] font-black text-lg text-[#fffaf3] transition group-hover:bg-[#5c3d2b]">
                GH
              </div>
              <h3 className="text-xl font-bold text-[#382920]">GitHub</h3>
              <p className="mt-2 text-sm text-[#958174]">Projects & source code</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#704b35]">
                Visit Profile
                <ArrowUpRight size={16} />
              </div>
            </a>

            <a
              href="https://khamsat.com/user/mariamibrahim00"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-[#6f503c]/10 bg-[#fffaf3]/75 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#8a6248]/25 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8a6248]/10 font-black text-sm text-[#704b35] transition group-hover:bg-[#8a6248]/20">
                K
              </div>
              <h3 className="text-xl font-bold text-[#382920]">Khamsat</h3>
              <p className="mt-2 text-sm text-[#958174]">Freelance services</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#704b35]">
                Visit Profile
                <ArrowUpRight size={16} />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/mariam-ibrahim-109a8a350/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-[#6f503c]/10 bg-[#fffaf3]/75 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#8a6248]/25 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8a6248]/10 font-black text-sm text-[#704b35] transition group-hover:bg-[#8a6248]/20">
                in
              </div>
              <h3 className="text-xl font-bold text-[#382920]">LinkedIn</h3>
              <p className="mt-2 text-sm text-[#958174]">Professional profile</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#704b35]">
                Visit Profile
                <ArrowUpRight size={16} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#8a6248]/20 bg-[#8a6248]/10 text-[#704b35]">
            <Mail size={28} />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6248]">
            Get In Touch
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[#30231d] sm:text-6xl">
            Let's build something{" "}
            <span className="text-[#8a6248]">great.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#806d60]">
            Have a project, opportunity or idea? I'd love to hear about it and
            see how we can turn it into something amazing.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:mariamibrahim2072006@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#5c3d2b] px-7 py-4 font-bold text-[#fffaf3] shadow-xl shadow-[#5c3d2b]/20 transition hover:-translate-y-1 hover:bg-[#704b35]"
            >
              <Mail size={19} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/mariam-ibrahim-109a8a350/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-[#6f503c]/15 bg-white/70 px-7 py-4 font-semibold text-[#5d4637] transition hover:-translate-y-1 hover:border-[#8a6248]/30 hover:bg-white"
            >
              LinkedIn
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#6f503c]/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[#958174] sm:flex-row">
          <p>© {new Date().getFullYear()} Mariam Ibrahim. All rights reserved.</p>
          <div className="flex items-center gap-2">
            Built with <span className="font-semibold text-[#704b35]">React</span> &{" "}
            <span className="font-semibold text-[#704b35]">Tailwind</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;