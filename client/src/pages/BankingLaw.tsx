import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Landmark, 
  ShieldAlert, 
  Scale, 
  ShieldCheck, 
  Activity, 
  History, 
  MessageCircle, 
  FileSearch, 
  Ban, 
  AlertTriangle,
  CreditCard,
  TrendingDown,
  Lock,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const serviceDetails = {
  auditory: [
    {
      title: "Auditoria de Juros",
      description: "Identificação técnica de taxas acima da média do BACEN.",
      icon: <TrendingDown size={24} />,
      details: "Análise profunda de contratos de financiamento, cartões e cheque especial para reversão de capitalização indevida."
    },
    {
      title: "Fraudes e Golpes",
      description: "Recuperação de valores e responsabilidade bancária.",
      icon: <ShieldAlert size={24} />,
      details: "Atuação em casos de PIX fraudulento, clonagem de cartões e empréstimos não contratados via engenharia social."
    },
    {
      title: "Superendividamento",
      description: "Proteção do Mínimo Existencial.",
      icon: <Lock size={24} />,
      details: "Aplicação da Lei 14.181/21 para repactuação de dívidas e preservação da dignidade financeira do consumidor."
    }
  ],
  solutionBlocks: [
    {
      category: "Revisional e Contratos",
      icon: <Scale size={24} />,
      items: [
        "Ação Revisional de Juros Abusivos",
        "Suspensão de Busca e Apreensão",
        "Revisão de Financiamento Imobiliário",
        "Análise de Venda Casada de Seguros"
      ]
    },
    {
      category: "Fraudes Bancárias",
      icon: <Ban size={24} />,
      items: [
        "Golpe do PIX e Engenharia Social",
        "Empréstimo Consignado não Solicitado",
        "Saques Indevidos em Conta Corrente",
        "Clonagem e Fraudes em Cartão"
      ]
    },
    {
      category: "Dívidas e Crédito",
      icon: <Landmark size={24} />,
      items: [
        "Defesa contra Cobranças Vexatórias",
        "Limitação de 30% em Consignados",
        "Exclusão de Negativação Indevida",
        "Prorrogação de Dívidas Rurais"
      ]
    },
    {
      category: "Proteção Patrimonial",
      icon: <ShieldCheck size={24} />,
      items: [
        "Blindagem contra Penhora de Salário",
        "Defesa de Bens de Família",
        "Auditoria de Cédulas de Crédito",
        "Consultoria em Reestruturação"
      ]
    }
  ]
};

const faqs = [
  {
    q: "O que caracteriza juros abusivos em um contrato?",
    a: "Juros abusivos são aqueles que superam significativamente a taxa média de mercado divulgada pelo Banco Central para o mesmo tipo de operação na época da contratação."
  },
  {
    q: "Fui vítima de um golpe no PIX. O banco tem responsabilidade?",
    a: "Sim. O entendimento jurídico atual é de que o banco responde objetivamente por falhas na segurança do sistema que permitiram a transação fraudulenta, conforme a Súmula 479 do STJ."
  },
  {
    q: "O banco pode descontar mais de 30% do meu salário?",
    a: "Não. A legislação e a jurisprudência limitam descontos de empréstimos consignados e dívidas bancárias a 30% da renda líquida, visando preservar o mínimo existencial do devedor."
  }
];

