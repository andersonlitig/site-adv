import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <section id="introduction" className="py-24 md:py-32 bg-[#E8E8E8]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-t-4 border-[#CFAE70] pt-6 inline-block"
            >
              <h2 className="text-[#0D0D0D] text-4xl font-bold font-heading uppercase tracking-tighter">
                O Escritório
              </h2>
            </motion.div>
          </div>

          <div className="md:col-span-8">
            <motion.p 
              className="text-2xl md:text-4xl text-[#2C2C2C] font-light leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Com base sólida e atuação digital em <span className="font-semibold text-[#091D39]">território nacional</span>, oferecemos defesa técnica rigorosa combinada com uma <span className="italic font-serif">abordagem humanizada</span> para o cidadão (B2C).
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="bg-white p-8 border border-[#2C2C2C]/10 hover:border-[#091D39] transition-colors duration-300 group">
                <div className="w-12 h-1 bg-[#091D39] mb-6 group-hover:w-full transition-all duration-500" />
                <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-[#091D39]">Alcance Nacional</h3>
                <p className="text-gray-600">Atendimento 100% digital com a mesma proximidade do presencial, atendendo demandas em todo o Brasil.</p>
              </div>
              
              <div className="bg-white p-8 border border-[#2C2C2C]/10 hover:border-[#091D39] transition-colors duration-300 group">
                <div className="w-12 h-1 bg-[#CFAE70] mb-6 group-hover:w-full transition-all duration-500" />
                <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-[#091D39]">Alta Performance</h3>
                <p className="text-gray-600">Foco em resultados e estratégias jurídicas personalizadas para cada caso específico.</p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}
