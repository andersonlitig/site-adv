import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#091D39] text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#CFAE70]/5 skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-2 border-[#CFAE70]/30 p-8 md:p-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-tighter mb-8 leading-tight">
              Busca uma avaliação estratégica <br className="hidden md:block" /> para o seu caso?
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Inicie um atendimento consultivo para compreender seus direitos e as melhores vias jurídicas aplicáveis à sua situação específica.
            </p>
            <a 
              href="#footer"
              className="inline-block bg-[#CFAE70] text-[#091D39] px-12 py-5 font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-2xl"
            >
              Falar com Advogado
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
