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

export default function ContactPage() {
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
            Let’s set up your agent teams.
          </h1>
          <p className="max-w-2xl text-sm text-white/70">
            Tell us about the teams you want to build and we’ll walk you through
            the tooling, infrastructure, and compute options behind products like{" "}
            <Link href="https://sendtask.ai" className="underline">SendTask</Link>,
            Polygon (AI-powered CAD), and Memoir (memory-first journaling).
          </p>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Start the conversation</h2>
            <p className="text-sm text-white/70">
              Share your workflow goals and we’ll outline how to configure your
              teams.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
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
                Download platform deck
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Typical response
            </p>
            <h3 className="mt-4 text-lg font-semibold">Within 48 hours</h3>
            <p className="mt-3 text-sm text-white/70">
              We’ll send recommended team structures, setup steps, and compute
              options.
            </p>
          </div>
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
      </main>
    </div>
  );
}
