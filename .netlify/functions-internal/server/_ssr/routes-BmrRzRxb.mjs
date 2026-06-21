import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as string, t as object } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BmrRzRxb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var supabase = { from(_table) {
	return { async insert(_payload) {
		console.warn("[stub supabase] insert called — Cloud not enabled");
		return { error: null };
	} };
} };
var CERTIFICATES = [
	{
		img: "/assets/cert-sql-BKErAALp.png",
		title: "Diploma in SQL",
		issuer: "UniAthena · Athena Global Education",
		date: "2026",
		color: "from-pink-500/30 to-fuchsia-600/30"
	},
	{
		img: "/assets/cert-skyscanner-Bw4wHo5G.jpg",
		title: "Front-End Software Engineering",
		issuer: "Skyscanner × Forage",
		date: "May 2026",
		color: "from-sky-500/30 to-blue-600/30"
	},
	{
		img: "/assets/cert-branding-BfmhkQ_m.jpg",
		title: "Branding & Design Job Simulation",
		issuer: "Forage",
		date: "Jun 2026",
		color: "from-indigo-500/30 to-violet-600/30"
	},
	{
		img: "/assets/cert-ceh-DoulPG5r.jpg",
		title: "Certified Ethical Hacker (CEH)",
		issuer: "EC-Council",
		date: "Sep 2025",
		color: "from-rose-500/30 to-red-600/30"
	},
	{
		img: "/assets/cert-python-CTPU0w8C.jpg",
		title: "Python for Beginners",
		issuer: "Simplilearn SkillUp",
		date: "Apr 2026",
		color: "from-amber-500/30 to-orange-600/30"
	}
];
var ROLES = [
	"Web Developer",
	"AI Enthusiast",
	"Ethical Hacker",
	"UI/UX Designer"
];
var SKILLS = {
	Frontend: [
		{
			name: "React / TanStack",
			level: 88
		},
		{
			name: "HTML & CSS / Tailwind",
			level: 92
		},
		{
			name: "JavaScript / TypeScript",
			level: 85
		}
	],
	Backend: [
		{
			name: "Python",
			level: 90
		},
		{
			name: "PHP & MySQL",
			level: 78
		},
		{
			name: "REST APIs",
			level: 80
		}
	],
	"UI/UX Design": [
		{
			name: "Figma",
			level: 82
		},
		{
			name: "Design Systems",
			level: 78
		},
		{
			name: "Prototyping",
			level: 80
		}
	],
	"AI Tools": [
		{
			name: "ML / NLP (Python)",
			level: 86
		},
		{
			name: "Generative & Agentic AI",
			level: 82
		},
		{
			name: "Prompt Engineering",
			level: 88
		}
	]
};
var PROJECTS = [
	{
		title: "AI Phishing Email Detector",
		desc: "ML/NLP classifier in Python achieving 90%+ accuracy on real-world phishing emails.",
		tags: [
			"Python",
			"ML",
			"NLP"
		],
		category: "AI",
		demo: "https://github.com",
		repo: "https://github.com",
		img: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=900&q=70"
	},
	{
		title: "Intelligent Pattern Recognition",
		desc: "Real-time ML pattern detection with PHP frontend and database integration. HEC Hackathon project.",
		tags: [
			"Python",
			"PHP",
			"ML"
		],
		category: "AI",
		demo: "https://github.com",
		repo: "https://github.com",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAXjtPMdHXA7jVGwsc_5nHEmh2hX0MYpilcmeLdm_dw&s=10"
	},
	{
		title: "Sky-Scanner Front-End",
		desc: "Production-ready React web app with responsive design and state management (Forage simulation).",
		tags: [
			"React",
			"JS",
			"CSS"
		],
		category: "Web",
		demo: "https://github.com",
		repo: "https://github.com",
		img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=70"
	},
	{
		title: "Portfolio Website",
		desc: "Modern responsive portfolio with glassmorphism, 3D tilt cards and smooth animations.",
		tags: ["React", "Tailwind"],
		category: "Web",
		demo: "https://github.com",
		repo: "https://github.com/muniba093/MunibaAkram-Portfolio",
		img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=70"
	}
];
var PROJECT_CATS = [
	"All",
	"Web",
	"AI"
];
var TIMELINE = [{
	date: "Apr 2026 – Present",
	title: "Career-Prep Fellow",
	org: "Amal Academy (Stanford-funded)",
	desc: "Selected from 4,500+ applicants for a 3-month fellowship developing leadership, communication, and problem-solving."
}, {
	date: "May 2026",
	title: "Front-End Software Engineering Simulation",
	org: "Skyscanner via Forage",
	desc: "Built a production-ready React Backpack web app with responsive design, component architecture and state management."
}];
var SERVICES = [
	{
		icon: "💻",
		title: "Web Development",
		desc: "Modern, performant web apps built with React and TypeScript."
	},
	{
		icon: "🎨",
		title: "Website Design",
		desc: "Clean, on-brand designs with thoughtful UX."
	},
	{
		icon: "🚀",
		title: "Landing Pages",
		desc: "High-converting landing pages with crisp copy and animations."
	},
	{
		icon: "🤖",
		title: "AI Automation",
		desc: "ML, NLP and agentic workflows to automate the tedious."
	},
	{
		icon: "⚙️",
		title: "Custom Web Apps",
		desc: "Dashboards, tools and SaaS-style products end-to-end."
	},
	{
		icon: "🛡️",
		title: "Security Audits",
		desc: "Ethical hacking & vulnerability checks (CEH certified)."
	}
];
var COUNTERS = [
	{
		label: "Projects",
		value: 12
	},
	{
		label: "Certifications",
		value: 6
	},
	{
		label: "GPA",
		value: 3.82,
		decimals: 2
	},
	{
		label: "Awards",
		value: 2
	}
];
function Tilt({ children, className = "", max = 12 }) {
	const ref = (0, import_react.useRef)(null);
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const x = (e.clientX - r.left) / r.width;
		const y = (e.clientY - r.top) / r.height;
		el.style.setProperty("--ry", `${(x - .5) * max * 2}deg`);
		el.style.setProperty("--rx", `${(.5 - y) * max * 2}deg`);
		el.style.setProperty("--mx", `${x * 100}%`);
		el.style.setProperty("--my", `${y * 100}%`);
	};
	const onLeave = () => {
		const el = ref.current;
		if (!el) return;
		el.style.setProperty("--rx", `0deg`);
		el.style.setProperty("--ry", `0deg`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		className: `card-3d relative ${className}`,
		children
	});
}
function Portfolio() {
	const [dark, setDark] = (0, import_react.useState)(true);
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [showTop, setShowTop] = (0, import_react.useState)(false);
	const [roleIdx, setRoleIdx] = (0, import_react.useState)(0);
	const [typed, setTyped] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [search, setSearch] = (0, import_react.useState)("");
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
		const isDark = stored ? stored === "dark" : true;
		setDark(isDark);
		document.documentElement.classList.toggle("dark", isDark);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", dark);
		localStorage.setItem("theme", dark ? "dark" : "light");
	}, [dark]);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setLoaded(true), 700);
		return () => clearTimeout(t);
	}, []);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShowTop(window.scrollY > 600);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const word = ROLES[roleIdx];
		let i = 0;
		let deleting = false;
		let timer;
		const tick = () => {
			if (!deleting) {
				i++;
				setTyped(word.slice(0, i));
				if (i === word.length) {
					deleting = true;
					timer = setTimeout(tick, 1400);
					return;
				}
			} else {
				i--;
				setTyped(word.slice(0, i));
				if (i === 0) {
					setRoleIdx((r) => (r + 1) % ROLES.length);
					return;
				}
			}
			timer = setTimeout(tick, deleting ? 50 : 90);
		};
		timer = setTimeout(tick, 200);
		return () => clearTimeout(timer);
	}, [roleIdx]);
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll(".reveal");
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) e.target.classList.add("in");
			});
		}, { threshold: .12 });
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, [loaded]);
	const filteredProjects = (0, import_react.useMemo)(() => {
		return PROJECTS.filter((p) => (filter === "All" || p.category === filter) && (p.title.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase())));
	}, [filter, search]);
	if (!loaded) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 grid place-items-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative size-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-conic animate-spin-slow blur-md opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-2 rounded-full bg-background grid place-items-center font-display text-xl text-gradient font-bold",
					children: "M"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.4em] text-muted-foreground",
				children: "LOADING"
			})]
		})
	});
	const navLinks = [
		["About", "about"],
		["Experience", "experience"],
		["Projects", "projects"],
		["Skills", "skills"],
		["Certificates", "certificates"],
		["Contact", "contact"]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-clip",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-32 -left-32 size-[520px] rounded-full bg-primary/30 blur-3xl animate-blob" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-1/3 -right-40 size-[560px] rounded-full bg-accent/30 blur-3xl animate-blob",
						style: { animationDelay: "4s" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-0 left-1/3 size-[440px] rounded-full bg-primary/20 blur-3xl animate-blob",
						style: { animationDelay: "8s" }
					}),
					Array.from({ length: 22 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "particle",
						style: {
							top: `${i * 53 % 100}%`,
							left: `${i * 37 % 100}%`,
							width: `${4 + i % 5 * 3}px`,
							height: `${4 + i % 5 * 3}px`,
							animationDelay: `${i * .4}s`,
							animationDuration: `${6 + i % 6}s`
						}
					}, i))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-50 glass",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#home",
							className: "font-display text-lg font-bold tracking-tight lowercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shimmer",
								children: "Muniba"
							}), "Muniba.dev"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "hidden gap-8 md:flex",
							children: navLinks.map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${h}`,
								className: "text-sm text-muted-foreground transition hover:text-foreground",
								children: l
							}) }, h))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setDark(!dark),
								"aria-label": "Toggle theme",
								className: "grid size-10 place-items-center rounded-full border border-border bg-card/50 transition hover:bg-card hover:scale-110",
								children: dark ? "☀️" : "🌙"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setMenuOpen(!menuOpen),
								"aria-label": "Menu",
								className: "grid size-10 place-items-center rounded-full border border-border bg-card/50 md:hidden",
								children: menuOpen ? "✕" : "☰"
							})]
						})
					]
				}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-1 border-t border-border px-5 py-3 md:hidden",
					children: navLinks.map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						onClick: () => setMenuOpen(false),
						href: `#${h}`,
						className: "block rounded-md px-3 py-2 text-sm hover:bg-muted",
						children: l
					}) }, h))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "home",
				className: "mx-auto max-w-7xl px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "grid gap-12 py-16 md:grid-cols-[1.2fr_1fr] md:py-24 md:items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-fade-up",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-400 animate-pulse-ring" }), " Available for projects"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-5xl font-bold leading-[1.05] md:text-7xl whitespace-nowrap",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Muniba Akram"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-xl text-muted-foreground md:text-2xl",
									children: ["I am a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "animate-caret text-foreground",
										children: typed
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-xl text-muted-foreground",
									children: "Computer Science student at Women University Multan, building modern web apps, AI tools, and security-minded software. Stanford-funded Amal Academy Fellow & CEH certified."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#projects",
											className: "rounded-full bg-hero px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.04] hover:shadow-glow-strong",
											children: "View Projects"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#contact",
											className: "rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold transition hover:bg-card hover:scale-[1.04]",
											children: "Contact Me"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "/cv.pdf",
											download: "Muniba-Akram-Resume.pdf",
											className: "rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold transition hover:bg-card hover:scale-[1.04]",
											children: "⬇ Download CV"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4",
									children: COUNTERS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { ...c }, c.label))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						id: "about",
						eyebrow: "About Me",
						title: "A short story.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"I'm a Computer Science undergraduate (GPA 3.82) at Women University Multan, passionate about the intersection of ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground font-medium",
										children: "web development, AI and cybersecurity"
									}),
									". I love building things that are useful, fast, and beautifully designed."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Recently selected from 4,500+ applicants as an Amal Academy Career-Prep Fellow (Stanford-funded), I'm investing 150+ hours in leadership and problem-solving alongside my technical work." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "pt-4 font-display text-lg text-foreground",
									children: "Education"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "ml-5 list-disc space-y-2 marker:text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: "BS Computer Science"
									}), " — Women University Multan (2023–2027), GPA 3.82"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: "FSc Pre-Medical"
									}), " — Punjab Group of Colleges, Mailsi (2021–2023)"] })]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						id: "experience",
						eyebrow: "Experience",
						title: "Journey & milestones.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "relative border-l-2 border-border pl-6 md:pl-8",
							children: TIMELINE.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "reveal mb-8 last:mb-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[9px] mt-1.5 grid size-4 place-items-center rounded-full bg-hero ring-4 ring-background animate-pulse-ring" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium text-primary",
										children: t.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-lg",
										children: t.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: t.org
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: t.desc
									})
								]
							}, t.title))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						id: "projects",
						eyebrow: "Projects",
						title: "Selected work.",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: PROJECT_CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setFilter(c),
									className: `rounded-full px-4 py-1.5 text-sm font-medium transition ${filter === c ? "bg-hero text-white shadow-glow" : "border border-border bg-card/50 text-muted-foreground hover:text-foreground"}`,
									children: c
								}, c))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: search,
								onChange: (e) => setSearch(e.target.value),
								placeholder: "🔍 Search projects...",
								className: "w-full rounded-full border border-border bg-card/50 px-4 py-2 text-sm outline-none transition focus:border-primary sm:w-64"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
							children: [filteredProjects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tilt, {
								className: "group flex flex-col overflow-hidden rounded-2xl glass ring-gradient",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[16/10] overflow-hidden bg-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.img,
										alt: p.title,
										loading: "lazy",
										className: "size-full object-cover transition duration-700 group-hover:scale-110"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-lg",
											children: p.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 flex-1 text-sm text-muted-foreground",
											children: p.desc
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 flex flex-wrap gap-1.5",
											children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground",
												children: t
											}, t))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: p.demo,
												className: "flex-1 rounded-full bg-hero py-2 text-center text-xs font-semibold text-white",
												children: "Live Demo"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: p.repo,
												className: "flex-1 rounded-full border border-border py-2 text-center text-xs font-semibold",
												children: "GitHub"
											})]
										})
									]
								})]
							}, p.title)), filteredProjects.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "No projects found."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						id: "skills",
						eyebrow: "Skills",
						title: "Things I'm good at.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 md:grid-cols-2",
							children: Object.entries(SKILLS).map(([cat, list]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tilt, {
								className: "glass rounded-2xl p-6",
								max: 6,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mb-5 font-display text-lg",
									children: cat
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-4",
									children: list.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-1.5 flex justify-between text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground",
											children: s.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted-foreground",
											children: [s.level, "%"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-2 overflow-hidden rounded-full bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, { level: s.level })
									})] }, s.name))
								})]
							}, cat))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						id: "certificates",
						eyebrow: "Certificates",
						title: "Verified credentials.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 sm:grid-cols-2",
							children: CERTIFICATES.map((c, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tilt, {
								className: "rounded-2xl overflow-hidden glass ring-gradient",
								max: 10,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setLightbox(idx),
									className: "reveal group block w-full text-left",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 transition group-hover:opacity-100 pointer-events-none` }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-[4/3] overflow-hidden bg-muted",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: c.img,
													alt: c.title,
													loading: "lazy",
													className: "size-full object-cover transition duration-700 group-hover:scale-110"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute right-3 top-3 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold backdrop-blur shadow-glow",
													children: "✓ Verified"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-medium text-primary",
													children: c.date
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-1 font-display text-lg",
													children: c.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm text-muted-foreground",
													children: c.issuer
												})
											]
										})
									]
								})
							}, c.title))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						id: "services",
						eyebrow: "Services",
						title: "How I can help.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
							children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tilt, {
								className: "glass group rounded-2xl p-6",
								max: 8,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-3 grid size-12 place-items-center rounded-xl bg-hero text-2xl shadow-glow transition group-hover:scale-110 group-hover:rotate-6",
										children: s.icon
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: s.desc
									})
								]
							}, s.title))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						id: "contact",
						eyebrow: "Contact",
						title: "Let's build something.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-8 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Have a project, role, or collaboration in mind? Send a message — I usually reply within 24 hours."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["📧 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "hover:text-primary",
											href: "mailto:munibaakram112@gmail.com",
											children: "munibaakram112@gmail.com"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["📞 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "hover:text-primary",
											href: "tel:+923098530505",
											children: "+92 309 8530505"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["🔗 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "hover:text-primary",
											href: "https://linkedin.com/in/muniba-akram-83586b358",
											target: "_blank",
											rel: "noreferrer",
											children: "LinkedIn"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "📍 Multan, Pakistan" })
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-16 border-t border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-lg font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shimmer",
								children: "Muniba"
							}), "Muniba.dev"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Building thoughtful software at the intersection of web, AI & security."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-3 text-sm font-semibold",
							children: "Quick Links"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm text-muted-foreground",
							children: [navLinks.map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:text-foreground",
								href: `#${h}`,
								children: l
							}) }, h)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "inline-flex items-center gap-1 font-semibold text-gradient hover:opacity-80",
								href: "/cv.pdf",
								download: "Muniba-Akram-Resume.pdf",
								children: "⬇ Download CV"
							}) })]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-3 text-sm font-semibold",
							children: "Connect"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-3",
							children: [
								{
									label: "GitHub",
									href: "https://github.com/muniba093"
								},
								{
									label: "LinkedIn",
									href: "https://linkedin.com/in/muniba-akram-83586b358"
								},
								{
									label: "Email",
									href: "mailto:munibaakram112@gmail.com"
								},
								{
									label: "X",
									href: "#"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: s.href,
								"aria-label": s.label,
								className: "grid size-10 place-items-center rounded-full border border-border bg-card/50 text-xs transition hover:bg-hero hover:text-white hover:scale-110",
								children: s.label[0]
							}, s.label))
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "border-t border-border py-5 text-center text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Muniba Akram. Designed & Developed by Muniba Akram."
					]
				})]
			}),
			showTop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => window.scrollTo({
					top: 0,
					behavior: "smooth"
				}),
				"aria-label": "Scroll to top",
				className: "fixed bottom-6 right-6 z-50 grid size-12 place-items-center rounded-full bg-hero text-white shadow-glow-strong transition hover:scale-110",
				children: "↑"
			}),
			lightbox !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onClick: () => setLightbox(null),
				className: "fixed inset-0 z-[100] grid place-items-center bg-background/90 p-4 backdrop-blur-xl animate-fade-up",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onClick: (e) => e.stopPropagation(),
					className: "relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-glow-strong",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLightbox(null),
							"aria-label": "Close",
							className: "absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-background/80 backdrop-blur hover:bg-background",
							children: "✕"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: CERTIFICATES[lightbox].img,
							alt: CERTIFICATES[lightbox].title,
							className: "max-h-[75vh] w-full object-contain bg-black/30"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-primary",
									children: CERTIFICATES[lightbox].date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-xl",
									children: CERTIFICATES[lightbox].title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: CERTIFICATES[lightbox].issuer
								})
							]
						})
					]
				})
			})
		]
	});
}
function Section({ id, eyebrow, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "reveal py-14 md:py-18",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-sm font-semibold uppercase tracking-widest text-primary",
				children: eyebrow
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-bold md:text-4xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: title
				})
			})]
		}), children]
	});
}
function Bar({ level }) {
	const ref = (0, import_react.useRef)(null);
	const [w, setW] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const io = new IntersectionObserver(([e]) => {
			if (e.isIntersecting) setW(level);
		});
		if (ref.current) io.observe(ref.current);
		return () => io.disconnect();
	}, [level]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "h-full rounded-full bg-hero transition-[width] duration-1000 ease-out",
		style: { width: `${w}%` }
	});
}
function Counter({ label, value, decimals = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const io = new IntersectionObserver(([e]) => {
			if (!e.isIntersecting) return;
			const start = performance.now();
			const dur = 1400;
			const tick = (t) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "glass rounded-xl p-3 text-center ring-gradient",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-display text-2xl font-bold text-gradient",
			children: [n.toFixed(decimals), decimals === 0 && value > 9 ? "+" : ""]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: label
		})]
	});
}
var contactSchema = object({
	name: string().trim().min(2, "Name must be at least 2 characters").max(100),
	email: string().trim().email("Please enter a valid email").max(255),
	subject: string().trim().min(3, "Subject must be at least 3 characters").max(150),
	message: string().trim().min(10, "Message must be at least 10 characters").max(1e3)
});
var EMAILJS_SERVICE_ID = "service_i7n84gh";
var EMAILJS_TEMPLATE_ID = "template_1j5z5m5";
var EMAILJS_PUBLIC_KEY = "nvu_-r-AfKOOXC-xQ";
function ContactForm() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	const [sending, setSending] = (0, import_react.useState)(false);
	const submit = async (ev) => {
		ev.preventDefault();
		const parsed = contactSchema.safeParse(form);
		if (!parsed.success) {
			const fieldErrors = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
			}
			setErrors(fieldErrors);
			return;
		}
		setErrors({});
		setSending(true);
		try {
			const { error: dbError } = await supabase.from("contact_messages").insert({
				name: form.name,
				email: form.email,
				subject: form.subject || null,
				message: form.message
			});
			if (dbError) throw dbError;
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
						to_name: "Muniba"
					}
				})
			});
			setSent(true);
			setForm({
				name: "",
				email: "",
				subject: "",
				message: ""
			});
		} catch {
			setErrors({ message: "Could not send right now. Please try again or email directly." });
		} finally {
			setSending(false);
		}
	};
	const field = "w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:shadow-glow";
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-2xl p-8 text-center ring-gradient",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mb-4 grid size-16 place-items-center rounded-full bg-emerald-500/15 text-3xl animate-pulse-ring",
				children: "✓"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl font-bold text-gradient",
				children: "Message sent!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Thanks for reaching out — I'll get back to you soon."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setSent(false),
				className: "mt-6 rounded-full border border-border bg-card/50 px-6 py-2 text-sm font-semibold transition hover:bg-card",
				children: "Send another message"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		noValidate: true,
		className: "glass space-y-3 rounded-2xl p-6 ring-gradient",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				"aria-label": "Your name",
				className: field,
				placeholder: "Your name",
				value: form.name,
				onChange: (e) => setForm({
					...form,
					name: e.target.value
				}),
				maxLength: 100
			}), errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-red-400",
				children: errors.name
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				"aria-label": "Email",
				type: "email",
				className: field,
				placeholder: "Email",
				value: form.email,
				onChange: (e) => setForm({
					...form,
					email: e.target.value
				}),
				maxLength: 255
			}), errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-red-400",
				children: errors.email
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				"aria-label": "Subject",
				className: field,
				placeholder: "Subject",
				value: form.subject,
				onChange: (e) => setForm({
					...form,
					subject: e.target.value
				}),
				maxLength: 150
			}), errors.subject && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-red-400",
				children: errors.subject
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				"aria-label": "Your message",
				className: `${field} min-h-32 resize-y`,
				placeholder: "Your message (min 10 characters)",
				value: form.message,
				onChange: (e) => setForm({
					...form,
					message: e.target.value
				}),
				maxLength: 1e3
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 flex items-center justify-between",
				children: [errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-red-400",
					children: errors.message
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [form.message.length, "/1000"]
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: sending,
				className: "w-full rounded-full bg-hero py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02] hover:shadow-glow-strong disabled:opacity-60 disabled:cursor-not-allowed",
				children: sending ? "Sending…" : "Send Message"
			})
		]
	});
}
//#endregion
export { Portfolio as component };
