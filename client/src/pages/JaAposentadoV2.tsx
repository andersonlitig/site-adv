import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, ShieldAlert, CheckCircle2, AlertCircle, FileText, Calendar, ChevronDown, Plus, Minus, Mail, MapPin, Search, Clock, Target, Info, Users, Briefcase, FileSearch, ShieldCheck, Scale, Globe, ReceiptText, HandHeart, AlertTriangle } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/3em3-vitoria_15_1767549660783.jpg";

export default function JaAposentadoV2() {
  return (
    <div className="font-sans text-[#2C2C2C] bg-white leading-relaxed overflow-x-hidden selection:bg-[#CFAE70] selection:text-[#091D39]">
      <WppFloat />
      <HeaderV2 />
      <main>
        <Breadcrumb />
        <HeroJaAposentado />
        <AlertaCNIS />
        <DuasSituacoes />
        <RevisaoBeneficio />
        <DescontosIndevidos />
        <MidCTA />
        <ComoFunciona />
        <OutrosDireitos />
        <FAQJaAposentado />
        <ContatoJaAposentado />
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
          <Link href="/" className="no-underline group flex items-center gap-4">
            <img src={logo} alt="Anderson Litig" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
          </Link>
          <nav className="hidden lg:flex gap-1 justify-center">
            <Link href="/v2"><a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors">Início</a></Link>
            <Link href="/v2#servicos"><a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors">Serviços</a></Link>
            <Link href="/v2#sobre"><a className="text-[12px] uppercase tracking-wider font-medium text-white/70 px-4 py-2 border-b-2 border-transparent hover:text-white hover:border-[#CFAE70]/50 transition-colors">Sobre</a></Link>
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

function Breadcrumb() {
  return (
    <div className="bg-[#F4F4F2] border-b border-[#E0E0DC] py-3">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 text-[12px] text-[#767672]">
          <Link href="/v2"><a className="hover:text-[#091D39] transition-colors">Início</a></Link>
          <span className="opacity-50">/</span>
          <Link href="/v2#servicos"><a className="hover:text-[#091D39] transition-colors">Serviços</a></Link>
          <span className="opacity-50">/</span>
          <span className="text-[#091D39] font-medium">Já sou aposentado e tenho dúvidas</span>
        </div>
      </div>
    </div>
  );
}

function HeroJaAposentado() {
  return (
    <section className="bg-[#091D39] py-[64px] md:py-[80px] border-b-4 border-[#CFAE70]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="inline-flex items-center gap-2 bg-[#CFAE70]/10 border border-[#CFAE70]/25 px-4 py-1.5 mb-5">
          <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#CFAE70]">Para quem já é aposentado</span>
        </div>
        <h1 className="text-[clamp(28px,3.5vw,44px)] font-bold text-white tracking-[-0.03em] leading-[1.1] mb-4 max-w-[680px] font-heading">
          Já recebe a aposentadoria —<br /><em className="text-[#CFAE70] not-italic block">mas algo não parece estar certo?</em>
        </h1>
        <p className="text-[16px] text-white/60 leading-[1.75] mb-8 max-w-[580px] font-light">
          Desconto que você não autorizou. Valor que parece baixo demais. Cobrança de associação que nunca pediu. Ou simplesmente a dúvida: "será que o INSS calculou certo?" Essas perguntas têm resposta — e muitas vezes a resposta é: não, não está correto.
        </p>
        <div className="flex flex-wrap gap-3">
          <button 
            className="bg-[#CFAE70] text-[#091D39] text-[14px] font-bold px-6 py-3.5 flex items-center gap-2 hover:bg-[#dfc880] transition-colors"
            onClick={() => document.getElementById('contato')?.scrollIntoView({behavior:'smooth'})}
          >
            <Phone size={15} className="text-[#091D39]" />
            Quero entender o meu caso
          </button>
          <button 
            className="bg-transparent text-white border border-white/30 text-[14px] font-sans px-6 py-3.5 hover:border-white/60 transition-colors"
            onClick={() => document.getElementById('situacoes')?.scrollIntoView({behavior:'smooth'})}
          >
            Ver as situações mais comuns
          </button>
        </div>
      </div>
    </section>
  );
}

function AlertaCNIS() {
  return (
    <div className="bg-[#0D0D0D] py-[36px] border-b-[3px] border-[#CFAE70]/25">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 max-w-[860px]">
          <div className="w-[52px] h-[52px] bg-[#CFAE70]/10 border border-[#CFAE70]/20 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-[22px] h-[22px] text-[#CFAE70]" />
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#CFAE70] mb-1.5">O INSS erra mais do que parece</p>
            <h3 className="text-[15px] font-normal text-white/70 leading-[1.65]">
              Erros no cálculo da aposentadoria são mais comuns do que a maioria das pessoas imagina. <strong className="text-white font-semibold">Quem não pede revisão continua recebendo menos para sempre</strong> — o INSS não corrige por conta própria. E os valores pagos a menos nos meses anteriores podem ser recuperados.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

function DuasSituacoes() {
  return (
    <section className="py-[56px] md:py-[80px] bg-[#F4F4F2] border-b border-[#E0E0DC]" id="situacoes">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="mb-[32px]">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#CFAE70] mb-2.5 block">Você se identifica?</span>
          <h2 className="text-[clamp(24px,3vw,32px)] font-bold text-[#091D39] tracking-[-0.02em] mt-2 mb-2 font-heading">Dois problemas diferentes —<br/>mas ambos têm solução</h2>
          <p className="text-[15px] text-[#767672] max-w-[500px]">A maioria dos aposentados que chegam até nós enfrenta uma dessas duas situações. Às vezes, as duas ao mesmo tempo.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          <div className="bg-white p-[32px_28px] flex flex-col gap-4 border-t-[3px] border-transparent hover:border-[#CFAE70] hover:bg-[#F4F4F2] transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] bg-[#091D39]/5 flex items-center justify-center shrink-0">
                <Search className="w-[18px] h-[18px] text-[#091D39]" />
              </div>
              <strong className="text-[16px] text-[#091D39] font-bold">"Acho que recebo menos do que deveria"</strong>
            </div>
            <p className="text-[14px] text-[#767672] leading-[1.7] flex-grow">O valor sempre pareceu baixo. Ou você soube que o INSS pode ter errado no cálculo — por não incluir algum período de trabalho, por usar salários errados ou por não reconhecer que você trabalhou em condições perigosas. Isso é <strong className="text-[#091D39]">revisão de benefício</strong>.</p>
            <button 
              className="bg-[#091D39] text-white font-sans text-[14px] font-medium px-6 py-3.5 flex items-center gap-2 hover:bg-[#0d2548] transition-colors w-fit mt-2"
              onClick={() => document.getElementById('revisao')?.scrollIntoView({behavior:'smooth'})}
            >
              Ver revisão de benefício ↓
            </button>
          </div>
          
          <div className="bg-white p-[32px_28px] flex flex-col gap-4 border-t-[3px] border-transparent hover:border-[#CFAE70] hover:bg-[#F4F4F2] transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] bg-[#091D39]/5 flex items-center justify-center shrink-0">
                <ReceiptText className="w-[18px] h-[18px] text-[#091D39]" />
              </div>
              <strong className="text-[16px] text-[#091D39] font-bold">"Tem um desconto que não reconheço"</strong>
            </div>
            <p className="text-[14px] text-[#767672] leading-[1.7] flex-grow">Aparece todo mês um valor descontado do seu benefício — de empréstimo, associação, seguro ou cartão que você não pediu ou não consegue cancelar. Isso é <strong className="text-[#091D39]">desconto indevido</strong> — e você tem direito a cancelar e, em muitos casos, receber de volta o que foi descontado.</p>
            <button 
              className="bg-[#091D39] text-white font-sans text-[14px] font-medium px-6 py-3.5 flex items-center gap-2 hover:bg-[#0d2548] transition-colors w-fit mt-2"
              onClick={() => document.getElementById('descontos')?.scrollIntoView({behavior:'smooth'})}
            >
              Ver descontos indevidos ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function RevisaoBeneficio() {
  const cards = [
    { icon: <Calculator />, title: "Erro no cálculo dos salários", desc: "O INSS pode ter usado salários errados ou deixado de incluir contribuições que você fez. Cada salário ignorado ou reduzido diminui o valor médio que serve de base para calcular o seu benefício — e essa diferença se acumula mês a mês.", detail: "Erro mais comum em benefícios antigos" },
    { icon: <ShieldAlert />, title: "Trabalho perigoso não reconhecido", desc: "Quem trabalhou em condições perigosas — barulho alto, produtos químicos, calor extremo — pode ter direito a uma conversão que aumenta o tempo de contribuição contado. Se o INSS não reconheceu, o cálculo fica menor do que deveria.", detail: "Aumenta o tempo de contribuição reconhecido" },
    { icon: <Search />, title: "Revisão do teto", desc: "Alguns aposentados tiveram o benefício limitado pelo teto do INSS na época da concessão. Com a mudança dos tetos ao longo dos anos, pode ser possível revisar o cálculo para incluir aqueles salários que foram cortados.", detail: "Válido para quem tinha salários acima do teto" },
    { icon: <Scale />, title: "Reflexo de processo trabalhista", desc: "Quem ganhou uma reclamação trabalhista — com reconhecimento de horas extras, diferenças salariais ou vínculo empregatício — pode ter direito a incluir esses valores no cálculo da aposentadoria, mesmo depois de aposentado.", detail: "Exige análise do processo trabalhista" },
    { icon: <Briefcase />, title: "Atividades simultâneas não consideradas", desc: "Quem trabalhou em dois empregos ao mesmo tempo — com contribuições para os dois — pode ter direito a que as duas contribuições sejam consideradas no cálculo. O INSS às vezes não faz isso corretamente.", detail: "Comum em quem tinha dois vínculos empregatícios" },
    { icon: <Target />, title: "Benefício abaixo do salário mínimo", desc: "Nenhum benefício previdenciário pode ser menor que o salário mínimo vigente. Se o seu benefício está abaixo — seja por erro de cálculo ou por defasagem — isso é um direito que pode e deve ser corrigido de imediato.", detail: "Correção imediata, sem prazo decadencial" }
  ];

  return (
    <section className="py-[56px] md:py-[80px] bg-white border-b border-[#E0E0DC]" id="revisao">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="mb-[36px]">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#CFAE70] mb-2.5 block">Revisão de benefício</span>
          <h2 className="text-[clamp(24px,3vw,32px)] font-bold text-[#091D39] tracking-[-0.02em] mt-2 mb-2 font-heading">O INSS pode ter errado<br/>no cálculo da sua aposentadoria</h2>
          <p className="text-[15px] text-[#767672] max-w-[560px]">Existem vários tipos de erro que o INSS comete — e cada um pode ser corrigido de uma forma diferente. Veja os mais comuns:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {cards.map((c, i) => (
            <div key={i} className="bg-[#F4F4F2] p-[26px_24px] border-t-[3px] border-transparent hover:border-[#CFAE70] hover:bg-[#e8e6e2] transition-colors flex flex-col">
              <div className="w-[40px] h-[40px] bg-[#091D39]/5 flex items-center justify-center mb-[14px]">
                {React.cloneElement(c.icon as React.ReactElement, { className: "w-[18px] h-[18px] text-[#091D39]", strokeWidth: 1.5 })}
              </div>
              <h3 className="text-[15px] font-bold text-[#091D39] mb-[8px] leading-[1.3]">{c.title}</h3>
              <p className="text-[13px] text-[#767672] leading-[1.65] flex-grow">{c.desc}</p>
              <div className="mt-[12px] text-[12px] text-[#767672] flex items-center gap-[8px]">
                <span className="w-[5px] h-[5px] bg-[#CFAE70] rounded-full shrink-0" />
                {c.detail}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#091D39] mt-[1px] p-[20px_24px] flex flex-col md:flex-row items-start md:items-center justify-between gap-[24px] flex-wrap">
          <div>
            <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#CFAE70] mb-[4px]">Prazo importante</p>
            <p className="text-[15px] text-white/80 leading-[1.5]">Em geral, você tem <strong className="text-white font-semibold">10 anos</strong> a partir da concessão do benefício para pedir a revisão. Depois disso, o direito decai. Mas quanto antes o pedido for feito, mais meses de retroativo podem ser recuperados.</p>
          </div>
          <button 
            className="bg-[#CFAE70] text-[#091D39] text-[14px] font-bold px-[24px] py-[13px] flex items-center gap-[8px] hover:bg-[#dfc880] transition-colors shrink-0 whitespace-nowrap"
            onClick={() => document.getElementById('contato')?.scrollIntoView({behavior:'smooth'})}
          >
            Analisar meu benefício
          </button>
        </div>
      </div>
    </section>
  );
}

function DescontosIndevidos() {
  const cards = [
    { icon: <ReceiptText />, title: "RMC — Reserva de Margem Consignável", desc: "Uma reserva que libera parte do seu benefício para uso com crédito consignado. Muitas vezes é ativada por empresas sem que o aposentado tenha realmente autorizado — ou o aposentado não entendeu o que estava assinando.", detail: "Cancelamento pode ser feito a qualquer momento" },
    { icon: <ReceiptText />, title: "RCC — Reserva de Cartão de Crédito", desc: "Parecida com a RMC, mas vinculada a um cartão de crédito consignado. Muitos aposentados não sabem que têm um cartão ativo — mas o desconto aparece todo mês no benefício.", detail: "Cancelamento pode incluir devolução dos valores" },
    { icon: <Briefcase />, title: "Empréstimo consignado não autorizado", desc: "Empréstimos contratados no nome do aposentado sem consentimento real — por fraude, pressão de vendedores ou assinatura de documento sem entender o que era. O desconto aparece todo mês, mas o dinheiro foi para outro lugar.", detail: "Possibilidade de cancelamento e devolução em dobro" },
    { icon: <Users />, title: "Desconto de associação ou sindicato", desc: "Cobranças mensais de associações que o aposentado nunca pediu para participar. Muito comum em beneficiários que recebem ligações de \"representantes\" e acabam concordando sem entender o que estão autorizando.", detail: "Cancelamento pode ser feito via INSS ou na Justiça" },
    { icon: <HeartHandshake />, title: "Plano de saúde ou seguro não pedido", desc: "Planos contratados por telefone, em agências bancárias ou durante a explicação de outro produto. O desconto aparece no benefício, mas o aposentado não tem clareza sobre o que está pagando ou se realmente quis contratar.", detail: "Direito ao cancelamento e à restituição" },
    { icon: <FileSearch />, title: "Desconto que você não consegue identificar", desc: "Às vezes aparece um valor descontado todo mês e o aposentado simplesmente não sabe de onde vem. Se você não reconhece um desconto, isso já é motivo suficiente para investigar e, se necessário, cancelar.", detail: "Qualquer desconto não reconhecido merece análise" }
  ];

  return (
    <section className="py-[56px] md:py-[80px] bg-[#F4F4F2] border-b border-[#E0E0DC]" id="descontos">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="mb-[36px]">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#CFAE70] mb-2.5 block">Descontos indevidos</span>
          <h2 className="text-[clamp(24px,3vw,32px)] font-bold text-[#091D39] tracking-[-0.02em] mt-2 mb-2 font-heading">Tem algo sendo descontado<br/>do seu benefício sem autorização?</h2>
          <p className="text-[15px] text-[#767672] max-w-[560px]">Esse tipo de abuso é muito mais frequente do que deveria. Veja os tipos mais comuns — e saiba que todos podem ser cancelados.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {cards.map((c, i) => (
            <div key={i} className="bg-white p-[26px_24px] border-t-[3px] border-transparent hover:border-[#CFAE70] hover:bg-[#F4F4F2] transition-colors flex flex-col">
              <div className="w-[40px] h-[40px] bg-[#091D39]/5 flex items-center justify-center mb-[14px]">
                {React.cloneElement(c.icon as React.ReactElement, { className: "w-[18px] h-[18px] text-[#091D39]", strokeWidth: 1.5 })}
              </div>
              <h3 className="text-[15px] font-bold text-[#091D39] mb-[8px] leading-[1.3]">{c.title}</h3>
              <p className="text-[13px] text-[#767672] leading-[1.65] flex-grow">{c.desc}</p>
              <div className="mt-[12px] text-[12px] text-[#767672] flex items-center gap-[8px]">
                <span className="w-[5px] h-[5px] bg-[#CFAE70] rounded-full shrink-0" />
                {c.detail}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#091D39] mt-[1px] p-[20px_24px] flex flex-col md:flex-row items-start md:items-center justify-between gap-[24px] flex-wrap">
          <div>
            <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#CFAE70] mb-[4px]">Você sabia?</p>
            <p className="text-[15px] text-white/80 leading-[1.5]">Descontos não autorizados são prática abusiva pelo Código de Defesa do Consumidor. Em muitos casos, você tem direito à <strong className="text-white font-semibold">devolução em dobro</strong> dos valores pagos indevidamente — além do cancelamento imediato.</p>
          </div>
          <button 
            className="bg-[#CFAE70] text-[#091D39] text-[14px] font-bold px-[24px] py-[13px] flex items-center gap-[8px] hover:bg-[#dfc880] transition-colors shrink-0 whitespace-nowrap"
            onClick={() => document.getElementById('contato')?.scrollIntoView({behavior:'smooth'})}
          >
            Quero cancelar os descontos
          </button>
        </div>
      </div>
    </section>
  );
}

function MidCTA() {
  return (
    <section className="bg-[#091D39] py-[48px] border-t border-white/5 border-b">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-[40px]">
          <div>
            <h3 className="text-[clamp(20px,2.5vw,26px)] font-bold text-white mb-[8px] tracking-[-0.01em] font-heading">Tem dúvida se o seu caso se encaixa em alguma dessas situações?</h3>
            <p className="text-[14px] text-white/60">Mande o extrato do seu benefício ou descreva o que está acontecendo. Analisamos e te explicamos em linguagem simples.</p>
          </div>
          <button 
            className="bg-[#25D366] text-white text-[14px] font-bold px-[28px] py-[14px] flex items-center gap-[10px] hover:bg-[#1db957] transition-colors whitespace-nowrap w-fit"
            onClick={() => window.open('https://wa.me/5527999999999?text=Ol%C3%A1%2C+sou+aposentado+e+tenho+d%C3%BAvidas+sobre+meu+benef%C3%ADcio','_blank')}
          >
            <Phone size={18} />
            Falar pelo WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const steps = [
    { num: "01", title: "Você nos mostra o que está acontecendo", desc: "Envia o extrato do benefício, conta quais descontos aparecem, quando se aposentou e o que te deixa com dúvida sobre o valor. Não precisa entender de lei — só nos mostrar o que você está vendo." },
    { num: "02", title: "Identificamos o problema e verificamos se há algo a corrigir", desc: "Analisamos os descontos que aparecem no seu benefício, verificamos a origem de cada um e checamos se o valor da sua aposentadoria corresponde ao que o seu histórico de trabalho deveria gerar. Explicamos tudo com clareza." },
    { num: "03", title: "Definimos o melhor caminho para resolver", desc: "Cancelamento administrativo direto no INSS, notificação às empresas responsáveis pelos descontos ou ação judicial — escolhemos o caminho mais rápido e eficaz para cada situação. Às vezes a solução é simples e rápida; outras vezes exige um processo judicial." },
    { num: "04", title: "Agimos para cancelar os descontos ou corrigir o valor", desc: "Protocolamos tudo e acompanhamos o processo. Quando há descontos pagos indevidamente, incluímos o pedido de devolução. Quando há erro no cálculo, pedimos a correção com os retroativos desde a data do pedido." }
  ];

  return (
    <section className="bg-[#0D0D0D] py-[56px] border-b border-white/5">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="mb-[36px]">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#CFAE70] mb-2.5 block">Como funciona</span>
          <h2 className="text-[clamp(24px,3vw,32px)] font-bold text-white tracking-[-0.02em] mt-2 mb-2 font-heading">O que fazemos pelo seu caso</h2>
          <p className="text-[15px] text-white/50 max-w-[560px]">Do diagnóstico até a solução — em etapas simples.</p>
        </div>

        <div className="flex flex-col border border-white/10">
          {steps.map((s, i) => (
            <div key={i} className="grid grid-cols-[56px_1fr] border-b border-white/5 hover:bg-white/5 transition-colors last:border-0">
              <div className="flex items-start justify-center pt-[24px] border-r border-white/5 text-[18px] font-bold text-[#CFAE70] opacity-40">
                {s.num}
              </div>
              <div className="p-[22px_28px]">
                <h4 className="text-[15px] font-bold text-white mb-[8px]">{s.title}</h4>
                <p className="text-[13px] text-white/50 leading-[1.65]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutrosDireitos() {
  const cards = [
    { icon: <Target />, title: "Isenção de Imposto de Renda", desc: "Aposentados com doenças graves têm direito à isenção de IR sobre o benefício. A lista inclui cardiopatia, câncer, Parkinson, doenças renais, HIV e outras condições — mesmo que a doença tenha surgido depois da aposentadoria." },
    { icon: <CheckCircle2 />, title: "Auxílio por nova incapacidade", desc: "Em certos casos, aposentados que ficam temporariamente incapacitados por uma doença diferente da que motivou a aposentadoria podem ter direito a um auxílio adicional do INSS enquanto estiverem impedidos de trabalhar." },
    { icon: <Users />, title: "Pensão por morte para dependentes", desc: "Quando um aposentado falece, cônjuge, filhos e outros dependentes comprovados têm direito à pensão por morte. Esse benefício precisa ser solicitado — não é automático — e tem prazo para ser pedido." }
  ];

  return (
    <section className="py-[56px] md:py-[80px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="mb-[36px]">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#CFAE70] mb-2.5 block">Mais direitos para aposentados</span>
          <h2 className="text-[clamp(24px,3vw,32px)] font-bold text-[#091D39] tracking-[-0.02em] mt-2 mb-2 font-heading">Outros benefícios que aposentados<br/>frequentemente desconhecem</h2>
          <p className="text-[15px] text-[#767672] max-w-[560px]">Além da revisão e dos descontos, existem outros direitos que muitos aposentados têm e não sabem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {cards.map((c, i) => (
            <div key={i} className="bg-white p-[26px_24px] border-t-[3px] border-transparent hover:border-[#CFAE70] hover:bg-[#F4F4F2] transition-colors flex flex-col">
              <div className="w-[40px] h-[40px] bg-[#091D39]/5 flex items-center justify-center mb-[14px]">
                {React.cloneElement(c.icon as React.ReactElement, { className: "w-[18px] h-[18px] text-[#091D39]", strokeWidth: 1.5 })}
              </div>
              <h3 className="text-[15px] font-bold text-[#091D39] mb-[8px] leading-[1.3]">{c.title}</h3>
              <p className="text-[13px] text-[#767672] leading-[1.65] flex-grow">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQJaAposentado() {
  const faqs = [
    { q: "Como faço para cancelar um desconto que não autorizei?", a: "O primeiro caminho é pela Central 135 do INSS ou pelo portal Meu INSS, pedindo o cancelamento direto. Se a empresa não atender ou demorar, a via judicial garante o resultado — e muitas vezes inclui a devolução dos valores descontados indevidamente, em dobro, por se tratar de cobrança abusiva." },
    { q: "Posso receber de volta o dinheiro descontado sem minha autorização?", a: "Em muitos casos, sim. O Código de Defesa do Consumidor prevê devolução em dobro quando há cobrança indevida. Isso se aplica a descontos de associações, planos não pedidos e empréstimos contratados de forma irregular. A análise do caso define o que é possível recuperar." },
    { q: "Qual o prazo para pedir a revisão da aposentadoria?", a: "Em geral, o prazo é de 10 anos a partir da data em que o benefício foi concedido. Depois disso, o direito à revisão decai. Alguns tipos específicos de correção — como benefício abaixo do salário mínimo — não têm prazo. Quanto antes o pedido for feito, mais meses de valores retroativos podem ser recuperados." },
    { q: "A revisão pode diminuir o valor que recebo?", a: "A revisão que pedimos é sempre em favor do aposentado — buscando corrigir erros que resultaram em um valor menor do que o correto. O INSS pode fazer revisões por conta própria (o chamado pente-fino), mas esse é um processo separado, que acontece independentemente de um pedido de revisão judicial." },
    { q: "Meu benefício foi suspenso sem aviso. O que faço?", a: "A suspensão pode acontecer por falta de prova de vida, suspeita de irregularidade ou descumprimento de alguma exigência do INSS. Em todos os casos, o bloqueio pode ser revertido. O importante é agir rapidamente — cada mês sem pagamento é um prejuízo que pode não ser totalmente recuperado." },
    { q: "Preciso ir pessoalmente a algum lugar?", a: "Não. Todo o atendimento é feito de forma digital — por WhatsApp, vídeo ou e-mail. O extrato do benefício e os documentos são enviados por foto. Atendo clientes em todo o Brasil sem necessidade de deslocamento." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-[56px] md:py-[80px] bg-white border-b border-[#E0E0DC]" id="faq">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="mb-[36px]">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#CFAE70] mb-2.5 block">Dúvidas comuns</span>
          <h2 className="text-[clamp(24px,3vw,32px)] font-bold text-[#091D39] tracking-[-0.02em] mt-2 mb-2 font-heading">O que os aposentados<br/>mais perguntam</h2>
        </div>
        
        <div className="flex flex-col gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {faqs.map((f, i) => (
            <div 
              key={i} 
              className={`bg-white transition-all duration-300`}
            >
              <div 
                className={`p-[18px_22px] cursor-pointer flex items-center justify-between gap-4 border-l-4 ${openIdx === i ? 'border-[#CFAE70] bg-[#F4F4F2]' : 'border-transparent hover:bg-[#F4F4F2]'}`}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className={`text-[14px] font-medium transition-colors ${openIdx === i ? 'text-[#091D39]' : 'text-[#091D39]'}`}>{f.q}</span>
                <span className={`text-[18px] flex items-center justify-center shrink-0 transition-colors text-[#CFAE70] transform ${openIdx === i ? 'rotate-45' : 'rotate-0'}`}>
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
                    <div className="px-[22px] pb-[18px] pt-0 text-[13px] text-[#767672] leading-[1.7] border-l-4 border-[#E0E0DC] ml-[-4px]">
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

function ContatoJaAposentado() {
  return (
    <section id="contato" className="py-[56px] md:py-[80px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="mb-[32px]">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#CFAE70] mb-2.5 block">Contato</span>
          <h2 className="text-[clamp(24px,3vw,32px)] font-bold text-[#091D39] tracking-[-0.02em] font-heading">Algo não está certo<br/>no seu benefício?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#E0E0DC] shadow-lg items-stretch">
          <div className="p-[40px] bg-[#091D39] relative overflow-hidden flex flex-col justify-center">
            <h3 className="text-[clamp(18px,2vw,22px)] font-bold text-white tracking-[-0.02em] mb-2 font-heading border-l-4 border-[#CFAE70] pl-4">Fale com o advogado</h3>
            <p className="text-[14px] text-white/60 leading-[1.65] font-light mb-[32px] mt-[12px] pl-5">Mande o extrato do benefício ou descreva o que está acontecendo. Análise inicial sem compromisso. Atendimento em todo o Brasil.</p>
            
            <div className="space-y-[20px] pl-5">
              <div className="flex items-start gap-[14px]">
                <div className="w-[40px] h-[40px] bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="w-[16px] h-[16px] text-[#CFAE70]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/40 mb-[2px]">Telefone / WhatsApp</span>
                  <strong className="text-[14px] font-bold text-white">+55 (27) 99999-9999</strong>
                </div>
              </div>
              
              <div className="flex items-start gap-[14px]">
                <div className="w-[40px] h-[40px] bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Mail className="w-[16px] h-[16px] text-[#CFAE70]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/40 mb-[2px]">E-mail</span>
                  <strong className="text-[14px] font-bold text-white break-all">contato@andersonlitig.adv.br</strong>
                </div>
              </div>

              <div className="flex items-start gap-[14px]">
                <div className="w-[40px] h-[40px] bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="w-[16px] h-[16px] text-[#CFAE70]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/40 mb-[2px]">Atuação</span>
                  <strong className="text-[14px] font-bold text-white">Serra/ES — Atendimento Nacional 100% Digital</strong>
                </div>
              </div>
            </div>
            
            <button 
              className="mt-[28px] bg-[#25D366] text-white text-[14px] font-bold px-[24px] py-[13px] flex items-center justify-center gap-[9px] hover:bg-[#1db957] transition-all w-fit ml-5"
              onClick={() => window.open('https://wa.me/5527999999999?text=Ol%C3%A1%2C+sou+aposentado+e+tenho+d%C3%BAvidas+sobre+meu+benef%C3%ADcio+do+INSS','_blank')}
            >
              <Phone size={18} />
              Falar pelo WhatsApp agora
            </button>
          </div>
          
          <div className="p-[40px] bg-white flex flex-col justify-center">
            <h3 className="text-[18px] font-bold text-[#091D39] mb-[22px] font-heading">Envie uma mensagem</h3>
            <form className="flex flex-col gap-[13px]" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-[5px]">Nome completo *</label>
                <input type="text" className="w-full p-[11px_13px] border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]" placeholder="Digite seu nome" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-[5px]">Telefone / WhatsApp *</label>
                <input type="tel" className="w-full p-[11px_13px] border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-[5px]">E-mail</label>
                <input type="email" className="w-full p-[11px_13px] border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]" placeholder="Digite seu e-mail" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-[5px]">Qual é a sua situação? *</label>
                <div className="relative">
                  <select className="w-full p-[11px_13px] border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39] appearance-none pr-10 cursor-pointer">
                    <option value="" disabled selected>Selecione</option>
                    <option>Acho que recebo menos do que deveria</option>
                    <option>Tem desconto que não reconheço no benefício</option>
                    <option>Quero cancelar empréstimo consignado</option>
                    <option>Quero cancelar desconto de associação ou sindicato</option>
                    <option>Trabalhei em local perigoso e não foi reconhecido</option>
                    <option>Tive processo trabalhista que pode afetar o cálculo</option>
                    <option>Meu benefício foi suspenso ou bloqueado</option>
                    <option>Quero saber sobre isenção de Imposto de Renda</option>
                    <option>Outra dúvida</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#767672] pointer-events-none" size={16} />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-[#767672] mb-[5px]">Mensagem</label>
                <textarea className="w-full min-h-[80px] resize-y p-[11px_13px] border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#091D39] outline-none transition-all focus:border-[#091D39]" placeholder="Descreva o que está acontecendo com o seu benefício..." />
              </div>
            <button 
              type="submit" 
              className="w-full bg-[#091D39] text-white font-sans text-[12px] font-bold tracking-[0.12em] uppercase p-[14px] mt-[6px] hover:bg-[#0d2548] transition-all cursor-pointer border-none"
            >
              Enviar mensagem
            </button>
              <div className="text-[11px] text-[#767672] mt-[10px] leading-[1.5]">Em conformidade com o Provimento nº 205/2021 do CFOAB. As informações deste site têm caráter informativo e não constituem consultoria jurídica.</div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-[40px] py-[48px] border-b border-white/10">
          <div>
            <div className="text-[18px] font-bold text-[#CFAE70] mb-[4px]">Anderson Litig</div>
            <div className="text-[11px] text-white/30 mb-[12px]">OAB/ES nº 40.152 &middot; Serra, Espírito Santo</div>
            <div className="text-[12px] text-white/30 leading-[1.75] pr-4">As informações contidas neste site têm caráter exclusivamente informativo e não constituem consultoria jurídica. Atuação em conformidade com o Provimento nº 205/2021 do CFOAB.</div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/30 mb-[14px]">Serviços</h4>
            <Link href="/v2/aposentar"><a className="text-[13px] text-white/40 mb-[9px] hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Aposentadorias</a></Link>
            <Link href="/v2/planejamento"><a className="text-[13px] text-white/40 mb-[9px] hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Planejamento Previdenciário</a></Link>
            <Link href="/v2/ja-aposentado#revisao"><a className="text-[13px] text-white/40 mb-[9px] hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Revisão de Benefício</a></Link>
            <Link href="/v2/negado"><a className="text-[13px] text-white/40 mb-[9px] hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Benefício Negado</a></Link>
            <a href="#" className="text-[13px] text-white/40 mb-[9px] hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Salário-Maternidade</a>
            <a href="#" className="text-[13px] text-white/40 mb-[9px] hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">BPC/LOAS</a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/30 mb-[14px]">Institucional</h4>
            <Link href="/v2#sobre"><a className="text-[13px] text-white/40 mb-[9px] hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Sobre o advogado</a></Link>
            <a href="#" className="text-[13px] text-white/40 mb-[9px] hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Blog jurídico</a>
            <a href="#" className="text-[13px] text-white/40 mb-[9px] hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Política de privacidade</a>
            <a href="#contato" className="text-[13px] text-white/40 mb-[9px] hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Contato</a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/30 mb-[14px]">Contato</h4>
            <a href="https://wa.me/5527999999999" target="_blank" rel="noreferrer" className="text-[13px] text-white/40 mb-[9px] hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">WhatsApp</a>
            <a href="mailto:contato@andersonlitig.adv.br" className="text-[13px] text-white/40 mb-[9px] hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">E-mail</a>
            <a href="#" className="text-[13px] text-white/40 mb-[9px] hover:text-[#CFAE70] transition-colors cursor-pointer w-fit">Instagram</a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 py-[16px] text-[11px] text-white/20">
          <span>&copy; 2025 Anderson Litig — Advocacia e Consultoria Jurídica</span>
          <span>OAB/ES 40.152 &middot; Provimento 205/2021 CFOAB</span>
        </div>
      </div>
    </footer>
  );
}