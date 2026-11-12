const fs = require('fs');
let code = fs.readFileSync('client/src/pages/IncapacidadeV2.tsx', 'utf-8');

// 1. Reorder the main return block
code = code.replace(
`        <HeroIncapacidade />
        <TiposIncapacidade />
        <AlertaIncapacidade />
        <VantagensIncapacidade />
        <TriagemIncapacidade />
        <AutoridadeAdvogado />
        <CTAFinal />`,
`        <HeroIncapacidade />
        <IntroducaoIncapacidade />
        <AlertaIncapacidade />
        <VantagensIncapacidade />
        <AutoridadeAdvogado />
        <TriagemIncapacidade />
        <TiposIncapacidade />
        <CTAFinal />`
);

// 2. Add IntroducaoIncapacidade component right before HeroIncapacidade
const introComponent = `function IntroducaoIncapacidade() {
  return (
    <section className="py-[60px] md:py-[80px] bg-white border-b border-[#E0E0DC]">
      <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block">Direito Previdenciário Especializado</span>
          <h2 className="text-[clamp(24px,2.5vw,32px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">
            Sua saúde não pode esperar pela burocracia do INSS.
          </h2>
          <p className="text-[16px] text-[#767672] leading-[1.7] font-light">
            Estar doente ou incapacitado já é um momento de extrema fragilidade. Quando o benefício é negado, a preocupação com o sustento da família só agrava a situação. Nosso papel é agir rápido, garantindo que o seu direito seja reconhecido com urgência.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function HeroIncapacidade() {`;
code = code.replace(`function HeroIncapacidade() {`, introComponent);

// 3. Remove the floating box from AutoridadeAdvogado and add the text to the header
const blockToRemove = `<div className="absolute -bottom-6 -right-6 bg-white p-5 shadow-xl max-w-[250px] border border-[#E0E0DC] hidden md:block z-20">
              <div className="w-7 h-[2px] bg-[#CFAE70] mb-3" />
              <p className="text-[13px] text-[#091D39] font-semibold leading-[1.5]">Anderson Litig</p>
              <p className="text-[12px] text-[#767672] font-light">Advogado Previdenciário · OAB/ES nº 40.152</p>
            </div>`;
code = code.replace(blockToRemove, '');

const oldHeader = `<span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block">Quem vai cuidar do seu caso</span>`;
const newHeader = `<span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block">Dr. Anderson Litig — OAB/ES nº 40.152</span>`;
code = code.replace(oldHeader, newHeader);

fs.writeFileSync('client/src/pages/IncapacidadeV2.tsx', code);
console.log('Adjustments applied');
