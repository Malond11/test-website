"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";
import { services } from "@/lib/data";
import { Button } from "./Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    return newErrors;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-12 text-center shadow-md">
        <CheckCircle className="mb-4 h-16 w-16 text-accent" />
        <h3 className="font-display text-2xl font-bold text-warm-900">
          Thank You!
        </h3>
        <p className="mt-2 text-warm-800/70">
          We&apos;ve received your message and will get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-8 shadow-md"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-semibold text-warm-800"
        >
          Name *
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-lg border border-warm-200 p-3 transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-semibold text-warm-800"
        >
          Email *
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-lg border border-warm-200 p-3 transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1 block text-sm font-semibold text-warm-800"
        >
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full rounded-lg border border-warm-200 p-3 transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-1 block text-sm font-semibold text-warm-800"
        >
          Service Type
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full rounded-lg border border-warm-200 bg-white p-3 transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-semibold text-warm-800"
        >
          Message *
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-lg border border-warm-200 p-3 transition-colors focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
          placeholder="Tell us about your cleaning needs..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full gap-2">
        <Send className="h-4 w-4" />
        Send Message
      </Button>
    </form>
  );
}
