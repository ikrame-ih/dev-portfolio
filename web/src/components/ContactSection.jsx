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
import { CTA_SPRING, MOTION_DURATION, MOTION_EASE } from "@/lib/motion";
import { useContent, useUi } from "@/i18n/LocaleContext";

const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 2000;

const SendFailedToast = ({ email, prefix }) => (
  <span>
    {prefix}{" "}
    <a
      href={`mailto:${email}`}
      className="underline underline-offset-2 hover:opacity-80"
    >
      {email}
    </a>
    .
  </span>
);

export const ContactSection = () => {
  const { PROFILE } = useContent();
  const ui = useUi();
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

  const showSendFailedToast = () => {
    toast.error(
      <SendFailedToast
        email={PROFILE.email}
        prefix={ui.contact.sendFailedPrefix}
      />,
    );
  };

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
    if (!form.name.trim()) nextErrors.name = ui.contact.nameRequired;
    if (!form.email.trim()) nextErrors.email = ui.contact.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = ui.contact.emailInvalid;
    }
    if (!form.message.trim()) nextErrors.message = ui.contact.messageRequired;

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      toast.error(ui.contact.fillAll);
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
          toast.error(ui.contact.rateLimited);
        } else if (code === "too_fast") {
          toast.error(ui.contact.tooFast);
        } else if (code === "invalid_email") {
          toast.error(ui.contact.emailInvalid);
        } else if (code === "missing_fields") {
          toast.error(ui.contact.fillAll);
        } else {
          showSendFailedToast();
        }
        return;
      }
      setSent(true);
      toast.success(ui.contact.sent);
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
          <SectionOverline>{ui.contact.overline}</SectionOverline>
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tighter text-ink">
            {ui.contact.title}
            <br />
            <em className="not-italic text-burgundy">
              {ui.contact.titleAccent}
            </em>
          </h2>
          <div className="mt-10 space-y-4 font-mono text-sm text-ink">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink-mute">
                {ui.contact.email}
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
                {ui.contact.phone}
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
                {ui.contact.location}
              </p>
              <span>{PROFILE.location}</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink-mute">
                {ui.contact.availability}
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
                {ui.contact.name}
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
                {ui.contact.email}
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
              {ui.contact.message}
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

          {/* Honeypot — off-screen; aria-label avoids WAVE orphaned-label + missing-label. */}
          <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
            <input
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-label="Website"
              aria-hidden="true"
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
                    <span>{ui.contact.sentThanks}</span>
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
                    {ui.contact.replyNote}
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
              {submitting ? ui.contact.sending : ui.contact.send}
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
