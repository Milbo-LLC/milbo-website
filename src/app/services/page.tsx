import Link from "next/link";
import Image from "next/image";
import { notoSansDisplay } from "../layout";

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

const services = [
  {
    title: "Agent-led product strategy",
    description:
      "Discovery, positioning, and roadmap definition powered by research agents and senior product leads.",
  },
  {
    title: "Design + content systems",
    description:
      "UI/UX, design systems, and crisp product copy built in parallel with engineering.",
  },
  {
    title: "Engineering + QA",
    description:
      "Full-stack delivery, automated testing, and continuous integration with human oversight.",
  },
  {
    title: "Launch + growth ops",
    description:
      "Release planning, monitoring, analytics, and growth experiments to keep momentum.",
  },
];

export default function ServicesPage() {
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
            We build SaaS products using agents. So can you.
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            End-to-end delivery with agent teams.
          </h1>
          <p className="max-w-2xl text-sm text-white/70">
            We assemble dedicated agent pods to cover the entire lifecycle—from
            strategy to launch—so your team can move faster without adding headcount.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm text-white/70">
                {service.description}
              </p>
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
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">
                Want a tailored agent pod?
              </h2>
              <p className="mt-2 text-sm text-white/70">
                Tell us your goals and we’ll design the right mix of agents and
                operators.
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
