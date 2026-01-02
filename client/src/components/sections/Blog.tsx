import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Direito à Saúde: Como reverter negativas de planos de saúde",
    excerpt: "Saiba quais são os seus direitos quando o plano de saúde nega tratamentos ou medicamentos de alto custo.",
    date: "15 Jan 2024",
    category: "Direito da Saúde",
    image: "https://images.unsplash.com/photo-1505751172107-573225a9627e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Planejamento Previdenciário: Vale a pena investir agora?",
    excerpt: "Entenda por que antecipar sua análise previdenciária pode garantir uma aposentadoria muito mais vantajosa.",
    date: "10 Jan 2024",
    category: "Previdenciário",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Herança e Testamento: A importância da sucessão planejada",
    excerpt: "Evite conflitos familiares e altos custos de inventário com um planejamento sucessório eficiente.",
    date: "05 Jan 2024",
    category: "Família e Sucessões",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-[#0D0D0D] text-4xl font-bold font-heading uppercase tracking-tighter mb-4">
              Conteúdo Jurídico
            </h2>
            <p className="text-gray-500 text-lg">
              Artigos técnicos e informativos para auxiliar na defesa dos seus direitos.
            </p>
          </div>
          <button className="border border-[#091D39] text-[#091D39] px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#091D39] hover:text-white transition-all">
            Ver Todo o Blog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id}
              className="group cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-video mb-6 overflow-hidden bg-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-[#CFAE70] text-[#091D39] px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-[10px] uppercase tracking-widest mb-3">
                <Calendar size={12} className="text-[#CFAE70]" />
                {post.date}
              </div>
              <h3 className="text-xl font-bold text-[#091D39] mb-4 group-hover:text-[#CFAE70] transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-[#091D39] font-bold text-xs uppercase tracking-widest">
                Ler Artigo <ArrowRight size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
