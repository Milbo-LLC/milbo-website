import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { notoSansDisplay } from "./layout";

const capabilities = [
  {
    title: "Portfolio execution",
    description: "We run multiple SaaS tracks in parallel with shared infra and repeatable playbooks.",
  },
  {
    title: "Agent operating system",
    description: "Dedicated agent pods handle research, engineering, QA, and ops with tight oversight.",
  },
  {
    title: "Release discipline",
    description: "Short cycles, measurable quality gates, and a bias toward shipping.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Define the wedge",
    description: "Confirm the pain, scope the MVP, and lock the success metrics.",
  },
  {
    step: "02",
    title: "Build with agents",
    description: "Pods execute design, build, and QA while we steer product strategy.",
  },
  {
    step: "03",
    title: "Launch + compound",
    description: "Ship, learn, and iterate across the portfolio with shared momentum.",
  },
];

const products = [
  {
    name: "SendTask",
    href: "https://sendtask.ai",
    description: "Agent team builder with managed runtime, orchestration, and QA.",
  },
  {
    name: "Polygon",
    description: "AI-assisted CAD for faster iteration and clearer handoffs.",
  },
  {
    name: "Memoir",
    description: "Memory-first journaling that turns notes into recallable insights.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Milbo logo" width={40} height={40} />
          <span className={cn("text-lg font-semibold tracking-tight", notoSansDisplay.className)}>
            milbo
          </span>
        </div>
        <div className="hidden text-xs uppercase tracking-[0.3em] text-white/60 lg:block">
          We build with agents. So can you.
        </div>
        <Link
          href="https://sendtask.ai"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }),
            "rounded-full border-white/20 bg-transparent text-white hover:border-white/60 hover:bg-white/5")}
        >
          SendTask.ai
        </Link>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-24">
        <section className="grid gap-12 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <Badge className="border-white/15 bg-white/5 text-white/70">
              Product studio
            </Badge>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              We build with agents. So can you.
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              Milbo is a product studio building SaaS companies with agent teams. Our flagship product,
              {" "}
              <Link href="https://sendtask.ai" className="underline">
                SendTask
              </Link>
              , gives builders the compute, orchestration, and QA they need to run reliable agent pods.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-white text-black hover:bg-white/90")}
              >
                Start a project
              </Link>
              <Link
                href="/#process"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full border-white/20 text-white hover:border-white/60 hover:bg-white/5")}
              >
                See the workflow
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {products.map((product) => (
                <Card key={product.name} className="border-white/10 bg-white/5 text-white">
                  <CardHeader>
                    <CardTitle className="text-base">
                      {product.href ? (
                        <Link href={product.href} className="underline">
                          {product.name}
                        </Link>
                      ) : (
                        product.name
                      )}
                    </CardTitle>
                    <CardDescription className="text-white/60">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-indigo-500/25 blur-[120px]" />
            <div className="absolute -right-8 bottom-0 h-72 w-72 rounded-full bg-teal-400/15 blur-[140px]" />
            <Card className="relative overflow-hidden border-white/10 bg-white/5 text-white">
              <CardHeader>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Flagship: SendTask
                </p>
                <CardTitle className="text-2xl">Build agent teams without managing infra.</CardTitle>
                <CardDescription className="text-white/60">
                  SendTask provides the runtime, compute, orchestration, and QA layer so teams can focus on
                  outcomes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-xs text-white/60">
                {[
                  ["Team builder", "Conversation-first"],
                  ["Compute + orchestration", "Managed runtime"],
                  ["QA + monitoring", "Always-on quality"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                  >
                    <span>{label}</span>
                    <span className="text-white/70">{value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
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
          className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">How it works</p>
            <h2 className="text-3xl font-semibold">A clear, repeatable build system.</h2>
            <p className="text-sm text-white/70">
              We combine agent pods with product leadership to ship quickly without losing quality.
            </p>
          </div>
          <div className="grid gap-4">
            {workflow.map((item) => (
              <Card key={item.step} className="border-white/10 bg-black/40 text-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between text-xs uppercase text-white/50">
                    <span>{item.step}</span>
                    <span>{item.title}</span>
                  </div>
                  <CardDescription className="text-white/70">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 text-center">
          <h2 className="text-3xl font-semibold">Want early access to SendTask?</h2>
          <p className="mx-auto max-w-2xl text-sm text-white/70">
            Join the waitlist and help shape the first product in the Milbo portfolio.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://sendtask.ai"
              className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-white text-black hover:bg-white/90")}
            >
              Join the SendTask waitlist
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-white/20 text-white hover:border-white/60 hover:bg-white/5")}
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
