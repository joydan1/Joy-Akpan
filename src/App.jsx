import { useMemo } from "react";

const projectsData = [
  {
    title: "Todo App",
    desc: "A responsive todo app with add/edit/delete and basic filtering.",
    stack: ["React", "CSS"],
    live: "https://to-do-app-drab-one.vercel.app/",
    github: "https://github.com/joydan1/TO-DO-APP",
  },
  {
    title: "landing page",
    desc: "A responsive landing page with modern design and smooth animations.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: " https://wid-landing-page.vercel.app/",
    github: "https://github.com/joydan1/wid?tab=readme-ov-file",
  },
  {
    title: "Stock Updates Website",
    desc: "A simple stock updates UI with searchable stock cards and layout polish.",
    stack: ["React", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Food Api",
    desc: "A React-based food app that fetches and displays meal data from an external API with a clean, responsive interface.",
    stack: ["React","API","Tailwind"],
    live: "https://food-api-jade.vercel.app/",
    github: "https://github.com/joydan1/Food-api",
  },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold tracking-wider uppercase text-gray-500">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-gray-600 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
      {children}
    </span>
  );
}

function Button({ href, variant = "solid", children }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition";
  const styles =
    variant === "solid"
      ? "bg-gray-900 text-white hover:bg-gray-800"
      : "border border-gray-300 text-gray-900 hover:bg-gray-50";
  return (
    <a className={`${base} ${styles}`} href={href}>
      {children}
    </a>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-gray-700 hover:text-gray-900"
    >
      {children}
    </a>
  );
}

export default function App() {
  const skills = useMemo(
    () => [
      { group: "Frontend", items: ["HTML", "CSS", "Tailwind", "JavaScript", "React"] },
      { group: "Frameworks", items: ["Next.js (learning)"] },
      { group: "Tools", items: ["Git/GitHub", "Postman", "Figma", "VS Code"] },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="font-bold tracking-tight">
            Joy<span className="text-gray-400">Akpan</span>
          </a>
          <nav className="hidden gap-6 sm:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="flex gap-2">
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="outline">
              Contact
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main id="top" className="mx-auto max-w-6xl px-4">
        <section className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold text-gray-700">
                Available for roles & freelance
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Frontend Developer building clean, responsive web experiences.
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed">
               Hi, I'm Joy. I work on the front end, shaping pages so they feel clear and easy to use.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="#projects">See my work</Button>
                <Button href="#contact" variant="outline">
                  Let's talk
                </Button>
                <a
                  href="https://drive.google.com/file/d/1Wb4yDn7DJ0WSXpvhBfr-uH6r8Vh2zK7f/view?usp=drive_link"
                  className="text-sm font-semibold text-gray-700 underline underline-offset-4 hover:text-gray-900"
                >
                  Download CV
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>Tailwind</Badge>
                <Badge>JavaScript</Badge>
                <Badge>UI/UX</Badge>
              </div>
            </div>

            {/* HERO CARD */}
            <div className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
              <p className="text-sm font-semibold text-gray-700">Quick Snapshot</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 border">
                  <p className="text-xs font-semibold text-gray-500">Focus</p>
                  <p className="mt-1 font-semibold">Frontend & UI</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Clean components, responsive layouts.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 border">
                  <p className="text-xs font-semibold text-gray-500">Strength</p>
                  <p className="mt-1 font-semibold">Design details</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Consistency, spacing, polish.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 border sm:col-span-2">
                  <p className="text-xs font-semibold text-gray-500">Currently Building</p>
                  <p className="mt-1 font-semibold">Portfolio + product-style UIs</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Projects with real APIs and production structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-14 border-t">
          <SectionTitle
            eyebrow="About"
            title="A little about me"
            subtitle="I enjoy turning ideas into functional, visually appealing products. I’m comfortable working independently, and I care a lot about clarity and quality."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border p-6">
              <p className="text-sm font-semibold">What I do</p>
              <p className="mt-2 text-gray-600">
                Build responsive UIs, reusable components, and clean layouts.
              </p>
            </div>
            <div className="rounded-3xl border p-6">
              <p className="text-sm font-semibold">How I work</p>
              <p className="mt-2 text-gray-600">
                Simple structure, readable code, consistent design.
              </p>
            </div>
            <div className="rounded-3xl border p-6">
              <p className="text-sm font-semibold">What I'm learning</p>
              <p className="mt-2 text-gray-600">
                Next.js patterns, API integration, and better UX flows.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-14 border-t">
          <SectionTitle
            eyebrow="Skills"
            title="Tools & technologies"
            subtitle="Grouped by what I use most. This keeps things readable and interview-friendly."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group} className="rounded-3xl border p-6">
                <p className="font-semibold">{s.group}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <Badge key={it}>{it}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-14 border-t">
          <SectionTitle
            eyebrow="Projects"
            title="Selected work"
            subtitle="Here are the sample projects i worked on."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projectsData.map((p) => (
              <article key={p.title} className="rounded-3xl border p-6">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-gray-600">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <Button href={p.live}>Live</Button>
                  <Button href={p.github} variant="outline">
                    GitHub
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-14 border-t">
          <SectionTitle
            eyebrow="Contact"
            title="Let's work together"
            subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border p-6">
              <p className="text-sm font-semibold">Email</p>
              <a className="mt-2 block text-gray-700 underline" href="mailto:joyakpandan@gmail.com">
                joyakpandan@gmail.com
                
              </a>
            </div>
            <div className="rounded-3xl border p-6">
              <p className="text-sm font-semibold">GitHub</p>
              <a className="mt-2 block text-gray-700 underline" href="https://github.com/joydan1">
                github
              </a>
            </div>
            <div className="rounded-3xl border p-6">
              <p className="text-sm font-semibold">LinkedIn</p>
              <a className="mt-2 block text-gray-700 underline" href="https://www.linkedin.com/in/joy-akpan-b3170a2b2 ">
                linkedin
              </a>
            </div>
          </div>
        </section>

        <footer className="py-10 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Joy Akpan. Built with React.</p>
        </footer>
      </main>
    </div>
  );
}
