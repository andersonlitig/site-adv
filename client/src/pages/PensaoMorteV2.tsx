import React from "react";
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  FileSearch,
  HeartHandshake,
  Scale,
  ShieldAlert,
  Users,
} from "lucide-react";
import heroImage from "@/assets/3em3-vitoria_15_1767549660783.jpg";
import {
  ServicePageTemplate,
  type ServicePageBExtras,
  type ServicePageConfig,
} from "@/components/site/ServicePageTemplate";

const config: ServicePageConfig = {
  id: "pensao-por-morte",
  seo: {
    title:
      "Pensão por Morte no INSS: União Estável, Prazos e Cotas | Anderson Litig",
    description:
      "Orientação acolhedora e objetiva para pedir, destravar ou revisar Pensão por Morte no INSS: cônjuges, união estável, filhos, período de proteção e valores atrasados.",
    canonicalPath: "/pensao-por-morte",
    knowsAbout: [
      "Pensão por Morte no INSS",
      "Comprovação de União Estável",
      "Qualidade de Segurado no Óbito",
      "Revisão de Cotas de Pensão",
      "Prazo de 90 e 180 Dias para Atrasados",
    ],
  },
  breadcrumbLabel: "Pensão por Morte",
  wppFloatMessage:
    "Olá, Dr. Anderson! Preciso de orientação sobre um pedido ou negativa de Pensão por Morte.",
  hero: {
    image: heroImage,
    imageAlt:
      "Atendimento jurídico respeitoso e humanizado para famílias no escritório",
    badge: "PENSÃO POR MORTE · INSS E PROTEÇÃO DA FAMÍLIA",
    BadgeIcon: HeartHandshake,
    title: "Pensão por morte:",
    highlight: "prazos, união estável e proteção da família",
    subtitle:
      "Em um momento delicado, prazos curtos de 90 e 180 dias decidem os atrasados, e a falta de documentos da vida em comum costuma travar o pedido. Cuidamos das provas e do processo com acolhimento e clareza.",
    whatsappMessage:
      "Olá, Dr. Anderson! Quero orientação sobre Pensão por Morte no INSS.",
    ctaLabel: "Falar com o Escritório no WhatsApp",
    secondaryLabel: "Ver o que pode travar a pensão",
  },
  trustBar: [
    {
      Icon: Clock,
      t: "Atenção aos prazos legais",
      d: "Protocolo dentro de 90 ou 180 dias preserva os valores desde o óbito",
    },
    {
      Icon: HeartHandshake,
      t: "Provas de união estável",
      d: "Montagem de documentação mesmo sem registro formal em cartório",
    },
    {
      Icon: FileSearch,
      t: "Cobertura em desemprego",
      d: "Verificamos prazos de proteção mesmo sem contribuição nos últimos meses",
    },
  ],
  comparison: {
    badge: "Antes vs. Depois",
    BadgeIcon: Scale,
    title: "Enviar documentos soltos",
    highlight: "x comprovar vínculo e direito do falecido.",
    subtitle:
      "Muitas famílias têm a pensão negada ou recebem valor menor porque detalhes técnicos passam despercebidos no pedido automático:",
    columns: [
      {
        label: "Sem conferência prévia (Antes)",
        title: "O que costuma atrasar ou reduzir a pensão",
        tone: "cream",
        points: [
          "Perder o prazo de 90 dias (ou 180 dias para filhos menores de 16 anos) faz o pagamento começar apenas da data do pedido, perdendo meses atrasados.",
          "Na união estável sem registro em cartório, juntar poucas provas leva à negativa direta por falta de comprovação de convivência.",
          "Quando o falecido estava desempregado, o INSS costuma indeferir sem conferir prazos extras de proteção ou recolhimentos antigos.",
          "Erros na divisão de cotas ou ausência de verificação se o falecido já tinha direito a uma aposentadoria melhor reduzem o benefício mensal.",
        ],
      },
      {
        label: "Com nosso acompanhamento (Depois)",
        title: "Provas organizadas e cálculo conferido desde o início",
        tone: "navy",
        points: [
          "Controlamos os prazos legais desde o primeiro contato para proteger os valores atrasados desde a data do falecimento, quando cabível.",
          "Montamos o conjunto de documentos da união estável — endereço em comum, contas, plano de saúde, seguro, fotos e testemunhas.",
          "Auditamos todo o extrato do falecido no INSS para comprovar que ele ainda mantinha proteção previdenciária mesmo sem pagar nos últimos meses.",
          "Conferimos o cálculo das cotas familiares e verificamos se havia direito adquirido a uma aposentadoria mais vantajosa como base.",
        ],
      },
    ],
    painCallout:
      "Atenção ao prazo: para cônjuges e companheiros, o pedido protocolado em até 90 dias após o falecimento garante o pagamento dos atrasados desde a data do óbito.",
  },
  situations: {
    badge: "Isso acontece com você?",
    BadgeIcon: HeartHandshake,
    title: "Toque na dúvida mais próxima",
    highlight: "da situação da sua família.",
    subtitle:
      "Sabemos que lidar com burocracia após uma perda é difícil. Escolha o card abaixo para iniciar o atendimento:",
    items: [
      {
        n: "01",
        Icon: HeartHandshake,
        tag: "União Estável",
        t: "Morávamos juntos, mas sem papel no cartório",
        d: "Quer saber quais provas do dia a dia o INSS e a Justiça aceitam para reconhecer o direito do companheiro ou companheira?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Eu vivia em união estável sem certidão no cartório e preciso comprovar meu direito à Pensão por Morte.",
      },
      {
        n: "02",
        Icon: ShieldAlert,
        tag: "Sem Contribuição Recente",
        t: "O INSS negou dizendo que o falecido não pagava mais",
        d: "Mesmo desempregado ou afastado por doença, o trabalhador pode manter a proteção do INSS por 12, 24 ou até 36 meses?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! O INSS negou a pensão alegando perda de proteção do falecido e quero verificar se ele ainda tinha cobertura.",
      },
      {
        n: "03",
        Icon: Scale,
        tag: "Pedido Negado",
        t: "A pensão já foi indeferida e não sei como agir",
        d: "Precisa entender se compensa recorrer dentro do próprio INSS ou ingressar com ação judicial para apresentar novas provas e testemunhas?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! A Pensão por Morte foi negada pelo INSS e quero avaliar o melhor caminho para reverter a decisão.",
      },
      {
        n: "04",
        Icon: Users,
        tag: "Ex-Cônjuge / Alimentos",
        t: "Era separado(a), mas havia dependência ou pensão",
        d: "Quem recebia pensão alimentícia ou dependia financeiramente após a separação pode ter direito à cota do benefício?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Havia separação ou recebimento de pensão alimentícia e quero saber se existe direito à Pensão por Morte.",
      },
      {
        n: "05",
        Icon: CheckCircle2,
        tag: "Filho com Deficiência",
        t: "Tenho filho maior de 21 anos inválido ou com deficiência",
        d: "Sabia que a pensão continua após os 21 anos quando o filho possui deficiência intelectual, mental ou incapacidade grave?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Tenho um filho maior de 21 anos com deficiência ou invalidez e quero saber sobre a Pensão por Morte.",
      },
      {
        n: "06",
        Icon: CalendarCheck,
        tag: "Valor e Cotas",
        t: "A pensão foi aprovada, mas o valor veio menor",
        d: "Quer conferir se o INSS aplicou errado as cotas familiares ou deixou de considerar uma aposentadoria melhor para o falecido?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! A Pensão por Morte já foi concedida, mas desconfio que o valor ou a duração estão errados.",
      },
    ],
    footerCtaLabel: "Conversar sobre a pensão",
  },
  process: {
    badge: "O que está incluído",
    title: "Cuidado jurídico com respeito",
    highlight: "ao momento da família.",
    steps: [
      {
        n: "01",
        t: "Checagem de prazos e histórico no INSS",
        d: "Verificamos a data do falecimento, os prazos de atrasados e o extrato de contribuições para confirmar a proteção do falecido.",
      },
      {
        n: "02",
        t: "Organização das provas de união e dependência",
        d: "Separamos exatamente quais documentos têm força legal perante o INSS e a Justiça para comprovar casamento, união estável ou dependência.",
      },
      {
        n: "03",
        t: "Conferência do valor e das cotas familiares",
        d: "Validamos o cálculo do benefício, a duração prevista para o dependente e o pagamento correto dos valores atrasados.",
      },
    ],
    whatsappMessage:
      "Olá, Dr. Anderson! Quero contratar acompanhamento jurídico para meu pedido de Pensão por Morte.",
    ctaLabel: "Solicitar Atendimento Humanizado",
  },
  faq: {
    badge: "Dúvidas Frequentes",
    title: "Perguntas comuns sobre",
    highlight: "Pensão por Morte.",
    items: [
      {
        q: "Qual é o prazo para não perder os valores atrasados?",
        a: "Para cônjuges, companheiros e filhos maiores de 16 anos, o pedido deve ser protocolado no INSS em até 90 dias após o óbito para garantir o pagamento desde a data do falecimento. Para filhos menores de 16 anos ou incapazes, o prazo é de 180 dias. Passado esse prazo, ainda é possível pedir a pensão, porém ela passa a valer a partir da data do protocolo.",
      },
      {
        q: "Como comprovar união estável se não havia documento registrado em cartório?",
        a: "A lei não exige apenas certidão de cartório. É possível comprovar com pelo menos duas provas documentais contemporâneas — como contas de água/luz no mesmo endereço, declaração de Imposto de Renda, plano de saúde, conta bancária conjunta, seguro de vida, certidão de nascimento de filhos em comum ou ficha escolar — além de testemunhas na via judicial, se necessário.",
      },
      {
        q: "Se o falecido estava desempregado há meses, a família perde a pensão?",
        a: "Não automaticamente. O trabalhador mantém a proteção do INSS por um período chamado de 'período de graça': 12 meses após a última contribuição, podendo chegar a 24 meses para quem tem mais de 10 anos de INSS pago, e até 36 meses caso comprove desemprego involuntário ou recebimento de seguro-desemprego.",
      },
      {
        q: "A pensão por morte tem duração vitalícia?",
        a: "Depende da idade do cônjuge ou companheiro na data do óbito, do tempo de contribuição do falecido (mínimo de 18 contribuições) e da duração do casamento ou união estável (mínimo de 2 anos). Para dependentes com 45 anos ou mais no falecimento (cumpridos os demais requisitos), a pensão costuma ser vitalícia; para idades menores, varia em faixas de 3 a 20 anos.",
      },
      {
        q: "Posso acumular minha aposentadoria com a pensão por morte?",
        a: "Sim, é permitido receber as duas juntas, porém a Reforma da Previdência criou uma regra de redução: você recebe 100% do benefício mais vantajoso e uma fatia percentual do segundo benefício, calculada em faixas sobre o salário mínimo.",
      },
    ],
  },
  finalCta: {
    badge: "Apoio Familiar",
    title: "Precisa pedir ou destravar",
    highlight: "a pensão com tranquilidade e respaldo?",
    subtitle:
      "Converse pelo WhatsApp para entendermos a situação da família, os prazos envolvidos e quais documentos fazem diferença no pedido.",
    ctaLabel: "Falar com o Escritório no WhatsApp",
    whatsappMessage:
      "Olá, Dr. Anderson! Quero falar sobre um pedido ou negativa de Pensão por Morte.",
  },
};

const extras: ServicePageBExtras = {
  transparencyFilterText:
    "Tratamos cada atendimento com respeito e discrição. Conferimos certidões, extrato do falecido e provas da vida em comum logo no início para indicar o que já está completo e o que precisa ser reunido antes do protocolo ou da ação judicial.",
  deliverableIcons: [HeartHandshake, FileSearch, Scale],
};

export default function PensaoMorteV2() {
  return <ServicePageTemplate config={config} extras={extras} />;
}
