import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Car, 
  AlertTriangle, 
  ShieldCheck, 
  Clock, 
  Scale, 
  MessageCircle, 
  ShieldAlert, 
  HardHat, 
  Search, 
  FileWarning, 
  Gauge, 
  ClipboardCheck,
  Zap,
  CheckCircle2,
  Lock,
  History
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const serviceDetails = {
  auditory: [
    {
      title: "Lei Seca (Arts. 165 e 165-A)",
      description: "Defesa técnica em casos de autuação por bafômetro ou recusa.",
      icon: <AlertTriangle size={24} />,
      details: "Análise da conformidade do etilômetro (Inmetro) e dos sinais de alteração da capacidade psicomotora."
    },
    {
      title: "Suspensão e Cassação",
      description: "Preservação do direito de dirigir por pontos ou infrações mandatórias.",
      icon: <Scale size={24} />,
      details: "Estratégias para evitar o bloqueio da CNH e garantir o exercício do devido processo legal."
    },
    {
      title: "Motoristas Profissionais",
      description: "Defesa estratégica para condutores de App e Carga (EAR).",
      icon: <HardHat size={24} />,
      details: "Proteção da ferramenta de trabalho com foco na celeridade e teses específicas para o setor de transportes."
    }
  ],
  solutionBlocks: [
    {
      category: "Processos de Habilitação",
      icon: <ShieldCheck size={24} />,
      items: [
        "Defesa contra Suspensão por Excesso de Pontuação",
        "Defesa contra Cassação (Condução em Período de Suspensão)",
        "Recursos Administrativos para JARI, CETRAN e CONTRADIFE"
      ]
    },
    {
      category: "Infrações de Gravidade Máxima",
      icon: <ShieldAlert size={24} />,
      items: [
        "Recusa ao Teste do Bafômetro (Teses de Nulidade)",
        "Excesso de Velocidade (Questionamento de Radares)",
        "Defesa contra Manobras Perigosas e Disputa de Corrida"
      ]
    },
    {
      category: "Nulidades e Regularidade",
      icon: <ClipboardCheck size={24} />,
      items: [
        "Identificação de Vícios Formais no Auto de Infração (AIT)",
        "Aplicação da Súmula 312 do STJ (Dupla Notificação)",
        "Transferência de Pontuação (Indicação de Condutor)"
      ]
    },
    {
      category: "Auditoria de Equipamentos",
      icon: <Gauge size={24} />,
      items: [
        "Verificação de Aferição do INMETRO (Radares e Etilômetros)",
        "Análise de Sinalização Obrigatória e Visibilidade",
        "Controle de Prazos de Notificação (30 dias)"
      ]
    }
  ]
};

const faqs = [
  {
    q: "Posso continuar dirigindo enquanto o recurso está em andamento?",
    a: "Sim. Enquanto houver recurso administrativo pendente de julgamento, a penalidade não pode ser aplicada e o condutor mantém o direito de dirigir normalmente."
  },
  {
    q: "Vale a pena recorrer de multas de Lei Seca?",
    a: "Sim. Devido à gravidade (12 meses de suspensão), os órgãos devem seguir formalidades extremas. Qualquer erro no procedimento ou equipamento pode anular a multa."
  },
  {
    q: "O escritório atende condutores de outros estados?",
    a: "Sim. Os processos de trânsito são administrativos e digitais na maioria dos órgãos (Detrans e PRF), permitindo atuação em todo o Brasil."
  }
];

