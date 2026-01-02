import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, Car, AlertTriangle, ShieldCheck, Map, FileWarning, Search, Zap } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TrafficLaw() {
  const specializedServices = [
    { title: "Lei Seca", icon: <AlertTriangle className="text-[#CFAE70]" size={24} />, description: "Defesa técnica especializada em casos de recusa ou realização do teste do bafômetro." },
    { title: "Suspensão da CNH", icon: <ShieldCheck className="text-[#CFAE70]" size={24} />, description: "Recursos contra processos administrativos de suspensão por pontuação ou infrações específicas." },
    { title: "Cassação do Direito", icon: <FileWarning className="text-[#CFAE70]" size={24} />, description: "Atuação técnica para evitar a perda definitiva da habilitação e garantir o devido processo legal." },
    { title: "Multas Gravíssimas", icon: <Search className="text-[#CFAE70]" size={24} />, description: "Análise minuciosa de nulidades em autos de infração que geram consequências severas ao condutor." },
    { title: "Excesso de Velocidade", icon: <Zap className="text-[#CFAE70]" size={24} />, description: "Verificação da conformidade técnica de radares e equipamentos de medição conforme as normas do CONTRAN." },
    { title: "Acidentes e Danos", icon: <Car className="text-[#CFAE70]" size={24} />, description: "Apoio jurídico na esfera administrativa e cível para reparação de danos decorrentes de sinistros." },
    { title: "Regularização de CNH", icon: <Map className="text-[#CFAE70]" size={24} />, description: "Orientação sobre processos de bloqueio, impedimentos e desbloqueio do prontuário do condutor." },
    { title: "Transporte de Cargas", icon: <CheckCircle2 className="text-[#CFAE70]" size={24} />, description: "Consultoria técnica sobre multas de balança, excesso de peso e normas específicas de transporte rodoviário." }
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
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">Defesa técnica especializada focada na legalidade dos atos administrativos e preservação do seu direito de dirigir.</p>
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-8 text-[#091D39]">Atuação Administrativa e Técnica</h2>
                <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none mb-12">
                  <p>O Direito de Trânsito exige uma análise minuciosa de cada autuação, confrontando os atos administrativos com as normas vigentes do Código de Trânsito Brasileiro e resoluções do CONTRAN.</p>
                  <p>Qualquer falha formal no auto de infração ou no processo administrativo pode ensejar a nulidade da penalidade, protegendo o condutor de autuações irregulares.</p>
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
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 leading-tight">Análise de Nulidades</h3>
                    <p className="text-gray-400 text-sm mb-10 leading-relaxed">Verificamos tecnicamente a validade de multas e processos administrativos para identificar possíveis erros formais dos órgãos de trânsito.</p>
                    <div className="space-y-4">
                      <a href="https://wa.me/5527999999999" target="_blank" className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all"><MessageCircle size={20} /> WhatsApp</a>
                      <a href="#footer" className="flex items-center justify-center gap-3 w-full bg-[#CFAE70] text-[#091D39] py-4 font-bold uppercase tracking-widest hover:bg-white transition-all">Iniciar Atendimento</a>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-8 border border-gray-200 bg-white">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#091D39] mb-4">Transparência Técnica</h4>
                    <p className="text-gray-500 text-xs leading-relaxed italic">Atuação fundamentada estritamente nas diretrizes técnicas do Código de Trânsito Brasileiro.</p>
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
