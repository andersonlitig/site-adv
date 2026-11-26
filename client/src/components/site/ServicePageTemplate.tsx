import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  AlertCircle,
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock,
  HelpCircle,
  Lock,
  Plus,
  Scale,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import andersonPhoto from "@/assets/anderson-suit.jpg";
import { GoogleCompactBadge } from "@/components/site/GoogleReviewsSection";
import {
  PillButton,
  Reveal,
  SectionBadge,
  SiteFooter,
  SiteHeader,
  TextButton,
  wppLink,
} from "@/components/site/Ui";

export interface TrustBarItem {
  Icon: LucideIcon;
  t: string;
  d: string;
}

export interface SituationCard {
  n: string;
  Icon: LucideIcon;
  tag: string;
  t: string;
  d: string;
  chips: string[];
  whatsappMessage: string;
}

export interface ProcessStep {
  n: string;
  t: string;
  d: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ComparisonColumn {
  label: string;
  title: string;
  points: string[];
  tone?: "cream" | "navy";
}

export interface ServicePageConfig {
  id: string;
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
    knowsAbout: string[];
  };
  breadcrumbLabel: string;
  hero: {
    image: string;
    imageAlt: string;
    badge: string;
    BadgeIcon: LucideIcon;
    title: string;
    highlight: string;
    subtitle: string;
    whatsappMessage: string;
    ctaLabel?: string;
    secondaryLabel?: string;
  };
  trustBar: [TrustBarItem, TrustBarItem, TrustBarItem];
  situations: {
    badge: string;
    BadgeIcon: LucideIcon;
    title: string;
    highlight: string;
    subtitle: string;
    items: SituationCard[];
    footerCtaLabel?: string;
  };
  comparison?: {
    badge: string;
    BadgeIcon: LucideIcon;
    title: string;
    highlight: string;
    subtitle: string;
    columns: [ComparisonColumn, ComparisonColumn];
    painCallout?: string;
  };
  process: {
    badge: string;
    title: string;
    highlight: string;
    docsTitle?: string;
    docsSubtitle?: string;
    docs?: string[];
    docsNote?: string;
    steps: [ProcessStep, ProcessStep, ProcessStep];
    whatsappMessage: string;
    ctaLabel?: string;
  };
  faq: {
    badge: string;
    title: string;
    highlight: string;
    items: FaqItem[];
  };
  finalCta: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    ctaLabel?: string;
    whatsappMessage: string;
  };
  wppFloatMessage: string;
}

export interface ServicePageBExtras {
  transparencyFilterText?: string;
  deliverableIcons?: [LucideIcon, LucideIcon, LucideIcon];
  aboutSubtitle?: string;
  aboutBullets?: string[];
  faqHighlight?: string;
}

const SITE_ORIGIN = "https://www.andersonlitig.adv.br";

const ALL_INSS_SERVICES = [
  { id: "planejamento", label: "Planejamento Previdenciário", href: "/planejamento" },
  { id: "aposentadorias", label: "Aposentadorias do INSS", href: "/aposentadorias" },
  { id: "beneficio-negado", label: "Benefício Negado", href: "/beneficio-negado" },
  { id: "incapacidade", label: "Incapacidade & Perícia", href: "/beneficios-por-incapacidade" },
  { id: "revisao", label: "Revisão de Aposentadoria", href: "/revisao-de-aposentadoria" },
  { id: "bpc-loas", label: "BPC/LOAS", href: "/bpc-loas" },
  { id: "pensao-morte", label: "Pensão por Morte", href: "/pensao-por-morte" },
  { id: "salario-maternidade", label: "Salário-Maternidade", href: "/salario-maternidade" },
  { id: "servidor-publico", label: "Servidor Público (RPPS)", href: "/servidor-publico" },
];

