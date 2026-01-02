import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "O Escritório", href: "#introduction" },
    { name: "Áreas de Atuação", href: "#services" },
    { name: "Diferenciais", href: "#introduction" }, // Mapping to Intro for now as Diferenciais is part of the story
    { name: "Contato", href: "#footer" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-white/10 ${
        isScrolled ? "bg-[#091D39] shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-white font-heading font-bold text-lg tracking-wider uppercase border-2 border-transparent hover:border-white/20 p-2 transition-all">
            Anderson Litig <span className="text-[#CFAE70] mx-1">|</span> Advocacia
          </a>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-[#CFAE70] text-sm uppercase tracking-widest font-medium transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#CFAE70] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#footer"
            className="bg-[#CFAE70] text-[#091D39] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#091D39] transition-colors duration-300"
          >
            Fale com o Advogado
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 border border-white/20 hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#091D39] border-t border-white/10"
        >
          <div className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-lg uppercase tracking-widest font-medium border-l-2 border-transparent hover:border-[#CFAE70] pl-4 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#footer"
              className="bg-[#CFAE70] text-[#091D39] px-6 py-4 text-center text-sm font-bold uppercase tracking-widest mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agendar Consulta
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
