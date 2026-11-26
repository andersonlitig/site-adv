import React from "react";
import {
  Baby,
  Briefcase,
  CalendarCheck,
  Clock,
  FileCheck2,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import heroImage from "@/assets/maternidade_hero_bg_1786156060432.jpg";
import {
  ServicePageTemplate,
  type ServicePageBExtras,
  type ServicePageConfig,
} from "@/components/site/ServicePageTemplate";

const config: ServicePageConfig = {
  id: "salario-maternidade",
  seo: {
    title:
      "Salário-Maternidade no INSS: Desempregada, MEI e Retroativo | Anderson Litig",
    description:
      "Saiba quem tem direito ao Salário-Maternidade no INSS: mães desempregadas no período de proteção, MEI, autônomas, CLT, rurais e adoção. Retroativos em até 5 anos.",
    canonicalPath: "/salario-maternidade",
    knowsAbout: [
      "Salário-Maternidade no INSS",
      "Salário-Maternidade Desempregada",
      "Salário-Maternidade MEI e Autônoma",
      "Salário-Maternidade Rural e Adoção",
      "Salário-Maternidade Retroativo em 5 Anos",
    ],
  },
  breadcrumbLabel: "Salário-Maternidade",
  wppFloatMessage:
    "Olá, Dr. Anderson! Quero saber se tenho direito ao Salário-Maternidade no INSS.",
  hero: {
    image: heroImage,
    imageAlt:
      "Mãe segurando seu bebê com apoio jurídico previdenciário especializado",
    badge: "SALÁRIO-MATERNIDADE · MÃES, MEI, AUTÔNOMAS E RURAIS",
    BadgeIcon: Baby,
    title: "Teve bebê nos últimos",
    highlight: "5 anos ou está desempregada?",
    subtitle:
      "Mesmo sem emprego registrado no dia do parto ou da adoção, quem trabalhou antes ou contribui como MEI, autônoma ou trabalhadora rural pode ter direito ao benefício pago pelo INSS.",
    whatsappMessage:
      "Olá, Dr. Anderson! Quero conferir se tenho direito ao Salário-Maternidade.",
    ctaLabel: "Conferir Meu Caso no WhatsApp",
    secondaryLabel: "Ver quem costuma perder esse direito",
  },
  trustBar: [
    {
      Icon: Baby,
      t: "Mesmo desempregada",
      d: "Quem saiu do emprego pode manter a cobertura por até 12 a 36 meses",
    },
    {
      Icon: Clock,
      t: "Pedido em até 5 anos",
      d: "Quem não solicitou na época ainda pode conferir os valores atrasados",
    },
    {
      Icon: Briefcase,
      t: "MEI, autônoma e rural",
      d: "Análise de guias, carnês e provas de agricultura familiar sem sair de casa",
    },
  ],
  comparison: {
    badge: "Antes vs. Depois",
    BadgeIcon: Scale,
    title: "Achar que não tem direito",
    highlight: "x conferir seu extrato completo do INSS.",
    subtitle:
      "Muitas mães deixam de receber o benefício porque o sistema do INSS nega automaticamente ou por falta de informação sobre o prazo de proteção:",
    columns: [
      {
        label: "Sem conferência técnica (Antes)",
        title: "Por que muitas mães deixam de receber",
        tone: "cream",
        points: [
          "Acreditar que só tem direito quem está com carteira assinada ativa no dia do nascimento ou da adoção.",
          "Pedir pelo aplicativo sem corrigir data de saída em aberto na carteira ou sem informar seguro-desemprego que estendia a proteção.",
          "Para MEI e autônomas, confundir meses pagos em atraso que o sistema desconsidera na hora de contar a carência.",
          "Deixar passar o tempo por não saber que quem teve filho nos últimos 5 anos ainda pode solicitar os valores devidos.",
        ],
      },
      {
        label: "Com análise prévia do histórico (Depois)",
        title: "Verificação exata das datas, guias e documentos",
        tone: "navy",
        points: [
          "Conferimos todo o seu histórico no INSS para calcular até qual dia você manteve a proteção após o último trabalho.",
          "Validamos guias de MEI, carnês antigos, registros de carteira e seguro-desemprego para evitar recusas por erro cadastral.",
          "No caso de trabalhadoras rurais, organizamos as provas do campo exigidas em lei em nome da mãe ou da família.",
          "Acompanhamos o pedido desde a análise inicial até a liberação, inclusive para casos negados pelo sistema automático.",
        ],
      },
    ],
    painCallout:
      "Prazo legal: quem deu à luz ou adotou nos últimos 5 anos ainda pode conferir se cumpria os requisitos naquela data e pedir o benefício retroativo.",
  },
  situations: {
    badge: "Isso acontece com você?",
    BadgeIcon: Baby,
    title: "Toque na situação que mais",
    highlight: "combina com a sua história.",
    subtitle:
      "Escolha o item abaixo para já abrir o WhatsApp com sua dúvida e receber orientação clara:",
    items: [
      {
        n: "01",
        Icon: Users,
        tag: "Desempregada",
        t: "Saí do emprego antes de o bebê nascer",
        d: "Quer verificar se o período após sair da empresa — ou o seguro-desemprego — ainda garantia sua proteção no INSS?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Eu estava desempregada quando meu bebê nasceu e quero conferir se eu ainda tinha proteção do INSS.",
      },
      {
        n: "02",
        Icon: Briefcase,
        tag: "MEI e Autônoma",
        t: "Pago MEI ou carnê mensal e tenho dúvida",
        d: "Precisa checar se as contribuições pagas antes do nascimento já fechavam o mínimo exigido e como pedir sem erro?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Contribuo como MEI ou autônoma e quero saber se já cumpro os requisitos para o Salário-Maternidade.",
      },
      {
        n: "03",
        Icon: Clock,
        tag: "Até 5 Anos Atrás",
        t: "Meu filho já nasceu faz tempo e nunca pedi",
        d: "Sabia que ainda é possível analisar sua proteção na época do parto e requerer o benefício antes de completar 5 anos?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Meu filho nasceu há menos de 5 anos, eu não pedi o Salário-Maternidade na época e quero verificar se ainda tenho direito.",
      },
      {
        n: "04",
        Icon: HeartHandshake,
        tag: "Adoção e Guarda",
        t: "Adotei ou obtive guarda judicial para adoção",
        d: "Quer entender como funciona o benefício de 120 dias nos casos de adoção ou guarda judicial, inclusive para o pai adotivo?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Adotei ou tenho guarda judicial para fins de adoção e quero orientação sobre o Salário-Maternidade.",
      },
      {
        n: "05",
        Icon: ShieldCheck,
        tag: "Área Rural",
        t: "Trabalho no campo em agricultura familiar",
        d: "Quais documentos da propriedade, notas fiscais ou declarações comprovam a atividade rural sem carteira assinada?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Trabalho na área rural e quero saber quais documentos preciso para pedir o Salário-Maternidade.",
      },
      {
        n: "06",
        Icon: FileCheck2,
        tag: "Pedido Negado",
        t: "Pedi no aplicativo e deu indeferido",
        d: "O INSS negou por falha na data de baixa da carteira, erro no número de guias pagas ou dúvida sobre o tempo de proteção?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Pedi o Salário-Maternidade pelo Meu INSS e o pedido foi negado. Quero avaliar se vale recorrer.",
      },
    ],
    footerCtaLabel: "Analisar minha situação no WhatsApp",
  },
  process: {
    badge: "O que está incluído",
    title: "Análise simples, rápida e",
    highlight: "sem sair de casa.",
    steps: [
      {
        n: "01",
        t: "Checagem do período de proteção no INSS",
        d: "Analisamos seu último trabalho com carteira assinada, seguro-desemprego ou carnês para conferir se a cobertura cobria a data do nascimento.",
      },
      {
        n: "02",
        t: "Conferência de MEI, carnês ou provas rurais",
        d: "Validamos cada pagamento realizado e orientamos quais documentos da criança ou da atividade rural devem acompanhar o requerimento.",
      },
      {
        n: "03",
        t: "Acompanhamento completo até a decisão",
        d: "Protocolamos o pedido administrativo ou judicial — inclusive para benefícios atrasados dentro dos últimos 5 anos — e monitoramos o pagamento.",
      },
    ],
    whatsappMessage:
      "Olá, Dr. Anderson! Quero verificar meu direito e contratar o acompanhamento do meu Salário-Maternidade.",
    ctaLabel: "Solicitar Conferência do Direito",
  },
  faq: {
    badge: "Dúvidas Frequentes",
    title: "Perguntas comuns sobre",
    highlight: "Salário-Maternidade.",
    items: [
      {
        q: "Quanto tempo depois de sair do emprego ainda tenho direito ao Salário-Maternidade?",
        a: "Em regra, após a saída do emprego com carteira assinada, a trabalhadora mantém a proteção do INSS por 12 meses. Esse prazo pode subir para 24 meses se houve recebimento de seguro-desemprego ou registro formal de desemprego, e chegar a 36 meses para quem tem mais de 10 anos de contribuições pagas sem perda da proteção no meio do caminho.",
      },
      {
        q: "Quantas contribuições quem é MEI ou autônoma precisa ter?",
        a: "As regras para contribuinte individual, facultativa e MEI envolvem carência, mas decisões recentes no STF e atualizações legais têm impacto direto sobre a dispensa ou contagem desse número mínimo conforme cada caso. Por isso, sempre conferimos as datas exatas das guias pagas em dia e a data do parto antes de protocolar.",
      },
      {
        q: "Posso pedir mesmo que meu filho já tenha 2, 3 ou 4 anos de idade?",
        a: "Sim, desde que o pedido seja feito antes de completar 5 anos da data do parto ou da adoção, e que você cumprisse os requisitos de proteção do INSS naquela data. Nesses casos, o valor devido é pago de uma só vez com correção.",
      },
      {
        q: "Quem teve aborto espontâneo ou previsto em lei tem direito?",
        a: "Sim. Nos casos de aborto não criminoso atestado por médico, a segurada tem direito a 14 dias de Salário-Maternidade. Já no caso de natimorto (a partir da 23ª semana ou conforme atestado médico de parto), mantém-se o direito ao período integral de 120 dias.",
      },
      {
        q: "Posso receber Bolsa Família junto com o Salário-Maternidade?",
        a: "É importante ter atenção: durante os meses de pagamento do Salário-Maternidade (ou no recebimento acumulado), a renda entra na base do CadÚnico e pode gerar suspensão temporária de programas assistenciais de transferência de renda, devendo a família ser orientada caso a caso.",
      },
    ],
  },
  finalCta: {
    badge: "Atendimento Digital",
    title: "Quer confirmar se tinha proteção",
    highlight: "na data do parto ou adoção?",
    subtitle:
      "Mande uma mensagem informando quando parou de trabalhar e a data de nascimento do bebê. Fazemos a conferência inicial de forma simples e transparente.",
    ctaLabel: "Conferir Meu Caso no WhatsApp",
    whatsappMessage:
      "Olá, Dr. Anderson! Quero conferir se tenho direito ao Salário-Maternidade.",
  },
};

const extras: ServicePageBExtras = {
  transparencyFilterText:
    "Basta informar quando foi seu último trabalho ou pagamento ao INSS e a data de nascimento da criança. Se você não cumpria o prazo de proteção naquela data, avisamos com total franqueza logo na conversa inicial.",
  deliverableIcons: [Baby, CalendarCheck, ShieldCheck],
};

export default function SalarioMaternidadeV2() {
  return <ServicePageTemplate config={config} extras={extras} />;
}
