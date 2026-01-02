import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, Car, AlertTriangle, ShieldCheck, Map, FileWarning, Search, Zap, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TrafficLaw() {
  const specializedServices = [
    { title: "Defesa em Lei Seca", icon: <AlertTriangle className="text-[#CFAE70]" size={28} />, description: "Recursos especializados em casos de bafômetro ou recusa de teste, analisando vícios procedimentais." },
    { title: "Suspensão da CNH", icon: <ShieldCheck className="text-[#CFAE70]" size={28} />, description: "Defesa contra processos administrativos por acúmulo de pontos ou infrações auto-suspensivas." },
    { title: "Cassação da Habilitação", icon: <FileWarning className="text-[#CFAE70]" size={28} />, description: "Atuação técnica para evitar a perda definitiva do direito de dirigir e garantir a ampla defesa." },
    { title: "Recurso de Multas Graves", icon: <Search className="text-[#CFAE70]" size={28} />, description: "Análise de nulidades em autos de infração gravíssimos que geram consequências severas." },
    { title: "Excesso de Velocidade", icon: <Zap className="text-[#CFAE70]" size={28} />, description: "Verificação da aferição técnica de radares e conformidade com as normas do CONTRAN." },
    { title: "Acidentes com Vítimas", icon: <Car className="text-[#CFAE70]" size={28} />, description: "Apoio jurídico especializado na esfera administrativa de trânsito em casos de colisões graves." },
    { title: "Transporte de Carga", icon: <Map className="text-[#CFAE70]" size={28} />, description: "Defesa técnica para transportadoras e motoristas profissionais em multas de balança e peso." },
    { title: "Recurso JARI e CETRAN", icon: <CheckCircle2 className="text-[#CFAE70]" size={28} />, description: "Interposição de recursos em todas as instâncias administrativas dos órgãos de trânsito." }
  ];

  return (
    <div className="min-h-screen bg-[#E8E8E8] text-[#0D0D0D]">
      <Navbar />
      <main className="pt-32">
        <section className="bg-[#091D39] py-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#CFAE70]/5 skew-x-12 translate-x-1/4" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <Link href="/"><a className="inline-flex items-center gap-2 text-[#CFAE70] mb-8 hover:text-white transition-colors group uppercase text-xs font-bold tracking-widest"><ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar para o início</a></Link>
            <div className="max-w-4xl">
              <span className="text-[#CFAE70] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Área de Atuação 03</span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-8 leading-none">Direito de Trânsito</h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">Defesa técnica especializada para condutores, focada na preservação do direito de dirigir.</p>
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-8">
                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-12 text-[#091D39]">Recursos e Defesa</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  {specializedServices.map((service, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="mb-6">{service.icon}</div>
                      <h3 className="font-bold uppercase tracking-wider text-[#091D39] mb-4 text-lg leading-tight">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-[#0D0D0D] p-10 text-white border-l-8 border-[#CFAE70]">
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 leading-tight">Análise de Pontuação</h3>
                    <p className="text-gray-400 text-sm mb-10 leading-relaxed">Verificamos a validade de multas e processos administrativos para proteger seu prontuário.</p>
                    <div className="space-y-4">
                      <a href="https://wa.me/5527999999999" target="_blank" className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all"><MessageCircle size={20} /> WhatsApp</a>
                      <a href="#footer" className="flex items-center justify-center gap-3 w-full bg-[#CFAE70] text-[#091D39] py-4 font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-[#CFAE70]/20">Verificar CNH</a>
                    </div>
                  </div>
                  <div className="p-8 bg-white border border-gray-100 flex gap-4">
                    <HelpCircle className="text-[#CFAE70] shrink-0" size={24} />
                    <p className="text-gray-500 text-xs leading-relaxed italic">Atuação técnica fundamentada na legalidade dos atos administrativos e no Código de Trânsito Brasileiro.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
