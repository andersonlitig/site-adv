import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, Landmark, ShieldAlert, Wallet, Gavel, Search, CreditCard, PieChart } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function BankingLaw() {
  const specializedServices = [
    { title: "Juros Abusivos", icon: <Gavel className="text-[#CFAE70]" size={24} />, description: "Revisional de contratos bancários, financiamentos de veículos e cartões de crédito para restabelecer o equilíbrio." },
    { title: "Golpes e Fraudes", icon: <ShieldAlert className="text-[#CFAE70]" size={24} />, description: "Atuação técnica estratégica para recuperação de valores em casos de falha na segurança bancária e golpes digitais." },
    { title: "Busca e Apreensão", icon: <Landmark className="text-[#CFAE70]" size={24} />, description: "Defesa técnica especializada para evitar ou reverter a retomada judicial do veículo financiado." },
    { title: "Negativação Indevida", icon: <Wallet className="text-[#CFAE70]" size={24} />, description: "Análise de inscrições irregulares no SPC/Serasa visando a reparação de danos ao crédito do consumidor." },
    { title: "Venda Casada", icon: <Search className="text-[#CFAE70]" size={24} />, description: "Identificação de seguros e serviços embutidos sem consentimento em contratos de financiamento e empréstimos." },
    { title: "Cartão de Crédito", icon: <CreditCard className="text-[#CFAE70]" size={24} />, description: "Análise técnica de faturas e encargos rotativos em desacordo com as normas do Banco Central." },
    { title: "Renegociação de Dívidas", icon: <PieChart className="text-[#CFAE70]" size={24} />, description: "Consultoria estratégica para quitação de débitos bancários com expurgo de taxas e juros ilegais." },
    { title: "RMC e Empréstimos", icon: <CheckCircle2 className="text-[#CFAE70]" size={24} />, description: "Defesa contra descontos indevidos de Reserva de Margem Consignável (RMC) em benefícios previdenciários." }
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
              <span className="text-[#CFAE70] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Área de Atuação 05</span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-8 leading-none">Direito Bancário</h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">Proteção técnica contra abusividades contratuais e falhas de segurança no sistema financeiro.</p>
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-8 text-[#091D39]">Equilíbrio nas Relações Financeiras</h2>
                <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none mb-12">
                  <p>O sistema bancário detém superioridade técnica e econômica. Atuamos para reequilibrar essa relação, garantindo que o consumidor não seja prejudicado por cláusulas leoninas ou falhas digitais.</p>
                  <p>Nossa atuação consultiva foca na análise detalhada de contratos e extratos para identificar taxas ilegais e restabelecer a saúde financeira do cliente.</p>
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
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 leading-tight">Análise de Contrato</h3>
                    <p className="text-gray-400 text-sm mb-10 leading-relaxed">Revisamos tecnicamente as taxas e encargos do seu contrato bancário para identificar irregularidades.</p>
                    <div className="space-y-4">
                      <a href="https://wa.me/5527999999999" target="_blank" className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all"><MessageCircle size={20} /> WhatsApp</a>
                      <a href="#footer" className="flex items-center justify-center gap-3 w-full bg-[#CFAE70] text-[#091D39] py-4 font-bold uppercase tracking-widest hover:bg-white transition-all">Iniciar Atendimento</a>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-8 border border-gray-200 bg-white">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#091D39] mb-4">Nota Técnica</h4>
                    <p className="text-gray-500 text-xs leading-relaxed italic">Atuação especializada pautada pelas diretrizes normativas do Banco Central do Brasil.</p>
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
