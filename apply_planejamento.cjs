const fs = require('fs');
let code = fs.readFileSync('client/src/pages/PlanejamentoV2.tsx', 'utf-8');

// Helper to replace components
function replaceComponent(source, compName, newContent) {
  const startStr = `function ${compName}() {`;
  const startIdx = source.indexOf(startStr);
  if (startIdx === -1) { console.log('NOT FOUND:', compName); return source; }
  let openBraces = 0, inFunction = false, endIdx = -1;
  for (let i = startIdx; i < source.length; i++) {
    if (source[i] === '{') { openBraces++; inFunction = true; }
    else if (source[i] === '}') openBraces--;
    if (inFunction && openBraces === 0) { endIdx = i + 1; break; }
  }
  return source.substring(0, startIdx) + newContent + source.substring(endIdx);
}

// 1. Rewrite AlertaPlanejamento to be centered gray block (without photo)
const newAlerta = `function AlertaPlanejamento() {
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
}`;

// 2. Add EntendaPlanejamento (2-column white block)
const newEntenda = `function EntendaPlanejamento() {
  return (
    <section className="py-[80px] md:py-[100px] bg-white border-b border-[#E0E0DC]">
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
}`;

// 3. Fix VantagensPlanejamento (Cards gray block)
const newVantagens = `function VantagensPlanejamento() {
  const cards = [
    { icon: <Calendar size={24} />, title: "Saiba quando se aposentar", desc: "Descubra a data exata para dar entrada com o melhor benefício possível, sem perder tempo ou dinheiro." },
    { icon: <Calculator size={24} />, title: "Descubra o valor exato", desc: "Cálculo matemático preciso com base em todo o seu histórico. Sem surpresas ou decepções na hora de receber." },
    { icon: <LineChart size={24} />, title: "Economize nas contribuições", desc: "Saiba exatamente quanto pagar. Pagar a mais nem sempre significa receber mais." },
    { icon: <ShieldCheck size={24} />, title: "Evite atrasos e negativas", desc: "Identificamos e corrigimos erros no seu CNIS antes mesmo do pedido ser feito ao INSS." }
  ];

  return (
    <section className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
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
              className="bg-white p-8 hover:border-[#CFAE70] hover:shadow-md transition-all duration-300 group flex flex-col items-start border-t-4 border-transparent"
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
}`;

// 4. Fix AutoridadeAdvogado (Remove floating box, text in paragraph, full image)
const newAutoridade = `function AutoridadeAdvogado() {
  return (
    <section className="py-[80px] md:py-[100px] bg-white border-b border-[#E0E0DC]">
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
}`;

// 5. Replace components
code = replaceComponent(code, 'AlertaPlanejamento', newAlerta);
code = replaceComponent(code, 'VantagensPlanejamento', newVantagens);
code = replaceComponent(code, 'AutoridadeAdvogado', newAutoridade);

// 6. Inject EntendaPlanejamento right before VantagensPlanejamento
const vantIdx = code.indexOf('function VantagensPlanejamento()');
code = code.substring(0, vantIdx) + newEntenda + '\n\n' + code.substring(vantIdx);

// 7. Update render order and backgrounds rhythm
// Hero=blue, Alerta=gray, Entenda=white, Vantagens(cards)=gray, Triagem=blue, ParaQuem=white, Autoridade=gray, ComoFunciona=white, CTA=blue, FAQ=gray, Contato=white
code = code.replace(
  `        <HeroPlanejamento />
        <AlertaPlanejamento />
        <VantagensPlanejamento />
        <AutoridadeAdvogado />
        <TriagemPlanejamento />
        <ParaQuemPlanejamento />
        <CTAFinal />
        <ComoFuncionaPlanejamento />
        <FAQPlanejamento />
        <ContatoPlanejamento />`,
  `        <HeroPlanejamento />
        <AlertaPlanejamento />
        <EntendaPlanejamento />
        <VantagensPlanejamento />
        <TriagemPlanejamento />
        <ParaQuemPlanejamento />
        <AutoridadeAdvogado />
        <ComoFuncionaPlanejamento />
        <CTAFinal />
        <FAQPlanejamento />
        <ContatoPlanejamento />`
);

// Fix colors
// ParaQuemPlanejamento -> bg-[#F4F4F2] (gray)
code = code.replace('className="py-[80px] md:py-[100px] bg-white border-b', 'className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b');
// Autoridade is white
// ComoFuncionaPlanejamento -> bg-[#F4F4F2]
code = replaceComponent(code, 'ComoFuncionaPlanejamento', 
  code.substring(code.indexOf('function ComoFuncionaPlanejamento()'), code.indexOf('\nfunction ', code.indexOf('function ComoFuncionaPlanejamento()') + 10))
  .replace('bg-[#091D39]', 'bg-[#F4F4F2]').replace('text-white', 'text-[#091D39]').replace('text-white/60', 'text-[#767672]')
);

fs.writeFileSync('client/src/pages/PlanejamentoV2.tsx', code);
console.log('PlanejamentoV2 fully updated!');
