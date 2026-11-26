import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Instagram, Linkedin, Menu, X } from "lucide-react";
import logoHeader from "@/assets/logo-white.png";

export const WPP_NUMBER = "5527992942888";
export const LINKEDIN_URL = "https://www.linkedin.com/in/andersonlitig/";
export const INSTAGRAM_URL = "https://www.instagram.com/";
export const wppLink = (msg: string) =>
  `https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(msg)}`;

/* ───────── Botão principal: pílula creme com seta em círculo (modelo do usuário) ───────── */
type PillProps = {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  tone?: "cream" | "navy" | "gold";
  className?: string;
};

export function PillButton({
  children, href, external, onClick, type = "button", tone = "cream", className = "",
}: PillProps) {
  const base =
    "group inline-flex items-center justify-between gap-5 font-semibold text-[14px] md:text-[15px] pl-7 pr-2 py-2 rounded-full transition-all duration-300 cursor-pointer";
  const tones =
    tone === "gold"
      ? "bg-[#CFAE70] text-[#091D39] hover:bg-[#dfc488] shadow-[0_8px_25px_-8px_rgba(207,174,112,0.55)] hover:shadow-[0_12px_30px_-6px_rgba(207,174,112,0.7)] hover:-translate-y-0.5"
      : tone === "cream"
      ? "bg-[#FBF7E9] text-[#0D0D0D] hover:bg-white"
      : "bg-[#091D39] text-[#FBF7E9] hover:bg-[#0d2a52]";
  const circle =
    tone === "gold"
      ? "bg-[#091D39] text-[#CFAE70] border-transparent"
      : tone === "cream"
      ? "border-[#0D0D0D]/25 text-[#0D0D0D]"
      : "border-[#FBF7E9]/30 text-[#CFAE70]";

  const inner = (
    <>
      <span>{children}</span>
      <span
        className={`w-10 h-10 shrink-0 rounded-full border flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 ${circle}`}
      >
        <ArrowUpRight size={17} />
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`${base} ${tones} ${className}`}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`${base} ${tones} ${className}`}>
      {inner}
    </button>
  );
}

/* ───────── Botão secundário: apenas texto com seta ───────── */
export function TextButton({
  children, href, external, onClick, tone = "light", className = "",
}: {
  children: React.ReactNode; href?: string; external?: boolean; onClick?: () => void;
  tone?: "light" | "dark"; className?: string;
}) {
  const color =
    tone === "light"
      ? "text-white/80 hover:text-[#CFAE70] decoration-white/30 hover:decoration-[#CFAE70]"
      : "text-[#091D39] hover:text-[#8a6a2b] decoration-[#091D39]/30 hover:decoration-[#8a6a2b]";
  const cls = `group inline-flex items-center gap-2 text-[14px] font-semibold underline underline-offset-[7px] transition-colors cursor-pointer ${color} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
    </>
  );
  if (href) {
    return (
      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={cls}>
        {inner}
      </a>
    );
  }
  return <button type="button" onClick={onClick} className={cls}>{inner}</button>;
}

/* ───────── Badge de Seção em Pílula com Ícone (Padrão Oficial) ───────── */
export function SectionBadge({
  children,
  icon: Icon,
  tone = "gold",
  className = "",
}: {
  children: React.ReactNode;
  icon?: React.ElementType;
  tone?: "gold" | "navy" | "darkGold";
  className?: string;
}) {
  const styles =
    tone === "gold"
      ? "bg-[#8a6a2b]/10 text-[#8a6a2b] border border-[#8a6a2b]/20"
      : tone === "navy"
      ? "bg-[#091D39]/8 text-[#091D39] border border-[#091D39]/10"
      : "bg-[#CFAE70]/15 text-[#CFAE70] border border-[#CFAE70]/30 backdrop-blur-sm";

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-3.5 ${styles} ${className}`}
    >
      {Icon && <Icon size={13} className={tone === "navy" ? "text-[#8a6a2b]" : ""} />}
      <span>{children}</span>
    </span>
  );
}

