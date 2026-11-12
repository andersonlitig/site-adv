const fs = require('fs');

let code = fs.readFileSync('client/src/pages/IncapacidadeV2.tsx', 'utf-8');

// 1. Remove IntroducaoIncapacidade
const startIntro = 'function IntroducaoIncapacidade() {';
const endIntro = `  );\n}\n`;

const introIndex = code.indexOf(startIntro);
if (introIndex !== -1) {
  let endIndex = code.indexOf(endIntro, introIndex);
  code = code.substring(0, introIndex) + code.substring(endIndex + endIntro.length);
}
code = code.replace('<IntroducaoIncapacidade />\n', '');
code = code.replace('<IntroducaoIncapacidade />', '');

// 2. Modify TiposIncapacidade to have the new header
const oldTiposHeader = `<div className="max-w-[1160px] mx-auto px-4 md:px-8">
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
        </motion.div>`;

const newTiposHeader = `<div className="max-w-[1160px] mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block mb-3">Direito Previdenciário Especializado</span>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading max-w-[800px] mx-auto mb-5">
            Sua saúde não pode esperar pela burocracia do INSS.
          </h2>
          <p className="text-[16px] text-[#767672] max-w-[800px] mx-auto font-light leading-[1.7] mb-12">
            Estar doente ou incapacitado já é um momento de extrema fragilidade. Quando o benefício é negado, a preocupação com o sustento da família só agrava a situação. Nosso papel é agir rápido, garantindo que o seu direito seja reconhecido com urgência.
          </p>
          
          <div className="w-16 h-1 bg-[#CFAE70]/30 mx-auto mb-12" />

          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#CFAE70] block mb-3">Entenda seus direitos</span>
          <h3 className="text-[22px] md:text-[28px] font-bold text-[#091D39] tracking-[-0.02em] leading-[1.15] font-heading">
            O que é cada benefício?
          </h3>
          <p className="text-[16px] text-[#767672] mt-4 max-w-[600px] font-light mx-auto">
            Diferentes situações exigem diferentes abordagens legais contra o INSS. Veja qual se encaixa no seu caso:
          </p>
        </motion.div>`;

code = code.replace(oldTiposHeader, newTiposHeader);

// 3. Move TiposIncapacidade up
// Currently the render block is:
/*
        <HeroIncapacidade />
        
        <AlertaIncapacidade />
        <VantagensIncapacidade />
        <AutoridadeAdvogado />
        <TriagemIncapacidade />
        <TiposIncapacidade />
        <CTAFinal />
*/
// or something similar depending on spaces. We will use a regex to replace the whole chunk.
code = code.replace(/<HeroIncapacidade \/>[\s\S]*?<CTAFinal \/>/,
`<HeroIncapacidade />
        <TiposIncapacidade />
        <AlertaIncapacidade />
        <VantagensIncapacidade />
        <AutoridadeAdvogado />
        <TriagemIncapacidade />
        <CTAFinal />`);

fs.writeFileSync('client/src/pages/IncapacidadeV2.tsx', code);
console.log('Reordered and merged successfully');
