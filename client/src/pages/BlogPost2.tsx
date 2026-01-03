import { ChevronRight, Calendar, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function BlogPost2() {
  return (
    <div className="min-h-screen bg-[#E8E8E8] text-[#0D0D0D]">
      <Navbar />
      <main className="pt-32">
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
              <Link href="/"><a className="hover:text-[#091D39] transition-colors">Home</a></Link>
              <ChevronRight size={12} />
              <span className="text-gray-400">Blog</span>
              <ChevronRight size={12} />
              <span className="text-[#091D39]">Herança e Inventário</span>
            </nav>
          </div>
        </div>

        <article className="py-24">
          <div className="container mx-auto px-4 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex flex-col gap-2 mb-6 text-sm font-bold uppercase tracking-widest text-[#CFAE70]">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>10 Mai 2024</span>
                  </div>
                  <div className="bg-[#091D39] text-white px-3 py-1 self-start">
                    Família
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter mb-8 leading-tight text-[#091D39]">
                  Herança e Inventário: O que você precisa saber hoje
                </h1>
              </div>

              <div className="aspect-video mb-12 overflow-hidden bg-[#091D39]">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
                  alt="Herança e Inventário" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none space-y-6 mb-16">
                <p>
                  O falecimento de um ente querido traz, além da dor da perda, a necessidade de organizar a sucessão patrimonial. O inventário é o procedimento obrigatório para que os bens sejam transmitidos legalmente aos herdeiros.
                </p>
                <p>
                  Atualmente, o <strong>Inventário Extrajudicial</strong> (feito em cartório) é a via mais rápida, desde que todos os herdeiros sejam maiores, capazes e estejam em comum acordo sobre a partilha.
                </p>
                <h2 className="text-2xl font-bold uppercase tracking-tighter text-[#091D39] mt-12 mb-6">Pontos de Atenção</h2>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>Prazo:</strong> O inventário deve ser aberto em até 60 dias para evitar multas sobre o ITCMD.</li>
                  <li><strong>Meação vs. Herança:</strong> É fundamental distinguir o que é do cônjuge sobrevivente e o que pertence aos herdeiros.</li>
                  <li><strong>Planejamento:</strong> Testamentos e holdings podem evitar brigas familiares e reduzir custos tributários no futuro.</li>
                </ul>
              </div>

              <div className="bg-[#0D0D0D] p-10 text-white border-l-8 border-[#CFAE70]">
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">Precisa de assessoria sucessória?</h3>
                <p className="text-gray-400 mb-8">Atuamos com discrição e agilidade para resolver questões de inventário e partilha de bens.</p>
                <a href="https://wa.me/5527999999999" target="_blank" className="inline-flex items-center gap-3 bg-[#CFAE70] text-[#091D39] py-4 px-8 font-bold uppercase tracking-widest hover:bg-white transition-all">
                  <MessageCircle size={20} /> Consultar agora
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
