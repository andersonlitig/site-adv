import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, ShieldAlert, CheckCircle2, AlertCircle, FileText, Calendar, ChevronDown, Plus, Minus, Mail, MapPin, Search, Clock, Target, Info, Users, Briefcase, FileSearch, ShieldCheck, Scale, Globe, FileSignature, CheckSquare, FastForward, HeadphonesIcon, CalendarCheck, Award, BookOpen, Calculator, LineChart } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/beneficio_negado_hero.jpg"; 
import andersonImg from "@/assets/anderson-litig.png";

export default function BeneficioNegadoV2() {
  return (
    <div className="font-sans text-[#2C2C2C] bg-white leading-relaxed overflow-x-hidden selection:bg-[#CFAE70] selection:text-[#091D39]">
      <WppFloat />
      <HeaderV2 />
      <main>
        <Breadcrumb />
        <HeroBeneficioNegado />
        <AlertaNegado />
        <VantagensNegado />
        <AutoridadeAdvogado />
        <TriagemNegado />
        <MotivosComuns />
        <CTAFinal />
        <ComoFuncionaNegado />
        <FAQNegado />
        <ContatoNegado />
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
          <span className="text-[#091D39] font-bold">Benefício Negado</span>
        </div>
      </div>
    </div>
  );
}

function HeroBeneficioNegado() {
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
            Benefício Negado pelo INSS
          </span>
          <h1 className="text-[clamp(34px,4.8vw,58px)] font-bold leading-[1.04] text-white tracking-[-0.025em] mb-6 font-heading">
            O INSS negou o seu benefício?<br/>
            <span className="text-[#CFAE70]">Calma, nós podemos reverter.</span>
          </h1>
          <p className="text-[17px] md:text-[19px] text-white/70 leading-[1.65] mb-4 max-w-[600px] font-light">
            Mais de 50% das negativas do INSS possuem erros por parte dos robôs ou servidores. Não aceite o "Indeferido" sem que um especialista analise o real motivo.
          </p>
          <p className="text-[14px] text-[#CFAE70]/80 leading-[1.6] mb-10 max-w-[540px] font-light">
            Temos 30 dias para entrar com recurso ou iniciar uma ação judicial para garantir que você receba todos os atrasados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-[#CFAE70] text-[#091D39] text-[13px] font-bold px-8 py-4 flex items-center justify-center gap-3 hover:bg-white transition-all tracking-[0.15em] uppercase shadow-[0_0_15px_rgba(207,174,112,0.3)] group"
              onClick={() => document.getElementById('triagem')?.scrollIntoView({behavior:'smooth'})}
            >
              Analisar minha carta
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="bg-transparent text-white text-[13px] font-bold px-8 py-4 border border-white/30 hover:border-white hover:bg-white/5 transition-all tracking-[0.15em] uppercase flex items-center justify-center"
              onClick={() => document.getElementById('motivos')?.scrollIntoView({behavior:'smooth'})}
            >
              Entender os motivos
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

function AlertaNegado() {
  return (
    <section className="py-[80px] md:py-[120px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="relative h-full min-h-[420px] lg:min-h-[520px] w-full order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-[#091D39] overflow-hidden border border-[#E0E0DC] shadow-xl">
              <img src={andersonImg} alt="Dr. Anderson Litig — Advogado Previdenciário" className="w-full h-full object-cover object-top opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091D39] via-[#091D39]/10 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-5 shadow-xl max-w-[250px] border border-[#E0E0DC] hidden md:block z-20">
              <div className="w-7 h-[2px] bg-[#CFAE70] mb-3" />
              <p className="text-[13px] text-[#091D39] font-semibold leading-[1.5]">Anderson Litig</p>
              <p className="text-[12px] text-[#767672] font-light">Advogado Previdenciário · OAB/ES nº 40.152</p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-5 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block">O risco do pedido sem análise</span>
            <h2 className="text-[clamp(26px,3vw,38px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">
              Tentar recorrer sozinho no "Meu INSS" pode ser um erro fatal.
            </h2>
            <p className="text-[16px] text-[#767672] leading-[1.7] font-light">
              Muitos segurados tentam fazer o Recurso Administrativo sozinhos, escrevendo de qualquer jeito no portal do INSS. <strong className="text-[#091D39]">Isso só vai gerar outra negativa e atrasar seu direito em anos. O INSS exige fundamentação técnica e legal para mudar de ideia.</strong>
            </p>
            <p className="text-[16px] text-[#767672] leading-[1.7] font-light">
              O INSS concede a regra mais rápida disponível — não a mais vantajosa. Uma aposentadoria pedida sem análise pode significar receber centenas de reais a menos por mês, <strong className="text-[#091D39]">pelo resto da vida.</strong>
            </p>
            <div className="pt-3">
              <button
                className="bg-[#091D39] text-white text-[13px] font-bold px-8 py-4 flex items-center gap-2 hover:bg-[#CFAE70] hover:text-[#091D39] transition-colors tracking-[0.15em] uppercase group"
                onClick={() => document.getElementById('triagem')?.scrollIntoView({behavior:'smooth'})}
              >
                Verificar meu caso <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function VantagensNegado() {
  const itens = [
    { icon: <FileSignature size={20} />, title: "Documentação impecável", desc: "Organizamos toda a papelada exigida para que o INSS não tenha motivos para negar." },
    { icon: <Target size={20} />, title: "Cálculo prévio", desc: "Conferimos se o valor que o INSS vai oferecer está correto antes de você aceitar." },
    { icon: <FastForward size={20} />, title: "Agilidade no processo", desc: "Pedidos bem instruídos e com a documentação certa tramitam mais rápido." },
    { icon: <HeadphonesIcon size={20} />, title: "Suporte total", desc: "Acompanhamos do primeiro clique até o dinheiro cair na conta, resolvendo qualquer exigência." }
  ];

  return (
    <section className="py-[80px] md:py-[100px] bg-white border-b border-[#E0E0DC]">
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

function AutoridadeAdvogado() {
  return (
    <section className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start">

          <motion.div className="space-y-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block">Quem vai cuidar do seu caso</span>
            <h2 className="text-[clamp(26px,3vw,38px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">
              Decisão previdenciária séria não começa com protocolo.
            </h2>
            <p className="text-[17px] text-[#091D39]/60 font-light leading-[1.4]">Começa com análise técnica individualizada.</p>
            <p className="text-[16px] text-[#767672] leading-[1.7] font-light">
              Cada caso tem uma história por trás — anos de trabalho e a expectativa de receber o que é seu por direito. Atuo com atenção técnica e cuidado humano em cada etapa, do primeiro contato até o resultado.
            </p>
          </motion.div>

          <motion.div className="space-y-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {[
              { icon: <BookOpen size={18} />, label: "Pós-graduado em Direito Previdenciário" },
              { icon: <Award size={18} />, label: "Membro da Comissão de Direito Previdenciário — OAB Serra/ES" },
              { icon: <ShieldCheck size={18} />, label: "OAB/ES nº 40.152 — regularmente inscrito" },
              { icon: <Globe size={18} />, label: "Atendimento 100% digital em todo o Brasil" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white border border-[#E0E0DC] px-5 py-4 shadow-sm hover:border-[#CFAE70] hover:shadow-md transition-all duration-300">
                <div className="w-9 h-9 bg-[#091D39]/5 flex items-center justify-center shrink-0 text-[#091D39]">
                  {item.icon}
                </div>
                <span className="text-[14px] font-medium text-[#091D39] leading-[1.4]">{item.label}</span>
                <CheckCircle2 size={15} className="text-[#CFAE70] ml-auto shrink-0" />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function TriagemNegado() {
  const [step, setStep] = useState(1);
  const [problema, setProblema] = useState('');
  const [status, setStatus] = useState('');
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const problemas = [
    { id: 'dar_entrada', label: 'Aposentadoria por Tempo ou Idade',                    sub: 'O INSS disse que falta tempo',                     icon: <CalendarCheck size={20} /> },
    { id: 'perigoso',   label: 'Aposentadoria Especial Negada',   sub: 'Não aceitaram meu PPP ou laudo',   icon: <ShieldAlert size={20} /> },
    { id: 'rural',      label: 'Aposentadoria Rural Negada',             sub: 'Não reconheceram minha atividade rural',     icon: <Globe size={20} /> },
    { id: 'autonomo',   label: 'Auxílio-Doença Negado (Perícia)',     sub: 'Perito disse que estou apto para o trabalho',               icon: <Briefcase size={20} /> },
    { id: 'deficiencia',label: 'BPC / LOAS Negado',               sub: 'Alegaram que a renda da família é alta',              icon: <Users size={20} /> },
    { id: 'outro',      label: 'Outro Benefício Negado',        sub: 'Pensão por morte, Salário-maternidade, etc',          icon: <Target size={20} /> },
  ];

  const getStatusOptions = (id: string) => {
    return [
      { id: 'recente',   label: 'Negado há menos de 30 dias',         sub: 'Ainda estou no prazo de recurso' },
      { id: 'passou',    label: 'Negado há mais de 30 dias',          sub: 'Preciso saber se ainda há solução' },
      { id: 'nao_sei',   label: 'Não tenho certeza da data',          sub: 'Preciso que avaliem meu processo' },
    ];
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
          <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-white tracking-[-0.02em] leading-[1.15] font-heading">Qual benefício foi negado?</h2>
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
              <p className="text-[13px] text-white/50 uppercase tracking-[0.12em] font-bold mb-5">Passo 1 — Qual benefício foi negado?</p>
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

function MotivosComuns() {
  const tipos = [
    { icon: <Clock size={20} />, title: "Por idade", desc: "Para quem chegou à idade mínima e contribuiu por pelo menos 15 anos. A opção mais simples e comum para trabalhadores urbanos e rurais.", detail: "65 anos (homem) · 62 anos (mulher)" },
    { icon: <Target size={20} />, title: "Por tempo de contribuição", desc: "Para quem trabalhou e contribuiu por muitos anos. Dependendo de quando você começou a trabalhar, pode ser possível se aposentar antes dos 60 anos.", req: "Mais vantajosa para quem começou cedo", destaque: true },
    { icon: <Briefcase size={20} />, title: "Trabalho perigoso ou insalubre", desc: "Quem trabalhou exposto a substâncias ou condições que prejudicam a saúde (químicos, ruído alto, calor extremo) pode se aposentar mais cedo.", detail: "Precisa de comprovação específica" },
    { icon: <Globe size={20} />, title: "Trabalhador rural", desc: "Para quem viveu e trabalhou no campo. Em muitos casos, é possível se aposentar sem ter feito contribuições formais, apenas comprovando o trabalho rural.", detail: "55 anos (mulher) · 60 anos (homem)" },
    { icon: <Users size={20} />, title: "Pessoa com deficiência", desc: "Quem tem deficiência comprovada pode se aposentar com menos tempo de contribuição. Quanto mais grave a deficiência, menor o tempo exigido.", detail: "Avaliação médica necessária" },
    { icon: <MapPin size={20} />, title: "Trabalhei na cidade e no campo", desc: "Quem tem um pouco de cada pode somar os dois períodos. Isso pode garantir a aposentadoria para quem sozinho não atingiria os anos mínimos em nenhum dos dois.", detail: "Combina períodos urbanos e rurais" }
  ];

  return (
    <section id="motivos" className="py-[80px] md:py-[100px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Por que o INSS nega tanto?</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">Qual se encaixa no seu caso?</h2>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[600px] font-light mx-auto md:mx-0">
            Cada pessoa tem uma situação diferente. Veja os tipos mais comuns e não se preocupe — analisamos qual é o melhor para você.
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
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-5 bg-[#091D39]/5 text-[#091D39]">
                {t.icon}
              </div>
              <h3 className="text-[16px] font-bold mb-3 leading-[1.4] text-[#091D39]">{t.title}</h3>
              <p className="text-[14px] leading-[1.65] font-light flex-1 text-[#767672]">{t.desc}</p>
              
              {t.req && (
                <div className="mt-4 p-3 bg-white/10 text-[12px] text-white/80 font-medium">
                  {t.req}
                </div>
              )}
              {t.detail && (
                <div className={`mt-4 text-[12px] flex items-center gap-2 ${t.destaque ? 'text-white/40' : 'text-[#767672]'}`}>
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

function ComoFuncionaNegado() {
  const etapas = [
    { n: "Etapa 01", t: "Análise da Carta de Indeferimento", d: "Você nos envia a carta do INSS (ou o processo digital) e nós auditamos para descobrir exatamente onde o servidor ou o robô errou ao negar seu pedido." },
    { n: "Etapa 02", t: "Definição da Melhor Estratégia", d: "Avaliamos se é mais rápido e seguro fazer um Recurso Administrativo na Junta de Recursos do INSS ou se devemos entrar imediatamente com uma Ação Judicial Federal." },
    { n: "Etapa 03", t: "Entrada com o Processo", d: "Nossa equipe elabora as petições necessárias e protocola o processo. Nós construímos a fundamentação jurídica baseada nas decisões recentes dos tribunais a favor de casos como o seu." },
    { n: "Etapa 04", t: "Acompanhamento e Recebimento", d: "Monitoramos cada movimentação. Quando o juiz ou a junta derem o parecer favorável, o INSS será obrigado a implantar o benefício e pagar todos os atrasados que você tem direito." }
  ];

  return (
    <section id="como-funciona" className="py-[80px] md:py-[100px] bg-white border-b border-[#E0E0DC]">
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
              className="bg-[#F4F4F2] p-8 border-t-4 border-transparent hover:border-[#CFAE70] hover:bg-white transition-colors duration-300"
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

function FAQNegado() {
  const faqs = [
    { q: "Quanto tempo demora uma ação contra o INSS?", a: "Depende da modalidade. Quem se aposenta por idade pode continuar trabalhando e até acumular os dois rendimentos. Quem se aposenta por incapacidade permanente, não. Na aposentadoria por tempo de contribuição, é possível trabalhar, mas precisa verificar o caso específico — principalmente se houver cargo público envolvido." },
    { q: "Se eu fizer novo pedido no INSS, perco os atrasados?", a: "Em muitos casos, sim. Período sem registro formal pode ser reconhecido pelo INSS com outros documentos — contratos, recibos, declarações de ex-empregadores, holerites, fotos, testemunhos. O caminho depende do tipo de trabalho e dos documentos disponíveis. Cada situação é analisada individualmente." },
    { q: "O que acontece se eu perder o prazo de 30 dias para recurso?", a: "Não necessariamente. A reforma criou regras de transição para quem já contribuía antes de novembro de 2019. Dependendo do seu histórico, essas regras podem ser mais favoráveis do que as definitivas — permitindo se aposentar com menos idade ou por um sistema de pontos progressivos. Isso precisa ser verificado caso a caso." },
    { q: "Tenho que pagar para o advogado entrar com a ação?", a: "O prazo legal é de até 90 dias para análise do pedido. Na prática, pedidos bem documentados e sem pendências costumam ser resolvidos em menos tempo. Quando há exigência ou documentação faltando, o prazo recomeça. O acompanhamento jurídico garante que as pendências sejam resolvidas rapidamente." },
    { q: "A perícia judicial é igual a do INSS?", a: "Há dois caminhos: recurso administrativo (sem precisar ir à Justiça, dentro de 30 dias da negativa) ou ação judicial, quando o recurso não resolve. A negativa não é o fim. Em muitos casos, ela acontece por erro do próprio INSS no processamento dos dados — e pode ser revertida." },
    { q: "Posso entrar com a ação sem advogado?", a: "Não. Todo o atendimento é feito de forma digital — por WhatsApp, vídeo ou e-mail. Os documentos são enviados por foto ou PDF. Atendo clientes em todo o Brasil sem necessidade de deslocamento." }
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

function ContatoNegado() {
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
              Agende a análise da sua carta de indeferimento sem compromisso.
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
