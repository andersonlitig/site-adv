import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Stethoscope, 
  ShieldCheck, 
  Clock, 
  HeartPulse, 
  Activity, 
  Microscope,
  Brain,
  Scale,
  MessageCircle,
  AlertCircle,
  Syringe,
  Home as HomeIcon,
  Calculator,
  UserCheck,
  FileCheck,
  ShieldAlert,
  HardHat,
  Briefcase,
  History,
  TrendingUp,
  FileSearch,
  Users
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const serviceDetails = {
  planning: [
    {
      title: "Planejamento de Inativação",
      description: "Mapeamento de regras de transição (Pedágios, Pontos, Idade Progressiva).",
      icon: <Clock size={24} />,
      details: "Análise antecipada para evitar o descarte de contribuições valiosas e definir o momento exato da aposentadoria."
    },
    {
      title: "Engenharia de Cálculos",
      description: "Projeção de cenários e simulações de Renda Mensal Inicial (RMI).",
      icon: <Calculator size={24} />,
      details: "Conferência do CNIS, correção de indicadores e cálculos avançados para maximizar o valor do benefício."
    },
    {
      title: "Regimes Próprios (RPPS)",
      description: "Atuação focada em servidores públicos e análise de paridade.",
      icon: <Briefcase size={24} />,
      details: "Análise de integralidade, averbação de tempo de serviço e transição entre regimes (CTC)."
    }
  ],
  solutionBlocks: [
    {
      category: "Assistencial e Neurodiversidade",
      icon: <Users size={24} />,
      items: [
        "BPC/LOAS para Autismo (TEA) e Visão Monocular",
        "Estratégias para Pensão por Morte derivada de BPC",
        "Auxílio-Reclusão em casos de Renda Zero"
      ]
    },
    {
      category: "Incapacidade e Acidentes",
      icon: <ShieldAlert size={24} />,
      items: [
        "Auxílio-Doença e Aposentadoria por Invalidez",
        "Auxílio-Acidente e indenizações pós-AIT",
        "Revisão de Invalidez Pré-Reforma (EC 103/19)"
      ]
    },
    {
      category: "Aposentadorias e Tempo Rural",
      icon: <TrendingUp size={24} />,
      items: [
        "Aposentadoria Rural e Modalidade Híbrida",
        "Averbação de Tempo Rural Remoto (pré-1991)",
        "Contagem de períodos intercalados de auxílio-doença"
      ]
    },
    {
      category: "Revisões e Teses Jurídicas",
      icon: <FileSearch size={24} />,
      items: [
        "Revisão por Atividades Concomitantes (médicos/professores)",
        "Inclusão de Tempo Militar e Aluno-Aprendiz",
        "Repetição de Indébito (contribuições acima do teto)"
      ]
    }
  ]
};

const faqs = [
  {
    q: "O simulador do 'Meu INSS' é totalmente confiável?",
    a: "Nem sempre. O sistema automatizado frequentemente ignora períodos de atividade especial, tempo rural ou sentenças trabalhistas, o que pode resultar em um valor de benefício muito abaixo do real."
  },
  {
    q: "Corro risco de ter meu benefício reduzido ao pedir uma revisão?",
    a: "Qualquer pedido exige cautela. Realizamos um cálculo prévio de viabilidade para garantir que o pedido só avance se houver real vantagem financeira."
  },
  {
    q: "Posso somar o tempo de trabalho na roça com o tempo da cidade?",
    a: "Sim. Chamamos isso de Aposentadoria Híbrida. É possível utilizar o tempo rural para completar a carência ou aumentar o tempo total de contribuição."
  }
];

