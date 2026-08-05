import { motion, useReducedMotion } from "framer-motion";
import Reveal, { REVEAL_VIEWPORT, revealTransition } from "./Reveal";
import SectionOverline from "./SectionOverline";
import { useContent, useLocale, useUi } from "@/i18n/LocaleContext";

const formatDate = (iso, lang) => {
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(lang === "es" ? "es-ES" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const AVATAR_TONES = [
  "bg-bone text-ink/65",
  "bg-bone-300 text-ink/65",
  "bg-bone-400 text-ink/70",
  "bg-bone text-ink/65",
  "bg-bone-300 text-ink/65",
  "bg-ink/[0.08] text-ink/70",
];

/** Decorative opening quote for the feedback card. */
const QuoteMark = ({ className }) => (
  <svg
    viewBox="0 0 40 32"
    className={className}
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M0 18.4C0 9.2 5.2 3.2 14 0l1.6 2.8C10 5.6 7.2 9.6 7.2 14c0 1.6.4 2.8 1.2 3.6.8.8 1.6 1.2 2.8 1.2 2.4 0 4.4 1.6 4.4 4.8S13.6 28 10.8 28C4.8 28 0 24 0 18.4zm20.8 0C20.8 9.2 26 3.2 34.8 0L36.4 2.8C30.8 5.6 28 9.6 28 14c0 1.6.4 2.8 1.2 3.6.8.8 1.6 1.2 2.8 1.2 2.4 0 4.4 1.6 4.4 4.8S34.4 28 31.6 28c-6 0-10.8-4-10.8-9.6z" />
  </svg>
);

const HoverHairline = () => (
  <span
    aria-hidden="true"
    className="mt-5 block h-px w-0 origin-left bg-burgundy/55 transition-[width] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:w-14"
  />
);

const FeaturedPost = ({ post, reduce, label, readLabel, opensNewTab, lang }) => (
  <motion.a
    href={post.href}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={`linkedin-post-${post.slug}`}
    initial={reduce ? false : { opacity: 0, y: 12 }}
    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
    viewport={REVEAL_VIEWPORT}
    transition={revealTransition(0)}
    className="group block pb-9 md:pb-11 outline-none focus-visible:ring-2 focus-visible:ring-burgundy/30 focus-visible:ring-offset-4 focus-visible:ring-offset-bone"
  >
    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute mb-4">
      {label}
      <span className="text-ink/25" aria-hidden="true">
        {" "}
        ·{" "}
      </span>
      {formatDate(post.date, lang)}
    </p>
    <h3 className="font-serif font-light text-2xl md:text-3xl lg:text-[2.35rem] text-ink tracking-tight leading-[1.15] transition-colors duration-500 group-hover:text-burgundy text-balance">
      {post.title}
    </h3>
    <p className="mt-4 font-mono text-xs md:text-sm text-ink-soft leading-relaxed text-pretty max-w-2xl">
      {post.excerpt}
    </p>
    <span className="mt-5 inline-flex font-mono text-xs text-burgundy opacity-75 transition-opacity group-hover:opacity-100">
      {readLabel}
      <span className="sr-only">{opensNewTab}</span>
    </span>
    <HoverHairline />
  </motion.a>
);

const SecondaryPost = ({ post, index, reduce, readLabel, opensNewTab, lang }) => (
  <motion.a
    href={post.href}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={`linkedin-post-${post.slug}`}
    initial={reduce ? false : { opacity: 0, y: 12 }}
    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
    viewport={REVEAL_VIEWPORT}
    transition={revealTransition(0.06 + index * 0.06)}
    className="group flex h-full flex-col pt-7 md:pt-8 outline-none focus-visible:ring-2 focus-visible:ring-burgundy/30 focus-visible:ring-offset-4 focus-visible:ring-offset-bone"
  >
    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute mb-3">
      {post.series || post.topic}
      <span className="text-ink/25" aria-hidden="true">
        {" "}
        ·{" "}
      </span>
      {formatDate(post.date, lang)}
    </p>
    <h3 className="font-serif font-light text-lg md:text-xl text-ink tracking-tight leading-snug transition-colors duration-500 group-hover:text-burgundy text-balance">
      {post.title}
    </h3>
    <p className="mt-2.5 font-mono text-xs text-ink-soft leading-relaxed text-pretty line-clamp-3 grow">
      {post.excerpt}
    </p>
    <span className="mt-4 inline-flex font-mono text-xs text-burgundy opacity-70 transition-opacity group-hover:opacity-100">
      {readLabel}
      <span className="sr-only">{opensNewTab}</span>
    </span>
    <HoverHairline />
  </motion.a>
);

const FeedbackCard = ({ feedback, opensNewTab }) => {
  const initials = feedback.initials?.slice(0, 6) || [];

  return (
    <div data-testid="linkedin-profile-note" className="lg:sticky lg:top-28">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute mb-4">
        {feedback.label}
      </p>

      <div className="relative border border-ink/15 bg-bone-200/50 px-5 py-6 md:px-6 md:py-7 transition-colors duration-300 hover:border-ink/25">
        {initials.length ? (
          <div className="mb-6">
            <div className="flex -space-x-2" aria-hidden="true">
              {initials.map((initial, i) => (
                <span
                  key={`${initial}-${i}`}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border border-bone-200/90 font-mono text-[10px] uppercase tracking-wide ring-1 ring-ink/10 ${
                    AVATAR_TONES[i % AVATAR_TONES.length]
                  }`}
                >
                  {initial}
                </span>
              ))}
            </div>
            <a
              href={feedback.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3.5 inline-flex font-mono text-[11px] uppercase tracking-[0.2em] text-burgundy lnk"
            >
              {feedback.cta}
              <span className="sr-only">{opensNewTab}</span>
            </a>
          </div>
        ) : (
          <a
            href={feedback.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-flex font-mono text-[11px] uppercase tracking-[0.2em] text-burgundy lnk"
          >
            {feedback.cta}
            <span className="sr-only">{opensNewTab}</span>
          </a>
        )}

        <div className="flex gap-3 items-start">
          <QuoteMark className="mt-0.5 h-5 w-6 shrink-0 text-burgundy/50" />
          <div className="min-w-0">
            <blockquote className="font-serif text-[0.95rem] md:text-base font-light italic text-ink leading-relaxed text-pretty">
              {feedback.quote}
            </blockquote>

            {feedback.attribution ? (
              <p className="mt-5 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute">
                <span
                  aria-hidden="true"
                  className="inline-block h-px w-5 bg-ink/25"
                />
                {feedback.attribution}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export const LinkedInSection = () => {
  const reduce = useReducedMotion();
  const { LINKEDIN_SIGNALS } = useContent();
  const { lang } = useLocale();
  const ui = useUi();
  const [featured, ...rest] = LINKEDIN_SIGNALS.posts.slice(0, 3);
  const feedback = LINKEDIN_SIGNALS.feedback;

  return (
    <section
      id="linkedin"
      tabIndex={-1}
      aria-labelledby="linkedin-heading"
      data-testid="linkedin-section"
      className="relative py-16 sm:py-20 md:py-32 outline-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="mb-10 md:mb-12 max-w-3xl">
          <SectionOverline className="mb-6 md:mb-8">
            {LINKEDIN_SIGNALS.overline}
          </SectionOverline>
          <h2
            id="linkedin-heading"
            className="font-serif font-light text-3xl md:text-5xl tracking-tighter text-ink text-balance"
          >
            {LINKEDIN_SIGNALS.title}
            {LINKEDIN_SIGNALS.titleAccent ? (
              <>
                {" "}
                <em className="not-italic text-burgundy">
                  {LINKEDIN_SIGNALS.titleAccent}
                </em>
              </>
            ) : null}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 lg:items-start border-t border-ink/15">
          <div className="lg:col-span-8 lg:pr-10 xl:pr-12 lg:border-r lg:border-ink/15 pt-8 md:pt-10">
            {featured ? (
              <FeaturedPost
                post={featured}
                reduce={reduce}
                label={LINKEDIN_SIGNALS.featuredLabel}
                readLabel={ui.linkedin.readOnLinkedIn}
                opensNewTab={ui.hero.opensNewTab}
                lang={lang}
              />
            ) : null}

            {rest.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-ink/15">
                {rest.map((post, i) => (
                  <div
                    key={post.slug}
                    className={
                      i > 0
                        ? "border-t border-ink/15 sm:border-t-0 sm:border-l sm:border-ink/15 sm:pl-8"
                        : "sm:pr-8"
                    }
                  >
                    <SecondaryPost
                      post={post}
                      index={i}
                      reduce={reduce}
                      readLabel={ui.linkedin.readOnLinkedIn}
                      opensNewTab={ui.hero.opensNewTab}
                      lang={lang}
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {feedback ? (
            <div className="lg:col-span-4 lg:pl-10 xl:pl-12 pt-2 lg:pt-10">
              <FeedbackCard
                feedback={feedback}
                opensNewTab={ui.hero.opensNewTab}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default LinkedInSection;
