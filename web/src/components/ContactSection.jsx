import { useState } from "react";
import { toast } from "sonner";
import { Bow } from "./Bow";
import Reveal from "./Reveal";
import { PROFILE } from "@/data/portfolio";

export const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data.error === "email_not_configured") {
          toast.error("Contact form is not configured yet — email me directly.");
        } else {
          toast.error("Could not send your message. Try again or email me directly.");
        }
        return;
      }
      setSent(true);
      toast.success("Message sent — thank you. I'll be in touch soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Could not send your message. Try again or email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-24 md:py-32 bg-bone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <Bow size={14} />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
              06 · contact
            </span>
          </div>
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tighter text-ink">
            Get in touch.
            <br />
            <em className="not-italic text-burgundy">Happy to hear from you.</em>
          </h2>
          <div className="mt-10 space-y-4 font-mono text-sm text-ink">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-mute">Email</p>
              <a href={`mailto:${PROFILE.email}`} className="lnk text-ink hover:text-burgundy">
                {PROFILE.email}
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-mute">Phone</p>
              <span>{PROFILE.phone}</span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-mute">Location</p>
              <span>{PROFILE.workPreference}</span>
            </div>
          </div>
        </Reveal>

        <Reveal as="form" delay={0.1} className="md:col-span-7 space-y-6" onSubmit={onSubmit} data-testid="contact-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">Name</span>
              <input
                data-testid="contact-name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-burgundy outline-none py-2 font-mono text-sm text-ink"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">Email</span>
              <input
                data-testid="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-burgundy outline-none py-2 font-mono text-sm text-ink"
              />
            </label>
          </div>

          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">Message</span>
            <textarea
              data-testid="contact-message"
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={6}
              className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-burgundy outline-none py-2 font-mono text-sm text-ink resize-none"
            />
          </label>

          <div className="flex items-center justify-between pt-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
              {sent ? "✓ sent · thank you" : "I'll reply as soon as I can"}
            </p>
            <button
              type="submit"
              data-testid="contact-submit"
              disabled={submitting}
              className="font-mono text-xs uppercase tracking-[0.18em] bg-burgundy text-[#F5F1EB] px-6 py-3 hover:bg-ink transition-colors disabled:opacity-50"
            >
              {submitting ? "Sending…" : "Send →"}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
