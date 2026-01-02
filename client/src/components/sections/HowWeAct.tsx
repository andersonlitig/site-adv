import { motion } from "framer-motion";
import { Shield, Target, Users, Globe } from "lucide-react";

export default function HowWeAct() {
  const pillars = [
    {
      icon: <Target size={24} />,
      title: "Excelência Técnica",
      description: "Aplicação rigorosa do conhecimento jurídico com foco na melhor estratégia consultiva e contenciosa."
    },
    {
      icon: <Globe size={24} />,
      title: "Inovação Jurídica",
      description: "Utilizamos recursos tecnológicos para garantir celeridade e transparência no acompanhamento das demandas."
    },
    {
      icon: <Users size={24} />,
      title: "Atendimento Humanizado",
      description: "Cada situação é tratada com empatia e clareza, mantendo o cliente sempre informado sobre os atos processuais."
    },
    {
      icon: <Shield size={24} />,
      title: "Rigor Ético",
      description: "Atuação pautada pela transparência e absoluta observância às normas de conduta profissional."
    }
  ];

  return (
    <section id="how-we-act" className="py-24 md:py-32 bg-[#E8E8E8]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          
          <div className="md:col-span-4 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-t-4 border-[#CFAE70] pt-8"
            >
              <h2 className="text-[#0D0D0D] text-5xl font-bold font-heading uppercase tracking-tighter leading-none mb-6">
                Como <br /> Atuamos
              </h2>
              <p className="text-[#2C2C2C] text-lg font-light leading-relaxed">
                Nossa metodologia combina o <span className="font-bold text-[#091D39]">conhecimento jurídico</span> com a <span className="italic">eficiência tecnológica</span>, garantindo uma atuação técnica especializada voltada à preservação de direitos.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-gray-200 border border-gray-200">
              {pillars.map((pillar, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-white p-12 hover:bg-[#091D39] group transition-all duration-500 cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="text-[#CFAE70] mb-8 group-hover:scale-110 transition-transform duration-500">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-[#091D39] group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-300 transition-colors text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}
