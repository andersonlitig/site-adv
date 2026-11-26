import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Briefcase,
  Calculator,
  CalendarCheck,
  CheckCircle2,
  FileSearch,
  Globe,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Plus,
  ReceiptText,
  Scale,
  Search,
  ShieldAlert,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import {
  SiteHeader,
  SiteFooter,
  PillButton,
  TextButton,
  Reveal,
  wppLink,
  SectionBadge,
} from "@/components/site/Ui";

const TEL_VISIVEL = "(27) 99294-2888";
const EMAIL = "contato@andersonlitig.adv.br";
const PAGE_URL = "https://andersonlitig.adv.br/revisao-de-aposentadoria";

export default function JaAposentadoV2() {
  useSeo();

  return (
    <div className="min-h-screen bg-white text-[#091D39] selection:bg-[#CFAE70] selection:text-[#091D39] relative overflow-x-clip antialiased font-sans">
      <WppFloat />
      <SiteHeader />
      <main>
        <Breadcrumb />
        <HeroJaAposentado />
        <AlertaCNIS />
        <DuasSituacoes />
        <RevisaoBeneficio />
        <DescontosIndevidos />
        <MidCTA />
        <ComoFunciona />
        <OutrosDireitos />
        <FAQJaAposentado />
        <ContatoJaAposentado />
      </main>
      <SiteFooter />
    </div>
  );
}

function useSeo() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Já sou aposentado: Revisão e Descontos Indevidos | Anderson Litig";

    let meta = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Já recebe aposentadoria do INSS, mas o valor parece baixo ou há descontos não autorizados? Entenda como funciona a revisão de benefício e o cancelamento de descontos indevidos.";

    return () => {
      document.title = prevTitle;
    };
  }, []);
}

