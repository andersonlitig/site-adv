import { MessageCircle, Share2, Calendar, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import authorImg from "@/assets/images/author.png";

export default function BlogCTA() {
  return (
    <div className="bg-[#0D0D0D] p-8 text-white border-l-4 border-[#CFAE70] my-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="text-xl font-bold uppercase tracking-tighter mb-1">Esclareça suas dúvidas</h3>
        <p className="text-gray-400 text-sm italic">Fale agora com um advogado especializado.</p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-2">
        <a 
          href="https://wa.me/5527999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-[#CFAE70] text-[#091D39] py-3 px-6 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all w-full md:w-auto"
        >
          <MessageCircle size={18} /> Falar com Advogado
        </a>
        <span className="text-[8px] text-gray-500 uppercase tracking-widest text-center md:text-right">
          Atividade consultiva em conformidade com o Código de Ética da OAB.
        </span>
      </div>
    </div>
  );
}

export function AuthorBlock() {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left mb-8">
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 shadow-md border-4 border-white">
        <img 
          src={authorImg} 
          alt="Dr. Anderson Litig" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="inline-block bg-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#CFAE70] shadow-sm mb-4">
          Sobre o Autor
        </div>
        <h4 className="text-2xl font-bold text-[#091D39] mb-1">Dr. Anderson Litig</h4>
        <div className="text-xs font-medium text-[#CFAE70] mb-4">
          Especialista em Direito Processual e Estratégia Jurídica
        </div>
        <p className="text-gray-600 text-sm leading-relaxed font-light">
          Com uma trajetória marcada pela excelência no contencioso e na consultoria preventiva, dedica-se a construir soluções jurídicas inovadoras e seguras para casos de alta complexidade.
        </p>
      </div>
    </div>
  );
}

const recommendedPosts = [
  {
    id: 1,
    title: "Direito à Saúde: Como reverter negativas de planos de saúde",
    date: "15 Mai 2024",
    path: "/blog/negativas-plano-de-saude",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Herança e Inventário: O que você precisa saber hoje",
    date: "10 Mai 2024",
    path: "/blog/heranca-e-inventario",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Juros Abusivos: Como identificar e revisar seu contrato",
    date: "05 Mai 2024",
    path: "/blog/juros-abusivos",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop"
  }
];

export function RecommendedPosts({ currentId }: { currentId: number }) {
  const posts = recommendedPosts.filter(p => p.id !== currentId).slice(0, 3);

  return (
    <div className="py-16 mt-16 border-t border-gray-100">
      <div className="flex items-center justify-between mb-8">
        <h4 className="text-2xl font-bold text-[#091D39]">Artigos Recomendados</h4>
        <Link href="/blog" className="text-sm font-semibold text-[#CFAE70] hover:text-[#091D39] transition-colors">
          Ver todos os artigos &rarr;
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            href={post.path}
            className="group flex flex-col"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-gray-100">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <div className="text-xs font-medium text-gray-400 mb-2">{post.date}</div>
            <h5 className="text-lg font-bold text-[#091D39] leading-tight group-hover:text-[#CFAE70] transition-colors">
              {post.title}
            </h5>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ShareButtons({ title }: { title: string }) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + shareUrl)}`;

  return (
    <div className="flex items-center gap-4 py-8 border-y border-gray-100 my-8">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
        <Share2 size={14} /> Compartilhar:
      </span>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-2 hover:scale-110 transition-transform"
        title="Compartilhar no WhatsApp"
      >
        <MessageCircle size={18} fill="currentColor" />
      </a>
    </div>
  );
}
