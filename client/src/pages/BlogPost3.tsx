import { ChevronRight, Calendar } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogCTA, { ShareButtons, AuthorBlock, RecommendedPosts } from "@/components/blog/BlogElements";

export default function BlogPost3() {
  const title = "Juros Abusivos: Como identificar e revisar seu contrato";
  const summary = "Descubra como a análise técnica de contratos bancários pode identificar taxas abusivas e reduzir significativamente o saldo devedor de financiamentos.";

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
              <span className="text-[#091D39]">Contratos Bancários</span>
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
                    <span>05 Mai 2024</span>
                  </div>
                  <div className="bg-[#091D39] text-white px-3 py-1 self-start">
                    Bancário
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
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop" 
                  alt="Contratos Bancários" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none space-y-6 mb-16">
                <p>
                  Muitos contratos de financiamento de veículos e empréstimos pessoais escondem taxas que superam em muito a taxa média de mercado divulgada pelo Banco Central. Essas práticas podem tornar a dívida impagável.
                </p>
                <p>
                  A <strong>Ação Revisional</strong> permite que o judiciário analise o contrato e determine o recálculo do saldo devedor, muitas vezes gerando uma redução substancial nas parcelas ou até a devolução de valores pagos a maior.
                </p>
                <h2 className="text-2xl font-bold uppercase tracking-tighter text-[#091D39] mt-12 mb-6">Sinais de Alerta</h2>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>Taxa acima da média do BACEN:</strong> O principal indicador de abusividade.</li>
                  <li><strong>Capitalização de juros:</strong> O famoso "juros sobre juros" sem previsão clara.</li>
                  <li><strong>Tarifas embutidas:</strong> Venda casada de seguros ou taxas de abertura de crédito não autorizadas.</li>
                </ul>
              </div>

              <BlogCTA />
              <AuthorBlock />
              <RecommendedPosts currentId={3} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
