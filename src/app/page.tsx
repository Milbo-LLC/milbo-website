import Image from "next/image";
import Link from "next/link";
import { notoSansDisplay } from "./layout";

const features = [
  {
    title: "Strategy + product",
    description:
      "We clarify the roadmap, scope, and story so every sprint moves the needle.",
  },
  {
    title: "Design with taste",
    description:
      "Clean, modern UI systems built for speed, clarity, and conversion.",
  },
  {
    title: "Ship-ready engineering",
    description:
      "Next.js, Tailwind, and TypeScript with strong DX and scalable patterns.",
  },
];

const highlights = [
  "Web apps",
  "Landing pages",
  "Design systems",
  "AI workflows",
  "Growth experiments",
  "Product MVPs",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Milbo logo" width={40} height={40} />
          <span
            className={`text-lg font-semibold tracking-tight ${notoSansDisplay.className}`}
          >
            milbo
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <span>Work</span>
          <span>Services</span>
          <span>Process</span>
          <span>Contact</span>
        </nav>
        <Link
          href="#contact"
          className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition hover:border-white/60"
        >
          Book a call
        </Link>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-24">
        <section className="grid gap-12 pb-20 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/60">
              Software studio · Salem, MA
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Design-forward software that feels effortless to use.
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              Milbo helps teams move from concept to launch with crisp design,
              fast engineering, and a product mindset. We build experiences that
              look premium and ship quickly.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Start a project
              </Link>
              <Link
                href="#work"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
              >
                View recent work
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-indigo-500/30 blur-[120px]" />
            <div className="absolute -right-8 bottom-0 h-72 w-72 rounded-full bg-teal-400/20 blur-[140px]" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                  Featured
                </p>
                <h2 className="text-2xl font-semibold">
                  Launch-ready experiences in weeks, not quarters.
                </h2>
                <p className="text-sm text-white/70">
                  We work in tight, transparent sprints and share progress daily.
                  You get a high-polish product and a team that feels in-house.
                </p>
                <div className="flex items-center gap-4 text-xs text-white/60">
                  <span className="rounded-full bg-white/10 px-3 py-1">
                    Design
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1">
                    Build
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1">
                    Launch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 border-t border-white/10 py-16 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="space-y-3">
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-white/70">{feature.description}</p>
            </div>
          ))}
        </section>

        <section
          id="work"
          className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Recent collaborations
            </p>
            <h2 className="text-3xl font-semibold">
              Premium brands trust Milbo to deliver with speed and taste.
            </h2>
            <p className="text-sm text-white/70">
              From founder-led startups to growth teams, we bring high-end visual
              polish and a pragmatic shipping cadence.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-white/60">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="font-semibold text-white">Product MVP</p>
              <p>Idea to launch in 5 weeks.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="font-semibold text-white">Design system</p>
              <p>Reusable components and storybook.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="font-semibold text-white">Growth site</p>
              <p>New landing page and conversion lift.</p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 text-center"
        >
          <h2 className="text-3xl font-semibold">
            Ready to build something beautiful?
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-white/70">
            Tell us about your product and timeline. We’ll reply with a clear
            plan, estimated scope, and next steps within 48 hours.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="mailto:hello@milbo.co"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Email hello@milbo.co
            </Link>
            <Link
              href="#"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              Download capabilities deck
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Milbo" width={28} height={28} />
            <span>© {new Date().getFullYear()} Milbo LLC</span>
          </div>
          <div className="flex gap-6">
            <span>Salem, MA</span>
            <span>hello@milbo.co</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
