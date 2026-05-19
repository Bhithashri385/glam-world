import Link from "next/link";
import { Crown, Sparkles, Users, Globe2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const STATS = [
  { value: "10K+", label: "Applicants", icon: Users },
  { value: "120+", label: "Countries", icon: Globe2 },
  { value: "50+", label: "Finalists", icon: Sparkles },
  { value: "1", label: "Crown", icon: Crown },
];

const FEATURES = [
  {
    title: "Public Voting",
    desc: "Let the world decide. Fans vote for their favourite contestants in real time.",
  },
  {
    title: "Jury Scoring",
    desc: "Expert judges score contestants on presentation, confidence, styling, and more.",
  },
  {
    title: "AI Judge",
    desc: "Cutting-edge AI analyzes pose, fashion, articulation and personality.",
  },
];

export default async function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Beauty · Confidence · Grace
            </p>
            <h1 className="font-serif text-5xl leading-tight tracking-tight sm:text-6xl">
              <span className="text-gradient-gold">Where Beauty</span>
              <br />
              Meets Brilliance
            </h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              A Global Stage for Every Dream
            </p>
            <p className="mt-6 max-w-xl text-base text-[var(--muted-foreground)]">
              GlamWorldFace celebrates elegance, confidence and intelligence.
              Join competitions, get discovered by expert juries, and let the
              world vote for you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/competition/apply">
                <Button variant="luxe" size="lg">
                  Apply Now
                </Button>
              </Link>
              <Link href="/competitions">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/60 p-4 backdrop-blur-sm"
                >
                  <Icon className="mb-2 h-4 w-4 text-[var(--accent)]" />
                  <p className="font-serif text-2xl text-gradient-gold">
                    {value}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--muted-foreground)]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image placeholder — swap with real image at /public/brand/hero-model.jpg */}
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md lg:max-w-none">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--primary)]/30 via-transparent to-[var(--accent)]/20 blur-3xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--primary)]/20 to-[var(--card)]">
              <div className="flex h-full w-full flex-col items-center justify-center text-center p-8">
                <Crown
                  className="h-16 w-16 text-[var(--accent)] glow-gold mb-4"
                  strokeWidth={1.5}
                />
                <p className="font-serif text-lg text-[var(--muted-foreground)]">
                  Crown Awaits
                </p>
                <p className="mt-1 text-xs text-[var(--muted-foreground)]/60">
                  Hero image goes here
                </p>
              </div>
              {/* Sparkles */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-[var(--accent)] glow-gold" />
                <div className="absolute right-1/3 top-1/2 h-1.5 w-1.5 rounded-full bg-white/80" />
                <div className="absolute bottom-1/4 left-1/2 h-1 w-1 rounded-full bg-[var(--accent)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-[var(--border)] bg-[var(--card)]/40">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              How It Works
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Three Ways to Shine
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {FEATURES.map(({ title, desc }, i) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:border-[var(--primary)]/50"
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-gradient-luxe text-white shadow-md">
                  <Trophy className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl">{title}</h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {desc}
                </p>
                <span className="absolute right-5 top-5 text-xs text-[var(--muted-foreground)]/40">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
