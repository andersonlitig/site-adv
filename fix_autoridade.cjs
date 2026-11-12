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

const newAutoridade = `function AutoridadeAdvogado() {
  return (
    <section className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">

          {/* Foto — sem bloco abaixo */}
          <motion.div
            className="relative h-[480px] lg:h-[560px] w-full bg-[#091D39] overflow-hidden border border-[#E0E0DC] shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={andersonImg} alt="Dr. Anderson Litig" className="w-full h-full object-cover object-top opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#091D39] via-[#091D39]/10 to-transparent" />
          </motion.div>

          {/* Texto com nome e OAB integrados */}
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

code = replaceComponent(code, 'AutoridadeAdvogado', newAutoridade);
fs.writeFileSync('client/src/pages/IncapacidadeV2.tsx', code);
console.log('Done');
