import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronRight, Tag, Search } from "lucide-react";
import { Link } from "wouter";
import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Direito à Saúde: Como reverter negativas de planos de saúde",
    excerpt: "Saiba quais são os seus direitos quando o plano de saúde nega tratamentos ou medicamentos de alto custo. O Rol da ANS é exemplificativo e não pode ser barreira para sua saúde.",
    date: "15 Mai 2024",
    category: "Saúde",
    path: "/blog/negativas-plano-de-saude",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Herança e Inventário: O que você precisa saber hoje",
    excerpt: "Entenda os prazos, custos e procedimentos essenciais para organizar a sucessão patrimonial com segurança. Evite multas e conflitos familiares com planejamento.",
    date: "10 Mai 2024",
    category: "Família",
    path: "/blog/heranca-e-inventario",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Juros Abusivos: Como identificar e revisar seu contrato",
    excerpt: "Descubra como a análise técnica de contratos bancários pode identificar taxas abusivas e reduzir significativamente o saldo devedor de seus financiamentos.",
    date: "05 Mai 2024",
    category: "Bancário",
    path: "/blog/juros-abusivos",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop"
  }
];

const categories = ["Todos", "Saúde", "Família", "Bancário", "Trabalho", "Imobiliário"];

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0D0D0D]">
      <Navbar />
      
      <main className="pt-32">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-12 py-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
            <Link href="/" className="hover:text-[#091D39] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#091D39]">Conteúdo Jurídico</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="bg-[#091D39] text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#CFAE70_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
          <div className="container mx-auto px-4 md:px-12 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter mb-6">
                Blog <span className="text-[#CFAE70]">&</span> Artigos
              </h1>
              <p className="text-gray-400 text-xl font-light leading-relaxed">
                Informação técnica de qualidade como pilar para a defesa dos seus direitos. Explore nossas publicações.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-12 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar with Categories and Search */}
            <aside className="w-full lg:w-80 shrink-0 space-y-8">
              {/* Search */}
              <div className="bg-white p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <Search size={14} className="text-[#CFAE70]" /> Pesquisar
                </h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="O que você procura?" 
                    className="w-full bg-gray-50 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-[#CFAE70] transition-all outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories Sidebar */}
              <div className="bg-white p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <Tag size={14} className="text-[#CFAE70]" /> Categorias
                </h3>
                <div className="flex flex-col gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-left px-4 py-3 text-sm font-medium transition-all ${
                        selectedCategory === cat 
                        ? "bg-[#091D39] text-[#CFAE70] translate-x-2" 
                        : "text-gray-500 hover:text-[#091D39] hover:bg-gray-50"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Advisory Note */}
              <div className="bg-[#CFAE70]/10 p-8 border border-[#CFAE70]/20">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#091D39] mb-3">Aviso Legal</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed italic">
                  Os artigos publicados possuem finalidade puramente informativa e não substituem a consulta jurídica individualizada.
                </p>
              </div>
            </aside>

            {/* Main Content Area - List/Grid */}
            <div className="flex-grow space-y-8">
              <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {filteredPosts.length} Publicações encontradas
                </span>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 gap-8">
                  {filteredPosts.map((post) => (
                    <Link key={post.id} href={post.path}>
                      <motion.article 
                        className="group cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row overflow-hidden"
                        whileHover={{ x: 10 }}
                      >
                        <div className="w-full md:w-72 shrink-0 h-64 md:h-auto relative overflow-hidden bg-gray-100">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                          />
                        </div>
                        
                        <div className="p-8 flex flex-col justify-center flex-grow">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="bg-[#091D39] text-[#CFAE70] px-3 py-1 text-[9px] font-bold uppercase tracking-widest">
                              {post.category}
                            </span>
                            <div className="flex items-center gap-2 text-gray-400 text-[9px] uppercase tracking-widest font-bold">
                              <Calendar size={12} className="text-[#CFAE70]" />
                              {post.date}
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-[#091D39] mb-4 group-hover:text-[#CFAE70] transition-colors leading-tight font-heading uppercase tracking-tighter">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 max-w-2xl">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center gap-2 text-[#091D39] font-bold text-[10px] uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                            Ler Artigo Completo <ArrowRight size={14} className="text-[#CFAE70]" />
                          </div>
                        </div>
                      </motion.article>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 bg-white border border-dashed border-gray-200">
                  <p className="text-gray-400 uppercase tracking-widest text-sm">Nenhum artigo encontrado para esta busca.</p>
                  <button 
                    onClick={() => {setSelectedCategory("Todos"); setSearchQuery("");}}
                    className="mt-4 text-[#CFAE70] font-bold uppercase tracking-widest text-xs hover:underline"
                  >
                    Ver todas as publicações
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
