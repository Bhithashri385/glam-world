"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Ruler,
  Camera,
  FileText,
  MessageSquareQuote,
  CheckCircle2,
  ChevronRight,
  Upload,
  Loader2,
  Check,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { FormField, Input, Textarea, Select } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type Competition = {
  id: string;
  title: string;
  description: string;
  endDate: string;
  questions: string[];
};

type Contestant = {
  id?: string;
  fullName?: string;
  dateOfBirth?: string | null;
  age?: number | null;
  gender?: string | null;
  country?: string | null;
  city?: string | null;
  phone?: string | null;
  occupation?: string | null;
  experience?: string | null;
  height?: string | number | null;
  bio?: string | null;
  instagram?: string | null;
  portfolioUrl?: string | null;
  profileImage?: string | null;
  images?: { id: string; imageUrl: string; imageType: "FACE" | "FULL_BODY" }[];
};

const DEFAULT_QUESTIONS = [
  "Why do you want to win this competition, and how would it shape your career?",
  "If you could change one thing about today's beauty industry, what would it be and why?",
  "Describe a challenge you overcame that shaped who you are today.",
];

const MAX_WORDS = 140;

const STEPS = [
  { id: "profile", label: "Profile Details", icon: User },
  { id: "vitals", label: "Vital Stats", icon: Ruler },
  { id: "photos", label: "Photos", icon: Camera },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "questions", label: "Questions", icon: MessageSquareQuote },
  { id: "review", label: "Review & Submit", icon: CheckCircle2 },
] as const;

