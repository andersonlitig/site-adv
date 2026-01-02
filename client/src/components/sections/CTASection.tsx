import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 bg-[#091D39] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#CFAE70]/5 skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-heading uppercase tracking-tighter mb-4 leading-tight">
              Busca uma avaliação estratégica para o seu caso?
            </h2>
            <p className="text-gray-400 text-base font-light max-w-xl">
              Inicie um atendimento consultivo para compreender seus direitos e as melhores vias jurídicas aplicáveis à sua situação específica.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <a 
              href="#footer"
              className="inline-block bg-[#CFAE70] text-[#091D39] px-10 py-4 font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300"
            >
              Falar com Advogado
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
