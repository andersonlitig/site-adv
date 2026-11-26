import React from "react";
import {
  Briefcase,
  CalendarCheck,
  Calculator,
  CheckCircle2,
  FileSearch,
  HardHat,
  Landmark,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";
import heroImage from "@/assets/aposentadoria_hero.jpg";
import {
  ServicePageTemplate,
  type ServicePageBExtras,
  type ServicePageConfig,
} from "@/components/site/ServicePageTemplate";

const config: ServicePageConfig = {
  id: "aposentadorias",
  seo: {
    title: "Aposentadorias do INSS: Idade, Tempo, Especial e PCD | Anderson Litig",
    description:
      "Conferência do seu histórico de trabalho antes do pedido no INSS: aposentadoria por idade, regras de transição, especial (PPP), rural, PCD e servidor.",
    canonicalPath: "/aposentadorias",
    knowsAbout: [
      "Aposentadoria por Idade",
      "Regras de Transição do INSS",
      "Aposentadoria Especial PPP",
      "Aposentadoria da Pessoa com Deficiência PCD",
      "Aposentadoria Híbrida e Rural",
      "Aposentadoria de Servidor Público e CTC",
    ],
  },
  breadcrumbLabel: "Aposentadorias do INSS",
  wppFloatMessage:
    "Olá, Dr. Anderson! Quero analisar meu histórico antes de pedir a aposentadoria no INSS.",
  hero: {
    image: heroImage,
    imageAlt: "Advogado previdenciário analisando aposentadoria no INSS",
    badge: "Aposentadorias do INSS",
    BadgeIcon: Sparkles,
    title: "Um pedido apressado no Meu INSS",
    highlight: "pode reduzir sua aposentadoria.",
    subtitle:
      "O aplicativo do INSS não corrige carteira antiga nem converte trabalho com insalubridade (PPP) por conta própria. Conferimos seu histórico e comparamos as regras antes de dar entrada para evitar perdas evitáveis.",
    whatsappMessage:
      "Olá, Dr. Anderson! Quero analisar meu histórico antes de pedir minha aposentadoria no INSS.",
    ctaLabel: "Analisar minha aposentadoria no WhatsApp",
    secondaryLabel: "Entenda o cuidado antes de pedir",
  },
  trustBar: [
    {
      Icon: Calculator,
      t: "Regras Comparadas",
      d: "Idade, pontos, pedágios e regras anteriores à Reforma",
    },
    {
      Icon: FileSearch,
      t: "Cadastro Revisado",
      d: "Carteiras antigas, carnês e PPP organizados antes",
    },
    {
      Icon: Smartphone,
      t: "Atendimento 100% Digital",
      d: "Presencial na Serra/ES ou online no Brasil e exterior",
    },
  ],
  comparison: {
    badge: "Antes vs. Depois",
    BadgeIcon: FileSearch,
    title: "Pedir sozinho no aplicativo x",
    highlight: "entrar com os documentos certos.",
    subtitle:
      "Veja a diferença prática entre enviar documentos soltos no Meu INSS e preparar o pedido com conferência prévia:",
    painCallout:
      "Importante: o sistema do INSS olha apenas o que já está registrado no aplicativo — tempo antigo sem baixa, trabalho na roça e insalubridade (PPP) costumam ficar de fora se não forem comprovados do jeito certo.",
    columns: [
      {
        label: "Sem revisão prévia (Antes)",
        title: "Onde muitos pedidos travam ou perdem valor",
        tone: "cream",
        points: [
          "Carteiras antigas sem data de saída viram meses zerados na contagem do INSS.",
          "Documento de insalubridade (PPP) com erro de preenchimento faz o órgão rejeitar anos especiais.",
          "Perder o prazo de 30 dias quando o INSS pede documentos extras pode encerrar o processo.",
          "Depois de receber a primeira parcela, não dá mais para voltar atrás e trocar de regra.",
        ],
      },
      {
        label: "Com nossa condução (Depois)",
        title: "Pedido organizado desde o primeiro dia",
        tone: "navy",
        points: [
          "Buscamos carteiras antigas, carnês, trabalho rural, insalubridade (PPP) e laudos de deficiência.",
          "Comparamos as regras de transição para identificar qual oferece melhor equilíbrio entre data e valor.",
          "Organizamos todas as provas antes de protocolar para evitar exigências e atrasos longos.",
          "Acompanhamos o pedido do começo ao fim — incluindo recurso ou ação judicial se o INSS recusar.",
        ],
      },
    ],
  },
  situations: {
    badge: "Isso acontece com você?",
    BadgeIcon: Briefcase,
    title: "Qual dessas histórias mais parece",
    highlight: "com a sua vida de trabalho?",
    subtitle:
      "Toque no item abaixo que combina com o seu caso para conversar no WhatsApp:",
    items: [
      {
        n: "01",
        Icon: CalendarCheck,
        tag: "Por Idade ou Híbrida",
        t: "Tenho 65 anos (homem) ou 62 (mulher) e 15 anos de contribuição",
        d: "Quer saber se já completa os requisitos da Aposentadoria por Idade — inclusive somando trabalho na roça com cidade?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Quero conferir se já tenho direito à Aposentadoria por Idade.",
      },
      {
        n: "02",
        Icon: Calculator,
        tag: "Regras de Transição",
        t: "Contribuo há muitos anos e não sei qual regra paga melhor",
        d: "Quer comparar pontos, idade progressiva, pedágio de 50% e pedágio de 100% antes de escolher no aplicativo?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Quero comparar as regras de transição para ver qual dá melhor valor para mim.",
      },
      {
        n: "03",
        Icon: HardHat,
        tag: "Insalubridade & Risco",
        t: "Trabalhei com ruído, calor, químicos, hospital ou eletricidade",
        d: "Quer conferir se o PPP está preenchido corretamente para aposentar mais cedo ou aumentar seu tempo de trabalho?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Trabalhei em atividade insalubre/perigosa e quero avaliar meu PPP.",
      },
      {
        n: "04",
        Icon: Users,
        tag: "Pessoa com Deficiência",
        t: "Tenho alguma limitação física, auditiva, visual ou intelectual",
        d: "Pessoas com deficiência de longo prazo têm regra própria para aposentar mais cedo e muitas vezes com cálculo melhor.",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Gostaria de saber sobre aposentadoria para Pessoa com Deficiência (PCD).",
      },
      {
        n: "05",
        Icon: ShieldCheck,
        tag: "Campo & Professores",
        t: "Trabalhei na agricultura familiar, pesca ou como professor",
        d: "Trabalhadores rurais e professores da educação básica têm redução na idade mínima e regras específicas.",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Tenho tempo rural ou como professor e quero analisar minha aposentadoria.",
      },
      {
        n: "06",
        Icon: Landmark,
        tag: "Serviço Público + INSS",
        t: "Trabalhei em empresa privada e também como servidor público",
        d: "Quer avaliar antes de pedir certidão de tempo (CTC) se compensa juntar os períodos ou buscar duas aposentadorias.",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Tenho tempo no serviço público e na iniciativa privada e preciso de orientação.",
      },
    ],
    footerCtaLabel: "Consultar meu tempo no WhatsApp",
  },
  process: {
    badge: "O que está incluído",
    title: "Do extrato do INSS até o",
    highlight: "benefício concedido com segurança.",
    docsNote: "",
    steps: [
      {
        n: "01",
        t: "Conferência de vínculos e tempo especial",
        d: "Verificamos carteiras antigas, carnês e períodos com barulho ou insalubridade que precisam entrar na conta.",
      },
      {
        n: "02",
        t: "Escolha da regra mais vantajosa",
        d: "Comparamos as fórmulas disponíveis antes do pedido para evitar descontos evitáveis no valor mensal.",
      },
      {
        n: "03",
        t: "Protocolo completo e acompanhamento",
        d: "Cuidamos do pedido no INSS, respondemos exigências dentro do prazo e atuamos na Justiça se houver recusa.",
      },
    ],
    whatsappMessage:
      "Olá, Dr. Anderson! Quero contratar o acompanhamento da minha aposentadoria.",
    ctaLabel: "Solicitar análise da aposentadoria",
  },
  faq: {
    badge: "Dúvidas comuns",
    title: "Perguntas simples sobre",
    highlight: "aposentadoria no INSS.",
    items: [
      {
        q: "Se eu pedir sozinho no Meu INSS, o sistema escolhe automaticamente a melhor regra?",
        a: "Não necessariamente. O sistema automático olha apenas o que já está limpo no cadastro e muitas vezes deixa de fora carteiras antigas, insalubridade (PPP), tempo na roça ou aplica uma regra menor do que a mais vantajosa.",
      },
      {
        q: "Qual a diferença entre aposentadoria por idade e as regras de transição?",
        a: "A aposentadoria por idade exige 65 anos (homem) e 62 (mulher) com pelo menos 15 anos pagos. Já as regras de transição (pontos, idade progressiva e pedágios) servem para quem já contribuía antes da Reforma de 2019 e muitas vezes antecipam a data ou melhoram o valor.",
      },
      {
        q: "Trabalhei sem registro, no campo ou tenho carnês antigos fora do extrato. Dá para contar?",
        a: "Sim. Com carteiras assinadas, carnês originais, contratos ou documentos rurais da época, é possível comprovar e incluir esses meses na contagem antes ou durante o pedido.",
      },
      {
        q: "Quem trabalhou exposto a barulho ou insalubridade ainda aproveita o PPP?",
        a: "Sim. Todo trabalho especial até 13/11/2019 pode ganhar um acréscimo de tempo (40% para homens e 20% para mulheres), adiantando a aposentadoria e melhorando o valor quando o documento está correto.",
      },
      {
        q: "Sou servidor público ou trabalhei no setor privado e público. Como funciona?",
        a: "É possível somar os períodos com a Certidão de Tempo de Contribuição (CTC) para o regime mais vantajoso ou, em certos casos, organizar dois benefícios separados. Conferir antes evita decisões sem volta.",
      },
      {
        q: "Quais documentos preciso separar — e preciso ir pessoalmente ao escritório?",
        a: "Na primeira conversa pelo WhatsApp não precisa mandar nada. Para fazer o pedido completo, usamos extrato do Meu INSS (CNIS), fotos das carteiras de trabalho, carnês antigos e PPP ou laudos conforme o caso. Atendemos presencialmente na Serra/ES e 100% online para todo o Brasil e exterior.",
      },
    ],
  },
  finalCta: {
    badge: "Decisão antes do 1º pagamento",
    title: "Não entregue sua aposentadoria",
    highlight: "apenas ao cálculo automático.",
    subtitle:
      "Converse pelo WhatsApp antes de clicar em 'Pedir Aposentadoria' e faça a conferência completa do seu histórico.",
    ctaLabel: "Analisar minha aposentadoria no WhatsApp",
    whatsappMessage:
      "Olá, Dr. Anderson! Quero acompanhar minha aposentadoria com o escritório.",
  },
};

const extras: ServicePageBExtras = {
  transparencyFilterText:
    "Você não precisa enfrentar filas em agência do INSS nem entender de aplicativo: avaliamos seu caso com clareza, dizemos se já compensa pedir agora ou ajustar algum vínculo antes, e conduzimos tudo de ponta a ponta.",
  deliverableIcons: [FileSearch, Calculator, ShieldCheck],
};

export default function AposentarV2() {
  return <ServicePageTemplate config={config} extras={extras} />;
}