function WppFloat({ message }: { message: string }) {
  return (
    <motion.a
      href={wppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp com o escritório"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 w-14 h-14 rounded-2xl bg-[#25D366] hover:bg-[#22bf5b] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] flex items-center justify-center cursor-pointer"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M16.01 3.2C8.94 3.2 3.2 8.94 3.2 16.01c0 2.26.59 4.47 1.71 6.42L3.1 28.8l6.54-1.71a12.76 12.76 0 0 0 6.37 1.7h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.64-3.75-9.05a12.7 12.7 0 0 0-9.06-3.74Zm0 23.43h-.01a10.6 10.6 0 0 1-5.41-1.48l-.39-.23-3.88 1.02 1.04-3.78-.25-.39a10.6 10.6 0 0 1-1.63-5.66c0-5.85 4.76-10.61 10.62-10.61 2.84 0 5.5 1.11 7.51 3.11a10.55 10.55 0 0 1 3.1 7.5c0 5.85-4.76 10.62-10.7 10.62Zm5.82-7.95c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.09 1.3 3.3.16.21 2.25 3.44 5.45 4.82.76.33 1.36.53 1.82.67.76.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </motion.a>
  );
}

function useServiceSeo(config: ServicePageConfig) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = config.seo.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? null;
    if (metaDesc) metaDesc.setAttribute("content", config.seo.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href") ?? null;
    if (canonical) canonical.setAttribute("href", `${SITE_ORIGIN}${config.seo.canonicalPath}`);

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.setAttribute("data-service-schema", config.id);
    ld.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: `${config.breadcrumbLabel} — Anderson Litig Advocacia`,
        description: config.seo.description,
        url: `${SITE_ORIGIN}${config.seo.canonicalPath}`,
        knowsAbout: config.seo.knowsAbout,
        provider: {
          "@type": "Person",
          name: "Anderson Litig",
          jobTitle: "Advogado Previdenciário",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: config.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ]);
    document.head.appendChild(ld);

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc !== null) metaDesc.setAttribute("content", prevDesc);
      if (canonical && prevCanonical !== null) canonical.setAttribute("href", prevCanonical);
      ld.remove();
    };
  }, [config]);
}

