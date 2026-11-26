import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Landmark, Scale, FileText, Gavel, ShieldCheck, ChevronRight, Briefcase, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AdministrativeLaw() {
  const highlightBoxes = [
    {
      title: "Concursos Públicos",
      description: "Atuação em recursos administrativos e judiciais contra irregularidades em editais, provas e nomeações.",
      icon: <FileText className="text-[#CFAE70]" size={32} />
    },
    {
      title: "Processos Disciplinares (PAD)",
      description: "Defesa técnica de servidores públicos em processos administrativos disciplinares e sindicâncias.",
      icon: <Briefcase className="text-[#CFAE70]" size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-[#E8E8E8] text-[#0D0D0D]">
      <Navbar />
      <main className="pt-32">
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-8 py-4">
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
              <Link href="/" className="hover:text-[#091D39] transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-gray-400">Áreas de Atuação</span>
              <ChevronRight size={12} />
              <span className="text-[#091D39]">Direito Administrativo</span>
            </nav>
          </div>
        </div>

        <section className="bg-[#091D39] py-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#CFAE70]/5 skew-x-12 translate-x-1/4" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl">
              <span className="text-[#CFAE70] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Área de Atuação 13</span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-8 leading-tight">
                Direito <br />
                <span className="text-[#CFAE70]">Administrativo</span>
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl">
                Assessoria jurídica nas relações com o Poder Público, garantindo a legalidade dos atos administrativos e a proteção dos direitos do administrado e do servidor.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-8">
                <div className="mb-20">
                  <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-8 text-[#091D39]">O Poder Público sob Controle</h2>
                  <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none space-y-6">
                    <p>
                      A Administração Pública deve pautar-se pelo <strong>princípio da legalidade</strong>. Atuamos para questionar atos arbitrários, desvios de finalidade e garantir que os direitos fundamentais do cidadão e do servidor sejam respeitados frente ao Estado.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 mb-20">
                  {highlightBoxes.map((box, idx) => (
                    <div key={idx} className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{box.icon}</div>
                      <h3 className="text-xl font-bold uppercase tracking-tighter text-[#091D39] mb-4">{box.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{box.description}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-12 text-[#091D39]">Frentes de Atuação Técnica</h2>
                
                <div className="space-y-12">
                  <div className="bg-white p-10 border border-gray-100 shadow-sm">
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#CFAE70] mb-8">Administrativo e Servidor</h4>
                    <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                      {[
                        "Recursos em Concursos Públicos (Provas e Títulos)",
                        "Anulação de Questões e Mandado de Segurança",
                        "Defesa em PAD e Sindicâncias Administrativas",
                        "Ações de Cobrança contra o Estado",
                        "Assessoria em Licitações e Contratos Públicos",
                        "Ações de Improbidade Administrativa",
                        "Responsabilidade Civil do Estado",
                        "Defesa de Direitos de Servidores (Vantagens e Gratificações)"
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-center py-2 border-b border-gray-50 last:border-0">
                          <CheckCircle2 size={16} className="text-[#CFAE70] shrink-0" />
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
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 leading-tight">Atendimento Consultivo</h3>
                    <p className="text-gray-400 text-sm mb-10 leading-relaxed">
                      Atendimento especializado para demandas contra a Administração Pública e defesa de servidores.
                    </p>
                    <div className="flex flex-col gap-4">
                      <a href="https://wa.me/5527992942888" target="_blank" className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-5 px-6 font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-lg">
                        <MessageCircle size={20} /> WhatsApp
                      </a>
                      <a href="#footer" className="flex items-center justify-center gap-3 w-full bg-[#CFAE70] text-[#091D39] py-5 px-6 font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg">
                        Falar com Advogado
                      </a>
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