export default function TrafficLaw() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center bg-[#091D39]">
          <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#091D39] via-transparent to-[#091D39] z-10" />
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
              alt="Direito de Trânsito" 
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
                  <Car size={12} /> Direito de Trânsito
                </div>
                <h1 className="text-4xl md:text-7xl font-bold text-white font-heading uppercase tracking-tighter mb-8 leading-[0.9]">
                  Defesa Estratégica e <span className="text-[#CFAE70]">Controle de Legalidade</span> no Trânsito
                </h1>
                <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl leading-relaxed">
                  Sua CNH é o instrumento da sua liberdade e trabalho. Atuamos na auditoria rigorosa de autos de infração e processos de suspensão, garantindo que o devido processo legal seja respeitado.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a 
                    href="#contact" 
                    className="bg-[#CFAE70] text-[#091D39] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all text-center"
                  >
                    Análise Técnica da Notificação
                  </a>
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="w-12 h-[1px] bg-[#CFAE70]/50" />
                    <span className="text-[10px] uppercase tracking-widest">Atendimento Nacional Digital</span>
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
                <Zap className="text-[#091D39]" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#091D39]">Auditoria de Atos Administrativos</span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-[#CFAE70] pl-6">
                <Lock className="text-[#091D39]" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#091D39]">Preservação do Direito de Dirigir</span>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-12 gap-16 items-center">
                <div className="md:col-span-4">
                  <h2 className="text-[#091D39] text-3xl font-bold font-heading uppercase tracking-tighter mb-4 border-l-4 border-[#CFAE70] pl-6">
                    A Auditoria do Ato Administrativo
                  </h2>
                  <p className="text-[#CFAE70] font-bold text-xs uppercase tracking-widest">Controle de Legalidade</p>
                </div>
                <div className="md:col-span-8 bg-[#F8F9FA] p-12 border-l-8 border-[#091D39]">
                  <p className="text-xl md:text-2xl text-[#091D39] font-light leading-relaxed italic">
                    "No Direito de Trânsito, a validade de uma penalidade depende da perfeição do ato administrativo. Muitas autuações ignoram requisitos formais obrigatórios. Realizamos uma auditoria completa para identificar vícios de legalidade que tornam a multa nula."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars of Defense */}
        <section className="py-24 bg-[#091D39] text-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="max-w-4xl mb-16">
              <h2 className="text-4xl font-bold font-heading uppercase tracking-tighter mb-6 text-[#CFAE70]">
                Pilares da Defesa Técnica de Condutores
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Atuação pautada na identificação de falhas processuais e desrespeito às normas do CTB e Resoluções do CONTRAN.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-1px bg-white/10 border border-white/10">
              {serviceDetails.auditory.map((item, index) => (
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
              Frentes de Atuação Técnica
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceDetails.solutionBlocks.map((block, index) => (
                <div key={index} className="bg-white p-8 border-t-4 border-[#091D39] shadow-sm flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-[#CFAE70]">{block.icon}</div>
                    <h3 className="text-sm font-bold uppercase tracking-tighter text-[#091D39]">
                      {block.category}
                    </h3>
                  </div>
                  <ul className="space-y-4 flex-grow">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start text-xs text-gray-600 leading-relaxed">
                        <div className="w-1 h-1 bg-[#CFAE70] rounded-full mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Informative Module */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#CFAE70]/5 rounded-full" />
                <h2 className="text-[#091D39] text-4xl font-bold font-heading uppercase tracking-tighter mb-8 relative z-10">
                  O que observar em <br /> <span className="text-[#CFAE70]">uma autuação?</span>
                </h2>
                <div className="space-y-8 relative z-10">
                  <div className="border-l-2 border-[#CFAE70] pl-6">
                    <h4 className="font-bold text-[#091D39] uppercase tracking-tighter mb-2">O Prazo de 30 Dias</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Se a notificação da autuação não for expedida em no máximo 30 dias, o auto de infração deve ser arquivado por insubsistência.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#CFAE70] pl-6">
                    <h4 className="font-bold text-[#091D39] uppercase tracking-tighter mb-2">Aferição Técnica</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Equipamentos de medição (radares/etilômetros) devem ser verificados anualmente pelo INMETRO. Sem isso, a multa é nula.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#091D39] p-12 text-white border-l-8 border-[#CFAE70]">
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 flex items-center gap-3">
                  <Scale size={24} className="text-[#CFAE70]" /> Ampla Defesa
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Nenhuma penalidade pode ser aplicada sem o direito ao contraditório. O efeito suspensivo garante que você continue dirigindo enquanto o recurso é julgado.
                </p>
                <div className="p-6 bg-white/5 border border-white/10 text-xs text-gray-300 italic">
                  "Atuação estratégica com foco em defesas perante o DETRAN/ES e órgãos municipais de trânsito da Grande Vitória, além de atuação nacional perante PRF e DNIT."
                </div>
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
                    <h4 className="text-[#CFAE70] font-bold text-xs uppercase tracking-widest mb-4">A Súmula 312 do STJ</h4>
                    <p className="text-gray-600 text-lg leading-relaxed italic">
                      "No processo administrativo para imposição de multa de trânsito, são necessárias as notificações da autuação e da aplicação da pena. A ausência de qualquer uma delas gera a nulidade do processo."
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#CFAE70] font-bold text-xs uppercase tracking-widest mb-4">O Ato Administrativo Vinculado</h4>
                    <p className="text-gray-600 text-lg leading-relaxed italic">
                      "A aplicação da multa não é uma escolha, mas um ato que deve seguir a lei à risca. Se o agente comete um erro de preenchimento ou formalidade, o Estado perde o direito de punir."
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
              Sua liberdade de dirigir <br /> <span className="text-[#CFAE70]">é o nosso compromisso</span>
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
