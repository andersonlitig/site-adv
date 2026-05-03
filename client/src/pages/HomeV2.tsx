import React, { useState } from "react";
import { Link } from "wouter";

export default function HomeV2() {
  return (
    <div className="font-sans text-[#2C2C2C] bg-white leading-relaxed overflow-x-hidden">
      <WppFloat />
      <AnnouncementBar />
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
      className="fixed bottom-7 right-7 z-[999] bg-[#25D366] w-14 h-14 flex items-center justify-center cursor-pointer shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-180 hover:bg-[#1db957] hover:scale-105 rounded-full"
      onClick={() => window.open('https://wa.me/5527999999999','_blank')}
      title="Falar pelo WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-[#091D39] py-2 px-8 text-xs text-white/65 text-center">
      <strong className="text-[#CFAE70] font-medium">Atendimento em todo o Brasil</strong> &mdash; Consulta inicial sem compromisso
    </div>
  );
}

function HeaderV2() {
  return (
    <header className="bg-white border-b border-[#E0E0DC] sticky top-0 z-[100]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-16 gap-8">
          <Link href="/" className="no-underline group">
            <div className="text-lg font-bold text-[#091D39] tracking-tight">Anderson Litig</div>
            <span className="text-[10px] font-normal text-[#767672] tracking-wider uppercase block mt-px">OAB/ES nº 40.152 &middot; Advocacia Previdenciária</span>
          </Link>
          <nav className="hidden md:flex gap-0 justify-center">
            <a className="text-[13px] font-medium text-[#091D39] px-3 py-1.5 border-b-2 border-[#CFAE70] cursor-pointer transition-colors" href="#">Início</a>
            <a className="text-[13px] font-normal text-[#2C2C2C] px-3 py-1.5 border-b-2 border-transparent hover:text-[#091D39] hover:font-medium transition-colors" href="#servicos">Serviços</a>
            <a className="text-[13px] font-normal text-[#2C2C2C] px-3 py-1.5 border-b-2 border-transparent hover:text-[#091D39] hover:font-medium transition-colors" href="#sobre">Sobre</a>
            <a className="text-[13px] font-normal text-[#2C2C2C] px-3 py-1.5 border-b-2 border-transparent hover:text-[#091D39] hover:font-medium transition-colors" href="#faq">Dúvidas</a>
            <a className="text-[13px] font-normal text-[#2C2C2C] px-3 py-1.5 border-b-2 border-transparent hover:text-[#091D39] hover:font-medium transition-colors" href="#blog">Blog</a>
            <a className="text-[13px] font-normal text-[#2C2C2C] px-3 py-1.5 border-b-2 border-transparent hover:text-[#091D39] hover:font-medium transition-colors" href="#contato">Contato</a>
          </nav>
          <button 
            className="bg-[#091D39] text-white text-[13px] font-medium px-5 py-2.5 flex items-center gap-2 hover:bg-[#0d2548] transition-colors"
            onClick={() => window.open('https://wa.me/5527999999999','_blank')}
          >
            <svg width="14" height="14" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Falar pelo WhatsApp
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroV2() {
  return (
    <section className="bg-[#091D39] py-[72px] pb-[64px] border-b-4 border-[#CFAE70]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="max-w-[620px]">
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#CFAE70] mb-2.5 block">Advocacia Previdenciária</span>
          <h1 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] text-white tracking-[-0.03em] mb-4 mt-3.5">
            Seu benefício do INSS<span className="text-[#CFAE70] block">em boas mãos.</span>
          </h1>
          <p className="text-base text-white/60 leading-[1.7] mb-8 max-w-[520px]">
            Aposentadorias, revisões, auxílio-doença e planejamento previdenciário. Atendimento personalizado para garantir os direitos que você conquistou ao longo da vida.
          </p>
          <div className="flex flex-wrap gap-3">
            <button 
              className="bg-[#CFAE70] text-[#091D39] text-[14px] font-semibold px-6 py-3 flex items-center gap-2 hover:bg-[#dfc880] transition-colors"
              onClick={() => window.open('https://wa.me/5527999999999','_blank')}
            >
              <svg width="15" height="15" fill="#091D39" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Falar pelo WhatsApp
            </button>
            <button 
              className="bg-transparent text-white text-[14px] font-normal px-6 py-3 border border-white/30 hover:border-white/60 transition-colors"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({behavior:'smooth'})}
            >
              Conhecer os serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function JornadaV2() {
  const cards = [
    { num: "01", title: "Quero planejar minha aposentadoria", desc: "Ainda não me aposentei. Quero saber o melhor momento e como maximizar meu benefício." },
    { num: "02", title: "Estou pronto para me aposentar", desc: "Tenho contribuições suficientes e quero dar entrada no benefício sem perder direitos." },
    { num: "03", title: "Meu benefício foi negado", desc: "O INSS negou o pedido. Quero entender se a decisão está correta e como reverter." },
    { num: "04", title: "Já me aposentei, mas tenho dúvidas", desc: "Quero revisar o valor do benefício ou cancelar descontos que não autorizei." }
  ];

  return (
    <section className="py-[72px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="mb-10">
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#CFAE70] mb-2.5 block">Qual é a sua situação?</span>
          <h2 className="text-[clamp(26px,3vw,34px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] mt-2">Encontre o que você precisa</h2>
          <p className="text-[15px] text-[#767672] mt-2 max-w-[520px]">Cada caso tem uma história. Identifique em qual momento você está para entender como posso ajudar.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {cards.map((c, i) => (
            <div key={i} className="bg-white p-7 cursor-pointer transition-colors hover:bg-[rgba(9,29,57,0.03)] border-l-4 border-transparent hover:border-[#CFAE70] group">
              <div className="text-[26px] font-bold text-[#E0E0DC] leading-none mb-3">{c.num}</div>
              <h3 className="text-[14px] font-semibold text-[#091D39] mb-2 leading-[1.35]">{c.title}</h3>
              <p className="text-[13px] text-[#767672] leading-[1.55]">{c.desc}</p>
              <span className="text-[16px] text-[#CFAE70] mt-3.5 block group-hover:translate-x-1 transition-transform">&#8594;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesV2() {
  const services = [
    { title: "Aposentadorias", desc: "Por idade, tempo de contribuição, especial, rural e por deficiência. Analisamos o seu CNIS e identificamos a modalidade mais vantajosa para o seu caso." },
    { title: "Planejamento Previdenciário", desc: "Quer saber o melhor momento para se aposentar? Fazemos um estudo técnico individualizado do seu CNIS para garantir a melhor aposentadoria possível." },
    { title: "Revisão de Benefício", desc: "Já é aposentado e acha que o valor está baixo demais? Analisamos o cálculo do seu benefício e verificamos se há algo a corrigir." },
    { title: "Aposentadoria por Deficiência (PcD)", desc: "Pessoa com deficiência tem direito a se aposentar com menos tempo de contribuição. Quanto mais grave a deficiência, menor o tempo exigido. Acompanhamos todo o processo." },
    { title: "Benefícios por Incapacidade", desc: "Auxílio por Incapacidade Temporária e Aposentadoria por Incapacidade Permanente. Não consegue mais trabalhar por questões de saúde? Garanta o suporte financeiro que você merece." },
    { title: "Auxílio-Acidente", desc: "Sofreu um acidente ou doença ocupacional que reduziu sua capacidade de trabalho? Você pode receber o auxílio-acidente enquanto ainda trabalha." },
    { title: "BPC/LOAS", desc: "Idoso acima de 65 anos ou pessoa com deficiência em situação de vulnerabilidade? Ajudamos você a conquistar o Benefício de Prestação Continuada mesmo sem ter contribuído ao INSS." },
    { title: "Descontos Indevidos (RMC e RCC)", desc: "Desconto não autorizado no seu benefício INSS? Atuamos no cancelamento de empréstimos consignados e cobranças abusivas, com direito à restituição dos valores." },
    { title: "Pensão por Morte", desc: "Assessoria completa para os dependentes do segurado falecido garantirem o benefício a que têm direito junto ao INSS, com agilidade e atenção em um momento difícil." }
  ];

  return (
    <section id="servicos" className="py-[72px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="mb-10">
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#CFAE70] mb-2.5 block">Áreas de atuação</span>
          <h2 className="text-[clamp(26px,3vw,34px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] mt-2">O que posso fazer por você</h2>
          <p className="text-[15px] text-[#767672] mt-2 max-w-[520px]">Atuação focada em Direito Previdenciário, com atenção técnica e pessoal a cada caso.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 md:p-[26px_24px] flex flex-col border-t-[3px] border-transparent hover:border-[#CFAE70] hover:bg-[#F4F4F2] transition-colors cursor-pointer group">
              <div className="w-[42px] h-[42px] flex items-center justify-center bg-[rgba(9,29,57,0.06)] mb-3.5 shrink-0 rounded-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#091D39] fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
              </div>
              <h3 className="text-[15px] font-semibold text-[#091D39] mb-2 leading-[1.3]">{s.title}</h3>
              <p className="text-[13px] text-[#767672] leading-[1.6] flex-1">{s.desc}</p>
              <span className="inline-flex items-center gap-1.5 mt-3.5 text-[12px] font-medium text-[#767672] group-hover:text-[#091D39]">Saiba mais <span className="group-hover:translate-x-1 transition-transform">&#8594;</span></span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#091D39] mt-6 p-4 md:p-[18px_24px]">
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 bg-[#CFAE70] shrink-0" />
            <span className="text-[14px] text-white/75">Dúvidas sobre qual serviço se aplica ao seu caso? Fale com o advogado.</span>
          </div>
          <button 
            className="bg-[#CFAE70] text-[#091D39] text-[13px] font-bold px-[22px] py-2.5 flex items-center gap-2 whitespace-nowrap hover:bg-[#dfc880] transition-colors shrink-0"
            onClick={() => window.open('https://wa.me/5527999999999','_blank')}
          >
            <svg width="14" height="14" fill="var(--azul)" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Falar pelo WhatsApp
          </button>
        </div>
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
    <section className="py-[72px] bg-[#091D39]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="mb-10">
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#CFAE70] mb-2.5 block">Processo</span>
          <h2 className="text-[clamp(26px,3vw,34px)] font-bold text-white tracking-[-0.02em] leading-[1.15] mt-2">Como funciona o atendimento</h2>
          <p className="text-[15px] text-white/50 mt-2 max-w-[520px]">Do primeiro contato até a resolução do seu caso.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10">
          {steps.map((s, i) => (
            <div key={i} className="bg-[#091D39] p-[28px_24px]">
              <div className="text-[32px] font-bold text-[#CFAE70] opacity-35 leading-none mb-3.5">{s.num}</div>
              <h4 className="text-[14px] font-semibold text-white mb-2">{s.title}</h4>
              <p className="text-[13px] text-white/45 leading-[1.6]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutV2() {
  return (
    <section id="sobre" className="py-[72px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] border border-[#E0E0DC] items-stretch">
          <div className="min-h-[320px] lg:min-h-[480px] overflow-hidden bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
              alt="Anderson Litig" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="p-8 lg:p-[48px_44px] flex flex-col justify-center bg-white">
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#CFAE70] mb-2.5 block">Sobre o advogado</span>
            <h2 className="text-[clamp(24px,2.5vw,32px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] mb-5">Anderson Litig</h2>
            <p className="text-[15px] text-[#767672] leading-[1.75] mb-3">Sou advogado inscrito na OAB/ES sob o nº 40.152, pós-graduado em Direito Previdenciário, com atuação focada nessa área. Atendo clientes em Serra e na Grande Vitória, com possibilidade de atendimento digital para todo o Brasil.</p>
            <p className="text-[15px] text-[#767672] leading-[1.75] mb-3">A formação especializada me permite acompanhar as frequentes mudanças legislativas e as teses jurisprudenciais que impactam diretamente os benefícios do INSS — um campo que exige atualização constante para uma atuação eficaz.</p>
            <p className="text-[15px] text-[#767672] leading-[1.75] mb-3">Acredito que cada caso merece atenção individualizada. Meu objetivo é defender os direitos de quem contribuiu a vida inteira e precisa ter os seus benefícios respeitados.</p>
            <div className="flex flex-wrap gap-2 mt-5 mb-6">
              <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#091D39] bg-[#F4F4F2] px-3 py-1.5 border border-[#E0E0DC]">Pós-grad. Direito Previdenciário</span>
              <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#091D39] bg-[#F4F4F2] px-3 py-1.5 border border-[#E0E0DC]">OAB/ES 40.152</span>
              <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#091D39] bg-[#F4F4F2] px-3 py-1.5 border border-[#E0E0DC]">Serra &middot; ES</span>
              <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#091D39] bg-[#F4F4F2] px-3 py-1.5 border border-[#E0E0DC]">Atendimento nacional</span>
            </div>
            <div>
              <button 
                className="inline-flex items-center gap-2 bg-[#091D39] text-white text-[14px] font-medium px-6 py-3 hover:bg-[#0d2548] transition-colors"
                onClick={() => document.getElementById('contato')?.scrollIntoView({behavior:'smooth'})}
              >
                Agendar uma consulta &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTAWppV2() {
  return (
    <section className="py-14 bg-[#091D39] border-y border-white/5">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-10">
          <div>
            <h2 className="text-[clamp(22px,2.5vw,28px)] font-bold text-white tracking-[-0.02em] mb-2">Tem dúvidas sobre seu benefício?</h2>
            <p className="text-[14px] text-white/55">Entre em contato para uma análise inicial do seu caso. Atendimento direto, sem burocracia.</p>
          </div>
          <button 
            className="bg-[#25D366] text-white text-[14px] font-semibold px-7 py-3.5 flex items-center gap-2.5 hover:bg-[#1db957] transition-colors whitespace-nowrap w-fit"
            onClick={() => window.open('https://wa.me/5527999999999','_blank')}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Falar pelo WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

function BlogV2() {
  const posts = [
    { cat: "Aposentadoria", title: "Como calcular seu tempo de contribuição para o INSS: guia completo 2025", desc: "Entenda quais períodos contam e o que fazer se houver lacunas no CNIS.", meta: "Leitura: 7 min" },
    { cat: "Benefício negado", title: "O INSS negou meu benefício: quais são os próximos passos", desc: "Recurso administrativo ou ação judicial? Entenda as opções.", meta: "Leitura: 5 min" },
    { cat: "Descontos indevidos", title: "RMC no benefício INSS: como identificar e cancelar descontos não autorizados", desc: "Saiba como agir quando há desconto não autorizado no seu benefício.", meta: "Leitura: 4 min" }
  ];

  return (
    <section id="blog" className="py-[72px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#CFAE70] mb-2.5 block">Blog jurídico</span>
            <h2 className="text-[clamp(26px,3vw,34px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] mt-2">Conheça seus direitos</h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#091D39] bg-transparent px-[18px] py-2.5 border border-[#E0E0DC] hover:border-[#091D39] hover:bg-[#F4F4F2] transition-all cursor-pointer">
            Ver todos os artigos &#8594;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {posts.map((p, i) => (
            <div key={i} className="bg-white cursor-pointer hover:bg-[#F4F4F2] transition-colors group flex flex-col h-full">
              <div className="h-40 bg-[#091D39] border-b-[3px] border-[#CFAE70]" />
              <div className="p-[20px_22px] flex flex-col flex-1">
                <div className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#8a6e30] mb-2">{p.cat}</div>
                <h3 className="text-[14px] font-semibold text-[#091D39] leading-[1.4] mb-1.5">{p.title}</h3>
                <p className="text-[12px] text-[#767672] leading-[1.6] flex-1">{p.desc}</p>
                <div className="text-[11px] text-[#767672] mt-2.5">{p.meta}</div>
              </div>
            </div>
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
    <section id="faq" className="py-[72px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="mb-10">
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#CFAE70] mb-2.5 block">Perguntas Frequentes</span>
          <h2 className="text-[clamp(26px,3vw,34px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] mt-2">Dúvidas comuns</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {faqs.map((f, i) => (
            <div key={i} className={`bg-white ${openIdx === i ? 'open' : ''}`}>
              <div 
                className={`p-[18px_22px] cursor-pointer flex items-center justify-between gap-3 text-[14px] font-medium text-[#091D39] border-l-[3px] transition-colors ${openIdx === i ? 'bg-[#F4F4F2] border-[#CFAE70]' : 'border-transparent hover:bg-[#F4F4F2] hover:border-[#CFAE70]'}`}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                {f.q}
                <span className={`text-[18px] text-[#CFAE70] shrink-0 transition-transform ${openIdx === i ? 'rotate-45' : ''}`}>+</span>
              </div>
              <div 
                className="overflow-hidden transition-all duration-300 border-l-[3px] border-[#E0E0DC] text-[13px] text-[#767672] leading-[1.7]"
                style={{ maxHeight: openIdx === i ? '200px' : '0', padding: openIdx === i ? '0 22px 18px' : '0 22px' }}
              >
                {f.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactV2() {
  return (
    <section id="contato" className="py-[72px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#E0E0DC] items-stretch">
          <div className="p-8 md:p-[48px_44px] bg-[#091D39] flex flex-col justify-center">
            <h2 className="text-[clamp(22px,2.5vw,28px)] font-bold text-white tracking-[-0.02em] mb-2 pl-4 border-l-4 border-[#CFAE70]">Fale com o advogado</h2>
            <p className="text-[15px] text-white/55 leading-[1.65] mt-3 mb-9">Entre em contato para uma avaliação inicial. Atendimento ágil e direto.</p>
            
            <div className="flex items-start gap-3.5 mb-5.5">
              <div className="w-11 h-11 bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                <svg className="w-[18px] h-[18px] stroke-[#CFAE70] fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/40 mb-0.5">Telefone / WhatsApp</span>
                <strong className="text-[15px] font-semibold text-white">+55 27 99999-9999</strong>
              </div>
            </div>
            
            <div className="flex items-start gap-3.5 mb-5.5 mt-5">
              <div className="w-11 h-11 bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                <svg className="w-[18px] h-[18px] stroke-[#CFAE70] fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/40 mb-0.5">E-mail</span>
                <strong className="text-[15px] font-semibold text-white">contato@andersonlitig.adv.br</strong>
              </div>
            </div>

            <div className="flex items-start gap-3.5 mt-5">
              <div className="w-11 h-11 bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                <svg className="w-[18px] h-[18px] stroke-[#CFAE70] fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/40 mb-0.5">Localização</span>
                <strong className="text-[15px] font-semibold text-white">Serra/ES &middot; Atendimento Nacional</strong>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-[48px_44px] bg-white">
            <h3 className="text-[20px] font-bold text-[#091D39] mb-6">Envie uma mensagem</h3>
            <form className="flex flex-col gap-3.5">
              <div>
                <label className="block text-[10px] font-semibold tracking-[0.1em] uppercase text-[#767672] mb-1.5">Seu nome</label>
                <input type="text" className="w-full p-[11px_13px] border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#2C2C2C] outline-none transition-colors focus:border-[#091D39]" />
              </div>
              <div>
                <label className="block text-[10px] font-semibold tracking-[0.1em] uppercase text-[#767672] mb-1.5">Telefone / WhatsApp</label>
                <input type="text" className="w-full p-[11px_13px] border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#2C2C2C] outline-none transition-colors focus:border-[#091D39]" />
              </div>
              <div>
                <label className="block text-[10px] font-semibold tracking-[0.1em] uppercase text-[#767672] mb-1.5">Como posso ajudar?</label>
                <textarea className="w-full min-h-[90px] resize-y p-[11px_13px] border border-[#E0E0DC] bg-white font-sans text-[14px] text-[#2C2C2C] outline-none transition-colors focus:border-[#091D39]" />
              </div>
              <button type="submit" className="w-full bg-[#091D39] text-white font-sans text-[12px] font-bold tracking-[0.12em] uppercase p-[15px] mt-1.5 hover:bg-[#0d2548] transition-colors cursor-pointer border-none">
                Enviar Mensagem
              </button>
              <div className="text-[11px] text-[#767672] mt-3 leading-[1.5]">Seus dados estão seguros e serão utilizados apenas para retorno do contato.</div>
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
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 py-12 border-b border-white/10">
          <div>
            <div className="text-[18px] font-bold text-[#CFAE70] mb-1">Anderson Litig</div>
            <div className="text-[11px] text-white/30 mb-3.5">OAB/ES nº 40.152</div>
            <p className="text-[12px] text-white/30 leading-[1.75] max-w-[300px]">Atendimento jurídico previdenciário especializado com atuação administrativa e judicial. Protegendo seus direitos frente ao INSS.</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3.5">Navegação</h4>
            <a href="#" className="text-[13px] text-white/40 mb-2 hover:text-[#CFAE70] transition-colors cursor-pointer">Início</a>
            <a href="#servicos" className="text-[13px] text-white/40 mb-2 hover:text-[#CFAE70] transition-colors cursor-pointer">Serviços</a>
            <a href="#sobre" className="text-[13px] text-white/40 mb-2 hover:text-[#CFAE70] transition-colors cursor-pointer">Sobre</a>
            <a href="#contato" className="text-[13px] text-white/40 mb-2 hover:text-[#CFAE70] transition-colors cursor-pointer">Contato</a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3.5">Serviços</h4>
            <a href="#" className="text-[13px] text-white/40 mb-2 hover:text-[#CFAE70] transition-colors cursor-pointer">Aposentadorias</a>
            <a href="#" className="text-[13px] text-white/40 mb-2 hover:text-[#CFAE70] transition-colors cursor-pointer">Planejamento</a>
            <a href="#" className="text-[13px] text-white/40 mb-2 hover:text-[#CFAE70] transition-colors cursor-pointer">Revisões</a>
            <a href="#" className="text-[13px] text-white/40 mb-2 hover:text-[#CFAE70] transition-colors cursor-pointer">Auxílio-doença</a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3.5">Contato</h4>
            <span className="text-[13px] text-white/40 mb-2">(27) 99999-9999</span>
            <span className="text-[13px] text-white/40 mb-2">contato@andersonlitig.adv.br</span>
            <span className="text-[13px] text-white/40 mb-2">Serra / ES</span>
          </div>
        </div>
        <div className="py-4 flex justify-between items-center flex-wrap gap-2 text-[11px] text-white/20">
          <span>&copy; {new Date().getFullYear()} Anderson Litig. Todos os direitos reservados.</span>
          <span>Desenvolvido com tecnologia e precisão.</span>
        </div>
      </div>
    </footer>
  );
}
