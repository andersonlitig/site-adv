import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, ShieldAlert, CheckCircle2, AlertCircle, FileText, Calendar, ChevronDown, Plus, Minus, Mail, MapPin, Search, Clock, Target, Info, Users, Briefcase, FileSearch, ShieldCheck, Scale, Globe, FileSignature, CheckSquare, FastForward, HeadphonesIcon, CalendarCheck, Award, BookOpen } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/aposentadoria_hero.jpg";
import andersonImg from "@/assets/anderson-suit.jpg";

export default function AposentarV2() {
  return (
    <div className="font-sans text-[#2C2C2C] bg-white leading-relaxed overflow-x-hidden selection:bg-[#CFAE70] selection:text-[#091D39]">
      <WppFloat />
      <HeaderV2 />
      <main>
        <Breadcrumb />
        <HeroAposentar />
        <AlertaAposentar />
        <TiposAposentadoria />
        <EntendaSeusDireitos />
        <TriagemAposentadoriaV2 />
        <VantagensAdvogado />
        <AutoridadeAdvogado />
        <ComoFunciona />
        <CTAFinal />
        <FAQAposentar />
        <ContatoAposentar />
      </main>
      <FooterV2 />
    </div>
  );
}

function WppFloat() {
  return (
    <div 
      className="fixed bottom-7 right-7 z-[999] bg-[#25D366] w-14 h-14 flex items-center justify-center cursor-pointer shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:bg-[#1db957] hover:scale-110 rounded-full"
      onClick={() => window.open('https://wa.me/5527992942888','_blank')}
      title="Falar pelo WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
    </div>
  );
}