/* ───────── Revelação sutil ao rolar ───────── */
export function Reveal({
  children, delay = 0, className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.15, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───────── Header (tom escuro em azul petróleo) ───────── */
const NAV = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Como funciona", href: "/#metodo" },
  { label: "Triagem Rápida", href: "/#triagem" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "/#sobre" },
];

export function SiteHeader(_props: { tone?: "dark" | "light" } = {}) {
  const [open, setOpen] = useState(false);
  const dark = true;
  const wrap = "bg-[#091D39]/97 border-white/10 text-white shadow-[0_8px_30px_-18px_rgba(0,0,0,0.6)]";
  const link = "text-white/75 hover:text-white";

  return (
    <header className={`sticky top-0 z-[100] w-full backdrop-blur-xl border-b ${wrap}`}>
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 h-[72px] md:h-24 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center py-2">
          <img
            src={logoHeader}
            alt="Anderson Litig Advocacia e Consultoria Jurídica"
            className="h-9 md:h-12 w-auto object-contain"
          />
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-8 text-[14px] font-medium">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className={`relative py-1 transition-colors group ${link}`}>
              {n.label}
              <span className="absolute bottom-0 left-0 right-0 h-px bg-[#CFAE70] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={wppLink("Olá, Dr. Anderson! Vim pelo site e gostaria de falar com o advogado.")}
            target="_blank" rel="noopener noreferrer"
            className="group hidden sm:inline-flex items-center gap-3 rounded-full bg-[#CFAE70] text-[#091D39] pl-5 pr-1.5 py-1.5 text-[14px] font-semibold shadow-[0_8px_24px_-10px_rgba(207,174,112,0.7)] hover:bg-[#e0c48a] hover:-translate-y-0.5 transition-all"
          >
            Falar com o advogado
            <span className="w-8 h-8 rounded-full bg-[#091D39] text-[#CFAE70] flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </a>
          <button
            type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 cursor-pointer"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`lg:hidden overflow-hidden border-t px-6 py-6 flex flex-col gap-4 text-[16px] font-medium ${
              dark ? "bg-[#0D0D0D] border-white/10" : "bg-white border-[#091D39]/10"}`}
          >
            {NAV.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className={`py-1 ${link}`}>
                {n.label}
              </a>
            ))}
            <PillButton
              href={wppLink("Olá, Dr. Anderson! Vim pelo site.")}
              external
              tone="gold"
              className="mt-2 w-full"
            >
              Falar com advogado
            </PillButton>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050B14] text-white/70 text-[13px] border-t border-white/10 pt-16 pb-12 px-5 md:px-10">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Coluna 1: Marca & Identidade */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src={logoHeader}
                alt="Anderson Litig Advocacia"
                className="h-9 md:h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-[13.5px] leading-relaxed max-w-sm font-light">
              Advocacia previdenciária especializada, com foco em segurança jurídica, cálculo exato e atendimento humanizado para segurados do INSS em todo o Brasil.
            </p>
            <div className="pt-2 text-[12px] text-[#CFAE70] font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CFAE70]" />
              <span>Dr. Anderson Litig · OAB/ES nº 40.152</span>
            </div>
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 text-[#CFAE70] hover:bg-[#CFAE70] hover:text-[#091D39] hover:border-[#CFAE70] flex items-center justify-center transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 text-[#CFAE70] hover:bg-[#CFAE70] hover:text-[#091D39] hover:border-[#CFAE70] flex items-center justify-center transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#CFAE70]">Navegação</h3>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <a href="/#servicos" className="text-white/70 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="/#metodo" className="text-white/70 hover:text-white transition-colors">Como funciona</a>
              </li>
              <li>
                <a href="/#triagem" className="text-white/70 hover:text-white transition-colors">Triagem Rápida</a>
              </li>
              <li>
                <a href="/#sobre" className="text-white/70 hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Especialidades no INSS */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#CFAE70]">Atuação no INSS</h3>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <Link href="/planejamento" className="text-white/70 hover:text-[#CFAE70] transition-colors">
                  Planejamento Previdenciário
                </Link>
              </li>
              <li>
                <Link href="/aposentadorias" className="text-white/70 hover:text-[#CFAE70] transition-colors">
                  Aposentadoria por Idade & Tempo
                </Link>
              </li>
              <li>
                <Link href="/beneficio-negado" className="text-white/70 hover:text-[#CFAE70] transition-colors">
                  Benefício Negado no INSS
                </Link>
              </li>
              <li>
                <Link href="/beneficios-por-incapacidade" className="text-white/70 hover:text-[#CFAE70] transition-colors">
                  Auxílio por Incapacidade & Perícia
                </Link>
              </li>
              <li>
                <Link href="/revisao-de-aposentadoria" className="text-white/70 hover:text-[#CFAE70] transition-colors">
                  Revisão de Aposentadoria
                </Link>
              </li>
              <li>
                <Link href="/bpc-loas" className="text-white/70 hover:text-[#CFAE70] transition-colors">
                  BPC/LOAS (Idoso e PCD)
                </Link>
              </li>
              <li>
                <Link href="/pensao-por-morte" className="text-white/70 hover:text-[#CFAE70] transition-colors">
                  Pensão por Morte
                </Link>
              </li>
              <li>
                <Link href="/salario-maternidade" className="text-white/70 hover:text-[#CFAE70] transition-colors">
                  Salário-Maternidade
                </Link>
              </li>
              <li>
                <Link href="/servidor-publico" className="text-white/70 hover:text-[#CFAE70] transition-colors">
                  Servidor Público (RPPS)
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Atendimento */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#CFAE70]">Atendimento</h3>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <a
                  href={wppLink("Olá, Dr. Anderson! Vim pelo site.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-[#CFAE70] transition-colors flex items-center gap-1.5"
                >
                  <span>(27) 99294-2888</span>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded">WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@andersonlitig.adv.br"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  contato@andersonlitig.adv.br
                </a>
              </li>
              <li className="text-white/50 text-[12.5px] pt-1">
                Segunda a sexta, das 9h às 18h
              </li>
              <li className="text-white/50 text-[12.5px]">
                Atendimento 100% digital em todo o Brasil
              </li>
            </ul>
            <div className="pt-2">
              <a
                href={wppLink("Olá, Dr. Anderson! Vim pelo rodapé do site e gostaria de falar com o advogado.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#CFAE70] text-[#091D39] pl-4 pr-1.5 py-1.5 text-[13px] font-semibold hover:bg-[#dfc488] transition-all shadow-[0_4px_16px_rgba(207,174,112,0.3)] hover:-translate-y-0.5"
              >
                <span>Falar com o advogado</span>
                <span className="w-7 h-7 rounded-full bg-[#091D39] text-[#CFAE70] flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11.5px] text-white/45">
          <p>
            © {currentYear} Anderson Litig — Advogado. Todos os direitos reservados.
          </p>
          <div className="text-left md:text-right space-y-1">
            <p className="text-white/70 font-medium">OAB/ES nº 40.152 · Conforme Provimento nº 205/2021 do CFOAB</p>
            <p className="text-white/35 text-[11px] max-w-xl">
              As informações deste site têm caráter estritamente informativo e pedagógico, não constituindo consulta jurídica vinculante nem promessa de resultado.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
