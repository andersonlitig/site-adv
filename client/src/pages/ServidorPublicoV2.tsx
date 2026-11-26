import React from "react";
import {
  Briefcase,
  Calculator,
  CalendarCheck,
  FileSearch,
  GraduationCap,
  HardHat,
  Landmark,
  Scale,
  ShieldCheck,
} from "lucide-react";
import heroImage from "@/assets/man_planning.jpg";
import {
  ServicePageTemplate,
  type ServicePageBExtras,
  type ServicePageConfig,
} from "@/components/site/ServicePageTemplate";

const config: ServicePageConfig = {
  id: "servidor-publico",
  seo: {
    title: "Aposentadoria do Servidor Público (RPPS) e CTC | Anderson Litig",
    description:
      "Planejamento e aposentadoria para servidores públicos: integralidade e paridade, emissão e uso da certidão de tempo (CTC), tempo especial na saúde, abono de permanência e dupla aposentadoria.",
    canonicalPath: "/servidor-publico",
    knowsAbout: [
      "Aposentadoria de Servidor Público RPPS",
      "Certidão de Tempo de Contribuição CTC",
      "Contagem Recíproca INSS e Serviço Público",
      "Integralidade e Paridade",
      "Abono de Permanência",
      "Aposentadoria Especial de Servidor da Saúde",
    ],
  },
  breadcrumbLabel: "Servidor Público (RPPS)",
  wppFloatMessage:
    "Olá, Dr. Anderson! Sou servidor público e quero orientação sobre minha aposentadoria ou certidão de tempo (CTC).",
  hero: {
    image: heroImage,
    imageAlt:
      "Servidor público analisando planejamento de carreira e aposentadoria",
    badge: "SERVIDOR PÚBLICO (RPPS) · CTC E DUPLA APOSENTADORIA",
    BadgeIcon: Landmark,
    title: "Vai juntar o INSS ao",
    highlight: "serviço público sem simular antes?",
    subtitle:
      "Depois que a Certidão de Tempo (CTC) é usada no órgão público, não dá para desfazer a escolha. Simulamos antes se vale somar tudo, pedir o abono de permanência ou conquistar duas aposentadorias separadas.",
    whatsappMessage:
      "Olá, Dr. Anderson! Sou servidor público e quero simular meus cenários de aposentadoria antes de usar a CTC.",
    ctaLabel: "Planejar Minha Aposentadoria no WhatsApp",
    secondaryLabel: "Ver riscos ao pedir sem cálculo",
  },
  trustBar: [
    {
      Icon: Landmark,
      t: "União, Estados e Municípios",
      d: "Estudo adaptado ao estatuto próprio e ao seu instituto de previdência",
    },
    {
      Icon: Calculator,
      t: "Simulação de 1 ou 2 aposentadorias",
      d: "Análise antes de emitir ou usar a Certidão de Tempo (CTC)",
    },
    {
      Icon: ShieldCheck,
      t: "Salário integral e abono",
      d: "Verificação de paridade, tempo especial na saúde e magistério",
    },
  ],
  comparison: {
    badge: "Antes vs. Depois",
    BadgeIcon: Scale,
    title: "Levar o tempo do INSS no impulso",
    highlight: "x decidir com o cálculo dos dois caminhos.",
    subtitle:
      "Quem trabalha ou já trabalhou no setor privado e no serviço público muitas vezes perde direitos por escolher a primeira opção sugerida no RH:",
    columns: [
      {
        label: "Sem cálculo comparativo (Antes)",
        title: "Riscos comuns do servidor antes de aposentar",
        tone: "cream",
        points: [
          "Transferir todo o tempo do INSS para o órgão público quando havia possibilidade de manter duas aposentadorias separadas.",
          "Aposentar na primeira regra apresentada pelo RH e perder o último salário cheio e os reajustes iguais aos da ativa (para quem entrou antes de 2004).",
          "Continuar trabalhando sem pedir o Abono de Permanência, deixando de receber de volta o desconto mensal da previdência.",
          "Ignorar períodos com insalubridade na saúde ou tempo reduzido de sala de aula por falta de certidão ou ajuste no estatuto.",
        ],
      },
      {
        label: "Com planejamento completo (Depois)",
        title: "Cenários claros para servidor efetivo, professor e saúde",
        tone: "navy",
        points: [
          "Comparamos lado a lado o retorno de uma aposentadoria única versus duas aposentadorias (Serviço Público + INSS).",
          "Verificamos a data exata de cada regra de transição do seu estatuto para defender salário integral, paridade ou a melhor média.",
          "Calculamos desde quando você já teria direito ao Abono de Permanência para requerer o benefício atual e valores atrasados.",
          "Avaliamos tempo especial em hospitais/postos e atividade de magistério para antecipar a aposentadoria com segurança.",
        ],
      },
    ],
    painCallout:
      "Atenção: depois que o servidor registra o tempo do INSS no órgão público e tem a aposentadoria publicada, a lei não permite desfazer a troca para buscar um segundo benefício.",
  },
  situations: {
    badge: "Isso acontece com você?",
    BadgeIcon: Landmark,
    title: "Toque na dúvida que mais",
    highlight: "representa o seu momento hoje.",
    subtitle:
      "Cada município, estado e carreira tem regras próprias. Escolha um tema abaixo para falar direto no WhatsApp:",
    items: [
      {
        n: "01",
        Icon: Briefcase,
        tag: "Empresa Privada + Concurso",
        t: "Tenho anos de INSS e também cargo público",
        d: "Quer descobrir antes de pedir a certidão (CTC) se compensa juntar os tempos ou buscar duas aposentadorias separadas?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Trabalhei em empresa privada (INSS) e sou servidor público. Quero simular antes de emitir ou usar a CTC.",
      },
      {
        n: "02",
        Icon: Landmark,
        tag: "Salário Integral e Paridade",
        t: "Entrei antes de 2004 e quero manter meu salário",
        d: "Precisa saber a data exata e a regra certa para preservar o último vencimento integral com reajustes iguais aos da ativa?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Ingressei no serviço público antes de 2004 e quero verificar minhas regras de integralidade e paridade.",
      },
      {
        n: "03",
        Icon: CalendarCheck,
        tag: "Abono de Permanência",
        t: "Já tenho tempo, mas quero seguir trabalhando",
        d: "Sabia que quem já cumpre os requisitos para aposentar e segue na ativa pode pedir a devolução do desconto previdenciário todo mês?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Continuo trabalhando mesmo já tendo tempo de serviço e quero verificar meu direito ao Abono de Permanência.",
      },
      {
        n: "04",
        Icon: HardHat,
        tag: "Saúde e Insalubridade",
        t: "Atuo em hospital, posto ou área insalubre",
        d: "Como utilizar a aposentadoria especial no serviço público ou aproveitar períodos insalubres antigos para antecipar a saída?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Trabalho na área da saúde exposto a insalubridade e quero avaliar minha aposentadoria especial no serviço público.",
      },
      {
        n: "05",
        Icon: GraduationCap,
        tag: "Professor Público",
        t: "Dou aula ou atuo na gestão escolar",
        d: "Quer conferir como o seu município ou estado aplica a redução de idade e tempo na aposentadoria especial de magistério?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Sou professor(a) da rede pública e quero conferir minha regra de aposentadoria do magistério.",
      },
      {
        n: "06",
        Icon: Scale,
        tag: "Atraso ou Negativa no RH",
        t: "O órgão não emite a CTC ou travou meu pedido",
        d: "Está com o processo parado há meses ou teve tempo de contribuição e regras negadas pelo RH ou instituto de previdência?",
        chips: [],
        whatsappMessage:
          "Olá, Dr. Anderson! Estou com atraso na emissão de CTC ou problema no processo de aposentadoria junto ao órgão público.",
      },
    ],
    footerCtaLabel: "Simular meu cenário no WhatsApp",
  },
  process: {
    badge: "O que está incluído",
    title: "Decisão técnica antes de assinar",
    highlight: "qualquer protocolo no RH.",
    steps: [
      {
        n: "01",
        t: "Estudo de dupla aposentadoria e uso da CTC",
        d: "Analisamos seus vínculos privados e públicos lado a lado para mostrar se compensa somar tudo ou separar o tempo em dois benefícios.",
      },
      {
        n: "02",
        t: "Comparativo de integralidade e transição local",
        d: "Lemos a legislação específica do seu município, estado ou da União para calcular a data mais vantajosa e o impacto no valor final.",
      },
      {
        n: "03",
        t: "Conferência de abono de permanência e insalubridade",
        d: "Apuramos o direito ao abono mensal (e atrasados) e verificamos documentos para reconhecer períodos especiais na saúde ou magistério.",
      },
    ],
    whatsappMessage:
      "Olá, Dr. Anderson! Sou servidor público e quero solicitar meu planejamento previdenciário completo.",
    ctaLabel: "Solicitar Planejamento do Servidor",
  },
  faq: {
    badge: "Dúvidas Frequentes",
    title: "Perguntas comuns do",
    highlight: "Servidor Público.",
    items: [
      {
        q: "Posso ter duas aposentadorias: uma no órgão público e outra no INSS?",
        a: "Sim, desde que você cumpra os requisitos mínimos de idade e tempo em cada regime de forma independente, sem usar o mesmo período nos dois lugares. Por exemplo: se você tem tempo suficiente apenas no serviço público (ou usando apenas parte da sua CTC) e também completa requisitos no INSS por outra atividade ou contribuições próprias.",
      },
      {
        q: "A Certidão de Tempo de Contribuição (CTC) pode ser desfeita depois?",
        a: "Enquanto você apenas pediu a CTC no INSS e ainda não a entregou para registrar no órgão público e se aposentar, muitas vezes ainda é possível revisar ou cancelar o uso. Porém, depois que o tempo é transferido e utilizado para conceder a aposentadoria, a regra é definitiva.",
      },
      {
        q: "Quem tem direito ao Abono de Permanência e como funciona o pagamento?",
        a: "Tem direito o servidor efetivo que já completou todos os requisitos para se aposentar por uma regra voluntária, mas escolhe continuar trabalhando. Em vez de parar, ele passa a receber de volta, no contracheque mensal, o equivalente ao que paga de previdência. Quando o órgão demora a conceder, é possível cobrar os valores atrasados.",
      },
      {
        q: "A Reforma da Previdência valeu igual para todos os municípios e estados?",
        a: "Não. A Emenda Constitucional 103/2019 aplicou novas regras diretamente para servidores federais (União) e do INSS, mas estados e municípios puderam aprovar reformas próprias ou manter regras anteriores até alterarem suas leis locais. Por isso sempre analisamos o estatuto e o instituto de previdência do seu ente público.",
      },
      {
        q: "Servidores da saúde ainda conseguem contar tempo insalubre no serviço público?",
        a: "Sim. Profissionais expostos a agentes biológicos, químicos ou físicos têm direito à aposentadoria especial após 25 anos nessa atividade, e o STF reconheceu a conversão de períodos especiais trabalhados até a reforma aplicável para somar ao tempo comum quando o servidor muda de função ou busca regra geral.",
      },
    ],
  },
  finalCta: {
    badge: "Planejamento RPPS",
    title: "Vai pedir a CTC ou a aposentadoria",
    highlight: "sem comparar os dois cenários antes?",
    subtitle:
      "Converse pelo WhatsApp informando em qual órgão trabalha e quando começou. Analisamos sua situação antes de qualquer protocolo irreversível.",
    ctaLabel: "Falar com o Escritório no WhatsApp",
    whatsappMessage:
      "Olá, Dr. Anderson! Sou servidor público e quero analisar minha aposentadoria e minha CTC.",
  },
};

const extras: ServicePageBExtras = {
  transparencyFilterText:
    "Analisamos a legislação do seu município, estado ou da União, além do seu histórico completo no INSS. Se os números mostrarem que continuar na ativa com Abono de Permanência ou manter o tempo no INSS traz melhor resultado, mostramos isso abertamente no parecer.",
  deliverableIcons: [Landmark, Calculator, FileSearch],
};

export default function ServidorPublicoV2() {
  return <ServicePageTemplate config={config} extras={extras} />;
}