function HeaderV2() {
  return (
    <header className="sticky top-0 z-[100] transition-all duration-300 bg-[#091D39] py-3 shadow-lg">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-8">
          <Link href="/v2" className="no-underline group flex items-center gap-4">
            <img src={logo} alt="Anderson Litig" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
          </Link>
          <nav className="hidden lg:flex gap-1 justify-center">
            <Link href="/v2"><a className="text-[12px] uppercase tracking-wider font-bold text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors">Início</a></Link>
            <Link href="/v2/planejamento"><a className="text-[12px] uppercase tracking-wider font-bold text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors">Planejamento</a></Link>
            <Link href="/v2#servicos"><a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors">Serviços</a></Link>
            <Link href="/v2#sobre"><a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors">Sobre</a></Link>
            <Link href="/v2#contato"><a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors">Contato</a></Link>
          </nav>
          <button 
            className="bg-[#CFAE70] text-[#091D39] text-[12px] uppercase tracking-widest font-bold px-6 py-3 flex items-center gap-2 hover:bg-white transition-all duration-300"
            onClick={() => window.open('https://wa.me/5527992942888','_blank')}
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

function Breadcrumb() {
  return (
    <div className="bg-[#F4F4F2] border-b border-[#E0E0DC] py-3">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-[#767672]">
          <Link href="/v2"><a className="hover:text-[#091D39] transition-colors">Início</a></Link>
          <span className="opacity-50">/</span>
          <Link href="/v2#servicos"><a className="hover:text-[#091D39] transition-colors">Serviços</a></Link>
          <span className="opacity-50">/</span>
          <span className="text-[#091D39] font-bold">Concessão de Aposentadoria</span>
        </div>
      </div>
    </div>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────

// ─── HERO (dark) ─────────────────────────────────────────────────────────────
function HeroAposentar() {
  return (
    <section className="relative bg-[#091D39] min-h-[82vh] pt-[120px] pb-[90px] md:pt-[160px] md:pb-[120px] border-b-4 border-[#CFAE70] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#091D39]/82 z-10" />
        <img src={heroImage} alt="Aposentadoria pelo INSS" className="w-full h-full object-cover scale-105" />
      </div>
      <div className="relative z-20 max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-[720px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#CFAE70]/30 bg-[#CFAE70]/10 text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CFAE70] animate-pulse" />
            Aposentadorias pelo INSS
          </span>
          <h1 className="text-[clamp(34px,4.8vw,58px)] font-bold leading-[1.04] text-white tracking-[-0.025em] mb-6 font-heading">
            Trabalhou a vida toda.<br/>
            <span className="text-[#CFAE70]">Garanta o que é seu.</span>
          </h1>
          <p className="text-[17px] md:text-[19px] text-white/70 leading-[1.65] mb-4 max-w-[600px] font-light">
            O INSS processa milhares de pedidos por dia — e frequentemente comete erros. Pedir aposentadoria sem análise técnica prévia pode significar receber permanentemente menos do que você tem direito.
          </p>
          <p className="text-[14px] text-[#CFAE70]/80 leading-[1.6] mb-10 max-w-[540px] font-light">
            Verificamos seu CNIS, calculamos o melhor valor e acompanhamos todo o processo — sem que você precise sair de casa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-[#CFAE70] text-[#091D39] text-[13px] font-bold px-8 py-4 flex items-center justify-center gap-3 hover:bg-white transition-all tracking-[0.15em] uppercase shadow-[0_0_15px_rgba(207,174,112,0.3)] group"
              onClick={() => document.getElementById('triagem')?.scrollIntoView({behavior:'smooth'})}
            >
              Verificar meu direito
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="bg-transparent text-white text-[13px] font-bold px-8 py-4 border border-white/30 hover:border-white hover:bg-white/5 transition-all tracking-[0.15em] uppercase flex items-center justify-center"
              onClick={() => document.getElementById('tipos')?.scrollIntoView({behavior:'smooth'})}
            >
              Ver tipos de aposentadoria
            </button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-white/40 text-[10px] font-bold tracking-widest uppercase">
            <span className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#CFAE70]" /> 100% Online</span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#CFAE70]" /> Sem deslocamento</span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#CFAE70]" /> Atendimento Nacional</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── ALERTA (#F4F4F2) ────────────────────────────────────────────────────────
function AlertaAposentar() {
  return (
    <section className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block">O risco do pedido sem análise</span>
          <h2 className="text-[clamp(26px,3vw,38px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">
            O simulador do INSS não escolhe o melhor benefício para você.
          </h2>
          <p className="text-[16px] text-[#767672] leading-[1.7] font-light">
            Muitos trabalhadores clicam em "Pedir Aposentadoria" acreditando que o sistema vai calcular o melhor valor automaticamente. <strong className="text-[#091D39]">Isso é um equívoco que custa caro — e muitas vezes não tem conserto.</strong>
          </p>
          <p className="text-[16px] text-[#767672] leading-[1.7] font-light">
            O INSS concede a regra mais rápida disponível — não a mais vantajosa. Uma aposentadoria pedida sem análise pode significar receber centenas de reais a menos por mês, <strong className="text-[#091D39]">pelo resto da vida.</strong>
          </p>
          <div className="pt-4 flex justify-center">
            <button
              className="bg-[#091D39] text-white text-[13px] font-bold px-8 py-4 flex items-center gap-2 hover:bg-[#CFAE70] hover:text-[#091D39] transition-colors tracking-[0.15em] uppercase group"
              onClick={() => document.getElementById('triagem')?.scrollIntoView({behavior:'smooth'})}
            >
              Verificar meu caso <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── VANTAGENS (white) ────────────────────────────────────────────────────────
function VantagensAdvogado() {
  const itens = [
    { icon: <FileSignature size={20} />, title: "Documentação impecável", desc: "Organizamos toda a papelada exigida para que o INSS não tenha motivos para negar." },
    { icon: <Target size={20} />, title: "Cálculo prévio", desc: "Conferimos se o valor que o INSS vai oferecer está correto antes de você aceitar." },
    { icon: <FastForward size={20} />, title: "Agilidade no processo", desc: "Pedidos bem instruídos e com a documentação certa tramitam mais rápido." },
    { icon: <HeadphonesIcon size={20} />, title: "Suporte total", desc: "Acompanhamos do primeiro clique até o dinheiro cair na conta, resolvendo qualquer exigência." }
  ];

  return (
    <section className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Por que ter um advogado para pedir a aposentadoria</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">O INSS analisa milhares de pedidos por dia.<br className="hidden md:block"/>Nós garantimos que o seu não seja só mais um número.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC] shadow-lg">
          {itens.map((item, i) => (
            <motion.div 
              key={i} 
              className="bg-white p-8 border-t-4 border-transparent hover:border-[#CFAE70] hover:bg-[#091D39] transition-colors duration-500 cursor-pointer group flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 bg-[#091D39]/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors text-[#091D39] group-hover:text-[#CFAE70]">
                {item.icon}
              </div>
              <h3 className="text-[16px] font-bold text-[#091D39] mb-3 leading-[1.4] group-hover:text-white">{item.title}</h3>
              <p className="text-[14px] text-[#767672] leading-[1.6] flex-1 font-light group-hover:text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── AUTORIDADE (#F4F4F2) ────────────────────────────────────────────────────
function AutoridadeAdvogado() {
  return (
    <section className="py-[80px] md:py-[100px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">

          <motion.div
            className="relative w-full bg-[#091D39] overflow-hidden border border-[#E0E0DC] shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={andersonImg} alt="Dr. Anderson Litig" className="w-full h-auto object-contain opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#091D39]/40 via-transparent to-transparent" />
          </motion.div>

          <motion.div className="space-y-6 pt-4" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block">Quem vai cuidar do seu caso</span>
            <h2 className="text-[clamp(26px,3vw,38px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">
              Decisão previdenciária séria não começa com protocolo.
            </h2>
            <p className="text-[17px] text-[#091D39]/60 font-light leading-[1.4]">Começa com análise técnica individualizada.</p>
            <p className="text-[16px] text-[#767672] leading-[1.7] font-light">
              Sou <strong className="text-[#091D39]">Anderson Litig</strong>, advogado previdenciário inscrito na <strong className="text-[#091D39]">OAB/ES sob o nº 40.152</strong>. Cada caso tem uma história por trás — anos de trabalho e a expectativa de receber o que é seu por direito. Atuo com atenção técnica e cuidado humano em cada etapa, do primeiro contato até o resultado.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { icon: <BookOpen size={18} />, label: "Pós-graduado em Direito Previdenciário" },
                { icon: <Award size={18} />, label: "Membro da Comissão de Direito Previdenciário — OAB Serra/ES" },
                { icon: <Globe size={18} />, label: "Atendimento 100% digital em todo o Brasil" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-[#F4F4F2] border border-[#E0E0DC] px-5 py-4 shadow-sm hover:border-[#CFAE70] hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 bg-[#091D39]/5 flex items-center justify-center shrink-0 text-[#091D39]">
                    {item.icon}
                  </div>
                  <span className="text-[14px] font-medium text-[#091D39] leading-[1.4]">{item.label}</span>
                  <CheckCircle2 size={15} className="text-[#CFAE70] ml-auto shrink-0" />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── TIPOS (white) ────────────────────────────────────────────────────────────
function EntendaSeusDireitos() {
  return (
    <section className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block mb-5">Entenda seus direitos</span>
            <h2 className="text-[clamp(30px,4vw,46px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">
              Qual é a melhor forma de se aposentar?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-5"
          >
            <p className="text-[17px] text-[#767672] leading-[1.75] font-light">
              Para o mesmo histórico de trabalho, diferentes formas de aposentadoria podem resultar em valores mensais muito diferentes. O INSS não faz essa comparação — ele concede a regra mais rápida, não a mais vantajosa.
            </p>
            <p className="text-[17px] text-[#767672] leading-[1.75] font-light">
              Analisamos todas as modalidades disponíveis para o seu perfil e calculamos qual garante o maior valor — antes de você dar entrada.
            </p>
            <button
              className="bg-[#091D39] text-white text-[13px] font-bold px-8 py-4 flex items-center gap-2 hover:bg-[#CFAE70] hover:text-[#091D39] transition-colors tracking-[0.15em] uppercase group"
              onClick={() => document.getElementById('triagem')?.scrollIntoView({behavior:'smooth'})}
            >
              Calcular meu melhor benefício <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TiposAposentadoria() {
  const tipos = [
    { icon: <Clock size={20} />, title: "Por Idade", desc: "Para quem chegou à idade mínima e contribuiu por pelo menos 15 anos. A opção mais simples e comum para trabalhadores urbanos e rurais.", detail: "65 anos (homem) · 62 anos (mulher)" },
    { icon: <Target size={20} />, title: "Por Tempo de Contribuição", desc: "Pelas Regras de Transição (Pedágio 50%, Pedágio 100%, Pontos ou Idade Mínima). Pode ser possível se aposentar antes dos 60 anos para quem começou cedo.", detail: "Mais vantajosa para quem começou cedo" },
    { icon: <Briefcase size={20} />, title: "Aposentadoria Especial", desc: "Para quem trabalhou exposto a agentes nocivos (ruído, calor, químicos). Permite aposentadoria mais cedo, mas exige documentação técnica rigorosa.", detail: "Precisa de PPP e LTCAT" },
    { icon: <Globe size={20} />, title: "Trabalhador Rural", desc: "Para quem viveu e trabalhou no campo. Possível sem contribuições formais, apenas com comprovação do trabalho em regime de economia familiar.", detail: "55 anos (mulher) · 60 anos (homem)" },
    { icon: <Users size={20} />, title: "Pessoa com Deficiência", desc: "Redução no tempo de contribuição ou na idade para pessoas com deficiência leve, moderada ou grave, avaliada por perícia biopsicossocial.", detail: "Avaliação médica necessária" },
    { icon: <MapPin size={20} />, title: "Trabalhei no Campo e na Cidade", desc: "É possível somar períodos rurais e urbanos. Isso pode garantir a aposentadoria para quem sozinho não atingiria os anos mínimos em nenhum dos dois.", detail: "Combina períodos urbanos e rurais" }
  ];

  return (
    <section id="tipos" className="py-[80px] md:py-[100px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Tipos de aposentadoria</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">Qual se encaixa no seu caso?</h2>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[600px] font-light">
            Cada pessoa tem uma situação diferente. Veja os tipos mais comuns — analisamos qual é o melhor para você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {tipos.map((t, i) => (
            <motion.div
              key={i}
              className="p-8 border-t-4 border-transparent flex flex-col transition-colors duration-300 bg-[#F4F4F2] hover:bg-white hover:border-[#CFAE70] hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-5 bg-[#091D39]/5 text-[#091D39]">
                {t.icon}
              </div>
              <h3 className="text-[16px] font-bold mb-3 leading-[1.4] text-[#091D39]">{t.title}</h3>
              <p className="text-[14px] leading-[1.65] font-light flex-1 text-[#767672]">{t.desc}</p>
              {t.detail && (
                <div className="mt-4 text-[12px] flex items-center gap-2 text-[#767672]">
                  <span className="w-1.5 h-1.5 bg-[#CFAE70] rounded-full shrink-0" />
                  {t.detail}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function AntesDarEntrada() {
  const verificacoes = [
    { n: "01", t: "Checar se todos os períodos de trabalho estão registrados", d: "O INSS pode estar ignorando tempo que você trabalhou — sem carteira, como autônomo, no campo ou em regime diferente. Cada período reconhecido pode aumentar o valor final. A conferência do histórico completo é o primeiro passo." },
    { n: "02", t: "Calcular qual modalidade resulta no maior valor", d: "Para o mesmo perfil de segurado, diferentes formas de aposentadoria podem resultar em valores mensais bem diferentes. A comparação entre as opções disponíveis é feita com base na legislação vigente e no seu histórico específico." },
    { n: "03", t: "Verificar se você trabalhou em condições especiais", d: "Se em algum momento da sua vida você trabalhou exposto a riscos à saúde, isso pode mudar completamente a forma mais vantajosa de se aposentar. Esse direito some depois que o benefício é concedido sem considerá-lo." },
    { n: "04", t: "Confirmar se a data escolhida é a ideal", d: "A data de entrada no pedido de aposentadoria afeta o valor. Em alguns casos, esperar um pouco mais ou antecipar a data pode aumentar o benefício mensal de forma permanente. Essa análise é feita caso a caso." }
  ];

  return (
    <section className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Antes de dar entrada</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">Estas verificações precisam<br className="hidden md:block"/>ser feitas antes do pedido</h2>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[600px] font-light mx-auto md:mx-0">
            São detalhes que parecem pequenos mas fazem grande diferença no valor final — e que não têm como corrigir depois que o benefício for concedido.
          </p>
        </motion.div>

        <div className="flex flex-col border border-[#E0E0DC]">
          {verificacoes.map((v, i) => (
            <motion.div 
              key={i} 
              className="flex border-b border-[#E0E0DC] last:border-0 hover:bg-white transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-[60px] md:w-[80px] border-r border-[#E0E0DC] flex items-start justify-center shrink-0 pt-8">
                <span className="text-[20px] font-bold text-[#CFAE70] font-heading opacity-50">{v.n}</span>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-[16px] font-bold text-[#091D39] mb-2">{v.t}</h4>
                <p className="text-[14px] text-[#767672] leading-[1.65] font-light">{v.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── COMO FUNCIONA (dark #091D39) ─────────────────────────────────────────────
function ComoFunciona() {
  const etapas = [
    { n: "Etapa 01", t: "Você conta a sua história de trabalho", d: "Onde trabalhou, por quanto tempo, se foi com carteira ou sem, se passou pelo campo, por conta própria ou em lugar perigoso. Não precisa saber o que isso significa juridicamente — só nos contar o que viveu. A gente faz a interpretação técnica." },
    { n: "Etapa 02", t: "Analisamos o seu histórico e calculamos as opções", d: "Verificamos seus registros no INSS, identificamos o que pode estar faltando e calculamos o valor estimado do benefício em cada modalidade disponível para o seu perfil. Você recebe uma visão clara do que é possível." },
    { n: "Etapa 03", t: "Você recebe uma orientação clara sobre o que fazer", d: "Qual é a melhor opção, quanto você pode esperar receber, se tem alguma pendência a resolver antes de dar entrada e qual é o prazo ideal. Tudo explicado sem enrolação e sem juridiquês." },
    { n: "Etapa 04", t: "Damos entrada e acompanhamos até o final", d: "Cuidamos de toda a papelada e ficamos de olho no processo junto ao INSS. Se aparecer qualquer exigência ou problema no caminho, resolvemos. Você fica tranquilo até o benefício ser aprovado." }
  ];

  return (
    <section id="como-funciona" className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Passo a passo</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">O que acontece depois que<br className="hidden md:block"/>você entra em contato</h2>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[600px] font-light mx-auto md:mx-0">
            Quatro etapas simples, da análise até o benefício aprovado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {etapas.map((e, i) => (
            <motion.div 
              key={i} 
              className="bg-white p-8 border-t-4 border-transparent hover:border-[#CFAE70] hover:bg-white transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#CFAE70] mb-3 block">{e.n}</span>
              <h3 className="text-[16px] font-bold text-[#091D39] mb-3 leading-[1.4]">{e.t}</h3>
              <p className="text-[14px] text-[#767672] leading-[1.65] font-light">{e.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TRIAGEM 3 PASSOS ──────────────────────────────────────────────────────

// ─── TRIAGEM (dark #091D39, continuous with ComoFunciona) ─────────────────────
function TriagemAposentadoriaV2() {
  const [step, setStep] = useState(1);
  const [problema, setProblema] = useState('');
  const [status, setStatus] = useState('');
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const problemas = [
    { id: 'planejar',    label: 'Quero planejar minha aposentadoria',        sub: 'Ainda não chegou a hora, quero me preparar',          icon: <Target size={20} /> },
    { id: 'dar_entrada', label: 'Quero dar entrada agora',                    sub: 'Acho que já tenho os requisitos',                     icon: <CalendarCheck size={20} /> },
    { id: 'perigoso',   label: 'Trabalhei em local perigoso ou insalubre',   sub: 'Quero verificar o direito à aposentadoria especial',   icon: <ShieldAlert size={20} /> },
    { id: 'rural',      label: 'Trabalhei no campo (zona rural)',             sub: 'Quero entender meu direito à aposentadoria rural',     icon: <Globe size={20} /> },
    { id: 'autonomo',   label: 'Trabalhei por conta própria / autônomo',     sub: 'MEI, freelancer, profissional liberal',               icon: <Briefcase size={20} /> },
    { id: 'deficiencia',label: 'Tenho deficiência comprovada',               sub: 'Aposentadoria da pessoa com deficiência',              icon: <Users size={20} /> },
  ];

  const getStatusOptions = (id: string) => {
    switch(id) {
      case 'planejar': return [
        { id: 'trabalhando',  label: 'Ainda estou trabalhando e contribuindo',  sub: 'Quero saber quando e com quanto me aposento' },
        { id: 'parei',        label: 'Parei de contribuir há algum tempo',       sub: 'Quero saber se ainda tenho direito' },
        { id: 'duvida_regra', label: 'Dúvida sobre qual regra usar',             sub: 'Atingi requisitos mas não sei qual é a melhor' },
      ];
      case 'dar_entrada': return [
        { id: 'nunca',      label: 'Ainda não dei entrada em nada',          sub: 'Quero começar o processo do zero' },
        { id: 'aguardando', label: 'Já protocolei e aguardo o INSS',         sub: 'Preciso acompanhar ou acelerar' },
        { id: 'negado',     label: 'Já tentei antes e foi negado',           sub: 'Quero tentar novamente com orientação' },
      ];
      case 'perigoso': return [
        { id: 'confirmado', label: 'Sei que trabalhei em condição especial', sub: 'Tenho documentos ou passarei por exame' },
        { id: 'incerto',    label: 'Não sei se minha função era especial',   sub: 'Quero verificar se tenho esse direito' },
        { id: 'convertido', label: 'Tenho períodos especiais e comuns',      sub: 'Carreira com atividades mistas' },
      ];
      case 'rural': return [
        { id: 'sempre_rural',   label: 'Trabalhei a vida toda no campo',         sub: 'Nunca tive carteira assinada' },
        { id: 'rural_urbano',   label: 'Trabalhei no campo e na cidade',          sub: 'Tenho períodos rurais e urbanos' },
        { id: 'sem_documentos', label: 'Tenho pouco ou nenhum documento',         sub: 'Não sei como comprovar o tempo rural' },
      ];
      case 'autonomo': return [
        { id: 'contribuiu',    label: 'Contribuí ao INSS como autônomo',         sub: 'Guias DARF ou carnê do INSS' },
        { id: 'nao_contrib',   label: 'Não contribuí regularmente',              sub: 'Quero saber o que ainda é possível fazer' },
        { id: 'sem_registro',  label: 'Trabalhei anos sem nenhum registro',      sub: 'Só por conta própria, sem CLT nem CNPJ' },
      ];
      case 'deficiencia': return [
        { id: 'grave',      label: 'Deficiência grave ou total',      sub: 'Laudo ou perícia já confirmou' },
        { id: 'moderada',   label: 'Deficiência moderada',            sub: 'Tenho laudo mas não sei o grau exato' },
        { id: 'sem_laudo',  label: 'Ainda não tenho laudo ou perícia',sub: 'Quero entender como comprovar' },
      ];
      default: return [
        { id: 'nunca',      label: 'Ainda não dei entrada',           sub: 'Quero começar o processo' },
        { id: 'aguardando', label: 'Aguardando resposta do INSS',     sub: 'Já protocolei o pedido' },
        { id: 'negativa',   label: 'Recebi uma negativa',             sub: 'O INSS indeferiu meu pedido' },
      ];
    }
  };

  const statusOptions = getStatusOptions(problema);
  const problemaObj = problemas.find(p => p.id === problema);
  const statusObj   = statusOptions.find(s => s.id === status);

  const handleSelectProblema = (id: string) => { setProblema(id); setTimeout(() => setStep(2), 280); };
  const handleSelectStatus   = (id: string) => { setStatus(id);   setTimeout(() => setStep(3), 280); };

  const handleWhatsApp = () => {
    const msg = [
      'Olá! Vim pelo site (Aposentadorias) e gostaria de orientação.',
      '',
      '*Situação:* ' + (problemaObj?.label || ''),
      '*Detalhe:* '  + (statusObj?.label   || ''),
      '*Nome:* '     + nome,
      '*WhatsApp:* ' + whatsapp,
    ].join('\n');
    window.open('https://wa.me/5527992942888?text=' + encodeURIComponent(msg), '_blank');
  };

  const steps = ['Situação', 'Detalhe', 'Contato'];

  return (
    <section id="triagem" className="py-[70px] md:py-[90px] bg-[#091D39] border-b border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#CFAE70]/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-[820px] mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Triagem rápida — 3 passos</span>
          <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-white tracking-[-0.02em] leading-[1.15] font-heading">Qual é a sua situação?</h2>
          <p className="text-[15px] text-white/50 mt-3 font-light">Responda em segundos. No final, o advogado já recebe as informações do seu caso pelo WhatsApp.</p>
        </motion.div>

        {/* Progress bar */}
        <div className="flex items-center gap-0 mb-10 border border-white/10 overflow-hidden">
          {steps.map((label, i) => {
            const n = i + 1; const done = step > n; const active = step === n;
            return (
              <div key={i} className={'flex-1 flex items-center justify-center gap-2 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-500 ' + (done ? 'bg-[#CFAE70]/20 text-[#CFAE70]' : active ? 'bg-[#CFAE70] text-[#091D39]' : 'bg-white/5 text-white/30')}>
                <span className={'w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border ' + (done ? 'border-[#CFAE70] text-[#CFAE70] bg-transparent' : active ? 'border-[#091D39] bg-[#091D39] text-[#CFAE70]' : 'border-white/20 text-white/30')}>
                  {done ? '✓' : n}
                </span>
                <span className="hidden sm:inline">{label}</span>
              </div>
            );
          })}
        </div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }}>
              <p className="text-[13px] text-white/50 uppercase tracking-[0.12em] font-bold mb-5">Passo 1 — Qual é a sua situação?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-[1px] bg-white/10 border border-white/10">
                {problemas.map(p => (
                  <button key={p.id} onClick={() => handleSelectProblema(p.id)}
                    className={'group text-left bg-[#0B2347] hover:bg-[#CFAE70]/10 p-5 flex items-start gap-4 transition-all duration-200 border-l-4 h-full ' + (problema === p.id ? 'border-[#CFAE70] bg-[#CFAE70]/10' : 'border-transparent')}>
                    <div className={'w-10 h-10 flex items-center justify-center shrink-0 border transition-all duration-200 ' + (problema === p.id ? 'bg-[#CFAE70] border-[#CFAE70] text-[#091D39]' : 'bg-white/5 border-white/10 text-[#CFAE70] group-hover:bg-[#CFAE70]/20')}>
                      {p.icon}
                    </div>
                    <div>
                      <span className={'block text-[14px] font-bold leading-[1.3] transition-colors ' + (problema === p.id ? 'text-[#CFAE70]' : 'text-white group-hover:text-[#CFAE70]')}>{p.label}</span>
                      <span className="block text-[12px] text-white/40 mt-1 font-light">{p.sub}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }}>
              <p className="text-[13px] text-white/50 uppercase tracking-[0.12em] font-bold mb-5">Passo 2 — Qual é a sua situação atual?</p>
              <div className="flex flex-col gap-[1px] bg-white/10 border border-white/10">
                {statusOptions.map(s => (
                  <button key={s.id} onClick={() => handleSelectStatus(s.id)}
                    className={'group text-left bg-[#0B2347] hover:bg-[#CFAE70]/10 p-5 flex items-center gap-4 transition-all duration-200 border-l-4 ' + (status === s.id ? 'border-[#CFAE70] bg-[#CFAE70]/10' : 'border-transparent')}>
                    <div className={'w-5 h-5 rounded-full border-2 shrink-0 transition-all flex items-center justify-center ' + (status === s.id ? 'border-[#CFAE70] bg-[#CFAE70]' : 'border-white/20 group-hover:border-[#CFAE70]/50')}>
                      {status === s.id && <div className="w-2 h-2 rounded-full bg-[#091D39]" />}
                    </div>
                    <div>
                      <span className={'block text-[14px] font-bold transition-colors ' + (status === s.id ? 'text-[#CFAE70]' : 'text-white group-hover:text-[#CFAE70]')}>{s.label}</span>
                      <span className="block text-[12px] text-white/40 mt-0.5 font-light">{s.sub}</span>
                    </div>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="mt-5 text-[12px] text-white/30 hover:text-white/60 transition-colors font-light">← Voltar</button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }}>
              <p className="text-[13px] text-white/50 uppercase tracking-[0.12em] font-bold mb-5">Passo 3 — Só mais um passo</p>
              <div className="bg-white/5 border border-white/10 p-4 mb-6 flex flex-col sm:flex-row gap-3 sm:gap-6">
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-[0.1em] text-[#CFAE70] font-bold block mb-1">Situação</span>
                  <span className="text-[14px] text-white font-medium">{problemaObj?.label}</span>
                </div>
                <div className="w-px bg-white/10 hidden sm:block" />
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-[0.1em] text-[#CFAE70] font-bold block mb-1">Detalhe</span>
                  <span className="text-[14px] text-white font-medium">{statusObj?.label}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-white/50 mb-2">Seu nome</label>
                  <input type="text" value={nome} onChange={e => setNome(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#CFAE70] text-white text-[15px] px-4 py-3.5 outline-none transition-all placeholder:text-white/20 font-light"
                    placeholder="Como deseja ser chamado?" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-white/50 mb-2">Seu WhatsApp</label>
                  <input type="tel" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 focus:border-[#CFAE70] text-white text-[15px] px-4 py-3.5 outline-none transition-all placeholder:text-white/20 font-light"
                    placeholder="(00) 00000-0000" />
                </div>
              </div>
              <button onClick={handleWhatsApp} disabled={!nome.trim() || !whatsapp.trim()}
                className="w-full bg-[#25D366] text-white font-bold text-[14px] tracking-[0.1em] uppercase px-8 py-4 flex items-center justify-center gap-3 hover:bg-[#1db957] transition-all shadow-[0_0_30px_rgba(37,211,102,0.25)] disabled:opacity-40 disabled:cursor-not-allowed">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Enviar para o WhatsApp do Advogado
              </button>
              <p className="text-[12px] text-white/25 text-center mt-4 font-light">Seus dados são usados apenas para personalizar a mensagem. Nada é armazenado.</p>
              <button onClick={() => setStep(2)} className="mt-4 text-[12px] text-white/30 hover:text-white/60 transition-colors font-light">← Voltar</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── FAQ (white) ──────────────────────────────────────────────────────────────
function FAQAposentar() {
  const faqs = [
    { q: "Posso me aposentar e continuar trabalhando?", a: "Depende da modalidade. Quem se aposenta por idade pode continuar trabalhando e até acumular os dois rendimentos. Quem se aposenta por incapacidade permanente, não. Na aposentadoria por tempo de contribuição, é possível trabalhar, mas precisa verificar o caso específico — principalmente se houver cargo público envolvido." },
    { q: "Trabalhei anos sem carteira assinada. Esse tempo pode contar?", a: "Em muitos casos, sim. Período sem registro formal pode ser reconhecido pelo INSS com outros documentos — contratos, recibos, declarações de ex-empregadores, holerites, fotos, testemunhos. O caminho depende do tipo de trabalho e dos documentos disponíveis. Cada situação é analisada individualmente." },
    { q: "A reforma de 2019 me prejudicou?", a: "Não necessariamente. A reforma criou regras de transição para quem já contribuía antes de novembro de 2019. Dependendo do seu histórico, essas regras podem ser mais favoráveis do que as definitivas — permitindo se aposentar com menos idade ou por um sistema de pontos progressivos. Isso precisa ser verificado caso a caso." },
    { q: "Quanto tempo o INSS demora para dar uma resposta?", a: "O prazo legal é de até 90 dias para análise do pedido. Na prática, pedidos bem documentados e sem pendências costumam ser resolvidos em menos tempo. Quando há exigência ou documentação faltando, o prazo recomeça. O acompanhamento jurídico garante que as pendências sejam resolvidas rapidamente." },
    { q: "E se o INSS negar depois de tudo isso?", a: "Há dois caminhos: recurso administrativo (sem precisar ir à Justiça, dentro de 30 dias da negativa) ou ação judicial, quando o recurso não resolve. A negativa não é o fim. Em muitos casos, ela acontece por erro do próprio INSS no processamento dos dados — e pode ser revertida." },
    { q: "Preciso ir pessoalmente a algum lugar?", a: "Não. Todo o atendimento é feito de forma digital — por WhatsApp, vídeo ou e-mail. Os documentos são enviados por foto ou PDF. Atendo clientes em todo o Brasil sem necessidade de deslocamento." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-[80px] md:py-[100px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Dúvidas comuns</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">Perguntas que a gente ouve sempre</h2>
        </motion.div>
        
        <div className="flex flex-col gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {faqs.map((f, i) => (
            <div 
              key={i} 
              className={`bg-white transition-all duration-300`}
            >
              <div 
                className={`p-6 cursor-pointer flex items-center justify-between gap-4 border-l-4 ${openIdx === i ? 'border-[#CFAE70] bg-[#F4F4F2]' : 'border-transparent hover:bg-[#F4F4F2]'}`}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className={`text-[15px] font-bold transition-colors ${openIdx === i ? 'text-[#091D39]' : 'text-[#091D39]'}`}>{f.q}</span>
                <span className={`w-8 h-8 flex items-center justify-center shrink-0 transition-colors text-[#CFAE70] transform ${openIdx === i ? 'rotate-45' : 'rotate-0'}`}>
                  <Plus size={20} />
                </span>
              </div>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-[#F4F4F2]"
                  >
                    <div className="px-6 pb-6 pt-0 text-[14px] text-[#767672] leading-[1.7] font-light border-l-4 border-[#E0E0DC] ml-[-4px]">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTATO (white) ──────────────────────────────────────────────────────────
function ContatoAposentar() {
  const [nome, setNome] = useState('');
  const [wpp, setWpp] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = 'Olá! Vim pelo site de Aposentadorias.\n\n*Nome:* ' + nome + '\n*WhatsApp:* ' + wpp + '\n\n*O que preciso:* ' + desc;
    window.open('https://wa.me/5527992942888?text=' + encodeURIComponent(msg), '_blank');
  };

  return (
    <section id="contato" className="py-[80px] md:py-[100px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] border border-[#E0E0DC] shadow-lg items-stretch">

          <div className="p-8 md:p-[48px_44px] bg-[#091D39] flex flex-col justify-center">
            <h2 className="text-[clamp(22px,2.5vw,30px)] font-bold text-white tracking-[-0.02em] mb-3 font-heading border-l-4 border-[#CFAE70] pl-4">
              Fale com o advogado
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.65] font-light mb-10 pl-5">
              Análise do seu caso sem compromisso. Atendimento direto e em todo o Brasil.
            </p>
            <div className="space-y-6 pl-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="w-4 h-4 text-[#CFAE70]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/40 mb-1 block">Telefone / WhatsApp</span>
                  <strong className="text-[15px] font-bold text-white">+55 (27) 99294-2888</strong>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Mail className="w-4 h-4 text-[#CFAE70]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/40 mb-1 block">E-mail</span>
                  <strong className="text-[15px] font-bold text-white break-all">contato@andersonlitig.adv.br</strong>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="w-4 h-4 text-[#CFAE70]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/40 mb-1 block">Localização</span>
                  <strong className="text-[15px] font-bold text-white">Serra, na Grande Vitória - ES<br/>Atendimento Nacional 100% Digital</strong>
                </div>
              </div>
            </div>
            <button
              className="mt-10 bg-[#25D366] text-white text-[14px] font-bold tracking-[0.05em] px-6 py-3.5 flex items-center gap-3 hover:bg-[#1db957] transition-all w-fit ml-5"
              onClick={() => window.open('https://wa.me/5527992942888?text=Ol%C3%A1%2C+vim+pelo+site+e+quero+saber+mais+sobre+minha+aposentadoria', '_blank')}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Falar pelo WhatsApp agora
            </button>
          </div>

          <div className="p-8 md:p-[48px_44px] bg-white flex flex-col justify-center">
            <h3 className="text-[20px] font-bold text-[#091D39] mb-6 font-heading">Envie uma mensagem</h3>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Nome e Sobrenome</label>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)} required
                  className="w-full p-3 border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]"
                  placeholder="Como podemos chamar você?" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Seu WhatsApp</label>
                <input type="tel" value={wpp} onChange={e => setWpp(e.target.value)} required
                  className="w-full p-3 border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]"
                  placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">O que você precisa?</label>
                <textarea value={desc} onChange={e => setDesc(e.target.value)} required
                  className="w-full min-h-[110px] resize-y p-3 border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]"
                  placeholder="Ex: Quero saber se já tenho tempo suficiente para me aposentar... Resuma sua dúvida ou situação." />
              </div>
              <button type="submit"
                className="w-full bg-[#091D39] text-white font-sans text-[12px] font-bold tracking-[0.12em] uppercase p-4 hover:bg-[#0d2548] transition-all cursor-pointer border-none flex items-center justify-center gap-2">
                Solicitar Contato Inicial <ArrowRight size={15} />
              </button>
              <p className="text-[11px] text-[#767672] leading-[1.5] font-light">
                Em conformidade com o Provimento nº 205/2021 do CFOAB. As informações deste site têm caráter informativo e não constituem consultoria jurídica.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


// ─── CTA FINAL (#091D39) ──────────────────────────────────────────────────
function CTAFinal() {
  return (
    <section className="py-[70px] bg-[#091D39]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70]">Pronto para garantir o que é seu?</span>
          <h2 className="text-[clamp(26px,3.5vw,42px)] font-bold text-white tracking-[-0.02em] leading-[1.1] font-heading">
            Não deixe o INSS decidir sozinho.
          </h2>
          <p className="text-[16px] text-white/60 font-light max-w-[520px] mx-auto">
            Uma análise prévia pode mudar permanentemente o valor que você vai receber. O atendimento é feito 100% online, sem sair de casa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              className="bg-[#25D366] text-white font-bold text-[14px] tracking-[0.08em] px-10 py-4 flex items-center gap-3 hover:bg-[#1db957] transition-all shadow-[0_0_20px_rgba(37,211,102,0.25)] uppercase"
              onClick={() => window.open('https://wa.me/5527992942888?text=Ol%C3%A1%2C+vim+pelo+site+e+quero+saber+mais+sobre+minha+aposentadoria', '_blank')}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Falar pelo WhatsApp agora
            </button>
            <button
              className="text-white/70 text-[13px] font-medium hover:text-white transition-colors underline underline-offset-4"
              onClick={() => document.getElementById('contato')?.scrollIntoView({behavior:'smooth'})}
            >
              Ou me envie uma mensagem
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 pt-3 text-white/30 text-[11px] font-bold tracking-widest uppercase">
            <span>100% Online</span>
            <span className="w-px h-3 bg-white/10" />
            <span>Todo o Brasil</span>
            <span className="w-px h-3 bg-white/10" />
            <span>Sem compromisso</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FooterV2() {
  return (
    <footer className="bg-[#0D0D0D]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 py-12 border-b border-white/10">
          <div>
            <div className="text-[18px] font-bold text-[#CFAE70] mb-1">Anderson Litig</div>
            <div className="text-[11px] text-white/30 mb-3">OAB/ES nº 40.152 &middot; Serra, Espírito Santo</div>
            <div className="text-[12px] text-white/30 leading-[1.75] font-light pr-4">As informações contidas neste site têm caráter exclusivamente informativo e não constituem consultoria jurídica. Atuação em conformidade com o Provimento nº 205/2021 do CFOAB.</div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/30 mb-4">Serviços</h4>
            <a href="/v2/aposentar" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Aposentadorias</a>
            <a href="/v2/planejamento" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Planejamento Previdenciário</a>
            <a href="#" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Revisão de benefício</a>
            <a href="#" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Auxílio por incapacidade</a>
            <a href="#" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">BPC/LOAS</a>
            <a href="#" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Descontos indevidos</a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/30 mb-4">Institucional</h4>
            <a href="/v2#sobre" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Sobre o advogado</a>
            <a href="#" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Blog jurídico</a>
            <a href="#" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Política de privacidade</a>
            <a href="#contato" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Contato</a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/30 mb-4">Contato</h4>
            <a href="https://wa.me/5527992942888" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">WhatsApp</a>
            <a href="mailto:contato@andersonlitig.adv.br" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">E-mail</a>
            <a href="#" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Instagram</a>
          </div>
        </div>
        <div className="py-4 flex flex-col sm:flex-row justify-between gap-2 text-[11px] text-white/20 font-light">
          <span>&copy; 2025 Anderson Litig — Advocacia e Consultoria Jurídica</span>
          <span>OAB/ES 40.152 &middot; Provimento 205/2021 CFOAB</span>
        </div>
      </div>
    </footer>
  );
}
