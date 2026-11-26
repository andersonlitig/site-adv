import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Baby,
  BookOpen,
  Briefcase,
  Calculator,
  CalendarCheck,
  Check,
  CheckCircle2,
  Clock,
  FileSearch,
  FileText,
  HardHat,
  HeartHandshake,
  HelpCircle,
  Landmark,
  Lock,
  Plus,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  User,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import andersonPhoto from "@/assets/anderson-suit.jpg";
import ponteVitoria from "@/assets/terceira-ponte-vitoria.jpg";
import { BLOG_POSTS } from "@/data/blogPosts";
import { BlogHighlights } from "@/components/blog/BlogHighlights";
import { GoogleReviewsSection } from "@/components/site/GoogleReviewsSection";
import {
  PillButton,
  Reveal,
  SectionBadge,
  SiteFooter,
  SiteHeader,
  TextButton,
  wppLink,
} from "@/components/site/Ui";

export default function HomeV2() {
  useEffect(() => {
    document.title =
      "Advogado Previdenciário em Serra e Vitória/ES | Anderson Litig – INSS, Aposentadoria e Benefícios";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Advogado previdenciário em Serra e Vitória/ES. Planejamento previdenciário, aposentadorias no INSS, benefício negado, incapacidade, BPC/LOAS e servidor público (RPPS). Atendimento online no Brasil e exterior. OAB/ES 40.152."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-[#CFAE70] selection:text-[#091D39] relative overflow-x-clip antialiased">
      <WppFloat />
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <ComparisonHome />
        <ServicesList />
        <DeliverablesHome />
        <HowItWorks />
        <Triagem />
        <GoogleReviewsSection variant="slider1" />
        <About />
        <BlogHome />
        <FAQ />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ───────────────── WhatsApp flutuante ───────────────── */
function WppFloat() {
  return (
    <motion.a
      href={wppLink(
        "Olá, Dr. Anderson! Vim pelo site e gostaria de uma orientação sobre meu caso no INSS."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-5 right-5 z-[999] w-14 h-14 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center shadow-[0_16px_36px_-10px_rgba(37,211,102,0.6)] transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </motion.a>
  );
}

/* ───────────────── 1. Hero SPIN + Prova Social ───────────────── */
function Hero() {
  return (
    <section className="relative min-h-[82vh] md:min-h-[88vh] flex items-center overflow-hidden bg-[#070E18]">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={ponteVitoria}
          alt="Terceira Ponte — Grande Vitória, ES"
          className="w-full h-full object-cover object-[65%_center] contrast-[1.12] brightness-[0.52] saturate-[0.82]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070E18] via-[#070E18]/85 md:via-[#070E18]/65 to-[#070E18]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091D39] via-transparent to-[#070E18]/45" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 md:px-10 py-14 md:py-22 w-full">
        <div className="max-w-[840px] space-y-6 md:space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold uppercase tracking-wider bg-[#CFAE70]/15 text-[#CFAE70] border border-[#CFAE70]/30 backdrop-blur-sm">
              <Sparkles size={13} />
              Advocacia Previdenciária · INSS e RPPS
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11.5px] font-semibold bg-white/10 text-white border border-white/15 backdrop-blur-sm">
              <Star size={12} className="fill-[#FBBC05] text-[#FBBC05]" />
              <span>5,0 no Google · Avaliações verificadas</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="tracking-[-0.03em]"
          >
            <span className="block font-heading text-[clamp(38px,6.2vw,74px)] font-bold text-white tracking-[-0.03em] leading-[1.05] mb-1 md:mb-2">
              Advocacia para
            </span>
            <em className="block font-display not-italic text-[clamp(38px,6.2vw,74px)] font-semibold text-[#CFAE70] leading-[1.02] tracking-[-0.03em]">
              aposentadoria e benefícios.
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="text-[16.5px] md:text-[20px] text-white/85 leading-relaxed font-light max-w-[700px]"
          >
            Conferimos suas carteiras, histórico no INSS e cálculos antes de você
            pedir aposentadoria, aceitar valor menor ou desistir após uma
            negativa. Presencial na Serra/ES e digital no Brasil e exterior.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 pt-1"
          >
            <PillButton
              tone="gold"
              external
              href={wppLink(
                "Olá, Dr. Anderson! Vim pelo site e quero uma orientação sobre meu caso no INSS."
              )}
              className="w-full sm:w-auto"
            >
              Conversar no WhatsApp
            </PillButton>
            <TextButton href="#comparativo" className="self-center sm:self-auto">
              Entenda o que muda com análise prévia
            </TextButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-1 text-[13px] text-white/65 font-light"
          >
            Dr. Anderson Litig · OAB/ES nº 40.152 · Atendimento presencial na
            Serra/ES e 100% digital em todo o Brasil
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── 2. Faixa de Confiança ───────────────── */
function TrustBar() {
  const items = [
    {
      Icon: Smartphone,
      t: "Atendimento 100% Digital",
      d: "Para todo o Brasil e brasileiros no exterior, ou presencial na Serra/ES",
    },
    {
      Icon: Scale,
      t: "Foco Exclusivo em Previdência",
      d: "INSS, BPC/LOAS, revisões, perícias e servidor público (RPPS)",
    },
    {
      Icon: ShieldCheck,
      t: "Clareza Antes de Contratar",
      d: "Explicamos os caminhos reais sem juridiquês e sem falsas promessas",
    },
  ];

  return (
    <section className="bg-[#1A1A1A] border-b border-white/10 text-white relative z-10">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-5 md:py-6 grid grid-cols-1 sm:grid-cols-3 divide-y divide-white/5 sm:divide-y-0 sm:divide-x sm:divide-white/10">
        {items.map(({ Icon, t, d }, i) => (
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
  );
}

/* ───────────────── 3. Antes vs. Depois (PAS / BAB) ───────────────── */
function ComparisonHome() {
  const beforePoints = [
    "O sistema automático do Meu INSS aplica a regra disponível na tela sem avisar quando outra fórmula paga mais todo mês.",
    "Carteiras antigas sem data de saída, trabalho insalubre (PPP), tempo rural ou carnês ficam fora da contagem.",
    "Quem recebe negativa de auxílio-doença, BPC ou pensão muitas vezes aceita a recusa ou perde prazos de 30 e 90 dias.",
    "Depois que a primeira parcela da aposentadoria é sacada, a lei não permite voltar atrás para trocar de regra.",
  ];

  const afterPoints = [
    "Auditamos todo o extrato do INSS e sua documentação para saber se faltam períodos ou correções antes do pedido.",
    "Comparamos as regras possíveis para você decidir o momento certo — evitando pagar guias caras sem retorno.",
    "Em caso de benefício negado ou cortado, analisamos se vale recorrer no INSS ou entrar na Justiça preservando atrasados.",
    "Conversamos em linguagem simples para você entender seus direitos e escolher com segurança antes de assinar qualquer coisa.",
  ];

  return (
    <section
      id="comparativo"
      className="bg-white text-[#091D39] py-16 md:py-24 border-b border-[#091D39]/8"
    >
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        <Reveal className="max-w-[780px] mb-10 md:mb-14 space-y-3.5">
          <div>
            <SectionBadge icon={Scale}>Antes vs. Depois</SectionBadge>
          </div>
          <h2 className="text-[clamp(28px,4.2vw,50px)] font-bold leading-[1.06] tracking-[-0.03em]">
            Tentar sozinho no aplicativo{" "}
            <em className="font-display not-italic text-[#8a6a2b] font-bold">
              × decidir com conferência técnica.
            </em>
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#57534E] font-light leading-relaxed">
            Quem confia apenas na análise automática do INSS muitas vezes só
            percebe o prejuízo meses ou anos depois:
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="h-full rounded-3xl bg-[#FAF9F6] border border-[#091D39]/12 p-7 md:p-9 space-y-6">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-100/80 rounded-md px-2.5 py-1 mb-3">
                  Sem análise prévia (Antes)
                </span>
                <h3 className="text-[21px] md:text-[24px] font-bold tracking-[-0.02em] leading-snug text-[#091D39]">
                  Riscos de protocolar ou desistir sem conferir
                </h3>
              </div>

              <ul className="space-y-4">
                {beforePoints.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-3 text-[14.5px] md:text-[15.5px] text-[#44403C] font-light leading-relaxed"
                  >
                    <AlertCircle
                      size={18}
                      className="text-red-600 shrink-0 mt-1"
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl bg-[#091D39] text-white border border-[#CFAE70]/35 p-7 md:p-9 space-y-6 shadow-[0_24px_50px_-20px_rgba(9,29,57,0.45)]">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#091D39] bg-[#CFAE70] rounded-md px-2.5 py-1 mb-3">
                  Com nossa orientação (Depois)
                </span>
                <h3 className="text-[21px] md:text-[24px] font-bold tracking-[-0.02em] leading-snug text-white">
                  Clareza de direitos, datas e caminhos
                </h3>
              </div>

              <ul className="space-y-4">
                {afterPoints.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-3 text-[14.5px] md:text-[15.5px] text-white/85 font-light leading-relaxed"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#CFAE70] shrink-0 mt-1"
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-8">
          <div className="rounded-2xl bg-[#FAF9F6] border border-[#8a6a2b]/25 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-[14px] md:text-[15px] text-[#091D39] font-medium leading-relaxed">
              <strong className="text-[#8a6a2b]">Atenção prática:</strong> tanto
              a escolha de aposentadoria quanto a perda de prazos em negativas e
              pensões afetam valores para o resto da vida ou parcelas atrasadas.
            </p>
            <PillButton
              tone="gold"
              external
              href={wppLink(
                "Olá, Dr. Anderson! Quero conferir minha situação no INSS antes de pedir ou recorrer."
              )}
              className="shrink-0 w-full md:w-auto"
            >
              Tirar minha dúvida no WhatsApp
            </PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────── 4. Áreas de Atuação (9 serviços com tags, chips e links) ───────────────── */
const SERVICES = [
  {
    Icon: Calculator,
    tag: "Mais procurado",
    t: "Planejamento Previdenciário",
    d: "Calculamos com exatidão quanto e quando você vai receber, corrigindo falhas no extrato do INSS (CNIS) para você não perder dinheiro todo mês.",
    chips: ["Maior Valor Mensal", "Momento Certo", "Correção do CNIS"],
    href: "/planejamento",
  },
  {
    Icon: CalendarCheck,
    tag: "Tempo & Idade",
    t: "Aposentadorias do INSS",
    d: "Análise do seu histórico de trabalho para identificar o momento indicado de pedir a sua aposentadoria pela regra mais vantajosa.",
    chips: ["Idade & Tempo", "Especial (PPP)", "Rural & PCD"],
    href: "/aposentadorias",
  },
  {
    Icon: ShieldAlert,
    tag: "Prazo de 30 dias",
    t: "Benefício Negado pelo INSS",
    d: "Teve o benefício negado? Analisamos o motivo da recusa para recorrer no próprio INSS ou entrar na Justiça Federal com todos os atrasados.",
    chips: ["Recurso no INSS", "Ação na Justiça", "Preservação de Atrasados"],
    href: "/beneficio-negado",
  },
  {
    Icon: Activity,
    tag: "Perícia Médica",
    t: "Auxílio-Doença e Incapacidade",
    d: "Não consegue trabalhar por doença ou acidente? Orientamos você na perícia médica, revertemos cortes injustos e resolvemos o limbo no emprego.",
    chips: ["Auxílio-Doença", "Auxílio-Acidente", "Limbo Trabalhista"],
    href: "/beneficios-por-incapacidade",
  },
  {
    Icon: FileSearch,
    tag: "Quem já recebe",
    t: "Revisão de Aposentadoria",
    d: "Já é aposentado e acha o valor baixo? Conferimos se o INSS errou no cálculo ou esqueceu períodos de trabalho para aumentar a sua renda.",
    chips: ["Correção de Cálculo", "Vínculos Omitidos", "Revisão dos 10 Anos"],
    href: "/revisao-de-aposentadoria",
  },
  {
    Icon: Users,
    tag: "Assistencial · Sem INSS",
    t: "BPC/LOAS (Idoso e PCD)",
    d: "1 salário mínimo mensal para idosos com 65+ anos ou pessoas com deficiência e autismo (TEA) de baixa renda, mesmo sem nunca ter pago INSS.",
    chips: ["Idoso 65+", "PCD & Autismo", "CadÚnico & Renda"],
    href: "/bpc-loas",
  },
  {
    Icon: HeartHandshake,
    tag: "Amparo Familiar",
    t: "Pensão por Morte",
    d: "Pedido, comprovação de união estável, período de graça e revisão de cotas para assegurar a proteção da família com agilidade e acolhimento.",
    chips: ["Cônjuge & Filhos", "União Estável", "Prazo 90/180 Dias"],
    href: "/pensao-por-morte",
  },
  {
    Icon: Baby,
    tag: "Mães & Gestantes",
    t: "Salário-Maternidade",
    d: "Benefício previsto em lei para empregadas, desempregadas no período de proteção, MEI, autônomas e adoção, inclusive retroativo dos últimos 5 anos.",
    chips: ["Desempregada", "MEI & Autônoma", "Atrasados 5 Anos"],
    href: "/salario-maternidade",
  },
  {
    Icon: Landmark,
    tag: "Regime Próprio",
    t: "Servidor Público (RPPS & CTC)",
    d: "Planejamento específico para servidores: integralidade e paridade, emissão e análise de CTC, abono de permanência e dupla aposentadoria.",
    chips: ["Emissão de CTC", "Integralidade", "Abono Permanência"],
    href: "/servidor-publico",
  },
];

function ServicesList() {
  return (
    <section
      id="servicos"
      className="bg-[#FAF9F6] text-[#091D39] py-16 md:py-24 border-b border-[#091D39]/8"
    >
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        <Reveal className="max-w-[760px] mb-10 md:mb-14 space-y-4">
          <div>
            <SectionBadge icon={Briefcase}>Áreas de Atuação</SectionBadge>
          </div>
          <h2 className="text-[clamp(30px,4.4vw,54px)] font-bold leading-[1.06] tracking-[-0.03em]">
            Como podemos{" "}
            <em className="font-display not-italic text-[#8a6a2b] font-bold">
              ajudar você.
            </em>
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#57534E] font-light leading-relaxed">
            Escolha a sua situação abaixo. Você pode saber mais sobre o caso ou
            conversar direto com a nossa equipe pelo WhatsApp:
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.href} delay={(i % 3) * 0.07}>
              <Link
                href={s.href}
                className="group h-full flex flex-col justify-between rounded-2xl bg-white border border-[#091D39]/10 hover:border-[#CFAE70] p-6 md:p-7 shadow-[0_4px_16px_-8px_rgba(9,29,57,0.06)] hover:shadow-[0_20px_36px_-14px_rgba(9,29,57,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="w-12 h-12 rounded-xl bg-[#091D39] text-[#CFAE70] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#071527] transition-all duration-300 shadow-sm">
                      <s.Icon size={22} />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#091D39] bg-[#091D39]/[0.05] group-hover:bg-[#CFAE70]/20 group-hover:text-[#8a6a2b] rounded-md px-2.5 py-1 transition-colors">
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="text-[20px] md:text-[22px] font-bold tracking-[-0.02em] leading-snug group-hover:text-[#8a6a2b] transition-colors">
                    {s.t}
                  </h3>
                  <p className="mt-2.5 text-[14px] md:text-[14.5px] text-[#57534E] font-light leading-relaxed">
                    {s.d}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#091D39]/6">
                    {s.chips.map((chip) => (
                      <span
                        key={chip}
                        className="text-[11.5px] font-medium text-[#091D39]/70 bg-[#FAF9F6] border border-[#091D39]/8 rounded-md px-2 py-0.5"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#091D39]/8 flex items-center justify-between text-[13.5px] font-semibold text-[#091D39] group-hover:text-[#8a6a2b] transition-colors">
                  <span>Saiba mais</span>
                  <span className="w-8 h-8 rounded-full bg-[#091D39]/[0.05] group-hover:bg-[#CFAE70] group-hover:text-[#091D39] flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
          <PillButton
            tone="navy"
            external
            href={wppLink(
              "Olá, Dr. Anderson! Gostaria de conversar com o advogado sobre meu caso."
            )}
            className="w-full sm:w-auto"
          >
            Conversar no WhatsApp
          </PillButton>
          <TextButton tone="dark" href="#triagem">
            Fazer triagem rápida
          </TextButton>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────── 5. O que está incluído (assimétrico Opção B) ───────────────── */
function DeliverablesHome() {
  const deliverables = [
    {
      Icon: FileSearch,
      t: "Conferência completa antes de protocolar",
      d: "Cruzamos extrato CNIS, carteiras antigas, carnês, PPP, laudos médicos ou documentos familiares para nenhum direito ficar fora do pedido.",
    },
    {
      Icon: Scale,
      t: "Caminho definido sem juridiquês",
      d: "Explicamos em conversa direta se vale ajustar o cadastro, esperar alguns meses, recorrer no INSS ou ingressar na Justiça — e o porquê de cada escolha.",
    },
    {
      Icon: ShieldCheck,
      t: "Acompanhamento transparente ponta a ponta",
      d: "Você acompanha cada andamento pelo WhatsApp em linguagem clara, desde a análise documental até a decisão final.",
    },
  ];

  return (
    <section
      id="o-que-entregamos"
      className="bg-[#091D39] text-white py-16 md:py-24 border-y border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <Reveal className="lg:col-span-5 space-y-5">
          <div>
            <SectionBadge icon={Sparkles} tone="darkGold">
              O que está incluído
            </SectionBadge>
          </div>
          <h2 className="text-[clamp(28px,4vw,46px)] font-bold leading-[1.06] tracking-[-0.03em]">
            Mais do que palpites.{" "}
            <em className="font-display not-italic text-[#CFAE70] font-bold">
              Clareza para decidir com segurança.
            </em>
          </h2>
          <p className="text-[15.5px] md:text-[17px] text-white/75 font-light leading-relaxed">
            Em vez de promessas genéricas, trabalhamos com números conferidos e
            provas organizadas. Se após a triagem ou análise técnica percebermos
            que ainda não compensa pedir agora ou que não há base jurídica
            segura, dizemos isso abertamente antes de você contratar.
          </p>
          <div className="pt-2">
            <PillButton
              tone="gold"
              external
              href={wppLink(
                "Olá, Dr. Anderson! Quero entender qual atendimento previdenciário é indicado para o meu caso."
              )}
              className="w-full sm:w-auto"
            >
              Conversar sobre meu caso
            </PillButton>
          </div>
        </Reveal>

        <div className="lg:col-span-7 space-y-4">
          {deliverables.map((item, i) => (
            <Reveal key={item.t} delay={i * 0.08}>
              <div className="rounded-2xl bg-white/[0.04] border border-white/12 p-6 md:p-7 flex items-start gap-4 md:gap-5 hover:border-[#CFAE70]/45 transition-colors">
                <span className="shrink-0 w-11 h-11 rounded-xl bg-[#CFAE70]/15 border border-[#CFAE70]/30 text-[#CFAE70] flex items-center justify-center">
                  <item.Icon size={21} />
                </span>
                <div className="space-y-1.5">
                  <h3 className="text-[18px] md:text-[20px] font-bold tracking-[-0.015em] text-white">
                    {item.t}
                  </h3>
                  <p className="text-[14.5px] md:text-[15px] text-white/75 font-light leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── 6. Como começar (única lista 01·02·03, sem chips) ───────────────── */
const PASSOS_ATENDIMENTO = [
  {
    n: "01",
    Icon: Smartphone,
    t: "Conte o que aconteceu pelo WhatsApp",
    d: "Explique sua dúvida em poucas linhas ou escolha sua situação na triagem abaixo — sem precisar juntar todos os documentos antes de chamar.",
  },
  {
    n: "02",
    Icon: FileText,
    t: "Receba orientação do serviço e escopo",
    d: "Indicamos qual trabalho faz sentido para o seu caso, explicamos o que está incluído e apresentamos as condições antes de você decidir.",
  },
  {
    n: "03",
    Icon: ShieldCheck,
    t: "Assinatura digital e acompanhamento direto",
    d: "Com contrato e procuração pelo celular (ou presencialmente na Serra/ES), cuidamos da análise, protocolo e atualizações pelo WhatsApp.",
  },
];

function HowItWorks() {
  return (
    <section
      id="metodo"
      className="bg-white text-[#091D39] py-16 md:py-24 border-b border-[#091D39]/8"
    >
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        <Reveal className="max-w-[760px] mb-10 md:mb-14 space-y-3.5">
          <div>
            <SectionBadge icon={CalendarCheck}>Como Funciona</SectionBadge>
          </div>
          <h2 className="text-[clamp(30px,4.2vw,50px)] font-bold leading-[1.06] tracking-[-0.03em]">
            Começar é simples e{" "}
            <em className="font-display not-italic text-[#8a6a2b] font-bold">
              sem deslocamento obrigatório.
            </em>
          </h2>
          <p className="text-[15px] md:text-[16.5px] text-[#57534E] font-light leading-relaxed">
            Você escolhe entre atendimento presencial na Serra/ES ou 100% digital
            pelo celular de qualquer cidade ou país:
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {PASSOS_ATENDIMENTO.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-[#FAF9F6] border border-[#091D39]/10 hover:border-[#CFAE70]/80 p-7 md:p-8 flex flex-col gap-5 shadow-[0_4px_20px_-10px_rgba(9,29,57,0.06)] hover:shadow-[0_20px_36px_-14px_rgba(9,29,57,0.12)] hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center justify-between gap-3">
                  <span className="w-11 h-11 rounded-xl bg-[#091D39] text-[#CFAE70] flex items-center justify-center group-hover:scale-105 transition-all shadow-sm">
                    <s.Icon size={21} />
                  </span>
                  <span className="text-[28px] md:text-[32px] font-bold font-heading tabular-nums text-[#091D39]/20 group-hover:text-[#8a6a2b] transition-colors">
                    {s.n}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-[19px] md:text-[21px] font-bold tracking-[-0.02em] leading-snug group-hover:text-[#8a6a2b] transition-colors">
                    {s.t}
                  </h3>
                  <p className="text-[14.5px] md:text-[15px] text-[#57534E] font-light leading-relaxed">
                    {s.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── 7. Triagem Rápida em 3 etapas ───────────────── */
type TriagemItem = {
  id: string;
  Icon: React.ElementType;
  t: string;
  d: string;
  perguntaEtapa2?: string;
  href?: string;
  ctaLabel?: string;
};

const OBJETIVOS_TRIAGEM: TriagemItem[] = [
  {
    id: "negado",
    Icon: ShieldAlert,
    t: "Recebi um 'não' do INSS ou meu pedido está parado",
    d: "Benefício negado recentemente, demora na análise ou documento rejeitado",
    perguntaEtapa2: "O que aconteceu com o seu pedido no INSS?",
    href: "/beneficio-negado",
    ctaLabel: "Ver detalhes sobre Benefício Negado",
  },
  {
    id: "planejamento",
    Icon: Calculator,
    t: "Quero aposentar e não sei a melhor data ou regra",
    d: "Descobrir quanto vou receber e corrigir falhas no extrato antes do pedido",
    perguntaEtapa2: "Qual é a sua maior dúvida hoje antes de pedir?",
    href: "/planejamento",
    ctaLabel: "Ver detalhes sobre Planejamento Previdenciário",
  },
  {
    id: "incapacidade",
    Icon: Activity,
    t: "Estou doente, acidentado(a) ou cortaram meu auxílio",
    d: "Perícia reprovada, sequela que atrapalha o trabalho ou barrado pela empresa",
    perguntaEtapa2: "O que descreve melhor o seu problema de saúde hoje?",
    href: "/beneficios-por-incapacidade",
    ctaLabel: "Ver detalhes sobre Incapacidade e Perícia",
  },
  {
    id: "revisao",
    Icon: FileSearch,
    t: "Já sou aposentado(a), mas acho o valor errado",
    d: "Desconfio que faltaram salários na conta ou há descontos estranhos",
    perguntaEtapa2: "O que você percebeu no seu benefício atual?",
    href: "/revisao-de-aposentadoria",
    ctaLabel: "Ver detalhes sobre Revisão de Aposentadoria",
  },
  {
    id: "familia",
    Icon: HeartHandshake,
    t: "Pensão por morte, BPC/LOAS (idoso/PCD) ou salário-maternidade",
    d: "Falecimento de familiar, baixa renda (65+ ou deficiência/autismo) ou parto/adoção",
    perguntaEtapa2: "Qual é a situação da sua família no momento?",
    href: "/bpc-loas",
    ctaLabel: "Ver detalhes sobre BPC/LOAS e Benefícios Familiares",
  },
  {
    id: "servidor",
    Icon: Landmark,
    t: "Sou servidor público e tenho tempo privado no INSS",
    d: "Dúvida sobre usar a certidão (CTC), integralidade ou duas aposentadorias",
    perguntaEtapa2: "O que você precisa resolver como servidor público?",
    href: "/servidor-publico",
    ctaLabel: "Ver detalhes sobre Servidor Público (RPPS)",
  },
];

const SITUACOES_POR_OBJETIVO: Record<string, TriagemItem[]> = {
  negado: [
    {
      id: "Recusa recente do INSS (menos de 30 dias)",
      Icon: Clock,
      t: "O INSS negou faz pouco tempo (menos de 30 dias)",
      d: "Quero saber se vale recorrer dentro do INSS ou ir direto à Justiça",
    },
    {
      id: "O INSS não aceitou meu tempo de carteira, roça ou insalubridade",
      Icon: AlertCircle,
      t: "Ignoraram meu tempo de carteira, roça ou PPP",
      d: "Meses antigos ou trabalho pesado ficaram fora da contagem",
    },
    {
      id: "Meu pedido está parado há meses sem resposta",
      Icon: ShieldAlert,
      t: "Meu pedido está parado há meses sem resposta",
      d: "Preciso destravar a análise do processo no INSS",
    },
    {
      id: "Negaram meu benefício na perícia ou por renda familiar",
      Icon: Scale,
      t: "Negativa já passou de 30 dias ou envolve perícia/renda",
      d: "Quero avaliar se dá para entrar na Justiça Federal",
    },
  ],
  planejamento: [
    {
      id: "Quero saber quando posso parar de trabalhar e quanto vou receber",
      Icon: Clock,
      t: "Quero saber a melhor data e o valor estimado",
      d: "Para não escolher uma regra que pague menos para sempre",
    },
    {
      id: "Meu extrato (CNIS) está bagunçado ou falta empresa antiga",
      Icon: AlertCircle,
      t: "Faltam empresas ou há erros no meu extrato do INSS",
      d: "Quero limpar as pendências antes de dar entrada",
    },
    {
      id: "Pago por conta própria (autônomo/MEI) e não sei qual valor pagar",
      Icon: CheckCircle2,
      t: "Pago por conta própria / MEI e não sei se vale pagar alto",
      d: "Evitar gastar dinheiro todo mês sem aumentar o benefício",
    },
    {
      id: "Trabalhei com ruído/insalubridade ou na roça e quero somar tudo",
      Icon: HardHat,
      t: "Tenho trabalho insalubre (PPP) ou tempo na roça",
      d: "Quero usar esses períodos para adiantar ou melhorar o valor",
    },
  ],
  incapacidade: [
    {
      id: "Fui reprovado na perícia do INSS mesmo com atestados",
      Icon: Activity,
      t: "O perito do INSS me negou mesmo eu não conseguindo trabalhar",
      d: "Quero levar meus exames e laudos para uma avaliação justa",
    },
    {
      id: "Meu auxílio-doença foi cortado antes de eu melhorar",
      Icon: AlertCircle,
      t: "O INSS cortou meu auxílio antes da alta do meu médico",
      d: "Fiquei sem pagamento no meio do tratamento",
    },
    {
      id: "O INSS me deu alta, mas o médico da empresa não me deixa voltar",
      Icon: ShieldAlert,
      t: "Estou no limbo: o INSS mandou voltar e a empresa recusou",
      d: "Estou sem receber do INSS e sem salário da empresa",
    },
    {
      id: "Fiquei com sequela de acidente e voltei a trabalhar com dificuldade",
      Icon: ShieldCheck,
      t: "Fiquei com sequela de acidente (trabalho, trânsito ou casa)",
      d: "Quero saber se tenho direito ao Auxílio-Acidente mensal",
    },
  ],
  revisao: [
    {
      id: "Aposentei há menos de 10 anos e acho o valor errado",
      Icon: Calculator,
      t: "Me aposentei nos últimos 10 anos e acho a conta baixa",
      d: "Quero conferir se esqueceram salários altos ou tempo especial",
    },
    {
      id: "Ganhei processo trabalhista contra antiga empresa",
      Icon: Scale,
      t: "Ganhei ação trabalhista e quero aumentar minha aposentadoria",
      d: "Incluir horas extras ou salário reconhecido na Justiça no INSS",
    },
    {
      id: "Trabalhei em dois empregos ao mesmo tempo antes de aposentar",
      Icon: CalendarCheck,
      t: "Tinha dois empregos ao mesmo tempo e não somaram direito",
      d: "Conferência da soma de salários simultâneos no cálculo",
    },
    {
      id: "Estão descontando associação ou empréstimo que não pedi",
      Icon: AlertCircle,
      t: "Estão descontando mensalidade ou cartão estranho na conta",
      d: "Quero verificar descontos indevidos no meu pagamento",
    },
  ],
  familia: [
    {
      id: "Idoso com 65+ anos ou pessoa com deficiência/autismo sem renda",
      Icon: Users,
      t: "Idoso 65+ ou pessoa com deficiência/autismo de baixa renda",
      d: "Mesmo sem nunca ter pago INSS (ou caso o BPC tenha sido negado)",
      href: "/bpc-loas",
      ctaLabel: "Ver detalhes sobre BPC/LOAS",
    },
    {
      id: "Falecimento de cônjuge/companheiro ou pai/mãe (Pensão)",
      Icon: HeartHandshake,
      t: "Falecimento de esposo(a), companheiro(a) ou familiar",
      d: "Ajuda para pedir Pensão por Morte ou provar união estável",
      href: "/pensao-por-morte",
      ctaLabel: "Ver detalhes sobre Pensão por Morte",
    },
    {
      id: "Gravidez, adoção ou nascimento nos últimos 5 anos (Maternidade)",
      Icon: Baby,
      t: "Tive bebê, adotei ou estou grávida (inclusive desempregada)",
      d: "Conferir Salário-Maternidade ou parcelas atrasadas em até 5 anos",
      href: "/salario-maternidade",
      ctaLabel: "Ver detalhes sobre Salário-Maternidade",
    },
    {
      id: "BPC ou Pensão bloqueados por revisão de cadastro",
      Icon: FileSearch,
      t: "Benefício bloqueado ou suspenso por revisão do cadastro",
      d: "Preciso entender como regularizar o CadÚnico ou documentos",
      href: "/bpc-loas",
      ctaLabel: "Ver detalhes sobre BPC/LOAS e Revisões",
    },
  ],
  servidor: [
    {
      id: "Quero saber se devo levar meu tempo do INSS (CTC) para o órgão público",
      Icon: Landmark,
      t: "Não sei se levo meu tempo do INSS (CTC) ou aposento separado",
      d: "Evitar transferir o tempo errado e avaliar duas aposentadorias",
    },
    {
      id: "Dúvida sobre integralidade, paridade ou abono de permanência",
      Icon: Calculator,
      t: "Quero conferir salário integral, paridade ou abono de permanência",
      d: "Entender a melhor regra para proteger a remuneração final",
    },
    {
      id: "Sou profissional da saúde, professor ou guarda em órgão público",
      Icon: HardHat,
      t: "Trabalho em escola, hospital ou atividade de risco no serviço público",
      d: "Avaliar regras diferenciadas ou contagem de tempo insalubre",
    },
    {
      id: "Servidor municipal que contribui direto para o INSS",
      Icon: FileText,
      t: "Sou servidor municipal, mas contribuo para o INSS",
      d: "Analisar aposentadoria no INSS e eventual complementação",
    },
  ],
};

function Triagem() {
  const [step, setStep] = useState(1);
  const [objetivoId, setObjetivoId] = useState("negado");
  const [objetivoTitulo, setObjetivoTitulo] = useState(
    "Recebi um 'não' do INSS ou meu pedido está parado"
  );
  const [situacao, setSituacao] = useState("");
  const [situacaoHref, setSituacaoHref] = useState<string | undefined>(
    undefined
  );
  const [situacaoCtaLabel, setSituacaoCtaLabel] = useState<string | undefined>(
    undefined
  );
  const [nome, setNome] = useState("");
  const [observacao, setObservacao] = useState("");

  const objetivoAtual =
    OBJETIVOS_TRIAGEM.find((o) => o.id === objetivoId) || OBJETIVOS_TRIAGEM[0];
  const situacoesAtuais =
    SITUACOES_POR_OBJETIVO[objetivoId] || SITUACOES_POR_OBJETIVO.negado;

  const destinoServico = situacaoHref || objetivoAtual.href || "/planejamento";
  const labelServico =
    situacaoCtaLabel ||
    objetivoAtual.ctaLabel ||
    "Ver detalhes dessa área no site";

  const linhasResumo = [
    `*Tema:* ${objetivoTitulo}`,
    situacao ? `*Detalhe:* ${situacao}` : null,
    nome.trim() ? `*Nome:* ${nome.trim()}` : null,
    observacao.trim() ? `*Cidade/Observação:* ${observacao.trim()}` : null,
  ].filter(Boolean) as string[];

  const resumoPreview = linhasResumo.map((l) => l.replace(/\*/g, "")).join("\n");

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      wppLink(
        `Olá, Dr. Anderson! Fiz a triagem rápida no site:\n\n${linhasResumo.join(
          "\n"
        )}\n\nGostaria de uma orientação sobre meu caso.`
      ),
      "_blank"
    );
  };

  const panel = (n: number) =>
    `col-start-1 row-start-1 w-full min-w-0 max-w-full transition-opacity duration-300 ${
      step === n ? "opacity-100" : "opacity-0 invisible pointer-events-none"
    }`;

  return (
    <section
      id="triagem"
      className="bg-[#060D17] py-16 md:py-22 border-t border-white/10 relative overflow-hidden"
    >
      <div className="absolute right-[-60px] top-1/3 w-[450px] h-[450px] rounded-full bg-[#091D39]/80 blur-[130px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
        <Reveal className="lg:col-span-5 space-y-5">
          <div>
            <SectionBadge icon={Sparkles} tone="darkGold">
              Triagem Rápida
            </SectionBadge>
          </div>

          <h2 className="text-[clamp(28px,3.6vw,46px)] font-bold leading-[1.06] tracking-[-0.03em] text-white">
            Qual problema você precisa{" "}
            <em className="font-display not-italic text-[#CFAE70] font-bold">
              resolver hoje?
            </em>
          </h2>

          <p className="text-[15px] md:text-[16.5px] text-white/75 font-light leading-relaxed max-w-[440px]">
            Não precisa separar documentos ou extrato do Meu INSS agora. Em 2
            toques sua dúvida já vai organizada para o WhatsApp do Dr. Anderson.
          </p>

          <ul className="space-y-2.5 pt-2 text-[14px] text-white/80">
            {[
              "Leva menos de 1 minuto",
              "Sem precisar enviar documentos agora",
              "Linguagem simples, sem termos jurídicos",
              "Conversa sigilosa direto no WhatsApp",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <Check size={16} className="text-[#CFAE70] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-7 w-full min-w-0 max-w-full">
          <div className="rounded-2xl sm:rounded-3xl bg-[#091D39]/85 backdrop-blur-2xl border border-white/15 p-4 sm:p-6 md:p-8 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.65)] relative overflow-hidden w-full min-w-0 max-w-full">
            <div className="mb-4 pb-3 border-b border-white/10">
              <div className="flex items-center justify-between gap-3 text-[11.5px] text-white/60 mb-2.5">
                <span className="font-semibold text-[#CFAE70] uppercase tracking-wider text-[10.5px]">
                  {step === 1 && "Etapa 1 de 3 · O que está acontecendo"}
                  {step === 2 && "Etapa 2 de 3 · Detalhe do caso"}
                  {step === 3 && "Etapa 3 de 3 · Enviar resumo no WhatsApp"}
                </span>
                <span className="font-heading tabular-nums font-semibold text-white/80 text-[11.5px]">
                  {step} / 3
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#CFAE70] to-[#e6ca8a] transition-all duration-500 rounded-full"
                  style={{
                    width: step === 1 ? "33.3%" : step === 2 ? "66.6%" : "100%",
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 w-full min-w-0 max-w-full">
              {/* Etapa 1 */}
              <div className={panel(1)} aria-hidden={step !== 1}>
                <div className="mb-3">
                  <h3 className="text-[18px] sm:text-[20px] font-bold tracking-[-0.01em] text-white">
                    Escolha a frase que mais se parece com o seu caso:
                  </h3>
                </div>
                <div className="space-y-2">
                  {OBJETIVOS_TRIAGEM.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setObjetivoId(item.id);
                        setObjetivoTitulo(item.t);
                        setSituacao("");
                        setSituacaoHref(undefined);
                        setSituacaoCtaLabel(undefined);
                        setStep(2);
                      }}
                      className="w-full min-w-0 max-w-full text-left p-3 sm:p-3.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.09] hover:border-[#CFAE70] group transition-all duration-200 flex items-center justify-between gap-2.5 sm:gap-3.5 cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                        <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/[0.06] text-[#CFAE70] group-hover:bg-[#CFAE70] group-hover:text-[#091D39] flex items-center justify-center shrink-0 transition-colors shadow-sm">
                          <item.Icon size={17} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <strong className="block text-[13.5px] sm:text-[14.5px] font-semibold text-white group-hover:text-[#CFAE70] transition-colors leading-snug">
                            {item.t}
                          </strong>
                          <span className="block text-[11.5px] sm:text-[12px] text-white/55 leading-tight mt-0.5 line-clamp-1 sm:line-clamp-none">
                            {item.d}
                          </span>
                        </div>
                      </div>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/[0.05] group-hover:bg-[#CFAE70] group-hover:text-[#091D39] text-white/40 flex items-center justify-center shrink-0 transition-colors">
                        <ArrowRight
                          size={13}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Etapa 2 */}
              <div className={panel(2)} aria-hidden={step !== 2}>
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-[#CFAE70] bg-[#CFAE70]/10 border border-[#CFAE70]/20 rounded-lg px-2.5 py-1 mb-3 max-w-full">
                  <span className="uppercase tracking-wider text-[10px] text-[#CFAE70]/70 shrink-0">
                    Situação:
                  </span>
                  <span className="text-white truncate">{objetivoTitulo}</span>
                </div>

                <h3 className="text-[18px] sm:text-[20px] font-bold tracking-[-0.01em] mb-1 text-white">
                  {objetivoAtual.perguntaEtapa2 ||
                    "Me conte um pouco mais sobre o seu caso:"}
                </h3>
                <p className="text-[12px] text-white/55 mb-3">
                  Escolha o detalhe que melhor descreve o que aconteceu:
                </p>

                <div className="space-y-2">
                  {situacoesAtuais.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setSituacao(item.t);
                        setSituacaoHref(item.href);
                        setSituacaoCtaLabel(item.ctaLabel);
                        setStep(3);
                      }}
                      className="w-full min-w-0 max-w-full text-left p-3 sm:p-3.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.09] hover:border-[#CFAE70] group transition-all duration-200 flex items-center justify-between gap-2.5 sm:gap-3.5 cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                        <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/[0.06] text-[#CFAE70] group-hover:bg-[#CFAE70] group-hover:text-[#091D39] flex items-center justify-center shrink-0 transition-colors shadow-sm">
                          <item.Icon size={17} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <strong className="block text-[13.5px] sm:text-[14.5px] font-semibold text-white group-hover:text-[#CFAE70] transition-colors leading-snug">
                            {item.t}
                          </strong>
                          <span className="block text-[11.5px] sm:text-[12px] text-white/55 leading-tight mt-0.5 line-clamp-1 sm:line-clamp-none">
                            {item.d}
                          </span>
                        </div>
                      </div>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/[0.05] group-hover:bg-[#CFAE70] group-hover:text-[#091D39] text-white/40 flex items-center justify-center shrink-0 transition-colors">
                        <ArrowRight
                          size={13}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Etapa 3 */}
              <form
                className={panel(3)}
                aria-hidden={step !== 3}
                onSubmit={enviar}
              >
                <div className="rounded-xl bg-[#060D17]/80 border border-white/12 p-3.5 mb-4">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#CFAE70] mb-1.5">
                    Prévia da mensagem pronta para o WhatsApp
                  </span>
                  <p className="text-[12.5px] sm:text-[13px] text-white/85 font-light leading-relaxed whitespace-pre-line">
                    {resumoPreview}
                  </p>
                </div>

                <h3 className="text-[17px] sm:text-[19px] font-bold tracking-[-0.01em] mb-1 text-white">
                  Tudo pronto — quer completar algum dado antes de abrir?
                </h3>
                <p className="text-[12px] text-white/55 mb-3.5">
                  Os campos abaixo são opcionais. Se preferir, toque direto no
                  botão dourado para iniciar no WhatsApp.
                </p>

                <div className="space-y-3">
                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#CFAE70]"
                    />
                    <input
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Seu nome (opcional)"
                      tabIndex={step === 3 ? 0 : -1}
                      className="w-full bg-white/[0.06] border border-white/15 focus:border-[#CFAE70] focus:bg-white/[0.09] rounded-xl pl-11 pr-3.5 py-2.5 sm:py-3 text-[14px] text-white placeholder:text-white/40 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="relative">
                    <FileText
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#CFAE70]"
                    />
                    <input
                      value={observacao}
                      onChange={(e) => setObservacao(e.target.value)}
                      placeholder="Sua cidade/UF ou observação rápida (opcional)"
                      tabIndex={step === 3 ? 0 : -1}
                      className="w-full bg-white/[0.06] border border-white/15 focus:border-[#CFAE70] focus:bg-white/[0.09] rounded-xl pl-11 pr-3.5 py-2.5 sm:py-3 text-[14px] text-white placeholder:text-white/40 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <PillButton type="submit" tone="gold" className="w-full">
                    Abrir conversa no WhatsApp
                  </PillButton>

                  <div className="text-center">
                    <Link
                      href={destinoServico}
                      tabIndex={step === 3 ? 0 : -1}
                      className="inline-flex items-center gap-1.5 text-[12.5px] text-white/70 hover:text-[#CFAE70] underline underline-offset-4 transition-colors"
                    >
                      <span>Prefere ler mais antes? {labelServico}</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </form>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11.5px] text-white/50">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="hover:text-white flex items-center gap-1.5 underline underline-offset-4 cursor-pointer transition-colors"
                >
                  ← Voltar etapa
                </button>
              ) : (
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CFAE70]" />
                  Toque em uma opção para avançar
                </span>
              )}
              <span className="hidden sm:inline-flex items-center gap-1">
                <Lock size={11} className="text-[#CFAE70]" /> Sigilo garantido
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────── 9. Sobre o advogado ───────────────── */
function About() {
  return (
    <section id="sobre" className="bg-[#091D39] text-white py-16 md:py-24">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-[460px] mx-auto lg:max-w-none border border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]">
            <img
              src={andersonPhoto}
              alt="Dr. Anderson Litig"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070E18]/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#CFAE70]">
                Advogado responsável
              </p>
              <p className="text-[22px] md:text-[26px] font-bold tracking-[-0.02em]">
                Dr. Anderson Litig
              </p>
              <p className="text-[13px] text-white/70">OAB/ES nº 40.152</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7 space-y-6">
          <div>
            <SectionBadge icon={Scale} tone="darkGold">
              Sobre o advogado
            </SectionBadge>
          </div>
          <h2 className="text-[clamp(30px,4vw,50px)] font-bold leading-[1.06] tracking-[-0.03em]">
            Decisão previdenciária séria começa com{" "}
            <em className="font-display not-italic text-[#CFAE70] font-bold">
              clareza técnica.
            </em>
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/75 font-light leading-relaxed">
            Sou <strong className="text-white font-semibold">Anderson Litig</strong>
            , advogado especialista em Direito Previdenciário, inscrito na{" "}
            <strong className="text-white font-semibold">
              OAB/ES sob o nº 40.152
            </strong>
            . Traduzo as regras complexas do INSS e do serviço público em
            linguagem simples e transparente, para você decidir seus próximos
            passos com segurança.
          </p>

          <ul className="divide-y divide-white/12 border-y border-white/12">
            {[
              "Pós-graduado em Direito Previdenciário",
              "Membro da Comissão de Direito Previdenciário da OAB Serra/ES",
              "Atendimento presencial na Serra/ES e 100% online no Brasil e exterior",
              "Análise minuciosa de extrato INSS, carteiras antigas, carnês, PPP, tempo rural e CTC",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-4 py-4 text-[14.5px] md:text-[15px] text-white/85"
              >
                <Check size={16} className="text-[#CFAE70] shrink-0 mt-0.5" />{" "}
                {t}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 pt-1">
            <PillButton
              tone="gold"
              external
              href={wppLink(
                "Olá, Dr. Anderson! Gostaria de agendar um atendimento."
              )}
              className="w-full sm:w-auto"
            >
              Conversar no WhatsApp
            </PillButton>
            <TextButton href="#triagem" className="self-center sm:self-auto">
              Fazer triagem rápida
            </TextButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────── 10. Blog Previdenciário ───────────────── */
function BlogHome() {
  return (
    <section
      id="blog"
      className="bg-[#FAF9F6] text-[#091D39] py-16 md:py-24 border-b border-[#091D39]/8"
    >
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-[680px] space-y-3">
            <div>
              <SectionBadge icon={BookOpen}>Blog Previdenciário</SectionBadge>
            </div>
            <h2 className="text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.06] tracking-[-0.03em]">
              Informação clara para{" "}
              <em className="font-display not-italic text-[#8a6a2b] font-bold">
                evitar erros no INSS.
              </em>
            </h2>
          </div>
          <TextButton tone="dark" href="/blog">
            Ver todos os artigos
          </TextButton>
        </Reveal>
        <BlogHighlights posts={BLOG_POSTS.slice(0, 4)} />
      </div>
    </section>
  );
}

/* ───────────────── 11. FAQ Transversal ───────────────── */
function FAQ() {
  const faqs = [
    {
      q: "O que fazer se meu benefício foi negado pelo INSS?",
      a: "Você tem 30 dias após tomar ciência da decisão para recorrer dentro do próprio INSS. Porém, se a negativa envolver perícia médica, trabalho insalubre (PPP) ou provas que o INSS costuma rejeitar, também é possível ingressar diretamente na Justiça Federal sem perder os atrasados desde a data do primeiro pedido.",
    },
    {
      q: "Vale a pena fazer Planejamento Previdenciário ou pedir direto no Meu INSS?",
      a: "O simulador gratuito do Meu INSS não corrige erros no cadastro, não converte tempo especial (PPP) nem mostra se pagar guias mais altas nos últimos anos traz retorno após a Reforma da Previdência. O planejamento analisa todo o seu histórico antes do pedido para evitar perda permanente de valor.",
    },
    {
      q: "Quem nunca pagou INSS ou tem deficiência tem direito a algum benefício?",
      a: "Sim. O BPC/LOAS garante 1 salário mínimo por mês para idosos a partir de 65 anos e pessoas com deficiência ou autismo (TEA) em situação de baixa renda familiar, sem exigir contribuições anteriores. Despesas contínuas com medicamentos, fraldas e tratamentos podem ser descontadas na análise judicial.",
    },
    {
      q: "Qual o prazo para pedir revisão de aposentadoria — e ela pode reduzir o valor?",
      a: "A regra geral é de até 10 anos a partir do primeiro pagamento recebido, com exceções para ações trabalhistas ou erros nunca avaliados pelo INSS. Como pedir revisão sem conferência prévia pode gerar reexame desfavorável, fazemos uma auditoria matemática antes de protocolar qualquer pedido.",
    },
    {
      q: "Preciso ter todos os documentos separados antes de chamar no WhatsApp?",
      a: "Não. No primeiro contato basta contar sua dúvida ou o que aconteceu no INSS. Se já tiver foto ou PDF do extrato CNIS, carteira de trabalho ou carta de negativa, melhor ainda — se não tiver, orientamos passo a passo como baixar tudo pelo celular.",
    },
    {
      q: "Como funciona o atendimento presencial na Serra/ES e o atendimento 100% digital?",
      a: "Nosso escritório atende presencialmente na Serra/ES com hora marcada para quem prefere conversar pessoalmente. Para outras cidades, estados e brasileiros no exterior, todo o atendimento acontece por WhatsApp e videochamada, com assinatura digital pelo celular.",
    },
    {
      q: "Como confirmar o registro do advogado na OAB?",
      a: "O Dr. Anderson Litig é advogado inscrito na OAB/ES sob o nº 40.152 e pós-graduado em Direito Previdenciário. O registro é público no Cadastro Nacional dos Advogados (CNA/CFOAB), e nossas avaliações reais podem ser consultadas no Google.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white text-[#091D39] py-16 md:py-24">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-8 lg:gap-20">
        <Reveal className="lg:col-span-4 space-y-4">
          <div>
            <SectionBadge icon={HelpCircle}>Dúvidas frequentes</SectionBadge>
          </div>
          <h2 className="text-[clamp(30px,4vw,48px)] font-bold leading-[1.06] tracking-[-0.03em]">
            Boas perguntas.{" "}
            <em className="font-display not-italic text-[#8a6a2b] font-bold">
              Respostas claras.
            </em>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-8 border-t border-[#091D39]/20">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-[#091D39]/15">
              <button
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-5 py-5 md:py-6 text-left cursor-pointer group"
              >
                <span className="text-[16.5px] md:text-[20px] font-bold tracking-[-0.01em] leading-snug group-hover:text-[#8a6a2b] transition-colors">
                  {f.q}
                </span>
                <Plus
                  size={22}
                  className={`shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-45 text-[#8a6a2b]" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 md:pr-10 text-[15px] md:text-[16px] text-[#57534E] font-light leading-relaxed">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────── 12. Chamada final ───────────────── */
function ContactCta() {
  return (
    <section
      id="contato"
      className="bg-[#070E18] py-20 md:py-28 border-t border-white/10 relative overflow-hidden"
    >
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-200px] w-[700px] h-[400px] rounded-full bg-[#CFAE70]/10 blur-[140px] pointer-events-none" />
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 relative">
        <Reveal className="max-w-[880px] space-y-7">
          <div>
            <SectionBadge icon={Sparkles} tone="darkGold">
              Vamos conversar?
            </SectionBadge>
          </div>
          <h2 className="text-[clamp(34px,5.4vw,76px)] font-bold leading-[1.02] tracking-[-0.04em]">
            Tire sua dúvida antes de{" "}
            <em className="font-display not-italic text-[#CFAE70] font-bold">
              decidir no INSS.
            </em>
          </h2>
          <p className="text-[17px] md:text-[20px] text-white/80 font-light max-w-[660px] leading-relaxed">
            Conte pelo WhatsApp o que está acontecendo no seu pedido ou no seu
            órgão público e receba o direcionamento inicial da nossa equipe.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 pt-1">
            <PillButton
              tone="gold"
              external
              href={wppLink(
                "Olá, Dr. Anderson! Vim pelo site e quero conversar sobre meu caso."
              )}
              className="w-full sm:w-auto"
            >
              Conversar no WhatsApp
            </PillButton>
            <TextButton href="#triagem" className="self-center sm:self-auto">
              Fazer triagem rápida
            </TextButton>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-3 gap-7 pt-9 border-t border-white/12 text-[14px]">
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
  );
}
