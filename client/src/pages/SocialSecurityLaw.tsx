import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, Landmark, Scale, FileText, UserCheck, Calculator, Briefcase, History } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SocialSecurityLaw() {
  const specializedServices = [
    { title: "Planejamento Previdenciário", icon: <Calculator className="text-[#CFAE70]" size={24} />, description: "Estudo detalhado do histórico contributivo para definir a estratégia de aposentadoria mais vantajosa." },
    { title: "Aposentadorias", icon: <Landmark className="text-[#CFAE70]" size={24} />, description: "Análise completa para aposentadoria por idade, tempo de contribuição, especial e por deficiência." },
    { title: "Benefícios por Incapacidade", icon: <Scale className="text-[#CFAE70]" size={24} />, description: "Auxílio-doença, aposentadoria por invalidez e auxílio-acidente com análise de laudos médicos." },
    { title: "BPC/LOAS", icon: <UserCheck className="text-[#CFAE70]" size={24} />, description: "Benefício de prestação continuada para idosos e pessoas com deficiência em situação de vulnerabilidade." },
    { title: "Regimes Próprios (RPPS)", icon: <Briefcase className="text-[#CFAE70]" size={24} />, description: "Consultoria técnica focada em servidores públicos e suas regras específicas de inativação." },
    { title: "Revisão de Benefícios", icon: <History className="text-[#CFAE70]" size={24} />, description: "Identificação de erros no cálculo inicial para buscar a majoração da renda mensal do benefício." },
    { title: "Tempo Especial", icon: <FileText className="text-[#CFAE70]" size={24} />, description: "Conversão de tempo trabalhado em condições prejudiciais à saúde para antecipação do benefício." },
    { title: "Pensão por Morte", icon: <CheckCircle2 className="text-[#CFAE70]" size={24} />, description: "Orientação técnica sobre o direito de dependentes e as novas regras de acumulação de benefícios." }
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
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">Consultoria técnica estratégica junto ao INSS e regimes próprios para garantir segurança no seu futuro.</p>
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-8 text-[#091D39]">Análise Técnica e Planejamento</h2>
                <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none mb-12">
                  <p>O cenário previdenciário exige atualização constante e rigor técnico na análise do CNIS e de documentos probatórios. Atuamos para garantir que cada período contributivo seja valorizado, corrigindo distorções administrativas.</p>
                  <p>O planejamento previdenciário antecipado é a ferramenta mais eficaz para evitar surpresas negativas e assegurar a maior renda mensal possível dentro das regras vigentes.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
                  {specializedServices.map((service, idx) => (
                    <div key={idx} className="bg-white p-8 group hover:bg-[#091D39] transition-all duration-500 cursor-default">
                      <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                      <h3 className="font-bold uppercase tracking-wider text-[#091D39] group-hover:text-white mb-3 transition-colors">{service.title}</h3>
                      <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="sticky top-32">
                  <div className="bg-[#0D0D0D] p-10 text-white border-l-8 border-[#CFAE70]">
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 leading-tight">Estudo de Viabilidade</h3>
                    <p className="text-gray-400 text-sm mb-10 leading-relaxed">Realizamos cálculos complexos e estudos de viabilidade técnica para identificar a melhor regra de transição aplicável ao seu caso.</p>
                    <div className="space-y-4">
                      <a href="https://wa.me/5527999999999" target="_blank" className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all"><MessageCircle size={20} /> WhatsApp</a>
                      <a href="#footer" className="flex items-center justify-center gap-3 w-full bg-[#CFAE70] text-[#091D39] py-4 font-bold uppercase tracking-widest hover:bg-white transition-all">Iniciar Atendimento</a>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-8 border border-gray-200 bg-white">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#091D39] mb-4">Aviso Institucional</h4>
                    <p className="text-gray-500 text-xs leading-relaxed italic">Análise técnica pautada pela transparência e pelo rigor normativo dos órgãos previdenciários.</p>
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
