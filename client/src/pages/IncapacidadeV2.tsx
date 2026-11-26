import React from "react";
import {
  Activity,
  AlertCircle,
  Briefcase,
  CheckCircle2,
  FileSearch,
  HeartPulse,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Stethoscope,
} from "lucide-react";
import heroImage from "@/assets/incapacidade_hero.jpg";
import {
  ServicePageTemplate,
  type ServicePageBExtras,
  type ServicePageConfig,
} from "@/components/site/ServicePageTemplate";

const config: ServicePageConfig = {
  id: "incapacidade",
  seo: {
    title: "Auxílio-Doença, Auxílio-Acidente e Perícia INSS | Anderson Litig",
    description:
      "Perícia médica negada, auxílio-doença cortado, sequela de acidente ou limbo trabalhista? Orientamos seus laudos médicos e atuamos na Justiça Federal.",
    canonicalPath: "/beneficios-por-incapacidade",
    knowsAbout: [
      "Auxílio-Doença e Incapacidade Temporária",
      "Auxílio-Acidente por Sequela Definitiva",
      "Limbo Previdenciário Trabalhista",
      "Perícia Médica Judicial por Especialista",
      "Aposentadoria por Invalidez e Adicional de 25%",
    ],
  },
  breadcrumbLabel: "Auxílio-Doença e Incapacidade",
  wppFloatMessage:
    "Olá, Dr. Anderson! Preciso de orientação sobre auxílio-doença, auxílio-acidente ou perícia do INSS.",
  hero: {
    image: heroImage,
    imageAlt: "Orientação médica e jurídica para perícia e auxílio-doença no INSS",
    badge: "Perícia Médica, Incapacidade & Limbo",
    BadgeIcon: Activity,
    title: "Sem condições de trabalhar",
    highlight: "e com o INSS negando ou cortando?",
    subtitle:
      "Quando uma doença ou acidente impede o trabalho, ficar sem renda não é opção. Orientamos quais informações precisam constar nos seus laudos médicos e atuamos na Justiça por perícia com especialista, Auxílio-Acidente ou solução no limbo.",
    whatsappMessage:
      "Olá, Dr. Anderson! Tive perícia negada, benefício cortado ou estou no limbo e preciso de orientação.",
    ctaLabel: "Consultar sobre meu benefício",
    secondaryLabel: "Por que perícias falham no INSS",
  },
  trustBar: [
    {
      Icon: Stethoscope,
      t: "Laudos Bem Orientados",
      d: "Explicamos o que o médico assistente deve detalhar",
    },
    {
      Icon: Scale,
      t: "Perito Especialista na Justiça",
      d: "Exame imparcial fora da pressa do INSS",
    },
    {
      Icon: Smartphone,
      t: "Sem Desgaste em Filas",
      d: "Envie seus laudos por foto no WhatsApp",
    },
  ],
  comparison: {
    badge: "Por Que Perícias Falham",
    BadgeIcon: Stethoscope,
    title: "Ir à perícia com papel simples x",
    highlight: "entrar com prova médica completa.",
    subtitle:
      "O perito do INSS geralmente é clínico geral e faz avaliação rápida. Veja o que muda quando a documentação é bem preparada:",
    painCallout:
      "Importante: apresentar apenas um atestado curto citando o código da doença (CID) — sem explicar o que impede você de trabalhar na sua função — é um dos maiores motivos de reprovação.",
    columns: [
      {
        label: "Sem preparação médica (Antes)",
        title: "Por que muitos pedidos reprovam na perícia",
        tone: "cream",
        points: [
          "Atestado genérico que não descreve por que você não aguenta exercer o seu trabalho habitual.",
          "Exames antigos ou falta de histórico contínuo de tratamento no prontuário médico.",
          "Benefício encerrado pela 'alta programada' antes da recuperação real.",
          "No limbo trabalhista, o INSS manda voltar, a empresa barra e você fica sem receber salário.",
        ],
      },
      {
        label: "Com nossa atuação (Depois)",
        title: "Como instruímos o caso na via médica e judicial",
        tone: "navy",
        points: [
          "Orientamos o que o seu médico precisa descrever no laudo para comprovar a limitação real.",
          "Ação na Justiça Federal com perito especialista na sua enfermidade (ortopedista, psiquiatra etc.).",
          "Avaliação de Auxílio-Acidente quando ficou sequela definitiva — pago mesmo trabalhando registrado.",
          "No limbo trabalhista, atuação visando salários pela empresa ou benefício pelo INSS.",
        ],
      },
    ],
  },
  situations: {
    badge: "Isso acontece com você?",
    BadgeIcon: HeartPulse,
    title: "Como podemos defender a",
    highlight: "sua saúde e a sua renda.",
    subtitle:
      "Toque na situação que melhor descreve o seu momento atual para falar com a equipe no WhatsApp:",
    items: [
      {
        n: "01",
        Icon: Stethoscope,
        tag: "Afastamento",
        t: "Estou sem condição de trabalhar ou fui reprovado na perícia",
        d: "Passou por cirurgia, lesão, problema de coluna ou depressão e o INSS negou mesmo com atestados e exames?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Preciso de auxílio-doença ou tive minha perícia reprovada no INSS.",
      },
      {
        n: "02",
        Icon: ShieldAlert,
        tag: "Benefício Cortado",
        t: "O INSS cortou meu auxílio antes de eu ter alta do meu médico",
        d: "Recebeu 'alta programada' no sistema do INSS mesmo ainda em tratamento e sem melhora para voltar?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! O INSS cortou meu auxílio-doença antes de eu ter condições de voltar ao trabalho.",
      },
      {
        n: "03",
        Icon: ShieldCheck,
        tag: "Sequela (50%)",
        t: "Fiquei com sequela de acidente e voltei a trabalhar",
        d: "Sofreu acidente de trabalho, trânsito ou doméstico e ficou com perda permanente? Pode ter direito a indenização mensal.",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Tenho sequela permanente de um acidente e quero saber sobre o auxílio-acidente.",
      },
      {
        n: "04",
        Icon: Briefcase,
        tag: "Limbo no Emprego",
        t: "O INSS mandou trabalhar, mas o médico da empresa me barrou",
        d: "Ficou preso entre o INSS que cortou o benefício e a empresa que não deixa voltar nem paga o salário?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Estou no limbo trabalhista: o INSS deu alta mas o médico da empresa não me deixa trabalhar.",
      },
      {
        n: "05",
        Icon: HeartPulse,
        tag: "Incapacidade Permanente",
        t: "Não há mais chance de retorno ao trabalho (Invalidez)",
        d: "Quando não é possível reabilitar para outra função — incluindo acréscimo de 25% se precisar de cuidador.",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Não tenho mais condições de retorno e quero avaliar aposentadoria por invalidez.",
      },
      {
        n: "06",
        Icon: AlertCircle,
        tag: "Sem 12 Contribuições",
        t: "Sofri acidente ou tenho doença grave com poucas parcelas pagas",
        d: "Acidentes de qualquer natureza e doenças graves listadas em lei dispensam o tempo mínimo de 12 contribuições.",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Quero verificar se meu caso dispensa o mínimo de 12 contribuições no INSS.",
      },
    ],
    footerCtaLabel: "Avaliar meu caso médico no WhatsApp",
  },
  process: {
    badge: "O que está incluído",
    title: "Você cuida da sua saúde enquanto",
    highlight: "conduzimos o processo.",
    docsNote: "",
    steps: [
      {
        n: "01",
        t: "Organização dos laudos e exames",
        d: "Orientamos exatamente o que o seu médico precisa detalhar no relatório para comprovar o impedimento ao trabalho.",
      },
      {
        n: "02",
        t: "Perícia com médico especialista na Justiça",
        d: "Se o INSS negar, levamos o processo ao juiz federal para exame imparcial com especialista da sua doença.",
      },
      {
        n: "03",
        t: "Pedido de volta do benefício ou salários",
        d: "Atuamos pelo restabelecimento do auxílio, indenização por sequela ou cobrança dos salários no limbo trabalhista.",
      },
    ],
    whatsappMessage:
      "Olá, Dr. Anderson! Quero contratar para resolver meu auxílio-doença, perícia ou limbo trabalhista.",
    ctaLabel: "Consultar meu caso no WhatsApp",
  },
  faq: {
    badge: "Dúvidas comuns",
    title: "Perguntas simples sobre",
    highlight: "perícia e incapacidade.",
    items: [
      {
        q: "O perito do INSS me examinou rápido e negou o pedido. O que faço?",
        a: "Isso acontece com frequência porque o perito do INSS geralmente é clínico geral. Na Justiça Federal, o juiz nomeia um médico especialista na sua doença (ortopedista, psiquiatra, cardiologista etc.) para avaliar seus laudos e limitações com calma.",
      },
      {
        q: "Estou no limbo: o INSS mandou trabalhar, mas o médico da empresa me barrou. Quem paga meu salário?",
        a: "Se o INSS considerou você apto e a empresa não aceita o retorno nem adapta a função, a empresa é responsável pelos salários desde a recusa — além de ser possível discutir a própria incapacidade contra o INSS na Justiça.",
      },
      {
        q: "Quanto tempo preciso ter contribuído — e quem está desempregado ainda tem direito?",
        a: "Em regra são 12 pagamentos mensais, mas acidentes de trabalho, acidentes de qualquer tipo e doenças graves listadas pelo governo dispensam esse tempo mínimo. Quem parou de pagar recentemente também costuma manter cobertura por 12 a 36 meses.",
      },
      {
        q: "Quem recebe Auxílio-Acidente pode continuar trabalhando com carteira assinada?",
        a: "Sim. O Auxílio-Acidente é uma indenização mensal paga até a aposentadoria para quem ficou com sequela definitiva que reduz a capacidade de trabalho — mesmo continuando empregado normalmente.",
      },
      {
        q: "Quando o Auxílio-Doença pode virar Aposentadoria por Incapacidade Permanente (Invalidez)?",
        a: "Quando a perícia conclui que a doença ou sequela impede definitivamente o retorno ao trabalho e não há como reabilitar você para outra função.",
      },
      {
        q: "Quais documentos médicos e do INSS preciso ter para análise do caso?",
        a: "Para começar a conversa no WhatsApp não precisa reunir tudo na hora. Depois, conferimos laudos médicos atualizados com CID e limitações de trabalho, exames recentes, o resultado da perícia e, em caso de acidente ou limbo, a CAT ou exame de retorno da empresa.",
      },
    ],
  },
  finalCta: {
    badge: "Proteção da sua renda e saúde",
    title: "Não fique sem salário e sem INSS",
    highlight: "enquanto cuida da sua recuperação.",
    subtitle:
      "Mande mensagem pelo WhatsApp para conferirmos seus laudos, resultado de perícia ou situação de limbo trabalhista.",
    ctaLabel: "Consultar sobre meu benefício agora",
    whatsappMessage:
      "Olá, Dr. Anderson! Preciso de orientação sobre auxílio-doença, perícia ou limbo trabalhista.",
  },
};

const extras: ServicePageBExtras = {
  transparencyFilterText:
    "Antes de você marcar outra perícia igual à anterior e correr risco de nova recusa, conferimos seus laudos e dizemos claramente se já cabe ação judicial com perito especialista ou ajuste prévio nos documentos.",
  deliverableIcons: [FileSearch, Stethoscope, ShieldCheck],
};

export default function IncapacidadeV2() {
  return <ServicePageTemplate config={config} extras={extras} />;
}
