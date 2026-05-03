import React, { useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Send, Calendar, Target, Globe, Users, Shield, FileText, Briefcase, Landmark, ShieldAlert, Scale, ChevronDown, Plus, Minus, History } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/3em3-vitoria_15_1767549660783.jpg";

export default function HomeV2() {
  return (
    <div className="font-sans text-[#2C2C2C] bg-white leading-relaxed overflow-x-hidden selection:bg-[#CFAE70] selection:text-[#091D39]">
      <WppFloat />
      <HeaderV2 />
      <main>
        <HeroV2 />
        <JornadaV2 />
        <ServicesV2 />
        <ProcessV2 />
        <AboutV2 />
        <CTAWppV2 />
        <BlogV2 />
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
        <div className="absolute inset-0 bg-[#091D39]/80 z-10" />
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
          <span className="inline-block px-3 py-1 border border-[#CFAE70]/30 bg-[#CFAE70]/10 text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-6">Advocacia Previdenciária</span>
          <h1 className="text-[clamp(36px,5vw,64px)] font-bold leading-[1.05] text-white tracking-[-0.02em] mb-6 font-heading">
            Seu benefício do INSS<span className="text-[#CFAE70] block">em boas mãos.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-[1.6] mb-10 max-w-[580px] font-light">
            Aposentadorias, revisões, auxílio-doença e planejamento previdenciário. Atendimento personalizado para garantir os direitos que você conquistou ao longo da vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
        </motion.div>
      </div>
    </section>
  );
}

