import { motion } from "framer-motion";
import { Shield, Target, Users, Globe } from "lucide-react";

export default function HowWeAct() {
  const pillars = [
    {
      icon: <Target size={24} />,
      title: "Alta Performance",
      description: "Estratégias jurídicas personalizadas com foco absoluto em resultados concretos e defesa rigorosa."
    },
    {
      icon: <Globe size={24} />,
      title: "Atuação Digital",
      description: "Aproveitamos o máximo da tecnologia para oferecer atendimento ágil e eficiente em todo o território nacional."
    },
    {
      icon: <Users size={24} />,
      title: "Foco no Cliente",
      description: "Tratamos cada caso como único, com uma abordagem humanizada e comunicação transparente em todas as etapas."
    },
    {
      icon: <Shield size={24} />,
      title: "Defesa Intransigente",
      description: "Rigor técnico e ética inabalável na proteção do seu patrimônio, da sua saúde e dos seus direitos fundamentais."
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
                Nossa metodologia combina a <span className="font-bold text-[#091D39]">tradição jurídica</span> com a <span className="italic">inovação tecnológica</span>, garantindo uma defesa técnica de elite para o cidadão moderno.
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

            <motion.div 
              className="mt-16 p-10 bg-[#091D39] text-white flex flex-col md:flex-row items-center justify-between gap-8 border-l-8 border-[#CFAE70]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="max-w-md">
                <h4 className="text-xl font-bold uppercase tracking-widest mb-2">Informações Institucionais</h4>
                <p className="text-gray-400 text-sm italic leading-relaxed">Conteúdo estritamente informativo, destinado a esclarecer a atuação técnica do escritório sob as normas do Código de Ética da OAB.</p>
              </div>
              <a 
                href="#footer"
                className="bg-[#CFAE70] text-[#091D39] px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all whitespace-nowrap"
              >
                Canais de Atendimento
              </a>
            </motion.div>
          </div>
        
        </div>
      </div>
    </section>
  );
}
