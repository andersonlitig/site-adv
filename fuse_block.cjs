const fs = require('fs');
let code = fs.readFileSync('client/src/pages/IncapacidadeV2.tsx', 'utf-8');

// Replace the entire TiposIncapacidade function with a fused version
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

const newTipos = `function TiposIncapacidade() {
  const tipos = [
    { icon: <Briefcase size={20} />, title: "Auxílio-Doença (Incapacidade Temporária)", desc: "Para quem não pode trabalhar temporariamente por doença ou acidente. Exige 12 meses de contribuição na regra geral." },
    { icon: <ShieldAlert size={20} />, title: "Auxílio-Doença Acidentário", desc: "Para acidentes de trabalho ou doenças ocupacionais (como Burnout e LER). Não exige carência e garante 12 meses de estabilidade no emprego." },
    { icon: <Users size={20} />, title: "Aposentadoria por Invalidez", desc: "Para casos em que a perícia médica atesta incapacidade total e permanente, sem possibilidade de reabilitação." },
    { icon: <Plus size={20} />, title: "Adicional de 25%", desc: "Quem se aposenta por invalidez e precisa da ajuda de terceiros para atividades diárias tem direito a 25% de aumento no benefício." },
    { icon: <Target size={20} />, title: "Isenção de Carência", desc: "Doenças graves (câncer, cardiopatia, etc) ou acidentes dão direito ao benefício desde o 1º dia de INSS, sem precisar de 12 meses." },
    { icon: <Scale size={20} />, title: "Limbo Previdenciário", desc: "Quando o INSS dá alta e a empresa recusa o retorno do trabalhador. Exige ação imediata para você não ficar sem salário e sem benefício." }
  ];

  return (
    <section id="tipos" className="py-[80px] md:py-[100px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">

        {/* Fused header: intro left + label right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 mb-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block mb-4">Direito Previdenciário Especializado</span>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading mb-5">
              Sua saúde não pode esperar pela burocracia do INSS.
            </h2>
            <p className="text-[16px] text-[#767672] leading-[1.7] font-light">
              Estar doente ou incapacitado já é um momento de extrema fragilidade. Quando o benefício é negado, a preocupação com o sustento da família só agrava a situação. Nosso papel é agir rápido, garantindo que o seu direito seja reconhecido com urgência.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:text-right"
          >
            <div className="inline-block border-l-4 border-[#CFAE70] pl-5 lg:border-l-0 lg:border-r-4 lg:pr-5 lg:pl-0">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block mb-2">Entenda seus direitos</span>
              <p className="text-[17px] font-semibold text-[#091D39]">Qual benefício se encaixa<br/>no seu caso?</p>
            </div>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {tipos.map((t, i) => (
            <motion.div
              key={i}
              className="p-8 border-t-4 border-transparent flex flex-col transition-colors duration-300 bg-[#F4F4F2] hover:bg-white hover:border-[#CFAE70] hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-5 bg-[#091D39]/5 text-[#091D39]">
                {t.icon}
              </div>
              <h3 className="text-[16px] font-bold mb-3 leading-[1.4] text-[#091D39]">{t.title}</h3>
              <p className="text-[14px] leading-[1.65] font-light flex-1 text-[#767672]">{t.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}`;

code = replaceComponent(code, 'TiposIncapacidade', newTipos);
fs.writeFileSync('client/src/pages/IncapacidadeV2.tsx', code);
console.log('Fused block done');
