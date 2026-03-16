import Link from "next/link";
import Image from "next/image";
import { notoSansDisplay } from "../layout";

const steps = [
  {
    title: "Define the mission",
    description:
      "Outline the outcome and constraints so the right agents can be composed.",
  },
  {
    title: "Compose the team",
    description:
      "Use Milbo tools to assign roles, workflows, and tool access in minutes.",
  },
  {
    title: "Run + monitor",
    description:
      "Agents execute with continuous QA, logging, and performance checks.",
  },
  {
    title: "Ship + refine",
    description:
      "Deliver features continuously while refining the workflows with real feedback.",
  },
];

const products = [
  {
    name: "SendTask",
    href: "https://sendtask.ai",
    description: "Agent teams platform powered by Milbo infrastructure.",
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
            We build SaaS products using agents. So can you.
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Build agent teams with intuitive tools.
          </h1>
          <p className="max-w-2xl text-sm text-white/70">
            Milbo gives your customers the platform to build their own teams. We
            provide the infrastructure and compute so workflows stay reliable.
            The same system powers <Link href="https://sendtask.ai" className="underline">SendTask</Link>,
            Polygon (AI-powered CAD), and Memoir (memory-first journaling).
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

        <section className="mt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Products in progress
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-lg font-semibold">
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
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-black/40 p-10">
          <h2 className="text-2xl font-semibold">Always-on infrastructure</h2>
          <p className="mt-2 text-sm text-white/70">
            We focus on runtime, orchestration, and monitoring so your teams can
            focus on outcomes.
          </p>
        </section>
      </main>
    </div>
  );
}
