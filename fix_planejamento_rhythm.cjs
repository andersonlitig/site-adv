const fs = require('fs');
let code = fs.readFileSync('client/src/pages/PlanejamentoV2.tsx', 'utf-8');

// 1. Swap photo
code = code.replace('import andersonImg from "@/assets/anderson-litig.png";', 'import andersonImg from "@/assets/anderson-suit.jpg";');

// 2. Adjust Render Order
// Sequence: Hero, Alerta, Entenda, ParaQuem, Triagem, Vantagens, ComoFunciona, Autoridade, CTA, FAQ, Contato
const renderSearch = `<HeroPlanejamento />
        <AlertaPlanejamento />
        <EntendaPlanejamento />
        <VantagensPlanejamento />
        <TriagemPlanejamento />
        <ParaQuemPlanejamento />
        <AutoridadeAdvogado />
        <ComoFuncionaPlanejamento />
        <CTAFinal />
        <FAQPlanejamento />
        <ContatoPlanejamento />`;

const renderReplace = `<HeroPlanejamento />
        <AlertaPlanejamento />
        <EntendaPlanejamento />
        <ParaQuemPlanejamento />
        <TriagemPlanejamento />
        <VantagensPlanejamento />
        <ComoFuncionaPlanejamento />
        <AutoridadeAdvogado />
        <CTAFinal />
        <FAQPlanejamento />
        <ContatoPlanejamento />`;
code = code.replace(renderSearch, renderReplace);

// 3. Fix colors for the new rhythm:
// Hero = blue
// Alerta = gray bg-[#F4F4F2]
// Entenda = white bg-white
// ParaQuem = gray bg-[#F4F4F2] (currently white)
// Triagem = blue bg-[#091D39]
// Vantagens = white bg-white (currently gray)
// ComoFunciona = gray bg-[#F4F4F2] (currently white)
// Autoridade = white bg-white (currently gray)
// CTA = blue bg-[#091D39]
// FAQ = gray bg-[#F4F4F2] (currently white)
// Contato = white bg-white

// Helper
function changeSectionBg(componentName, newBg, cardsChange = null) {
  const startIdx = code.indexOf(`function ${componentName}() {`);
  if (startIdx === -1) return;
  const endIdx = code.indexOf('\\nfunction ', startIdx + 10);
  let block = endIdx !== -1 ? code.substring(startIdx, endIdx) : code.substring(startIdx);
  
  // Replace section bg
  block = block.replace(/<section[^>]*className="([^"]*)"/g, (match, classNames) => {
    let newClasses = classNames.replace(/bg-white|bg-\\[#F4F4F2\\]|bg-\\[#091D39\\]/g, newBg);
    return `<section id="${componentName.toLowerCase()}" className="${newClasses}"`.replace('id="' + componentName.toLowerCase() + '" id=', 'id='); // prevent double id
  });

  if (cardsChange) {
    block = block.replace(cardsChange.search, cardsChange.replace);
  }

  if (endIdx !== -1) {
    code = code.substring(0, startIdx) + block + code.substring(endIdx);
  } else {
    code = code.substring(0, startIdx) + block;
  }
}

// ParaQuem: white -> gray (cards inside are gray #F4F4F2 -> white)
changeSectionBg('ParaQuemPlanejamento', 'bg-[#F4F4F2]', { search: /bg-\\[#F4F4F2\\] hover:bg-white/g, replace: 'bg-white hover:bg-[#F4F4F2]' });

// Vantagens: gray -> white (cards inside are white -> gray)
changeSectionBg('VantagensPlanejamento', 'bg-white', { search: /bg-white/g, replace: 'bg-[#F4F4F2]' });

// ComoFunciona: white -> gray (cards inside are gray #F4F4F2 -> white)
changeSectionBg('ComoFuncionaPlanejamento', 'bg-[#F4F4F2]', { search: /bg-\\[#F4F4F2\\]/g, replace: 'bg-white' });

// Autoridade: gray -> white (cards inside are white -> gray)
changeSectionBg('AutoridadeAdvogado', 'bg-white', { search: /bg-white border/g, replace: 'bg-[#F4F4F2] border' });

// FAQ: white -> gray (accordion items are gray #F4F4F2 -> white)
changeSectionBg('FAQPlanejamento', 'bg-[#F4F4F2]', { search: /bg-\\[#F4F4F2\\]/g, replace: 'bg-white' });

// Remove the injected id duplicate if exists
code = code.replace(/id="[^"]+" id="[^"]+"/g, match => {
  return match.split(' ')[0]; // keep only the first id
});

fs.writeFileSync('client/src/pages/PlanejamentoV2.tsx', code);
console.log('Planejamento flow and colors completely fixed!');
