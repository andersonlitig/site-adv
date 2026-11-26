import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";

/* Card vertical editorial: imagem grande, sem caixa */
export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="aspect-[16/10] overflow-hidden rounded-xl bg-[#F5F4F0]">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="pt-5 space-y-3">
        <span className="inline-block text-[12px] font-semibold text-[#8a6a2b]">
          {post.category}
        </span>
        <h3 className="text-[20px] md:text-[22px] font-bold text-[#091D39] leading-[1.2] tracking-[-0.01em] group-hover:text-[#8a6a2b] transition-colors">
          {post.title}
        </h3>
        <p className="text-[14.5px] text-[#44403C] leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        <div className="pt-1">
          <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#091D39] group-hover:text-[#8a6a2b]">
            Ler artigo{" "}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* Card de destaque: imagem cheia com texto sobreposto */
export function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative block h-full min-h-[420px] md:min-h-[520px] overflow-hidden rounded-2xl bg-[#091D39]"
    >
      <img
        src={post.image}
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070E18] via-[#070E18]/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-9 space-y-3">
        <span className="inline-block text-[12px] font-semibold text-[#CFAE70]">
          {post.category}
        </span>
        <h3 className="text-[24px] md:text-[32px] font-bold text-white leading-[1.14] tracking-[-0.02em] max-w-[620px]">
          {post.title}
        </h3>
        <p className="text-[14.5px] text-white/80 leading-relaxed max-w-[560px] line-clamp-2">
          {post.excerpt}
        </p>
        <div className="pt-2">
          <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#CFAE70]">
            Ler artigo{" "}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* Card horizontal compacto */
export function CompactPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex gap-5 items-stretch">
      <div className="w-[38%] shrink-0 aspect-[4/3] overflow-hidden rounded-xl bg-[#F5F4F0]">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 py-1">
        <span className="text-[12px] font-semibold text-[#8a6a2b]">
          {post.category}
        </span>
        <h3 className="text-[16px] md:text-[18px] font-bold text-[#091D39] leading-snug group-hover:text-[#8a6a2b] transition-colors">
          {post.title}
        </h3>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#091D39] group-hover:text-[#8a6a2b]">
          Ler artigo{" "}
          <ArrowRight
            size={13}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
