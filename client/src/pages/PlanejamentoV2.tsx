import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, ShieldAlert, CheckCircle2, AlertCircle, FileText, Calendar, ChevronDown, Plus, Minus, Mail, MapPin, Search, Clock, Target, Info, Users, Briefcase, FileSearch, ShieldCheck, Scale, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/3em3-vitoria_15_1767549660783.jpg";

export default function PlanejamentoV2() {
  return (
    <div className="font-sans text-[#2C2C2C] bg-white leading-relaxed overflow-x-hidden selection:bg-[#CFAE70] selection:text-[#091D39]">
      <WppFloat />
      <HeaderV2 />
      <main>
        <Breadcrumb />
        <HeroPlanejamento />
        <AlertaCNIS />
        <Respostas />
        <PorQuePlanejar />
        <ParaQuem />
        <ComoFunciona />
        <CTAMeio />
        <Cenarios />
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
            Antes da Aposentadoria
          </div>
          <h1 className="text-[clamp(32px,4.5vw,48px)] font-bold leading-[1.1] text-white tracking-[-0.02em] mb-6 font-heading">
            Planejamento estratégico:<br/>
            <span className="text-[#CFAE70] font-normal">estudo completo da sua vida previdenciária</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-[1.6] mb-10 max-w-[580px] font-light">
            Saber o momento certo de se aposentar pode significar anos de diferença — e mais dinheiro no bolso todo mês. Sem achismo, sem simulação de site: uma análise real do seu caso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="bg-[#CFAE70] text-[#091D39] text-[13px] font-bold px-8 py-4 flex items-center justify-center gap-2 hover:bg-white transition-colors tracking-[0.15em] uppercase shadow-xl"
              onClick={() => document.getElementById('contato')?.scrollIntoView({behavior:'smooth'})}
            >
              <Phone size={16} />
              Quero meu planejamento
            </button>
            <button 
              className="bg-transparent text-white text-[13px] font-bold px-8 py-4 border border-white/30 hover:border-white hover:bg-white/5 transition-all tracking-[0.15em] uppercase flex items-center justify-center"
              onClick={() => document.getElementById('como-funciona')?.scrollIntoView({behavior:'smooth'})}
            >
              Como funciona
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AlertaCNIS() {
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
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#CFAE70] mb-1 block">Atenção importante</span>
            <h3 className="text-[15px] text-white/70 leading-[1.65] font-light m-0">
              Simular a aposentadoria no site do INSS <strong className="text-white font-semibold">não garante que você receberá o valor exibido.</strong> A simulação lê o CNIS automaticamente e, na maioria dos casos, esse cadastro contém erros, lacunas ou omissões que reduzem o benefício sem que você perceba.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Respostas() {
  const itens = [
    { icon: <Clock size={20} />, title: "Quanto tempo de contribuição você tem", desc: "Verificamos o CNIS completo, incluindo períodos omitidos e não reconhecidos" },
    { icon: <Calendar size={20} />, title: "Quando você poderá se aposentar", desc: "Data estimada para cada modalidade disponível no seu perfil" },
    { icon: <Target size={20} />, title: "Com qual valor você poderá se aposentar", desc: "Estimativa do benefício em cada modalidade e comparação de cenários" },
    { icon: <CheckCircle2 size={20} />, title: "Quais pendências existem e como resolver", desc: "Períodos sem registro, lacunas no CNIS e erros que precisam ser corrigidos" }
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
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">O que você vai descobrir</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">Respostas concretas sobre<br className="hidden md:block"/>a sua aposentadoria</h2>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[500px] font-light mx-auto md:mx-0">
            Respondemos essas quatro perguntas para você — sem enrolação e sem juridiquês.
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

function PorQuePlanejar() {
  const motivos = [
    { n: "01", t: "Erros e lacunas no seu CNIS", d: "O registro do INSS sobre a sua vida de trabalho está errado em muitos casos. Tempo trabalhado que não aparece, datas erradas, valores incorretos — tudo isso pode estar reduzindo o seu benefício sem que você perceba." },
    { n: "02", t: "A modalidade mais vantajosa para o seu perfil", d: "Desde 2019, existem várias formas diferentes de se aposentar. Escolher a errada pode significar esperar anos a mais ou receber bem menos do que você tem direito. A análise encontra qual é a melhor para o seu perfil." },
    { n: "03", t: "Períodos que o INSS não está contando", d: "Tempo trabalhado sem carteira, no campo, como autônomo ou por conta própria muitas vezes não aparece nos registros do INSS — mas pode ser aproveitado. Muita gente deixa anos de trabalho de fora sem saber." },
    { n: "04", t: "Se você tem direito à aposentadoria especial", d: "Quem trabalhou em lugares perigosos, com produtos químicos, barulho alto, calor extremo ou outros riscos pode ter direito a se aposentar mais cedo. Esse direito precisa ser identificado e comprovado antes de dar entrada." }
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
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Por que planejar</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">O que um planejamento previdenciário revela</h2>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[600px] font-light mx-auto md:mx-0">
            Além de saber a data e o valor da aposentadoria, o estudo técnico identifica oportunidades e riscos que a maioria das pessoas desconhece.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {motivos.map((m, i) => (
            <motion.div 
              key={i} 
              className="bg-[#F4F4F2] p-8 flex gap-6 hover:bg-[#E8E8E8] transition-colors border-t-4 border-transparent hover:border-[#CFAE70]"
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
    { icon: <Clock size={20} />, title: "Está próximo da aposentadoria", desc: "Falta pouco para você se aposentar. O planejamento mostra a data certa para dar entrada e evita que você perca dinheiro por agir antes ou depois da hora." },
    { icon: <FileSearch size={20} />, title: "Tem períodos sem registro", desc: "Trabalhou sem carteira assinada, por conta própria ou na informalidade? Esse tempo pode contar — e o INSS muitas vezes não inclui automaticamente." },
    { icon: <ShieldCheck size={20} />, title: "Trabalhou em condições especiais", desc: "Trabalhou em ambiente perigoso, insalubre ou com risco à saúde? Isso pode dar direito a se aposentar mais cedo — mas precisa ser comprovado antes de dar entrada." },
    { icon: <Scale size={20} />, title: "Tem dúvidas sobre a Reforma", desc: "A reforma de 2019 mudou muita coisa, mas quem já trabalhava antes disso pode ter condições melhores do que as regras atuais. Muita gente não sabe que tem esse direito." },
    { icon: <Globe size={20} />, title: "Trabalhou na zona rural", desc: "Tempo trabalhado no campo pode ser aproveitado mesmo sem contribuições formais ao INSS. Quem trabalhou na cidade e na roça pode somar os dois períodos." },
    { icon: <Target size={20} />, title: "Quer maximizar o valor do benefício", desc: "Mesmo quem já pode se aposentar pode ganhar mais esperando um pouco. O planejamento mostra se vale a pena esperar — e quanto a mais você vai receber todo mês se esperar." }
  ];

  return (
    <section className="py-[80px] md:py-[100px] bg-[#091D39] relative border-b border-white/10">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000')] opacity-5 bg-cover bg-center mix-blend-overlay" />
      
      <div className="relative z-10 max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Perfis atendidos</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-white tracking-[-0.02em] leading-[1.15] font-heading">Para quem é o planejamento previdenciário?</h2>
          <p className="text-[16px] text-white/50 mt-4 max-w-[600px] font-light mx-auto md:mx-0">
            O planejamento é recomendado para qualquer pessoa que contribui ou já contribuiu para o INSS. Veja se você se identifica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 shadow-2xl">
          {perfis.map((p, i) => (
            <motion.div 
              key={i} 
              className="bg-white/5 backdrop-blur p-8 border-t-4 border-transparent hover:border-[#CFAE70] hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#CFAE70]/10 mb-5 text-[#CFAE70]">
                {p.icon}
              </div>
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
    { n: "01", t: "Você conta a sua história de trabalho", d: "Conversamos sobre tudo: onde você trabalhou, por quanto tempo, se foi com carteira ou sem, se trabalhou no campo, por conta própria ou em lugar perigoso. Não precisa ser especialista — só nos conte o que viveu.", tags: ["Vínculos empregatícios", "Trabalho autônomo", "Atividade rural", "Processos trabalhistas"] },
    { n: "02", t: "A gente verifica tudo no registro do INSS", d: "Checamos cada período de trabalho nos registros do INSS. Identificamos o que está faltando, o que está errado e o que pode ser incluído para aumentar o seu benefício." },
    { n: "03", t: "Fazemos as contas de todas as opções", d: "Calculamos quanto você receberia em cada forma de aposentadoria disponível para o seu caso. Comparamos as datas e os valores — e mostramos qual é a mais vantajosa para você.", tags: ["Regras de transição", "Regras definitivas", "Aposentadoria especial", "Aposentadoria rural"] },
    { n: "04", t: "Você recebe a orientação em linguagem simples", d: "Explicamos tudo com clareza: qual é a melhor data para se aposentar, quanto você pode esperar receber e se tem alguma pendência a resolver antes de dar entrada. Sem enrolação, sem juridiquês." },
    { n: "05", t: "Se quiser, cuidamos de tudo até o final", d: "Se optar por prosseguir com o pedido de aposentadoria, acompanhamos tudo junto ao INSS — da papelada até o benefício ser aprovado e o dinheiro começar a cair." }
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
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Processo</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-white tracking-[-0.02em] leading-[1.15] font-heading">Como funciona o planejamento</h2>
          <p className="text-[16px] text-white/50 mt-4 max-w-[600px] font-light mx-auto md:mx-0">
            Cinco etapas do primeiro contato até o diagnóstico completo da sua aposentadoria.
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
                {e.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {e.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] text-white/40 bg-white/5 border border-white/10 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
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
            <h3 className="text-[clamp(20px,2.5vw,26px)] font-bold text-white mb-2 tracking-[-0.01em]">Quer saber quando e como se aposentar?</h3>
            <p className="text-[14px] text-white/60 font-light">Entre em contato e analisamos o seu caso de forma simples e sem compromisso.</p>
          </div>
          <button 
            className="bg-[#25D366] text-white text-[14px] font-bold tracking-[0.05em] px-8 py-4 flex items-center justify-center gap-3 hover:bg-[#1db957] transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] shrink-0 w-full md:w-auto whitespace-nowrap"
            onClick={() => window.open('https://wa.me/5527999999999?text=Ol%C3%A1%2C+gostaria+de+fazer+um+planejamento+previdenci%C3%A1rio','_blank')}
          >
            <Phone size={18} />
            Falar pelo WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

function Cenarios() {
  return (
    <section className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Exemplo prático</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">O planejamento pode fazer grande diferença</h2>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[600px] font-light mx-auto md:mx-0">
            Veja como a escolha da data e da modalidade impacta o valor do benefício na prática. Os valores são ilustrativos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC] shadow-lg">
          <div className="bg-white p-8 flex flex-col">
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-4 block">Cenário A — Sem planejamento</span>
            <h3 className="text-[18px] font-bold text-[#091D39] mb-3 leading-[1.3]">Entrada imediata pelo Meu INSS</h3>
            <p className="text-[14px] text-[#767672] leading-[1.6] font-light flex-grow">O segurado solicita a aposentadoria pela simulação online sem verificar erros no CNIS, períodos não reconhecidos ou modalidades alternativas.</p>
            <div className="mt-6 p-4 bg-[#F4F4F2] text-[13px] text-[#091D39] font-medium">Resultado: benefício calculado com dados incompletos, frequentemente abaixo do valor correto.</div>
          </div>
          
          <div className="bg-[#091D39] p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#CFAE70]/5 skew-x-12 translate-x-1/4" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-block bg-[#CFAE70] text-[#091D39] text-[10px] font-bold tracking-[0.08em] uppercase px-3 py-1 mb-4 w-fit">Recomendado</div>
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#CFAE70] mb-4 block">Cenário B — Com planejamento</span>
              <h3 className="text-[18px] font-bold text-white mb-3 leading-[1.3]">Estudo antes de dar entrada</h3>
              <p className="text-[14px] text-white/60 leading-[1.6] font-light flex-grow">A análise identifica períodos não reconhecidos, verifica a modalidade mais vantajosa e confirma se o CNIS está correto antes do pedido.</p>
              <div className="mt-6 p-4 bg-[#CFAE70]/15 text-[#CFAE70] text-[13px] font-medium border border-[#CFAE70]/30">Resultado: benefício concedido com o maior valor possível, sem erros e sem necessidade de revisão posterior.</div>
            </div>
          </div>
          
          <div className="bg-white p-8 flex flex-col">
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-4 block">Cenário C — Sem planejar a data</span>
            <h3 className="text-[18px] font-bold text-[#091D39] mb-3 leading-[1.3]">Aposentar antes do momento ideal</h3>
            <p className="text-[14px] text-[#767672] leading-[1.6] font-light flex-grow">O segurado dá entrada por conta própria sem saber que aguardar alguns meses resultaria em um valor significativamente maior pelo fator de cálculo.</p>
            <div className="mt-6 p-4 bg-[#F4F4F2] text-[13px] text-[#091D39] font-medium">Resultado: perda permanente de valor no benefício — impossível de corrigir após a concessão.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQPlanejamento() {
  const faqs = [
    { q: "Quais documentos são necessários?", a: (
      <div className="space-y-4">
        <p>Para começar o planejamento, é importante reunir os principais documentos. O advogado vai orientar o que é indispensável para o seu caso. Não é necessário ter todos para iniciar o contato.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <strong className="text-[#091D39] block mb-2">Pessoais e Acesso</strong>
            <ul className="space-y-1">
              <li>• RG, CPF e Comprovante de residência</li>
              <li>• Certidão de nascimento ou casamento</li>
              <li>• Cadastro no Meu INSS (gov.br)</li>
            </ul>
          </div>
          <div>
            <strong className="text-[#091D39] block mb-2">Profissionais</strong>
            <ul className="space-y-1">
              <li>• Carteira de trabalho (CTPS) completas</li>
              <li>• Carnês de contribuição autônoma</li>
              <li>• PPP (condições especiais) e Laudos médicos</li>
            </ul>
          </div>
        </div>
      </div>
    ) },
    { q: "A simulação do Meu INSS não é suficiente?", a: "Não. A simulação é uma leitura automática do CNIS e depende de todos os dados estarem corretos e completos — o que raramente acontece. Ela não considera períodos não registrados, atividade rural, condições especiais, erros de cadastro ou regras de transição. O valor exibido pode ser inferior ao que você realmente tem direito." },
    { q: "Posso fazer o planejamento se ainda falta muito para me aposentar?", a: "Sim, e é ainda mais recomendado. Quem planeja com antecedência pode regularizar contribuições em atraso, incluir períodos não reconhecidos e definir a melhor estratégia para os próximos anos. Isso impacta diretamente o valor final do benefício." },
    { q: "O que são as regras de transição da Reforma da Previdência?", a: "São regras criadas pela EC 103/2019 para quem já contribuía antes de novembro de 2019. Em vez de exigir as novas idades mínimas de imediato, a reforma criou um período de transição com requisitos progressivos. Dependendo do seu tempo de contribuição, pode ser possível se aposentar com condições mais favoráveis do que as regras definitivas exigem." },
    { q: "Quem trabalhou sem carteira tem direito à aposentadoria?", a: "Pode ter. O período trabalhado sem carteira pode ser reconhecido por meio de provas alternativas como contratos, testemunhos e documentos trabalhistas. Já o trabalho como autônomo pode ser reconhecido se houver contribuição como segurado facultativo ou individual. Cada caso exige análise individual." },
    { q: "Como sei se trabalhei em condições especiais?", a: "Atividades com exposição a ruído acima de níveis seguros, produtos químicos, calor excessivo, agentes biológicos, entre outros, podem caracterizar condição especial. O reconhecimento exige o PPP (Perfil Profissiográfico Previdenciário) emitido pelo empregador. A análise do histórico ocupacional é parte do planejamento." },
    { q: "O atendimento pode ser feito de forma online?", a: "Sim. Todo o processo de planejamento pode ser realizado de forma digital — por WhatsApp, videochamada ou e-mail. O envio de documentos é feito por foto ou digitalização. Atendo clientes em todo o Brasil sem necessidade de deslocamento." }
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
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Dúvidas frequentes</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">Perguntas sobre planejamento previdenciário</h2>
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

function ContatoPlanejamento() {
  return (
    <section id="contato" className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Contato</span>
        <h2 className="text-[clamp(28px,3vw,36px)] font-bold text-[#091D39] tracking-[-0.02em] mb-8 font-heading">Inicie seu planejamento previdenciário</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] border border-[#E0E0DC] shadow-lg items-stretch">
          <div className="p-8 md:p-[48px_44px] bg-[#091D39] relative overflow-hidden flex flex-col justify-center">
            <h2 className="text-[clamp(22px,2.5vw,28px)] font-bold text-white tracking-[-0.02em] mb-3 font-heading border-l-4 border-[#CFAE70] pl-4">Fale com o advogado</h2>
            <p className="text-[15px] text-white/60 leading-[1.65] font-light mb-10 pl-5">Tire suas dúvidas e descubra qual a melhor estratégia para a sua aposentadoria. Atendimento direto e sem burocracia.</p>
            
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
              onClick={() => window.open('https://wa.me/5527999999999?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+planejamento+previdenci%C3%A1rio','_blank')}
            >
              <Phone size={18} />
              Iniciar conversa pelo WhatsApp
            </button>
          </div>
          
          <div className="p-8 md:p-[48px_44px] bg-white flex flex-col justify-center">
            <h3 className="text-[20px] font-bold text-[#091D39] mb-6 font-heading">Solicitar planejamento</h3>
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
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Qual é a sua situação atual? *</label>
                <div className="relative">
                  <select className="w-full p-3 border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39] appearance-none pr-10 cursor-pointer">
                    <option value="" disabled selected>Selecione</option>
                    <option>Ainda não me aposentei, quero planejar</option>
                    <option>Estou próximo de me aposentar</option>
                    <option>Tenho dúvidas sobre qual modalidade escolher</option>
                    <option>Quero verificar se já tenho direito</option>
                    <option>Quero regularizar períodos não reconhecidos</option>
                    <option>Outro</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#767672] pointer-events-none" size={16} />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-2">Mensagem</label>
                <textarea className="w-full min-h-[90px] resize-y p-3 border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]" placeholder="Descreva brevemente sua situação (tempo de trabalho, atividade, dúvidas...)" />
              </div>
            <button 
              type="submit" 
              className="w-full bg-[#091D39] text-white font-sans text-[12px] font-bold tracking-[0.12em] uppercase p-4 mt-2 hover:bg-[#0d2548] transition-all cursor-pointer border-none"
            >
              Solicitar planejamento
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
            <a href="#" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Aposentadorias</a>
            <a href="#" className="text-[13px] font-light text-white/40 mb-2.5 hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Planejamento Previdenciário</a>
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