export default function BankingLaw() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center bg-[#091D39]">
          <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#091D39] via-transparent to-[#091D39] z-10" />
            <img 
              src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070&auto=format&fit=crop" 
              alt="Direito Bancário" 
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
                  <Landmark size={12} /> Direito Bancário e Financeiro
                </div>
                <h1 className="text-4xl md:text-7xl font-bold text-white font-heading uppercase tracking-tighter mb-8 leading-[0.9]">
                  Defesa Estratégica contra <br /> <span className="text-[#CFAE70]">Fraudes e Juros Abusivos</span>
                </h1>
                <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl leading-relaxed">
                  Proteção patrimonial e auditoria contratual rigorosa. Atuamos na reversão de golpes financeiros e no combate às práticas abusivas das instituições bancárias.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a 
                    href="https://wa.me/5527992942888" 
                    className="bg-[#CFAE70] text-[#091D39] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all text-center"
                  >
                    Solicitar Auditoria Contratual
                  </a>
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="w-12 h-[1px] bg-[#CFAE70]/50" />
                    <span className="text-[10px] uppercase tracking-widest">Recuperação de Ativos e Dignidade Financeira</span>
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
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#091D39]">Combate ao Abuso Bancário</span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-[#CFAE70] pl-6">
                <Activity className="text-[#091D39]" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#091D39]">Análise Técnica de Contratos</span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-[#CFAE70] pl-6">
                <History className="text-[#091D39]" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#091D39]">Recuperação de Valores Fraude</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scientific Defense Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-12 gap-16 items-center">
                <div className="md:col-span-4">
                  <h2 className="text-[#091D39] text-3xl font-bold font-heading uppercase tracking-tighter mb-4 border-l-4 border-[#CFAE70] pl-6">
                    A Ciência da Defesa Bancária
                  </h2>
                  <p className="text-[#CFAE70] font-bold text-xs uppercase tracking-widest">Auditoria e Estratégia</p>
                </div>
                <div className="md:col-span-8 bg-[#F8F9FA] p-12 border-l-8 border-[#091D39]">
                  <p className="text-xl md:text-2xl text-[#091D39] font-light leading-relaxed italic">
                    "No cenário financeiro atual, o consumidor enfrenta instituições com poder desproporcional. Nossa prática realiza uma auditoria rigorosa de legalidade, utilizando precedentes dos tribunais superiores para anular tarifas indevidas e responsabilizar bancos por falhas graves de segurança."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Superendividamento / Dignity Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="relative z-10 border-[20px] border-[#F8F9FA] p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022&auto=format&fit=crop" 
                    alt="Direito Bancário e Superendividamento" 
                    className="w-full aspect-[4/5] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#CFAE70]/10 -z-10 animate-pulse" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-6 -left-6 bg-[#091D39] text-white p-8 shadow-2xl z-20 hidden md:block border-l-4 border-[#CFAE70]">
                  <Lock className="text-[#CFAE70] mb-4" size={32} />
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#CFAE70] mb-2">Lei 14.181/2021</p>
                  <h4 className="text-xl font-bold uppercase tracking-tighter leading-none">Proteção ao <br />Consumidor</h4>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#091D39]/5 border border-[#091D39]/10 text-[#091D39] text-[10px] font-bold uppercase tracking-widest mb-6">
                  <ShieldCheck size={12} /> Defesa do Patrimônio Familiar
                </div>
                <h2 className="text-[#091D39] text-5xl md:text-6xl font-bold font-heading uppercase tracking-tighter mb-8 leading-[0.9]">
                  Recuperação da <br /><span className="text-[#CFAE70]">Dignidade Financeira</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                  A Lei do Superendividamento é o instrumento jurídico definitivo para reorganizar seu patrimônio, garantir o mínimo existencial e cessar definitivamente o ciclo de juros abusivos que asfixia sua economia.
                </p>

                <div className="grid gap-6 mb-10">
                  {[
                    { title: "Mínimo Existencial", desc: "Preservação da renda necessária para a sobrevivência digna do cidadão." },
                    { title: "Repactuação em Bloco", desc: "Plano de pagamento unificado com todos os credores sob supervisão judicial." },
                    { title: "Cessação de Juros", desc: "Interrupção imediata de encargos abusivos e multas moratórias desproporcionais." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-[#F8F9FA] border-l-4 border-[#091D39] group hover:bg-[#091D39] transition-all duration-500">
                      <div className="text-[#CFAE70] shrink-0 group-hover:scale-110 transition-transform">
                        <ChevronRight size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#091D39] uppercase tracking-tight text-sm mb-1 group-hover:text-white transition-colors">{item.title}</h4>
                        <p className="text-gray-500 text-xs group-hover:text-gray-300 transition-colors">{item.desc}</p>
                      </div>
                    </div>
                  ))}
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
                Frentes Técnicas de Atuação
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Combinamos análise contábil e rigor jurídico para enfrentar as maiores instituições financeiras do país.
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
              Especialidades em Defesa Bancária
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

        {/* FAQ Section */}
        <section className="py-24 bg-[#F8F9FA]">
          <div className="container mx-auto px-4 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-[#091D39] text-3xl font-bold font-heading uppercase tracking-tighter mb-12 text-center">Dúvidas Técnicas</h3>
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
              Acredita que seu contrato <br /> <span className="text-[#CFAE70]">possui irregularidades?</span>
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Nossa equipe realiza auditorias preliminares para identificar juros abusivos e falhas de segurança. Proteja seu patrimônio com suporte técnico rigoroso.
            </p>
            <a 
              href="https://wa.me/5527992942888" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#091D39] text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-[#CFAE70] hover:text-[#091D39] transition-all"
            >
              <MessageCircle size={20} /> Solicitar Análise de Contrato
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
