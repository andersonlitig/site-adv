import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "wouter";

const blogPosts = [
  {
    id: 1,
    title: "Direito à Saúde: Como reverter negativas de planos de saúde",
    excerpt: "Saiba quais são os seus direitos quando o plano de saúde nega tratamentos ou medicamentos de alto custo.",
    date: "15 Mai 2024",
    category: "Saúde",
    path: "/blog/negativas-plano-de-saude",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Herança e Inventário: O que você precisa saber hoje",
    excerpt: "Entenda os prazos e procedimentos para garantir a sucessão patrimonial sem conflitos.",
    date: "10 Mai 2024",
    category: "Família",
    path: "/blog/heranca-e-inventario",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Juros Abusivos: Como identificar e revisar seu contrato",
    excerpt: "Saiba como reduzir parcelas de financiamento através da análise técnica de abusividades bancárias.",
    date: "05 Mai 2024",
    category: "Bancário",
    path: "/blog/juros-abusivos",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-[#0D0D0D] text-4xl font-bold font-heading uppercase tracking-tighter mb-4">
              Conteúdo Jurídico
            </h2>
            <p className="text-gray-500 text-lg">
              Artigos técnicos e informativos para auxiliar na defesa dos seus direitos.
            </p>
          </div>
          <Link href="/blog" className="border border-[#091D39] text-[#091D39] px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#091D39] hover:text-white transition-all">
              Ver Todo o Blog
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <Link key={post.id} href={post.path}>
              <motion.article 
                className="group cursor-pointer flex flex-col h-full bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#091D39] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-gray-400 text-[10px] uppercase tracking-widest mb-4 font-bold">
                    <Calendar size={12} className="text-[#CFAE70]" />
                    {post.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#091D39] mb-4 group-hover:text-[#CFAE70] transition-colors leading-tight font-heading uppercase tracking-tighter">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between group-hover:border-[#CFAE70]/20 transition-colors">
                    <span className="text-[#091D39] font-bold text-xs uppercase tracking-widest">Ler Artigo</span>
                    <ArrowRight size={18} className="text-[#CFAE70] group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
