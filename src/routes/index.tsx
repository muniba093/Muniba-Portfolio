import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

// import profileImg from "@/assets/profile.jpg"; // Profile picture removed as requested
import certSkyscanner from "@/assets/certs/cert-skyscanner.jpg";
import certBranding from "@/assets/certs/cert-branding.jpg";
import certCeh from "@/assets/certs/cert-ceh.jpg";
import certPython from "@/assets/certs/cert-python.jpg";
import certSql from "@/assets/certs/cert-sql.png";
import patternRecognitionAsset from "@/assets/pattern-recognition.jpg.asset.json";

const CERTIFICATES = [
  { img: certSql, title: "Diploma in SQL", issuer: "UniAthena · Athena Global Education", date: "2026", color: "from-pink-500/30 to-fuchsia-600/30" },
  { img: certSkyscanner, title: "Front-End Software Engineering", issuer: "Skyscanner × Forage", date: "May 2026", color: "from-sky-500/30 to-blue-600/30" },
  { img: certBranding, title: "Branding & Design Job Simulation", issuer: "Forage", date: "Jun 2026", color: "from-indigo-500/30 to-violet-600/30" },
  { img: certCeh, title: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", date: "Sep 2025", color: "from-rose-500/30 to-red-600/30" },
  { img: certPython, title: "Python for Beginners", issuer: "Simplilearn SkillUp", date: "Apr 2026", color: "from-amber-500/30 to-orange-600/30" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muniba Akram — Web Developer & AI Enthusiast" },
      { name: "description", content: "Portfolio of Muniba Akram — Computer Science student, AI enthusiast and front-end developer. Modern web apps, AI tools, ethical hacking & UI/UX design." },
      { name: "keywords", content: "Muniba Akram, portfolio, web developer, AI enthusiast, front-end developer, React, Python, ethical hacker, UI/UX, Pakistan, Multan" },
      { property: "og:title", content: "Muniba Akram — Web Developer & AI Enthusiast" },
      { property: "og:description", content: "Computer Science student, AI enthusiast & front-end developer." },
    ],
  }),
  component: Portfolio,
});

const ROLES = ["Web Developer", "AI Enthusiast", "Ethical Hacker", "UI/UX Designer"];

const SKILLS = {
  Frontend: [
    { name: "React / TanStack", level: 88 },
    { name: "HTML & CSS / Tailwind", level: 92 },
    { name: "JavaScript / TypeScript", level: 85 },
  ],
  Backend: [
    { name: "Python", level: 90 },
    { name: "PHP & MySQL", level: 78 },
    { name: "REST APIs", level: 80 },
  ],
  "UI/UX Design": [
    { name: "Figma", level: 82 },
    { name: "Design Systems", level: 78 },
    { name: "Prototyping", level: 80 },
  ],
  "AI Tools": [
    { name: "ML / NLP (Python)", level: 86 },
    { name: "Generative & Agentic AI", level: 82 },
    { name: "Prompt Engineering", level: 88 },
  ],
};


type Project = {
  title: string; desc: string; tags: string[]; category: string; demo: string; repo: string; img: string;
};

