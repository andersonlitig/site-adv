import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, Plane, Luggage, Clock } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PassengerLaw() {
  const specializedServices = [
    { title: "Atrasos e Cancelamentos de Voo", description: "Orientação sobre a assistência material obrigatória (comunicação, alimentação e acomodação) e o direito à reacomodação ou reembolso." },
    { title: "Extravio e Danos em Bagagem", description: "Explicação sobre os prazos para protesto, o relatório de irregularidade (RIB) e os limites de indenização previstos na Convenção de Varsóvia e CDC." },
    { title: "Overbooking e Preterição", description: "Atendimento técnico para situações em que o embarque é negado por excesso de lotação ou troca de aeronave sem aviso prévio." },
    { title: "Perda de Conexão", description: "Análise da responsabilidade da companhia aérea em perdas de voos subsequentes causadas por atrasos injustificados no primeiro trecho." },
    { title: "Condições de Reembolso", description: "Esclarecimentos sobre as taxas de cancelamento permitidas pela ANAC e as regras para passagens promocionais." }
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
              <span className="text-[#CFAE70] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Área de Atuação 04</span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-8 leading-none">Direito do Passageiro</h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">Defesa dos direitos do consumidor aéreo fundamentada nas normas da ANAC e CDC.</p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-8 text-[#091D39]">Respeito à Dignidade do Viajante</h2>
                <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none">
                  <p className="mb-6">O transporte aéreo é uma relação de consumo que exige transparência e pontualidade. Infelizmente, falhas na prestação de serviço são comuns e geram transtornos significativos.</p>
                  <p className="mb-8">Nosso suporte técnico visa esclarecer os direitos do passageiro em casos de falhas operacionais, garantindo que a reparação por danos morais e materiais seja justa e célere.</p>
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
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6">Problemas em Voo?</h3>
                    <p className="text-gray-400 text-sm mb-10">Analisamos tecnicamente a responsabilidade da companhia aérea no seu atraso ou extravio.</p>
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
