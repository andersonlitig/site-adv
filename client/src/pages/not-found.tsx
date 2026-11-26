import React, { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, BookOpen, FileSearch, Home } from "lucide-react";
import {
  SiteHeader,
  SiteFooter,
  PillButton,
  SectionBadge,
  wppLink,
} from "@/components/site/Ui";

export default function NotFound() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Página não encontrada | Anderson Litig Advocacia";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#091D39] selection:bg-[#CFAE70] selection:text-[#091D39] antialiased font-sans">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-[680px] w-full bg-white rounded-3xl border border-[#091D39]/10 shadow-[0_20px_50px_-24px_rgba(9,29,57,0.12)] p-8 md:p-14 text-center space-y-6">
          <div className="flex justify-center">
            <SectionBadge icon={FileSearch}>Erro 404</SectionBadge>
          </div>

          <h1 className="font-heading text-[clamp(32px,4.5vw,50px)] font-bold text-[#091D39] tracking-[-0.03em] leading-[1.08]">
            Página não encontrada
          </h1>

          <p className="text-[16px] md:text-[17px] text-[#57534E] font-light leading-relaxed max-w-[520px] mx-auto">
            O endereço que você acessou pode ter sido movido, renomeado ou não existe mais. Você pode voltar para a página inicial ou conferir nossos conteúdos no blog previdenciário.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PillButton href="/" tone="navy" className="w-full sm:w-auto">
              Voltar para o início
            </PillButton>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#091D39]/20 bg-[#FAF9F6] hover:border-[#CFAE70] hover:bg-white text-[#091D39] px-6 py-3 text-[14px] md:text-[15px] font-semibold transition-all w-full sm:w-auto"
            >
              <BookOpen size={16} className="text-[#8a6a2b]" />
              <span>Acessar o Blog</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="pt-6 border-t border-[#091D39]/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13.5px] text-[#57534E]">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-[#091D39] transition-colors"
            >
              <Home size={14} className="text-[#8a6a2b]" />
              Página Inicial
            </Link>
            <Link href="/planejamento" className="hover:text-[#091D39] transition-colors">
              Planejamento Previdenciário
            </Link>
            <Link
              href="/revisao-de-aposentadoria"
              className="hover:text-[#091D39] transition-colors"
            >
              Revisão de Aposentadoria
            </Link>
            <Link href="/salario-maternidade" className="hover:text-[#091D39] transition-colors">
              Salário-Maternidade
            </Link>
            <a
              href={wppLink("Olá, Dr. Anderson! Vim pelo site e gostaria de falar com o advogado.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a6a2b] font-semibold hover:underline"
            >
              WhatsApp: (27) 99294-2888
            </a>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
