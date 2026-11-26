import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";
import { SiteHeader, SiteFooter, Reveal } from "@/components/site/Ui";
import { PostCard } from "@/components/blog/PostCards";
import { BlogHighlights } from "@/components/blog/BlogHighlights";

const CATEGORIES = ["Todas", "Planejamento", "Aposentadorias", "Tempo Especial", "Benefício Negado", "Incapacidade", "Revisões"];

export default function BlogList() {
  const [cat, setCat] = useState("Todas");
  const [q, setQ] = useState("");

  const filtered = useMemo(
    () =>
      BLOG_POSTS.filter((p) => {
        const okCat = cat === "Todas" || p.category === cat;
        const s = q.toLowerCase();
        const okQ =
          !s ||
          p.title.toLowerCase().includes(s) ||
          p.excerpt.toLowerCase().includes(s) ||
          p.tags.some((t) => t.toLowerCase().includes(s));
        return okCat && okQ;
      }),
    [cat, q]
  );

  const showFeatured = cat === "Todas" && !q && filtered.length > 0;

  return (
    <div className="min-h-screen bg-white text-[#091D39] selection:bg-[#CFAE70] selection:text-[#091D39] antialiased">
      <SiteHeader tone="light" />

      <section className="bg-[#F4F4F3] border-b border-[#091D39]/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-14 md:py-20 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#8a6a2b]">
              Blog previdenciário · OAB/ES 40.152
            </p>
            <h1 className="text-[clamp(34px,5vw,64px)] font-bold leading-[1.04] tracking-[-0.03em]">
              Informação técnica que{" "}
              <span className="text-[#8a6a2b]">protege seu futuro.</span>
            </h1>
          </div>
          <p className="lg:col-span-4 text-[15px] text-[#57534E] font-light leading-relaxed">
            Artigos educativos sobre INSS, Reforma da Previdência e jurisprudência, em conformidade com o Provimento 205/2021 do CFOAB.
          </p>
        </div>
      </section>

      <div className="max-w-[1360px] mx-auto px-5 md:px-10 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-5 border-b border-[#091D39]/10 pb-4">
        <div className="flex flex-wrap gap-x-7 gap-y-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`relative pb-2 text-[14px] font-semibold cursor-pointer transition-colors ${
                cat === c ? "text-[#091D39]" : "text-[#78716C] hover:text-[#091D39]"
              }`}
            >
              {c}
              {cat === c && <span className="absolute left-0 right-0 -bottom-[17px] h-[2px] bg-[#CFAE70]" />}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-80">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#78716C]" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por assunto ou lei"
            className="w-full bg-[#F4F4F3] rounded-xl pl-11 pr-4 py-2.5 text-[14px] placeholder:text-[#78716C] focus:outline-none focus:ring-2 focus:ring-[#CFAE70]/60"
          />
        </div>
      </div>

      <main className="max-w-[1360px] mx-auto px-5 md:px-10 py-14 space-y-14">
        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#78716C]">
            Nenhum artigo encontrado.{" "}
            <button className="underline text-[#091D39]" onClick={() => { setCat("Todas"); setQ(""); }}>
              Limpar filtros
            </button>
          </div>
        )}

        {showFeatured ? (
          <>
            <BlogHighlights posts={filtered} />
            {filtered.length > 4 && (
              <div className="space-y-8 pt-6">
                <h2 className="text-[24px] md:text-[30px] font-bold tracking-[-0.02em] border-b border-[#091D39]/10 pb-4">Mais artigos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
                  {filtered.slice(4).map((p, i) => (
                    <Reveal key={p.id} delay={(i % 3) * 0.08}><PostCard post={p} /></Reveal>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.08}><PostCard post={p} /></Reveal>
            ))}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
