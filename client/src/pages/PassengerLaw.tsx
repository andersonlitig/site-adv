import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Plane, 
  Luggage, 
  Clock, 
  AlertTriangle, 
  ShieldCheck, 
  Ticket, 
  Users, 
  MessageCircle, 
  Activity, 
  ShieldAlert, 
  History, 
  Scale, 
  Briefcase,
  Search,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const serviceDetails = {
  auditory: [
    {
      title: "Contingências de Voo",
      description: "Atrasos, cancelamentos e falhas operacionais críticas.",
      icon: <Clock size={24} />,
      details: "Análise do dever de assistência material e responsabilidade por danos morais e materiais decorrentes de rupturas no cronograma."
    },
    {
      title: "Integridade de Bagagem",
      description: "Extravio, furto ou avaria de bens pessoais.",
      icon: <Luggage size={24} />,
      details: "Aplicação da responsabilidade objetiva do transportador para assegurar a reparação integral pelos danos e transtornos."
    },
    {
      title: "Abusividades no Embarque",
      description: "Overbooking, No-Show e atendimento PNAE.",
      icon: <ShieldAlert size={24} />,
      details: "Intervenção técnica em casos de preterição de embarque e descumprimento de assistência a passageiros especiais."
    }
  ],
  solutionBlocks: [
    {
      category: "Cronograma e Operação",
      icon: <Ticket size={24} />,
      items: [
        "Atrasos e Cancelamentos Injustificados",
        "Alteração Unilateral de Malha (menos de 72h)",
        "Preterição de Embarque (Overbooking)",
        "Perda de Conexão e Efeito Dominó"
      ]
    },
    {
      category: "Logística e Proteção",
      icon: <Briefcase size={24} />,
      items: [
        "Extravio de Bagagem (RIB/PIR)",
        "Avaria e Danos Físicos em Malas",
        "Furto de Itens em Bagagem Despachada",
        "Danos em Equipamentos de Valor"
      ]
    },
    {
      category: "Direitos Especiais",
      icon: <Users size={24} />,
      items: [
        "PNAE (Assistência Especial ANAC 280)",
        "Saúde e Viagens Médicas Prioritárias",
        "Combate ao No-Show Abusivo (Retorno)",
        "Multas de Reembolso Desproporcionais"
      ]
    },
    {
      category: "Fundamentação Técnica",
      icon: <Scale size={24} />,
      items: [
        "Dano Moral 'In Re Ipsa' (Presumido)",
        "Convenção de Montreal vs. CDC",
        "Resolução 400 da ANAC",
        "Auditoria de Assistência Material"
      ]
    }
  ]
};

const faqs = [
  {
    q: "Quanto tempo de atraso gera direito a indenização?",
    a: "A justiça analisa o caso, mas atrasos superiores a 4 horas ou que causem perda de conexões e compromissos costumam ser passíveis de reparação, especialmente sem assistência adequada."
  },
  {
    q: "A companhia aérea pode alegar 'mau tempo' para não indenizar?",
    a: "Condições climáticas são riscos da atividade. Embora possam justificar o atraso por segurança, não isentam a empresa do dever de prestar assistência material e reacomodar o passageiro."
  },
  {
    q: "Tive minha bagagem extraviada. O que devo fazer primeiro?",
    a: "É essencial preencher o RIB (Relatório de Irregularidade de Bagagem) ainda no aeroporto, no balcão da companhia. Esse documento é a prova principal do incidente."
  }
];

