const fs = require('fs');
let code = fs.readFileSync('client/src/pages/IncapacidadeV2.tsx', 'utf-8');

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

// 1. Fix render order: Triagem before AutoridadeAdvogado
code = code.replace(
`        <VantagensIncapacidade />
        <AutoridadeAdvogado />
        <TriagemIncapacidade />`,
`        <VantagensIncapacidade />
        <TriagemIncapacidade />
        <AutoridadeAdvogado />`
);

// 2. Fix VantagensIncapacidade - correct content for incapacidade
const newVantagens = `function VantagensIncapacidade() {
  const itens = [
    { icon: <FileSignature size={20} />, title: "Laudo preparado para vencer", desc: "Orientamos o que precisa estar escrito no laudo do seu médico para que ele tenha força real contra a perícia do INSS." },
    { icon: <Scale size={20} />, title: "Perícia judicial imparcial", desc: "Na Justiça, a perícia é feita por um especialista nomeado pelo juiz — muito mais justa que a do perito do INSS." },
    { icon: <FastForward size={20} />, title: "Liminar de urgência", desc: "Pedimos Antecipação de Tutela para o juiz obrigar o INSS a pagar o benefício antes mesmo do processo terminar." },
    { icon: <HeadphonesIcon size={20} />, title: "Atrasados garantidos", desc: "Se ganharmos, o INSS pagará tudo que deixou de pagar desde o dia da negativa ou do corte indevido." }
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
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Por que acionar a Justiça contra o INSS?</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">O INSS analisa casos para negar.<br className="hidden md:block"/>Nós atuamos para garantir o seu direito.</h2>
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
}`;

// 3. Fix AutoridadeAdvogado: remove OAB from tag (already in list), put name big below photo
const newAutoridade = `function AutoridadeAdvogado() {
  return (
    <section className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[480px] lg:h-[540px] w-full bg-[#091D39] overflow-hidden border border-[#E0E0DC] shadow-xl">
              <img src={andersonImg} alt="Dr. Anderson Litig" className="w-full h-full object-cover object-top opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091D39] via-[#091D39]/10 to-transparent" />
            </div>
            {/* Name big below the photo */}
            <div className="bg-white border border-[#E0E0DC] px-6 py-5 shadow-sm mt-0 border-t-0">
              <p className="text-[20px] font-bold text-[#091D39] leading-[1.3]">Anderson Litig</p>
              <p className="text-[14px] text-[#767672] font-light mt-1">Advogado Previdenciário · OAB/ES nº 40.152</p>
            </div>
          </motion.div>

          <motion.div className="space-y-6 pt-4" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block">Quem vai cuidar do seu caso</span>
            <h2 className="text-[clamp(26px,3vw,38px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">
              Decisão previdenciária séria não começa com protocolo.
            </h2>
            <p className="text-[17px] text-[#091D39]/60 font-light leading-[1.4]">Começa com análise técnica individualizada.</p>
            <p className="text-[16px] text-[#767672] leading-[1.7] font-light">
              Cada caso tem uma história por trás — anos de trabalho e a expectativa de receber o que é seu por direito. Atuo com atenção técnica e cuidado humano em cada etapa, do primeiro contato até o resultado.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { icon: <BookOpen size={18} />, label: "Pós-graduado em Direito Previdenciário" },
                { icon: <Award size={18} />, label: "Membro da Comissão de Direito Previdenciário — OAB Serra/ES" },
                { icon: <Globe size={18} />, label: "Atendimento 100% digital em todo o Brasil" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white border border-[#E0E0DC] px-5 py-4 shadow-sm hover:border-[#CFAE70] transition-all duration-300">
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

code = replaceComponent(code, 'VantagensIncapacidade', newVantagens);
code = replaceComponent(code, 'AutoridadeAdvogado', newAutoridade);

fs.writeFileSync('client/src/pages/IncapacidadeV2.tsx', code);
console.log('Done: fixed order, vantagens content, autoridade layout');
