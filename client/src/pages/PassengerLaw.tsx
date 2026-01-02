import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, Plane, Luggage, Clock, AlertTriangle, ShieldCheck, Ticket, Users, HelpCircle, ChevronRight, Activity } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PassengerLaw() {
  return (
    <div className="min-h-screen bg-[#E8E8E8] text-[#0D0D0D]">
      <Navbar />
      <main className="pt-32">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-8 py-4">
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
              <Link href="/"><a className="hover:text-[#091D39] transition-colors">Home</a></Link>
              <ChevronRight size={12} />
              <span className="text-gray-400">Áreas de Atuação</span>
              <ChevronRight size={12} />
              <span className="text-[#091D39]">Direito do Passageiro</span>
            </nav>
          </div>
        </div>

        <section className="bg-[#091D39] py-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#CFAE70]/5 skew-x-12 translate-x-1/4" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl">
              <span className="text-[#CFAE70] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Área de Atuação 04</span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-8 leading-tight">
                Proteção Estratégica ao <br />
                <span className="text-[#CFAE70]">Consumidor Aéreo</span>
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl">
                Defendemos seus direitos contra as abusividades das companhias aéreas. Atuamos em casos de atrasos, cancelamentos e extravios, garantindo que a legislação nacional e internacional seja aplicada para sua reparação integral.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-8">
                <div className="mb-20">
                  <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-8 text-[#091D39]">Falha na Prestação de Serviço</h2>
                  <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none space-y-6">
                    <p>
                      O contrato de transporte aéreo é uma relação de consumo. Problemas técnicos ou meteorológicos não eximem a companhia do <strong>dever de assistência material</strong> (alimentação, comunicação e hospedagem) e da responsabilidade por danos morais e materiais decorrentes de atrasos excessivos.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 mb-20">
                  <div className="bg-white p-8 border-l-4 border-[#CFAE70] shadow-sm">
                    <h3 className="text-xl font-bold uppercase tracking-tighter text-[#091D39] mb-4">Atrasos Superiores a 4h</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Geram direito imediato a assistência e possível indenização, conforme as resoluções da ANAC e o Código de Defesa do Consumidor.
                    </p>
                  </div>
                  <div className="bg-white p-8 border-l-4 border-[#CFAE70] shadow-sm">
                    <h3 className="text-xl font-bold uppercase tracking-tighter text-[#091D39] mb-4">Extravio de Bagagem</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Atuamos na reparação por perdas materiais e pelo transtorno causado pela privação de itens pessoais durante a viagem.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-12 text-[#091D39]">Frentes de Atuação Técnica</h2>
                
                <div className="space-y-12">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#CFAE70] mb-6">Incidentes de Voo</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Cancelamento Injustificado de Voo",
                        "Atraso Significativo (Nacional e Internacional)",
                        "Overbooking (Preterição de Embarque)",
                        "Perda de Conexão por Culpa da Empresa",
                        "Alteração Unilateral de Horário de Voo",
                        "No-show e Cancelamento de Trecho de Volta"
                      ].map((item, i) => (
                        <div key={i} className="bg-white p-6 flex gap-4 items-start">
                          <CheckCircle2 size={18} className="text-[#CFAE70] shrink-0 mt-1" />
                          <span className="text-sm font-medium text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#CFAE70] mb-6">Bagagem e Reembolso</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Extravio Definitivo de Bagagem",
                        "Danos e Avarias em Malas",
                        "Furto de Itens no Interior da Bagagem",
                        "Reembolso de Taxas e Passagens",
                        "Negativa de Reacomodação em Outro Voo",
                        "Upgrade/Downgrade de Classe Indevido"
                      ].map((item, i) => (
                        <div key={i} className="bg-white p-6 flex gap-4 items-start">
                          <CheckCircle2 size={18} className="text-[#CFAE70] shrink-0 mt-1" />
                          <span className="text-sm font-medium text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-[#0D0D0D] p-10 text-white border-l-8 border-[#CFAE70]">
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 leading-tight">Direito à Indenização</h3>
                    <p className="text-gray-400 text-sm mb-10 leading-relaxed">
                      Muitos passageiros desconhecem que problemas aéreos de até 5 anos atrás ainda podem ser passíveis de reparação judicial.
                    </p>
                    <div className="space-y-4">
                      <a href="https://wa.me/5527999999999" target="_blank" className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all"><MessageCircle size={20} /> WhatsApp</a>
                      <a href="#footer" className="flex items-center justify-center gap-3 w-full bg-[#CFAE70] text-[#091D39] py-4 font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-[#CFAE70]/20">Consultar Viagem</a>
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
