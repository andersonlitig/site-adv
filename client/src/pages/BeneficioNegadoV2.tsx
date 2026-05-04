import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, ShieldAlert, CheckCircle2, AlertCircle, FileText, Calendar, ChevronDown, Plus, Minus, Mail, MapPin, Search, Clock, Target, Info, Users, Briefcase, FileSearch, ShieldCheck, Scale, Globe, FileSignature, CheckSquare, FastForward, HeadphonesIcon, HelpCircle, Stethoscope } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/3em3-vitoria_15_1767549660783.jpg"; // Using the same hero image for consistency or change if needed

export default function BeneficioNegadoV2() {
  return (
    <div className="font-sans text-[#2C2C2C] bg-white leading-relaxed overflow-x-hidden selection:bg-[#CFAE70] selection:text-[#091D39]">
      <WppFloat />
      <HeaderV2 />
      <main>
        <Breadcrumb />
        <HeroBeneficioNegado />
        <AlertaNegado />
        <MotivosComuns />
        <ComoFunciona />
        <PrazosImportantes />
        <FAQBeneficioNegado />
        <ContatoBeneficioNegado />
      </main>
      <FooterV2 />
    </div>
  );
}

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
          <span className="text-[#091D39] font-bold">Benefício Negado</span>
        </div>
      </div>
    </div>
  );
}

