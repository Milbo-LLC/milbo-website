import Link from "next/link";
import Image from "next/image";
import { notoSansDisplay } from "../layout";

const steps = [
  {
    title: "Discovery sprint",
    description:
      "Align on the problem, market, and business goals. Deliverable: scope, roadmap, and timeline.",
  },
  {
    title: "Agent pod setup",
    description:
      "We configure specialized agents for research, design, engineering, QA, and ops.",
  },
  {
    title: "Build in parallel",
    description:
      "Design, engineering, and QA move together with daily updates and weekly releases.",
  },
  {
    title: "Launch + iterate",
    description:
      "Monitoring, feedback loops, and continuous improvements to keep shipping.",
  },
];

export default function ProcessPage() {
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
          <Link href="/services">Services</Link>
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
            Process
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            A reliable system for shipping fast.
          </h1>
          <p className="max-w-2xl text-sm text-white/70">
            We combine AI agent throughput with senior decision-making to keep
            your roadmap moving without sacrificing quality.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Step 0{index + 1}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-white/70">{step.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-black/40 p-10">
          <h2 className="text-2xl font-semibold">Delivery cadence</h2>
          <p className="mt-2 text-sm text-white/70">
            Weekly releases, daily updates, and proactive monitoring to keep
            stakeholders aligned and products stable.
          </p>
        </section>
      </main>
    </div>
  );
}
