const fs = require('fs');
let code = fs.readFileSync('client/src/pages/AposentarV2.tsx', 'utf-8');

// 1. Swap render order
code = code.replace(
  `        <HeroAposentar />
        <AlertaAposentar />
        <EntendaSeusDireitos />
        <TiposAposentadoria />
        <TriagemAposentadoriaV2 />`,
  `        <HeroAposentar />
        <AlertaAposentar />
        <TiposAposentadoria />
        <EntendaSeusDireitos />
        <TriagemAposentadoriaV2 />`
);

// 2. Adjust backgrounds to maintain rhythm
// AlertaAposentar is bg-[#F4F4F2] (gray)
// TiposAposentadoria should be bg-white
// EntendaSeusDireitos should be bg-[#F4F4F2] (gray)

// TiposAposentadoria: bg-[#F4F4F2] -> bg-white
const tiposStart = code.indexOf('function TiposAposentadoria()');
const tiposEnd = code.indexOf('\nfunction ', tiposStart + 10);
let tiposBlock = code.substring(tiposStart, tiposEnd);
tiposBlock = tiposBlock.replace('className="py-[80px] md:py-[100px] bg-[#F4F4F2]', 'className="py-[80px] md:py-[100px] bg-white');
// change its cards to gray so they pop on white bg
tiposBlock = tiposBlock.replace(/bg-white hover:border/g, 'bg-[#F4F4F2] hover:bg-white hover:border');
code = code.substring(0, tiposStart) + tiposBlock + code.substring(tiposEnd);

// EntendaSeusDireitos: bg-white -> bg-[#F4F4F2]
const entendaStart = code.indexOf('function EntendaSeusDireitos()');
const entendaEnd = code.indexOf('\nfunction ', entendaStart + 10);
let entendaBlock = code.substring(entendaStart, entendaEnd);
entendaBlock = entendaBlock.replace('className="py-[80px] md:py-[100px] bg-white', 'className="py-[80px] md:py-[100px] bg-[#F4F4F2]');
code = code.substring(0, entendaStart) + entendaBlock + code.substring(entendaEnd);

fs.writeFileSync('client/src/pages/AposentarV2.tsx', code);
console.log('Order swapped and backgrounds fixed!');
