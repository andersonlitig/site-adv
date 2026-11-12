import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, ShieldAlert, CheckCircle2, ChevronDown, Mail, MapPin, Scale, Briefcase, FileSearch, AlertTriangle, Info, Calculator, FileText } from "lucide-react";
import logoWhite from "@/assets/logo.png";
import heroImage from "@/assets/revisao_hero_bg_1786155510754.jpg"; // Placeholder or real image
import andersonImg from "@/assets/anderson-litig.png";

function HeaderV2() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-[100] transition-all duration-300 bg-[#091D39] py-3 shadow-lg`}>
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-8">
          <Link href="/" className="no-underline group flex items-center gap-4">
            <img src={logoWhite} alt="Anderson Litig" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
          <nav className="hidden lg:flex gap-1 justify-center">
            <Link href="/"><a className="text-[12px] uppercase tracking-wider font-bold text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors">Início</a></Link>
            <a className="text-[12px] uppercase tracking-wider font-medium text-white px-4 py-2 border-b-2 border-[#CFAE70] cursor-pointer transition-colors" href="#">Revisão</a>
            <Link href="/planejamento"><a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors">Planejamento Previdenciário</a></Link>
            <a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors" href="#faq">Dúvidas</a>
            <a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors" href="#contato">Contato</a>
          </nav>
          <button 
            className="bg-[#CFAE70] text-[#091D39] text-[12px] uppercase tracking-widest font-bold px-6 py-3 flex items-center gap-2 hover:bg-white transition-all duration-300"
            onClick={() => window.open('https://wa.me/5527999999999', '_blank')}
          >
            Fale com o Advogado
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroRevisao() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#091D39] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Revisão de Aposentadoria" className="w-full h-full object-cover opacity-20 object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091D39] via-[#091D39]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#091D39] via-transparent to-transparent"></div>
      </div>

      <div className="max-w-[1160px] mx-auto px-4 md:px-8 relative z-10 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#CFAE70] animate-pulse"></span>
              <span className="text-white/80 text-[11px] font-bold tracking-widest uppercase">Direito Previdenciário</span>
            </div>
            
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold text-white leading-[1.1] mb-6 tracking-tight">
              O INSS errou no <span className="text-[#CFAE70]">cálculo</span> da sua aposentadoria?
            </h1>
            
            <p className="text-[18px] md:text-[20px] text-white/70 font-light leading-relaxed mb-10 max-w-[500px]">
              8 em cada 10 benefícios concedidos possuem erros que diminuem o valor mensal. Analisamos o seu processo de forma 100% matemática para garantir o que é seu por direito.
            </p>

            <button 
              className="group bg-[#CFAE70] text-[#091D39] text-[13px] font-bold tracking-[0.2em] uppercase px-8 py-5 flex items-center justify-center gap-4 hover:bg-white transition-all duration-300 w-full md:w-auto"
              onClick={() => window.open('https://wa.me/5527999999999', '_blank')}
            >
              Pedir Análise Gratuita do Cálculo
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="mt-5 flex items-center gap-2 text-white/50 text-[11px] font-bold tracking-widest uppercase">
              <Info size={14} /> Existe um prazo máximo de 10 anos (Decadência)
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EEATWarning() {
  return (
    <section className="py-12 bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="bg-white border-l-4 border-red-600 p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
          <div className="bg-red-50 p-4 rounded-full text-red-600 shrink-0">
            <AlertTriangle size={32} />
          </div>
          <div>
            <h3 className="text-[20px] font-bold text-[#091D39] mb-3">Muito Cuidado: Pedir revisão direto no INSS pode diminuir sua aposentadoria!</h3>
            <p className="text-[15px] text-[#091D39]/70 leading-relaxed font-light mb-4">
              Ao solicitar uma revisão administrativa sem um <strong>Cálculo Prévio</strong> assinado por um especialista, o INSS revisará todo o seu benefício do zero. Se eles encontrarem algum erro a favor deles, o seu benefício pode ser reduzido ou até cancelado. 
            </p>
            <p className="text-[14px] text-[#091D39] font-medium">
              No escritório Anderson Litig, nós atuamos apenas de forma estratégica: só entramos com o pedido quando o aumento do seu benefício for matematicamente comprovado em nossos sistemas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TiposRevisao() {
  const revisoes = [
    {
      icon: <Briefcase size={24} />,
      title: "Revisão por Insalubridade (Tempo Especial)",
      desc: "Trabalhou exposto a ruído, calor, frio, produtos químicos ou risco biológico (como médicos e enfermeiros)? O INSS frequentemente ignora o PPP. O tempo especial vale mais e aumenta o valor final.",
      highlight: true
    },
    {
      icon: <Scale size={24} />,
      title: "Inclusão de Ação Trabalhista",
      desc: "Você ganhou uma ação na Justiça do Trabalho (hora extra, adicional noturno, vínculo reconhecido)? O INSS não soma isso automaticamente. Nós averbamos essa vitória para aumentar seu benefício."
    },
    {
      icon: <FileSearch size={24} />,
      title: "Buraco Negro do CNIS (Vínculos Omitidos)",
      desc: "Anos de trabalho com carteira assinada que simplesmente sumiram do sistema do INSS e não entraram no cálculo da sua aposentadoria. Recuperamos esses anos."
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Revisão de Tempo Rural ou Militar",
      desc: "Tempo de serviço militar obrigatório ou trabalho na lavoura em regime de economia familiar antes de 1991. O INSS costuma negar, mas a Justiça garante esse direito."
    }
  ];

  return (
    <section className="py-[100px] bg-white border-b border-[#E0E0DC]" id="tipos">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#091D39] leading-[1.2] mb-6">Revisões que Dão Resultado (De Fato)</h2>
          <p className="text-[16px] md:text-[18px] text-[#091D39]/70 max-w-[700px] mx-auto font-light leading-relaxed mb-6">
            Não trabalhamos com aventuras jurídicas. O STF derrubou teses como a "Revisão da Vida Toda", por isso, nosso foco é em <strong>Revisões de Fato</strong>: corrigir erros práticos que o INSS cometeu no seu processo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {revisoes.map((rev, i) => (
            <div key={i} className={`p-8 border transition-all duration-300 ${rev.highlight ? 'bg-[#091D39] text-white border-[#091D39] shadow-lg' : 'bg-[#F4F4F2] border-[#E0E0DC] hover:border-[#CFAE70]'}`}>
              <div className={`w-12 h-12 rounded flex items-center justify-center mb-6 ${rev.highlight ? 'bg-[#CFAE70] text-[#091D39]' : 'bg-white text-[#CFAE70] shadow-sm'}`}>
                {rev.icon}
              </div>
              <h3 className={`text-[20px] font-bold mb-4 ${rev.highlight ? 'text-white' : 'text-[#091D39]'}`}>{rev.title}</h3>
              <p className={`text-[15px] font-light leading-relaxed ${rev.highlight ? 'text-white/80' : 'text-[#091D39]/70'}`}>
                {rev.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAMeio() {
  return (
    <section className="py-[100px] bg-[#CFAE70] relative overflow-hidden">
      <div className="absolute right-[-10%] top-[-50%] w-[50%] h-[200%] bg-white/10 rotate-12 blur-3xl"></div>
      <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center relative z-10">
        <Calculator size={48} className="text-[#091D39] mx-auto mb-8 opacity-80" />
        <h2 className="text-[28px] md:text-[40px] font-bold text-[#091D39] leading-[1.1] mb-6">
          Recebendo menos que um salário mínimo?
        </h2>
        <p className="text-[16px] md:text-[20px] text-[#091D39]/80 font-light leading-relaxed mb-10">
          No Brasil, nenhuma aposentadoria (exceto alguns benefícios fracionados) pode ser inferior ao salário mínimo. Se o seu pagamento está vindo a menor, é hora de agir.
        </p>
        <button 
          onClick={() => window.open('https://wa.me/5527999999999', '_blank')}
          className="group inline-flex items-center gap-4 bg-[#091D39] text-white text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase px-8 py-5 hover:bg-white hover:text-[#091D39] transition-all duration-300"
        >
          <Phone size={18} className="animate-pulse" />
          Falar com Especialista
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

function AboutV2() {
  return (
    <section className="py-[100px] bg-[#091D39] text-white border-b border-white/10" id="sobre">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
          <div className="relative">
            <div className="aspect-[3/4] bg-[#CFAE70]/10 overflow-hidden relative">
              <img src={andersonImg} alt="Dr. Anderson Litig" className="w-full h-full object-cover object-top opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#CFAE70] p-6 shadow-2xl">
              <div className="text-[#091D39] font-bold text-[32px] leading-none mb-1">100%</div>
              <div className="text-[#091D39]/80 text-[11px] font-bold tracking-widest uppercase">Atendimento Digital</div>
            </div>
          </div>
          <div>
            <div className="text-[#CFAE70] text-[11px] font-bold tracking-widest uppercase mb-4">Autoridade e Especialidade</div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-[1.1] mb-8">Dr. Anderson Litig</h2>
            <div className="space-y-6 text-[16px] text-white/60 font-light leading-relaxed">
              <p>Advogado com atuação exclusiva em Direito Previdenciário e membro da Comissão de Direito Previdenciário da OAB/ES (Registro nº 40.152). Pós-graduado na área.</p>
              <p>Diferente de escritórios generalistas, focamos exclusivamente em buscar as melhores soluções contra o INSS. A <strong>revisão de aposentadoria</strong> é um dos processos mais delicados da área, exigindo conhecimento matemático e visão analítica sobre a documentação de uma vida inteira.</p>
              <p>Atuamos de forma ética e transparente, amparados no Provimento nº 205/2021 da OAB, sem promessas irreais, mas com forte embasamento jurídico e cálculos prévios exatos.</p>
            </div>
            <div className="mt-10 flex gap-4">
              <div className="border border-white/20 p-4 w-1/2">
                <Scale size={24} className="text-[#CFAE70] mb-3" />
                <div className="font-bold text-[14px] text-white mb-1">Especialidade Absoluta</div>
                <div className="text-[12px] text-white/50 font-light">Foco total no INSS</div>
              </div>
              <div className="border border-white/20 p-4 w-1/2">
                <CheckCircle2 size={24} className="text-[#CFAE70] mb-3" />
                <div className="font-bold text-[14px] text-white mb-1">Cálculo Matemático</div>
                <div className="text-[12px] text-white/50 font-light">Só revisamos se for lucrativo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQV2() {
  const faqs = [
    { q: "Qual o prazo máximo para pedir a revisão de aposentadoria?", a: "Pela regra de decadência do INSS, você tem até 10 anos a partir do primeiro dia do mês seguinte ao recebimento do primeiro salário de aposentadoria para entrar com o pedido de revisão. Passou desse prazo, perde-se o direito." },
    { q: "Posso perder dinheiro se pedir a revisão?", a: "Se feita diretamente no INSS por conta própria ou por profissionais não especializados, sim. O INSS faz um 'pente-fino' no seu benefício todo e, se achar um erro a favor deles, reduz seu salário. Por isso, nunca entramos com pedido sem o cálculo matemático confirmando o aumento." },
    { q: "Demora muito para receber os 'atrasados'?", a: "Se você tem direito à revisão, você também receberá a diferença de tudo o que deixou de ganhar nos últimos 5 anos (atrasados). O tempo depende da via (administrativa ou judicial), mas trabalhamos para agilizar o processo e obter a tutela mais rápida possível." },
    { q: "A 'Revisão da Vida Toda' ainda vale a pena?", a: "Não. Em março de 2024, o STF julgou a questão inviabilizando essa tese. Escritórios que ainda prometem isso estão agindo de má-fé. Nosso foco é em revisões de fato (insalubridade, tempos não averbados, etc)." },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]" id="faq">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="text-[#CFAE70] text-[11px] font-bold tracking-widest uppercase mb-4">Tire Suas Dúvidas</div>
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#091D39] leading-[1.2]">Dúvidas Frequentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-[#E0E0DC]">
              <button 
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-[#091D39] text-[15px]"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <span className="text-[#CFAE70] shrink-0">
                  {open === i ? <ChevronDown size={18} className="rotate-180 transition-transform" /> : <ChevronDown size={18} className="transition-transform" />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="px-6 pb-6 text-[#091D39]/70 font-light text-[14px] leading-relaxed">
                      {faq.a}
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

function FooterV2() {
  return (
    <footer className="bg-[#091D39]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 py-16 border-b border-white/10">
          <div>
            <Link href="/" className="inline-block mb-4">
              <img src={logoWhite} alt="Anderson Litig" className="h-12 w-auto opacity-90" />
            </Link>
            <div className="text-[12px] font-bold tracking-widest uppercase text-[#CFAE70] mb-4">OAB/ES nº 40.152</div>
            <p className="text-[14px] text-white/50 leading-[1.75] max-w-[320px] font-light">Atendimento jurídico previdenciário especializado com atuação administrativa e judicial. Protegendo seus direitos frente ao INSS com ética e transparência.</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase text-white mb-6">Navegação</h4>
            <Link href="/"><a className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Início</a></Link>
            <a href="/planejamento" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Planejamento Previdenciário</a>
            <a href="#faq" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Dúvidas Frequentes</a>
            <a href="/blog" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Blog Jurídico</a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[12px] font-bold tracking-[0.15em] uppercase text-white mb-6">Áreas</h4>
            <a href="/aposentadorias" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Aposentadorias</a>
            <a href="/revisao-de-aposentadoria" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Revisões</a>
            <a href="/salario-maternidade" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Salário-Maternidade</a>
            <a href="/beneficio-negado" className="text-[14px] font-light text-white/60 mb-3 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Benefício Negado</a>
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
              <span className="text-[14px] font-light text-white/80 leading-relaxed">Atendimento Nacional 100% Digital<br/>para todos os Estados</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RevisaoV2() {
  return (
    <div className="font-sans text-[#2C2C2C] bg-white leading-relaxed overflow-x-hidden selection:bg-[#CFAE70] selection:text-[#091D39]">
      <HeaderV2 />
      <main>
        <HeroRevisao />
        <EEATWarning />
        <TiposRevisao />
        <CTAMeio />
        <AboutV2 />
        <FAQV2 />
      </main>
      <FooterV2 />
    </div>
  );
}
