import React from "react";
import {
  AlertTriangle,
  Briefcase,
  Calculator,
  CheckCircle2,
  Clock,
  FileSearch,
  HardHat,
  Layers,
  Scale,
  ShieldCheck,
} from "lucide-react";
import heroImage from "@/assets/revisao_hero_bg_1786155510754.jpg";
import {
  ServicePageTemplate,
  type ServicePageBExtras,
  type ServicePageConfig,
} from "@/components/site/ServicePageTemplate";

const config: ServicePageConfig = {
  id: "revisao",
  seo: {
    title: "Revisão de Aposentadoria do INSS: Cálculo e Atrasados | Anderson Litig",
    description:
      "Recebe aposentadoria ou pensão e acha o valor baixo? Fazemos auditoria prévia para verificar erros do INSS, descontos indevidos e diferenças dos últimos 5 anos.",
    canonicalPath: "/revisao-de-aposentadoria",
    knowsAbout: [
      "Revisão de Aposentadoria no INSS",
      "Revisão dos 10 Anos",
      "Inclusão de Tempo Especial PPP",
      "Atividades Concomitantes",
      "Reflexos de Ação Trabalhista no INSS",
      "Cancelamento de Descontos Indevidos",
    ],
  },
  breadcrumbLabel: "Revisão de Aposentadoria",
  wppFloatMessage:
    "Olá, Dr. Anderson! Já sou aposentado(a) e quero conferir se o INSS errou no valor do meu benefício.",
  hero: {
    image: heroImage,
    imageAlt: "Conferência de cálculos e revisão de benefício concedido pelo INSS",
    badge: "Para Quem Já Recebe Benefício",
    BadgeIcon: FileSearch,
    title: "Acha sua aposentadoria",
    highlight: "menor do que deveria ser?",
    subtitle:
      "Se você aposentou nos últimos 10 anos, salários esquecidos, trabalho com insalubridade (PPP) ou processo trabalhista podem ter ficado fora da conta. Refazemos o cálculo completo antes de pedir qualquer coisa ao INSS.",
    whatsappMessage:
      "Olá, Dr. Anderson! Quero conferir minha Carta de Concessão para saber se cabe revisão na minha aposentadoria.",
    ctaLabel: "Solicitar conferência no WhatsApp",
    secondaryLabel: "Por que calcular antes de pedir",
  },
  trustBar: [
    {
      Icon: ShieldCheck,
      t: "Cálculo Prévio Seguro",
      d: "Só indicamos pedir revisão se a conta provar ganho real",
    },
    {
      Icon: Clock,
      t: "Prazo de 10 Anos + Exceções",
      d: "Verificação do prazo e de ações trabalhistas",
    },
    {
      Icon: Calculator,
      t: "Atrasados dos Últimos 5 Anos",
      d: "Diferenças devidas cobradas com correção legal",
    },
  ],
  comparison: {
    badge: "Antes vs. Depois",
    BadgeIcon: Scale,
    title: "Deixar passar o erro x",
    highlight: "conferir antes de protocolar.",
    subtitle:
      "Pedir revisão sem fazer as contas antes pode trazer surpresas — mas deixar de conferir a Carta de Concessão mantém erros antigos sem correção:",
    painCallout:
      "Atenção aos prazos: em regra o pedido de revisão vai até 10 anos do primeiro pagamento, e as diferenças atrasadas costumam voltar até os últimos 5 anos.",
    columns: [
      {
        label: "Sem conferência prévia (Antes)",
        title: "Por que tanta diferença passa despercebida",
        tone: "cream",
        points: [
          "Salários menores ou meses de carteira esquecidos continuam baixando o seu pagamento mensal.",
          "Insalubridade (PPP) ou aumento salarial ganho na Justiça do Trabalho ficam sem efeito no INSS.",
          "Pedir revisão direto no INSS sem cálculo prévio pode fazer o órgão recalcular e até diminuir o valor.",
          "O prazo geral de 10 anos vai correndo mês a mês desde a primeira parcela recebida.",
        ],
      },
      {
        label: "Com nossa auditoria prévia (Depois)",
        title: "Como conferimos seu benefício com segurança",
        tone: "navy",
        points: [
          "Recontamos cada salário considerado desde julho de 1994 antes de mexer no processo.",
          "Só recomendamos entrar se a conferência matemática apontar aumento real e seguro.",
          "Apuramos o novo valor mensal estimado e as diferenças acumuladas dos últimos 5 anos.",
          "Também conferimos o extrato para cancelar descontos indevidos de associações e cartões RMC.",
        ],
      },
    ],
  },
  situations: {
    badge: "Isso acontece com você?",
    BadgeIcon: Calculator,
    title: "Onde o INSS mais costuma errar",
    highlight: "no valor dos aposentados.",
    subtitle:
      "Toque no cenário que mais combina com o seu caso para conversar com a equipe no WhatsApp:",
    items: [
      {
        n: "01",
        Icon: ShieldCheck,
        tag: "Salários Faltando",
        t: "Acho que o INSS deixou salários altos ou meses fora da média",
        d: "Períodos de carteira assinada ou contribuições altas que não entraram na conta da Carta de Concessão.",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Acho que o INSS esqueceu períodos ou salários no cálculo da minha aposentadoria.",
      },
      {
        n: "02",
        Icon: HardHat,
        tag: "Insalubridade (PPP)",
        t: "Trabalhei com barulho ou produto químico e isso não foi contado",
        d: "O INSS não converteu seu tempo especial (PPP) na época e acabou reduzindo o valor final do benefício.",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Já sou aposentado(a), mas tenho períodos de insalubridade (PPP) que não entraram na conta.",
      },
      {
        n: "03",
        Icon: Briefcase,
        tag: "Ação Trabalhista",
        t: "Ganhei processo na Justiça do Trabalho antes ou depois de aposentar",
        d: "Recebeu horas extras, diferenças salariais ou reconhecimento de vínculo e quer levar esse ganho para o INSS?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Ganhei uma ação trabalhista e quero saber se posso revisar minha aposentadoria no INSS.",
      },
      {
        n: "04",
        Icon: Layers,
        tag: "Dois Empregos",
        t: "Paguei INSS em dois trabalhos ao mesmo tempo antes de 06/2019",
        d: "Quem contribuiu em dois empregos ou autônomo + CLT (médicos, professores, técnicos) muitas vezes teve a soma cortada.",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Trabalhei em dois empregos ao mesmo tempo antes de aposentar e quero revisar meu valor.",
      },
      {
        n: "05",
        Icon: Scale,
        tag: "Regra Melhor",
        t: "Existia outra regra mais vantajosa na data em que aposentei",
        d: "Quer conferir se na época da concessão você já preenchia outra opção que pagava mais todo mês?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Quero verificar se na data da minha aposentadoria havia outra regra melhor.",
      },
      {
        n: "06",
        Icon: AlertTriangle,
        tag: "Descontos no Extrato",
        t: "Vejo descontos estranhos de associação ou cartão no meu benefício",
        d: "Quer cancelar descontos que nunca autorizou no extrato de pagamento e buscar a devolução dos valores?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Vi descontos estranhos de associação ou empréstimo no meu extrato do INSS.",
      },
    ],
    footerCtaLabel: "Analisar minha Carta de Concessão",
  },
  process: {
    badge: "O que está incluído",
    title: "Conferência completa antes de",
    highlight: "protocolar qualquer pedido.",
    docsNote: "",
    steps: [
      {
        n: "01",
        t: "Recálculo da sua Carta de Concessão",
        d: "Conferimos salário por salário e tempo considerado pelo INSS para achar onde existe diferença real.",
      },
      {
        n: "02",
        t: "Verificação de prazo e ganho nos últimos 5 anos",
        d: "Checamos o prazo de 10 anos, eventuais exceções e estimamos o valor mensal e os atrasados antes de entrar.",
      },
      {
        n: "03",
        t: "Pedido no INSS ou na Justiça até o fim",
        d: "Se o cálculo confirmar ganho seguro, conduzimos o processo até a atualização do valor e os atrasados.",
      },
    ],
    whatsappMessage:
      "Olá, Dr. Anderson! Quero contratar a conferência da minha aposentadoria no WhatsApp.",
    ctaLabel: "Solicitar análise da revisão no WhatsApp",
  },
  faq: {
    badge: "Dúvidas comuns",
    title: "Perguntas simples sobre",
    highlight: "revisão de benefícios.",
    items: [
      {
        q: "Pedir revisão pode diminuir o valor da aposentadoria que já recebo?",
        a: "Se alguém protocolar sem fazer as contas antes, o INSS pode reexaminar todo o processo e reduzir o valor. Por isso nunca indicamos entrar com revisão sem conferir linha por linha primeiro para ter segurança de que existe aumento real.",
      },
      {
        q: "Quais erros do INSS costumam justificar a revisão de uma aposentadoria?",
        a: "Os casos mais comuns são salários zerados ou menores no extrato, meses trabalhados que ficaram de fora, insalubridade (PPP) ou trabalho na roça não contados, concessão por uma regra pior e aumento ganho em ação trabalhista.",
      },
      {
        q: "Qual é o prazo para pedir revisão — e quem aposentou há mais de 10 anos ainda tem chance?",
        a: "A regra geral é de até 10 anos a partir do mês seguinte ao primeiro pagamento recebido. Porém, casos como ação trabalhista recente ou erros sobre pontos nunca analisados no processo podem ter prazo diferente.",
      },
      {
        q: "Ganhei uma ação na Justiça do Trabalho depois de aposentar. Ainda consigo revisar?",
        a: "Sim. Depois que a ação trabalhista termina de vez, é possível usar essa vitória para pedir a inclusão dos salários ou vínculos no cálculo do INSS.",
      },
      {
        q: "Se a revisão aumentar o valor, recebo todos os atrasados desde a aposentadoria?",
        a: "Em regra você recebe as diferenças mensais acumuladas dos últimos 5 anos antes do pedido de revisão (com correção e juros), além do aumento definitivo para os próximos meses.",
      },
      {
        q: "Quais documentos preciso enviar para conferirem se minha aposentadoria tem erro?",
        a: "Na primeira conversa no WhatsApp basta contar quando você se aposentou. Para fazermos a conferência completa, usamos a Carta de Concessão (em PDF no Meu INSS) e o extrato de pagamentos, além do extrato CNIS, PPPs ou cópia da ação trabalhista se houver.",
      },
    ],
  },
  finalCta: {
    badge: "Atenção aos prazos legais",
    title: "Confira sua Carta de Concessão",
    highlight: "com segurança antes de agir.",
    subtitle:
      "Chame no WhatsApp para verificarmos se há falhas de cálculo ou descontos indevidos no seu benefício.",
    ctaLabel: "Conferir meu benefício no WhatsApp",
    whatsappMessage:
      "Olá, Dr. Anderson! Quero contratar a conferência da minha aposentadoria para revisão.",
  },
};

const extras: ServicePageBExtras = {
  transparencyFilterText:
    "Nossa regra é transparente: nunca indicamos pedir revisão sem números comprovados. Só avançamos para protocolo no INSS ou na Justiça quando o recálculo confirma ganho concreto sem risco de reduzir sua renda atual.",
  deliverableIcons: [FileSearch, Calculator, ShieldCheck],
};

export default function RevisaoV2() {
  return <ServicePageTemplate config={config} extras={extras} />;
}