export default function SocialSecurityLaw() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center bg-[#091D39]">
          <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#091D39] via-transparent to-[#091D39] z-10" />
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
              alt="Direito Previdenciário" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 md:px-12 relative z-20 pt-32 pb-20">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#CFAE70]/10 border border-[#CFAE70]/20 text-[#CFAE70] text-[10px] font-bold uppercase tracking-widest mb-6">
                  <History size={12} /> Direito Previdenciário
                </div>
                <h1 className="text-4xl md:text-7xl font-bold text-white font-heading uppercase tracking-tighter mb-8 leading-[0.9]">
                  Gestão Estratégica do <span className="text-[#CFAE70]">Direito Previdenciário</span>
                </h1>
                <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl leading-relaxed">
                  Muito além de um requerimento administrativo. Utilizamos análise de dados e inteligência jurídica para identificar a regra de transição mais vantajosa e maximizar o seu futuro.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a 
                    href="#contact" 
                    className="bg-[#CFAE70] text-[#091D39] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all text-center"
                  >
                    Falar com o Advogado
                  </a>
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="w-12 h-[1px] bg-[#CFAE70]/50" />
                    <span className="text-[10px] uppercase tracking-widest">Pós-graduado em Previdenciário</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Briefing Bar */}
        <div className="bg-[#E8E8E8] border-y border-gray-200">
          <div className="container mx-auto px-4 md:px-12 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 border-l-2 border-[#CFAE70] pl-6">
                <ShieldCheck className="text-[#091D39]" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#091D39]">Atuação com Transparência e Ética</span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-[#CFAE70] pl-6">
                <Calculator className="text-[#091D39]" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#091D39]">Foco em Cálculos Complexos</span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-[#CFAE70] pl-6">
                <FileCheck className="text-[#091D39]" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#091D39]">Análise Documental Rigorosa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Manifesto Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-12 gap-16 items-center">
                <div className="md:col-span-4">
                  <h2 className="text-[#091D39] text-3xl font-bold font-heading uppercase tracking-tighter mb-4 border-l-4 border-[#CFAE70] pl-6">
                    A Previdência como Ativo Estratégico
                  </h2>
                  <p className="text-[#CFAE70] font-bold text-xs uppercase tracking-widest">Proteção do Histórico</p>
                </div>
                <div className="md:col-span-8 bg-[#F8F9FA] p-12 border-l-8 border-[#091D39]">
                  <p className="text-xl md:text-2xl text-[#091D39] font-light leading-relaxed italic">
                    "O cenário pós-Reforma exige uma visão técnica minuciosa. O erro em um simples pedido pode custar centenas de milhares de reais ao longo da vida. Tratamos o seu histórico contributivo como um ativo que demanda proteção, estratégia e precisão matemática."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars of Management */}
        <section className="py-24 bg-[#091D39] text-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="max-w-4xl mb-16">
              <h2 className="text-4xl font-bold font-heading uppercase tracking-tighter mb-6 text-[#CFAE70]">
                Gestão Previdenciária de Alta Performance
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Utilizamos ferramentas de ponta para projeção de cenários, garantindo que você não receba um centavo a menos do que tem direito perante o ordenamento jurídico.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-1px bg-white/10 border border-white/10">
              {serviceDetails.planning.map((item, index) => (
                <div key={index} className="bg-[#091D39] p-10 hover:bg-white group transition-all duration-500">
                  <div className="text-[#CFAE70] mb-6 group-hover:text-[#091D39] transition-colors">{item.icon}</div>
                  <h3 className="text-xl font-bold uppercase tracking-tighter mb-4 group-hover:text-[#091D39] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-600 transition-colors italic">
                    {item.description}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed group-hover:text-[#091D39] transition-colors">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grid of Solutions */}
        <section className="py-24 bg-[#E8E8E8]">
          <div className="container mx-auto px-4 md:px-12">
            <h2 className="text-[#091D39] text-4xl font-bold font-heading uppercase tracking-tighter mb-16 border-l-4 border-[#CFAE70] pl-6 text-center md:text-left">
              Frentes de Atuação e Soluções
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {serviceDetails.solutionBlocks.map((block, index) => (
                <div key={index} className="bg-white p-10 border-t-8 border-[#091D39] shadow-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-[#CFAE70]">{block.icon}</div>
                    <h3 className="text-xl font-bold uppercase tracking-tighter text-[#091D39]">
                      {block.category}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#CFAE70] rounded-full mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Educative Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#CFAE70]/5 rounded-full" />
                <h2 className="text-[#091D39] text-4xl font-bold font-heading uppercase tracking-tighter mb-8 relative z-10">
                  Por que investir em <br /> <span className="text-[#CFAE70]">Planejamento?</span>
                </h2>
                <div className="space-y-8 relative z-10">
                  <div className="border-l-2 border-[#CFAE70] pl-6">
                    <h4 className="font-bold text-[#091D39] uppercase tracking-tighter mb-2">O Erro do "Automático"</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      O simulador do INSS ignora períodos especiais, tempo rural e sentenças trabalhistas. O planejamento identifica essas falhas.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#CFAE70] pl-6">
                    <h4 className="font-bold text-[#091D39] uppercase tracking-tighter mb-2">A Escolha da Regra</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Entre várias regras de transição, a diferença no valor mensal pode ultrapassar 40%.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#091D39] p-12 text-white border-l-8 border-[#CFAE70]">
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 flex items-center gap-3">
                  <Calculator size={24} className="text-[#CFAE70]" /> Ciência dos Dados
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Através da análise do CNIS e de documentos comprobatórios, projetamos o Valor da Causa e a Renda Mensal Inicial ($RMI$), definindo o momento exato da inativação para evitar perdas financeiras irreversíveis.
                </p>
                <a 
                  href="https://wa.me/5527999999999" 
                  className="inline-flex items-center gap-3 text-[#CFAE70] font-bold uppercase tracking-widest text-xs border-b border-[#CFAE70] pb-2 hover:text-white hover:border-white transition-all"
                >
                  Solicitar Análise de Histórico <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Direito Explicado Section */}
        <section className="py-24 bg-[#091D39]">
          <div className="container mx-auto px-4 md:px-12">
            <div className="bg-white p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#CFAE70]" />
              <div className="relative z-10">
                <h2 className="text-[#091D39] text-3xl font-bold font-heading uppercase tracking-tighter mb-12">
                  Direito Explicado
                </h2>
                <div className="grid lg:grid-cols-2 gap-16">
                  <div>
                    <h4 className="text-[#CFAE70] font-bold text-xs uppercase tracking-widest mb-4">A Ciência do Planejamento</h4>
                    <p className="text-gray-600 text-lg leading-relaxed italic">
                      "O Planejamento Previdenciário não é um custo, mas um investimento técnico-jurídico para identificar lacunas e inconsistências de vínculos (Acerto de CNIS) antes que elas se tornem prejuízos permanentes."
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#CFAE70] font-bold text-xs uppercase tracking-widest mb-4">Dever de Informar</h4>
                    <p className="text-gray-600 text-lg leading-relaxed italic">
                      "Nossa atuação é pautada pelo dever de informar e pela busca do melhor benefício disponível no ordenamento jurídico, com transparência absoluta sobre as chances de êxito."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-[#F8F9FA]">
          <div className="container mx-auto px-4 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-[#091D39] text-3xl font-bold font-heading uppercase tracking-tighter mb-12 text-center">Perguntas frequentes (FAQ)</h3>
              <div className="grid gap-6">
                {faqs.map((item, i) => (
                  <div key={i} className="bg-white p-8 border border-gray-100 shadow-sm">
                    <h5 className="text-[#091D39] font-bold text-sm mb-4 uppercase tracking-tight flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#CFAE70] rounded-full" />
                      {item.q}
                    </h5>
                    <p className="text-gray-500 text-sm leading-relaxed pl-4.5 border-l border-gray-100">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-4 md:px-12">
            <h2 className="text-[#091D39] text-4xl md:text-5xl font-bold font-heading uppercase tracking-tighter mb-8">
              O seu futuro merece <br /> <span className="text-[#CFAE70]">uma estratégia sólida</span>
            </h2>
            <a 
              href="https://wa.me/5527999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#091D39] text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-[#CFAE70] hover:text-[#091D39] transition-all"
            >
              <MessageCircle size={20} /> Falar com o Advogado
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
