import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, HeartPulse, ShieldCheck, FileText, Activity, Stethoscope, PillBottle, Ambulance, Scale } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function HealthLaw() {
  const specializedServices = [
    {
      title: "Negativas de Cobertura",
      icon: <ShieldCheck className="text-[#CFAE70]" size={24} />,
      description: "Atuação técnica em casos de recusa de cirurgias, exames de alta complexidade e materiais especiais por parte das operadoras."
    },
    {
      title: "Medicamentos de Alto Custo",
      icon: <PillBottle className="text-[#CFAE70]" size={24} />,
      description: "Esclarecimentos sobre o acesso a fármacos de alto custo, oncológicos ou não listados no rol básico, fundamentados em prescrição médica."
    },
    {
      title: "Home Care e Internação",
      icon: <HeartPulse className="text-[#CFAE70]" size={24} />,
      description: "Explicação sobre os critérios para a concedência de assistência domiciliar integral e suporte multidisciplinar fora do ambiente hospitalar."
    },
    {
      title: "Reajustes de Mensalidade",
      icon: <FileText className="text-[#CFAE70]" size={24} />,
      description: "Análise informativa sobre a legalidade de aumentos por mudança de faixa etária (idosos) ou sinistralidade acima dos índices permitidos."
    },
    {
      title: "Responsabilidade Médica",
      icon: <Stethoscope className="text-[#CFAE70]" size={24} />,
      description: "Análise técnica de prontuários e procedimentos em situações de suposto erro médico, hospitalar ou odontológico."
    },
    {
      title: "Tratamentos de Fertilização",
      icon: <Activity className="text-[#CFAE70]" size={24} />,
      description: "Orientação sobre a cobertura de tratamentos de reprodução assistida quando há indicação médica específica."
    },
    {
      title: "Cirurgias Reparadoras",
      icon: <Ambulance className="text-[#CFAE70]" size={24} />,
      description: "Atuação em casos de negativa para cirurgias pós-bariátrica ou outros procedimentos de caráter reparador não estético."
    },
    {
      title: "Manutenção de Aposentados",
      icon: <Scale className="text-[#CFAE70]" size={24} />,
      description: "Garantia do direito de manutenção do plano de saúde para ex-empregados aposentados ou demitidos sem justa causa."
    }
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
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">Defesa técnica especializada para garantir o acesso integral ao tratamento médico e a proteção intransigente do paciente.</p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-bold font-heading uppercase tracking-tighter mb-8 text-[#091D39]">Serviços Consultivos e Técnicos</h2>
                <div className="prose prose-lg text-[#2C2C2C] font-light leading-relaxed max-w-none mb-12">
                  <p>O Direito da Saúde é um pilar fundamental para assegurar que a dignidade da pessoa humana prevaleça sobre interesses comerciais. Nossa atuação abrange a análise minuciosa de contratos de planos de saúde e a verificação de conformidade com as normas da ANS e do Código de Defesa do Consumidor.</p>
                  <p>Buscamos soluções ágeis e tecnicamente fundamentadas para casos que envolvem urgência médica, garantindo que o tempo não seja um obstáculo para o restabelecimento da saúde.</p>
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
                    <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 leading-tight">Avaliação Estratégica do Caso</h3>
                    <p className="text-gray-400 text-sm mb-10">Inicie um atendimento consultivo para compreender os direitos aplicáveis à sua situação específica e as melhores vias técnicas.</p>
                    <div className="space-y-4">
                      <a href="https://wa.me/5527999999999" target="_blank" className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all"><MessageCircle size={20} /> WhatsApp</a>
                      <a href="#footer" className="flex items-center justify-center gap-3 w-full bg-[#CFAE70] text-[#091D39] py-4 font-bold uppercase tracking-widest hover:bg-white transition-all">Iniciar Atendimento</a>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-8 border border-gray-200 bg-white">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#091D39] mb-4">Nota Informativa</h4>
                    <p className="text-gray-500 text-xs leading-relaxed italic">Atuação pautada pela transparência e pelo compromisso técnico na defesa dos direitos dos usuários do sistema de saúde.</p>
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
