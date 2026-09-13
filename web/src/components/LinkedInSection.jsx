import { motion, useReducedMotion } from "framer-motion";
import Reveal, { REVEAL_VIEWPORT, revealTransition } from "./Reveal";
import SectionOverline from "./SectionOverline";
import { useContent, useLocale, useUi } from "@/i18n/LocaleContext";
import { htmlLang } from "@/i18n/htmlLang.js";

const formatDate = (iso, lang) => {
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(htmlLang(lang), {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

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

const PostCard = ({ post, index, reduce, readLabel, opensNewTab, lang }) => (
  <motion.a
    href={post.href}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={`linkedin-post-${post.slug}`}
    initial={reduce ? false : { y: 12 }}
    whileInView={reduce ? undefined : { y: 0 }}
    viewport={REVEAL_VIEWPORT}
    transition={revealTransition(index * 0.05)}
    className="group grid grid-cols-1 items-start border-b border-ink/15 outline-none last:border-b-0 focus-visible:ring-2 focus-visible:ring-burgundy/30 focus-visible:ring-offset-4 focus-visible:ring-offset-bone md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]"
  >
    {post.image ? (
      <div className="border-b border-ink/10 bg-bone-200 p-4 md:border-b-0 md:border-r md:p-5">
        <img
          src={post.image}
          alt={post.imageAlt || ""}
          width={1037}
          height={1296}
          loading="lazy"
          decoding="async"
          className="mx-auto h-auto w-full max-h-[22rem] object-contain"
        />
      </div>
    ) : null}
    <div className="flex min-h-0 flex-col p-6 md:p-8">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
        {formatDate(post.date, lang)}
      </p>
      <h3 className="text-balance font-serif text-xl font-light leading-snug tracking-tight text-ink transition-colors duration-500 group-hover:text-burgundy md:text-2xl">
        {post.title}
      </h3>
      <p className="mt-3 text-pretty font-mono text-xs leading-relaxed text-ink-soft">
        {post.excerpt}
      </p>
      <span className="mt-5 inline-flex min-h-11 items-center font-mono text-xs text-burgundy transition-colors group-hover:text-ink">
        {readLabel}
        <span className="sr-only">{opensNewTab}</span>
      </span>
    </div>
  </motion.a>
);

const recCellClass = (index) => {
  const left = index % 2 === 0;
  return [
    "flex h-full flex-col border-b border-ink/15 p-6 md:p-8",
    left ? "md:border-r" : "",
  ].join(" ");
};

const RecCard = ({ item, index }) => (
  <article data-testid={`linkedin-rec-${index}`} className={recCellClass(index)}>
    <QuoteMark className="mb-4 h-5 w-6 shrink-0 text-burgundy" />
    <blockquote
      lang={item.lang}
      className="grow text-pretty font-serif text-[0.95rem] font-light italic leading-relaxed text-ink md:text-base"
    >
      {item.quote}
    </blockquote>
    {item.role ? (
      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute">
        {item.role}
      </p>
    ) : null}
  </article>
);

const RecsBand = ({ feedback, opensNewTab }) => {
  const items = feedback.items || [];
  if (!items.length) return null;

  return (
    <div className="mt-14 md:mt-16" data-testid="linkedin-profile-note">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
          {feedback.label}
        </p>
        <a
          href={feedback.href}
          target="_blank"
          rel="noopener noreferrer"
          className="lnk inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.2em] text-burgundy"
        >
          {feedback.cta}
          <span className="sr-only">{opensNewTab}</span>
        </a>
      </div>
      <div className="grid grid-cols-1 border-t border-ink/15 md:grid-cols-2">
        {items.map((item, i) => (
          <RecCard key={`${item.role}-${i}`} item={item} index={i} />
        ))}
      </div>
    </div>
  );
};

export const LinkedInSection = () => {
  const reduce = useReducedMotion();
  const { LINKEDIN_SIGNALS } = useContent();
  const { lang } = useLocale();
  const ui = useUi();
  const posts = LINKEDIN_SIGNALS.posts.slice(0, 3);
  const feedback = LINKEDIN_SIGNALS.feedback;

  return (
    <section
      id="linkedin"
      tabIndex={-1}
      aria-labelledby="linkedin-heading"
      data-testid="linkedin-section"
      className="relative py-16 outline-none sm:py-20 md:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-12">
        <Reveal className="mb-10 max-w-3xl md:mb-12">
          <SectionOverline className="mb-6 md:mb-8">
            {LINKEDIN_SIGNALS.overline}
          </SectionOverline>
          <h2
            id="linkedin-heading"
            className="text-balance font-serif text-3xl font-light tracking-tighter text-ink md:text-5xl"
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

        <div className="border-t border-ink/15">
          {posts.map((post, i) => (
            <PostCard
              key={post.slug}
              post={post}
              index={i}
              reduce={reduce}
              readLabel={ui.linkedin.readOnLinkedIn}
              opensNewTab={ui.hero.opensNewTab}
              lang={lang}
            />
          ))}
        </div>

        {feedback ? (
          <RecsBand feedback={feedback} opensNewTab={ui.hero.opensNewTab} />
        ) : null}
      </div>
    </section>
  );
};

export default LinkedInSection;
