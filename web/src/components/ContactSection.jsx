import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { toast } from "sonner";
import { TyingBow } from "./TyingBow";
import Reveal from "./Reveal";
import SectionOverline from "./SectionOverline";
import { PROFILE } from "@/data/portfolio";
import { CTA_SPRING, MOTION_DURATION, MOTION_EASE } from "@/lib/motion";

const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 2000;

const CONTACT_EMAIL = PROFILE.email;
const RATE_LIMIT_MESSAGE =
  "Too many messages have been sent. Please try again later or email me directly.";

const SendFailedToast = () => (
  <span>
    I couldn&apos;t send your message right now. Please email me directly at{" "}
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="underline underline-offset-2 hover:opacity-80"
    >
      {CONTACT_EMAIL}
    </a>
    .
  </span>
);

const showSendFailedToast = () => {
  toast.error(<SendFailedToast />);
};

export const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const formStartedAt = useRef(Date.now());
  const reduce = useReducedMotion();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[e.target.name];
        return next;
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Message is required.";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      toast.error("Please fill in all fields.");
      return;
    }

    setErrors({});
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
        const code = typeof data.error === "string" ? data.error : "";

        if (code === "rate_limited") {
          toast.error(RATE_LIMIT_MESSAGE);
        } else if (code === "too_fast") {
          toast.error("Please take a moment before sending.");
        } else if (code === "invalid_email") {
          toast.error("Please enter a valid email address.");
        } else if (code === "missing_fields") {
          toast.error("Please fill in all fields.");
        } else {
          // Unknown / provider / config failures — never surface API text.
          showSendFailedToast();
        }
        return;
      }
      setSent(true);
      toast.success("Message sent — thank you. I'll be in touch soon.");
      setForm({ name: "", email: "", message: "", website: "" });
      formStartedAt.current = Date.now();
    } catch {
      showSendFailedToast();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      tabIndex={-1}
      data-testid="contact-section"
      className="relative py-16 sm:py-20 md:py-32 bg-bone-200 outline-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-5">
          <SectionOverline>06 · contact</SectionOverline>
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tighter text-ink">
            Get in touch.
            <br />
            <em className="not-italic text-burgundy">
              Happy to hear from you.
            </em>
          </h2>
          <div className="mt-10 space-y-4 font-mono text-sm text-ink">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink-mute">
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
              <p className="text-xs uppercase tracking-[0.2em] text-ink-mute">
                Phone
              </p>
              <a
                href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                className="lnk text-ink hover:text-burgundy"
              >
                {PROFILE.phone}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink-mute">
                Location
              </p>
              <span>{PROFILE.location}</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink-mute">
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
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
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
                aria-invalid={errors.name ? "true" : undefined}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-burgundy outline-none py-2 font-mono text-sm text-ink"
              />
              {errors.name && (
                <span
                  id="contact-name-error"
                  role="alert"
                  className="mt-1 block font-mono text-xs text-burgundy"
                >
                  {errors.name}
                </span>
              )}
            </label>
            <label className="block field-line">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
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
                aria-invalid={errors.email ? "true" : undefined}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-burgundy outline-none py-2 font-mono text-sm text-ink"
              />
              {errors.email && (
                <span
                  id="contact-email-error"
                  role="alert"
                  className="mt-1 block font-mono text-xs text-burgundy"
                >
                  {errors.email}
                </span>
              )}
            </label>
          </div>

          <label className="block field-line">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
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
              aria-invalid={errors.message ? "true" : undefined}
              aria-describedby={
                errors.message ? "contact-message-error" : undefined
              }
              className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-burgundy outline-none py-2 font-mono text-sm text-ink resize-none"
            />
            {errors.message && (
              <span
                id="contact-message-error"
                role="alert"
                className="mt-1 block font-mono text-xs text-burgundy"
              >
                {errors.message}
              </span>
            )}
          </label>

          <div
            className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
            aria-hidden="true"
          >
            <input
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative min-h-[1.25rem] font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
              <AnimatePresence mode="wait" initial={false}>
                {sent ? (
                  <motion.p
                    key="sent"
                    initial={reduce ? false : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -4 }}
                    transition={{
                      duration: MOTION_DURATION.fast,
                      ease: MOTION_EASE,
                    }}
                    className="flex items-center gap-2"
                  >
                    <TyingBow size={14} tie />
                    <span>sent · thank you</span>
                  </motion.p>
                ) : (
                  <motion.p
                    key="idle"
                    initial={reduce ? false : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -4 }}
                    transition={{
                      duration: MOTION_DURATION.fast,
                      ease: MOTION_EASE,
                    }}
                  >
                    I&apos;ll reply as soon as I can.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <motion.button
              type="submit"
              data-testid="contact-submit"
              disabled={submitting}
              className="btn-tactile min-h-11 font-mono text-xs uppercase tracking-[0.18em] bg-burgundy text-[#F5F1EB] px-6 py-3 hover:bg-ink transition-colors disabled:opacity-50"
              whileHover={
                reduce || submitting ? undefined : { y: -2, scale: 1.02 }
              }
              whileTap={reduce || submitting ? undefined : { scale: 0.98 }}
              transition={CTA_SPRING}
            >
              {submitting ? "Sending…" : "Send →"}
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