export default function PassengerLaw() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center bg-[#091D39]">
          <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#091D39] via-transparent to-[#091D39] z-10" />
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?q=80&w=2070&auto=format&fit=crop" 
              alt="Direito do Passageiro" 
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
                  <Plane size={12} /> Direito do Passageiro Aéreo
                </div>
                <h1 className="text-4xl md:text-7xl font-bold text-white font-heading uppercase tracking-tighter mb-8 leading-[0.9]">
                  Defesa Estratégica e <span className="text-[#CFAE70]">Proteção Jurídica</span> ao Passageiro
                </h1>
                <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl leading-relaxed">
                  Sua viagem é um contrato de resultado. Atuamos com rigor técnico para transformar transtornos em justiça, garantindo reparação integral por falhas operacionais e abusividades.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a 
                    href="#contact" 
                    className="bg-[#CFAE70] text-[#091D39] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all text-center"
                  >
                    Relatar Incidente de Voo
                  </a>
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="w-12 h-[1px] bg-[#CFAE70]/50" />
                    <span className="text-[10px] uppercase tracking-widest">Atuação Nacional e Internacional</span>
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
                <Activity className="text-[#091D39]" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#091D39]">Auditoria de Falhas Operacionais</span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-[#CFAE70] pl-6">
                <History className="text-[#091D39]" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#091D39]">Foco em Reparação Integral</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsibility Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-12 gap-16 items-center">
                <div className="md:col-span-4">
                  <h2 className="text-[#091D39] text-3xl font-bold font-heading uppercase tracking-tighter mb-4 border-l-4 border-[#CFAE70] pl-6">
                    A Auditoria do Contrato de Transporte
                  </h2>
                  <p className="text-[#CFAE70] font-bold text-xs uppercase tracking-widest">Obrigação de Resultado</p>
                </div>
                <div className="md:col-span-8 bg-[#F8F9FA] p-12 border-l-8 border-[#091D39]">
                  <p className="text-xl md:text-2xl text-[#091D39] font-light leading-relaxed italic">
                    "Ao adquirir uma passagem, você garante o direito de ser transportado com dignidade e pontualidade. Nossa prática realiza uma auditoria de legalidade sobre o incidente, identificando falhas na assistência material e danos morais presumidos (in re ipsa) que as empresas tentam minimizar."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars of Action */}
        <section className="py-24 bg-[#091D39] text-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="max-w-4xl mb-16">
              <h2 className="text-4xl font-bold font-heading uppercase tracking-tighter mb-6 text-[#CFAE70]">
                Pilares da Atuação Técnica Aérea
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Utilizamos as normas da ANAC, o CDC e convenções internacionais para equilibrar a relação entre passageiro e companhia.
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
              Frentes de Atuação e Especialidades
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

        {/* Educative Module */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#CFAE70]/5 rounded-full" />
                <h2 className="text-[#091D39] text-4xl font-bold font-heading uppercase tracking-tighter mb-8 relative z-10">
                  O Direito <br /> <span className="text-[#CFAE70]">Explicado</span>
                </h2>
                <div className="space-y-8 relative z-10">
                  <div className="border-l-2 border-[#CFAE70] pl-6">
                    <h4 className="font-bold text-[#091D39] uppercase tracking-tighter mb-2">Dano Moral "In Re Ipsa"</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Em muitos casos de transporte aéreo, o dano moral é presumido devido ao descaso e à falha grave, dispensando provas exaustivas do sofrimento.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#CFAE70] pl-6">
                    <h4 className="font-bold text-[#091D39] uppercase tracking-tighter mb-2">Assistência Material</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Após 4 horas de atraso, a companhia é obrigada a fornecer hospedagem (se pernoite) e transporte. O descumprimento fortalece a ação judicial.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#091D39] p-12 text-white border-l-8 border-[#CFAE70]">
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 flex items-center gap-3">
                  <Scale size={24} className="text-[#CFAE70]" /> Montreal vs. CDC
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Nossa atuação técnica define qual norma é mais vantajosa em voos internacionais, garantindo a maior proteção possível ao passageiro e evitando a prescrição de direitos.
                </p>
                <a 
                  href="https://wa.me/5527999999999" 
                  className="inline-flex items-center gap-3 text-[#CFAE70] font-bold uppercase tracking-widest text-xs border-b border-[#CFAE70] pb-2 hover:text-white hover:border-white transition-all"
                >
                  Analisar meu Caso de Voo <ArrowRight size={16} />
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
                  Fundamentação Técnica
                </h2>
                <div className="grid lg:grid-cols-2 gap-16">
                  <div>
                    <h4 className="text-[#CFAE70] font-bold text-xs uppercase tracking-widest mb-4">Resolução 400 da ANAC</h4>
                    <p className="text-gray-600 text-lg leading-relaxed italic">
                      "A norma estabelece condições gerais de transporte. O descumprimento dos deveres de informação e assistência gera responsabilidade objetiva da transportadora."
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#CFAE70] font-bold text-xs uppercase tracking-widest mb-4">Integridade de Bagagem</h4>
                    <p className="text-gray-600 text-lg leading-relaxed italic">
                      "O transportador responde pelos danos a bagagem despachada, desde o recebimento até a entrega ao passageiro. O RIB/PIR é a prova essencial do vício no serviço."
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
              Seu transtorno de viagem <br /> <span className="text-[#CFAE70]">merece reparação integral</span>
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
