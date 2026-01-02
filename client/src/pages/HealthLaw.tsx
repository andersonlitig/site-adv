import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function HealthLaw() {
  const specializedServices = [
    {
      title: "Negativas de Planos de Saúde",
      description: "Atuação técnica para reverter negativas de cirurgias, exames complexos e procedimentos de urgência."
    },
    {
      title: "Medicamentos de Alto Custo",
      description: "Obtenção de fármacos não listados no rol da ANS ou de alto valor financeiro indispensáveis ao tratamento."
    },
    {
      title: "Home Care",
      description: "Garantia judicial para internação domiciliar e suporte de enfermagem quando houver indicação médica."
    },
    {
      title: "Erro Médico e Hospitalar",
      description: "Análise de responsabilidade civil em casos de negligência, imperícia ou imprudência em atendimentos."
    },
    {
      title: "Reajustes Abusivos",
      description: "Revisão de aumentos por faixa etária ou sinistralidade que oneram excessivamente o consumidor."
    }
  ];

  return (
    <div className="min-h-screen bg-[#E8E8E8] text-[#0D0D0D] font-sans">
      <Navbar />
      
      <main className="pt-32">
        {/* Header Section */}
        <section className="bg-[#091D39] py-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#CFAE70]/5 skew-x-12 translate-x-1/4" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <Link href="/">
              <a className="inline-flex items-center gap-2 text-[#CFAE70] mb-8 hover:text-white transition-colors group uppercase text-xs font-bold tracking-widest">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar para o início
              </a>
            </Link>
            <div className="max-w-4xl">
              <span className="text-[#CFAE70] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Área de Atuação 01</span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-8 leading-none">
                Direito da Saúde
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                Defesa especializada do paciente contra abusos de planos de saúde e garantia do acesso integral ao tratamento médico.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-8 text-[#091D39]">
                  Atuação Técnica e Humanizada
                </h2>
                <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none">
                  <p className="mb-6">
                    O Direito da Saúde é uma das áreas mais sensíveis do ordenamento jurídico, pois lida diretamente com a vida e a dignidade da pessoa humana. Nossa atuação foca na proteção do paciente, garantindo que contratos e burocracias não se sobreponham à necessidade médica.
                  </p>
                  <p className="mb-12">
                    Trabalhamos de forma ágil, compreendendo que em casos de saúde, o tempo é um fator determinante. Utilizamos as melhores estratégias jurídicas e entendimentos dos tribunais superiores para assegurar direitos muitas vezes ignorados por operadoras de saúde.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 mt-12">
                  {specializedServices.map((service, idx) => (
                    <div key={idx} className="bg-white p-8 border border-gray-200 group hover:border-[#CFAE70] transition-all">
                      <CheckCircle2 className="text-[#CFAE70] mb-4" size={24} />
                      <h3 className="font-bold uppercase tracking-wider text-[#091D39] mb-3">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="sticky top-32">
                  <div className="bg-[#0D0D0D] p-10 text-white border-l-8 border-[#CFAE70]">
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 leading-tight">
                      Precisa de suporte especializado nesta área?
                    </h3>
                    <p className="text-gray-400 text-sm mb-10 leading-relaxed">
                      Nossa equipe está pronta para realizar uma análise técnica do seu caso e orientar sobre as melhores vias para garantir seu tratamento.
                    </p>
                    <div className="space-y-4">
                      <a 
                        href="https://wa.me/5527999999999" 
                        target="_blank"
                        className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all"
                      >
                        <MessageCircle size={20} /> WhatsApp
                      </a>
                      <a 
                        href="#footer" 
                        className="flex items-center justify-center gap-3 w-full bg-[#CFAE70] text-[#091D39] py-4 font-bold uppercase tracking-widest hover:bg-white transition-all"
                      >
                        Iniciar Atendimento
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-12 p-8 border border-[#091D39]/10 bg-white">
                    <h4 className="font-bold uppercase tracking-widest text-xs text-[#091D39] mb-4">Informação Relevante</h4>
                    <p className="text-gray-500 text-xs italic leading-relaxed">
                      "A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença." - Art. 196, CF/88.
                    </p>
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
