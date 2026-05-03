import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, ShieldAlert, CheckCircle2, AlertCircle, FileText, Calendar, ChevronDown, Plus, Minus } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/3em3-vitoria_15_1767549660783.jpg";

export default function PlanejamentoV2() {
  return (
    <div className="font-sans text-[#2C2C2C] bg-white leading-relaxed overflow-x-hidden selection:bg-[#CFAE70] selection:text-[#091D39]">
      <HeaderV2 />
      <main>
        <Breadcrumb />
        <HeroPlanejamento />
        <AlertaCNIS />
        <Descobrir />
        <PorQuePlanejar />
        <ParaQuem />
        <ComoFunciona />
        <FAQPlanejamento />
        <CTAFinal />
      </main>
      <FooterV2 />
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
            <a className="text-[12px] uppercase tracking-wider font-bold text-white px-4 py-2 border-b-2 border-[#CFAE70] cursor-pointer transition-colors" href="#">Planejamento</a>
            <Link href="/v2#servicos"><a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors">Serviços</a></Link>
            <Link href="/v2#sobre"><a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors">Sobre</a></Link>
            <Link href="/v2#contato"><a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors">Contato</a></Link>
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
    <section className="relative bg-[#091D39] py-[80px] md:py-[120px] border-b-4 border-[#CFAE70] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#091D39]/90 z-10" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#CFAE70]/30 bg-[#CFAE70]/10 text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-6">
            <Calendar size={14} /> Serviço Especializado
          </div>
          <h1 className="text-[clamp(32px,4vw,56px)] font-bold leading-[1.1] text-white tracking-[-0.02em] mb-6 font-heading">
            O que você faz hoje define <span className="text-[#CFAE70]">o valor do seu benefício amanhã.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-[1.6] mb-10 max-w-[580px] font-light">
            O Planejamento Previdenciário é um estudo técnico completo do seu histórico de trabalho. Descubra o melhor momento para se aposentar, a modalidade mais vantajosa e o valor projetado do seu benefício.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="bg-[#CFAE70] text-[#091D39] text-[13px] font-bold px-8 py-4 flex items-center justify-center gap-2 hover:bg-white transition-colors tracking-[0.15em] uppercase shadow-xl"
              onClick={() => window.open('https://wa.me/5527999999999','_blank')}
            >
              <Phone size={16} />
              Solicitar Orçamento
            </button>
            <button 
              className="bg-transparent text-white text-[13px] font-bold px-8 py-4 border border-white/30 hover:border-white hover:bg-white/5 transition-all tracking-[0.15em] uppercase flex items-center justify-center"
              onClick={() => document.getElementById('descobrir')?.scrollIntoView({behavior:'smooth'})}
            >
              Entender o Estudo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AlertaCNIS() {
  return (
    <section className="bg-[#2C2C2C] py-10 border-b border-black/20">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-14 h-14 bg-[#CFAE70]/10 border border-[#CFAE70]/20 flex items-center justify-center shrink-0">
            <ShieldAlert size={24} className="text-[#CFAE70]" />
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#CFAE70] mb-1 block">Atenção ao seu histórico</span>
            <p className="text-[15px] text-white/80 leading-[1.6] font-light m-0">
              Mais de <strong className="text-white font-semibold">60% dos segurados do INSS</strong> possuem erros ou vínculos não registrados no CNIS (extrato previdenciário). O Planejamento detecta essas falhas antes que elas prejudiquem ou atrasem o pedido da sua aposentadoria.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Descobrir() {
  const itens = [
    { title: "Tempo Exato", desc: "Cálculo preciso do tempo de contribuição, considerando conversões (tempo especial, rural, militar) e períodos que podem ser averbados." },
    { title: "Cenários de Aposentadoria", desc: "Projeção de todas as regras de transição vigentes após a Reforma de 2019 aplicáveis ao seu caso." },
    { title: "Projeção de Valores (RMI)", desc: "Estimativa do valor inicial do seu benefício para cada regra aplicável, baseada no seu histórico de salários." },
    { title: "ROI Previdenciário", desc: "Cálculo do Retorno Sobre o Investimento. Descubra se vale a pena continuar pagando, pagar mais, ou se aguardar um pouco mais trará vantagem financeira real." }
  ];

  return (
    <section id="descobrir" className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">O que o estudo entrega</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">O que você vai descobrir</h2>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[600px] font-light mx-auto md:mx-0">
            O Planejamento resulta em um parecer jurídico completo (documento escrito) detalhando toda a sua vida previdenciária.
          </p>
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
              <div className="w-12 h-12 bg-[#091D39]/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <CheckCircle2 size={20} className="text-[#091D39] group-hover:text-[#CFAE70]" />
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

function PorQuePlanejar() {
  const motivos = [
    { n: "01", t: "Evitar indeferimentos", d: "Ao dar entrada na aposentadoria no 'escuro', o risco do INSS negar o pedido ou conceder um valor inferior por falha no sistema é enorme." },
    { n: "02", t: "Não rasgar dinheiro", d: "Muitos continuam pagando o INSS (ou pagando sobre o teto) quando já atingiram os requisitos, ou quando pagar mais não alterará o valor da aposentadoria." },
    { n: "03", t: "Identificar documentos faltantes", d: "Descobrir anos antes de se aposentar que falta a PPP (Perfil Profissiográfico Previdenciário) de uma empresa que já faliu permite buscar soluções jurídicas com tempo." },
    { n: "04", t: "Escolher a melhor regra", d: "A Reforma da Previdência (EC 103/2019) criou diversas regras de transição. Somente o cálculo mostra, matematicamente, qual entregará mais dinheiro ao longo do tempo." }
  ];

  return (
    <section className="py-[80px] md:py-[100px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">Por que planejar antes de pedir?</h2>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[600px] mx-auto font-light">
            Não é apenas sobre "saber a data". É sobre proteção patrimonial e segurança financeira.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {motivos.map((m, i) => (
            <motion.div 
              key={i} 
              className="bg-[#F4F4F2] p-8 flex gap-6 hover:bg-[#E8E8E8] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-[32px] font-bold text-[#CFAE70] leading-none font-heading mt-1">{m.n}</div>
              <div>
                <h4 className="text-[16px] font-bold text-[#091D39] mb-2">{m.t}</h4>
                <p className="text-[14px] text-[#767672] leading-[1.65] font-light">{m.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParaQuem() {
  const perfis = [
    { title: "Faltam 5 anos ou menos", desc: "O momento exato. Permite organizar a documentação com calma e ajustar os últimos pagamentos para maximizar o benefício." },
    { title: "Autônomos e Empresários", desc: "Essenciais para quem recolhe como facultativo/contribuinte individual. Descubra qual alíquota pagar (11% ou 20%) sem jogar dinheiro fora." },
    { title: "Tempo Especial (Insalubridade)", desc: "Profissionais da saúde, vigilantes, frentistas, etc. A conversão de tempo especial para comum mudou em 2019, o cálculo exato é vital." }
  ];

  return (
    <section className="py-[80px] md:py-[100px] bg-[#091D39] relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000')] opacity-5 bg-cover bg-center mix-blend-overlay" />
      
      <div className="relative z-10 max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Público-alvo</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-white tracking-[-0.02em] leading-[1.15] font-heading">Para quem é recomendado?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 shadow-2xl">
          {perfis.map((p, i) => (
            <motion.div 
              key={i} 
              className="bg-[#091D39]/80 backdrop-blur p-8 border-t-4 border-transparent hover:border-[#CFAE70] hover:bg-[#091D39] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-[16px] font-bold text-white mb-4 leading-[1.4]">{p.title}</h3>
              <p className="text-[14px] text-white/60 leading-[1.65] font-light">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const etapas = [
    { n: "01", t: "Reunião Inicial", d: "Entrevista para coleta de dados, fornecimento da senha do 'Meu INSS' e assinatura do contrato de honorários específicos para o planejamento." },
    { n: "02", t: "Análise Documental", d: "Auditoria minuciosa no seu CNIS confrontando com suas carteiras de trabalho, carnês e processos trabalhistas." },
    { n: "03", t: "Cálculos Previdenciários", d: "Utilização de software especializado para projetar todas as regras de aposentadoria e o valor (RMI) em cada cenário." },
    { n: "04", t: "Entrega do Parecer", d: "Reunião de devolução onde apresentamos o documento escrito (parecer jurídico) com os diagnósticos, valores, ROI e o plano de ação sugerido." }
  ];

  return (
    <section className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Passo a passo</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">Como o serviço é prestado</h2>
        </motion.div>

        <div className="flex flex-col border border-[#E0E0DC] bg-white shadow-sm">
          {etapas.map((e, i) => (
            <motion.div 
              key={i} 
              className="flex border-b border-[#E0E0DC] last:border-0 hover:bg-[#F4F4F2] transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-[80px] border-r border-[#E0E0DC] flex items-center justify-center shrink-0">
                <span className="text-[20px] font-bold text-[#CFAE70] font-heading opacity-50">{e.n}</span>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-[16px] font-bold text-[#091D39] mb-2">{e.t}</h4>
                <p className="text-[14px] text-[#767672] leading-[1.65] font-light">{e.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQPlanejamento() {
  const faqs = [
    { q: "O Planejamento garante que o INSS vai me aposentar nesse valor?", a: "O planejamento previdenciário baseia-se na legislação vigente no momento da análise e nas informações registradas. Ele projeta com alta precisão os cenários, mas o INSS sempre fará sua própria análise ao final. O papel do planejamento é justamente munir você de provas e informações para forçar o INSS a conceder o benefício mais vantajoso, e servir de base para uma eventual ação judicial se o INSS errar." },
    { q: "E se a lei mudar de novo?", a: "O estudo projeta com base na legislação atual (incluindo as regras de transição da EC 103/19). Quem já atingiu os requisitos possui 'Direito Adquirido'. Se houver nova reforma antes de você completar os requisitos, os cenários futuros precisarão ser recalculados. Por isso recomendamos planejar quando faltam até 5 anos." },
    { q: "Quanto custa o serviço?", a: "O Planejamento Previdenciário é um serviço consultivo (parecer jurídico) e possui honorários fixos, estabelecidos com base na tabela da OAB/ES e na complexidade do caso (ex: muitos vínculos rurais ou insalubres exigem mais horas de cálculo). O valor é informado na reunião inicial, após entendermos sua demanda." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-[80px] md:py-[100px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">Dúvidas sobre o serviço</h2>
        </motion.div>
        
        <div className="flex flex-col gap-4">
          {faqs.map((f, i) => (
            <div 
              key={i} 
              className={`bg-[#F4F4F2] border ${openIdx === i ? 'border-[#CFAE70] shadow-sm' : 'border-[#E0E0DC]'} transition-all duration-300`}
            >
              <div 
                className="p-6 cursor-pointer flex items-center justify-between gap-4"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className={`text-[15px] font-bold transition-colors ${openIdx === i ? 'text-[#091D39]' : 'text-[#091D39]'}`}>{f.q}</span>
                <span className={`w-8 h-8 flex items-center justify-center rounded-full shrink-0 transition-colors ${openIdx === i ? 'bg-[#CFAE70] text-white' : 'bg-[#E0E0DC] text-[#091D39]'}`}>
                  {openIdx === i ? <Minus size={14} /> : <Plus size={14} />}
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
                    <div className="px-6 pb-6 pt-0 text-[14px] text-[#767672] leading-[1.7] font-light border-t border-[#E0E0DC] mt-2 pt-4">
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

function CTAFinal() {
  return (
    <section className="py-[60px] md:py-[80px] bg-[#091D39] text-center border-b-[8px] border-[#CFAE70]">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <h2 className="text-[clamp(24px,3vw,32px)] font-bold text-white tracking-[-0.02em] mb-4 font-heading">
          Não deixe sua aposentadoria para a última hora
        </h2>
        <p className="text-[16px] text-white/60 leading-[1.65] font-light mb-8 max-w-[600px] mx-auto">
          Fale conosco e entenda como um Planejamento Previdenciário pode trazer segurança para o seu futuro financeiro.
        </p>
        <button 
          className="bg-[#25D366] text-white text-[14px] font-bold tracking-[0.1em] uppercase px-10 py-5 inline-flex items-center justify-center gap-3 hover:bg-[#1db957] transition-all shadow-lg mx-auto w-full sm:w-auto"
          onClick={() => window.open('https://wa.me/5527999999999','_blank')}
        >
          <Phone size={18} />
          Agendar Consulta Inicial
        </button>
      </div>
    </section>
  );
}

function FooterV2() {
  return (
    <footer className="bg-[#091D39] pt-8 pb-6 border-t border-white/10">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-white/40 font-light">
          <span>&copy; {new Date().getFullYear()} Anderson Litig. OAB/ES 40.152. Todos os direitos reservados.</span>
          <span>Desenvolvido com excelência técnica e visual.</span>
        </div>
      </div>
    </footer>
  );
}