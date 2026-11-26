import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  MessageCircle, 
  Briefcase, 
  Scale, 
  Clock, 
  AlertTriangle, 
  FileText, 
  UserMinus, 
  ShieldAlert, 
  Hammer, 
  ChevronRight,
  ShieldCheck,
  Activity,
  History,
  TrendingUp,
  Gavel,
  UserCheck
} from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const serviceDetails = {
  auditory: [
    {
      title: "Recuperação de Verbas",
      description: "Análise técnica de rescisões e FGTS.",
      icon: <TrendingUp size={24} />,
      details: "Auditoria completa de cálculos rescisórios, multas e depósitos fundiários para garantir o recebimento integral do que é devido."
    },
    {
      title: "Reconhecimento de Vínculo",
      description: "Combate à pejotização e informalidade.",
      icon: <UserCheck size={24} />,
      details: "Ação estratégica para reconhecimento de relação de emprego em casos de prestação de serviço como PJ ou sem registro em CTPS."
    },
    {
      title: "Rescisão Indireta",
      description: "A 'justa causa' aplicada ao empregador.",
      icon: <Hammer size={24} />,
      details: "Atuação jurídica para encerramento do contrato por falta grave da empresa, garantindo todas as indenizações ao trabalhador."
    }
  ],
  solutionBlocks: [
    {
      category: "Direitos e Salários",
      icon: <Clock size={24} />,
      items: [
        "Horas Extras e Intervalos Suprimidos",
        "Adicionais de Insalubridade e Periculosidade",
        "Equiparação Salarial e Desvio de Função",
        "Diferenças de Comissões e Prêmios"
      ]
    },
    {
      category: "Danos e Assédio",
      icon: <ShieldAlert size={24} />,
      items: [
        "Danos Morais por Assédio Moral/Sexual",
        "Indenização por Acidente de Trabalho",
        "Doenças Ocupacionais (Burnout, LER/DORT)",
        "Assédio Eleitoral e Discriminação"
      ]
    },
    {
      category: "Rescisão e Vínculo",
      icon: <UserMinus size={24} />,
      items: [
        "Reversão de Justa Causa Indevida",
        "Reconhecimento de Vínculo de Emprego",
        "Fraudes na Contratação PJ (Pejotização)",
        "Estabilidade Gestante e Acidentária"
      ]
    },
    {
      category: "Categorias Especiais",
      icon: <Briefcase size={24} />,
      items: [
        "Direitos dos Bancários (7ª e 8ª hora)",
        "Trabalhadores em Teletrabalho (Home Office)",
        "Cargos de Confiança e Gerência",
        "Representantes Comerciais e Vendedores"
      ]
    }
  ]
};

const faqs = [
  {
    q: "Fui demitido e não recebi nada. O que devo fazer?",
    a: "A empresa tem o prazo de 10 dias corridos para pagar as verbas rescisórias. Se não cumprir, você tem direito a uma multa no valor de um salário, além de poder ingressar com ação para cobrança imediata."
  },
  {
    q: "Posso pedir demissão e receber todos os direitos?",
    a: "Através da Rescisão Indireta, se a empresa estiver cometendo faltas graves (como atraso de salário ou FGTS), você pode sair recebendo as mesmas verbas de uma demissão sem justa causa."
  },
  {
    q: "Trabalho como PJ mas tenho horário e chefe. Tenho direitos?",
    a: "Sim. Se houver pessoalidade, subordinação, onerosidade e habitualidade, a 'pejotização' é considerada fraude e você pode pedir o reconhecimento do vínculo com todos os direitos retroativos."
  }
];

export default function LaborLaw() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center bg-[#091D39]">
          <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#091D39] via-transparent to-[#091D39] z-10" />
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop" 
              alt="Direito do Trabalho" 
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
                  <Briefcase size={12} /> Justiça e Equilíbrio Social
                </div>
                <h1 className="text-4xl md:text-7xl font-bold text-white font-heading uppercase tracking-tighter mb-8 leading-[0.9]">
                  Justiça e Equilíbrio: <br /> <span className="text-[#CFAE70]">Defesa Técnica do Trabalhador</span>
                </h1>
                <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl leading-relaxed">
                  Atuação estratégica na recuperação de verbas rescisórias e reparação por abusos no ambiente laboral. Garantimos que sua dignidade profissional seja respeitada conforme a CLT.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a 
                    href="https://wa.me/5527992942888" 
                    className="bg-[#CFAE70] text-[#091D39] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all text-center"
                  >
                    Solicitar Análise de Direitos
                  </a>
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="w-12 h-[1px] bg-[#CFAE70]/50" />
                    <span className="text-[10px] uppercase tracking-widest">Proteção do Histórico Profissional</span>
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
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#091D39]">Rigor Técnico na Prova</span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-[#CFAE70] pl-6">
                <Activity className="text-[#091D39]" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#091D39]">Auditoria de Verbas Devidas</span>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-[#CFAE70] pl-6">
                <History className="text-[#091D39]" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#091D39]">Foco em Reparação Integral</span>
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
                    A Defesa Técnica do Empregado
                  </h2>
                  <p className="text-[#CFAE70] font-bold text-xs uppercase tracking-widest">Equilíbrio Processual</p>
                </div>
                <div className="md:col-span-8 bg-[#F8F9FA] p-12 border-l-8 border-[#091D39]">
                  <p className="text-xl md:text-2xl text-[#091D39] font-light leading-relaxed italic">
                    "O trabalho é a base da dignidade humana. Nossa prática não se limita a pedir verbas, mas a realizar uma auditoria rigorosa de legalidade sobre toda a contratualidade, assegurando que o poder econômico do empregador não se sobreponha aos direitos fundamentais do trabalhador."
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
                Frentes de Atuação Estratégica
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Utilizamos a CLT e a jurisprudência atualizada do TST para garantir o equilíbrio nas relações de trabalho.
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
              Especialidades em Direito do Trabalho
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
              <h3 className="text-[#091D39] text-3xl font-bold font-heading uppercase tracking-tighter mb-12 text-center">Perguntas Frequentes</h3>
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
              Cansou de ter seus <br /> <span className="text-[#CFAE70]">direitos sonegados?</span>
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Nossa equipe técnica realiza uma análise minuciosa do seu caso para identificar verbas não pagas e abusividades contratuais. Proteja seu futuro profissional.
            </p>
            <a 
              href="https://wa.me/5527992942888" 
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
