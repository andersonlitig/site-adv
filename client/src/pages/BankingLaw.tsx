import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, Landmark, ShieldAlert, Wallet, Gavel, Search, CreditCard, PieChart, HelpCircle, Activity, ChevronRight, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function BankingLaw() {
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
              <span className="text-[#091D39]">Direito Bancário</span>
            </nav>
          </div>
        </div>

        <section className="bg-[#091D39] py-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#CFAE70]/5 skew-x-12 translate-x-1/4" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl">
              <span className="text-[#CFAE70] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Área de Atuação 05</span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-8 leading-tight">
                Proteção Contra <br />
                <span className="text-[#CFAE70]">Abusividades Bancárias</span>
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl">
                Reequilibramos a relação entre consumidores e instituições financeiras. Atuamos tecnicamente para expurgar juros ilegais, combater fraudes digitais e reverter práticas abusivas que comprometem seu patrimônio.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-8">
                <div className="mb-20">
                  <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-8 text-[#091D39]">O Desequilíbrio Contratual</h2>
                  <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none space-y-6">
                    <p>
                      Contratos bancários são, via de regra, de adesão. Isso permite que bancos incluam cláusulas de <strong>juros capitalizados</strong> e tarifas acessórias ilegais. A revisão judicial foca na identificação dessas taxas que excedem a média de mercado fixada pelo Banco Central.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 mb-20">
                  <div className="bg-white p-8 border-l-4 border-[#CFAE70] shadow-sm">
                    <h3 className="text-xl font-bold uppercase tracking-tighter text-[#091D39] mb-4">Juros Abusivos</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Análise técnica de contratos de financiamento e crédito para reduzir o saldo devedor e as parcelas mensais.
                    </p>
                  </div>
                  <div className="bg-white p-8 border-l-4 border-[#CFAE70] shadow-sm">
                    <h3 className="text-xl font-bold uppercase tracking-tighter text-[#091D39] mb-4">Golpes Digitais (Pix)</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Atuação imediata para bloqueio e recuperação de valores em casos de fraude e falha na segurança bancária.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-12 text-[#091D39]">Frentes de Atuação Técnica</h2>
                
                <div className="space-y-12">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#CFAE70] mb-6">Contratos e Revisões</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Ação Revisional de Juros Bancários",
                        "Defesa em Busca e Apreensão de Veículo",
                        "Revisão de Financiamento Imobiliário (SFH/SFI)",
                        "Expurgo de Taxas de Venda Casada (Seguros)",
                        "Cancelamento de Cartão de Crédito com Juros Abusivos",
                        "Defesa em Ações de Execução de Título"
                      ].map((item, i) => (
                        <div key={i} className="bg-white p-6 flex gap-4 items-start">
                          <CheckCircle2 size={18} className="text-[#CFAE70] shrink-0 mt-1" />
                          <span className="text-sm font-medium text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#CFAE70] mb-6">Fraudes e Crédito Consignado</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Recuperação de Valores de Golpe do Pix",
                        "Ação por Negativação Indevida (Danos Morais)",
                        "Suspensão de RMC (Reserva de Margem Consignada)",
                        "Defesa contra Empréstimos Não Contratados",
                        "Responsabilidade por Saques Fraudulentos",
                        "Anulação de Contratos de Cartão Consignado"
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
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 leading-tight">Cálculo Revisional</h3>
                    <p className="text-gray-400 text-sm mb-10 leading-relaxed">
                      Muitos contratos possuem juros camuflados. Realizamos uma perícia técnica inicial para verificar a viabilidade da ação.
                    </p>
                    <div className="space-y-4">
                      <a href="https://wa.me/5527999999999" target="_blank" className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all"><MessageCircle size={20} /> WhatsApp</a>
                      <a href="#footer" className="flex items-center justify-center gap-3 w-full bg-[#CFAE70] text-[#091D39] py-4 font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-[#CFAE70]/20">Analisar Contrato</a>
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
