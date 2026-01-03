import { MessageCircle, Share2 } from "lucide-react";

export default function BlogCTA() {
  return (
    <div className="bg-[#0D0D0D] p-10 text-white border-l-8 border-[#CFAE70] my-16">
      <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">Esclareça suas dúvidas</h3>
      <p className="text-gray-400 mb-8 leading-relaxed italic">
        O conteúdo acima possui caráter meramente informativo. Caso você tenha dúvidas sobre a aplicação da lei ao seu caso concreto ou precise de orientações técnicas específicas, nossa equipe jurídica está disponível para fornecer esclarecimentos fundamentados.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <a 
          href="https://wa.me/5527999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-[#CFAE70] text-[#091D39] py-4 px-8 font-bold uppercase tracking-widest hover:bg-white transition-all w-full sm:w-auto"
        >
          <MessageCircle size={20} /> Solicitar Informação Técnica
        </a>
        <div className="text-[9px] text-gray-500 uppercase tracking-widest leading-tight text-center sm:text-left">
          Atividade consultiva em estrita conformidade <br /> com o Código de Ética e Disciplina da OAB.
        </div>
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
