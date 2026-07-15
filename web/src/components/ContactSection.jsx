import { useRef, useState } from "react";
import { toast } from "sonner";
import { Bow } from "./Bow";
import { TyingBow } from "./TyingBow";
import Reveal from "./Reveal";
import { PROFILE } from "@/data/portfolio";

const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 2000;

export const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const formStartedAt = useRef(Date.now());

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
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          website: form.website,
          startedAt: formStartedAt.current,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data.error === "rate_limited") {
          toast.error(
            "Too many messages — try again in an hour or email me directly.",
          );
        } else if (data.error === "too_fast") {
          toast.error("Please take a moment before sending.");
        } else if (data.error === "email_not_configured") {
          toast.error(
            "Contact form is not configured yet — email me directly.",
          );
        } else if (data.error === "invalid_email") {
          toast.error("Please enter a valid email address.");
        } else if (data.error === "resend_testing_limit") {
          toast.error(
            "Form misconfigured — inbox must match your Resend account email until you verify a domain.",
          );
        } else if (data.error === "resend_auth") {
          toast.error(
            "Email service auth failed — check RESEND_API_KEY in Vercel.",
          );
        } else {
          toast.error(
            "Could not send your message. Try again or email me directly.",
          );
        }
        return;
      }
      setSent(true);
      toast.success("Message sent — thank you. I'll be in touch soon.");
      setForm({ name: "", email: "", message: "", website: "" });
      formStartedAt.current = Date.now();
    } catch {
      toast.error(
        "Could not send your message. Try again or email me directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-32 bg-bone-200"
    >
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
            <em className="not-italic text-burgundy">
              Happy to hear from you.
            </em>
          </h2>
          <div className="mt-10 space-y-4 font-mono text-sm text-ink">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                Email
              </p>
              <a
                href={`mailto:${PROFILE.email}`}
                className="lnk text-ink hover:text-burgundy"
              >
                {PROFILE.email}
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                Phone
              </p>
              <span>{PROFILE.phone}</span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                Location
              </p>
              <span>{PROFILE.location}</span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                Availability
              </p>
              <span>{PROFILE.workPreference}</span>
            </div>
          </div>
        </Reveal>

        <Reveal
          as="form"
          delay={0.1}
          className="md:col-span-7 space-y-6 relative"
          onSubmit={onSubmit}
          data-testid="contact-form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="block field-line">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                Name
              </span>
              <input
                data-testid="contact-name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                maxLength={MAX_NAME}
                autoComplete="name"
                className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-burgundy outline-none py-2 font-mono text-sm text-ink"
              />
            </label>
            <label className="block field-line">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                Email
              </span>
              <input
                data-testid="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                maxLength={MAX_EMAIL}
                autoComplete="email"
                className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-burgundy outline-none py-2 font-mono text-sm text-ink"
              />
            </label>
          </div>

          <label className="block field-line">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
              Message
            </span>
            <textarea
              data-testid="contact-message"
              name="message"
              value={form.message}
              onChange={onChange}
              required
              maxLength={MAX_MESSAGE}
              rows={6}
              className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-burgundy outline-none py-2 font-mono text-sm text-ink resize-none"
            />
          </label>

          <div
            className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
            aria-hidden="true"
          >
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={onChange}
            />
          </div>

          <div className="flex items-center justify-between pt-4 gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute flex items-center gap-2">
              {sent ? (
                <>
                  <TyingBow size={14} tie />
                  <span>sent · thank you</span>
                </>
              ) : (
                "I'll reply as soon as I can."
              )}
            </p>
            <button
              type="submit"
              data-testid="contact-submit"
              disabled={submitting}
              className="btn-tactile font-mono text-xs uppercase tracking-[0.18em] bg-burgundy text-[#F5F1EB] px-6 py-3 hover:bg-ink transition-colors disabled:opacity-50"
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