type StepId = (typeof STEPS)[number]["id"];

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export default function ApplyWizard({
  contestant: initialContestant,
  competitions,
  preselectedCompetitionId,
  userEmail,
  userName,
}: {
  contestant: Contestant | null;
  competitions: Competition[];
  preselectedCompetitionId?: string;
  userEmail: string;
  userName: string;
}) {
  const router = useRouter();
  const [stepId, setStepId] = useState<StepId>("profile");
  const [saving, setSaving] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [profile, setProfile] = useState<Contestant>({
    fullName: initialContestant?.fullName ?? userName ?? "",
    dateOfBirth: initialContestant?.dateOfBirth?.slice(0, 10) ?? "",
    country: initialContestant?.country ?? "",
    city: initialContestant?.city ?? "",
    phone: initialContestant?.phone ?? "",
    occupation: initialContestant?.occupation ?? "",
    instagram: initialContestant?.instagram ?? "",
    profileImage: initialContestant?.profileImage ?? "",
    height: initialContestant?.height ?? "",
    experience: initialContestant?.experience ?? "",
    bio: initialContestant?.bio ?? "",
    portfolioUrl: initialContestant?.portfolioUrl ?? "",
  });

  const [competitionId, setCompetitionId] = useState<string>(
    preselectedCompetitionId ?? competitions[0]?.id ?? "",
  );

  const selectedCompetition = useMemo(
    () => competitions.find((c) => c.id === competitionId),
    [competitions, competitionId],
  );

  const questions = useMemo(() => {
    const q = selectedCompetition?.questions ?? [];
    return q.length >= 3 ? q.slice(0, 3) : DEFAULT_QUESTIONS;
  }, [selectedCompetition]);

  const [answers, setAnswers] = useState<string[]>(["", "", ""]);

  const currentStepIdx = STEPS.findIndex((s) => s.id === stepId);
  const isLastStep = stepId === "review";

  async function saveProfile() {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/contestants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error ?? "Failed to save profile");
      }
    } finally {
      setSaving(false);
    }
  }

  async function handleNext() {
    setError(null);

    if (stepId === "profile") {
      if (!profile.fullName?.trim() || !profile.country?.trim()) {
        setError("Full name and country are required.");
        return;
      }
      try {
        await saveProfile();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Save failed");
        return;
      }
    }

    if (stepId === "vitals") {
      try {
        await saveProfile();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Save failed");
        return;
      }
    }

    if (stepId === "questions") {
      for (let i = 0; i < 3; i++) {
        const w = countWords(answers[i]);
        if (!answers[i].trim()) {
          setError(`Please answer question ${i + 1}.`);
          return;
        }
        if (w > MAX_WORDS) {
          setError(`Answer ${i + 1} is ${w} words (limit is ${MAX_WORDS}).`);
          return;
        }
      }
    }

    const next = STEPS[currentStepIdx + 1];
    if (next) setStepId(next.id);
  }

  function handleBack() {
    setError(null);
    const prev = STEPS[currentStepIdx - 1];
    if (prev) setStepId(prev.id);
  }

  async function handleSubmit() {
    setError(null);
    if (!competitionId) {
      setError("Please select a competition.");
      return;
    }
    setSubmitting(true);
    try {
      await saveProfile();
      const res = await fetch("/api/competition/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          competitionId,
          answers: questions.map((q, i) => ({ question: q, answer: answers[i] })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Application failed");
      setSuccess(true);
      setTimeout(() => router.push("/dashboard"), 1800);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-luxe glow-violet">
          <Check className="h-10 w-10 text-white" />
        </div>
        <h1 className="mt-6 font-serif text-3xl">Application Submitted</h1>
        <p className="mt-2 text-[var(--muted-foreground)]">
          Your journey has begun. Our jury will review your application soon.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="mb-6">
            <h1 className="font-serif text-2xl">Apply for Competition</h1>
            <p className="mt-1 text-sm text-[var(--muted-foreground)]">
              Complete each step to submit your application.
            </p>
          </div>
          <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1.5">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = step.id === stepId;
              const isDone = idx < currentStepIdx;
              return (
                <button
                  key={step.id}
                  onClick={() => setStepId(step.id)}
                  className={cn(
                    "flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-colors",
                    isActive
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                      : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium whitespace-nowrap">{step.label}</span>
                  {isDone && !isActive && (
                    <Check className="ml-auto h-4 w-4 text-emerald-400" />
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main */}
        <main className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 lg:p-10">
          {stepId === "profile" && (
            <StepProfile
              profile={profile}
              setProfile={setProfile}
              userEmail={userEmail}
              competitions={competitions}
              competitionId={competitionId}
              setCompetitionId={setCompetitionId}
            />
          )}
          {stepId === "vitals" && (
            <StepVitals profile={profile} setProfile={setProfile} />
          )}
          {stepId === "photos" && <StepPhotos />}
          {stepId === "documents" && <StepDocuments />}
          {stepId === "questions" && (
            <StepQuestions
              questions={questions}
              answers={answers}
              setAnswers={setAnswers}
            />
          )}
          {stepId === "review" && (
            <StepReview
              profile={profile}
              competition={selectedCompetition}
              questions={questions}
              answers={answers}
            />
          )}

          {error && (
            <div className="mt-6 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-6">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStepIdx === 0 || saving || submitting}
            >
              Back
            </Button>
            {isLastStep ? (
              <Button
                variant="luxe"
                size="lg"
                onClick={handleSubmit}
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  <>Submit Application</>
                )}
              </Button>
            ) : (
              <Button variant="luxe" onClick={handleNext} disabled={saving}>
                {saving ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Saving…
                  </>
                ) : (
                  <>
                    Save & Next
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function StepProfile({
  profile,
  setProfile,
  userEmail,
  competitions,
  competitionId,
  setCompetitionId,
}: {
  profile: Contestant;
  setProfile: (p: Contestant) => void;
  userEmail: string;
  competitions: Competition[];
  competitionId: string;
  setCompetitionId: (id: string) => void;
}) {
  return (
    <>
      <div className="mb-8">
        <h2 className="font-serif text-2xl">Profile Details</h2>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          Tell us more about yourself.
        </p>
      </div>

      <FormField label="Competition" className="mb-6">
        <Select
          value={competitionId}
          onChange={(e) => setCompetitionId(e.target.value)}
        >
          <option value="">Select a competition…</option>
          {competitions.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </Select>
      </FormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name">
          <Input
            value={profile.fullName ?? ""}
            onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
            placeholder="Ananya Sharma"
          />
        </FormField>
        <FormField label="Date of Birth">
          <Input
            type="date"
            value={(profile.dateOfBirth as string) ?? ""}
            onChange={(e) =>
              setProfile({ ...profile, dateOfBirth: e.target.value })
            }
          />
        </FormField>
        <FormField label="Email">
          <Input value={userEmail} disabled />
        </FormField>
        <FormField label="Phone">
          <Input
            value={profile.phone ?? ""}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            placeholder="+91 98765 43210"
          />
        </FormField>
        <FormField label="Country">
          <Input
            value={profile.country ?? ""}
            onChange={(e) => setProfile({ ...profile, country: e.target.value })}
            placeholder="India"
          />
        </FormField>
        <FormField label="City">
          <Input
            value={profile.city ?? ""}
            onChange={(e) => setProfile({ ...profile, city: e.target.value })}
            placeholder="Mumbai"
          />
        </FormField>
        <FormField label="Occupation">
          <Input
            value={profile.occupation ?? ""}
            onChange={(e) =>
              setProfile({ ...profile, occupation: e.target.value })
            }
            placeholder="Model"
          />
        </FormField>
        <FormField label="Instagram Handle">
          <Input
            value={profile.instagram ?? ""}
            onChange={(e) =>
              setProfile({ ...profile, instagram: e.target.value })
            }
            placeholder="@ananya_sharma"
          />
        </FormField>
      </div>
    </>
  );
}

function StepVitals({
  profile,
  setProfile,
}: {
  profile: Contestant;
  setProfile: (p: Contestant) => void;
}) {
  return (
    <>
      <div className="mb-8">
        <h2 className="font-serif text-2xl">Vital Stats</h2>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          A bit more about your modeling presence.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Height (cm)">
          <Input
            type="number"
            step="0.1"
            value={(profile.height as string) ?? ""}
            onChange={(e) => setProfile({ ...profile, height: e.target.value })}
            placeholder="175"
          />
        </FormField>
        <FormField label="Experience">
          <Select
            value={profile.experience ?? ""}
            onChange={(e) =>
              setProfile({ ...profile, experience: e.target.value })
            }
          >
            <option value="">Select…</option>
            <option value="None">None / Just starting</option>
            <option value="0-1 year">0–1 year</option>
            <option value="1-3 years">1–3 years</option>
            <option value="3-5 years">3–5 years</option>
            <option value="5+ years">5+ years</option>
          </Select>
        </FormField>
        <FormField label="Portfolio URL" className="sm:col-span-2">
          <Input
            value={profile.portfolioUrl ?? ""}
            onChange={(e) =>
              setProfile({ ...profile, portfolioUrl: e.target.value })
            }
            placeholder="https://your-portfolio.com"
          />
        </FormField>
        <FormField label="Bio / About You" className="sm:col-span-2">
          <Textarea
            rows={5}
            value={profile.bio ?? ""}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            placeholder="A short, expressive bio…"
          />
        </FormField>
      </div>
    </>
  );
}

function StepPhotos() {
  return (
    <>
      <div className="mb-8">
        <h2 className="font-serif text-2xl">Photos</h2>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          Upload your face and full-body shots. (Coming next — drag-and-drop wired in Phase 3.)
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <UploadCard label="Face Shot" />
        <UploadCard label="Full Body" />
      </div>
    </>
  );
}

function StepDocuments() {
  return (
    <>
      <div className="mb-8">
        <h2 className="font-serif text-2xl">Documents</h2>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          Optional supporting documents (ID, comp card, portfolio PDF).
        </p>
      </div>
      <UploadCard label="Upload document" />
    </>
  );
}

function UploadCard({ label }: { label: string }) {
  return (
    <div className="flex aspect-[4/5] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-[var(--border)] bg-[var(--muted)]/50 p-6 text-center transition hover:border-[var(--primary)] hover:bg-[var(--muted)]">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]">
        <Upload className="h-5 w-5" />
      </div>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-xs text-[var(--muted-foreground)]">
        JPG, PNG (max 10 MB)
      </p>
    </div>
  );
}

function StepQuestions({
  questions,
  answers,
  setAnswers,
}: {
  questions: string[];
  answers: string[];
  setAnswers: (a: string[]) => void;
}) {
  return (
    <>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-serif text-2xl">Intelligent Questions</h2>
          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
            Three questions, max {MAX_WORDS} words each.
          </p>
        </div>
        <Badge variant="ai">Personality Round</Badge>
      </div>

      <div className="space-y-6">
        {questions.map((q, i) => {
          const words = countWords(answers[i]);
          const over = words > MAX_WORDS;
          return (
            <div key={i}>
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <p className="text-sm font-medium">
                  <span className="text-gradient-gold">Q{i + 1}.</span> {q}
                </p>
              </div>
              <Textarea
                rows={5}
                value={answers[i]}
                onChange={(e) => {
                  const next = [...answers];
                  next[i] = e.target.value;
                  setAnswers(next);
                }}
                placeholder="Write your answer…"
              />
              <div className="mt-1.5 flex justify-end">
                <span
                  className={cn(
                    "text-xs",
                    over
                      ? "text-red-400"
                      : "text-[var(--muted-foreground)]",
                  )}
                >
                  {words} / {MAX_WORDS} words
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function StepReview({
  profile,
  competition,
  questions,
  answers,
}: {
  profile: Contestant;
  competition?: Competition;
  questions: string[];
  answers: string[];
}) {
  return (
    <>
      <div className="mb-8">
        <h2 className="font-serif text-2xl">Review & Submit</h2>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          Make sure everything looks right before you submit.
        </p>
      </div>

      <ReviewSection title="Competition">
        <p className="text-sm">{competition?.title ?? "—"}</p>
      </ReviewSection>

      <ReviewSection title="Profile">
        <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
          <ReviewRow label="Full Name" value={profile.fullName} />
          <ReviewRow label="Country" value={profile.country} />
          <ReviewRow label="City" value={profile.city} />
          <ReviewRow label="Phone" value={profile.phone} />
          <ReviewRow label="Occupation" value={profile.occupation} />
          <ReviewRow label="Instagram" value={profile.instagram} />
        </dl>
      </ReviewSection>

      <ReviewSection title="Vital Stats">
        <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
          <ReviewRow label="Height" value={profile.height as string} />
          <ReviewRow label="Experience" value={profile.experience} />
        </dl>
        {profile.bio && (
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            {profile.bio}
          </p>
        )}
      </ReviewSection>

      <ReviewSection title="Answers">
        <ol className="space-y-4">
          {questions.map((q, i) => (
            <li key={i}>
              <p className="text-sm font-medium">
                <span className="text-gradient-gold">Q{i + 1}.</span> {q}
              </p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)] whitespace-pre-wrap">
                {answers[i] || "—"}
              </p>
            </li>
          ))}
        </ol>
      </ReviewSection>
    </>
  );
}

function ReviewSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-6 rounded-2xl border border-[var(--border)] bg-[var(--muted)]/30 p-5">
      <h3 className="mb-3 font-serif text-base">{title}</h3>
      {children}
    </section>
  );
}

function ReviewRow({
  label,
  value,
}: {
  label: string;
  value?: string | number | null;
}) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-[var(--muted-foreground)]">{label}</dt>
      <dd className="text-right font-medium">{value || "—"}</dd>
    </div>
  );
}
