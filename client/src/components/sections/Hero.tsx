import ReactPlayer from "react-player";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#091D39]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
        <div className="w-full h-full scale-[1.35]"> {/* Scale up to avoid black bars/controls showing */}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=q1tGIyQMdg8"
            playing
            loop
            muted
            playsinline
            width="100%"
            height="100%"
            config={{
              youtube: {
                playerVars: { showinfo: 0, controls: 0, modestbranding: 1, disablekb: 1 },
              },
            }}
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-white/20 bg-[#091D39]/40 backdrop-blur-sm p-8 md:p-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight font-heading mb-6 tracking-tight">
            Soluções Jurídicas de Alta Performance para Todo o Brasil.
          </h1>
          <h2 className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Estratégia, técnica e inovação na defesa do seu Patrimônio, Saúde e Direitos.
          </h2>
          
          <motion.a
            href="https://wa.me/5527999999999" // Example generic number, should be replaced if real number provided
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent text-white border border-[#CFAE70] px-8 py-4 text-sm md:text-base font-bold uppercase tracking-[0.2em] hover:bg-[#CFAE70] hover:text-[#091D39] transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Agendar Atendimento Online
          </motion.a>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
