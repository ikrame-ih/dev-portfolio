import { useState } from "react";
import { motion } from "framer-motion";
import { Bow } from "./Bow";
import Reveal, { REVEAL_VIEWPORT, revealTransition } from "./Reveal";
import { BLOG } from "@/data/portfolio";

export const BlogSection = () => {
  const [avatarOk, setAvatarOk] = useState(true);

  return (
    <section
      id="blog"
      data-testid="blog-section"
      className="relative py-24 md:py-32 bg-bone-200"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <Bow size={14} />
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
                04 · {BLOG.name.toLowerCase()}
              </span>
            </div>

            <div className="flex items-start gap-5 mb-8">
              <div>
                <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 border border-ink/20 bg-bone overflow-hidden">
                  {avatarOk ? (
                    <img
                      src={BLOG.avatar}
                      alt={`${BLOG.name} avatar`}
                      className="w-full h-full object-cover object-top"
                      onError={() => setAvatarOk(false)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-bone-300">
                      <Bow size={24} />
                    </div>
                  )}
                </div>
                {BLOG.avatarCredit && (
                  <p className="font-mono text-[9px] text-ink-mute mt-1.5 max-w-[5.5rem] leading-snug">
                    art by{" "}
                    <a
                      href={BLOG.avatarCredit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lnk text-ink-soft hover:text-burgundy"
                    >
                      {BLOG.avatarCredit.artist}
                    </a>
                  </p>
                )}
              </div>
              <div className="pt-1">
                <p className="font-serif text-2xl md:text-3xl text-ink tracking-tight">
                  Tizza<span className="text-burgundy">&apos;</span>s vault
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute mt-1">
                  personal · didactic
                </p>
              </div>
            </div>

            <p className="font-mono text-xs text-ink-soft max-w-md leading-relaxed text-pretty">
              {BLOG.intro}
            </p>
          </Reveal>

          <div className="md:col-span-7 relative space-y-2 md:pt-16 min-h-[420px]">
            {BLOG.posts.map((post, idx) => (
              <motion.div
                key={post.slug}
                role="presentation"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={REVEAL_VIEWPORT}
                transition={revealTransition(idx * 0.07)}
                data-testid={`blog-post-${post.slug}`}
                className="block w-full text-left border-t border-ink/20 py-6"
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-burgundy">
                    {post.kind} · {post.date}
                  </span>
                  <span className="font-mono text-xs text-ink-mute">
                    soon →
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 font-mono text-xs md:text-sm text-ink-soft leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              </motion.div>
            ))}
            <div className="border-t border-ink/20" />

            {BLOG.comingSoon && (
              <div
                data-testid="blog-coming-soon"
                className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-b from-bone-200/55 via-bone/82 to-bone-200/90 backdrop-blur-[3px] border border-ink/10"
                aria-hidden="true"
              >
                <div className="text-center px-8 py-10 max-w-sm">
                  <div className="inline-flex items-center gap-3 mb-3">
                    <Bow size={16} />
                    <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink">
                      Coming soon
                    </span>
                  </div>
                  <p className="font-mono text-xs text-ink-soft leading-relaxed">
                    Written in my vault · publishing here next
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
