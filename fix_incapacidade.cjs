const fs = require('fs');
let code = fs.readFileSync('client/src/pages/IncapacidadeV2.tsx', 'utf-8');

function replaceComponent(source, compName, newContent) {
  const startStr = `function ${compName}() {`;
  const startIdx = source.indexOf(startStr);
  if (startIdx === -1) return source;
  
  let openBraces = 0;
  let inFunction = false;
  let endIdx = -1;
  
  for (let i = startIdx; i < source.length; i++) {
    if (source[i] === '{') {
      openBraces++;
      inFunction = true;
    } else if (source[i] === '}') {
      openBraces--;
    }
    
    if (inFunction && openBraces === 0) {
      endIdx = i + 1;
      break;
    }
  }
  
  return source.substring(0, startIdx) + newContent + source.substring(endIdx);
}

// 1. New TiposIncapacidade (which will act as the "explaining block")
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
        <motion.div 
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] mb-3 block">Entenda seus direitos</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">O que é cada benefício?</h2>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[600px] font-light mx-auto md:mx-0">
            Diferentes situações exigem diferentes abordagens legais contra o INSS. Veja qual se encaixa no seu caso:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E0E0DC] border border-[#E0E0DC]">
          {tipos.map((t, i) => (
            <motion.div 
              key={i} 
              className="p-8 border-t-4 border-transparent flex flex-col transition-colors duration-300 bg-[#F4F4F2] hover:bg-white hover:border-[#CFAE70] hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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

// 2. New AlertaIncapacidade (Without the photo, just text block)
const newAlerta = `function AlertaIncapacidade() {
  return (
    <section className="py-[80px] md:py-[100px] bg-[#F4F4F2] border-b border-[#E0E0DC]">
      <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block">O perigo do limbo previdenciário</span>
          <h2 className="text-[clamp(26px,3vw,38px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">
            O INSS procura motivos para cortar o seu benefício.
          </h2>
          <p className="text-[16px] text-[#767672] leading-[1.7] font-light">
            Ir para a perícia apenas com uma receita médica antiga ou laudo simples pode ser um erro fatal. <strong className="text-[#091D39]">E o pior cenário é o "Limbo Previdenciário": o INSS te dá alta, mas o médico do trabalho da empresa não aceita o seu retorno.</strong>
          </p>
          <p className="text-[16px] text-[#767672] leading-[1.7] font-light">
            Nessa situação, você fica sem salário da empresa e sem o auxílio do INSS, acumulando dívidas enquanto sua saúde piora. É essencial intervir judicialmente com urgência.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              className="bg-[#091D39] text-white text-[13px] font-bold px-8 py-4 flex items-center gap-2 hover:bg-[#CFAE70] hover:text-[#091D39] transition-colors tracking-[0.15em] uppercase group"
              onClick={() => document.getElementById('triagem')?.scrollIntoView({behavior:'smooth'})}
            >
              RESTABELECER MEU BENEFÍCIO <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}`;

// 3. New AutoridadeAdvogado (With the photo layout)
const newAutoridade = `function AutoridadeAdvogado() {
  return (
    <section className="py-[80px] md:py-[100px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-center">
          
          <motion.div
            className="relative h-full min-h-[420px] lg:min-h-[520px] w-full order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-[#091D39] overflow-hidden border border-[#E0E0DC] shadow-xl">
              <img src={andersonImg} alt="Dr. Anderson Litig" className="w-full h-full object-cover object-top opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091D39] via-[#091D39]/10 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-5 shadow-xl max-w-[250px] border border-[#E0E0DC] hidden md:block z-20">
              <div className="w-7 h-[2px] bg-[#CFAE70] mb-3" />
              <p className="text-[13px] text-[#091D39] font-semibold leading-[1.5]">Anderson Litig</p>
              <p className="text-[12px] text-[#767672] font-light">Advogado Previdenciário · OAB/ES nº 40.152</p>
            </div>
          </motion.div>

          <motion.div className="space-y-6 order-1 lg:order-2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block">Quem vai cuidar do seu caso</span>
            <h2 className="text-[clamp(26px,3vw,38px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">
              Decisão previdenciária séria não começa com protocolo.
            </h2>
            <p className="text-[17px] text-[#091D39]/60 font-light leading-[1.4]">Começa com análise técnica individualizada.</p>
            <p className="text-[16px] text-[#767672] leading-[1.7] font-light">
              Cada caso tem uma história por trás — anos de trabalho e a expectativa de receber o que é seu por direito. Atuo com atenção técnica e cuidado humano em cada etapa, do primeiro contato até o resultado.
            </p>

            <div className="pt-4 space-y-3">
              {[
                { icon: <BookOpen size={18} />, label: "Pós-graduado em Direito Previdenciário" },
                { icon: <Award size={18} />, label: "Membro da Comissão de Direito Previdenciário — OAB Serra/ES" },
                { icon: <ShieldCheck size={18} />, label: "OAB/ES nº 40.152 — regularmente inscrito" },
                { icon: <Globe size={18} />, label: "Atendimento 100% digital em todo o Brasil" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-[#F4F4F2] border border-[#E0E0DC] px-5 py-4 shadow-sm hover:border-[#CFAE70] transition-all duration-300">
                  <div className="w-9 h-9 bg-white flex items-center justify-center shrink-0 text-[#091D39] shadow-sm">
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

code = replaceComponent(code, 'TiposIncapacidade', newTipos);
code = replaceComponent(code, 'AlertaIncapacidade', newAlerta);
code = replaceComponent(code, 'AutoridadeAdvogado', newAutoridade);

// Now reorder the main render:
// HeroIncapacidade -> TiposIncapacidade -> AlertaIncapacidade -> VantagensIncapacidade -> TriagemIncapacidade -> AutoridadeAdvogado -> CTAFinal
code = code.replace(
`        <HeroIncapacidade />
        <AlertaIncapacidade />
        <VantagensIncapacidade />
        <AutoridadeAdvogado />
        <TriagemIncapacidade />
        <TiposIncapacidade />`,
`        <HeroIncapacidade />
        <TiposIncapacidade />
        <AlertaIncapacidade />
        <VantagensIncapacidade />
        <TriagemIncapacidade />
        <AutoridadeAdvogado />`
);

// We also need to fix the import for the photo in IncapacidadeV2, but it already uses \`import andersonImg from "@/assets/anderson-litig.png"\` which is fine. The user uploaded \`media_1787097898620.jpg\`. I should copy it to \`src/assets/anderson-suit.jpg\` and change the import to use it.
code = code.replace(
  'import andersonImg from "@/assets/anderson-litig.png";',
  'import andersonImg from "@/assets/anderson-suit.jpg";'
);

fs.writeFileSync('client/src/pages/IncapacidadeV2.tsx', code);
console.log('Fixed IncapacidadeV2 components and order');
