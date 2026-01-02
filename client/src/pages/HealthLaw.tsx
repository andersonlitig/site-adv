import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, FileText, ShieldAlert, HeartPulse } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function HealthLaw() {
  const specializedServices = [
    {
      title: "Negativas de Cobertura",
      description: "Orientação técnica em casos de recusa de cirurgias, exames de alta complexidade e materiais especiais por parte das operadoras."
    },
    {
      title: "Fornecimento de Medicamentos",
      description: "Esclarecimentos sobre o acesso a fármacos de alto custo, oncológicos ou não listados no rol básico, fundamentados em prescrição médica."
    },
    {
      title: "Home Care e Internação",
      description: "Explicação sobre os critérios para a concessão de assistência domiciliar integral e suporte multidisciplinar fora do ambiente hospitalar."
    },
    {
      title: "Reajustes de Mensalidade",
      description: "Análise informativa sobre a legalidade de aumentos por mudança de faixa etária (idosos) ou sinistralidade acima dos índices permitidos."
    },
    {
      title: "Responsabilidade Médica",
      description: "Análise técnica de prontuários e procedimentos em situações de suposto erro médico, hospitalar ou odontológico."
    }
  ];

  return (
    <div className="min-h-screen bg-[#E8E8E8] text-[#0D0D0D]">
      <Navbar />
      <main className="pt-32">
        <section className="bg-[#091D39] py-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#CFAE70]/5 skew-x-12 translate-x-1/4" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <Link href="/"><a className="inline-flex items-center gap-2 text-[#CFAE70] mb-8 hover:text-white transition-colors group uppercase text-xs font-bold tracking-widest"><ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar</a></Link>
            <div className="max-w-4xl">
              <span className="text-[#CFAE70] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Área de Atuação 01</span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-8 leading-none">Direito da Saúde</h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">Esclarecimentos técnicos sobre a defesa do paciente e o acesso às prestações de saúde.</p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-8 text-[#091D39]">Atuação Consultiva Especializada</h2>
                <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none">
                  <p className="mb-6">O Direito da Saúde visa assegurar que o acesso à assistência médica seja pleno, combatendo práticas que limitam o direito à vida e à dignidade. Esta área abrange desde a análise de contratos de planos de saúde até a verificação de protocolos em redes públicas e privadas.</p>
                  <p className="mb-8">Nossa atuação é estritamente técnica, focada em informar o cidadão sobre os caminhos jurídicos disponíveis para a garantia de tratamentos, medicamentos e procedimentos indispensáveis, sempre sob a luz do Código de Ética da OAB.</p>
                </div>
                
                <div className="grid sm:grid-cols-1 gap-6 mt-12">
                  {specializedServices.map((service, idx) => (
                    <div key={idx} className="bg-white p-10 border-l-4 border-[#CFAE70] shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold uppercase tracking-wider text-[#091D39] mb-4 text-xl">{service.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="sticky top-32">
                  <div className="bg-[#0D0D0D] p-10 text-white border-l-8 border-[#CFAE70]">
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6">Informações Técnicas</h3>
                    <p className="text-gray-400 text-sm mb-10 italic">O tempo é fator determinante em questões de saúde. Analisamos a viabilidade técnica da sua demanda com celeridade.</p>
                    <a href="https://wa.me/5527999999999" target="_blank" className="flex items-center justify-center gap-3 w-full bg-[#CFAE70] text-[#091D39] py-5 font-bold uppercase tracking-widest hover:bg-white transition-all"><MessageCircle size={20} /> Falar com o Advogado</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
