import Link from "next/link";
import Image from "next/image";
import { notoSansDisplay } from "../layout";

const principles = [
  {
    title: "Customer-owned teams",
    description:
      "We give customers the power to design and run their own agent teams.",
  },
  {
    title: "Infrastructure first",
    description:
      "Milbo provides compute, orchestration, and tooling—not managed services.",
  },
  {
    title: "Fast feedback loops",
    description:
      "Built-in monitoring and QA keep workflows reliable as they scale.",
  },
];

export default function AboutPage() {
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
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">About</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            An infrastructure platform for agent teams.
          </h1>
          <p className="max-w-2xl text-sm text-white/70">
            Milbo is not a managed services firm. We build the compute,
            orchestration, and tools that let customers build their own agent
            teams through intuitive conversations.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-white/70">{item.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-black/40 p-10">
          <h2 className="text-2xl font-semibold">Based in Salem, MA</h2>
          <p className="mt-2 text-sm text-white/70">
            Working with teams globally to help them build agent-powered products
            faster.
          </p>
        </section>
      </main>
    </div>
  );
}