const PROJECTS: Project[] = [
  { title: "AI Phishing Email Detector", desc: "ML/NLP classifier in Python achieving 90%+ accuracy on real-world phishing emails.", tags: ["Python", "ML", "NLP"], category: "AI", demo: "https://github.com", repo: "https://github.com", img: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=900&q=70" },
  { title: "Intelligent Pattern Recognition", desc: "Real-time ML pattern detection with PHP frontend and database integration. HEC Hackathon project.", tags: ["Python", "PHP", "ML"], category: "AI", demo: "https://github.com", repo: "https://github.com", img: patternRecognitionAsset.url },
  { title: "Sky-Scanner Front-End", desc: "Production-ready React web app with responsive design and state management (Forage simulation).", tags: ["React", "JS", "CSS"], category: "Web", demo: "https://github.com", repo: "https://github.com", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=70" },
  { title: "Portfolio Website", desc: "Modern responsive portfolio with glassmorphism, 3D tilt cards and smooth animations.", tags: ["React", "Tailwind"], category: "Web", demo: "https://github.com", repo: "https://github.com", img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=70" },
];

const PROJECT_CATS = ["All", "Web", "AI"];

const TIMELINE = [
  { date: "Apr 2026 – Present", title: "Career-Prep Fellow", org: "Amal Academy (Stanford-funded)", desc: "Selected from 4,500+ applicants for a 3-month fellowship developing leadership, communication, and problem-solving." },
  { date: "May 2026", title: "Front-End Software Engineering Simulation", org: "Skyscanner via Forage", desc: "Built a production-ready React Backpack web app with responsive design, component architecture and state management." },
];

const SERVICES = [
  { icon: "💻", title: "Web Development", desc: "Modern, performant web apps built with React and TypeScript." },
  { icon: "🎨", title: "Website Design", desc: "Clean, on-brand designs with thoughtful UX." },
  { icon: "🚀", title: "Landing Pages", desc: "High-converting landing pages with crisp copy and animations." },
  { icon: "🤖", title: "AI Automation", desc: "ML, NLP and agentic workflows to automate the tedious." },
  { icon: "⚙️", title: "Custom Web Apps", desc: "Dashboards, tools and SaaS-style products end-to-end." },
  { icon: "🛡️", title: "Security Audits", desc: "Ethical hacking & vulnerability checks (CEH certified)." },
];

const COUNTERS = [
  { label: "Projects", value: 12 },
  { label: "Certifications", value: 6 },
  { label: "GPA", value: 3.82, decimals: 2 },
  { label: "Awards", value: 2 },
];

/* ---------- 3D Tilt wrapper ---------- */
function Tilt({ children, className = "", max = 12 }: { children: React.ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--ry", `${(x - 0.5) * max * 2}deg`);
    el.style.setProperty("--rx", `${(0.5 - y) * max * 2}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current; if (!el) return;
    el.style.setProperty("--rx", `0deg`); el.style.setProperty("--ry", `0deg`);
  };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`card-3d relative ${className}`}>
      {children}
    </div>
  );
}

function Portfolio() {
  const [dark, setDark] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 700); return () => clearTimeout(t); }, []);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const word = ROLES[roleIdx];
    let i = 0; let deleting = false; let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (!deleting) {
        i++; setTyped(word.slice(0, i));
        if (i === word.length) { deleting = true; timer = setTimeout(tick, 1400); return; }
      } else {
        i--; setTyped(word.slice(0, i));
        if (i === 0) { setRoleIdx((r) => (r + 1) % ROLES.length); return; }
      }
      timer = setTimeout(tick, deleting ? 50 : 90);
    };
    timer = setTimeout(tick, 200);
    return () => clearTimeout(timer);
  }, [roleIdx]);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [loaded]);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => (filter === "All" || p.category === filter)
      && (p.title.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase())));
  }, [filter, search]);

  if (!loaded) {
    return (
      <div className="fixed inset-0 grid place-items-center bg-background">
        <div className="flex flex-col items-center gap-5">
          <div className="relative size-20">
            <div className="absolute inset-0 rounded-full bg-conic animate-spin-slow blur-md opacity-70" />
            <div className="absolute inset-2 rounded-full bg-background grid place-items-center font-display text-xl text-gradient font-bold">M</div>
          </div>
          <p className="text-xs tracking-[0.4em] text-muted-foreground">LOADING</p>
        </div>
      </div>
    );
  }

  const navLinks = [
    ["About", "about"], ["Experience", "experience"], ["Projects", "projects"],
    ["Skills", "skills"], ["Certificates", "certificates"], ["Contact", "contact"],
  ] as const;

  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Background mesh + grid */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute -top-32 -left-32 size-[520px] rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-40 size-[560px] rounded-full bg-accent/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-0 left-1/3 size-[440px] rounded-full bg-primary/20 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
        {Array.from({ length: 22 }).map((_, i) => (
          <span key={i} className="particle" style={{
            top: `${(i * 53) % 100}%`, left: `${(i * 37) % 100}%`,
            width: `${4 + (i % 5) * 3}px`, height: `${4 + (i % 5) * 3}px`,
            animationDelay: `${i * 0.4}s`, animationDuration: `${6 + (i % 6)}s`,
          }} />
        ))}
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 glass">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="font-display text-lg font-bold tracking-tight lowercase">
            <span className="shimmer">Muniba</span>.dev
          </a>
          <ul className="hidden gap-8 md:flex">
            {navLinks.map(([l, h]) => (
              <li key={h}><a href={`#${h}`} className="text-sm text-muted-foreground transition hover:text-foreground">{l}</a></li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button onClick={() => setDark(!dark)} aria-label="Toggle theme"
              className="grid size-10 place-items-center rounded-full border border-border bg-card/50 transition hover:bg-card hover:scale-110">
              {dark ? "☀️" : "🌙"}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
              className="grid size-10 place-items-center rounded-full border border-border bg-card/50 md:hidden">
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <ul className="flex flex-col gap-1 border-t border-border px-5 py-3 md:hidden">
            {navLinks.map(([l, h]) => (
              <li key={h}><a onClick={() => setMenuOpen(false)} href={`#${h}`} className="block rounded-md px-3 py-2 text-sm hover:bg-muted">{l}</a></li>
            ))}
          </ul>
        )}
      </header>

      <main id="home" className="mx-auto max-w-7xl px-5">
        {/* Hero */}
        <section className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr] md:py-24 md:items-center">
          <div className="animate-fade-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse-ring" /> Available for projects
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Hi, I'm <span className="text-gradient">Muniba Akram</span>
            </h1>
            <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
              I am <span className="animate-caret text-foreground">{typed}</span>
            </p>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Computer Science student at Women University Multan, building modern web apps,
              AI tools, and security-minded software. Stanford-funded Amal Academy Fellow & CEH certified.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-hero px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.04] hover:shadow-glow-strong">
                View Projects
              </a>
              <a href="#contact" className="rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold transition hover:bg-card hover:scale-[1.04]">
                Contact Me
              </a>
              <a href="/cv.pdf" download="Muniba-Akram-Resume.pdf" className="rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold transition hover:bg-card hover:scale-[1.04]">
                ⬇ Download CV
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {COUNTERS.map((c) => <Counter key={c.label} {...c} />)}
            </div>
          </div>

          {/* 3D profile orb — profile picture removed as requested
          <div className="relative mx-auto aspect-square w-[280px] md:w-[380px]">
            <div className="absolute inset-0 rounded-full bg-conic blur-2xl opacity-60 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full bg-conic animate-spin-slow opacity-90" style={{ animationDirection: "reverse" }} />
            <Tilt className="absolute inset-8 rounded-full overflow-hidden ring-gradient shadow-glow-strong" max={18}>
              <img src={profileImg} alt="Muniba Akram" className="size-full object-cover" />
            </Tilt>
            <div className="absolute inset-0 animate-spin-slow">
              {["⚛️", "🤖", "🛡️", "🎨"].map((e, i) => (
                <div key={i} className="absolute left-1/2 top-1/2 -ml-5 -mt-5 grid size-10 place-items-center rounded-full glass text-base shadow-glow"
                  style={{ transform: `rotate(${i * 90}deg) translateX(160px) rotate(-${i * 90}deg)` }}>{e}</div>
              ))}
            </div>
          </div>
          */}
        </section>

        {/* About */}
        <Section id="about" eyebrow="About Me" title="A short story.">
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm a Computer Science undergraduate (GPA 3.82) at Women University Multan, passionate about the
              intersection of <span className="text-foreground font-medium">web development, AI and cybersecurity</span>.
              I love building things that are useful, fast, and beautifully designed.
            </p>
            <p>
              Recently selected from 4,500+ applicants as an Amal Academy Career-Prep Fellow (Stanford-funded),
              I'm investing 150+ hours in leadership and problem-solving alongside my technical work.
            </p>
            <h3 className="pt-4 font-display text-lg text-foreground">Education</h3>
            <ul className="ml-5 list-disc space-y-2 marker:text-primary">
              <li><strong className="text-foreground">BS Computer Science</strong> — Women University Multan (2023–2027), GPA 3.82</li>
              <li><strong className="text-foreground">FSc Pre-Medical</strong> — Punjab Group of Colleges, Mailsi (2021–2023)</li>
            </ul>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" eyebrow="Experience" title="Journey & milestones.">
          <ol className="relative border-l-2 border-border pl-6 md:pl-8">
            {TIMELINE.map((t) => (
              <li key={t.title} className="reveal mb-8 last:mb-0">
                <span className="absolute -left-[9px] mt-1.5 grid size-4 place-items-center rounded-full bg-hero ring-4 ring-background animate-pulse-ring" />
                <p className="text-xs font-medium text-primary">{t.date}</p>
                <h3 className="mt-1 font-display text-lg">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.org}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="Projects" title="Selected work.">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {PROJECT_CATS.map((c) => (
                <button key={c} onClick={() => setFilter(c)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${filter === c ? "bg-hero text-white shadow-glow" : "border border-border bg-card/50 text-muted-foreground hover:text-foreground"}`}>
                  {c}
                </button>
              ))}
            </div>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="🔍 Search projects..."
              className="w-full rounded-full border border-border bg-card/50 px-4 py-2 text-sm outline-none transition focus:border-primary sm:w-64" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p) => (
              <Tilt key={p.title} className="group flex flex-col overflow-hidden rounded-2xl glass ring-gradient">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy"
                    className="size-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <span key={t} className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">{t}</span>)}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a href={p.demo} className="flex-1 rounded-full bg-hero py-2 text-center text-xs font-semibold text-white">Live Demo</a>
                    <a href={p.repo} className="flex-1 rounded-full border border-border py-2 text-center text-xs font-semibold">GitHub</a>
                  </div>
                </div>
              </Tilt>
            ))}
            {filteredProjects.length === 0 && <p className="text-muted-foreground">No projects found.</p>}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" eyebrow="Skills" title="Things I'm good at.">
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(SKILLS).map(([cat, list]) => (
              <Tilt key={cat} className="glass rounded-2xl p-6" max={6}>
                <h3 className="mb-5 font-display text-lg">{cat}</h3>
                <div className="space-y-4">
                  {list.map((s) => (
                    <div key={s.name}>
                      <div className="mb-1.5 flex justify-between text-sm">
                        <span className="text-foreground">{s.name}</span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <Bar level={s.level} />
                      </div>
                    </div>
                  ))}
                </div>
              </Tilt>
            ))}
          </div>
        </Section>

        {/* Certificates */}
        <Section id="certificates" eyebrow="Certificates" title="Verified credentials.">
          <div className="grid gap-6 sm:grid-cols-2">
            {CERTIFICATES.map((c, idx) => (
              <Tilt key={c.title} className="rounded-2xl overflow-hidden glass ring-gradient" max={10}>
                <button onClick={() => setLightbox(idx)} className="reveal group block w-full text-left">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 transition group-hover:opacity-100 pointer-events-none`} />
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img src={c.img} alt={c.title} loading="lazy"
                      className="size-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute right-3 top-3 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold backdrop-blur shadow-glow">
                      ✓ Verified
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                  <div className="relative p-5">
                    <p className="text-xs font-medium text-primary">{c.date}</p>
                    <h3 className="mt-1 font-display text-lg">{c.title}</h3>
                    <p className="text-sm text-muted-foreground">{c.issuer}</p>
                  </div>
                </button>
              </Tilt>
            ))}
          </div>
        </Section>

        {/* Services */}
        <Section id="services" eyebrow="Services" title="How I can help.">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Tilt key={s.title} className="glass group rounded-2xl p-6" max={8}>
                <div className="mb-3 grid size-12 place-items-center rounded-xl bg-hero text-2xl shadow-glow transition group-hover:scale-110 group-hover:rotate-6">{s.icon}</div>
                <h3 className="font-display text-lg">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </Tilt>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="Contact" title="Let's build something.">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Have a project, role, or collaboration in mind? Send a message — I usually reply within 24 hours.
              </p>
              <ul className="space-y-3 text-sm">
                <li>📧 <a className="hover:text-primary" href="mailto:munibaakram112@gmail.com">munibaakram112@gmail.com</a></li>
                <li>📞 <a className="hover:text-primary" href="tel:+923098530505">+92 309 8530505</a></li>
                <li>🔗 <a className="hover:text-primary" href="https://linkedin.com/in/muniba-akram-83586b358" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li>📍 Multan, Pakistan</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold"><span className="shimmer">Muniba</span>.dev</p>
            <p className="mt-2 text-sm text-muted-foreground">Building thoughtful software at the intersection of web, AI & security.</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {navLinks.map(([l, h]) => <li key={h}><a className="hover:text-foreground" href={`#${h}`}>{l}</a></li>)}
              <li>
                <a className="inline-flex items-center gap-1 font-semibold text-gradient hover:opacity-80" href="/cv.pdf" download="Muniba-Akram-Resume.pdf">
                  ⬇ Download CV
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Connect</h4>
            <div className="flex gap-3">
              {[
                { label: "GitHub", href: "https://github.com/muniba093" },
                { label: "LinkedIn", href: "https://linkedin.com/in/muniba-akram-83586b358" },
                { label: "Email", href: "mailto:munibaakram112@gmail.com" },
                { label: "X", href: "#" },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-border bg-card/50 text-xs transition hover:bg-hero hover:text-white hover:scale-110">
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Muniba Akram. Designed & Developed by Muniba Akram.
        </p>
      </footer>

      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 grid size-12 place-items-center rounded-full bg-hero text-white shadow-glow-strong transition hover:scale-110">
          ↑
        </button>
      )}

      {/* Certificate Lightbox */}
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] grid place-items-center bg-background/90 p-4 backdrop-blur-xl animate-fade-up">
          <div onClick={(e) => e.stopPropagation()} className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-glow-strong">
            <button onClick={() => setLightbox(null)} aria-label="Close"
              className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-background/80 backdrop-blur hover:bg-background">✕</button>
            <img src={CERTIFICATES[lightbox].img} alt={CERTIFICATES[lightbox].title}
              className="max-h-[75vh] w-full object-contain bg-black/30" />
            <div className="border-t border-border p-5">
              <p className="text-xs font-medium text-primary">{CERTIFICATES[lightbox].date}</p>
              <h3 className="mt-1 font-display text-xl">{CERTIFICATES[lightbox].title}</h3>
              <p className="text-sm text-muted-foreground">{CERTIFICATES[lightbox].issuer}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="reveal py-14 md:py-18">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
        <h2 className="font-display text-3xl font-bold md:text-4xl"><span className="text-gradient">{title}</span></h2>
      </div>
      {children}
    </section>
  );
}

function Bar({ level }: { level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setW(level); });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [level]);
  return <div ref={ref} className="h-full rounded-full bg-hero transition-[width] duration-1000 ease-out" style={{ width: `${w}%` }} />;
}

