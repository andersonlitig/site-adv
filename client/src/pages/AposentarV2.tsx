import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, ShieldAlert, CheckCircle2, AlertCircle, FileText, Calendar, ChevronDown, Plus, Minus, Mail, MapPin, Search, Clock, Target, Info, Users, Briefcase, FileSearch, ShieldCheck, Scale, Globe, FileSignature, CheckSquare, FastForward, HeadphonesIcon } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/3em3-vitoria_15_1767549660783.jpg"; // Using the same hero image for consistency or change if needed

export default function AposentarV2() {
  return (
    <div className="font-sans text-[#2C2C2C] bg-white leading-relaxed overflow-x-hidden selection:bg-[#CFAE70] selection:text-[#091D39]">
      <WppFloat />
      <HeaderV2 />
      <main>
        <Breadcrumb />
        <HeroAposentar />
        <AlertaAposentar />
        <VantagensAdvogado />
        <TiposAposentadoria />
        <CTAMeio />
        <ComoFunciona />
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
          <span className="text-[#091D39] font-bold">Concessão de Aposentadoria</span>
        </div>
      </div>
    </div>
  );
}

function HeroAposentar() {
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
            Entrada no benefício
          </div>
          <h1 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] text-white tracking-[-0.02em] mb-6 font-heading">
            Está pronto para<br/>
            <span className="text-[#CFAE70] font-normal">se aposentar?</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-[1.6] mb-10 max-w-[580px] font-light">
            O momento mais importante da sua vida de trabalho não pode ter erros. Acompanhamento personalizado para dar entrada no benefício com a certeza de receber o valor correto.
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
              onClick={() => document.getElementById('tipos')?.scrollIntoView({behavior:'smooth'})}
            >
              Tipos de aposentadoria
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AlertaAposentar() {
  return (
    <section className="bg-[#0D0D0D] py-10 border-b-[3px] border-[#CFAE70]/30">
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
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#CFAE70] mb-1 block">Cuidado com o botão "Pedir Aposentadoria"</span>
            <h3 className="text-[15px] text-white/70 leading-[1.65] font-light m-0">
              Clicar no botão do Meu INSS sem conferir os dados antes é o <strong className="text-white font-semibold">maior motivo de benefícios negados</strong> ou concedidos com valores muito abaixo do correto. O sistema não corrige erros sozinho.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

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

function TiposAposentadoria() {
  const tipos = [
    { icon: <Clock size={20} />, title: "Por idade", desc: "Para quem chegou à idade mínima e contribuiu por pelo menos 15 anos. A opção mais simples e comum para trabalhadores urbanos e rurais.", detail: "65 anos (homem) · 62 anos (mulher)" },
    { icon: <Target size={20} />, title: "Por tempo de contribuição", desc: "Para quem trabalhou e contribuiu por muitos anos. Dependendo de quando você começou a trabalhar, pode ser possível se aposentar antes dos 60 anos.", req: "Mais vantajosa para quem começou cedo", destaque: true },
    { icon: <Briefcase size={20} />, title: "Trabalho perigoso ou insalubre", desc: "Quem trabalhou exposto a substâncias ou condições que prejudicam a saúde (químicos, ruído alto, calor extremo) pode se aposentar mais cedo.", detail: "Precisa de comprovação específica" },
    { icon: <Globe size={20} />, title: "Trabalhador rural", desc: "Para quem viveu e trabalhou no campo. Em muitos casos, é possível se aposentar sem ter feito contribuições formais, apenas comprovando o trabalho rural.", detail: "55 anos (mulher) · 60 anos (homem)" },
    { icon: <Users size={20} />, title: "Pessoa com deficiência", desc: "Quem tem deficiência comprovada pode se aposentar com menos tempo de contribuição. Quanto mais grave a deficiência, menor o tempo exigido.", detail: "Avaliação médica necessária" },
    { icon: <MapPin size={20} />, title: "Trabalhei na cidade e no campo", desc: "Quem tem um pouco de cada pode somar os dois períodos. Isso pode garantir a aposentadoria para quem sozinho não atingiria os anos mínimos em nenhum dos dois.", detail: "Combina períodos urbanos e rurais" }
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
          <p className="text-[16px] text-[#767672] mt-4 max-w-[600px] font-light mx-auto md:mx-0">
            Cada pessoa tem uma situação diferente. Veja os tipos mais comuns e não se preocupe — analisamos qual é o melhor para você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {tipos.map((t, i) => (
            <motion.div 
              key={i} 
              className={`p-8 border-t-4 border-transparent flex flex-col transition-colors duration-300 ${t.destaque ? 'bg-[#091D39] hover:bg-[#0d2548] hover:border-[#CFAE70]' : 'bg-[#F4F4F2] hover:bg-[#E8E8E8] hover:border-[#CFAE70]'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`w-12 h-12 flex items-center justify-center mb-5 ${t.destaque ? 'bg-[#CFAE70]/10 text-[#CFAE70]' : 'bg-[#091D39]/5 text-[#091D39]'}`}>
                {t.icon}
              </div>
              <h3 className={`text-[16px] font-bold mb-3 leading-[1.4] ${t.destaque ? 'text-white' : 'text-[#091D39]'}`}>{t.title}</h3>
              <p className={`text-[14px] leading-[1.65] font-light flex-1 ${t.destaque ? 'text-white/60' : 'text-[#767672]'}`}>{t.desc}</p>
              
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

function CTAMeio() {
  return (
    <section className="py-[60px] bg-[#091D39] border-y border-white/5">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-[clamp(20px,2.5vw,26px)] font-bold text-white mb-2 tracking-[-0.01em]">Não sabe qual tipo se aplica a você?</h3>
            <p className="text-[14px] text-white/60 font-light">Sem problema. Analisamos o seu caso e explicamos tudo de forma simples, sem juridiquês.</p>
          </div>
          <button 
            className="bg-[#25D366] text-white text-[14px] font-bold tracking-[0.05em] px-8 py-4 flex items-center justify-center gap-3 hover:bg-[#1db957] transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] shrink-0 w-full md:w-auto whitespace-nowrap"
            onClick={() => window.open('https://wa.me/5527999999999?text=Ol%C3%A1%2C+quero+saber+qual+tipo+de+aposentadoria+se+aplica+ao+meu+caso','_blank')}
          >
            <Phone size={18} />
            Falar com o advogado
          </button>
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const etapas = [
    { n: "01", t: "Você conta sua história de trabalho", d: "Conversamos sobre onde e como você trabalhou ao longo da vida — com carteira, sem carteira, na roça, como autônomo. Não precisa ser especialista: só nos conte o que viveu." },
    { n: "02", t: "A gente analisa tudo e faz as contas", d: "Verificamos seus registros no INSS, identificamos o que pode estar faltando e calculamos qual forma de aposentadoria vai te render o maior valor mensal possível." },
    { n: "03", t: "Você recebe uma orientação clara", d: "Explicamos o resultado sem complicar: qual é a melhor opção para o seu caso, quanto você pode esperar receber e o que precisa ser feito antes de dar entrada." },
    { n: "04", t: "Damos entrada e acompanhamos até o final", d: "Cuidamos de toda a papelada e ficamos de olho no processo até o INSS aprovar. Se aparecer qualquer problema, resolvemos imediatamente." }
  ];

  return (
    <section id="como-funciona" className="py-[80px] md:py-[100px] bg-[#0D0D0D] border-b border-white/5">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Como funciona</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-white tracking-[-0.02em] leading-[1.15] font-heading">O que acontece depois que você entra em contato</h2>
          <p className="text-[16px] text-white/50 mt-4 max-w-[600px] font-light mx-auto md:mx-0">
            Quatro passos simples, do primeiro contato até o benefício aprovado.
          </p>
        </motion.div>

        <div className="flex flex-col border border-white/10">
          {etapas.map((e, i) => (
            <motion.div 
              key={i} 
              className="flex border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-[60px] md:w-[80px] border-r border-white/10 flex items-start justify-center shrink-0 pt-8">
                <span className="text-[20px] font-bold text-[#CFAE70] font-heading opacity-50">{e.n}</span>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-[16px] font-bold text-white mb-2">{e.t}</h4>
                <p className="text-[14px] text-white/50 leading-[1.65] font-light">{e.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQAposentar() {
  const faqs = [
    { q: "Posso dar entrada na aposentadoria sozinho, sem advogado?", a: "Sim, você pode. Mas sem análise técnica, o INSS não vai te avisar se existe uma forma melhor de aposentar ou se o valor poderia ser maior. Muita gente só descobre anos depois que recebeu menos do que tinha direito — e nessa hora é muito difícil corrigir." },
    { q: "Quanto tempo o INSS demora para responder?", a: "O INSS tem até 90 dias para dar uma resposta. Na prática, pedidos bem feitos e com documentação completa costumam ser resolvidos mais rápido. Quando há pendências ou documentação faltando, o prazo começa do zero." },
    { q: "Trabalhei muito tempo sem carteira assinada. Perdi esse período?", a: "Não necessariamente. Em muitos casos, é possível incluir períodos sem registro formal usando outros documentos como contratos, recibos, declarações de empregadores ou testemunhos. Cada situação é diferente, por isso a análise individual é tão importante." },
    { q: "Preciso ir pessoalmente a algum lugar?", a: "Não. Todo o acompanhamento é feito de forma digital — por WhatsApp, vídeo ou e-mail. Você envia os documentos por foto ou PDF. Atendo clientes em todo o Brasil." },
    { q: "E se o INSS negar mesmo assim?", a: "Há dois caminhos: recurso administrativo (sem precisar ir à Justiça) ou ação judicial. Em muitos casos de negativa, a decisão pode ser revertida. O importante é agir dentro dos prazos." }
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

function ContatoAposentar() {
  return (
    <section id="contato" className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Contato</span>
        <h2 className="text-[clamp(28px,3vw,36px)] font-bold text-[#091D39] tracking-[-0.02em] mb-8 font-heading">Pronto para dar entrada<br/>na sua aposentadoria?</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] border border-[#E0E0DC] shadow-lg items-stretch">
          <div className="p-8 md:p-[48px_44px] bg-[#091D39] relative overflow-hidden flex flex-col justify-center">
            <h2 className="text-[clamp(22px,2.5vw,28px)] font-bold text-white tracking-[-0.02em] mb-3 font-heading border-l-4 border-[#CFAE70] pl-4">Fale com o advogado</h2>
            <p className="text-[15px] text-white/60 leading-[1.65] font-light mb-10 pl-5">Análise do seu caso sem compromisso. Atendimento direto e em todo o Brasil.</p>
            
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
              onClick={() => window.open('https://wa.me/5527999999999?text=Ol%C3%A1%2C+quero+dar+entrada+na+minha+aposentadoria','_blank')}
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
                    <option>Já tenho a idade e os anos trabalhados</option>
                    <option>Não sei se já tenho direito</option>
                    <option>Quero saber qual tipo se aplica a mim</option>
                    <option>Trabalhei na roça / zona rural</option>
                    <option>Trabalhei em lugar perigoso ou insalubre</option>
                    <option>Tenho deficiência</option>
                    <option>O INSS negou meu pedido</option>
                    <option>Outro</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#767672] pointer-events-none" size={16} />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Mensagem</label>
                <textarea className="w-full min-h-[90px] resize-y p-3 border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]" placeholder="Conta brevemente onde e como você trabalhou ao longo da vida..." />
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