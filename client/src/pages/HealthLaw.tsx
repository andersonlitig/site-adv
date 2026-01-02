import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, HeartPulse, ShieldCheck, FileText, Activity, Stethoscope, PillBottle, Ambulance, Scale, ClipboardList, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function HealthLaw() {
  const specializedServices = [
    { title: "Negativas de Tratamentos e Cirurgias", icon: <ShieldCheck className="text-[#CFAE70]" size={28} />, description: "Atuação técnica em casos de recusa de procedimentos cirúrgicos e tratamentos essenciais por operadoras." },
    { title: "Medicamentos de Alto Custo", icon: <PillBottle className="text-[#CFAE70]" size={28} />, description: "Acesso a fármacos oncológicos ou de alto valor financeiro indispensáveis ao tratamento e não fornecidos." },
    { title: "Reajustes Abusivos de Mensalidade", icon: <FileText className="text-[#CFAE70]" size={28} />, description: "Análise de aumentos por faixa etária ou sinistralidade acima dos índices permitidos pela ANS." },
    { title: "Erro Médico e Hospitalar", icon: <Stethoscope className="text-[#CFAE70]" size={28} />, description: "Responsabilidade civil em situações de negligência, imperícia ou imprudência no atendimento médico." },
    { title: "Home Care (Internação Domiciliar)", icon: <HeartPulse className="text-[#CFAE70]" size={28} />, description: "Garantia de assistência domiciliar integral e suporte multidisciplinar prescrito por médicos." },
    { title: "Cancelamento Indevido de Plano", icon: <ShieldCheck className="text-[#CFAE70]" size={28} />, description: "Defesa contra rescisões unilaterais e arbitrárias de contratos de planos de saúde." },
    { title: "Próteses e Órteses", icon: <Ambulance className="text-[#CFAE70]" size={28} />, description: "Negativas de fornecimento de stents, marcapassos e outros materiais ligados a atos cirúrgicos." },
    { title: "Tratamento de Fertilização", icon: <Activity className="text-[#CFAE70]" size={28} />, description: "Cobertura de tratamentos de reprodução assistida conforme indicação clínica específica." },
    { title: "Internação Psiquiátrica", icon: <ClipboardList className="text-[#CFAE70]" size={28} />, description: "Garantia de custeio para tratamentos de dependência química ou transtornos mentais graves." },
    { title: "Manutenção Pós-Demitido/Aposentado", icon: <Scale className="text-[#CFAE70]" size={28} />, description: "Continuidade do plano de saúde após o encerramento do vínculo empregatício sob certas condições." }
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
              <span className="text-[#CFAE70] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Área de Atuação 01</span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-8 leading-none">Direito da Saúde</h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">Defesa técnica especializada para garantir o acesso integral ao tratamento médico e a proteção do paciente.</p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-8">
                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-12 text-[#091D39]">Atuação Especializada</h2>
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
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 leading-tight">Avaliação Estratégica</h3>
                    <p className="text-gray-400 text-sm mb-10 leading-relaxed">Inicie um atendimento consultivo para compreender os direitos aplicáveis ao seu caso.</p>
                    <div className="space-y-4">
                      <a href="https://wa.me/5527999999999" target="_blank" className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all"><MessageCircle size={20} /> WhatsApp</a>
                      <a href="#footer" className="flex items-center justify-center gap-3 w-full bg-[#CFAE70] text-[#091D39] py-4 font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-[#CFAE70]/20">Falar com Advogado</a>
                    </div>
                  </div>
                  
                  <div className="p-8 bg-white border border-gray-100 flex gap-4">
                    <HelpCircle className="text-[#CFAE70] shrink-0" size={24} />
                    <p className="text-gray-500 text-xs leading-relaxed italic">Análise técnica pautada pela transparência e pelo compromisso com o restabelecimento da saúde do paciente.</p>
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
