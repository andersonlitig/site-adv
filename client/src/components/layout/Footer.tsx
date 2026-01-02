import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0D0D0D] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-8 text-white">
              Entre em Contato
            </h2>
            <p className="text-gray-400 mb-12 max-w-md">
              Agende uma consulta para analisarmos o seu caso com a atenção técnica e estratégica que ele exige.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="bg-[#2C2C2C] p-3 text-[#CFAE70] group-hover:bg-[#CFAE70] group-hover:text-[#091D39] transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Telefone</p>
                  <p className="text-lg font-medium">+55 (27) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-[#2C2C2C] p-3 text-[#CFAE70] group-hover:bg-[#CFAE70] group-hover:text-[#091D39] transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Email</p>
                  <p className="text-lg font-medium">contato@andersonlitig.adv.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-[#2C2C2C] p-3 text-[#CFAE70] group-hover:bg-[#CFAE70] group-hover:text-[#091D39] transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Localização</p>
                  <p className="text-lg font-medium">Serra/ES - Atendimento Nacional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#2C2C2C] p-8 md:p-12 border border-white/5">
            <h3 className="text-xl font-bold uppercase tracking-wider mb-8 text-white">
              Envie sua Mensagem
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Nome</label>
                  <input type="text" className="w-full bg-[#0D0D0D] border border-white/10 p-4 text-white focus:border-[#CFAE70] focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Telefone</label>
                  <input type="text" className="w-full bg-[#0D0D0D] border border-white/10 p-4 text-white focus:border-[#CFAE70] focus:outline-none transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">Email</label>
                <input type="email" className="w-full bg-[#0D0D0D] border border-white/10 p-4 text-white focus:border-[#CFAE70] focus:outline-none transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">Mensagem</label>
                <textarea rows={4} className="w-full bg-[#0D0D0D] border border-white/10 p-4 text-white focus:border-[#CFAE70] focus:outline-none transition-colors"></textarea>
              </div>

              <button className="w-full bg-[#CFAE70] text-[#091D39] py-4 font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Anderson Litig Advocacia. Todos os direitos reservados.
          </p>
          <div className="text-gray-500 text-sm font-mono border border-white/10 px-3 py-1">
            OAB/ES 40.152
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5527999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 shadow-lg hover:bg-[#128C7E] transition-colors duration-300"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </footer>
  );
}
