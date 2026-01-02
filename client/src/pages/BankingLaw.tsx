import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, Landmark, ShieldX, Wallet } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function BankingLaw() {
  const specializedServices = [
    { title: "Juros Abusivos e Revisional", description: "Análise técnica de taxas de juros em contratos de financiamento habitacional, veicular e crédito pessoal em comparação à taxa média do mercado." },
    { title: "Golpes em Pix e Fraudes Bancárias", description: "Atuação consultiva estratégica para recuperação de valores em casos de transferências fraudulentas ou clonagem de cartões por falha do banco." },
    { title: "Busca e Apreensão de Veículos", description: "Orientação técnica sobre a legalidade da retomada do bem, verificação de notificações e defesa administrativa em contratos de alienação fiduciária." },
    { title: "Dívidas Bancárias e RENEGOCIAÇÃO", description: "Suporte especializado na análise de propostas de quitação de débitos e expurgos de taxas ilegais acumuladas." },
    { title: "Negativação Indevida", description: "Análise de inscrições irregulares no SPC/Serasa causadas por dívidas já quitadas ou inexistentes, visando a reparação de danos." }
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
              <span className="text-[#CFAE70] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Área de Atuação 05</span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-8 leading-none">Direito Bancário</h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">Proteção técnica do consumidor em face de abusividades e fraudes no sistema financeiro.</p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-8 text-[#091D39]">Equilíbrio nas Relações Contratuais</h2>
                <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none">
                  <p className="mb-6">As instituições financeiras detêm superioridade técnica e econômica nas relações de consumo. O Direito Bancário atua justamente para reequilibrar essa balança.</p>
                  <p className="mb-8">Nossa atuação é voltada para a identificação de taxas escondidas, seguros embutidos (venda casada) e falhas de segurança digital que prejudicam o patrimônio do cliente.</p>
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
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6">Análise Bancária</h3>
                    <p className="text-gray-400 text-sm mb-10">Revisamos tecnicamente as taxas e condições do seu contrato ou extrato bancário.</p>
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
