import React from "react";
import {
  Activity,
  AlertCircle,
  CheckCircle2,
  Clock,
  FileSearch,
  HardHat,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Users,
} from "lucide-react";
import heroImage from "@/assets/beneficio_negado_hero.jpg";
import {
  ServicePageTemplate,
  type ServicePageBExtras,
  type ServicePageConfig,
} from "@/components/site/ServicePageTemplate";

const config: ServicePageConfig = {
  id: "beneficio-negado",
  seo: {
    title: "Benefício Negado pelo INSS: Recurso ou Justiça Federal | Anderson Litig",
    description:
      "Teve aposentadoria, auxílio-doença, BPC ou pensão negados pelo INSS? Avaliamos sua carta de negativa para recorrer ou ir à Justiça preservando atrasados.",
    canonicalPath: "/beneficio-negado",
    knowsAbout: [
      "Reversão de Benefício Negado no INSS",
      "Recurso Administrativo CRPS Prazo 30 dias",
      "Ação Previdenciária na Justiça Federal",
      "Aposentadoria Negada por PPP ou Vínculo",
      "Mandado de Segurança contra Demora do INSS",
    ],
  },
  breadcrumbLabel: "Benefício Negado no INSS",
  wppFloatMessage:
    "Olá, Dr. Anderson! O INSS negou o meu benefício e gostaria que você analisasse a minha carta.",
  hero: {
    image: heroImage,
    imageAlt: "Análise jurídica para reversão de benefício negado pelo INSS",
    badge: "Negativa do INSS · Recurso ou Justiça",
    BadgeIcon: ShieldAlert,
    title: "Teve o benefício negado no INSS?",
    highlight: "Avalie o caminho certo para reverter.",
    subtitle:
      "Muitas recusas acontecem por provas ignoradas ou perícias muito rápidas. Analisamos sua carta de negativa para agir no recurso do INSS ou direto na Justiça Federal, buscando preservar os atrasados desde o primeiro pedido.",
    whatsappMessage:
      "Olá, Dr. Anderson! O INSS negou meu pedido e gostaria de orientação para recorrer ou ingressar na Justiça.",
    ctaLabel: "Analisar minha negativa no WhatsApp",
    secondaryLabel: "Por que o INSS costuma negar?",
  },
  trustBar: [
    {
      Icon: Clock,
      t: "Atenção ao Prazo de 30 Dias",
      d: "Janela para recorrer dentro do próprio INSS",
    },
    {
      Icon: Scale,
      t: "INSS ou Justiça Federal",
      d: "Escolhemos o caminho mais indicado para o caso",
    },
    {
      Icon: ShieldCheck,
      t: "Atrasados Preservados",
      d: "Defesa dos valores desde a data do 1º pedido",
    },
  ],
  comparison: {
    badge: "Qual Caminho Seguir",
    BadgeIcon: Scale,
    title: "Repetir pedido no app x",
    highlight: "agir com recurso ou Justiça Federal.",
    subtitle:
      "Reabrir um pedido novo do zero sem corrigir o erro anterior costuma gerar outra recusa e prejudicar os valores atrasados:",
    painCallout:
      "Atenção: fazer um pedido novo do zero no Meu INSS pode fazer você perder os valores atrasados que estavam acumulados desde a data da primeira entrada.",
    columns: [
      {
        label: "Riscos de tentar sozinho (Antes)",
        title: "O que costuma atrasar após a recusa",
        tone: "cream",
        points: [
          "Repetir pedido sem novos documentos tende à mesma negativa e zera a data anterior.",
          "Recurso administrativo mal instruído pode ficar parado muitos meses na fila interna.",
          "Desistir ao passar os 30 dias sem saber que a Justiça Federal continua acessível.",
          "Deixar de contestar falhas de perícia médica, insalubridade (PPP) ou prova testemunhal.",
        ],
      },
      {
        label: "Com nossa atuação (Depois)",
        title: "Onde buscamos reverter a decisão",
        tone: "navy",
        points: [
          "Avaliamos com clareza se vale recorrer no INSS (até 30 dias) ou entrar direto na Justiça.",
          "Na Justiça Federal, o caso passa por juiz e perito especialista fora do sistema do INSS.",
          "Nos casos urgentes com prova médica forte, pedimos análise antecipada ao juiz.",
          "Defendemos a data original do pedido para buscar os atrasados acumulados na espera.",
        ],
      },
    ],
  },
  situations: {
    badge: "Isso acontece com você?",
    BadgeIcon: FileSearch,
    title: "Qual foi o motivo da negativa",
    highlight: "no seu processo?",
    subtitle:
      "Toque na situação que descreve o que aconteceu no seu pedido para conversar direto no WhatsApp:",
    items: [
      {
        n: "01",
        Icon: Clock,
        tag: "Prazo de 30 dias",
        t: "Recebi a carta de negativa agora e ainda estou no prazo de 30 dias",
        d: "Quer avaliar se compensa recorrer dentro do próprio INSS (quando faltou um papel simples) ou ir direto à Justiça?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Recebi a negativa do INSS recentemente e quero saber se vale entrar com recurso.",
      },
      {
        n: "02",
        Icon: Scale,
        tag: "Via Judicial",
        t: "Passou dos 30 dias ou o INSS não aceitou minhas provas",
        d: "Quer entrar na Justiça Federal para um juiz e perito independente analisarem o seu caso sem a pressa do INSS?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Quero avaliar se o melhor caminho para o meu caso negado é a Justiça Federal.",
      },
      {
        n: "03",
        Icon: HardHat,
        tag: "Tempo Esquecido",
        t: "Negaram aposentadoria ignorando carteiras antigas, roça ou PPP",
        d: "O INSS deixou de contar anos trabalhados, carnês pagos ou insalubridade registrada em documento?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! O INSS negou minha aposentadoria ignorando períodos de trabalho ou PPP.",
      },
      {
        n: "04",
        Icon: Activity,
        tag: "Perícia Médica",
        t: "O perito do INSS me reprovou mesmo com laudos e exames",
        d: "Exame rápido afirmou que você pode trabalhar mesmo estando em tratamento ou sem condição física real?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Meu auxílio-doença foi negado na perícia do INSS mesmo tendo laudos médicos.",
      },
      {
        n: "05",
        Icon: Users,
        tag: "BPC/LOAS ou Pensão",
        t: "Negaram BPC/LOAS por renda ou Pensão por Morte",
        d: "Recusa por conta rígida de renda no BPC ou dificuldade de provar união estável e vínculo na Pensão?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Meu pedido de BPC/LOAS ou Pensão por Morte foi negado pelo INSS.",
      },
      {
        n: "06",
        Icon: AlertCircle,
        tag: "Sem Resposta",
        t: "Meu pedido está travado no INSS há meses sem resposta",
        d: "Passou muito do prazo normal de análise sem decisão nem agendamento? Cabe medida judicial para destravar.",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Meu processo está travado no INSS há meses sem resposta.",
      },
    ],
    footerCtaLabel: "Analisar negativa no WhatsApp",
  },
  process: {
    badge: "O que está incluído",
    title: "Como agimos após a",
    highlight: "recusa do INSS.",
    docsNote: "",
    steps: [
      {
        n: "01",
        t: "Leitura técnica da carta e do processo",
        d: "Identificamos o motivo exato pelo qual o pedido foi negado e quais documentos faltaram ou foram ignorados.",
      },
      {
        n: "02",
        t: "Escolha entre recurso no INSS ou Justiça",
        d: "Explicamos em palavras simples qual rota é mais indicada para reverter a decisão e proteger os atrasados.",
      },
      {
        n: "03",
        t: "Protocolo completo e acompanhamento",
        d: "Organizamos todas as provas, conduzimos o processo até a decisão final e atualizamos você no WhatsApp.",
      },
    ],
    whatsappMessage:
      "Olá, Dr. Anderson! Quero contratar a análise e atuação para reverter minha negativa no INSS.",
    ctaLabel: "Solicitar análise da negativa no WhatsApp",
  },
  faq: {
    badge: "Dúvidas frequentes",
    title: "Perguntas simples sobre",
    highlight: "negativas do INSS.",
    items: [
      {
        q: "É obrigatório recorrer primeiro no INSS antes de ir para a Justiça Federal?",
        a: "Não. Se o seu pedido já foi formalmente negado pelo INSS, você pode entrar direto com ação na Justiça Federal sem esperar meses ou anos pelo recurso interno — principalmente em casos de perícia médica, insalubridade (PPP) ou provas recusadas.",
      },
      {
        q: "Perdi o prazo de 30 dias da carta de negativa. Ainda tenho direito?",
        a: "Sim. O prazo de 30 dias vale apenas para recorrer dentro do próprio INSS. Mesmo depois desse prazo, você continua podendo entrar com ação na Justiça Federal contra aquela decisão ou fazer um pedido corrigido.",
      },
      {
        q: "Vale a pena apenas fazer outro pedido no Meu INSS do zero?",
        a: "Cuidado: fazer um novo pedido sem resolver o erro anterior costuma gerar outra negativa e pode fazer você abrir mão dos atrasados acumulados desde a data do primeiro pedido.",
      },
      {
        q: "Se a negativa for revertida, recebo os atrasados desde quando?",
        a: "Em regra, quando a decisão original é revertida sem fazer um pedido novo do zero, os valores atrasados são calculados desde a data do primeiro pedido feito no INSS.",
      },
      {
        q: "A Justiça Federal demora muito — existe pedido de urgência para receber antes?",
        a: "Nos casos em que há necessidade urgente de saúde ou sustento e provas médicas fortes desde o início, é possível pedir ao juiz uma decisão provisória para adiantar o benefício enquanto o processo segue.",
      },
      {
        q: "Quais documentos preciso enviar para avaliarem a negativa do INSS?",
        a: "Na primeira conversa pelo WhatsApp não precisa ter tudo pronto — basta explicar o que aconteceu. Para analisar por completo, usamos a carta de negativa do Meu INSS, o número do protocolo, o extrato (CNIS) e os laudos ou documentos que o INSS recusou.",
      },
    ],
  },
  finalCta: {
    badge: "Atenção ao prazo da negativa",
    title: "Analise sua carta de negativa",
    highlight: "antes de perder prazos ou atrasados.",
    subtitle:
      "Chame no WhatsApp, conte o motivo da negativa e receba orientação clara sobre recurso ou ação na Justiça.",
    ctaLabel: "Analisar negativa no WhatsApp",
    whatsappMessage:
      "Olá, Dr. Anderson! O INSS negou meu benefício e preciso de orientação.",
  },
};

const extras: ServicePageBExtras = {
  transparencyFilterText:
    "Mesmo após passados os 30 dias do recurso interno no INSS, a Justiça Federal continua acessível. Analisamos o processo antes para dizer com franqueza qual caminho tem base sólida e protege melhor a data do seu primeiro pedido.",
  deliverableIcons: [FileSearch, Scale, CheckCircle2],
};

export default function BeneficioNegadoV2() {
  return <ServicePageTemplate config={config} extras={extras} />;
}
