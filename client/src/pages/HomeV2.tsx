import React, { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Send, Calendar, Target, Globe, Users, Shield, FileText, Briefcase, Landmark, ShieldAlert, Scale, ChevronDown, Plus, Minus, History, CalendarCheck, Compass, SearchCheck, Baby, Stethoscope, Bandage, HeartHandshake, FileWarning, FileCheck, Calculator, FileSearch, Award, RefreshCw, ReceiptText, HandHeart, ChevronLeft, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/3em3-vitoria_15_1767549660783.jpg";
import andersonPhoto from "@/assets/anderson-litig.png";

export default function HomeV2() {
  return (
    <div className="font-sans text-[#2C2C2C] bg-white leading-relaxed overflow-x-hidden selection:bg-[#CFAE70] selection:text-[#091D39]">
      <WppFloat />
      <HeaderV2 />
      <main>
        <HeroV2 />
        <StatsBarV2 />
        <TriagemInterativaV2 />
        <ServicesV2 />
        <ProcessV2 />
        <AboutV2 />
        <TestimonialsV2 />
        <BlogV2 />
        <CTAWppV2 />
        <FAQV2 />
        <ContactV2 />
      </main>
      <FooterV2 />
    </div>
  );
}

// Subcomponents

function WppFloat() {
  return (
    <div 
      className="fixed bottom-7 right-7 z-[999] bg-[#25D366] w-14 h-14 flex items-center justify-center cursor-pointer shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:bg-[#1db957] hover:scale-110 rounded-full"
      onClick={() => window.open('https://wa.me/5527999999999','_blank')}
      title="Falar pelo WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-[#091D39] py-2.5 px-8 text-[11px] uppercase tracking-widest text-white/70 text-center relative z-[101]">
      <strong className="text-[#CFAE70] font-bold">Atendimento em todo o Brasil</strong> &mdash; Consulta inicial sem compromisso
    </div>
  );
}

function HeaderV2() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  return (
    <header className={`sticky top-0 z-[100] transition-all duration-300 bg-[#091D39] py-3 shadow-lg`}>
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-8">
          <Link href="/" className="no-underline group flex items-center gap-4">
            <img src={logo} alt="Anderson Litig" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
          </Link>
          <nav className="hidden lg:flex gap-1 justify-center">
            <a className="text-[12px] uppercase tracking-wider font-bold text-white px-4 py-2 border-b-2 border-[#CFAE70] cursor-pointer transition-colors" href="#">Início</a>
            <a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors" href="#servicos">Serviços</a>
            <a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors" href="#sobre">Sobre</a>
            <a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors" href="#faq">Dúvidas</a>
            <a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors" href="#blog">Blog</a>
            <a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors" href="#contato">Contato</a>
          </nav>
          <button 
            className="bg-[#CFAE70] text-[#091D39] text-[12px] uppercase tracking-widest font-bold px-6 py-3 flex items-center gap-2 hover:bg-white transition-all duration-300"
            onClick={() => window.open('https://wa.me/5527999999999','_blank')}
          >
            <Phone size={14} />
            <span className="hidden sm:inline">Falar pelo WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroV2() {
  return (
    <section className="relative bg-[#091D39] py-[100px] md:py-[160px] border-b-4 border-[#CFAE70] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#091D39]/82 z-10" />
        <img 
          src={heroImage} 
          alt="Vitória, ES" 
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="relative z-20 max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="max-w-[700px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 border border-[#CFAE70]/30 bg-[#CFAE70]/10 text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CFAE70] animate-pulse" />
            Direito Previdenciário
          </span>
          <h1 className="text-[clamp(36px,5vw,64px)] font-bold leading-[1.05] text-white tracking-[-0.02em] mb-6 font-heading">
            Seu benefício do INSS<br/>
            <span className="text-[#CFAE70]">em boas mãos.</span>
          </h1>
          <p className="text-[17px] md:text-[18px] text-white/65 leading-[1.65] mb-10 max-w-[520px] font-light">
            Aposentadorias, revisões, auxílio-doença e planejamento previdenciário. Atendimento personalizado para garantir os direitos que você conquistou ao longo da vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button 
              className="bg-[#CFAE70] text-[#091D39] text-[13px] font-bold px-8 py-4 flex items-center justify-center gap-2 hover:bg-white transition-colors tracking-[0.15em] uppercase shadow-xl"
              onClick={() => window.open('https://wa.me/5527999999999','_blank')}
            >
              <Phone size={16} />
              Falar pelo WhatsApp
            </button>
            <button 
              className="bg-transparent text-white text-[13px] font-bold px-8 py-4 border border-white/30 hover:border-white hover:bg-white/5 transition-all tracking-[0.15em] uppercase flex items-center justify-center"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({behavior:'smooth'})}
            >
              Conhecer os serviços
            </button>
          </div>
          <p className="text-[12px] text-white/40 font-light">Resposta em até 2 horas em horário comercial &middot; Atendimento em todo o Brasil</p>
        </motion.div>
      </div>
    </section>
  );
}

function StatsBarV2() {
  const stats = [
    { value: "100+", label: "Casos atendidos" },
    { value: "100%", label: "Digital, sem deslocamento" },
    { value: "Nacional", label: "Atendimento em todo o Brasil" },
    { value: "Especialista", label: "Direito Previdenciário" },
  ];

  return (
    <section className="bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#E0E0DC]">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white px-8 py-8 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-[32px] md:text-[40px] font-bold text-[#091D39] leading-none tracking-[-0.03em] font-heading">{s.value}</span>
              <span className="text-[12px] text-[#767672] mt-2 uppercase tracking-[0.1em] font-medium">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TriagemInterativaV2() {
  const [step, setStep] = useState(1);
  const [problema, setProblema] = useState('');
  const [status, setStatus] = useState('');
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const problemas = [
    { id: 'planejamento', label: 'Planejar minha aposentadoria', sub: 'Quero saber o melhor momento e valor', icon: <Target size={20} />, link: '/v2/planejamento' },
    { id: 'aposentar', label: 'Dar entrada na aposentadoria', sub: 'Tenho contribuições e quero me aposentar', icon: <CalendarCheck size={20} />, link: '/v2/aposentar' },
    { id: 'negado', label: 'Meu benefício foi negado', sub: 'O INSS recusou meu pedido', icon: <ShieldAlert size={20} />, link: '/v2/negado' },
    { id: 'revisao', label: 'Revisar o valor do meu benefício', sub: 'Acho que estou recebendo menos do que deveria', icon: <RefreshCw size={20} />, link: '/v2/ja-aposentado#revisao' },
    { id: 'desconto', label: 'Desconto não autorizado no INSS', sub: 'Cobrança indevida no meu benefício', icon: <ReceiptText size={20} />, link: '/v2/ja-aposentado#descontos' },
    { id: 'incapacidade', label: 'Afastamento por problema de saúde', sub: 'Auxílio-doença ou aposentadoria por invalidez', icon: <Stethoscope size={20} />, link: '#servicos' },
  ];

  const statusOptions = [
    { id: 'nunca', label: 'Nunca dei entrada em nada', sub: 'Ainda não comecei o processo' },
    { id: 'aguardando', label: 'Aguardando resposta do INSS', sub: 'Já protocolei o pedido' },
    { id: 'negativa', label: 'Recebi uma negativa recentemente', sub: 'O INSS indeferiu meu pedido' },
    { id: 'beneficiario', label: 'Já sou beneficiário', sub: 'Recebo aposentadoria, pensão ou auxílio' },
    { id: 'suspenso', label: 'Meu benefício foi suspenso', sub: 'O pagamento parou sem explicação' },
  ];

  const problemaObj = problemas.find(p => p.id === problema);
  const statusObj = statusOptions.find(s => s.id === status);

  const handleSelectProblema = (id: string) => {
    setProblema(id);
    setTimeout(() => setStep(2), 280);
  };

  const handleSelectStatus = (id: string) => {
    setStatus(id);
    setTimeout(() => setStep(3), 280);
  };

  const handleWhatsApp = () => {
    const msg = `Olá! Vim pelo site e gostaria de uma análise do meu caso.\n\n*Assunto:* ${problemaObj?.label || ''}\n*Situação atual:* ${statusObj?.label || ''}\n*Nome:* ${nome}\n*WhatsApp para retorno:* ${whatsapp}\n\nAguardo o contato. Obrigado!`;
    window.open(`https://wa.me/5527999999999?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const steps = ['Problema', 'Situação', 'Contato'];

  return (
    <section id="triagem" className="py-[70px] md:py-[90px] bg-[#091D39] border-b border-white/10 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#CFAE70]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[820px] mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Triagem rápida — 3 passos</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-white tracking-[-0.02em] leading-[1.15] font-heading">Qual é a sua situação com o INSS?</h2>
          <p className="text-[15px] text-white/50 mt-3 font-light">Responda em segundos. No final, o advogado já recebe as informações do seu caso pelo WhatsApp.</p>
        </motion.div>

        {/* Progress bar */}
        <div className="flex items-center gap-0 mb-10 border border-white/10 overflow-hidden">
          {steps.map((label, i) => {
            const stepNum = i + 1;
            const isDone = step > stepNum;
            const isActive = step === stepNum;
            return (
              <div
                key={i}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-500 ${
                  isDone ? 'bg-[#CFAE70]/20 text-[#CFAE70]' :
                  isActive ? 'bg-[#CFAE70] text-[#091D39]' :
                  'bg-white/5 text-white/30'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border ${
                  isDone ? 'border-[#CFAE70] text-[#CFAE70] bg-transparent' :
                  isActive ? 'border-[#091D39] bg-[#091D39] text-[#CFAE70]' :
                  'border-white/20 text-white/30'
                }`}>
                  {isDone ? '✓' : stepNum}
                </span>
                <span className="hidden sm:inline">{label}</span>
              </div>
            );
          })}
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-[13px] text-white/50 uppercase tracking-[0.12em] font-bold mb-5">Passo 1 — Qual é o seu problema?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-white/10 border border-white/10">
                {problemas.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleSelectProblema(p.id)}
                    className={`group text-left bg-[#0B2347] hover:bg-[#CFAE70]/10 p-5 flex items-start gap-4 transition-all duration-200 border-l-4 ${
                      problema === p.id ? 'border-[#CFAE70] bg-[#CFAE70]/10' : 'border-transparent'
                    }`}
                  >
                    <div className={`w-10 h-10 flex items-center justify-center shrink-0 border transition-all duration-200 ${
                      problema === p.id
                        ? 'bg-[#CFAE70] border-[#CFAE70] text-[#091D39]'
                        : 'bg-white/5 border-white/10 text-[#CFAE70] group-hover:bg-[#CFAE70]/20'
                    }`}>
                      {p.icon}
                    </div>
                    <div>
                      <span className={`block text-[14px] font-bold leading-[1.3] transition-colors ${problema === p.id ? 'text-[#CFAE70]' : 'text-white group-hover:text-[#CFAE70]'}`}>{p.label}</span>
                      <span className="block text-[12px] text-white/40 mt-1 font-light">{p.sub}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-[13px] text-white/50 uppercase tracking-[0.12em] font-bold mb-5">Passo 2 — Qual é a sua situação atual no INSS?</p>
              <div className="flex flex-col gap-[1px] bg-white/10 border border-white/10">
                {statusOptions.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleSelectStatus(s.id)}
                    className={`group text-left bg-[#0B2347] hover:bg-[#CFAE70]/10 p-5 flex items-center gap-4 transition-all duration-200 border-l-4 ${
                      status === s.id ? 'border-[#CFAE70] bg-[#CFAE70]/10' : 'border-transparent'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 shrink-0 transition-all duration-200 flex items-center justify-center ${
                      status === s.id ? 'border-[#CFAE70] bg-[#CFAE70]' : 'border-white/20 group-hover:border-[#CFAE70]/50'
                    }`}>
                      {status === s.id && <div className="w-2 h-2 rounded-full bg-[#091D39]" />}
                    </div>
                    <div>
                      <span className={`block text-[14px] font-bold transition-colors ${status === s.id ? 'text-[#CFAE70]' : 'text-white group-hover:text-[#CFAE70]'}`}>{s.label}</span>
                      <span className="block text-[12px] text-white/40 mt-0.5 font-light">{s.sub}</span>
                    </div>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="mt-5 text-[12px] text-white/30 hover:text-white/60 transition-colors font-light flex items-center gap-1">
                ← Voltar
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-[13px] text-white/50 uppercase tracking-[0.12em] font-bold mb-5">Passo 3 — Só mais um passo</p>

              {/* Summary */}
              <div className="bg-white/5 border border-white/10 p-4 mb-6 flex flex-col sm:flex-row gap-3 sm:gap-6">
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-[0.1em] text-[#CFAE70] font-bold block mb-1">Assunto</span>
                  <span className="text-[14px] text-white font-medium">{problemaObj?.label}</span>
                </div>
                <div className="w-px bg-white/10 hidden sm:block" />
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-[0.1em] text-[#CFAE70] font-bold block mb-1">Situação</span>
                  <span className="text-[14px] text-white font-medium">{statusObj?.label}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-white/50 mb-2">Seu nome</label>
                  <input
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#CFAE70] focus:bg-white/10 text-white text-[15px] px-4 py-3.5 outline-none transition-all placeholder:text-white/20 font-light"
                    placeholder="Como deseja ser chamado?"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-white/50 mb-2">Seu WhatsApp</label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#CFAE70] focus:bg-white/10 text-white text-[15px] px-4 py-3.5 outline-none transition-all placeholder:text-white/20 font-light"
                    placeholder="(27) 99999-9999"
                  />
                </div>
              </div>

              <button
                onClick={handleWhatsApp}
                disabled={!nome.trim() || !whatsapp.trim()}
                className="w-full bg-[#25D366] text-white font-bold text-[14px] tracking-[0.1em] uppercase px-8 py-4 flex items-center justify-center gap-3 hover:bg-[#1db957] transition-all shadow-[0_0_30px_rgba(37,211,102,0.25)] hover:shadow-[0_0_40px_rgba(37,211,102,0.4)] disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Enviar para o WhatsApp do Advogado
              </button>
              <p className="text-[12px] text-white/25 text-center mt-4 font-light">Seus dados são usados apenas para personalizar a mensagem no WhatsApp. Nada é armazenado.</p>

              <button onClick={() => setStep(2)} className="mt-4 text-[12px] text-white/30 hover:text-white/60 transition-colors font-light flex items-center gap-1">
                ← Voltar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ServicesV2() {
  const services = [
    { icon: <Award size={20} />, title: "Aposentadorias", desc: "Por idade, tempo de contribuição, especial, rural e por deficiência. Analisamos o seu CNIS e identificamos a modalidade mais vantajosa para o seu caso.", link: "/v2/aposentar" },
    { icon: <Calculator size={20} />, title: "Planejamento Previdenciário", desc: "Quer saber o melhor momento para se aposentar? Fazemos um estudo técnico individualizado do seu CNIS para garantir a melhor aposentadoria possível.", link: "/v2/planejamento" },
    { icon: <RefreshCw size={20} />, title: "Revisão de Benefício", desc: "Já é aposentado e acha que o valor está baixo demais? Analisamos o cálculo do seu benefício e verificamos se há algo a corrigir.", link: "/v2/ja-aposentado#revisao" },
    { icon: <Baby size={20} />, title: "Salário-Maternidade", desc: "Empregadas, autônomas, MEIs e trabalhadoras rurais têm direito ao salário-maternidade pelo INSS. Muitas perdem esse benefício por não saber que têm direito ou por erro no pedido." },
    { icon: <Stethoscope size={20} />, title: "Benefícios por Incapacidade", desc: "Auxílio por Incapacidade Temporária e Aposentadoria por Incapacidade Permanente. Não consegue mais trabalhar por questões de saúde? Garanta o suporte financeiro que você merece." },
    { icon: <Bandage size={20} />, title: "Auxílio-Acidente", desc: "Sofreu um acidente ou doença ocupacional que reduziu sua capacidade de trabalho? Você pode receber o auxílio-acidente enquanto ainda trabalha." },
    { icon: <HeartHandshake size={20} />, title: "BPC/LOAS", desc: "Idoso acima de 65 anos ou pessoa com deficiência em situação de vulnerabilidade? Ajudamos você a conquistar o Benefício de Prestação Continuada mesmo sem ter contribuído ao INSS." },
    { icon: <ReceiptText size={20} />, title: "Descontos Indevidos (RMC e RCC)", desc: "Desconto não autorizado no seu benefício INSS? Atuamos no cancelamento de empréstimos consignados e cobranças abusivas, com direito à restituição dos valores.", link: "/v2/ja-aposentado#descontos" },
    { icon: <HandHeart size={20} />, title: "Pensão por Morte", desc: "Assessoria completa para os dependentes do segurado falecido garantirem o benefício a que têm direito junto ao INSS, com agilidade e atenção em um momento difícil." }
  ];

  return (
    <section id="servicos" className="py-[80px] md:py-[100px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Áreas de atuação</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">O que posso fazer por você</h2>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[520px] font-light mx-auto md:mx-0">Atuação focada em Direito Previdenciário, com atenção técnica e pessoal a cada caso.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC] shadow-sm">
          {services.map((s, i) => (
            s.link ? (
              <Link href={s.link} key={i}>
                <a className="bg-white p-8 flex flex-col border-t-4 border-transparent hover:border-[#CFAE70] hover:bg-[#F4F4F2] transition-colors cursor-pointer group no-underline h-full block">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#091D39]/5 text-[#091D39] group-hover:bg-[#091D39] group-hover:text-[#CFAE70] transition-colors mb-6 shrink-0 rounded">
                    {s.icon}
                  </div>
                  <h3 className="text-[16px] font-bold text-[#091D39] mb-3 leading-[1.3]">{s.title}</h3>
                  <p className="text-[14px] text-[#767672] leading-[1.6] flex-1 font-light">{s.desc}</p>
                  <div className="inline-flex items-center gap-2 mt-6 text-[11px] uppercase tracking-widest font-bold text-[#767672] group-hover:text-[#091D39] transition-colors">
                    Saiba mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </Link>
            ) : (
              <motion.div 
                key={i} 
                className="bg-white p-8 flex flex-col border-t-4 border-transparent hover:border-[#CFAE70] hover:bg-[#F4F4F2] transition-colors cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#091D39]/5 text-[#091D39] group-hover:bg-[#091D39] group-hover:text-[#CFAE70] transition-colors mb-6 shrink-0 rounded">
                  {s.icon}
                </div>
                <h3 className="text-[16px] font-bold text-[#091D39] mb-3 leading-[1.3]">{s.title}</h3>
                <p className="text-[14px] text-[#767672] leading-[1.6] flex-1 font-light">{s.desc}</p>
                <div className="inline-flex items-center gap-2 mt-6 text-[11px] uppercase tracking-widest font-bold text-[#767672] group-hover:text-[#091D39] transition-colors">
                  Saiba mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            )
          ))}
        </div>

        <motion.div 
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#091D39] mt-8 p-6 md:p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-8 bg-[#CFAE70] shrink-0" />
            <span className="text-[15px] text-white/80 font-light">Dúvidas sobre qual serviço se aplica ao seu caso? <strong className="text-white font-semibold">Fale com o advogado.</strong></span>
          </div>
          <button 
            className="bg-[#CFAE70] text-[#091D39] text-[13px] font-bold px-8 py-4 flex items-center justify-center gap-2 whitespace-nowrap hover:bg-white transition-colors shrink-0 uppercase tracking-[0.1em]"
            onClick={() => window.open('https://wa.me/5527999999999','_blank')}
          >
            Falar pelo WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessV2() {
  const steps = [
    { num: "01", title: "Conte seu caso", desc: "Fale pelo WhatsApp com uma breve descrição da sua situação. Sem formulários complexos, sem burocracia — só uma conversa." },
    { num: "02", title: "Analisamos tudo", desc: "Revisamos seu CNIS, documentos e histórico junto ao INSS para identificar os direitos que você tem — inclusive os que você talvez não saiba que existem." },
    { num: "03", title: "Apresentamos a solução", desc: "Você recebe uma orientação clara: qual o melhor caminho (administrativo ou judicial), quais os prazos realistas e o que esperar em cada etapa." },
    { num: "04", title: "Conduzimos até o resultado", desc: "Cuidamos de toda a parte jurídica enquanto você acompanha o andamento. Seu papel é esperar o resultado — o trabalho é nosso." }
  ];

  return (
    <section className="py-[80px] md:py-[100px] bg-[#091D39] relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#CFAE70]/5 skew-x-12 translate-x-1/4" />

      <div className="relative z-10 max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Processo</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-white tracking-[-0.02em] leading-[1.15] font-heading">Como funciona o atendimento</h2>
          <p className="text-[16px] text-white/60 mt-4 max-w-[520px] font-light">Do primeiro contato até a resolução do seu caso.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10 shadow-2xl">
          {steps.map((s, i) => (
            <motion.div 
              key={i} 
              className="bg-[#091D39]/90 backdrop-blur-sm p-8 hover:bg-[#CFAE70]/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-[40px] font-bold text-[#CFAE70] opacity-30 leading-none mb-6 font-heading">{s.num}</div>
              <h4 className="text-[16px] font-bold text-white mb-3 tracking-wide">{s.title}</h4>
              <p className="text-[14px] text-white/50 leading-[1.6] font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutV2() {
  return (
    <section id="sobre" className="py-[80px] md:py-[120px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-[450px_1fr] border border-[#E0E0DC] items-stretch shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="min-h-[400px] lg:min-h-[550px] overflow-hidden bg-[#091D39] relative">
            <img 
              src={andersonPhoto}
              alt="Anderson Litig — Advogado Previdenciário em Serra/ES" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          <div className="p-8 md:p-[64px_56px] flex flex-col justify-center bg-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4F4F2] -z-10" />
            
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Sobre o advogado</span>
            <h2 className="text-[clamp(28px,3vw,36px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] mb-6 font-heading">Anderson Litig</h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-[15px] text-[#767672] leading-[1.75] font-light">Sou advogado inscrito na OAB/ES sob o nº 40.152, pós-graduado em Direito Previdenciário, com atuação exclusiva nessa área. Atendo clientes em Serra, na Grande Vitória e em todo o Brasil de forma 100% digital — por videochamada e WhatsApp, sem que você precise sair de casa.</p>
              <p className="text-[15px] text-[#767672] leading-[1.75] font-light">Você não é um número. Cada caso que atendo tem uma história por trás — anos de trabalho, contribuições ao longo de uma vida inteira, e a expectativa de receber o que é seu por direito. Por isso, atuo com atenção técnica e cuidado humano em cada etapa.</p>
              <p className="text-[15px] text-[#767672] leading-[1.75] font-light">A especialização em Direito Previdenciário me permite acompanhar de perto as constantes mudanças legislativas e as teses jurisprudenciais que impactam diretamente os benefícios do INSS — um campo que exige atualização permanente para uma atuação verdadeiramente eficaz.</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#091D39] bg-[#F4F4F2] px-3 py-2 border border-[#E0E0DC]">Pós-graduado em Dir. Previdenciário</span>
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#091D39] bg-[#F4F4F2] px-3 py-2 border border-[#E0E0DC]">OAB/ES 40.152</span>
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#091D39] bg-[#F4F4F2] px-3 py-2 border border-[#E0E0DC]">Provimento 205/2021 CFOAB</span>
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#091D39] bg-[#F4F4F2] px-3 py-2 border border-[#E0E0DC]">Atendimento 100% Digital</span>
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#091D39] bg-[#F4F4F2] px-3 py-2 border border-[#E0E0DC]">Atuação Nacional</span>
            </div>
            
            <div>
              <button 
                className="inline-flex items-center gap-3 bg-[#091D39] text-white text-[13px] font-bold tracking-[0.1em] uppercase px-8 py-4 hover:bg-[#CFAE70] hover:text-[#091D39] transition-all"
                onClick={() => document.getElementById('contato')?.scrollIntoView({behavior:'smooth'})}
              >
                Agendar uma consulta <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-[#CFAE70]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialsV2() {
  const testimonials = [
    { name: "Maria L.", city: "Vitória, ES", text: "Tentei dar entrada na aposentadoria sozinha e o INSS negou. O Dr. Anderson analisou tudo e em poucos meses conseguimos reverter na via administrativa. Atendimento rápido e muito claro em cada etapa.", stars: 5 },
    { name: "João C.", city: "Serra, ES", text: "Estava com desconto de consignado que eu nunca autorizei. Fui orientado a cancelar e recuperar os valores cobrados indevidamente. Nunca pensei que fosse possível sem precisar ir a lugar nenhum.", stars: 5 },
    { name: "Ana R.", city: "São Paulo, SP", text: "Atendimento 100% pelo WhatsApp e videochamada. Moro em São Paulo e não precisei me deslocar. A análise do meu CNIS mostrou que eu tinha direito a uma aposentadoria especial que nem sabia que existia.", stars: 5 },
    { name: "Carlos M.", city: "Guarapari, ES", text: "O INSS negou meu auxílio-doença alegando que eu não cumpria carência. O Dr. Anderson identificou os períodos que eles tinham desconsiderado e a decisão foi revertida. Muito obrigado.", stars: 5 },
    { name: "Rosângela F.", city: "Vila Velha, ES", text: "Minha aposentadoria rural foi negada duas vezes. Com o auxílio do Dr. Anderson juntamos os documentos certos e foi aprovada judicialmente. Recomendo de olhos fechados.", stars: 5 },
    { name: "Antônio B.", city: "Cachoeiro de Itapemirim, ES", text: "Fui orientado sobre o planejamento da minha aposentadoria especial por atividade insalubre. Com a análise técnica, descobri que podia me aposentar dois anos antes do que imaginava.", stars: 5 },
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;

  const go = (idx: number) => setCurrent((idx + total) % total);
  const prev = () => { go(current - 1); resetTimer(); };
  const next = () => { go(current + 1); resetTimer(); };

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!paused) startTimer();
  };

  const startTimer = () => {
    intervalRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 5000);
  };

  useEffect(() => {
    if (!paused) startTimer();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused]);

  const visible = testimonials[current % total];

  return (
    <section className="py-[80px] md:py-[100px] bg-[#091D39] border-b border-white/10 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[#CFAE70]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1160px] mx-auto px-4 md:px-8 relative z-10">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">O que dizem nossos clientes</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-white tracking-[-0.02em] leading-[1.15] font-heading">Resultados reais.<br className="hidden md:block"/>Histórias reais.</h2>
          </motion.div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 border border-white/20 flex items-center justify-center text-white hover:bg-[#CFAE70] hover:border-[#CFAE70] hover:text-[#091D39] transition-all duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { go(i); resetTimer(); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-[#CFAE70]' : 'w-1.5 bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 border border-white/20 flex items-center justify-center text-white hover:bg-[#CFAE70] hover:border-[#CFAE70] hover:text-[#091D39] transition-all duration-200"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Card */}
        <div
          className="overflow-hidden border border-white/10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-[#0B2347] p-10 md:p-14 flex flex-col gap-8 max-w-[780px] mx-auto"
            >
              <StarRating count={visible.stars} />
              <p className="text-[18px] md:text-[20px] text-white/85 leading-[1.75] font-light italic">
                "{visible.text}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 bg-[#CFAE70]/20 border border-[#CFAE70]/30 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[15px] font-bold text-[#CFAE70]">{visible.name.charAt(0)}</span>
                </div>
                <div>
                  <span className="block text-[15px] font-bold text-white">{visible.name}</span>
                  <span className="block text-[13px] text-white/40 font-light">{visible.city}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function CTAWppV2() {
  return (
    <section className="py-[72px] md:py-[90px] bg-[#CFAE70] relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #091D39 0, #091D39 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />

      <div className="relative z-10 max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left flex-1">
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#091D39]/60 mb-3">Análise inicial gratuita · Sem compromisso</span>
            <h2 className="text-[clamp(26px,3.5vw,38px)] font-bold text-[#091D39] tracking-[-0.02em] mb-3 font-heading leading-[1.1]">Não deixe o tempo correr<br className="hidden md:block" /> contra você.</h2>
            <p className="text-[16px] text-[#091D39]/70 font-light max-w-xl">Benefício negado? Valor baixo? Desconto indevido? Fale agora com o advogado e entenda seus direitos em minutos.</p>
          </div>
          <div className="flex flex-col items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              className="bg-[#091D39] text-white text-[14px] font-bold tracking-[0.1em] uppercase px-10 py-4 flex items-center justify-center gap-3 hover:bg-[#0B2347] transition-all shadow-[0_8px_32px_rgba(9,29,57,0.25)] hover:shadow-[0_12px_40px_rgba(9,29,57,0.35)] w-full md:w-auto"
              onClick={() => window.open('https://wa.me/5527999999999','_blank')}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Falar com o Advogado Agora
            </button>
            <span className="text-[11px] text-[#091D39]/50 font-light">Seg–Sex, 9h às 18h · Resposta em até 2 horas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BlogV2() {
  const posts = [
    { cat: "Aposentadoria", title: "Como calcular seu tempo de contribuição para o INSS: guia completo 2025", desc: "Entenda quais períodos contam e o que fazer se houver lacunas no CNIS.", meta: "15 Mai 2024", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" },
    { cat: "Benefício negado", title: "O INSS negou meu benefício: quais são os próximos passos", desc: "Recurso administrativo ou ação judicial? Entenda as opções disponíveis.", meta: "10 Mai 2024", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800" },
    { cat: "Descontos indevidos", title: "RMC no benefício INSS: como identificar e cancelar descontos não autorizados", desc: "Saiba como agir quando há desconto não autorizado no seu benefício.", meta: "05 Mai 2024", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop" }
  ];

  return (
    <section id="blog" className="py-[80px] md:py-[100px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Blog jurídico</span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">Conheça seus direitos</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-[12px] font-bold tracking-widest uppercase text-[#091D39] bg-transparent px-6 py-3 border border-[#091D39] hover:bg-[#091D39] hover:text-white transition-all">
              Ver todos os artigos <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <motion.div 
              key={i} 
              className="bg-white border border-[#E0E0DC] cursor-pointer hover:shadow-xl transition-all duration-500 group flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#091D39]/20 group-hover:bg-transparent transition-colors z-10" />
                <img src={p.img} alt={p.title} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute bottom-0 left-0 bg-[#091D39] text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 z-20">
                  {p.cat}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[#CFAE70] text-[10px] font-bold tracking-widest uppercase mb-4">
                  <Calendar size={12} /> {p.meta}
                </div>
                <h3 className="text-[18px] font-bold text-[#091D39] leading-[1.3] mb-3 font-heading group-hover:text-[#CFAE70] transition-colors">{p.title}</h3>
                <p className="text-[14px] text-[#767672] leading-[1.6] flex-1 font-light">{p.desc}</p>
                <div className="mt-6 pt-6 border-t border-[#E0E0DC] flex items-center justify-between text-[#091D39] group-hover:border-[#CFAE70]/30 transition-colors">
                  <span className="text-[11px] font-bold tracking-widest uppercase">Ler Artigo</span>
                  <ArrowRight size={16} className="text-[#CFAE70] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQV2() {
  const faqs = [
    { q: "Meu benefício foi negado pelo INSS. Ainda posso recorrer?", a: "Sim — e é importante agir rápido. Existem dois caminhos: o recurso administrativo (dentro do próprio INSS) e a ação judicial. Na maioria dos casos, identificamos vícios no indeferimento que permitem reverter a decisão. Quanto antes você agir, melhores as chances e maior o período retroativo de benefício a receber." },
    { q: "Preciso pagar para ter meu caso analisado?", a: "Não. A análise inicial do caso — incluindo revisão do CNIS e dos motivos de negativa — é gratuita e sem compromisso. Os honorários profissionais são definidos somente quando há viabilidade de atuação e você decide prosseguir com o processo." },
    { q: "Posso ser atendido sem precisar sair de casa?", a: "Sim. Todo o processo é 100% digital. Atendemos por WhatsApp e videochamada, recebemos documentos pelo computador ou celular e acompanhamos o processo eletronicamente. Você não precisa se deslocar em nenhum momento — seja de Vitória, do interior ou de qualquer outro estado do Brasil." },
    { q: "Posso pedir revisão de uma aposentadoria que já recebo?", a: "Sim. Se você já é aposentado e acha que o valor está baixo, há diferentes teses de revisão que podem aumentar o benefício. Analisamos o cálculo realizado pelo INSS, verificamos as competências utilizadas e identificamos se houve erro ou prejuízo. O prazo para revisão é de 10 anos a partir da concessão." },
    { q: "Quanto tempo demora para resolver um processo previdenciário?", a: "Na via administrativa (recurso dentro do INSS), o prazo costuma ser de 3 a 12 meses. Na via judicial, varia conforme a comarca e o tipo de ação. Casos mais simples, por tutela de urgência, podem ser resolvidos em semanas. Apresentamos sempre uma estimativa realista antes de iniciar qualquer procedimento." },
    { q: "Tenho um desconto no meu benefício que não autorizei. O que faço?", a: "Esse é um dos problemas mais comuns entre aposentados. Empréstimos consignados contratados de forma fraudulenta (RMC e RCC) podem ser cancelados e os valores indevidamente descontados devolvidos. Atuamos no cancelamento, no bloqueio de novos descontos e na recuperação dos montantes pagos." },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Perguntas Frequentes</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">Dúvidas comuns</h2>
        </motion.div>
        
        <div className="flex flex-col gap-4">
          {faqs.map((f, i) => (
            <motion.div 
              key={i} 
              className={`bg-white border ${openIdx === i ? 'border-[#CFAE70] shadow-md' : 'border-[#E0E0DC]'} transition-all duration-300`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div 
                className="p-6 md:p-8 cursor-pointer flex items-center justify-between gap-4"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className={`text-[16px] font-bold transition-colors ${openIdx === i ? 'text-[#CFAE70]' : 'text-[#091D39]'}`}>{f.q}</span>
                <span className={`w-8 h-8 flex items-center justify-center rounded-full shrink-0 transition-colors ${openIdx === i ? 'bg-[#CFAE70] text-white' : 'bg-[#F4F4F2] text-[#091D39]'}`}>
                  {openIdx === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </div>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0 text-[15px] text-[#767672] leading-[1.7] font-light border-t border-[#F4F4F2] mt-2 pt-6">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactV2() {
  return (
    <section id="contato" className="py-[80px] md:py-[120px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] border border-[#E0E0DC] shadow-xl items-stretch"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-8 md:p-[64px_48px] bg-[#091D39] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] opacity-5 bg-cover bg-center mix-blend-overlay" />
            
            <div className="relative z-10">
              <h2 className="text-[clamp(28px,3vw,36px)] font-bold text-white tracking-[-0.02em] mb-4 font-heading border-l-4 border-[#CFAE70] pl-6">Contato Direto</h2>
              <p className="text-[16px] text-white/60 leading-[1.65] font-light mb-12 pl-7">Estamos prontos para oferecer o suporte jurídico técnico que o seu caso exige.</p>
              
              <div className="space-y-8 pl-7">
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#CFAE70] group-hover:border-[#CFAE70] transition-colors">
                    <Phone className="w-5 h-5 text-[#CFAE70] group-hover:text-[#091D39] transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#CFAE70] mb-1">Telefone / WhatsApp</span>
                    <strong className="text-[18px] font-bold text-white">+55 27 99999-9999</strong>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#CFAE70] group-hover:border-[#CFAE70] transition-colors">
                    <Mail className="w-5 h-5 text-[#CFAE70] group-hover:text-[#091D39] transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#CFAE70] mb-1">E-mail Institucional</span>
                    <strong className="text-[18px] font-bold text-white break-all">contato@andersonlitig.adv.br</strong>
                  </div>
                </div>

                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#CFAE70] group-hover:border-[#CFAE70] transition-colors">
                    <MapPin className="w-5 h-5 text-[#CFAE70] group-hover:text-[#091D39] transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#CFAE70] mb-1">Localização</span>
                    <strong className="text-[18px] font-bold text-white">Serra/ES &middot; Atendimento Nacional</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-[64px_56px] bg-white">
            <h3 className="text-[24px] font-bold text-[#091D39] mb-8 font-heading">Envie uma mensagem</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Seu nome completo</label>
                <input type="text" className="w-full p-4 border border-[#E0E0DC] bg-[#F4F4F2] font-sans text-[15px] text-[#091D39] outline-none transition-all focus:bg-white focus:border-[#CFAE70] focus:ring-1 focus:ring-[#CFAE70]/50" placeholder="Como deseja ser chamado?" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Seu E-mail</label>
                  <input type="email" className="w-full p-4 border border-[#E0E0DC] bg-[#F4F4F2] font-sans text-[15px] text-[#091D39] outline-none transition-all focus:bg-white focus:border-[#CFAE70] focus:ring-1 focus:ring-[#CFAE70]/50" placeholder="exemplo@email.com" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">WhatsApp</label>
                  <input type="tel" className="w-full p-4 border border-[#E0E0DC] bg-[#F4F4F2] font-sans text-[15px] text-[#091D39] outline-none transition-all focus:bg-white focus:border-[#CFAE70] focus:ring-1 focus:ring-[#CFAE70]/50" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Como podemos ajudar?</label>
                <textarea className="w-full min-h-[120px] resize-y p-4 border border-[#E0E0DC] bg-[#F4F4F2] font-sans text-[15px] text-[#091D39] outline-none transition-all focus:bg-white focus:border-[#CFAE70] focus:ring-1 focus:ring-[#CFAE70]/50" placeholder="Descreva brevemente a sua situação..." />
              </div>
              <button type="submit" className="w-full bg-[#091D39] text-white font-sans text-[13px] font-bold tracking-[0.15em] uppercase p-5 mt-4 hover:bg-[#CFAE70] hover:text-[#091D39] transition-all cursor-pointer border-none flex items-center justify-center gap-3">
                Enviar Mensagem <Send size={16} />
              </button>
              <div className="text-[12px] text-[#767672] mt-2 leading-[1.5] text-center font-light">Seus dados estão seguros e serão utilizados apenas para retorno do contato.</div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FooterV2() {
  return (
    <footer className="bg-[#091D39]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 py-16 border-b border-white/10">
          <div>
            <Link href="/" className="inline-block mb-4">
              <img src={logo} alt="Anderson Litig" className="h-12 w-auto brightness-0 invert opacity-90" />
            </Link>
            <div className="text-[12px] font-bold tracking-widest uppercase text-[#CFAE70] mb-4">OAB/ES nº 40.152</div>
            <p className="text-[14px] text-white/50 leading-[1.75] max-w-[320px] font-light">Atendimento jurídico previdenciário especializado com atuação administrativa e judicial. Protegendo seus direitos frente ao INSS com ética e transparência.</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase text-white mb-6">Navegação</h4>
            <a href="#" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Início</a>
            <a href="#servicos" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Serviços</a>
            <a href="#sobre" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Sobre o Advogado</a>
            <a href="#blog" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Blog Jurídico</a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase text-white mb-6">Áreas</h4>
            <a href="#" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Aposentadorias</a>
            <a href="#" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Planejamento</a>
            <a href="#" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Revisões</a>
            <a href="#" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Auxílio-doença</a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase text-white mb-6">Contato</h4>
            <div className="flex items-center gap-3 mb-4">
              <Phone size={16} className="text-[#CFAE70]" />
              <span className="text-[14px] font-light text-white/80">(27) 99999-9999</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Mail size={16} className="text-[#CFAE70]" />
              <span className="text-[14px] font-light text-white/80 break-all">contato@andersonlitig.adv.br</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#CFAE70] shrink-0 mt-0.5" />
              <span className="text-[14px] font-light text-white/80 leading-relaxed">Atendimento Nacional 100% Digital<br/>Base: Serra / ES</span>
            </div>
          </div>
        </div>
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-white/40 font-light">
          <span>&copy; {new Date().getFullYear()} Anderson Litig. Todos os direitos reservados.</span>
          <span>Desenvolvido com excelência técnica e visual.</span>
        </div>
      </div>
    </footer>
  );
}