function WppFloat() {
  return (
    <motion.a
      href={wppLink(
        "Olá, Dr. Anderson! Já sou aposentado e tenho dúvidas sobre o valor ou descontos no meu benefício do INSS. [ja-aposentado]"
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

function Breadcrumb() {
  return (
    <div className="bg-[#FAF9F6] border-b border-[#091D39]/10 py-3">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        <div className="flex items-center gap-2 text-[12px] text-[#57534E]">
          <Link href="/">
            <a className="hover:text-[#091D39] transition-colors">Início</a>
          </Link>
          <span className="opacity-50">/</span>
          <a href="/#servicos" className="hover:text-[#091D39] transition-colors">
            Serviços
          </a>
          <span className="opacity-50">/</span>
          <span className="text-[#091D39] font-semibold">Já sou aposentado e tenho dúvidas</span>
        </div>
      </div>
    </div>
  );
}

function HeroJaAposentado() {
  return (
    <section className="bg-[#FAF9F6] text-[#091D39] py-16 md:py-24 border-b border-[#091D39]/10">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-8 space-y-6">
          <Reveal>
            <SectionBadge icon={FileSearch}>Para quem já é aposentado</SectionBadge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-heading text-[clamp(32px,4.8vw,60px)] font-bold text-[#091D39] tracking-[-0.03em] leading-[1.06]">
              Já recebe a aposentadoria —{" "}
              <span className="text-[#8a6a2b] block mt-1">
                mas algo não parece estar certo?
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[17px] md:text-[19px] text-[#44403C] leading-relaxed font-light max-w-[680px]">
              Desconto que você não autorizou, valor que parece baixo demais, cobrança de associação que nunca pediu ou a dúvida: “será que o INSS calculou certo?”. Analisamos o seu extrato e a carta de concessão para esclarecer o que está acontecendo.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2">
              <PillButton
                tone="gold"
                external
                href={wppLink(
                  "Olá, Dr. Anderson! Já sou aposentado e gostaria de entender o meu caso. [ja-aposentado]"
                )}
                className="w-full sm:w-auto"
              >
                Quero entender o meu caso
              </PillButton>
              <TextButton tone="dark" href="#situacoes" className="self-center sm:self-auto">
                Ver as situações mais comuns
              </TextButton>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[13px] text-[#57534E] font-light">
              Dr. Anderson Litig · OAB/ES nº 40.152 · Atendimento presencial em Serra/ES e 100% digital em todo o Brasil
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-4">
          <div className="bg-white rounded-2xl border border-[#091D39]/10 p-7 shadow-[0_12px_36px_-16px_rgba(9,29,57,0.12)] space-y-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8a6a2b]">
              Atalhos úteis para você
            </p>
            <div className="space-y-3">
              <Link href="/revisao-de-aposentadoria">
                <a className="group flex items-center justify-between p-4 rounded-xl bg-[#FAF9F6] border border-[#091D39]/10 hover:border-[#CFAE70] transition-colors">
                  <div>
                    <p className="font-heading text-[15px] font-bold text-[#091D39] group-hover:text-[#8a6a2b] transition-colors">
                      Revisão de Aposentadoria
                    </p>
                    <p className="text-[12.5px] text-[#57534E] font-light">
                      Página completa sobre cálculo e prazo de 10 anos
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-[#8a6a2b] shrink-0" />
                </a>
              </Link>
              <Link href="/planejamento">
                <a className="group flex items-center justify-between p-4 rounded-xl bg-[#FAF9F6] border border-[#091D39]/10 hover:border-[#CFAE70] transition-colors">
                  <div>
                    <p className="font-heading text-[15px] font-bold text-[#091D39] group-hover:text-[#8a6a2b] transition-colors">
                      Planejamento Previdenciário
                    </p>
                    <p className="text-[12.5px] text-[#57534E] font-light">
                      Para familiares ou quem ainda vai se aposentar
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-[#8a6a2b] shrink-0" />
                </a>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AlertaCNIS() {
  return (
    <section className="bg-[#091D39] text-white py-8 md:py-10 border-b border-white/10">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5 max-w-[960px]">
          <div className="w-12 h-12 rounded-xl bg-[#CFAE70]/15 border border-[#CFAE70]/30 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6 text-[#CFAE70]" />
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#CFAE70] mb-1">
              O INSS não corrige erros por conta própria
            </p>
            <p className="text-[15px] md:text-[16px] text-white/80 leading-relaxed font-light">
              Erros no cálculo do benefício e cobranças indevidas no extrato são mais frequentes do que parecem.{" "}
              <strong className="text-white font-semibold">
                Sem conferência técnica, o segurado continua recebendo menos ou sofrendo descontos mês a mês.
              </strong>{" "}
              Diferenças devidas dos últimos meses podem ser analisadas caso a caso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DuasSituacoes() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#091D39]/10" id="situacoes">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        <Reveal className="max-w-[780px] mb-12 space-y-4">
          <SectionBadge icon={Search}>Você se identifica?</SectionBadge>
          <h2 className="font-heading text-[clamp(28px,4vw,46px)] font-bold text-[#091D39] tracking-[-0.03em] leading-[1.08]">
            Dois problemas diferentes —{" "}
            <span className="text-[#8a6a2b]">e ambos têm caminho de solução.</span>
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#57534E] font-light leading-relaxed">
            A maioria dos aposentados que nos procuram enfrenta uma destas duas situações — ou as duas ao mesmo tempo.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Reveal delay={0.05}>
            <div className="bg-[#FAF9F6] rounded-2xl border border-[#091D39]/10 hover:border-[#CFAE70] p-7 md:p-8 flex flex-col justify-between h-full transition-all duration-300 shadow-[0_4px_16px_-8px_rgba(9,29,57,0.06)]">
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#091D39] text-[#CFAE70] flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-[20px] font-bold text-[#091D39]">
                    “Acho que recebo menos do que deveria”
                  </h3>
                </div>
                <p className="text-[15px] text-[#44403C] leading-relaxed font-light">
                  O valor sempre pareceu abaixo do esperado ou algum período de trabalho ficou de fora — seja por vínculo omitido no CNIS, salários desconsiderados ou trabalho em condições insalubres não reconhecido. Isso é{" "}
                  <strong className="text-[#091D39] font-semibold">revisão de benefício</strong>.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#091D39]/10 flex flex-wrap items-center justify-between gap-4">
                <TextButton tone="dark" href="#revisao">
                  Ver revisão de benefício
                </TextButton>
                <Link href="/revisao-de-aposentadoria">
                  <a className="text-[13px] font-semibold text-[#8a6a2b] hover:underline">
                    Página dedicada de Revisão →
                  </a>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-[#FAF9F6] rounded-2xl border border-[#091D39]/10 hover:border-[#CFAE70] p-7 md:p-8 flex flex-col justify-between h-full transition-all duration-300 shadow-[0_4px_16px_-8px_rgba(9,29,57,0.06)]">
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#091D39] text-[#CFAE70] flex items-center justify-center shrink-0">
                    <ReceiptText className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-[20px] font-bold text-[#091D39]">
                    “Tem um desconto que não reconheço”
                  </h3>
                </div>
                <p className="text-[15px] text-[#44403C] leading-relaxed font-light">
                  Aparece todo mês um desconto no seu benefício — empréstimo, cartão consignado, associação, sindicato ou seguro que você não contratou ou não consegue cancelar. Isso é{" "}
                  <strong className="text-[#091D39] font-semibold">desconto indevido</strong> e pode ser contestado.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#091D39]/10 flex items-center justify-between">
                <TextButton tone="dark" href="#descontos">
                  Ver descontos indevidos
                </TextButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function RevisaoBeneficio() {
  const cards = [
    {
      icon: Calculator,
      title: "Erro no cálculo dos salários",
      desc: "O INSS pode ter utilizado salários desatualizados ou deixado de somar contribuições que você recolheu, reduzindo a média mensal do benefício.",
      detail: "Erro frequente em benefícios com CNIS incompleto",
    },
    {
      icon: ShieldAlert,
      title: "Trabalho perigoso ou insalubre não reconhecido",
      desc: "Quem trabalhou exposto a agentes nocivos (ruído, químicos, calor) pode ter direito ao reconhecimento do tempo especial com reflexo direto no cálculo.",
      detail: "Exige análise de PPP e laudos",
    },
    {
      icon: Search,
      title: "Revisão do teto",
      desc: "Aposentados que tiveram o benefício limitado pelo teto na concessão podem verificar se houve alteração que permita recalcular parcelas anteriores.",
      detail: "Válido para perfis específicos acima do teto",
    },
    {
      icon: Scale,
      title: "Reflexo de processo trabalhista",
      desc: "Quem ganhou reclamação trabalhista com reconhecimento de vínculo, horas extras ou diferenças salariais pode buscar a inclusão desses valores no benefício.",
      detail: "Exige conferência da sentença trabalhista",
    },
    {
      icon: Briefcase,
      title: "Atividades simultâneas não consideradas",
      desc: "Quem contribuiu em dois empregos ou atividades ao mesmo tempo pode verificar se o INSS somou corretamente as remunerações dentro do limite legal.",
      detail: "Comum em profissionais com dois vínculos",
    },
    {
      icon: Target,
      title: "Benefício abaixo do salário mínimo",
      desc: "Nenhum benefício que substitui o salário do trabalhador pode ficar abaixo do mínimo vigente. Se houver defasagem ou erro, cabe correção.",
      detail: "Garantia constitucional do piso previdenciário",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF9F6] border-b border-[#091D39]/10" id="revisao">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        <Reveal className="max-w-[780px] mb-12 space-y-4">
          <SectionBadge icon={Calculator}>Revisão de benefício</SectionBadge>
          <h2 className="font-heading text-[clamp(28px,4vw,46px)] font-bold text-[#091D39] tracking-[-0.03em] leading-[1.08]">
            O INSS pode ter errado{" "}
            <span className="text-[#8a6a2b]">no cálculo da sua aposentadoria.</span>
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#57534E] font-light leading-relaxed">
            Antes de protocolar qualquer pedido no Meu INSS, é fundamental realizar cálculo prévio seguro para confirmar se a revisão traz vantagem real. Conheça as hipóteses mais comuns:
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={(i % 3) * 0.06}>
                <div className="bg-white rounded-2xl border border-[#091D39]/10 hover:border-[#CFAE70] p-7 h-full flex flex-col justify-between transition-all duration-300 shadow-[0_4px_16px_-8px_rgba(9,29,57,0.06)]">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#091D39] text-[#CFAE70] flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-[18px] font-bold text-[#091D39] mb-2.5 leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-[14.5px] text-[#44403C] leading-relaxed font-light">
                      {c.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-[#091D39]/8 text-[12.5px] font-medium text-[#8a6a2b] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#CFAE70] rounded-full shrink-0" />
                    {c.detail}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-8">
          <div className="bg-[#091D39] text-white rounded-2xl p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-[780px]">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#CFAE70]">
                Prazo decadencial de 10 anos
              </p>
              <p className="text-[15.5px] text-white/85 leading-relaxed font-light">
                Em regra, há o prazo de <strong className="text-white font-semibold">10 anos</strong> a partir do mês seguinte ao primeiro pagamento para revisar o ato de concessão, além da cobrança de diferenças dos últimos 5 anos quando cabível.
              </p>
            </div>
            <PillButton
              tone="gold"
              external
              href={wppLink(
                "Olá, Dr. Anderson! Gostaria de analisar se cabe revisão no cálculo da minha aposentadoria. [ja-aposentado]"
              )}
              className="shrink-0 w-full md:w-auto"
            >
              Analisar meu benefício
            </PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DescontosIndevidos() {
  const cards = [
    {
      icon: ReceiptText,
      title: "RMC — Reserva de Margem Consignável",
      desc: "Reserva de margem vinculada a cartão consignado, muitas vezes ativada sem explicação clara ao aposentado sobre os juros rotativos permanentes.",
      detail: "Cancelamento pode ser solicitado",
    },
    {
      icon: ReceiptText,
      title: "RCC — Reserva de Cartão de Crédito",
      desc: "Modalidade semelhante à RMC, vinculada a cartão consignado com desconto mensal recorrente no extrato do benefício.",
      detail: "Análise de contrato e restituição",
    },
    {
      icon: Briefcase,
      title: "Empréstimo consignado não autorizado",
      desc: "Contratos realizados sem consentimento expresso, por fraude ou abordagem irregular, gerando descontos mensais sem que o segurado tenha contratado.",
      detail: "Contestado via administrativa ou judicial",
    },
    {
      icon: Users,
      title: "Desconto de associação ou sindicato",
      desc: "Cobranças mensais de entidades associativas que o aposentado não autorizou ou não consegue encerrar pelos canais comuns.",
      detail: "Bloqueio direto e pedido de devolução",
    },
    {
      icon: HeartHandshake,
      title: "Plano de saúde ou seguro não contratado",
      desc: "Descontos de seguros, assistências ou planos incluídos sem consentimento claro durante atendimento bancário ou telefônico.",
      detail: "Direito ao cancelamento e apuração",
    },
    {
      icon: FileSearch,
      title: "Desconto não identificado no extrato",
      desc: "Qualquer rubrica descontada no histórico de créditos (HISCRE) que você não reconhece merece conferência imediata.",
      detail: "Conferência pelo extrato do Meu INSS",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#091D39]/10" id="descontos">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        <Reveal className="max-w-[780px] mb-12 space-y-4">
          <SectionBadge icon={ReceiptText}>Descontos Indevidos</SectionBadge>
          <h2 className="font-heading text-[clamp(28px,4vw,46px)] font-bold text-[#091D39] tracking-[-0.03em] leading-[1.08]">
            Tem algo sendo descontado{" "}
            <span className="text-[#8a6a2b]">do seu benefício sem autorização?</span>
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#57534E] font-light leading-relaxed">
            Confira os descontos irregulares mais comuns no extrato de pagamento do INSS:
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={(i % 3) * 0.06}>
                <div className="bg-[#FAF9F6] rounded-2xl border border-[#091D39]/10 hover:border-[#CFAE70] p-7 h-full flex flex-col justify-between transition-all duration-300 shadow-[0_4px_16px_-8px_rgba(9,29,57,0.06)]">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#091D39] text-[#CFAE70] flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-[18px] font-bold text-[#091D39] mb-2.5 leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-[14.5px] text-[#44403C] leading-relaxed font-light">
                      {c.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-[#091D39]/8 text-[12.5px] font-medium text-[#8a6a2b] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#CFAE70] rounded-full shrink-0" />
                    {c.detail}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-8">
          <div className="bg-[#091D39] text-white rounded-2xl p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-[780px]">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#CFAE70]">
                Proteção ao aposentado
              </p>
              <p className="text-[15.5px] text-white/85 leading-relaxed font-light">
                Cobranças não autorizadas violam o Código de Defesa do Consumidor. Dependendo da prova e das circunstâncias do caso, é possível pleitear o cancelamento imediato e a restituição dos valores descontados indevidamente.
              </p>
            </div>
            <PillButton
              tone="gold"
              external
              href={wppLink(
                "Olá, Dr. Anderson! Notei um desconto que não reconheço no meu benefício do INSS e gostaria de orientação. [ja-aposentado]"
              )}
              className="shrink-0 w-full md:w-auto"
            >
              Verificar meu extrato
            </PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MidCTA() {
  return (
    <section className="bg-[#070E18] text-white py-12 md:py-14 border-b border-white/10">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-[760px]">
          <h3 className="font-heading text-[clamp(22px,2.8vw,30px)] font-bold text-white tracking-[-0.02em]">
            Tem dúvida se o seu caso se encaixa em revisão ou desconto indevido?
          </h3>
          <p className="text-[15px] text-white/75 font-light">
            Envie o extrato de pagamento ou a carta de concessão pelo WhatsApp para conferência técnica sem compromisso.
          </p>
        </div>
        <PillButton
          tone="gold"
          external
          href={wppLink(
            "Olá, Dr. Anderson! Sou aposentado e tenho dúvidas sobre meu benefício do INSS. [ja-aposentado]"
          )}
          className="shrink-0 w-full md:w-auto"
        >
          Falar pelo WhatsApp
        </PillButton>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const steps = [
    {
      num: "Passo 01",
      title: "Você envia o extrato ou carta",
      desc: "Mande pelo WhatsApp o extrato de pagamento (HISCRE) ou a carta de concessão e conte o que chamou sua atenção.",
    },
    {
      num: "Passo 02",
      title: "Conferência matemática e documental",
      desc: "Identificamos a origem dos descontos e verificamos se há salários ou vínculos omitidos no cálculo da aposentadoria.",
    },
    {
      num: "Passo 03",
      title: "Explicação clara do caminho",
      desc: "Mostramos o que faz sentido fazer — cancelamento administrativo, contestação de cobrança ou ação judicial — só avançando com cálculo seguro.",
    },
    {
      num: "Passo 04",
      title: "Protocolo e acompanhamento",
      desc: "Cuidamos de toda a petição e acompanhamos o andamento do pedido até a resolução do bloqueio ou revisão.",
    },
  ];

  return (
    <section className="bg-[#FAF9F6] text-[#091D39] py-16 md:py-24 border-b border-[#091D39]/10">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        <Reveal className="max-w-[780px] mb-12 space-y-4">
          <SectionBadge icon={CalendarCheck}>Como Funciona</SectionBadge>
          <h2 className="font-heading text-[clamp(28px,4vw,46px)] font-bold text-[#091D39] tracking-[-0.03em] leading-[1.08]">
            O que fazemos pelo seu caso,{" "}
            <span className="text-[#8a6a2b]">em quatro passos claros.</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <div className="bg-white rounded-2xl border border-[#091D39]/10 p-7 h-full flex flex-col justify-between shadow-[0_4px_16px_-8px_rgba(9,29,57,0.06)]">
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#8a6a2b] bg-[#CFAE70]/20 px-2.5 py-1 rounded-md mb-4">
                    {s.num}
                  </span>
                  <h3 className="font-heading text-[18px] font-bold text-[#091D39] mb-2.5 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[14.5px] text-[#44403C] leading-relaxed font-light">
                    {s.desc}
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

function OutrosDireitos() {
  const cards = [
    {
      icon: Target,
      title: "Isenção de Imposto de Renda",
      desc: "Aposentados e pensionistas diagnosticados com moléstias graves previstas em lei (como cardiopatia grave, neoplasia maligna, Parkinson, nefropatia grave, entre outras) podem ter direito à isenção de IR sobre os proventos.",
    },
    {
      icon: CheckCircle2,
      title: "Adicional de 25% na invalidez",
      desc: "Quem recebe aposentadoria por incapacidade permanente (antiga invalidez) e necessita de assistência permanente de outra pessoa pode requerer o acréscimo de 25% no valor do benefício.",
    },
    {
      icon: Users,
      title: "Pensão por morte para dependentes",
      desc: "Cônjuge, companheiro(a), filhos menores ou com deficiência e dependentes habilitados têm direito à pensão por morte, cujo prazo de solicitação influencia a data de início dos pagamentos.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#091D39]/10">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10">
        <Reveal className="max-w-[780px] mb-12 space-y-4">
          <SectionBadge icon={Sparkles}>Mais direitos para aposentados</SectionBadge>
          <h2 className="font-heading text-[clamp(28px,4vw,46px)] font-bold text-[#091D39] tracking-[-0.03em] leading-[1.08]">
            Outros direitos que aposentados{" "}
            <span className="text-[#8a6a2b]">frequentemente desconhecem.</span>
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#57534E] font-light leading-relaxed">
            Além da revisão e do cancelamento de descontos, existem garantias legais relevantes após a concessão:
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="bg-[#FAF9F6] rounded-2xl border border-[#091D39]/10 p-7 h-full flex flex-col">
                  <div className="w-11 h-11 rounded-xl bg-[#091D39] text-[#CFAE70] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-[18px] font-bold text-[#091D39] mb-2.5 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-[14.5px] text-[#44403C] leading-relaxed font-light">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQJaAposentado() {
  const faqs = [
    {
      q: "Como faço para cancelar um desconto que não autorizei no meu benefício?",
      a: "É possível solicitar o bloqueio ou exclusão de mensalidades associativas diretamente pelo Meu INSS ou Central 135. Quando a cobrança persiste ou envolve empréstimo ou cartão consignado irregular (RMC/RCC), a via judicial permite buscar o cancelamento definitivo e a devolução dos valores descontados indevidamente.",
    },
    {
      q: "Posso receber de volta o dinheiro descontado sem minha autorização?",
      a: "Sim, mediante comprovação da irregularidade contratual. O Código de Defesa do Consumidor prevê a restituição de quantias cobradas indevidamente, inclusive em dobro quando caracterizada a falha ou má-fé na contratação.",
    },
    {
      q: "A revisão pode diminuir o valor que recebo hoje?",
      a: "Se o segurado protocola um pedido diretamente no INSS sem cálculo prévio, o órgão pode reexaminar todo o processo e até reduzir o valor caso encontre inconsistência anterior. Por isso, sempre realizamos a auditoria matemática prévia antes de qualquer medida.",
    },
    {
      q: "Qual é o prazo para pedir a revisão da aposentadoria?",
      a: "Em regra, o prazo decadencial é de 10 anos contados do primeiro dia do mês seguinte ao recebimento da primeira prestação do benefício. Situações específicas, como reflexo de ação trabalhista recente ou correção de erro material, exigem análise individual.",
    },
    {
      q: "Meu benefício foi suspenso ou bloqueado. O que faço?",
      a: "A suspensão costuma ocorrer por pendência cadastral, prova de vida ou exigência de revisão administrativa. Identificamos o motivo no sistema do INSS para regularizar ou contestar o bloqueio rapidamente.",
    },
    {
      q: "Preciso ir pessoalmente ao escritório ou ter todos os papéis antes de chamar?",
      a: "Não. Você pode começar explicando a situação pelo WhatsApp, sem precisar reunir tudo antes. Todo o acompanhamento é digital por WhatsApp, videochamada ou e-mail para aposentados em todo o Brasil e no exterior, além do atendimento presencial na Serra/ES.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-[#FAF9F6] border-b border-[#091D39]/10" id="faq">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-8 lg:gap-16">
        <Reveal className="lg:col-span-4 space-y-4">
          <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#8a6a2b]">
            Dúvidas comuns
          </p>
          <h2 className="font-heading text-[clamp(28px,3.8vw,44px)] font-bold text-[#091D39] tracking-[-0.03em] leading-[1.08]">
            O que os aposentados{" "}
            <span className="text-[#8a6a2b]">mais perguntam.</span>
          </h2>
          <p className="text-[15px] text-[#57534E] font-light leading-relaxed">
            Se preferir conversar sobre o seu extrato específico, envie uma mensagem pelo WhatsApp.
          </p>
          <div className="pt-2">
            <PillButton
              tone="navy"
              external
              href={wppLink(
                "Olá, Dr. Anderson! Tenho uma dúvida sobre minha aposentadoria ou descontos no extrato. [ja-aposentado]"
              )}
            >
              Tirar dúvida no WhatsApp
            </PillButton>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-8 divide-y divide-[#091D39]/10">
          {faqs.map((f, i) => (
            <div key={f.q} className="py-5">
              <button
                type="button"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between text-left gap-4 py-2 group cursor-pointer"
              >
                <span className="font-heading text-[17px] md:text-[18px] font-bold text-[#091D39] group-hover:text-[#8a6a2b] transition-colors leading-snug">
                  {f.q}
                </span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    openIdx === i
                      ? "bg-[#CFAE70] text-[#091D39] rotate-45"
                      : "bg-[#091D39]/5 text-[#091D39] group-hover:bg-[#CFAE70]/20"
                  }`}
                >
                  <Plus size={16} />
                </span>
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 md:pr-10 text-[15px] text-[#57534E] leading-relaxed font-light">
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

function ContatoJaAposentado() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-semibold uppercase tracking-wider bg-[#8a6a2b]/10 text-[#8a6a2b] border border-[#8a6a2b]/20">
          <Sparkles size={14} /> Atendimento Previdenciário Especializado
        </span>

        <h2 className="font-heading text-[clamp(30px,4.2vw,50px)] font-bold tracking-[-0.03em] leading-tight text-[#091D39]">
          Algo não está certo no seu benefício?{" "}
          <span className="text-[#8a6a2b]">Converse com o advogado.</span>
        </h2>

        <p className="text-[17px] md:text-[18px] text-[#44403C] font-light max-w-[660px] mx-auto leading-relaxed">
          Envie seu extrato ou relate sua dúvida pelo WhatsApp. Atendimento presencial em Serra/ES e 100% online em todo o Brasil.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-5">
          <PillButton
            tone="gold"
            external
            href={wppLink(
              "Olá, Dr. Anderson! Sou aposentado e gostaria de analisar meu benefício do INSS. [ja-aposentado]"
            )}
          >
            Falar pelo WhatsApp agora
          </PillButton>
          <Link href="/revisao-de-aposentadoria">
            <a className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#091D39] hover:text-[#8a6a2b] underline underline-offset-[7px] transition-colors">
              Ver página de Revisão de Aposentadoria
              <ArrowRight size={15} />
            </a>
          </Link>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[15px] md:text-[16px] text-[#091D39]/85">
          <a href="tel:+5527992942888" className="inline-flex items-center gap-2 hover:text-[#8a6a2b] transition-colors">
            <Phone size={17} className="text-[#8a6a2b]" /> {TEL_VISIVEL}
          </a>
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-[#8a6a2b] transition-colors">
            <Mail size={17} className="text-[#8a6a2b]" /> {EMAIL}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin size={17} className="text-[#8a6a2b]" /> Serra/ES · Atendimento presencial e online em todo o Brasil
          </span>
        </div>

        <p className="pt-6 text-[13px] text-[#57534E] leading-relaxed max-w-[720px] mx-auto">
          Em conformidade com o Provimento nº 205/2021 do CFOAB. As informações deste site têm caráter estritamente informativo e educativo, sem promessa de resultado.
        </p>
      </div>
    </section>
  );
}