export function ServicePageTemplate({
  config,
  extras,
}: {
  config: ServicePageConfig;
  extras?: ServicePageBExtras;
}) {
  useServiceSeo(config);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { hero, trustBar, situations, comparison, process, faq, finalCta } = config;
  const BadgeHeroIcon = hero.BadgeIcon;
  const BadgeSitIcon = situations.BadgeIcon;
  const BadgeCompIcon = comparison?.BadgeIcon || Scale;
  const delivIcons = extras?.deliverableIcons || [Sparkles, ShieldCheck, CheckCircle2];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-[#CFAE70] selection:text-[#091D39] relative overflow-x-clip antialiased font-sans">
      <WppFloat message={config.wppFloatMessage} />
      <SiteHeader />

      <main>
        {/* 1. Hero (Padrão editorial consistente + CTA direto) */}
        <section className="relative min-h-[74vh] md:min-h-[80vh] flex items-center overflow-hidden bg-[#070E18]">
          <div className="absolute inset-0 pointer-events-none">
            <img
              src={hero.image}
              alt={hero.imageAlt}
              className="w-full h-full object-cover object-center contrast-[1.08] brightness-[0.48] saturate-[0.82]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070E18] via-[#070E18]/88 md:via-[#070E18]/70 to-[#070E18]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#091D39] via-transparent to-[#070E18]/50" />
          </div>

          <div className="relative z-10 max-w-[1360px] mx-auto px-5 md:px-10 py-14 md:py-20 w-full">
            <div className="max-w-[840px] space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-white/70 hover:text-[#CFAE70] transition-colors"
                >
                  <ArrowLeft size={14} />
                  <span>Início</span>
                </Link>
                <span className="text-white/30 text-[12px]">/</span>
                <span className="text-[12.5px] font-medium text-[#CFAE70]">
                  {config.breadcrumbLabel}
                </span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SectionBadge icon={BadgeHeroIcon} tone="darkGold">
                  {hero.badge}
                </SectionBadge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="tracking-[-0.03em]"
              >
                <span className="block font-heading text-[clamp(34px,5.4vw,66px)] font-bold text-white leading-[1.06] mb-1">
                  {hero.title}{" "}
                </span>
                <em className="block font-display not-italic text-[clamp(34px,5.4vw,66px)] font-semibold text-[#CFAE70] leading-[1.03]">
                  {hero.highlight}
                </em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[16.5px] md:text-[20px] text-white/85 leading-relaxed font-light max-w-[650px]"
              >
                {hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 pt-1"
              >
                <PillButton
                  tone="gold"
                  external
                  href={wppLink(hero.whatsappMessage)}
                  className="w-full sm:w-auto"
                >
                  {hero.ctaLabel || "Conversar no WhatsApp"}
                </PillButton>
                <TextButton href="#comparativo" className="self-center sm:self-auto">
                  {hero.secondaryLabel || "Entenda a diferença"}
                </TextButton>
              </motion.div>

              <p className="pt-1 text-[13px] text-white/65 font-light">
                Dr. Anderson Litig · OAB/ES nº 40.152 · Atendimento presencial na Serra/ES e 100% digital em todo o Brasil
              </p>
            </div>
          </div>
        </section>

        {/* 2. TrustBar (#1A1A1A) */}
        <section className="bg-[#1A1A1A] border-b border-white/10 text-white relative z-10">
          <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-5 md:py-6 grid grid-cols-1 sm:grid-cols-3 divide-y divide-white/5 sm:divide-y-0 sm:divide-x sm:divide-white/10">
            {trustBar.map(({ Icon, t, d }, i) => (
              <Reveal
                key={t}
                delay={i * 0.05}
                className="flex items-center justify-start sm:justify-center py-3.5 sm:py-0 sm:px-4 md:px-6 lg:px-8"
              >
                <div className="flex items-center gap-3.5 md:gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 text-[#CFAE70] flex items-center justify-center shadow-sm">
                    <Icon size={19} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[14px] md:text-[14.5px] font-semibold leading-tight text-white tracking-[-0.01em]">
                      {t}
                    </p>
                    <p className="text-[12px] md:text-[12.5px] text-white/55 leading-tight mt-1">
                      {d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 3. PAS / BAB (Antes vs. Depois + Alerta objetivo logo após a dobra inicial) */}
        {comparison && (
          <section
            id="comparativo"
            className="bg-white text-[#091D39] py-16 md:py-24 border-b border-[#091D39]/8"
          >
            <div className="max-w-[1360px] mx-auto px-5 md:px-10 space-y-10 md:space-y-12">
              <Reveal className="max-w-[780px] space-y-4">
                <div>
                  <SectionBadge icon={BadgeCompIcon}>{comparison.badge}</SectionBadge>
                </div>
                <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.06] tracking-[-0.03em]">
                  {comparison.title}{" "}
                  <em className="font-display not-italic text-[#8a6a2b] font-bold">
                    {comparison.highlight}
                  </em>
                </h2>
                <p className="text-[15px] md:text-[17px] text-[#57534E] font-light leading-relaxed">
                  {comparison.subtitle}
                </p>
              </Reveal>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {comparison.columns.map((col, idx) => {
                  const isNavy = col.tone === "navy" || (!col.tone && idx === 1);
                  return (
                    <Reveal
                      key={col.title}
                      delay={idx * 0.08}
                      className={`rounded-2xl p-7 md:p-9 border flex flex-col justify-between gap-6 ${
                        isNavy
                          ? "bg-[#091D39] text-white border-[#091D39] shadow-[0_20px_44px_-18px_rgba(9,29,57,0.35)]"
                          : "bg-[#FAF9F6] text-[#091D39] border-[#091D39]/12"
                      }`}
                    >
                      <div className="space-y-5">
                        <span
                          className={`inline-block text-[11px] font-bold uppercase tracking-[0.16em] px-3 py-1 rounded-md ${
                            isNavy
                              ? "bg-[#CFAE70]/15 text-[#CFAE70]"
                              : "bg-red-950/[0.07] text-[#991B1B]"
                          }`}
                        >
                          {col.label}
                        </span>
                        <h3 className="text-[22px] md:text-[25px] font-bold leading-snug tracking-[-0.02em]">
                          {col.title}
                        </h3>
                        <ul className="space-y-3.5 pt-1">
                          {col.points.map((pt) => (
                            <li
                              key={pt}
                              className={`flex items-start gap-3 text-[14.5px] md:text-[15px] leading-relaxed ${
                                isNavy ? "text-white/85" : "text-[#44403C]"
                              }`}
                            >
                              {isNavy ? (
                                <CheckCircle2
                                  size={17}
                                  className="shrink-0 mt-0.5 text-[#CFAE70]"
                                />
                              ) : (
                                <AlertCircle
                                  size={17}
                                  className="shrink-0 mt-0.5 text-[#B91C1C]"
                                />
                              )}
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              {comparison.painCallout && (
                <Reveal className="rounded-xl bg-[#FAF9F6] border-l-4 border-l-[#B91C1C] border border-[#091D39]/10 px-6 py-4 text-[14.5px] md:text-[15.5px] text-[#091D39] font-medium">
                  {comparison.painCallout}
                </Reveal>
              )}

              <Reveal className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 pt-1">
                <PillButton
                  tone="navy"
                  external
                  href={wppLink(hero.whatsappMessage)}
                  className="w-full sm:w-auto"
                >
                  Tirar minha dúvida no WhatsApp
                </PillButton>
                <TextButton tone="dark" href="#situacoes">
                  Ver se o seu caso entra aqui
                </TextButton>
              </Reveal>
            </div>
          </section>
        )}

        {/* 4. Lista Interativa Enxuta "Isso acontece com você?" (#FAF9F6) */}
        <section
          id="situacoes"
          className="bg-[#FAF9F6] text-[#091D39] py-16 md:py-22 border-b border-[#091D39]/8"
        >
          <div className="max-w-[1360px] mx-auto px-5 md:px-10">
            <Reveal className="max-w-[760px] mb-10 md:mb-12 space-y-4">
              <div>
                <SectionBadge icon={BadgeSitIcon}>{situations.badge}</SectionBadge>
              </div>
              <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.06] tracking-[-0.03em]">
                {situations.title}{" "}
                <em className="font-display not-italic text-[#8a6a2b] font-bold">
                  {situations.highlight}
                </em>
              </h2>
              <p className="text-[15px] md:text-[17px] text-[#57534E] font-light leading-relaxed">
                {situations.subtitle}
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {situations.items.map((s, i) => (
                <Reveal key={s.n} delay={(i % 2) * 0.05}>
                  <a
                    href={wppLink(s.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-full flex items-start justify-between gap-4 rounded-2xl bg-white border border-[#091D39]/10 hover:border-[#CFAE70] p-5 md:p-6 shadow-[0_2px_12px_-6px_rgba(9,29,57,0.06)] hover:shadow-[0_14px_28px_-14px_rgba(9,29,57,0.12)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-start gap-4 min-w-0">
                      <span className="shrink-0 w-11 h-11 rounded-xl bg-[#091D39] text-[#CFAE70] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <s.Icon size={20} />
                      </span>
                      <div className="min-w-0 space-y-1.5">
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-[#8a6a2b]">
                          {s.tag}
                        </span>
                        <h3 className="text-[17px] md:text-[19px] font-bold tracking-[-0.015em] leading-snug text-[#091D39] group-hover:text-[#8a6a2b] transition-colors">
                          {s.t}
                        </h3>
                        <p className="text-[14px] text-[#57534E] font-light leading-relaxed">
                          {s.d}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 w-9 h-9 rounded-full bg-[#091D39]/[0.05] text-[#091D39] group-hover:bg-[#CFAE70] flex items-center justify-center transition-all duration-300 group-hover:rotate-45 mt-1">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
              <PillButton
                tone="navy"
                external
                href={wppLink(hero.whatsappMessage)}
                className="w-full sm:w-auto"
              >
                {situations.footerCtaLabel || "Conversar sobre meu caso"}
              </PillButton>
              <TextButton tone="dark" href="#o-que-entregamos">
                Ver o que está incluído nesse atendimento
              </TextButton>
            </Reveal>
          </div>
        </section>

        {/* 5. Entregáveis Assimétricos (#091D39 — limpo, sem quadrado preto e sem 01-02-03 repetido) */}
        <section
          id="o-que-entregamos"
          className="bg-[#091D39] text-white py-16 md:py-24 border-b border-white/10"
        >
          <div className="max-w-[1360px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <Reveal className="lg:col-span-5 space-y-6">
              <div>
                <SectionBadge icon={Sparkles} tone="darkGold">
                  {process.badge}
                </SectionBadge>
              </div>
              <h2 className="text-[clamp(28px,3.8vw,46px)] font-bold leading-[1.06] tracking-[-0.03em]">
                {process.title}{" "}
                <em className="font-display not-italic text-[#CFAE70] font-bold">
                  {process.highlight}
                </em>
              </h2>
              <p className="text-[15px] md:text-[16.5px] text-white/80 font-light leading-relaxed">
                {extras?.transparencyFilterText ||
                  process.docsNote ||
                  "Veja exatamente o trabalho prático incluído neste atendimento para que você decida cada passo com clareza e segurança."}
              </p>

              <div className="pt-2">
                <PillButton
                  tone="gold"
                  external
                  href={wppLink(process.whatsappMessage)}
                  className="w-full sm:w-auto"
                >
                  {process.ctaLabel || "Solicitar atendimento no WhatsApp"}
                </PillButton>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-7 space-y-4">
              {process.steps.map((step, i) => {
                const IconComp = delivIcons[i % delivIcons.length];
                return (
                  <div
                    key={step.n}
                    className="rounded-2xl bg-white/[0.04] border border-white/12 hover:border-[#CFAE70]/55 p-6 md:p-7 flex items-start gap-4 md:gap-5 transition-colors"
                  >
                    <span className="shrink-0 w-11 h-11 rounded-xl bg-[#CFAE70]/15 border border-[#CFAE70]/35 text-[#CFAE70] flex items-center justify-center">
                      <IconComp size={20} />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-[18px] md:text-[20px] font-bold tracking-[-0.015em] text-white">
                        {step.t}
                      </h3>
                      <p className="text-[14.5px] md:text-[15px] text-white/75 font-light leading-relaxed">
                        {step.d}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </section>

        {/* 6. Único bloco 01-02-03 da página: Como funciona no WhatsApp (#FAF9F6) */}
        <section
          id="como-comecar"
          className="bg-[#FAF9F6] text-[#091D39] py-16 md:py-24 border-b border-[#091D39]/8"
        >
          <div className="max-w-[1360px] mx-auto px-5 md:px-10">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <Reveal className="lg:col-span-5 space-y-5">
                <div>
                  <SectionBadge icon={Clock}>Como funciona no WhatsApp</SectionBadge>
                </div>
                <h2 className="text-[clamp(28px,3.8vw,44px)] font-bold leading-[1.06] tracking-[-0.03em]">
                  Simples do início{" "}
                  <em className="font-display not-italic text-[#8a6a2b] font-bold">
                    ao contrato assinado.
                  </em>
                </h2>
                <p className="text-[15px] md:text-[16px] text-[#57534E] font-light leading-relaxed max-w-[440px]">
                  Você não precisa ir até uma agência nem entender termos difíceis. Tudo acontece pelo celular, com clareza antes de qualquer decisão.
                </p>
                <div className="pt-1">
                  <PillButton
                    tone="gold"
                    external
                    href={wppLink(process.whatsappMessage)}
                    className="w-full sm:w-auto"
                  >
                    {process.ctaLabel || "Conversar no WhatsApp"}
                  </PillButton>
                </div>
              </Reveal>

              <Reveal delay={0.08} className="lg:col-span-7 divide-y divide-[#091D39]/12 border-t border-b border-[#091D39]/12">
                {[
                  {
                    n: "01",
                    t: "Conte o que aconteceu no WhatsApp",
                    d: "Em poucos minutos você explica sua dúvida ou situação. Não precisa separar nenhum documento antes desse primeiro contato.",
                  },
                  {
                    n: "02",
                    t: "Entenda o serviço e as condições",
                    d: "Mostramos o caminho indicado para o seu caso, o que está incluído no trabalho e as condições do contrato antes de você decidir.",
                  },
                  {
                    n: "03",
                    t: "Assine pelo celular e acompanhe tudo",
                    d: "Contrato e procuração digitais pelo WhatsApp. Se precisar baixar algum extrato, orientamos passo a passo sem você enfrentar fila.",
                  },
                ].map((etapa) => (
                  <div
                    key={etapa.n}
                    className="py-5 md:py-6 flex items-start gap-4 md:gap-6"
                  >
                    <span className="shrink-0 w-11 h-11 rounded-xl bg-[#091D39] text-[#CFAE70] font-heading tabular-nums font-bold text-[15px] flex items-center justify-center shadow-sm">
                      {etapa.n}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[18px] md:text-[20px] font-bold tracking-[-0.015em] text-[#091D39]">
                        {etapa.t}
                      </h3>
                      <p className="mt-1.5 text-[14.5px] md:text-[15px] text-[#57534E] font-light leading-relaxed">
                        {etapa.d}
                      </p>
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* 7. Sobre + Badge Compacto 5,0 Google (#091D39) */}
        <section className="bg-[#091D39] text-white py-16 md:py-24">
          <div className="max-w-[1360px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-[420px] mx-auto lg:max-w-none border border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]">
                <img
                  src={andersonPhoto}
                  alt="Dr. Anderson Litig — Advogado Previdenciário"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070E18]/85 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
                  <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#CFAE70]">
                    Advogado responsável
                  </p>
                  <p className="text-[22px] md:text-[26px] font-bold tracking-[-0.02em]">
                    Dr. Anderson Litig
                  </p>
                  <p className="text-[13px] text-white/75">OAB/ES nº 40.152</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-7 space-y-6">
              <div>
                <SectionBadge icon={Scale} tone="darkGold">
                  Quem conduz o seu caso
                </SectionBadge>
              </div>
              <h2 className="text-[clamp(28px,3.8vw,46px)] font-bold leading-[1.06] tracking-[-0.03em]">
                Foco total em quem{" "}
                <em className="font-display not-italic text-[#CFAE70] font-bold">
                  depende do INSS.
                </em>
              </h2>
              <p className="text-[15.5px] md:text-[17.5px] text-white/80 font-light leading-relaxed">
                {extras?.aboutSubtitle ||
                  "Sou Anderson Litig (OAB/ES nº 40.152), advogado pós-graduado e atuante em aposentadorias e benefícios do INSS. Traduzimos as regras complicadas em linguagem clara para você decidir seus próximos passos com segurança."}
              </p>

              <ul className="divide-y divide-white/12 border-y border-white/12">
                {(
                  extras?.aboutBullets || [
                    "Atendimento direto com a equipe jurídica — sem robôs no WhatsApp",
                    "Membro da Comissão de Direito Previdenciário da OAB Serra/ES",
                    "Presencial na Serra/ES e 100% online em todo o Brasil e exterior",
                    "Conferência cuidadosa de carteiras antigas, carnês, extratos e laudos",
                  ]
                ).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5 py-3.5 text-[14.5px] text-white/85"
                  >
                    <Check size={16} className="text-[#CFAE70] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div>
                <GoogleCompactBadge tone="dark" />
              </div>

              <div className="pt-1">
                <PillButton
                  tone="gold"
                  external
                  href={wppLink(hero.whatsappMessage)}
                  className="w-full sm:w-auto"
                >
                  Conversar com o Dr. Anderson
                </PillButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 8. FAQ em linguagem acessível (#FFFFFF) + Outras áreas */}
        <section className="bg-white text-[#091D39] py-16 md:py-24">
          <div className="max-w-[1360px] mx-auto px-5 md:px-10 space-y-14">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-20">
              <Reveal className="lg:col-span-4 space-y-4">
                <div>
                  <SectionBadge icon={HelpCircle}>{faq.badge}</SectionBadge>
                </div>
                <h2 className="text-[clamp(28px,3.8vw,46px)] font-bold leading-[1.06] tracking-[-0.03em]">
                  {faq.title}{" "}
                  <em className="font-display not-italic text-[#8a6a2b] font-bold">
                    {faq.highlight}
                  </em>
                </h2>
              </Reveal>

              <Reveal delay={0.08} className="lg:col-span-8 border-t border-[#091D39]/20">
                {faq.items.map((f, i) => (
                  <div key={f.q} className="border-b border-[#091D39]/15">
                    <button
                      type="button"
                      aria-expanded={openFaq === i}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-5 py-5 md:py-6 text-left cursor-pointer group"
                    >
                      <span className="text-[16px] md:text-[19px] font-bold tracking-[-0.01em] leading-snug group-hover:text-[#8a6a2b] transition-colors">
                        {f.q}
                      </span>
                      <Plus
                        size={22}
                        className={`shrink-0 transition-transform duration-300 ${
                          openFaq === i ? "rotate-45 text-[#8a6a2b]" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 md:pr-10 text-[15px] md:text-[15.5px] text-[#57534E] font-light leading-relaxed">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </Reveal>
            </div>

            <div className="pt-8 border-t border-[#091D39]/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <span className="text-[12.5px] font-semibold uppercase tracking-wider text-[#091D39]/60">
                Outras áreas do escritório:
              </span>
              <div className="flex flex-wrap gap-2">
                {ALL_INSS_SERVICES.filter((srv) => srv.id !== config.id).map((srv) => (
                  <Link
                    key={srv.id}
                    href={srv.href}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF9F6] border border-[#091D39]/12 hover:border-[#CFAE70] hover:text-[#8a6a2b] px-3.5 py-1.5 text-[12.5px] font-medium text-[#091D39] transition-colors"
                  >
                    <span>{srv.label}</span>
                    <ArrowUpRight size={13} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. Chamada Final (#070E18) */}
        <section className="bg-[#070E18] py-18 md:py-24 border-t border-white/10 relative overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-200px] w-[700px] h-[400px] rounded-full bg-[#CFAE70]/10 blur-[140px] pointer-events-none" />
          <div className="max-w-[1360px] mx-auto px-5 md:px-10 relative">
            <Reveal className="max-w-[880px] space-y-6">
              <div>
                <SectionBadge icon={Sparkles} tone="darkGold">
                  {finalCta.badge}
                </SectionBadge>
              </div>
              <h2 className="text-[clamp(32px,5vw,68px)] font-bold leading-[1.03] tracking-[-0.04em]">
                {finalCta.title}{" "}
                <em className="font-display not-italic text-[#CFAE70] font-bold">
                  {finalCta.highlight}
                </em>
              </h2>
              <p className="text-[16.5px] md:text-[19px] text-white/80 font-light max-w-[660px] leading-relaxed">
                {finalCta.subtitle}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-[13px] text-white/75 pt-0.5">
                <span className="inline-flex items-center gap-2">
                  <Lock size={14} className="text-[#CFAE70]" /> Atendimento reservado (OAB/ES)
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#CFAE70]" /> Presencial ou 100% digital
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check size={14} className="text-[#CFAE70]" /> Sem precisar enviar documentos agora
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 pt-1">
                <PillButton
                  tone="gold"
                  external
                  href={wppLink(finalCta.whatsappMessage)}
                  className="w-full sm:w-auto"
                >
                  {finalCta.ctaLabel || "Conversar no WhatsApp"}
                </PillButton>
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 text-[14px] font-medium text-white/75 hover:text-[#CFAE70] transition-colors self-center sm:self-auto"
                >
                  <span>Voltar à página inicial</span>
                  <span className="h-[1px] w-4 bg-white/40 group-hover:w-8 group-hover:bg-[#CFAE70] transition-all duration-300" />
                </Link>
              </div>
            </Reveal>

            <div className="mt-14 md:mt-16 grid sm:grid-cols-3 gap-7 pt-8 border-t border-white/12 text-[14px]">
              {[
                ["WhatsApp", "+55 (27) 99294-2888"],
                ["E-mail", "contato@andersonlitig.adv.br"],
                ["Atendimento", "Segunda a sexta, das 9h às 18h"],
              ].map(([l, v]) => (
                <div key={l}>
                  <span className="block text-[11px] uppercase tracking-wider text-white/40 mb-1">
                    {l}
                  </span>
                  <p className="text-[15px] md:text-[16px] font-semibold text-white break-words">
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
