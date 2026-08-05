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

const PostRow = ({ post, index, reduce, readLabel, opensNewTab, lang }) => (
  <motion.a
    href={post.href}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={`linkedin-post-${post.slug}`}
    initial={reduce ? false : { opacity: 0, y: 12 }}
    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
    viewport={REVEAL_VIEWPORT}
    transition={revealTransition(index * 0.08)}
    className="group block border-t border-ink/15 py-7 last:border-b"
  >
    <div className="flex items-baseline justify-between gap-4 mb-2">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
        {formatDate(post.date, lang)}
        <span className="text-ink/25" aria-hidden="true">
          {" "}
          ·{" "}
        </span>
        {post.series || post.topic}
      </p>
      <span className="font-mono text-xs text-burgundy opacity-70 transition-opacity group-hover:opacity-100 shrink-0">
        {readLabel}
        <span className="sr-only">{opensNewTab}</span>
      </span>
    </div>
    <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug transition-colors duration-500 group-hover:text-burgundy text-balance">
      {post.title}
    </h3>
    <p className="mt-2 font-mono text-xs md:text-sm text-ink-soft leading-relaxed max-w-2xl text-pretty">
      {post.excerpt}
    </p>
  </motion.a>
);

export const LinkedInSection = () => {
  const reduce = useReducedMotion();
  const { LINKEDIN_SIGNALS, PROFILE } = useContent();
  const { lang } = useLocale();
  const ui = useUi();
  const posts = LINKEDIN_SIGNALS.posts.slice(0, 3);

  return (
    <section
      id="linkedin"
      tabIndex={-1}
      aria-labelledby="linkedin-heading"
      data-testid="linkedin-section"
      className="relative py-16 sm:py-20 md:py-32 bg-bone-200 outline-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="mb-10 md:mb-12 max-w-3xl">
          <SectionOverline className="mb-8">
            {LINKEDIN_SIGNALS.overline}
          </SectionOverline>
          <h2
            id="linkedin-heading"
            className="font-serif text-3xl md:text-4xl font-light text-ink tracking-tight text-balance"
          >
            {LINKEDIN_SIGNALS.title}
            {LINKEDIN_SIGNALS.titleAccent ? (
              <>
                {" "}
                <span className="text-burgundy">
                  {LINKEDIN_SIGNALS.titleAccent}
                </span>
              </>
            ) : null}
          </h2>
          <p className="mt-4 font-mono text-xs md:text-sm text-ink-soft leading-relaxed text-pretty max-w-2xl">
            {LINKEDIN_SIGNALS.intro}
          </p>
        </Reveal>

        <div className="max-w-3xl">
          {posts.map((post, i) => (
            <PostRow
              key={post.slug}
              post={post}
              index={i}
              reduce={reduce}
              readLabel={ui.linkedin.readOnLinkedIn}
              opensNewTab={ui.hero.opensNewTab}
              lang={lang}
            />
          ))}

          {LINKEDIN_SIGNALS.profileNote ? (
            <p
              data-testid="linkedin-profile-note"
              className="mt-10 pt-6 border-t border-ink/10 font-mono text-xs text-ink-mute leading-relaxed text-pretty"
            >
              {LINKEDIN_SIGNALS.profileNote}{" "}
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="linkedin-profile-note-link"
                className="text-burgundy lnk"
              >
                {ui.linkedin.profileLinkLabel}
                <span className="sr-only">{ui.hero.opensNewTab}</span>
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default LinkedInSection;
