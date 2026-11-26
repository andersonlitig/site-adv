import React from "react";
import type { BlogPost } from "@/data/blogPosts";
import { FeaturedPostCard, CompactPostCard } from "@/components/blog/PostCards";
import { Reveal } from "@/components/site/Ui";

/* 1 card grande + 3 cards pequenos */
export function BlogHighlights({ posts }: { posts: BlogPost[] }) {
  const [big, ...small] = posts.slice(0, 4);
  if (!big) return null;
  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
      <Reveal className="lg:col-span-7">
        <FeaturedPostCard post={big} />
      </Reveal>
      <div className="lg:col-span-5 flex flex-col justify-between gap-6 lg:gap-0 lg:divide-y divide-[#091D39]/10">
        {small.map((p, i) => (
          <Reveal key={p.id} delay={0.08 * (i + 1)} className="lg:py-5 first:lg:pt-0 last:lg:pb-0">
            <CompactPostCard post={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
