import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, ShieldAlert, CheckCircle2, AlertCircle, FileText, Calendar, ChevronDown, Plus, Minus, Mail, MapPin, Search, Clock, Target, Info, Users, Briefcase, FileSearch, ShieldCheck, Scale, Globe, FileSignature, CheckSquare, FastForward, HeadphonesIcon, CalendarCheck, Award, BookOpen, Calculator, LineChart } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/planejamento_hero.jpg"; 
import andersonImg from "@/assets/anderson-suit.jpg";

export default function PlanejamentoV2() {
  return (
    <div className="font-sans text-[#2C2C2C] bg-white leading-relaxed overflow-x-hidden selection:bg-[#CFAE70] selection:text-[#091D39]">
      <WppFloat />
      <HeaderV2 />
      <main>
        <Breadcrumb />
        <HeroPlanejamento />
        <AlertaPlanejamento />
        <EntendaPlanejamento />
        <ParaQuemPlanejamento />
        <TriagemPlanejamento />
        <VantagensPlanejamento />
        <ComoFuncionaPlanejamento />
        <AutoridadeAdvogado />
        <CTAFinal />
        <FAQPlanejamento />
        <ContatoPlanejamento />
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
            <Link href="/v2/aposentadorias"><a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors">Aposentadorias</a></Link>
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
          <span className="text-[#091D39] font-bold">Planejamento Previdenciário</span>
        </div>
      </div>
    </div>
  );
}

