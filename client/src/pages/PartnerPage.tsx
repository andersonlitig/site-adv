import { motion } from "framer-motion";
import { 
  Users, 
  MessageCircle, 
  Handshake, 
  ShieldCheck, 
  TrendingUp, 
  Globe, 
  Scale, 
  ArrowRight,
  Briefcase,
  FileText,
  UserCheck
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function PartnerPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Proposta enviada!",
        description: "Nossa equipe de parcerias entrará em contato em breve.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const benefits = [
    {
      title: "Monetização Justa",
      description: "Divisão transparente de honorários em casos de indicação ou atuação conjunta.",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Expertise Técnica",
      description: "Acesso a teses consolidadas e suporte em áreas complexas onde não atuamos.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Atuação Nacional",
      description: "Estrutura pronta para atender demandas em qualquer estado do Brasil.",
      icon: <Globe size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center bg-[#091D39]">
          <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#091D39] via-transparent to-[#091D39] z-10" />
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop" 
              alt="Parceria Jurídica" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 md:px-12 relative z-20 pt-32 pb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#CFAE70]/10 border border-[#CFAE70]/20 text-[#CFAE70] text-[10px] font-bold uppercase tracking-widest mb-6">
                <Handshake size={12} /> Programa de Parcerias Jurídicas
              </div>
              <h1 className="text-4xl md:text-7xl font-bold text-white font-heading uppercase tracking-tighter mb-8 leading-[0.9]">
                Vamos Trabalhar <br /> <span className="text-[#CFAE70]">Juntos em Parceria</span>
              </h1>
              <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                Expanda o portfólio de soluções do seu escritório sem precisar dominar novas áreas. Juntos, oferecemos excelência técnica e resultados para seus clientes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-[#F8F9FA]">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid md:grid-cols-3 gap-12">
              {benefits.map((benefit, i) => (
                <div key={i} className="bg-white p-10 shadow-sm border-t-4 border-[#091D39]">
                  <div className="text-[#CFAE70] mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold uppercase tracking-tighter text-[#091D39] mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form and Info Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid lg:grid-cols-2 gap-24">
              <div>
                <h2 className="text-[#091D39] text-4xl font-bold font-heading uppercase tracking-tighter mb-8">
                  Por que ser um <br /> <span className="text-[#CFAE70]">Parceiro Anderson Litig?</span>
                </h2>
                <div className="space-y-8">
                  <div className="border-l-2 border-[#CFAE70] pl-6">
                    <h4 className="font-bold text-[#091D39] uppercase tracking-tighter mb-2">Segurança para seu Cliente</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Seu cliente continua sendo seu. Nós entramos com o suporte técnico e a expertise necessária para vencer a causa.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#CFAE70] pl-6">
                    <h4 className="font-bold text-[#091D39] uppercase tracking-tighter mb-2">Divisão de Honorários Transparente</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Acordos formalizados que garantem a correta divisão de honorários contratuais e sucumbenciais.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#CFAE70] pl-6">
                    <h4 className="font-bold text-[#091D39] uppercase tracking-tighter mb-2">Suporte Operacional</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Cuidamos de toda a parte técnica, protocolos, prazos e audiências, enquanto você mantém o relacionamento com o cliente.
                    </p>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-[#091D39] text-white border-l-8 border-[#CFAE70]">
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Dúvidas rápidas?</h3>
                  <p className="text-gray-400 text-sm mb-6">Fale diretamente com nossa gestão de parcerias via WhatsApp.</p>
                  <a 
                    href="https://wa.me/5527999999999" 
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-[#128C7E] transition-all"
                  >
                    <MessageCircle size={18} /> Chat de Parcerias
                  </a>
                </div>
              </div>

              <div className="bg-[#F8F9FA] p-8 md:p-12 border border-gray-100 shadow-xl">
                <h3 className="text-2xl font-bold text-[#091D39] uppercase tracking-tighter mb-8">Cadastre-se para Parceria</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Nome Completo</label>
                      <input required type="text" className="w-full bg-white border border-gray-200 p-4 text-sm focus:border-[#CFAE70] outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">OAB / Estado</label>
                      <input required type="text" className="w-full bg-white border border-gray-200 p-4 text-sm focus:border-[#CFAE70] outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">E-mail Profissional</label>
                    <input required type="email" className="w-full bg-white border border-gray-200 p-4 text-sm focus:border-[#CFAE70] outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">WhatsApp / Celular</label>
                    <input required type="tel" className="w-full bg-white border border-gray-200 p-4 text-sm focus:border-[#CFAE70] outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Área de Atuação Principal</label>
                    <select className="w-full bg-white border border-gray-200 p-4 text-sm focus:border-[#CFAE70] outline-none transition-all">
                      <option>Direito Cível</option>
                      <option>Direito Previdenciário</option>
                      <option>Direito Criminal</option>
                      <option>Direito da Família</option>
                      <option>Outros</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Mensagem / Proposta</label>
                    <textarea rows={4} className="w-full bg-white border border-gray-200 p-4 text-sm focus:border-[#CFAE70] outline-none transition-all"></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-[#091D39] text-white py-5 font-bold uppercase tracking-widest hover:bg-[#CFAE70] hover:text-[#091D39] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Proposta de Parceria"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
