import React, { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import { ChevronRight, Calendar, Clock, Share2, ListOrdered, ArrowRight, Sparkles } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";
import { SiteHeader, SiteFooter, PillButton, TextButton, SectionBadge, wppLink } from "@/components/site/Ui";
import { PostCard } from "@/components/blog/PostCards";
import andersonPhoto from "@/assets/anderson-suit.jpg";

export default function BlogPostDetail() {
  const [, params] = useRoute("/blog/:slug");
  const post = BLOG_POSTS.find((p) => p.slug === params?.slug);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [params?.slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-[#091D39]">
        <SiteHeader tone="light" />
        <div className="max-w-xl mx-auto text-center py-32 px-6 space-y-5">
          <h1 className="text-3xl font-bold">Artigo não encontrado</h1>
          <p className="text-[#44403C]">O artigo procurado não está disponível.</p>
          <PillButton href="/blog" tone="navy">Voltar ao blog</PillButton>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  const share = async () => {
    const shareData = {
      title: post.title,
      text: post.subtitle || post.excerpt || post.title,
      url: window.location.href,
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err: any) {
        if (err?.name === "AbortError") return;
      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
    const wppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title}\n\n${window.location.href}`)}`;
    window.open(wppUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-[#091D39] selection:bg-[#CFAE70] selection:text-[#091D39] antialiased">
      <SiteHeader tone="light" />

      <main>
        {/* Cabeçalho do artigo ampliado */}
        <section className="max-w-[960px] mx-auto px-5 md:px-8 pt-10 md:pt-16">
          <div className="flex items-center gap-2 text-[13px] text-[#57534E] mb-8">
            <Link href="/" className="hover:text-[#091D39]">Início</Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-[#091D39]">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-[#8a6a2b] font-semibold">{post.category}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[12.5px] mb-5">
            <span className="font-bold uppercase tracking-[0.14em] text-[#8a6a2b]">{post.category}</span>
            <span className="flex items-center gap-1.5 text-[#78716C]"><Calendar size={13} />{post.date}</span>
            <span className="flex items-center gap-1.5 text-[#78716C]"><Clock size={13} />{post.readTime}</span>
          </div>

          <h1 className="text-[clamp(32px,5vw,58px)] font-bold leading-[1.08] tracking-[-0.03em] text-[#091D39]">
            {post.title}
          </h1>
          <p className="mt-5 text-[19px] md:text-[22px] text-[#57534E] font-light leading-relaxed">{post.subtitle}</p>

          <div className="mt-8 pt-6 border-t border-[#091D39]/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <img src={andersonPhoto} alt={post.author.name} className="w-12 h-12 rounded-full object-cover object-top" />
              <div>
                <strong className="block text-[14.5px] text-[#091D39]">{post.author.name}</strong>
                <span className="text-[12px] text-[#78716C]">{post.author.role} · {post.author.oab}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={share}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#091D39]/5 hover:bg-[#CFAE70]/20 hover:text-[#8a6a2b] text-[13px] font-semibold text-[#091D39] transition-all cursor-pointer shadow-xs"
            >
              <Share2 size={15} className="text-[#8a6a2b]" />
              <span>{copied ? "Link copiado!" : "Compartilhar"}</span>
            </button>
          </div>
        </section>

        {/* Imagem ampliada */}
        <section className="max-w-[1140px] mx-auto px-5 md:px-8 mt-10">
          <figure>
            <img src={post.image} alt={post.title} className="w-full max-h-[560px] object-cover rounded-3xl shadow-sm" />
            {post.imageCaption && (
              <figcaption className="mt-3 text-[12.5px] text-[#78716C] text-center">{post.imageCaption}</figcaption>
            )}
          </figure>
        </section>

        {/* Corpo do artigo ampliado (max-w-[920px]) */}
        <article className="max-w-[920px] mx-auto px-5 md:px-8 py-14 md:py-20 space-y-9 text-[18px] md:text-[19.5px] text-[#292524] leading-[1.85]">
          <p className="text-[21px] md:text-[23px] text-[#091D39] leading-[1.65] font-medium border-l-[4px] border-[#CFAE70] pl-6 md:pl-7">
            {post.content.intro}
          </p>

          {/* Sumário navegável automático para artigos maiores (4+ seções) */}
          {post.content.sections.length >= 4 && (
            <nav
              aria-label="Sumário do artigo"
              className="my-10 rounded-2xl bg-[#FAF9F6] border border-[#091D39]/12 p-6 md:p-8"
            >
              <div className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.16em] text-[#8a6a2b] mb-4">
                <ListOrdered size={16} />
                <span>Sumário do Artigo</span>
              </div>
              <ol className="flex flex-col gap-1.5 text-[15px] md:text-[16px]">
                {post.content.sections.map((sec, idx) => (
                  <li key={sec.heading}>
                    <a
                      href={`#secao-${idx + 1}`}
                      className="group inline-flex items-baseline gap-3 text-[#091D39]/85 hover:text-[#8a6a2b] font-medium leading-snug transition-colors py-1.5"
                    >
                      <span className="font-heading tabular-nums text-[12px] font-bold text-[#8a6a2b] bg-[#CFAE70]/20 rounded px-1.5 py-0.5 mt-0.5 shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="group-hover:underline underline-offset-4">
                        {sec.heading.replace(/^\d+\.\s*/, "")}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {post.content.sections.map((sec, i) => (
            <div key={i} className="space-y-4 pt-5">
              <h2
                id={`secao-${i + 1}`}
                className="scroll-mt-28 text-[26px] md:text-[32px] font-bold text-[#091D39] tracking-[-0.02em] leading-tight"
              >
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, j) =>
                p.startsWith("• ") ? (
                  <p key={j} className="pl-5 relative text-[17.5px] md:text-[18.5px]">
                    <span className="absolute left-0 top-0 text-[#8a6a2b] font-bold">•</span>
                    {p.slice(2)}
                  </p>
                ) : (
                  <p key={j}>{p}</p>
                )
              )}
              {sec.highlight && (
                <blockquote className="my-10 rounded-xl bg-[#FAF9F6] border border-[#091D39]/10 px-8 py-7 text-[19px] md:text-[21px] text-[#091D39] font-heading font-semibold leading-relaxed">
                  {sec.highlight}
                </blockquote>
              )}
            </div>
          ))}

          <div className="pt-8 border-t border-[#091D39]/10 space-y-3">
            <h3 className="text-[24px] font-bold text-[#091D39]">Conclusão</h3>
            <p>{post.content.conclusion}</p>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#78716C] mr-2">Marcadores</span>
            {post.tags.map((t) => (
              <span key={t} className="text-[12px] bg-[#F4F4F3] text-[#44403C] px-3 py-1 rounded-full">#{t}</span>
            ))}
          </div>

          {/* Botão de Compartilhar Mobile & Desktop ao final do artigo */}
          <div className="mt-10 pt-8 border-t border-[#091D39]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF9F6] border border-[#091D39]/8 p-6 md:p-7 rounded-2xl">
            <div>
              <strong className="block text-[15.5px] text-[#091D39] font-bold">Gostou deste artigo?</strong>
              <span className="text-[13.5px] text-[#78716C]">Compartilhe com amigos e familiares que têm dúvidas sobre o INSS.</span>
            </div>
            <button
              type="button"
              onClick={share}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#091D39] text-[#CFAE70] hover:bg-[#071527] text-[14px] font-bold transition-all cursor-pointer shadow-sm shrink-0 w-full sm:w-auto"
            >
              <Share2 size={17} />
              <span>{copied ? "Link copiado!" : "Compartilhar artigo"}</span>
            </button>
          </div>
        </article>

        {/* CTA universal para qualquer artigo do blog */}
        <section className="max-w-[1140px] mx-auto px-5 md:px-8 pb-20">
          <div className="rounded-3xl bg-[#091D39] text-white px-7 py-10 md:px-14 md:py-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-xl">
            <div className="max-w-xl space-y-4">
              <div>
                <SectionBadge icon={Sparkles} tone="darkGold">Vamos conversar?</SectionBadge>
              </div>
              <h3 className="text-[26px] md:text-[34px] font-bold leading-tight tracking-[-0.02em]">
                Ficou com alguma dúvida sobre o seu caso?
              </h3>
              <p className="text-[15px] text-white/75 font-light leading-relaxed">
                Fale com a equipe do Dr. Anderson Litig pelo WhatsApp ou responda à triagem rápida em 3 etapas. Atendimento presencial na Serra/ES e online em todo o Brasil.
              </p>
            </div>
            <div className="flex flex-col items-stretch sm:items-center gap-3.5 shrink-0">
              <PillButton
                tone="gold"
                external
                href={wppLink(`Olá, Dr. Anderson! Li o artigo "${post.title}" no site e tenho dúvida sobre o meu caso.`)}
                className="w-full sm:w-auto"
              >
                Conversar no WhatsApp
              </PillButton>
              <Link
                href="/#triagem"
                className="inline-flex items-center justify-center gap-2 text-[14px] font-medium text-white/85 hover:text-[#CFAE70] underline underline-offset-4 transition-colors py-1"
              >
                <span>Fazer triagem rápida</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* Relacionados */}
        <section className="bg-[#F4F4F3] py-16 md:py-20">
          <div className="max-w-[1360px] mx-auto px-5 md:px-10">
            <div className="flex items-end justify-between mb-10">
              <h3 className="text-[26px] md:text-[34px] font-bold tracking-[-0.02em]">Continue lendo</h3>
              <TextButton tone="dark" href="/blog">Todos os artigos</TextButton>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {related.map((p) => <PostCard key={p.id} post={p} />)}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
