import Link from "next/link";
import Image from "next/image";
import { notoSansDisplay } from "./layout";

const capabilities = [
  {
    title: "Launch-ready in days",
    description:
      "Skip months of infra work—spin up agent teams with built-in tooling and guardrails.",
  },
  {
    title: "Reliability by default",
    description:
      "Automated QA, monitoring, and instant issue routing keep workflows stable.",
  },
  {
    title: "Scale without rewrites",
    description:
      "Compute and orchestration scale as teams grow, without rebuilding pipelines.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Design the team",
    description:
      "Describe the outcome, define roles, and spin up the right mix of agents in minutes.",
  },
  {
    step: "02",
    title: "Run the workflow",
    description:
      "Agents coordinate across research, product, engineering, QA, and ops with built-in guardrails.",
  },
  {
    step: "03",
    title: "Ship continuously",
    description:
      "Push features, catch regressions, and keep improving with real-time feedback loops.",
  },
];

const useCases = [
  "SaaS product teams",
  "AI-native workflows",
  "Internal tooling",
  "Growth experiments",
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
          <Link href="/platform">Platform</Link>
          <Link href="/process">Process</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition hover:border-white/60"
        >
          Book a call
        </Link>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-24">
        <section className="grid gap-12 pb-20 pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/60">
              Agent team infrastructure
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Launch agent teams in days, not months.
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              Milbo is the infrastructure layer that turns a workflow idea into
              a running agent team—complete with compute, orchestration, QA, and
              monitoring. You design the team. We make it reliable and scalable.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Start a project
              </Link>
              <Link
                href="/process"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
              >
                See the workflow
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
              {useCases.map((item) => (
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
                  Agent teams, not managed services
                </p>
                <h2 className="text-2xl font-semibold">
                  Turn workflows into production-grade agent teams.
                </h2>
                <p className="text-sm text-white/70">
                  Milbo handles the hard parts—compute, orchestration, QA, and
                  monitoring—so your teams launch faster and stay reliable as
                  they scale.
                </p>
                <div className="grid gap-3 text-xs text-white/60">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                    <span>Team builder</span>
                    <span className="text-white/70">Prompt-based setup</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                    <span>Compute + orchestration</span>
                    <span className="text-white/70">Always-on runtime</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                    <span>Quality signals</span>
                    <span className="text-white/70">QA + monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 border-t border-white/10 py-16 md:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item.title} className="space-y-3">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-white/70">{item.description}</p>
            </div>
          ))}
        </section>

        <section
          id="process"
          className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              How it works
            </p>
            <h2 className="text-3xl font-semibold">
              The fastest path to reliable agent operations.
            </h2>
            <p className="text-sm text-white/70">
              You own the workflow and team design. Milbo delivers the runtime,
              testing, and monitoring that make agent teams dependable in
              production.
            </p>
          </div>
          <div className="grid gap-4">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-black/40 p-4"
              >
                <div className="flex items-center justify-between text-xs uppercase text-white/50">
                  <span>{item.step}</span>
                  <span>{item.title}</span>
                </div>
                <p className="mt-3 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 text-center">
          <h2 className="text-3xl font-semibold">
            Ready to build your first agent team?
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-white/70">
            We’ll show you how to design the right team, set up workflows, and
            keep shipping reliably.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Talk to Milbo
            </Link>
            <Link
              href="/platform"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              Explore platform
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