function HeroPlanejamento() {
  return (
    <section className="relative bg-[#091D39] min-h-[82vh] pt-[120px] pb-[90px] md:pt-[160px] md:pb-[120px] border-b-4 border-[#CFAE70] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#091D39]/82 z-10" />
        <img src={heroImage} alt="Planejamento Previdenciário" className="w-full h-full object-cover scale-105" />
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
            Planejamento Previdenciário
          </span>
          <h1 className="text-[clamp(34px,4.8vw,58px)] font-bold leading-[1.04] text-white tracking-[-0.025em] mb-6 font-heading">
            Descubra o dia exato e o <span className="text-[#CFAE70]">valor da sua melhor aposentadoria.</span>
          </h1>
          <p className="text-[17px] md:text-[19px] text-white/70 leading-[1.65] mb-4 max-w-[600px] font-light">
            Pare de adivinhar o seu futuro ou confiar cegamente no simulador do INSS. O Planejamento Previdenciário garante que você receba tudo o que tem direito, investindo apenas o necessário.
          </p>
          <p className="text-[14px] text-[#CFAE70]/80 leading-[1.6] mb-10 max-w-[540px] font-light">
            Um estudo matemático e jurídico completo que mostra o melhor caminho para a sua aposentadoria — sem que você precise sair de casa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-[#CFAE70] text-[#091D39] text-[13px] font-bold px-8 py-4 flex items-center justify-center gap-3 hover:bg-white transition-all tracking-[0.15em] uppercase shadow-[0_0_15px_rgba(207,174,112,0.3)] group"
              onClick={() => document.getElementById('triagem')?.scrollIntoView({behavior:'smooth'})}
            >
              Falar com Advogado
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="bg-transparent text-white text-[13px] font-bold px-8 py-4 border border-white/30 hover:border-white hover:bg-white/5 transition-all tracking-[0.15em] uppercase flex items-center justify-center"
              onClick={() => document.getElementById('comofunciona')?.scrollIntoView({behavior:'smooth'})}
            >
              Como Funciona
            </button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-white/40 text-[10px] font-bold tracking-widest uppercase">
            <span className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#CFAE70]" /> 100% Online</span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#CFAE70]" /> Estudo Matemático</span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#CFAE70]" /> Atendimento Nacional</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AlertaPlanejamento() {
  return (
    <section className="py-[80px] md:py-[110px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[780px] mx-auto px-4 md:px-8 text-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block">O risco de decidir sem análise</span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">
            Pagar o INSS sem estratégia é jogar dinheiro fora.
          </h2>
          <p className="text-[16px] text-[#767672] leading-[1.75] font-light">
            Muitos segurados pagam o INSS por anos sem saber se o valor está correto ou se a contribuição vai realmente aumentar a aposentadoria. <strong className="text-[#091D39]">Isso é um erro grave: um planejamento mal feito pode custar centenas de milhares de reais em perdas ao longo da vida.</strong>
          </p>
          <p className="text-[16px] text-[#767672] leading-[1.75] font-light">
            O INSS concede a regra mais rápida disponível — não a mais vantajosa. Agir sem conhecimento prévio é um caminho sem volta depois da concessão.
          </p>
          <div className="flex justify-center pt-2">
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

function EntendaPlanejamento() {
  return (
    <section className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block mb-5">O que é o planejamento</span>
            <h2 className="text-[clamp(30px,4vw,46px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">
              O mapa exato para a sua aposentadoria.
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
              O Planejamento Previdenciário é um estudo completo da sua vida de trabalho. Avaliamos todo o seu histórico no INSS, vínculos sem registro e carnês pagos.
            </p>
            <p className="text-[17px] text-[#767672] leading-[1.75] font-light">
              Com isso, calculamos matematicamente qual é a melhor data para você se aposentar, qual será o valor do seu benefício e quanto você precisa contribuir até lá para garantir o máximo retorno possível.
            </p>
            <button
              className="bg-[#091D39] text-white text-[13px] font-bold px-8 py-4 flex items-center gap-2 hover:bg-[#CFAE70] hover:text-[#091D39] transition-colors tracking-[0.15em] uppercase group"
              onClick={() => document.getElementById('triagem')?.scrollIntoView({behavior:'smooth'})}
            >
              Fazer meu planejamento <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function VantagensPlanejamento() {
  const cards = [
    { icon: <Calendar size={24} />, title: "Saiba quando se aposentar", desc: "Descubra a data exata para dar entrada com o melhor benefício possível, sem perder tempo ou dinheiro." },
    { icon: <Calculator size={24} />, title: "Descubra o valor exato", desc: "Cálculo matemático preciso com base em todo o seu histórico. Sem surpresas ou decepções na hora de receber." },
    { icon: <LineChart size={24} />, title: "Economize nas contribuições", desc: "Saiba exatamente quanto pagar. Pagar a mais nem sempre significa receber mais." },
    { icon: <ShieldCheck size={24} />, title: "Evite atrasos e negativas", desc: "Identificamos e corrigimos erros no seu CNIS antes mesmo do pedido ser feito ao INSS." }
  ];

  return (
    <section id="vantagensplanejamento" className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-4 block">
            Por que fazer o planejamento
          </span>
          <h2 className="text-[clamp(28px,3vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">
            Benefícios diretos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              className="bg-[#F4F4F2] p-8 hover:border-[#CFAE70] hover:shadow-md transition-all duration-300 group flex flex-col items-start border-t-4 border-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="w-12 h-12 bg-[#091D39]/5 text-[#091D39] flex items-center justify-center mb-6 group-hover:bg-[#CFAE70]/10 group-hover:text-[#CFAE70] transition-colors">
                {card.icon}
              </div>
              <h3 className="text-[16px] font-bold text-[#091D39] mb-3 leading-[1.4]">{card.title}</h3>
              <p className="text-[14px] text-[#767672] leading-[1.65] font-light">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AutoridadeAdvogado() {
  return (
    <section id="autoridadeadvogado" className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
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
                <div key={i} className="flex items-center gap-4 bg-[#F4F4F2] border border-[#E0E0DC] px-5 py-4 shadow-sm hover:border-[#CFAE70] transition-all duration-300">
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

function TriagemPlanejamento() {
  const [step, setStep] = useState(1);
  const [problema, setProblema] = useState('');
  const [status, setStatus] = useState('');
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const problemas = [
    { id: 'planejar',    label: 'Quero planejar minha planejamento',        sub: 'Ainda não chegou a hora, quero me preparar',          icon: <Target size={20} /> },
    { id: 'dar_entrada', label: 'Quero organizar minhas contribuições',                    sub: 'Quero saber se estou pagando certo',                     icon: <CalendarCheck size={20} /> },
    { id: 'perigoso',   label: 'Sou Empresário ou Autônomo',   sub: 'Quero verificar o direito à planejamento especial',   icon: <ShieldAlert size={20} /> },
    { id: 'rural',      label: 'Faltam menos de 5 anos',             sub: 'Quero o mapa exato de quando pedir',     icon: <Globe size={20} /> },
    { id: 'autonomo',   label: 'Trabalhei em várias áreas',     sub: 'CLT, serviço público, autônomo, exterior',               icon: <Briefcase size={20} /> },
    { id: 'deficiencia',label: 'Quero aumentar meu benefício',               sub: 'Acho que o simulador do INSS está baixo',              icon: <Users size={20} /> },
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
      'Olá! Vim pelo site (Planejamentos) e gostaria de orientação.',
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
    <section id="autoridadeadvogado" className="py-[70px] md:py-[90px] bg-[#091D39] border-b border-white/10 relative overflow-hidden">
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
              <div key={i} className={'flex-1 flex items-center justify-center gap-2 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-500 ' + (done ? 'bg-[#CFAE70]/20 text-[#CFAE70]' : active ? 'bg-[#CFAE70] text-[#091D39]' : 'bg-[#F4F4F2]/5 text-white/30')}>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-[1px] bg-[#F4F4F2]/10 border border-white/10">
                {problemas.map(p => (
                  <button key={p.id} onClick={() => handleSelectProblema(p.id)}
                    className={'group text-left bg-[#0B2347] hover:bg-[#CFAE70]/10 p-5 flex items-start gap-4 transition-all duration-200 border-l-4 h-full ' + (problema === p.id ? 'border-[#CFAE70] bg-[#CFAE70]/10' : 'border-transparent')}>
                    <div className={'w-10 h-10 flex items-center justify-center shrink-0 border transition-all duration-200 ' + (problema === p.id ? 'bg-[#CFAE70] border-[#CFAE70] text-[#091D39]' : 'bg-[#F4F4F2]/5 border-white/10 text-[#CFAE70] group-hover:bg-[#CFAE70]/20')}>
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
              <div className="flex flex-col gap-[1px] bg-[#F4F4F2]/10 border border-white/10">
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
              <div className="bg-[#F4F4F2]/5 border border-white/10 p-4 mb-6 flex flex-col sm:flex-row gap-3 sm:gap-6">
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-[0.1em] text-[#CFAE70] font-bold block mb-1">Situação</span>
                  <span className="text-[14px] text-white font-medium">{problemaObj?.label}</span>
                </div>
                <div className="w-px bg-[#F4F4F2]/10 hidden sm:block" />
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-[0.1em] text-[#CFAE70] font-bold block mb-1">Detalhe</span>
                  <span className="text-[14px] text-white font-medium">{statusObj?.label}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-white/50 mb-2">Seu nome</label>
                  <input type="text" value={nome} onChange={e => setNome(e.target.value)}
                    className="w-full bg-[#F4F4F2]/5 border border-white/15 focus:border-[#CFAE70] text-white text-[15px] px-4 py-3.5 outline-none transition-all placeholder:text-white/20 font-light"
                    placeholder="Como deseja ser chamado?" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-white/50 mb-2">Seu WhatsApp</label>
                  <input type="tel" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}
                    className="w-full bg-[#F4F4F2]/5 border border-white/15 focus:border-[#CFAE70] text-white text-[15px] px-4 py-3.5 outline-none transition-all placeholder:text-white/20 font-light"
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

function ParaQuemPlanejamento() {
  const perfis = [
    {
      icon: <Briefcase size={20} />,
      title: "Empresários e Autônomos",
      desc: "Evite pagar INSS sobre o teto se isso não for aumentar sua aposentadoria. Otimize seus impostos descobrindo o valor ideal de contribuição."
    },
    {
      icon: <ShieldAlert size={20} />,
      title: "Profissionais com Insalubridade",
      desc: "Médicos, enfermeiros, dentistas e outros que trabalharam com risco têm direito à conversão de tempo, que pode adiantar a aposentadoria em anos."
    },
    {
      icon: <Clock size={20} />,
      title: "Menos de 5 anos para aposentar",
      desc: "A janela crítica. Um erro nas contribuições finais pode derrubar o valor do benefício. O planejamento define os últimos passos exatos."
    },
    {
      icon: <FileSearch size={20} />,
      title: "Histórico Complexo",
      desc: "Processos trabalhistas não incluídos no CNIS, trabalho rural, múltiplos vínculos simultâneos ou períodos de serviço militar/público."
    }
  ];

  return (
    <section id="autoridadeadvogado" className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-4 block">Perfil do Cliente</span>
          <h2 className="text-[clamp(28px,3vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading max-w-[600px]">
            Para quem o Planejamento é indispensável?
          </h2>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[600px] font-light">
            Se você se enquadra em qualquer uma das situações abaixo, fazer o pedido sem um estudo prévio é um risco financeiro grave.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {perfis.map((p, i) => (
            <div key={i} className="p-8 flex flex-col transition-colors duration-300 bg-[#F4F4F2] hover:bg-[#F4F4F2] hover:border-[#CFAE70] hover:shadow-md border-t-4 border-transparent">
              <div className="w-12 h-12 flex items-center justify-center mb-5 bg-[#091D39]/5 text-[#091D39]">
                {p.icon}
              </div>
              <h3 className="text-[16px] font-bold mb-3 leading-[1.4] text-[#091D39]">{p.title}</h3>
              <p className="text-[14px] leading-[1.65] font-light flex-1 text-[#767672]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section id="autoridadeadvogado" className="py-[70px] bg-[#091D39]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70]">A sua aposentadoria é um projeto de vida</span>
          <h2 className="text-[clamp(26px,3.5vw,42px)] font-bold text-white tracking-[-0.02em] leading-[1.1] font-heading">
            Não deixe o INSS decidir o seu futuro.
          </h2>
          <p className="text-[16px] text-white/60 font-light max-w-[520px] mx-auto">
            Um estudo aprofundado pode mudar permanentemente o valor que você vai receber. O atendimento é feito 100% online, de qualquer lugar do Brasil.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              className="bg-[#25D366] text-white font-bold text-[14px] tracking-[0.08em] px-10 py-4 flex items-center gap-3 hover:bg-[#1db957] transition-all shadow-[0_0_20px_rgba(37,211,102,0.25)] uppercase"
              onClick={() => window.open('https://wa.me/5527992942888?text=Ol%C3%A1%2C+vim+pelo+site+e+quero+saber+mais+sobre+o+Planejamento+Previdenci%C3%A1rio', '_blank')}
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
            <span className="w-px h-3 bg-[#F4F4F2]/10" />
            <span>Todo o Brasil</span>
            <span className="w-px h-3 bg-[#F4F4F2]/10" />
            <span>Sem compromisso</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ComoFuncionaPlanejamento() {
  const etapas = [
    { n: "Etapa 01", t: "Coleta de Documentos e Histórico", d: "Nós levantamos todo seu histórico no INSS, CNIS, PPPs, carteiras de trabalho e carnês de contribuição para ter o raio-x completo da sua vida trabalhista." },
    { n: "Etapa 02", t: "Auditoria e Cálculos Matemáticos", d: "Fazemos a correção do seu CNIS e cruzamos as regras antigas, regras de transição e regras novas. Projetamos cenários de contribuição futura para descobrir o ROI (Retorno sobre Investimento) exato." },
    { n: "Etapa 03", t: "Entrega do Mapa de Planejamento", d: "Apresentamos um documento detalhado, com gráficos e linguagem simples. Você saberá o dia exato para pedir, quanto vai receber, e qual código usar para pagar o INSS daqui pra frente." },
    { n: "Etapa 04", t: "Acompanhamento do Pedido", d: "Quando chegar a data projetada no seu mapa, nossa equipe estará pronta para dar entrada no pedido, garantindo que o INSS cumpra exatamente o que foi planejado." }
  ];

  return (
    <section id="autoridadeadvogado" className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
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
              className="bg-[#F4F4F2] p-8 border-t-4 border-transparent hover:border-[#CFAE70] hover:bg-[#F4F4F2] transition-colors duration-300"
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


function FAQPlanejamento() {
  const faqs = [
    { q: "Vale a pena pagar o INSS sobre o teto?", a: "Depende da modalidade. Quem se aposenta por idade pode continuar trabalhando e até acumular os dois rendimentos. Quem se aposenta por incapacidade permanente, não. Na aposentadoria por tempo de contribuição, é possível trabalhar, mas precisa verificar o caso específico — principalmente se houver cargo público envolvido." },
    { q: "Quando devo fazer o planejamento previdenciário?", a: "Em muitos casos, sim. Período sem registro formal pode ser reconhecido pelo INSS com outros documentos — contratos, recibos, declarações de ex-empregadores, holerites, fotos, testemunhos. O caminho depende do tipo de trabalho e dos documentos disponíveis. Cada situação é analisada individualmente." },
    { q: "O planejamento garante a concessão?", a: "Não necessariamente. A reforma criou regras de transição para quem já contribuía antes de novembro de 2019. Dependendo do seu histórico, essas regras podem ser mais favoráveis do que as definitivas — permitindo se aposentar com menos idade ou por um sistema de pontos progressivos. Isso precisa ser verificado caso a caso." },
    { q: "Quanto tempo o INSS demora para dar uma resposta?", a: "O prazo legal é de até 90 dias para análise do pedido. Na prática, pedidos bem documentados e sem pendências costumam ser resolvidos em menos tempo. Quando há exigência ou documentação faltando, o prazo recomeça. O acompanhamento jurídico garante que as pendências sejam resolvidas rapidamente." },
    { q: "E se o INSS negar depois de tudo isso?", a: "Há dois caminhos: recurso administrativo (sem precisar ir à Justiça, dentro de 30 dias da negativa) ou ação judicial, quando o recurso não resolve. A negativa não é o fim. Em muitos casos, ela acontece por erro do próprio INSS no processamento dos dados — e pode ser revertida." },
    { q: "Preciso ir pessoalmente a algum lugar?", a: "Não. Todo o atendimento é feito de forma digital — por WhatsApp, vídeo ou e-mail. Os documentos são enviados por foto ou PDF. Atendo clientes em todo o Brasil sem necessidade de deslocamento." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faqplanejamento" className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
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
              className={`bg-[#F4F4F2] transition-all duration-300`}
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

function ContatoPlanejamento() {
  const [nome, setNome] = useState('');
  const [wpp, setWpp] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = 'Olá! Vim pelo site de Aposentadorias.\n\n*Nome:* ' + nome + '\n*WhatsApp:* ' + wpp + '\n\n*O que preciso:* ' + desc;
    window.open('https://wa.me/5527992942888?text=' + encodeURIComponent(msg), '_blank');
  };

  return (
    <section id="faqplanejamento" className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] border border-[#E0E0DC] shadow-lg items-stretch">

          <div className="p-8 md:p-[48px_44px] bg-[#091D39] flex flex-col justify-center">
            <h2 className="text-[clamp(22px,2.5vw,30px)] font-bold text-white tracking-[-0.02em] mb-3 font-heading border-l-4 border-[#CFAE70] pl-4">
              Fale com o advogado
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.65] font-light mb-10 pl-5">
              Agende a análise do seu caso. Descubra o caminho exato para a melhor aposentadoria.
            </p>
            <div className="space-y-6 pl-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F4F4F2]/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="w-4 h-4 text-[#CFAE70]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/40 mb-1 block">Telefone / WhatsApp</span>
                  <strong className="text-[15px] font-bold text-white">+55 (27) 99294-2888</strong>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F4F4F2]/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Mail className="w-4 h-4 text-[#CFAE70]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/40 mb-1 block">E-mail</span>
                  <strong className="text-[15px] font-bold text-white break-all">contato@andersonlitig.adv.br</strong>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F4F4F2]/5 flex items-center justify-center shrink-0 border border-white/10">
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

          <div className="p-8 md:p-[48px_44px] bg-[#F4F4F2] flex flex-col justify-center">
            <h3 className="text-[20px] font-bold text-[#091D39] mb-6 font-heading">Envie uma mensagem</h3>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Nome e Sobrenome</label>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)} required
                  className="w-full p-3 border border-[#E0E0DC] bg-[#F4F4F2] font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]"
                  placeholder="Como podemos chamar você?" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Seu WhatsApp</label>
                <input type="tel" value={wpp} onChange={e => setWpp(e.target.value)} required
                  className="w-full p-3 border border-[#E0E0DC] bg-[#F4F4F2] font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]"
                  placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">O que você precisa?</label>
                <textarea value={desc} onChange={e => setDesc(e.target.value)} required
                  className="w-full min-h-[110px] resize-y p-3 border border-[#E0E0DC] bg-[#F4F4F2] font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]"
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
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10">
          <div className="lg:col-span-1">
            <img src={logo} alt="Anderson Litig" className="h-10 object-contain brightness-0 invert mb-6" />
            <p className="text-[14px] text-white/50 leading-[1.7] font-light max-w-[280px]">
              Advocacia previdenciária especializada, focada na excelência técnica e atendimento humanizado.
            </p>
          </div>
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#CFAE70] mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><Link href="/v2"><a className="text-[14px] text-white/60 hover:text-white transition-colors">Início</a></Link></li>
              <li><Link href="/v2/planejamento"><a className="text-[14px] text-white/60 hover:text-white transition-colors">Planejamento</a></Link></li>
              <li><Link href="/v2/aposentadorias"><a className="text-[14px] text-white/60 hover:text-white transition-colors">Aposentadorias</a></Link></li>
              <li><Link href="/v2#sobre"><a className="text-[14px] text-white/60 hover:text-white transition-colors">Sobre o Advogado</a></Link></li>
              <li><Link href="/v2#contato"><a className="text-[14px] text-white/60 hover:text-white transition-colors">Contato</a></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#CFAE70] mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li><Link href="/v2/aposentadorias"><a className="text-[14px] text-white/60 hover:text-white transition-colors">Aposentadoria por Idade</a></Link></li>
              <li><Link href="/v2/aposentadorias"><a className="text-[14px] text-white/60 hover:text-white transition-colors">Aposentadoria Especial</a></Link></li>
              <li><Link href="/v2/aposentadorias"><a className="text-[14px] text-white/60 hover:text-white transition-colors">Aposentadoria Rural</a></Link></li>
              <li><a href="#" className="text-[14px] text-white/60 hover:text-white transition-colors">Benefícios por Incapacidade</a></li>
              <li><a href="#" className="text-[14px] text-white/60 hover:text-white transition-colors">BPC / LOAS</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#CFAE70] mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <Phone size={16} className="text-[#CFAE70] mt-1 shrink-0" />
                <span className="text-[14px]">(27) 99294-2888</span>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <Mail size={16} className="text-[#CFAE70] mt-1 shrink-0" />
                <span className="text-[14px]">contato@andersonlitig.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={16} className="text-[#CFAE70] mt-1 shrink-0" />
                <span className="text-[14px]">Atendimento 100% digital em todo o Brasil.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/40 font-light">
          <p>© {new Date().getFullYear()} Anderson Litig Advocacia Previdenciária. Todos os direitos reservados.</p>
          <p>OAB/ES nº 40.152</p>
        </div>
      </div>
    </footer>
  );
}
