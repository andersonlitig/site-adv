import React from "react";
import {
  CheckCircle2,
  Clock,
  FileSearch,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import heroImage from "@/assets/elderly-smartphone.jpg";
import {
  ServicePageTemplate,
  type ServicePageBExtras,
  type ServicePageConfig,
} from "@/components/site/ServicePageTemplate";

const config: ServicePageConfig = {
  id: "bpc-loas",
  seo: {
    title: "BPC/LOAS para Idoso e Pessoa com Deficiência | Anderson Litig",
    description:
      "Benefício de 1 salário mínimo mensal pelo BPC/LOAS para idosos com 65+ anos ou pessoas com deficiência e autismo (TEA) de baixa renda, mesmo sem contribuir ao INSS.",
    canonicalPath: "/bpc-loas",
    knowsAbout: [
      "BPC LOAS Idoso",
      "BPC LOAS Pessoa com Deficiência",
      "BPC LOAS Autismo TEA",
      "Critério de Renda Familiar no INSS",
      "CadÚnico e Dedução de Gastos Médicos",
    ],
  },
  breadcrumbLabel: "BPC/LOAS (Idoso e PCD)",
  wppFloatMessage:
    "Olá, Dr. Anderson! Quero orientação sobre o benefício BPC/LOAS para idoso ou pessoa com deficiência.",
  hero: {
    image: heroImage,
    imageAlt:
      "Idoso acompanhando atendimento jurídico pelo celular com apoio familiar",
    badge: "BPC / LOAS · IDOSO 65+ E PESSOA COM DEFICIÊNCIA",
    BadgeIcon: ShieldCheck,
    title: "BPC/LOAS negado ou",
    highlight: "barrado pela renda da casa?",
    subtitle:
      "O sistema do INSS costuma recusar o pedido olhando só para a renda bruta da família, sem descontar gastos com remédios, fraldas e terapias. Organizamos seu CadÚnico e as provas médicas antes do pedido ou recurso.",
    whatsappMessage:
      "Olá, Dr. Anderson! Preciso de ajuda com um pedido ou revisão de BPC/LOAS.",
    ctaLabel: "Analisar Meu Caso no WhatsApp",
    secondaryLabel: "Entenda o que bloqueia o pedido",
  },
  trustBar: [
    {
      Icon: ShieldCheck,
      t: "Sem exigir contribuição",
      d: "Voltado a idosos 65+ e pessoas com deficiência de baixa renda",
    },
    {
      Icon: HeartHandshake,
      t: "Abatimento de gastos médicos",
      d: "Remédios, fraldas, alimentação especial e terapias contam",
    },
    {
      Icon: FileSearch,
      t: "CadÚnico e laudos revisados",
      d: "Conferência completa antes de enfrentar a avaliação do INSS",
    },
  ],
  comparison: {
    badge: "Antes vs. Depois",
    BadgeIcon: Scale,
    title: "Pedir só pelo aplicativo",
    highlight: "x comprovar a realidade da família.",
    subtitle:
      "Muitos pedidos legítimos de idosos e pessoas com deficiência são negados porque o sistema automático analisa números frios:",
    columns: [
      {
        label: "Sem organização prévia (Antes)",
        title: "Por que o INSS costuma negar direto",
        tone: "cream",
        points: [
          "O sistema divide o salário bruto pelas pessoas da casa e nega o pedido sem descontar despesas com medicamentos e cuidados.",
          "Outro BPC ou aposentadoria mínima de um idoso na mesma casa muitas vezes é somado errado por falta de pedido formal.",
          "CadÚnico desatualizado ou com parentes que já não moram no endereço gera bloqueio automático antes mesmo da perícia.",
          "Na avaliação médica ou social, relatórios incompletos que não explicam a dificuldade no dia a dia reduzem as chances de aprovação.",
        ],
      },
      {
        label: "Com orientação técnica (Depois)",
        title: "Pedido estruturado com gastos reais e laudos claros",
        tone: "navy",
        points: [
          "Levantamos notas e recibos de remédios, alimentação especial, fraldas, transporte e terapias para abater da renda calculada.",
          "Aplicamos a exclusão prevista em lei de outro BPC/LOAS ou aposentadoria de até 1 salário mínimo recebida por idoso ou PCD da casa.",
          "Conferimos o cadastro no CRAS (CadÚnico) antes do protocolo para evitar divergências de endereço e moradores.",
          "Orientamos o que precisa constar nos relatórios médicos e terapêuticos para demonstrar com clareza as limitações de longo prazo.",
        ],
      },
    ],
    painCallout:
      "Importante: a Justiça analisa as condições reais de vida da família e permite descontar despesas contínuas de saúde que não são aceitas automaticamente no aplicativo do INSS.",
  },
  situations: {
    badge: "Isso acontece com você?",
    BadgeIcon: Sparkles,
    title: "Toque na situação mais parecida",
    highlight: "com a da sua família hoje.",
    subtitle:
      "Cada família tem uma composição de renda e despesas diferente. Escolha um item abaixo para abrir sua conversa no WhatsApp:",
    items: [
      {
        n: "01",
        Icon: Users,
        tag: "Idoso 65+",
        t: "Tenho 65 anos ou mais e nunca paguei INSS",
        d: "Quer confirmar se pode receber 1 salário mínimo por mês mesmo sem ter contribuído ou tendo poucos anos de carteira?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Tenho 65 anos ou mais, não contribuí o suficiente para aposentar e quero saber se tenho direito ao BPC/LOAS.",
      },
      {
        n: "02",
        Icon: Sparkles,
        tag: "Autismo (TEA) e Infância",
        t: "Meu filho tem autismo ou deficiência",
        d: "Quer saber como organizar os laudos de terapias, escola e gastos mensais para pedir o BPC sem errar no CadÚnico?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Meu filho tem diagnóstico de autismo (TEA) ou deficiência e quero orientação para pedir o BPC/LOAS.",
      },
      {
        n: "03",
        Icon: Scale,
        tag: "Renda Familiar",
        t: "O INSS negou pela renda da casa",
        d: "Sabia que despesas mensais com saúde ou outro benefício mínimo na residência podem mudar essa conta na Justiça?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! O BPC/LOAS foi negado por causa da renda da família e quero avaliar se é possível descontar gastos médicos.",
      },
      {
        n: "04",
        Icon: HeartHandshake,
        tag: "Doença / Impedimento",
        t: "Um familiar não consegue trabalhar por saúde",
        d: "Quando há problema grave de longo prazo e baixa renda na família, o BPC pode proteger quem está sem cobertura do INSS?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Tenho um familiar com problema grave de saúde de longo prazo que não contribui para o INSS e quero avaliar o BPC/LOAS.",
      },
      {
        n: "05",
        Icon: ShieldCheck,
        tag: "Outro Benefício na Casa",
        t: "Já há um idoso aposentado na residência",
        d: "O sistema do INSS somou a aposentadoria mínima ou outro BPC de quem mora na mesma casa para negar o segundo pedido?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Já existe outra pessoa recebendo 1 salário mínimo na casa e quero saber se isso impede o segundo BPC/LOAS.",
      },
      {
        n: "06",
        Icon: Clock,
        tag: "Bloqueio / Revisão",
        t: "O BPC já ativo foi suspenso ou cortado",
        d: "Recebeu aviso de revisão no Meu INSS ou bloqueio por atualização cadastral e precisa regularizar o pagamento?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! O BPC/LOAS já era recebido, mas foi bloqueado ou suspenso na revisão e preciso de ajuda.",
      },
    ],
    footerCtaLabel: "Avaliar o caso da minha família",
  },
  process: {
    badge: "O que está incluído",
    title: "Organização completa antes de",
    highlight: "enfrentar a perícia.",
    steps: [
      {
        n: "01",
        t: "Conferência da renda real e do CadÚnico",
        d: "Revisamos quem realmente mora na casa, organizamos os comprovantes de despesas médicas contínuas e verificamos rendas excluídas por lei.",
      },
      {
        n: "02",
        t: "Roteiro de laudos médicos e avaliação social",
        d: "Explicamos quais informações clínicas, escolares e de acompanhamento terapêutico demonstram com clareza as barreiras enfrentadas.",
      },
      {
        n: "03",
        t: "Pedido no INSS ou ação na Justiça",
        d: "Protocolamos no INSS ou ingressamos diretamente na Justiça quando o órgão recusa abater os gastos médicos da família.",
      },
    ],
    whatsappMessage:
      "Olá, Dr. Anderson! Quero contratar a análise ou acompanhamento para o meu pedido de BPC/LOAS.",
    ctaLabel: "Solicitar Análise do BPC/LOAS",
  },
  faq: {
    badge: "Dúvidas Frequentes",
    title: "Perguntas comuns sobre",
    highlight: "o BPC/LOAS.",
    items: [
      {
        q: "Qual é a diferença entre BPC/LOAS e aposentadoria?",
        a: "O BPC/LOAS é um benefício assistencial de 1 salário mínimo por mês para quem nunca contribuiu ao INSS (ou contribuiu pouco), voltado a idosos com 65 anos ou mais e pessoas com deficiência de baixa renda. Diferente da aposentadoria, ele não paga 13º salário e não gera pensão por morte aos dependentes.",
      },
      {
        q: "Se a renda por pessoa passar de 1/4 do salário mínimo, eu perco o direito automaticamente?",
        a: "Não necessariamente. Embora esse seja o corte padrão usado no sistema do INSS, a Justiça analisa a vulnerabilidade real da família e permite abater gastos comprovados e contínuos com medicamentos, fraldas, alimentação especial e tratamentos não fornecidos gratuitamente pelo SUS.",
      },
      {
        q: "A aposentadoria de 1 salário mínimo do meu marido ou esposa entra nessa conta?",
        a: "Não deveria entrar. A legislação determina que outro BPC/LOAS ou benefício previdenciário de até 1 salário mínimo recebido por pessoa idosa (65+) ou pessoa com deficiência na mesma residência não deve ser somado na renda familiar para fins de concessão de um novo BPC.",
      },
      {
        q: "Pessoas com Transtorno do Espectro Autista (TEA) têm direito ao BPC/LOAS?",
        a: "Sim. A lei equipara a pessoa com TEA à pessoa com deficiência. Para a concessão, é avaliado tanto o impedimento de longo prazo no convívio e desenvolvimento quanto a renda familiar líquida após descontar despesas com terapias, medicamentos e suporte.",
      },
      {
        q: "É obrigatório ter o CadÚnico atualizado para pedir o BPC?",
        a: "Sim. O Cadastro Único (feito no CRAS da sua cidade) precisa estar ativo e atualizado há menos de 2 anos, refletindo corretamente quem realmente mora e compartilha despesas na casa. Divergências no cadastro são uma das principais causas de bloqueio.",
      },
      {
        q: "E se a pessoa já tiver contribuições antigas ao INSS, vale checar aposentadoria ou auxílio-doença antes?",
        a: "Sim, sempre vale conferir. Quando há contribuições anteriores, uma aposentadoria ou benefício por incapacidade pode ser mais vantajoso porque paga 13º salário e deixa pensão por morte. Fazemos essa verificação logo no início do atendimento.",
      },
    ],
  },
  finalCta: {
    badge: "Orientação Clara",
    title: "Vai pedir o BPC/LOAS ou recorrer",
    highlight: "sem organizar as provas antes?",
    subtitle:
      "Converse pelo WhatsApp sem precisar separar toda a documentação agora. Avaliamos seu CadÚnico, laudos e renda para orientar o caminho adequado.",
    ctaLabel: "Falar com o Escritório no WhatsApp",
    whatsappMessage:
      "Olá, Dr. Anderson! Quero tirar dúvidas sobre o pedido ou negativa do BPC/LOAS.",
  },
};

const extras: ServicePageBExtras = {
  transparencyFilterText:
    "Antes de iniciar qualquer medida, conferimos o CadÚnico, o grupo familiar e as despesas médicas da casa. Se ainda faltar algum ajuste cadastral simples no CRAS ou um relatório médico complementar, orientamos você antes do pedido para evitar atrasos.",
  deliverableIcons: [Users, HeartHandshake, Scale],
};

export default function BpcLoasV2() {
  return <ServicePageTemplate config={config} extras={extras} />;
}
