import Link from "next/link";
import Image from "next/image";
import { notoSansDisplay } from "../layout";

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
            Contact
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Let’s build your next release.
          </h1>
          <p className="max-w-2xl text-sm text-white/70">
            Tell us what you’re shipping and we’ll reply with a clear plan,
            timeline, and the agent pod we’d assemble.
          </p>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Start the conversation</h2>
            <p className="text-sm text-white/70">
              Send a quick note about your product, scope, and timeline.
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
                Download capabilities deck
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Typical response
            </p>
            <h3 className="mt-4 text-lg font-semibold">Within 48 hours</h3>
            <p className="mt-3 text-sm text-white/70">
              We’ll outline a scope, delivery cadence, and the agent pod
              composition that best fits your roadmap.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
