import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bow } from "./Bow";
import Reveal, { REVEAL_VIEWPORT, revealTransition } from "./Reveal";
import SectionOverline from "./SectionOverline";
import { BLOG } from "@/data/portfolio";

const vaultTitleParts = BLOG.name.split("'");

const PostRow = ({ post, index, reduce, soon }) => (
  <motion.div
    data-testid={`blog-post-${post.slug}`}
    initial={reduce ? false : { opacity: 0, y: 12 }}
    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
    viewport={REVEAL_VIEWPORT}
    transition={revealTransition(index * 0.08)}
    className="group block w-full text-left border-t border-ink/20 py-6"
  >
    <div className="flex items-baseline justify-between gap-4 mb-2">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-burgundy">
        {post.kind} · {post.date}
      </span>
      {soon && (
        <span className="font-mono text-xs text-ink-mute">soon →</span>
      )}
    </div>
    <p className="font-serif text-xl md:text-2xl text-ink leading-snug transition-colors duration-500 group-hover:text-burgundy">
      {post.title}
    </p>
    <p className="mt-2 font-mono text-xs md:text-sm text-ink-soft leading-relaxed max-w-2xl">
      {post.excerpt}
    </p>
  </motion.div>
);

export const BlogSection = () => {
  const [avatarOk, setAvatarOk] = useState(true);
  const reduce = useReducedMotion();

  return (
    <section
      id="blog"
      tabIndex={-1}
      aria-labelledby="vault-heading"
      data-testid="blog-section"
      className="relative py-24 md:py-32 bg-bone-200 outline-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <Reveal className="md:col-span-5">
            <SectionOverline className="mb-8">
              04 · {BLOG.name.toLowerCase()}
            </SectionOverline>

            <div className="flex items-start gap-5 mb-8">
              <div>
                <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 border border-ink/20 bg-bone overflow-hidden">
                  {avatarOk ? (
                    <img
                      src={BLOG.avatar}
                      alt=""
                      className="w-full h-full object-cover object-top"
                      onError={() => setAvatarOk(false)}
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center bg-bone-300"
                      aria-hidden="true"
                    >
                      <Bow size={24} />
                    </div>
                  )}
                </div>
                {BLOG.avatarCredit && (
                  <p className="font-mono text-xs text-ink-mute mt-1.5 max-w-[5.5rem] leading-snug">
                    art by{" "}
                    <a
                      href={BLOG.avatarCredit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lnk text-ink-soft hover:text-burgundy"
                    >
                      {BLOG.avatarCredit.artist}
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                  </p>
                )}
              </div>
              <div className="pt-1">
                <h2
                  id="vault-heading"
                  className="font-serif text-2xl md:text-3xl text-ink tracking-tight"
                >
                  {vaultTitleParts[0]}
                  <span className="text-burgundy">&apos;</span>
                  {vaultTitleParts[1] ?? "s vault"}
                </h2>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute mt-1">
                  personal · didactic
                </p>
              </div>
            </div>

            <p className="font-mono text-xs text-ink-soft max-w-md leading-relaxed text-pretty">
              {BLOG.intro}
            </p>
          </Reveal>

          <div className="md:col-span-7 relative space-y-2 md:pt-16 min-h-[420px]">
            {BLOG.comingSoon ? (
              <>
                <div aria-hidden="true" inert={true}>
                  {BLOG.posts.map((post, i) => (
                    <PostRow
                      key={post.slug}
                      post={post}
                      index={i}
                      reduce={reduce}
                      soon
                    />
                  ))}
                  <div className="border-t border-ink/20" />
                </div>

                <div
                  data-testid="blog-coming-soon"
                  role="status"
                  aria-live="polite"
                  className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-b from-bone-200/55 via-bone/82 to-bone-200/90 backdrop-blur-[3px] border border-ink/10"
                >
                  <div className="text-center px-8 py-10 max-w-sm">
                    <div className="inline-flex items-center gap-3 mb-3">
                      <span className="bow-stamp inline-block" aria-hidden="true">
                        <Bow size={16} />
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink caret">
                        Coming soon
                      </span>
                    </div>
                    <p className="sr-only">
                      {BLOG.name} is coming soon. Draft notes are not published
                      yet.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              BLOG.posts.map((post, i) => (
                <article key={post.slug}>
                  <PostRow post={post} index={i} reduce={reduce} />
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