function HeroBeneficioNegado() {
  return (
    <section className="relative bg-[#091D39] py-[80px] md:py-[120px] border-b-4 border-[#CFAE70] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#091D39]/85 z-10" />
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
            Não desista ainda
          </div>
          <h1 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] text-white tracking-[-0.02em] mb-6 font-heading">
            Seu pedido foi negado<br/>
            <span className="text-[#CFAE70] font-normal">pelo INSS?</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-[1.6] mb-10 max-w-[580px] font-light">
            A negativa do INSS não é o fim da linha. Quase metade dos benefícios negados injustamente podem ser revertidos com o recurso administrativo ou judicial correto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="bg-[#CFAE70] text-[#091D39] text-[13px] font-bold px-8 py-4 flex items-center justify-center gap-2 hover:bg-white transition-colors tracking-[0.15em] uppercase shadow-xl"
              onClick={() => document.getElementById('contato')?.scrollIntoView({behavior:'smooth'})}
            >
              <Phone size={16} />
              Falar pelo WhatsApp
            </button>
            <button 
              className="bg-transparent text-white text-[13px] font-bold px-8 py-4 border border-white/30 hover:border-white hover:bg-white/5 transition-all tracking-[0.15em] uppercase flex items-center justify-center"
              onClick={() => document.getElementById('prazos')?.scrollIntoView({behavior:'smooth'})}
            >
              Entenda os prazos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AlertaNegado() {
  return (
    <section className="bg-[#0D0D0D] py-10 border-b-[3px] border-[#DC2626]/30">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-14 h-14 bg-[#DC2626]/10 border border-[#DC2626]/20 flex items-center justify-center shrink-0">
            <ShieldAlert size={24} className="text-[#FCA5A5]" />
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#FCA5A5] mb-1 block">Atenção ao tempo</span>
            <h3 className="text-[15px] text-white/70 leading-[1.65] font-light m-0">
              Você tem apenas <strong className="text-white font-semibold">30 dias</strong> para apresentar um recurso administrativo a partir da data em que tomou ciência da decisão. Não deixe o prazo passar.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MotivosComuns() {
  const motivos = [
    { icon: <FileSearch size={20} />, title: "Falta de documento", desc: "O motivo número um de negativas. O INSS considera o documento ilegível, incompleto ou não aceita as provas apresentadas para comprovar vínculo de emprego." },
    { icon: <Clock size={20} />, title: "Erro de contagem de tempo", desc: "O sistema do INSS frequentemente desconsidera períodos trabalhados que constam em carteira mas não aparecem no CNIS ou ignora averbações." },
    { icon: <Stethoscope size={20} />, title: "Perícia desfavorável", desc: "Aposentadorias por invalidez e auxílios-doença negados por médicos que não avaliam profundamente a incapacidade, mesmo com exames particulares provando a doença." },
    { icon: <Briefcase size={20} />, title: "Aposentadoria por atividade perigosa negada", desc: "O INSS não reconheceu as condições do ambiente de trabalho. A comprovação precisa ser feita com documentos específicos — e muitas vezes exige ajuda técnica para ser aceita." },
    { icon: <Globe size={20} />, title: "Aposentadoria rural negada", desc: "O INSS não aceitou as provas do trabalho no campo. Existem vários documentos alternativos que podem resolver — declarações, notas fiscais, fotos, registros de sindicato e testemunhos." },
    { icon: <Users size={20} />, title: "Pensão por morte negada", desc: "O INSS não reconheceu o vínculo de dependência ou a qualidade de segurado do falecido. Com a documentação correta e argumentação adequada, é possível reverter." }
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
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Principais causas</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">Por que o INSS nega tantos benefícios?</h2>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[600px] font-light mx-auto md:mx-0">
            A maioria dos erros acontece por falhas no sistema ou falta de orientação técnica na hora do pedido.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {motivos.map((m, i) => (
            <motion.div 
              key={i} 
              className="p-8 border-t-4 border-transparent flex flex-col transition-colors duration-300 bg-[#091D39] hover:bg-[#0d2548] hover:border-[#CFAE70]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-5 bg-[#CFAE70]/10 text-[#CFAE70]">
                {m.icon}
              </div>
              <h3 className="text-[16px] font-bold mb-3 leading-[1.4] text-white">{m.title}</h3>
              <p className="text-[14px] leading-[1.65] font-light flex-1 text-white/60">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const etapas = [
    { n: "01", t: "Lemos a carta de negativa e entendemos o motivo real", d: "O motivo que o INSS escreve na carta nem sempre é o problema real. Analisamos o processo completo para identificar exatamente o que levou à negativa — e se ele pode ser contestado." },
    { n: "02", t: "Definimos qual é o caminho mais eficaz para o seu caso", d: "Recurso administrativo, novo pedido ou ação judicial — a escolha depende do tempo passado, da causa da negativa e dos documentos disponíveis. Explicamos as vantagens e os prazos de cada opção com clareza." },
    { n: "03", t: "Reunimos as provas e construímos o argumento", d: "Orientamos a coleta de documentos, solicitamos laudos complementares quando necessário e elaboramos a argumentação técnica para demonstrar que o direito existe — com base na legislação e no histórico específico do caso." },
    { n: "04", t: "Protocolamos o recurso ou abrimos a ação", d: "Fazemos o protocolo do recurso administrativo ou da ação judicial dentro dos prazos. Em casos urgentes — especialmente em benefícios por incapacidade — pedimos que o pagamento comece antes do processo terminar." },
    { n: "05", t: "Acompanhamos até a concessão definitiva", d: "Respondemos a todas as exigências do INSS ou da Justiça e mantemos você informado em cada etapa. Ficamos com o caso até o benefício ser concedido de forma definitiva." }
  ];

  return (
    <section className="py-[80px] md:py-[100px] bg-[#0D0D0D] border-b border-[#CFAE70]/20">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">O que fazemos</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-white tracking-[-0.02em] leading-[1.15] font-heading">Do diagnóstico da negativa<br className="hidden md:block"/>até a reversão do benefício</h2>
          <p className="text-[16px] text-white/50 mt-4 max-w-[600px] font-light mx-auto md:mx-0">
            Cinco etapas explicadas de forma simples.
          </p>
        </motion.div>

        <div className="flex flex-col border border-white/10">
          {etapas.map((v, i) => (
            <motion.div 
              key={i} 
              className="flex border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-[60px] md:w-[80px] border-r border-white/10 flex items-start justify-center shrink-0 pt-8">
                <span className="text-[20px] font-bold text-[#CFAE70] font-heading opacity-50">{v.n}</span>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-[16px] font-bold text-white mb-2">{v.t}</h4>
                <p className="text-[14px] text-white/50 leading-[1.65] font-light">{v.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrazosImportantes() {
  const prazos = [
    { cor: "#DC2626", tempo: "30 dias", title: "Para recurso sem ir à Justiça", desc: "A partir da data em que você tomou ciência da negativa. Depois disso, a via administrativa fecha e o caminho passa a ser exclusivamente judicial — mais longo e mais complexo.", info: "Conta da data na carta, não do protocolo" },
    { cor: "#091D39", tempo: "90 dias", title: "Prazo do INSS para analisar", desc: "O INSS tem 90 dias para dar uma resposta ao pedido. Se esse prazo passar sem resposta, é possível ingressar com ação judicial por omissão — sem precisar esperar a negativa formal.", info: "Silêncio do INSS também pode ser questionado" },
    { cor: "#091D39", tempo: "5 anos", title: "Para ação judicial", desc: "O prazo prescricional para entrar na Justiça é de 5 anos a partir da negativa. Mas cada mês que passa sem agir é um mês de retroativo perdido — quando a ação for ganha, só recebe desde o pedido.", info: "Não espere — cada mês conta" }
  ];

  return (
    <section id="prazos" className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Prazos que você precisa conhecer</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">Três datas que vão definir<br className="hidden md:block"/>as suas opções</h2>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[600px] font-light mx-auto md:mx-0">
            Quanto mais cedo você agir, mais caminhos estão disponíveis — e maior o valor retroativo que pode ser recuperado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {prazos.map((p, i) => (
            <motion.div 
              key={i} 
              className="bg-[#F4F4F2] p-8 border-t-4 transition-colors duration-300 hover:bg-[#E8E8E8]"
              style={{ borderTopColor: p.cor }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-[36px] font-bold leading-none mb-3" style={{ color: p.cor, opacity: i === 0 ? 0.7 : 0.5 }}>{p.tempo}</div>
              <h3 className="text-[16px] font-bold text-[#091D39] mb-3 leading-[1.4]">{p.title}</h3>
              <p className="text-[14px] text-[#767672] leading-[1.65] font-light mb-6">{p.desc}</p>
              
              <div className="mt-auto text-[12px] flex items-center gap-2 text-[#767672] pt-4 border-t border-[#E0E0DC]">
                <span className="w-1.5 h-1.5 bg-[#CFAE70] rounded-full shrink-0" />
                {p.info}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQBeneficioNegado() {
  const faqs = [
    { q: "Se o INSS negou, significa que não tenho direito mesmo?", a: "Não, necessariamente. Uma boa parte das negativas acontece por erro no processamento dos dados, documentação incompleta ou perícia inadequada — não por falta de direito. Em muitos casos, a decisão pode ser revertida quando o processo é feito do jeito certo." },
    { q: "O prazo de 30 dias já passou. Ainda tem o que fazer?", a: "Sim. Você ainda pode entrar com ação judicial — o prazo para isso é de 5 anos a partir da negativa. Em alguns casos, dependendo das circunstâncias, também pode ser estratégico fazer um novo pedido administrativo. O importante é não deixar passar os 5 anos sem agir." },
    { q: "Vou receber os meses que deixei de receber durante o processo?", a: "Quando o processo tem resultado favorável, o INSS é condenado a pagar os valores retroativos desde a data do seu pedido original — com correção monetária. Isso pode representar um valor significativo, dependendo de quanto tempo durou o processo. Por isso o pedido precisa ser feito o mais cedo possível." },
    { q: "Quanto tempo leva um processo judicial previdenciário?", a: "Varia bastante. Nos Juizados Especiais Federais, onde a maioria dos casos previdenciários tramita, o processo costuma ser mais rápido — alguns meses a um ou dois anos. Em casos urgentes, é possível pedir que o pagamento comece antes de o processo terminar, por meio de uma decisão liminar." },
    { q: "Posso ser atendido sem ir pessoalmente a nenhum lugar?", a: "Sim. Todo o atendimento é feito de forma digital — por WhatsApp, vídeo ou e-mail. A carta de negativa e os documentos são enviados por foto ou PDF. Atendo clientes em todo o Brasil." }
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
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">O que as pessoas mais perguntam<br className="hidden md:block"/>depois de receber a negativa</h2>
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

function ContatoBeneficioNegado() {
  return (
    <section id="contato" className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Contato</span>
        <h2 className="text-[clamp(28px,3vw,36px)] font-bold text-[#091D39] tracking-[-0.02em] mb-8 font-heading">Não deixe a negativa<br/>ser a última palavra.</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] border border-[#E0E0DC] shadow-lg items-stretch">
          <div className="p-8 md:p-[48px_44px] bg-[#091D39] relative overflow-hidden flex flex-col justify-center">
            <h2 className="text-[clamp(22px,2.5vw,28px)] font-bold text-white tracking-[-0.02em] mb-3 font-heading border-l-4 border-[#CFAE70] pl-4">Fale com o advogado</h2>
            <p className="text-[15px] text-white/60 leading-[1.65] font-light mb-10 pl-5">Envie a carta de negativa e descreva o que aconteceu. Análise inicial gratuita.</p>
            
            <div className="space-y-6 pl-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="w-4 h-4 text-[#CFAE70]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/40 mb-1">Telefone / WhatsApp</span>
                  <strong className="text-[15px] font-bold text-white">+55 (27) 99999-9999</strong>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Mail className="w-4 h-4 text-[#CFAE70]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/40 mb-1">E-mail</span>
                  <strong className="text-[15px] font-bold text-white break-all">contato@andersonlitig.adv.br</strong>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="w-4 h-4 text-[#CFAE70]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/40 mb-1">Atuação</span>
                  <strong className="text-[15px] font-bold text-white">Serra/ES — Atendimento Nacional 100% Digital</strong>
                </div>
              </div>
            </div>
            
            <button 
              className="mt-10 bg-[#25D366] text-white text-[14px] font-bold tracking-[0.05em] px-6 py-3.5 flex items-center justify-center gap-3 hover:bg-[#1db957] transition-all w-fit ml-5"
              onClick={() => window.open('https://wa.me/5527999999999?text=Ol%C3%A1%2C+tive+um+benef%C3%ADcio+negado+pelo+INSS','_blank')}
            >
              <Phone size={18} />
              Falar pelo WhatsApp agora
            </button>
          </div>
          
          <div className="p-8 md:p-[48px_44px] bg-white flex flex-col justify-center">
            <h3 className="text-[20px] font-bold text-[#091D39] mb-6 font-heading">Envie uma mensagem</h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Nome completo *</label>
                <input type="text" className="w-full p-3 border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]" placeholder="Digite seu nome" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Telefone / WhatsApp *</label>
                <input type="tel" className="w-full p-3 border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">E-mail</label>
                <input type="email" className="w-full p-3 border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]" placeholder="Digite seu e-mail" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Qual é a sua situação? *</label>
                <div className="relative">
                  <select className="w-full p-3 border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39] appearance-none pr-10 cursor-pointer">
                    <option value="" disabled selected>Selecione</option>
                    <option>Aposentadoria negada</option>
                    <option>Auxílio por doença negado</option>
                    <option>BPC/LOAS negado</option>
                    <option>Aposentadoria por atividade perigosa negada</option>
                    <option>Aposentadoria rural negada</option>
                    <option>Pensão por morte negada</option>
                    <option>Outro benefício negado</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#767672] pointer-events-none" size={16} />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Em que fase você está? *</label>
                <div className="relative">
                  <select className="w-full p-3 border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39] appearance-none pr-10 cursor-pointer">
                    <option value="" disabled selected>Selecione</option>
                    <option>Recebi a carta há menos de 30 dias</option>
                    <option>Recebi há mais de 30 dias</option>
                    <option>Já entrei com recurso — foi negado de novo</option>
                    <option>Já tenho processo judicial em andamento</option>
                    <option>Não sei em que fase estou</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#767672] pointer-events-none" size={16} />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Mensagem</label>
                <textarea className="w-full min-h-[90px] resize-y p-3 border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]" placeholder="Descreva brevemente o que aconteceu e qual benefício foi negado..." />
              </div>
            <button 
              type="submit" 
              className="w-full bg-[#091D39] text-white font-sans text-[12px] font-bold tracking-[0.12em] uppercase p-4 mt-2 hover:bg-[#0d2548] transition-all cursor-pointer border-none"
            >
              Enviar mensagem
            </button>
              <div className="text-[11px] text-[#767672] mt-2 leading-[1.5] font-light">Em conformidade com o Provimento nº 205/2021 do CFOAB. As informações deste site têm caráter informativo e não constituem consultoria jurídica.</div>
            </form>
          </div>
        </div >
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
            <a href="/v2/negado" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Benefício Negado</a>
            <a href="#" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Auxílio por incapacidade</a>
            <a href="#" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">BPC/LOAS</a>
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
            <a href="https://wa.me/5527999999999" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">WhatsApp</a>
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