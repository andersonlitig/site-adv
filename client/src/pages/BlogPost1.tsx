import { ChevronRight, Calendar } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogCTA, { ShareButtons, AuthorBlock, RecommendedPosts } from "@/components/blog/BlogElements";

export default function BlogPost1() {
  const title = "Direito à Saúde: Como reverter negativas de planos de saúde";
  const summary = "Saiba como agir diante de negativas de tratamentos, medicamentos de alto custo e cirurgias, garantindo seu acesso à saúde através de medidas jurídicas especializadas.";

  return (
    <div className="min-h-screen bg-white text-[#0D0D0D]">
      <Navbar />
      <main className="pt-32">
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
              <Link href="/" className="hover:text-[#091D39] transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-gray-400">Blog</span>
              <ChevronRight size={12} />
              <span className="text-[#091D39]">Direito à Saúde</span>
            </nav>
          </div>
        </div>

        <article className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex flex-col gap-2 mb-6 text-sm font-bold uppercase tracking-widest text-[#CFAE70]">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>15 Mai 2024</span>
                  </div>
                  <div className="bg-[#091D39] text-white px-3 py-1 self-start">
                    Saúde
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter mb-4 leading-tight text-[#091D39]">
                  {title}
                </h1>
                <p className="text-xl text-gray-500 font-light leading-relaxed italic border-l-4 border-[#CFAE70] pl-6 mb-8">
                  {summary}
                </p>
                
                <ShareButtons title={title} />
              </div>

              <div className="aspect-video mb-12 overflow-hidden bg-[#091D39] rounded-sm shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
                  alt="Direito à Saúde" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none space-y-8 mb-16">
                <p className="text-lg">
                  As negativas de cobertura pelos planos de saúde têm se tornado cada vez mais comuns, atingindo pacientes em momentos de extrema vulnerabilidade. Seja pela recusa de medicamentos de alto custo, cirurgias complexas ou tratamentos especializados, o beneficiário muitas vezes se vê desamparado.
                </p>
                <p>
                  O que muitos não sabem é que o <strong>Rol da ANS</strong> é considerado exemplificativo pela jurisprudência majoritária, o que significa que, se houver prescrição médica fundamentada, o plano não pode simplesmente negar o tratamento sob alegação de não estar na lista.
                </p>

                <div className="bg-gray-50 p-10 my-12 border-l-4 border-[#091D39] shadow-sm">
                  <h3 className="text-xl font-bold uppercase tracking-tighter text-[#091D39] mb-6">Passos para Reverter a Negativa</h3>
                  <ul className="list-none p-0 space-y-6">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#CFAE70] text-[#091D39] flex items-center justify-center font-bold text-sm">01</span>
                      <p className="m-0"><strong>Exija a negativa por escrito:</strong> É direito do consumidor receber o motivo da recusa formalmente e de forma detalhada.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#CFAE70] text-[#091D39] flex items-center justify-center font-bold text-sm">02</span>
                      <p className="m-0"><strong>Prescrição detalhada:</strong> O médico deve justificar a urgência, a necessidade específica do tratamento e os riscos da interrupção.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#CFAE70] text-[#091D39] flex items-center justify-center font-bold text-sm">03</span>
                      <p className="m-0"><strong>Ação Judicial com Liminar:</strong> Em casos de urgência, a justiça pode conceder decisões rápidas para garantir o início imediato do tratamento.</p>
                    </li>
                  </ul>
                </div>

                <p>
                  A jurisprudência brasileira tem sido amplamente favorável ao consumidor nesses casos, entendendo que o médico assistente é quem define a melhor terapêutica para o paciente, e não a operadora do plano de saúde.
                </p>
              </div>

              <BlogCTA />
              <div className="border-t border-gray-100 pt-8">
                <AuthorBlock />
              </div>
            </div>
          </div>
        </article>

        <RecommendedPosts currentId={1} />
      </main>
      <Footer />
    </div>
  );
}
