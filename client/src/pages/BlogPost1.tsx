import { ChevronRight, Calendar } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogCTA, { ShareButtons } from "@/components/blog/BlogElements";

export default function BlogPost1() {
  const title = "Direito à Saúde: Como reverter negativas de planos de saúde";
  const summary = "Saiba como agir diante de negativas de tratamentos, medicamentos de alto custo e cirurgias, garantindo seu acesso à saúde através de medidas jurídicas especializadas.";

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
              <span className="text-[#091D39]">Direito à Saúde</span>
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

              <div className="aspect-video mb-12 overflow-hidden bg-[#091D39]">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
                  alt="Direito à Saúde" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none space-y-6 mb-16">
                <p>
                  As negativas de cobertura pelos planos de saúde têm se tornado cada vez mais comuns, atingindo pacientes em momentos de extrema vulnerabilidade. Seja pela recusa de medicamentos de alto custo, cirurgias complexas ou tratamentos especializados, o beneficiário muitas vezes se vê desamparado.
                </p>
                <p>
                  O que muitos não sabem é que o <strong>Rol da ANS</strong> é considerado exemplificativo pela jurisprudência majoritária, o que significa que, se houver prescrição médica fundamentada, o plano não pode simplesmente negar o tratamento sob alegação de não estar na lista.
                </p>
                <h2 className="text-2xl font-bold uppercase tracking-tighter text-[#091D39] mt-12 mb-6">Passos para Reverter a Negativa</h2>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>Exija a negativa por escrito:</strong> É direito do consumidor receber o motivo da recusa formalmente.</li>
                  <li><strong>Prescrição detalhada:</strong> O médico deve justificar a urgência e a necessidade específica do tratamento.</li>
                  <li><strong>Liminares:</strong> Em casos de urgência, a justiça pode conceder decisões rápidas (liminares) em menos de 24h a 48h.</li>
                </ul>
              </div>

              <BlogCTA 
                title="Sua saúde não pode esperar"
                description="Se você ou um familiar teve um tratamento negado, nossa equipe está pronta para atuar na defesa imediata dos seus direitos fundamentais."
                buttonText="Consultar Especialista"
              />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
