import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Como Atuamos", href: "#how-we-act" },
    { name: "Áreas de Atuação", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Contato", href: "#footer" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#091D39]/95 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-8"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-white font-heading font-bold text-xl tracking-tighter uppercase group">
            <span className="group-hover:text-[#CFAE70] transition-colors duration-300 text-sm md:text-xl">ANDERSON LITIG</span>
            <span className="text-[#CFAE70] mx-2 font-light">|</span>
            <span className="font-light text-xs md:text-sm tracking-[0.3em] opacity-80">ADVOCACIA</span>
          </a>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white text-[10px] uppercase tracking-[0.25em] font-bold transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#CFAE70] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#footer"
            className="bg-[#CFAE70] text-[#091D39] px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#091D39] transition-all duration-500 shadow-lg shadow-black/20"
          >
            Fale com o Advogado
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 border border-white/20 hover:bg-[#CFAE70] hover:text-[#091D39] transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-[100] md:hidden bg-[#091D39] flex flex-col p-10"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white border border-white/20 p-4">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white text-3xl font-heading font-bold uppercase tracking-tighter hover:text-[#CFAE70] transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#footer"
                className="bg-[#CFAE70] text-[#091D39] px-6 py-6 text-center text-sm font-bold uppercase tracking-[0.2em] mt-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
