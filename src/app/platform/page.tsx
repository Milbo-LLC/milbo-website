import Link from "next/link";
import Image from "next/image";
import { notoSansDisplay } from "../layout";

const platformFeatures = [
  {
    title: "Team builder",
    description:
      "Assemble agent teams in minutes using natural language and reusable templates.",
  },
  {
    title: "Compute + orchestration",
    description:
      "We handle scheduling, runtime, and secure execution so teams can scale safely.",
  },
  {
    title: "Quality + monitoring",
    description:
      "Automated tests, performance checks, and alerting keep every workflow healthy.",
  },
  {
    title: "Tooling layer",
    description:
      "Connect internal systems, docs, and APIs so agents have the context they need.",
  },
];

export default function PlatformPage() {
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
        <section className="space-y-6 pb-16 pt-12">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Platform
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            The infrastructure layer for agent teams.
          </h1>
          <p className="max-w-2xl text-sm text-white/70">
            Milbo gives your customers the tools to build and run their own agent
            teams. We provide the compute, orchestration, and guardrails—not a
            managed services layer.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {platformFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm text-white/70">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-black/40 p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Build the team your way</h2>
              <p className="mt-2 text-sm text-white/70">
                Configure roles, rules, and tooling in conversations. We power
                the infrastructure that keeps it reliable.
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Talk to us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
