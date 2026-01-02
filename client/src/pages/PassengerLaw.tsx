import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PassengerLaw() {
  const specializedServices = [
    { title: "Atrasos e Cancelamentos", description: "Indenização por danos morais e materiais decorrentes de falhas no serviço aéreo." },
    { title: "Extravio de Bagagem", description: "Garantia de ressarcimento por perdas, danos ou atrasos na entrega de pertences." },
    { title: "Overbooking", description: "Atuação contra a preterição de embarque e falta de assistência da companhia." },
    { title: "Reembolso e Taxas", description: "Recuperação de valores em cancelamentos de passagens e taxas indevidas." }
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
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">Defesa do consumidor em face de companhias aéreas por falhas na prestação do serviço.</p>
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-8 text-[#091D39]">Respeito ao Consumidor Aéreo</h2>
                <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none">
                  <p className="mb-6">O passageiro possui direitos fundamentais garantidos pela ANAC e pelo Código de Defesa do Consumidor.</p>
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
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 leading-tight">Análise de Voo</h3>
                    <p className="text-gray-400 text-sm mb-10">Verificamos se seu problema com a companhia aérea gera direito a indenização.</p>
                    <div className="space-y-4">
                      <a href="https://wa.me/5527999999999" target="_blank" className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all"><MessageCircle size={20} /> WhatsApp</a>
                    </div>
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
