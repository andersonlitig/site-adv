import React from "react";
import {
  Calculator,
  CheckCircle2,
  Compass,
  FileSearch,
  Globe,
  HardHat,
  Landmark,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import heroImage from "@/assets/planejamento_hero.jpg";
import {
  ServicePageTemplate,
  type ServicePageBExtras,
  type ServicePageConfig,
} from "@/components/site/ServicePageTemplate";

const config: ServicePageConfig = {
  id: "planejamento",
  seo: {
    title: "Planejamento Previdenciário: Cálculo Exato e CNIS | Anderson Litig",
    description:
      "Vai pedir sua aposentadoria no INSS? Compare todas as regras, corrija meses que sumiram do seu cadastro e descubra se pagar carnê mais alto traz retorno.",
    canonicalPath: "/planejamento",
    knowsAbout: [
      "Planejamento Previdenciário",
      "Simulação de Aposentadoria no INSS",
      "Correção de Extrato CNIS",
      "Regras de Transição da Previdência",
      "Contribuição de Autônomo e MEI no INSS",
      "Tempo Especial PPP e Servidor Público",
    ],
  },
  breadcrumbLabel: "Planejamento Previdenciário",
  wppFloatMessage:
    "Olá, Dr. Anderson! Vi a página de Planejamento Previdenciário e quero conversar sobre quando e como pedir minha aposentadoria.",
  hero: {
    image: heroImage,
    imageAlt: "Advogado analisando planejamento previdenciário e regras de aposentadoria do INSS",
    badge: "Planejamento Previdenciário",
    BadgeIcon: Compass,
    title: "Vai pedir sua aposentadoria",
    highlight: "sem conferir as contas antes?",
    subtitle:
      "Depois que você recebe a primeira parcela no INSS, não é mais possível desistir ou trocar de regra. Analisamos seu histórico e comparamos as opções antes para você saber o melhor momento de pedir e evitar contribuições sem retorno.",
    whatsappMessage:
      "Olá, Dr. Anderson! Quero fazer meu Planejamento Previdenciário antes de pedir a aposentadoria no INSS.",
    ctaLabel: "Solicitar Planejamento no WhatsApp",
    secondaryLabel: "Entenda a diferença",
  },
  trustBar: [
    {
      Icon: TrendingUp,
      t: "Regras Comparadas",
      d: "Veja quanto muda entre pedir agora ou esperar",
    },
    {
      Icon: FileSearch,
      t: "Conferência do Extrato",
      d: "Saiba se pagar pelo teto traz retorno real",
    },
    {
      Icon: Smartphone,
      t: "Explicado em Reunião",
      d: "Presencial na Serra/ES ou por vídeo no Brasil e exterior",
    },
  ],
  comparison: {
    badge: "Antes vs. Depois",
    BadgeIcon: Calculator,
    title: "Simular no aplicativo x",
    highlight: "decidir com cálculo completo.",
    subtitle:
      "Quem confia apenas no simulador automático do Meu INSS muitas vezes descobre tarde demais que havia uma alternativa mais vantajosa:",
    painCallout:
      "Importante: depois que o primeiro pagamento da aposentadoria é sacado, a escolha se torna definitiva — por isso conferir antes do pedido faz toda a diferença.",
    columns: [
      {
        label: "Sem planejamento (Antes)",
        title: "Riscos de pedir no Meu INSS sem conferência",
        tone: "cream",
        points: [
          "O aplicativo aplica a regra automática disponível, mesmo quando existe outra fórmula mais vantajosa.",
          "Carteiras antigas sem data de saída, carnês antigos ou insalubridade ficam fora da conta.",
          "Autônomos e MEIs muitas vezes pagam pelo teto nos últimos anos sem aumento proporcional no benefício.",
          "Depois do primeiro saque do benefício, não dá mais para desistir e escolher outra regra.",
        ],
      },
      {
        label: "Com nosso plano (Depois)",
        title: "Clareza de datas, contribuições e regras",
        tone: "navy",
        points: [
          "Comparamos todas as regras aplicáveis mostrando a data prevista e a estimativa de valor de cada cenário.",
          "Conferimos períodos ausentes no extrato do INSS, carteiras antigas, insalubridade (PPP) e tempo público.",
          "Calculamos o valor indicado de contribuição para autônomo ou MEI não pagar guias caras sem retorno.",
          "Parecer completo com reunião explicativa para você escolher o momento mais estratégico.",
        ],
      },
    ],
  },
  situations: {
    badge: "Isso acontece com você?",
    BadgeIcon: Calculator,
    title: "Toque na dúvida que mais parece",
    highlight: "com a sua situação hoje.",
    subtitle:
      "Cada pessoa tem uma história de trabalho diferente. Escolha o item abaixo para já abrir a conversa no WhatsApp:",
    items: [
      {
        n: "01",
        Icon: Calculator,
        tag: "Qual regra escolher",
        t: "Estou perto de aposentar e tenho medo de pedir errado",
        d: "Quer saber se vale pedir agora ou esperar alguns meses para evitar redutores e receber mais por mês?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Estou perto de me aposentar e quero saber qual regra paga melhor para mim.",
      },
      {
        n: "02",
        Icon: FileSearch,
        tag: "Erros no cadastro",
        t: "Meu extrato do INSS tem falhas ou meses sumidos",
        d: "Tem carteira assinada antiga sem data de saída, vínculo faltando ou salários zerados no aplicativo Meu INSS?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Notei meses faltando ou erros no meu extrato do Meu INSS e quero corrigir antes de pedir.",
      },
      {
        n: "03",
        Icon: TrendingUp,
        tag: "Autônomo & MEI",
        t: "Pago carnê ou MEI e não sei quanto devo contribuir",
        d: "Quer descobrir se pagar pelo teto compensa ou se dá para diminuir a guia mensal sem prejudicar o benefício?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Pago INSS como autônomo/MEI e quero saber qual valor realmente vale a pena pagar.",
      },
      {
        n: "04",
        Icon: HardHat,
        tag: "Insalubridade & Roça",
        t: "Trabalhei com barulho, produto químico ou no campo",
        d: "Tem tempo em fábrica, oficina, hospital, área elétrica ou trabalho rural antigo que pode adiantar a aposentadoria?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Trabalhei com insalubridade (PPP) ou no meio rural e quero contar esse tempo.",
      },
      {
        n: "05",
        Icon: Landmark,
        tag: "Serviço Público + INSS",
        t: "Tenho anos em empresa privada e também concurso público",
        d: "Quer saber antes de misturar os dois tempos se compensa juntar tudo ou buscar duas aposentadorias separadas?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Trabalhei no setor privado e no serviço público e quero planejar antes de pedir certidão.",
      },
      {
        n: "06",
        Icon: Globe,
        tag: "Brasil & Exterior",
        t: "Moro fora do Brasil ou já trabalhei no exterior",
        d: "Quer entender como usar acordos internacionais ou continuar pagando o INSS da forma certa morando fora?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Moro ou trabalhei fora do Brasil e quero fazer meu planejamento no INSS.",
      },
    ],
    footerCtaLabel: "Quero falar sobre meu planejamento",
  },
  process: {
    badge: "O que está incluído",
    title: "Mais do que uma simulação.",
    highlight: "Um plano claro para seguir.",
    docsNote: "",
    steps: [
      {
        n: "01",
        t: "Conferência de carteiras e cadastro do INSS",
        d: "Cruzamos suas carteiras de trabalho, carnês antigos e o extrato do Meu INSS para nenhum mês contribuído ficar de fora.",
      },
      {
        n: "02",
        t: "Simulação de datas, regras e contribuições futuras",
        d: "Calculamos as regras em que você se encaixa e mostramos quando vale ajustar ou evitar guias mais altas sem retorno.",
      },
      {
        n: "03",
        t: "Reunião explicativa em linguagem simples",
        d: "Conversamos presencialmente ou por vídeo mostrando o documento pronto para você decidir o momento certo com segurança.",
      },
    ],
    whatsappMessage:
      "Olá, Dr. Anderson! Quero contratar meu Planejamento Previdenciário pelo WhatsApp.",
    ctaLabel: "Solicitar Planejamento no WhatsApp",
  },
  faq: {
    badge: "Dúvidas comuns",
    title: "Perguntas simples sobre",
    highlight: "o planejamento no INSS.",
    items: [
      {
        q: "O simulador gratuito do aplicativo Meu INSS já não faz essa conta?",
        a: "Não com segurança. O próprio aplicativo avisa que aquela simulação não garante direito: ele não enxerga carteiras antigas fora do sistema, não converte trabalho com barulho ou insalubridade (PPP) e não avisa se esperar alguns meses aumenta o valor.",
      },
      {
        q: "Quanto tempo antes de me aposentar vale a pena fazer?",
        a: "O ideal é entre 2 e 5 anos antes, ou imediatamente antes de clicar em 'Pedir Aposentadoria' no aplicativo. Quanto antes você fizer, mais fácil é consertar falhas no cadastro e evitar pagar carnê caro sem necessidade.",
      },
      {
        q: "Vale a pena pagar pelo teto do INSS nos últimos anos para aumentar o valor?",
        a: "Na maioria dos casos hoje, não. Desde a Reforma de 2019, a conta usa todos os salários desde julho de 1994 — então pagar pelo teto só nos últimos anos costuma sair caro e quase não muda o valor final.",
      },
      {
        q: "Deixei meses sem pagar como autônomo ou MEI. O plano mostra se compensa pagar atrasado?",
        a: "Sim. Calculamos quanto custa quitar as guias em atraso comparado ao quanto isso aumenta por mês na sua aposentadoria.",
      },
      {
        q: "Tempo com insalubridade (PPP), trabalho rural ou serviço público entra no cálculo?",
        a: "Sim. Cruzamos empresas privadas com insalubridade, atividade rural e serviço público para avaliar se vale somar tudo ou buscar aposentadorias separadas.",
      },
      {
        q: "Preciso já ter todos os documentos na mão para chamar no WhatsApp?",
        a: "Não. Para a primeira conversa basta contar sua idade e situação. Depois de contratar, orientamos passo a passo como baixar o extrato (CNIS) pelo celular e enviar fotos das carteiras e carnês.",
      },
    ],
  },
  finalCta: {
    badge: "Planeje antes de pedir",
    title: "Decida sua aposentadoria",
    highlight: "com calma e segurança nos números.",
    subtitle:
      "Mande uma mensagem no WhatsApp para conversarmos sobre o melhor momento e caminho para o seu caso.",
    ctaLabel: "Conversar sobre meu Planejamento",
    whatsappMessage:
      "Olá, Dr. Anderson! Quero fazer meu Planejamento Previdenciário antes de pedir aposentadoria.",
  },
};

const extras: ServicePageBExtras = {
  transparencyFilterText:
    "Mostramos de forma transparente quando vale pedir agora, quando compensa esperar alguns meses e se pagar guias mais altas traz ou não retorno — tudo explicado em linguagem simples antes de você decidir.",
  deliverableIcons: [FileSearch, Calculator, CheckCircle2],
};

export default function PlanejamentoV2() {
  return <ServicePageTemplate config={config} extras={extras} />;
}