function JornadaV2() {
  const cards = [
    { num: "01", title: "Quero planejar minha aposentadoria", desc: "Ainda não me aposentei. Quero saber o melhor momento e como maximizar meu benefício.", link: "/v2/planejamento" },
    { num: "02", title: "Estou pronto para me aposentar", desc: "Tenho contribuições suficientes e quero dar entrada no benefício sem perder direitos.", link: "#" },
    { num: "03", title: "Meu benefício foi negado", desc: "O INSS negou o pedido. Quero entender se a decisão está correta e como reverter.", link: "#" },
    { num: "04", title: "Já me aposentei, mas tenho dúvidas", desc: "Quero revisar o valor do benefício ou cancelar descontos que não autorizei.", link: "#" }
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
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Qual é a sua situação?</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">Encontre o que você precisa</h2>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[520px] font-light mx-auto md:mx-0">Cada caso tem uma história. Identifique em qual momento você está para entender como posso ajudar.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC] shadow-lg">
          {cards.map((c, i) => (
            <Link href={c.link} key={i}>
              <a className="bg-white p-8 cursor-pointer transition-all duration-500 hover:bg-[#091D39] border-t-4 border-transparent hover:border-[#CFAE70] group flex flex-col h-full block no-underline">
                <div className="text-[40px] font-bold text-[#E0E0DC] group-hover:text-white/10 transition-colors leading-none mb-6">{c.num}</div>
                <h3 className="text-[16px] font-bold text-[#091D39] group-hover:text-white transition-colors mb-3 leading-[1.4]">{c.title}</h3>
                <p className="text-[14px] text-[#767672] group-hover:text-white/70 transition-colors leading-[1.6] flex-grow">{c.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#CFAE70] opacity-0 group-hover:opacity-100 transition-opacity">
                  Acessar <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesV2() {
  const services = [
    { icon: <History size={20} />, title: "Aposentadorias", desc: "Por idade, tempo de contribuição, especial, rural e por deficiência. Analisamos o seu CNIS e identificamos a modalidade mais vantajosa para o seu caso." },
    { icon: <Target size={20} />, title: "Planejamento Previdenciário", desc: "Quer saber o melhor momento para se aposentar? Fazemos um estudo técnico individualizado do seu CNIS para garantir a melhor aposentadoria possível." },
    { icon: <Scale size={20} />, title: "Revisão de Benefício", desc: "Já é aposentado e acha que o valor está baixo demais? Analisamos o cálculo do seu benefício e verificamos se há algo a corrigir." },
    { icon: <Users size={20} />, title: "Salário-Maternidade", desc: "Empregadas, autônomas, MEIs e trabalhadoras rurais têm direito ao salário-maternidade pelo INSS. Muitas perdem esse benefício por não saber que têm direito ou por erro no pedido." },
    { icon: <ShieldAlert size={20} />, title: "Benefícios por Incapacidade", desc: "Auxílio por Incapacidade Temporária e Aposentadoria por Incapacidade Permanente. Não consegue mais trabalhar por questões de saúde? Garanta o suporte financeiro que você merece." },
    { icon: <Briefcase size={20} />, title: "Auxílio-Acidente", desc: "Sofreu um acidente ou doença ocupacional que reduziu sua capacidade de trabalho? Você pode receber o auxílio-acidente enquanto ainda trabalha." },
    { icon: <Globe size={20} />, title: "BPC/LOAS", desc: "Idoso acima de 65 anos ou pessoa com deficiência em situação de vulnerabilidade? Ajudamos você a conquistar o Benefício de Prestação Continuada mesmo sem ter contribuído ao INSS." },
    { icon: <Landmark size={20} />, title: "Descontos Indevidos (RMC e RCC)", desc: "Desconto não autorizado no seu benefício INSS? Atuamos no cancelamento de empréstimos consignados e cobranças abusivas, com direito à restituição dos valores." },
    { icon: <FileText size={20} />, title: "Pensão por Morte", desc: "Assessoria completa para os dependentes do segurado falecido garantirem o benefício a que têm direito junto ao INSS, com agilidade e atenção em um momento difícil." }
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
    { num: "01", title: "Primeiro contato", desc: "Você manda mensagem pelo WhatsApp com uma breve descrição do caso." },
    { num: "02", title: "Análise do caso", desc: "Agendamos uma consulta para análise do CNIS, documentos e situação previdenciária." },
    { num: "03", title: "Estratégia jurídica", desc: "Apresento o plano de ação — administrativo ou judicial — com clareza sobre prazos." },
    { num: "04", title: "Acompanhamento", desc: "Você é atualizado em cada etapa até a concessão do seu direito." }
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
          <div className="min-h-[400px] lg:min-h-[550px] overflow-hidden bg-gray-200 relative">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
              alt="Anderson Litig" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
          <div className="p-8 md:p-[64px_56px] flex flex-col justify-center bg-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4F4F2] -z-10" />
            
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Sobre o advogado</span>
            <h2 className="text-[clamp(28px,3vw,36px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] mb-6 font-heading">Anderson Litig</h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-[15px] text-[#767672] leading-[1.75] font-light">Sou advogado inscrito na OAB/ES sob o nº 40.152, pós-graduado em Direito Previdenciário, com atuação focada nessa área. Atendo clientes em Serra e na Grande Vitória, com possibilidade de atendimento digital para todo o Brasil.</p>
              <p className="text-[15px] text-[#767672] leading-[1.75] font-light">A formação especializada me permite acompanhar as frequentes mudanças legislativas e as teses jurisprudenciais que impactam diretamente os benefícios do INSS — um campo que exige atualização constante para uma atuação eficaz.</p>
              <p className="text-[15px] text-[#767672] leading-[1.75] font-light">Acredito que cada caso merece atenção individualizada. Meu objetivo é defender os direitos de quem contribuiu a vida inteira e precisa ter os seus benefícios respeitados.</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#091D39] bg-[#F4F4F2] px-3 py-2 border border-[#E0E0DC]">Pós-graduado em Dir. Previdenciário</span>
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#091D39] bg-[#F4F4F2] px-3 py-2 border border-[#E0E0DC]">OAB/ES 40.152</span>
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#091D39] bg-[#F4F4F2] px-3 py-2 border border-[#E0E0DC]">Atendimento 100% Digital</span>
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

function CTAWppV2() {
  return (
    <section className="py-20 bg-[#091D39] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] opacity-5 bg-cover bg-center mix-blend-overlay" />
      
      <div className="relative z-10 max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-10 bg-[#091D39]/40 backdrop-blur-md border border-white/10 p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left flex-1">
            <h2 className="text-[clamp(24px,3vw,32px)] font-bold text-white tracking-[-0.02em] mb-3 font-heading">Tem dúvidas sobre seu benefício?</h2>
            <p className="text-[16px] text-white/60 font-light max-w-2xl">Entre em contato para uma análise inicial do seu caso. Atendimento direto, transparente e sem burocracia.</p>
          </div>
          <button 
            className="bg-[#25D366] text-white text-[14px] font-bold tracking-[0.1em] uppercase px-8 py-4 flex items-center justify-center gap-3 hover:bg-[#1db957] transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] shrink-0 w-full md:w-auto"
            onClick={() => window.open('https://wa.me/5527999999999','_blank')}
          >
            <Phone size={18} />
            Falar pelo WhatsApp
          </button>
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
    { q: "Quanto tempo demora para o INSS analisar meu pedido?", a: "O prazo legal é de 45 a 90 dias, dependendo do benefício. Porém, na prática, pode demorar muito mais. Se o prazo for ultrapassado de forma abusiva, podemos entrar com um Mandado de Segurança para obrigar o INSS a analisar." },
    { q: "Preciso pagar consulta para analisar meu caso?", a: "A análise preliminar do caso e dos documentos (como o CNIS) para identificar se há viabilidade de atuação não tem custo. Os honorários são cobrados apenas se houver atuação jurídica (administrativa ou judicial)." },
    { q: "O INSS negou minha aposentadoria. Ainda posso recorrer?", a: "Sim. Podemos apresentar um recurso administrativo no próprio INSS ou entrar com uma ação judicial. A escolha depende da análise do motivo da negativa. Muitas vezes, a via judicial é mais rápida e eficiente." },
    { q: "Vocês atendem clientes de fora do Espírito Santo?", a: "Sim. O processo previdenciário e o processo judicial hoje são 100% eletrônicos. Realizamos atendimentos por videochamada e WhatsApp para clientes de todo o Brasil." }
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