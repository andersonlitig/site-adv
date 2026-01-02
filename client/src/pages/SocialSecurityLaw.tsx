import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, Landmark, Scale, FileText, UserCheck, Calculator, Briefcase, History, HelpCircle, ShieldCheck, Activity } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SocialSecurityLaw() {
  const specializedServices = [
    { title: "Planejamento Previdenciário", icon: <Calculator className="text-[#CFAE70]" size={28} />, description: "Análise estratégica do histórico contributivo para definir o melhor momento e regra para aposentadoria." },
    { title: "Aposentadoria por Idade", icon: <Landmark className="text-[#CFAE70]" size={28} />, description: "Concessão do benefício para segurados que atingiram a idade mínima e carência necessária." },
    { title: "Aposentadoria Especial", icon: <ShieldCheck className="text-[#CFAE70]" size={28} />, description: "Benefício para trabalhadores expostos a agentes nocivos à saúde ou integridade física." },
    { title: "Auxílio-Doença e Invalidez", icon: <Scale className="text-[#CFAE70]" size={28} />, description: "Defesa técnica em benefícios por incapacidade temporária ou permanente negados pela perícia." },
    { title: "BPC/LOAS", icon: <UserCheck className="text-[#CFAE70]" size={28} />, description: "Benefício assistencial para idosos ou pessoas com deficiência em situação de hipossuficiência." },
    { title: "Revisão da Vida Toda", icon: <History className="text-[#CFAE70]" size={28} />, description: "Análise técnica para inclusão de contribuições anteriores a julho de 1994 no cálculo do benefício." },
    { title: "Pensão por Morte", icon: <FileText className="text-[#CFAE70]" size={28} />, description: "Orientação e concessão de benefício para dependentes de segurado falecido." },
    { title: "Salário-Maternidade", icon: <CheckCircle2 className="text-[#CFAE70]" size={28} />, description: "Benefício devido a seguradas por motivo de nascimento de filho, adoção ou guarda judicial." },
    { title: "Regime Próprio de Servidores", icon: <Briefcase className="text-[#CFAE70]" size={28} />, description: "Consultoria para servidores públicos federais, estaduais e municipais sobre suas regras específicas." },
    { title: "Auxílio-Acidente", icon: <Activity className="text-[#CFAE70]" size={28} />, description: "Indenização para segurados que sofreram acidentes e ficaram com sequelas redutoras da capacidade laboral." }
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
              <span className="text-[#CFAE70] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Área de Atuação 02</span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-8 leading-none">Direito Previdenciário</h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">Consultoria técnica estratégica junto ao INSS e regimes próprios para garantir a segurança do seu futuro.</p>
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-8">
                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-12 text-[#091D39]">Estratégia e Consultoria</h2>
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
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 leading-tight">Cálculo de Viabilidade</h3>
                    <p className="text-gray-400 text-sm mb-10 leading-relaxed">Realizamos o estudo técnico do seu CNIS para identificar a regra de transição mais vantajosa.</p>
                    <div className="space-y-4">
                      <a href="https://wa.me/5527999999999" target="_blank" className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all"><MessageCircle size={20} /> WhatsApp</a>
                      <a href="#footer" className="flex items-center justify-center gap-3 w-full bg-[#CFAE70] text-[#091D39] py-4 font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-[#CFAE70]/20">Solicitar Estudo</a>
                    </div>
                  </div>
                  <div className="p-8 bg-white border border-gray-100 flex gap-4">
                    <HelpCircle className="text-[#CFAE70] shrink-0" size={24} />
                    <p className="text-gray-500 text-xs leading-relaxed italic">Análise técnica focada na proteção do segurado e na garantia do melhor benefício previdenciário.</p>
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
