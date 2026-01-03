import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#E8E8E8]">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Informações de Contato */}
          <div>
            <h2 className="text-[#091D39] text-4xl font-bold font-heading uppercase tracking-tighter mb-8 border-l-4 border-[#CFAE70] pl-6">
              Contato Profissional
            </h2>
            <p className="text-gray-600 text-lg mb-12 font-light">
              Estamos prontos para oferecer o suporte jurídico técnico que o seu caso exige. Entre em contato através dos nossos canais oficiais.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-[#091D39] p-4 text-[#CFAE70]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#CFAE70] font-bold mb-1">Telefone / WhatsApp</h4>
                  <p className="text-[#091D39] font-bold text-xl">+55 (27) 99999-9999</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-[#091D39] p-4 text-[#CFAE70]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#CFAE70] font-bold mb-1">E-mail Institucional</h4>
                  <p className="text-[#091D39] font-bold text-xl">contato@andersonlitig.adv.br</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-[#091D39] p-4 text-[#CFAE70]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#CFAE70] font-bold mb-1">Atuação</h4>
                  <p className="text-[#091D39] font-bold text-lg">Serra/ES - Atendimento Nacional 100% Digital</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white p-10 shadow-xl border-t-4 border-[#091D39]">
            <h3 className="text-2xl font-bold text-[#091D39] mb-8 uppercase tracking-tighter">Envie uma Mensagem</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-4 focus:border-[#CFAE70] outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-4 focus:border-[#CFAE70] outline-none transition-colors"
                    placeholder="email@exemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-4 focus:border-[#CFAE70] outline-none transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Assunto</label>
                <select className="w-full bg-gray-50 border border-gray-200 px-4 py-4 focus:border-[#CFAE70] outline-none transition-colors">
                  <option>Selecione uma área de interesse</option>
                  <option>Direito da Saúde</option>
                  <option>Direito do Trabalho</option>
                  <option>Direito da Família</option>
                  <option>Outros Assuntos</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-4 focus:border-[#CFAE70] outline-none transition-colors resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button className="w-full bg-[#091D39] text-white py-5 px-8 font-bold uppercase tracking-[0.2em] hover:bg-[#CFAE70] hover:text-[#091D39] transition-all flex items-center justify-center gap-3">
                Enviar Mensagem <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
