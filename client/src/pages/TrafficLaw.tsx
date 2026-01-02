import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, Car, AlertTriangle, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TrafficLaw() {
  const specializedServices = [
    { title: "Suspensão e Cassação da CNH", description: "Defesa técnica focada na preservação do direito de dirigir, analisando vícios formais nos processos administrativos do DETRAN." },
    { title: "Infrações de Lei Seca (Art. 165)", description: "Orientação especializada sobre a legalidade dos procedimentos de fiscalização, bafômetro e recusa de teste." },
    { title: "Infrações Gravíssimas e Pontuação", description: "Análise de nulidades em autos de infração que geram pontuação excessiva ou suspensão direta da habilitação." },
    { title: "Acidentes com Vítimas", description: "Apoio jurídico especializado na esfera cível para reparação de danos e na esfera administrativa de trânsito." },
    { title: "Nulidades de Autos de Infração", description: "Verificação técnica de conformidade dos equipamentos de medição e preenchimento dos autos conforme o CTB." }
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
              <span className="text-[#CFAE70] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Área de Atuação 03</span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-8 leading-none">Direito de Trânsito</h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">Defesa técnica especializada focada na legalidade dos atos administrativos de trânsito.</p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-8 text-[#091D39]">Proteção ao Direito de Locomoção</h2>
                <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none">
                  <p className="mb-6">O Código de Trânsito Brasileiro (CTB) estabelece procedimentos rigorosos para a aplicação de penalidades. Qualquer falha formal no auto de infração pode ensejar sua nulidade.</p>
                  <p className="mb-8">Nossa atuação consiste na análise pormenorizada de cada autuação, garantindo que o condutor não seja penalizado injustamente por erros de medição ou vícios de preenchimento administrativo.</p>
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
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6">Recurso Técnico</h3>
                    <p className="text-gray-400 text-sm mb-10">Analisamos a validade técnica de multas e processos de suspensão da sua carteira.</p>
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
