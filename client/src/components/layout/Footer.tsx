import { MessageCircle, Mail, MapPin, Phone, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#091D39] text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand Info */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold font-heading uppercase tracking-wider mb-6 border-l-4 border-[#CFAE70] pl-4">
              Anderson Litig <br /> <span className="text-[#CFAE70]">Advocacia</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Escritório de advocacia com atuação nacional, focado na excelência técnica e na defesa intransigente dos direitos do cidadão.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 hover:bg-[#CFAE70] hover:text-[#091D39] transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-[#CFAE70] hover:text-[#091D39] transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-[#CFAE70] hover:text-[#091D39] transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#CFAE70] mb-8">Navegação</h3>
            <ul className="space-y-4">
              <li><a href="#hero" className="text-sm text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#how-we-act" className="text-sm text-gray-300 hover:text-white transition-colors">Como Atuamos</a></li>
              <li><a href="#services" className="text-sm text-gray-300 hover:text-white transition-colors">Catálogo de Serviços</a></li>
              <li><a href="#blog" className="text-sm text-gray-300 hover:text-white transition-colors">Conteúdo Jurídico</a></li>
              <li><a href="#footer" className="text-sm text-gray-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#CFAE70] mb-8">Contato Direto</h3>
            <div className="space-y-6">
              <a href="tel:+5527999999999" className="flex items-start gap-4 group">
                <div className="bg-white/5 p-3 text-[#CFAE70] group-hover:bg-[#CFAE70] group-hover:text-[#091D39] transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Telefone / WhatsApp</p>
                  <p className="text-base font-medium">+55 (27) 99999-9999</p>
                </div>
              </a>

              <a href="mailto:contato@andersonlitig.adv.br" className="flex items-start gap-4 group">
                <div className="bg-white/5 p-3 text-[#CFAE70] group-hover:bg-[#CFAE70] group-hover:text-[#091D39] transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">E-mail Institucional</p>
                  <p className="text-base font-medium">contato@andersonlitig.adv.br</p>
                </div>
              </a>

              <div className="flex items-start gap-4 group">
                <div className="bg-white/5 p-3 text-[#CFAE70] group-hover:bg-[#CFAE70] group-hover:text-[#091D39] transition-colors">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Atuação</p>
                  <p className="text-base font-medium">Serra/ES - Atendimento Nacional 100% Digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-gray-500 text-[10px] uppercase tracking-widest">
              Anderson Litig - OAB/ES 40.152 - Serra/ES
            </p>
            <p className="text-gray-600 text-[10px]">
              &copy; 2025 Todos os direitos reservados. Informações de caráter informativo conforme regras da OAB.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-3">
             <p className="text-[#CFAE70] text-[10px] font-bold uppercase tracking-widest">Justiça de Alta Performance</p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5527999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Fale conosco no WhatsApp"
      >
        <div className="absolute -top-12 right-0 bg-white text-[#0D0D0D] px-4 py-2 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-100">
          Falar agora com o advogado
        </div>
        <MessageCircle size={32} />
      </a>
    </footer>
  );
}
