"use client";

import { useState } from "react";

export default function BookSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: (formData.get("email") as string) || "",
      message: (formData.get("message") as string) || "",
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Failed to send. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="book" className="bg-primary-700 py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 text-center text-white sm:px-6">
          <h2 className="text-2xl font-bold">Salamat po!</h2>
          <p className="mt-3">
            We received your details. Our team will contact you shortly to confirm your booking.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="bg-primary-700 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Book a Service
          </h2>
          <p className="mt-3 text-primary-100">
            Tell us your need and we&apos;ll get back to you with a quote.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-10 rounded-xl bg-white p-6 shadow-lg sm:p-8">
          {error && (
            <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={loading}
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:opacity-60"
                placeholder="Juan Dela Cruz"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                disabled={loading}
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:opacity-60"
                placeholder="09XX XXX XXXX"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email (optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                disabled={loading}
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:opacity-60"
                placeholder="juan@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                What do you need?
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                disabled={loading}
                className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:opacity-60"
                placeholder="e.g. General cleaning for 2 split-type units in Mandaluyong"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-primary-600 px-4 py-3 font-semibold text-white transition hover:bg-primary-700 disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send request"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