function Counter({ label, value, decimals = 0 }: { label: string; value: number; decimals?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const dur = 1400;
      const tick = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        setN(value * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.disconnect();
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="glass rounded-xl p-3 text-center ring-gradient">
      <p className="font-display text-2xl font-bold text-gradient">{n.toFixed(decimals)}{decimals === 0 && value > 9 ? "+" : ""}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

// EmailJS credentials
const EMAILJS_SERVICE_ID = "service_i7n84gh";
const EMAILJS_TEMPLATE_ID = "template_1j5z5m5";
const EMAILJS_PUBLIC_KEY = "nvu_-r-AfKOOXC-xQ";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as string;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      // Primary: save to Supabase database
      const { error: dbError } = await supabase.from("contact_messages").insert({
        name: form.name,
        email: form.email,
        subject: form.subject || null,
        message: form.message,
      });
      if (dbError) throw dbError;

      // Secondary: send email via EmailJS (reliable, no spam issues)
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            name: form.name,
            from_email: form.email,
            email: form.email,
            user_email: form.email,
            subject: form.subject || `Portfolio contact from ${form.name}`,
            title: form.subject || `Portfolio contact from ${form.name}`,
            message: form.message,
            reply_to: form.email,
            to_name: "Muniba",
          },
        }),
      });

      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrors({ message: "Could not send right now. Please try again or email directly." });
    } finally {
      setSending(false);
    }
  };

  const field = "w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:shadow-glow";

  if (sent) {
    return (
      <div className="glass rounded-2xl p-8 text-center ring-gradient">
        <div className="mx-auto mb-4 grid size-16 place-items-center rounded-full bg-emerald-500/15 text-3xl animate-pulse-ring">✓</div>
        <h3 className="font-display text-2xl font-bold text-gradient">Message sent!</h3>
        <p className="mt-2 text-sm text-muted-foreground">Thanks for reaching out — I'll get back to you soon.</p>
        <button onClick={() => setSent(false)} className="mt-6 rounded-full border border-border bg-card/50 px-6 py-2 text-sm font-semibold transition hover:bg-card">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="glass space-y-3 rounded-2xl p-6 ring-gradient">
      <div>
        <input aria-label="Your name" className={field} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
      </div>
      <div>
        <input aria-label="Email" type="email" className={field} placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
      </div>
      <div>
        <input aria-label="Subject" className={field} placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} maxLength={150} />
        {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
      </div>
      <div>
        <textarea aria-label="Your message" className={`${field} min-h-32 resize-y`} placeholder="Your message (min 10 characters)" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} />
        <div className="mt-1 flex items-center justify-between">
          {errors.message ? <p className="text-xs text-red-400">{errors.message}</p> : <span />}
          <p className="text-xs text-muted-foreground">{form.message.length}/1000</p>
        </div>
      </div>
      <button type="submit" disabled={sending} className="w-full rounded-full bg-hero py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02] hover:shadow-glow-strong disabled:opacity-60 disabled:cursor-not-allowed">
        {sending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
