import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import Link from "next/link";
import {
  Crown,
  Sparkles,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowRight,
  Bell,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type StepState = "completed" | "current" | "pending";

const STEPS = [
  { id: 1, label: "Profile" },
  { id: 2, label: "Vital Stats" },
  { id: 3, label: "Questions" },
  { id: 4, label: "Review" },
  { id: 5, label: "Final" },
];

export default async function DashboardPage() {
  const session = await auth();
  const userId = session!.user!.id!;

  const contestant = await db.contestant.findUnique({
    where: { userId },
    include: {
      entries: {
        include: { competition: true, answers: true },
        orderBy: { createdAt: "desc" },
        take: 1,
      },
    },
  });

  const latestEntry = contestant?.entries[0] ?? null;

  const hasProfile = Boolean(
    contestant?.fullName && contestant?.country && contestant?.phone,
  );
  const hasVitals = Boolean(contestant?.height || contestant?.bio);
  const hasAnswers = (latestEntry?.answers.length ?? 0) >= 3;
  const isSubmitted = Boolean(latestEntry?.submittedAt);
  const isApproved = latestEntry?.status === "APPROVED";

  let currentStep = 1;
  if (hasProfile) currentStep = 2;
  if (hasProfile && hasVitals) currentStep = 3;
  if (hasProfile && hasVitals && hasAnswers) currentStep = 4;
  if (isSubmitted) currentStep = 5;
  if (isApproved) currentStep = 5;

  const stepState = (id: number): StepState => {
    if (id < currentStep) return "completed";
    if (id === currentStep) return "current";
    return "pending";
  };

  const statusLabel =
    latestEntry?.status === "APPROVED"
      ? "Approved"
      : latestEntry?.status === "REJECTED"
        ? "Not selected"
        : isSubmitted
          ? "Under Review"
          : latestEntry
            ? "In Progress"
            : "Not Applied";

  const statusTone =
    latestEntry?.status === "APPROVED"
      ? "finalist"
      : isSubmitted
        ? "trending"
        : latestEntry
          ? "ai"
          : "outline";

  const nextStep = computeNextStep({
    hasProfile,
    hasVitals,
    hasAnswers,
    isSubmitted,
    hasEntry: Boolean(latestEntry),
  });

  return (
    <div className="px-4 py-8 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl">
              Welcome,{" "}
              <span className="text-gradient-gold">
                {session!.user?.name?.split(" ")[0] ?? "there"}
              </span>
              !
            </h1>
            <p className="mt-1 text-sm text-[var(--muted-foreground)]">
              Your journey to the crown starts here.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-luxe glow-violet">
              <Crown className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium">{session!.user?.name}</p>
              <p className="text-xs text-[var(--muted-foreground)]">
                Contestant
              </p>
            </div>
          </div>
        </div>

        {/* Status + Next step row */}
        <div className="grid gap-5 md:grid-cols-2">
          <StatusCard
            status={statusLabel}
            tone={statusTone as "finalist" | "trending" | "ai" | "outline"}
            entry={latestEntry}
          />
          <NextStepCard nextStep={nextStep} />
        </div>

        {/* Progress stepper */}
        <section className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 lg:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-xl">Your Progress</h2>
            <span className="text-xs text-[var(--muted-foreground)]">
              {currentStep} of {STEPS.length}
            </span>
          </div>
          <div className="flex items-start justify-between gap-2 overflow-x-auto">
            {STEPS.map((step, idx) => {
              const state = stepState(step.id);
              const next = STEPS[idx + 1];
              return (
                <div key={step.id} className="flex flex-1 items-start gap-2">
                  <StepNode label={step.label} num={step.id} state={state} />
                  {next && (
                    <div
                      className={cn(
                        "mt-5 h-0.5 flex-1 rounded-full transition-colors",
                        state === "completed"
                          ? "bg-[var(--primary)]"
                          : "bg-[var(--border)]",
                      )}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Important updates */}
        <section className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 lg:p-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-serif text-xl">Important Updates</h2>
            <Link
              href="/dashboard/notifications"
              className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            >
              View All →
            </Link>
          </div>
          <Update
            icon={Sparkles}
            title="Intelligent Q&A round is now available"
            body="Complete it to move forward."
            time="2h ago"
            isActive={!hasAnswers && Boolean(latestEntry)}
          />
          {!latestEntry && (
            <Update
              icon={Bell}
              title="No application yet"
              body="Browse open competitions and apply to get started."
              time="—"
            />
          )}
        </section>
      </div>
    </div>
  );
}

function StatusCard({
  status,
  tone,
  entry,
}: {
  status: string;
  tone: "finalist" | "trending" | "ai" | "outline";
  entry: { competition: { title: string } } | null;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
            Application Status
          </p>
          <h3 className="mt-2 font-serif text-2xl">{status}</h3>
          {entry && (
            <p className="mt-1 text-sm text-[var(--muted-foreground)]">
              {entry.competition.title}
            </p>
          )}
        </div>
        <Badge variant={tone}>{statusIcon(status)}</Badge>
      </div>
      <div className="mt-5">
        <Link href={entry ? "/dashboard/competitions" : "/competitions"}>
          <Button variant="outline" size="sm">
            {entry ? "View Application" : "Browse Competitions"}
          </Button>
        </Link>
      </div>
    </div>
  );
}

function NextStepCard({
  nextStep,
}: {
  nextStep: { title: string; body: string; href: string; cta: string } | null;
}) {
  if (!nextStep) {
    return (
      <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-6">
        <div className="mb-3">
          <Badge variant="finalist">Complete</Badge>
        </div>
        <h3 className="font-serif text-2xl">You're all set</h3>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          Sit tight while the jury reviews your application.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--primary)]/30 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 p-6">
      <div className="mb-3 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-[var(--accent)]" />
        <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
          Next Step
        </p>
      </div>
      <h3 className="font-serif text-2xl">{nextStep.title}</h3>
      <p className="mt-1 text-sm text-[var(--muted-foreground)]">
        {nextStep.body}
      </p>
      <div className="mt-5">
        <Link href={nextStep.href}>
          <Button variant="luxe" size="sm">
            {nextStep.cta}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

function StepNode({
  num,
  label,
  state,
}: {
  num: number;
  label: string;
  state: StepState;
}) {
  return (
    <div className="flex min-w-[64px] flex-col items-center text-center">
      <div
        className={cn(
          "grid h-10 w-10 place-items-center rounded-full text-sm font-semibold transition-colors",
          state === "completed"
            ? "bg-gradient-luxe text-white glow-violet"
            : state === "current"
              ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
              : "bg-[var(--muted)] text-[var(--muted-foreground)]",
        )}
      >
        {state === "completed" ? (
          <CheckCircle2 className="h-5 w-5" />
        ) : (
          num
        )}
      </div>
      <p
        className={cn(
          "mt-2 text-[11px] sm:text-xs",
          state === "current"
            ? "text-[var(--foreground)] font-medium"
            : "text-[var(--muted-foreground)]",
        )}
      >
        {label}
      </p>
      <p className="text-[10px] text-[var(--muted-foreground)]">
        {state === "completed"
          ? "Completed"
          : state === "current"
            ? "In Progress"
            : "Pending"}
      </p>
    </div>
  );
}

function Update({
  icon: Icon,
  title,
  body,
  time,
  isActive = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  time: string;
  isActive?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 rounded-xl p-4 transition",
        isActive
          ? "bg-gradient-to-r from-[var(--primary)]/10 to-transparent"
          : "hover:bg-[var(--muted)]",
      )}
    >
      <div
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-lg",
          isActive
            ? "bg-[var(--primary)]/20 text-[var(--accent)]"
            : "bg-[var(--muted)] text-[var(--muted-foreground)]",
        )}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-0.5 text-xs text-[var(--muted-foreground)]">{body}</p>
      </div>
      <span className="text-xs text-[var(--muted-foreground)] whitespace-nowrap">
        {time}
      </span>
    </div>
  );
}

function statusIcon(status: string) {
  if (status === "Approved") return <CheckCircle2 className="h-3.5 w-3.5" />;
  if (status === "Under Review") return <Clock className="h-3.5 w-3.5" />;
  if (status === "Not Applied") return <AlertCircle className="h-3.5 w-3.5" />;
  return <Clock className="h-3.5 w-3.5" />;
}

function computeNextStep({
  hasProfile,
  hasVitals,
  hasAnswers,
  isSubmitted,
  hasEntry,
}: {
  hasProfile: boolean;
  hasVitals: boolean;
  hasAnswers: boolean;
  isSubmitted: boolean;
  hasEntry: boolean;
}) {
  if (isSubmitted) return null;
  if (!hasEntry || !hasProfile)
    return {
      title: "Start Your Application",
      body: "Complete your profile and apply for a competition.",
      href: "/competition/apply",
      cta: "Apply Now",
    };
  if (!hasVitals)
    return {
      title: "Complete Your Vital Stats",
      body: "Add height, bio and modeling experience.",
      href: "/competition/apply",
      cta: "Continue",
    };
  if (!hasAnswers)
    return {
      title: "Intelligent Q&A",
      body: "Answer our intelligent questions to showcase your personality.",
      href: "/competition/apply",
      cta: "Start Now",
    };
  return {
    title: "Review & Submit",
    body: "Review your application and submit for jury evaluation.",
    href: "/competition/apply",
    cta: "Review",
  };
}
