import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, Plane, Luggage, Clock, AlertTriangle, ShieldCheck, Ticket, Users } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PassengerLaw() {
  const specializedServices = [
    { title: "Atrasos e Cancelamentos", icon: <Clock className="text-[#CFAE70]" size={24} />, description: "Orientação técnica sobre o direito à assistência material e possíveis reparações por falhas no serviço aéreo." },
    { title: "Extravio de Bagagem", icon: <Luggage className="text-[#CFAE70]" size={24} />, description: "Suporte consultivo sobre os procedimentos de protesto e prazos para busca de ressarcimento por danos ou perdas." },
    { title: "Overbooking", icon: <AlertTriangle className="text-[#CFAE70]" size={24} />, description: "Atuação em casos de preterição de embarque e falta de assistência imediata da companhia aérea." },
    { title: "Reembolso e Taxas", icon: <Ticket className="text-[#CFAE70]" size={24} />, description: "Recuperação de valores em cancelamentos solicitados pelo passageiro ou pela empresa, analisando taxas abusivas." },
    { title: "Conexões Perdidas", icon: <ShieldCheck className="text-[#CFAE70]" size={24} />, description: "Análise da responsabilidade em casos de perda de voos subsequentes por falhas operacionais anteriores." },
    { title: "Assistência Especial", icon: <Users className="text-[#CFAE70]" size={24} />, description: "Garantia de direitos para passageiros com necessidade de assistência especial (PNAE) não atendidos adequadamente." },
    { title: "Danos em Bagagem", icon: <Plane className="text-[#CFAE70]" size={24} />, description: "Procedimentos técnicos para reparação de malas ou bens danificados durante o transporte aéreo." },
    { title: "Troca de Aeronave", icon: <CheckCircle2 className="text-[#CFAE70]" size={24} />, description: "Acompanhamento em situações de reacomodação involuntária ou redução de classe contratada." }
  ];

  return (
    <div className="min-h-screen bg-[#E8E8E8] text-[#0D0D0D]">
      <Navbar />
      <main className="pt-32">
        <section className="bg-[#091D39] py-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#CFAE70]/5 skew-x-12 translate-x-1/4" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <Link href="/"><a className="inline-flex items-center gap-2 text-[#CFAE70] mb-8 hover:text-white transition-colors group uppercase text-xs font-bold tracking-widest"><ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar para o início</a></Link>
            <div className="max-w-4xl">
              <span className="text-[#CFAE70] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Área de Atuação 04</span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-8 leading-none">Direito do Passageiro</h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">Defesa técnica do consumidor aéreo baseada nas resoluções da ANAC e no Código de Defesa do Consumidor.</p>
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-8 text-[#091D39]">Respeito ao Usuário Aéreo</h2>
                <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none mb-12">
                  <p>O transporte aéreo é uma relação de consumo complexa. Atuamos para garantir que a transparência e a eficiência sejam mantidas, assegurando que o passageiro não arque com prejuízos causados por falhas operacionais.</p>
                  <p>Nossa atuação consultiva visa orientar o viajante sobre os procedimentos imediatos necessários para resguardar seus direitos em casos de incidentes aéreos.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
                  {specializedServices.map((service, idx) => (
                    <div key={idx} className="bg-white p-8 group hover:bg-[#091D39] transition-all duration-500 cursor-default">
                      <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                      <h3 className="font-bold uppercase tracking-wider text-[#091D39] group-hover:text-white mb-3 transition-colors">{service.title}</h3>
                      <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="sticky top-32">
                  <div className="bg-[#0D0D0D] p-10 text-white border-l-8 border-[#CFAE70]">
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 leading-tight">Suporte ao Viajante</h3>
                    <p className="text-gray-400 text-sm mb-10 leading-relaxed">Verificamos tecnicamente se as falhas na prestação de serviço da companhia aérea geram direito a reparação ou reembolso.</p>
                    <div className="space-y-4">
                      <a href="https://wa.me/5527999999999" target="_blank" className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all"><MessageCircle size={20} /> WhatsApp</a>
                      <a href="#footer" className="flex items-center justify-center gap-3 w-full bg-[#CFAE70] text-[#091D39] py-4 font-bold uppercase tracking-widest hover:bg-white transition-all">Iniciar Atendimento</a>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-8 border border-gray-200 bg-white">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#091D39] mb-4">Nota de Atuação</h4>
                    <p className="text-gray-500 text-xs leading-relaxed italic">Suporte técnico especializado fundamentado nas resoluções vigentes de transporte aéreo.</p>
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
