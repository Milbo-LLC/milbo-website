import Link from "next/link";
import Image from "next/image";
import { notoSansDisplay } from "./layout";

const capabilities = [
  {
    title: "Portfolio mindset",
    description:
      "We build multiple SaaS products in parallel, sharing learnings across the stack.",
  },
  {
    title: "Agent-powered execution",
    description:
      "Teams of agents handle research, product, engineering, QA, and ops with human oversight.",
  },
  {
    title: "Always shipping",
    description:
      "Fast release cycles, continuous QA, and tight feedback loops keep momentum high.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Find the wedge",
    description:
      "Identify a clear pain point, validate demand, and define the MVP scope.",
  },
  {
    step: "02",
    title: "Build with agents",
    description:
      "Agent pods execute design, engineering, and QA while we oversee the strategy.",
  },
  {
    step: "03",
    title: "Launch + iterate",
    description:
      "Ship fast, learn from users, and compound improvements across the portfolio.",
  },
];

const products = [
  {
    name: "SendTask",
    href: "https://sendtask.ai",
    description:
      "Build and run agent teams with the compute, orchestration, and QA they need.",
  },
  {
    name: "Polygon",
    description: "AI-powered CAD platform for faster iteration.",
  },
  {
    name: "Memoir",
    description: "Journaling app that improves your memory.",
  },
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
              We build SaaS products using agents. So can you.
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              We build SaaS products using agents. So can you.
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              Milbo is a product company building a portfolio of SaaS tools. Our
              flagship product, <Link href="https://sendtask.ai" className="underline">SendTask</Link>,
              gives customers the compute, infrastructure, and tools to create
              their own agent teams through intuitive conversations.
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
            <div className="grid gap-4 sm:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <h3 className="text-base font-semibold">
                    {product.href ? (
                      <Link href={product.href} className="underline">
                        {product.name}
                      </Link>
                    ) : (
                      product.name
                    )}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-indigo-500/30 blur-[120px]" />
            <div className="absolute -right-8 bottom-0 h-72 w-72 rounded-full bg-teal-400/20 blur-[140px]" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                  Flagship product: SendTask
                </p>
                <h2 className="text-2xl font-semibold">
                  Build agent teams without managing infra.
                </h2>
                <p className="text-sm text-white/70">
                  SendTask lets customers design their own agent teams while we
                  provide the runtime, compute, orchestration, and QA that keep
                  everything reliable. Learn more at{" "}
                  <Link href="https://sendtask.ai" className="underline">
                    SendTask.ai
                  </Link>
                  .
                </p>
                <div className="grid gap-3 text-xs text-white/60">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                    <span>Team builder</span>
                    <span className="text-white/70">Conversation-first</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                    <span>Compute + orchestration</span>
                    <span className="text-white/70">Managed runtime</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                    <span>QA + monitoring</span>
                    <span className="text-white/70">Always-on quality</span>
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
              How we build the portfolio.
            </h2>
            <p className="text-sm text-white/70">
              Each SaaS product is backed by agent pods that help us move faster
              while maintaining quality. SendTask is the first of many.
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
            Want early access to SendTask?
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-white/70">
            Join the waitlist to help shape the first product in the Milbo
            portfolio.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://sendtask.ai"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Join the SendTask waitlist
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              Talk to Milbo
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
