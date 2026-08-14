import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { TyingBow } from "./TyingBow";
import Reveal from "./Reveal";
import SectionOverline from "./SectionOverline";
import { CTA_SPRING, MOTION_DURATION, MOTION_EASE } from "@/lib/motion";
import { useContent, useUi } from "@/i18n/LocaleContext";
import { useContactForm } from "@/lib/useContactForm";

const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 2000;

export const ContactSection = () => {
  const { PROFILE } = useContent();
  const ui = useUi();
  const { form, errors, submitting, sent, handleChange, handleSubmit } = useContactForm();
  const reduce = useReducedMotion();

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
          onSubmit={handleSubmit}
          data-testid="contact-form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label htmlFor="contact-name" className="block field-line">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
                {ui.contact.name}
              </span>
              <input
                id="contact-name"
                data-testid="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                maxLength={MAX_NAME}
                autoComplete="name"
                aria-invalid={errors.name ? "true" : undefined}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-burgundy outline-none py-2 font-mono text-base text-ink"
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
            <label htmlFor="contact-email" className="block field-line">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
                {ui.contact.email}
              </span>
              <input
                id="contact-email"
                data-testid="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                maxLength={MAX_EMAIL}
                autoComplete="email"
                aria-invalid={errors.email ? "true" : undefined}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-burgundy outline-none py-2 font-mono text-base text-ink"
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

          <label htmlFor="contact-message" className="block field-line">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
              {ui.contact.message}
            </span>
            <textarea
              id="contact-message"
              data-testid="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              maxLength={MAX_MESSAGE}
              rows={6}
              aria-invalid={errors.message ? "true" : undefined}
              aria-describedby={
                errors.message ? "contact-message-error" : undefined
              }
              className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-burgundy outline-none py-2 font-mono text-base text-ink resize-none"
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

          {/* Honeypot — off-screen; standard label avoids WAVE alerts. */}
          <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
            <label htmlFor="contact-website" className="sr-only">Website</label>
            <input
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={form.website}
              onChange={handleChange}
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
