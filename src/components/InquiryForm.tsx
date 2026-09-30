"use client";

import { useState } from "react";

const projectTypes = [
  "Dining / kitchen table",
  "Floating shelves",
  "Coffee / side table",
  "Bench or seating",
  "Desk or workspace",
  "Handrail / architectural",
  "Commercial / restaurant",
  "Something else",
];

const budgets = [
  "Under $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet",
];

const timelines = [
  "Flexible",
  "2–3 months",
  "1–2 months",
  "ASAP",
];

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Something went wrong");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[var(--color-border)] bg-white p-8 md:p-10">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-wood-dark)] mb-4">
          Inquiry received
        </p>
        <h3 className="text-[clamp(1.5rem,2.4vw,2rem)] font-semibold tracking-tight leading-[1.1] mb-4">
          Thanks — we&apos;ll be in touch.
        </h3>
        <p className="text-[var(--color-muted)] text-[0.95rem] leading-relaxed max-w-lg">
          We read every message personally and typically respond within 2–3 business days to discuss your
          project, measurements, and next steps. If you need something faster, feel free to call or text
          at <a href="tel:303-618-7437" className="text-[var(--color-ink)] underline underline-offset-4">303-618-7437</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      <Field label="Name" name="name" required autoComplete="name" />
      <Field label="Email" name="email" type="email" required autoComplete="email" />
      <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />

      <SelectField label="Project type" name="projectType" options={projectTypes} />
      <SelectField label="Budget range" name="budget" options={budgets} />

      <div className="md:col-span-2">
        <SelectField label="Timeline" name="timeline" options={timelines} />
      </div>

      <div className="md:col-span-2">
        <label className="block">
          <span className="block text-[0.75rem] uppercase tracking-[0.18em] text-[var(--color-muted)] mb-2">
            Tell us about your project
          </span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Dimensions, materials you're drawn to, your space, any reference photos or inspiration..."
            className="w-full border border-[var(--color-border-strong)] bg-white px-4 py-3 text-[0.95rem] text-[var(--color-ink)] placeholder:text-[var(--color-muted)]/70 focus:outline-none focus:border-[var(--color-ink)] transition-colors resize-none"
          />
        </label>
      </div>

      <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center bg-[var(--color-ink)] text-[var(--color-bg)] px-8 h-12 text-[0.85rem] font-medium tracking-wide hover:bg-[var(--color-wood-dark)] transition-colors disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send inquiry"}
        </button>
        <p className="text-[0.78rem] text-[var(--color-muted)] leading-relaxed max-w-md">
          We respect your privacy. Information you share is only used to contact you about your
          inquiry. We never sell or share your details.
        </p>
      </div>

      {status === "error" && (
        <p className="md:col-span-2 text-sm text-red-800 bg-red-50 border border-red-200 px-4 py-3">
          {error || "Couldn't send. Please try again or call us directly."}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[0.75rem] uppercase tracking-[0.18em] text-[var(--color-muted)] mb-2">
        {label}
        {required && <span className="text-[var(--color-wood-dark)] ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full border border-[var(--color-border-strong)] bg-white px-4 h-12 text-[0.95rem] text-[var(--color-ink)] placeholder:text-[var(--color-muted)]/70 focus:outline-none focus:border-[var(--color-ink)] transition-colors"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="block text-[0.75rem] uppercase tracking-[0.18em] text-[var(--color-muted)] mb-2">
        {label}
      </span>
      <div className="relative">
        <select
          name={name}
          defaultValue=""
          className="appearance-none w-full border border-[var(--color-border-strong)] bg-white px-4 h-12 pr-10 text-[0.95rem] text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-ink)] transition-colors"
        >
          <option value="" disabled>
            Select…
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </label>
  );
}
