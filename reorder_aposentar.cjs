const fs = require('fs');
let code = fs.readFileSync('client/src/pages/AposentarV2.tsx', 'utf-8');

// ─── 1. REORDER THE RENDER BLOCK ───────────────────────────────────────────
// New sequence:
// Hero (blue) → Alerta (gray) → Tipos (white) → Triagem (blue) →
// Vantagens (gray) → Autoridade (white) → ComoFunciona (gray) →
// CTAFinal (blue) → FAQ (white) → Contato (white)

code = code.replace(
`        <HeroAposentar />
        <AlertaAposentar />
        <VantagensAdvogado />
        <TriagemAposentadoriaV2 />
        <AutoridadeAdvogado />
        <TiposAposentadoria />
        <CTAFinal />
        <ComoFunciona />
        <FAQAposentar />
        <ContatoAposentar />`,
`        <HeroAposentar />
        <AlertaAposentar />
        <TiposAposentadoria />
        <TriagemAposentadoriaV2 />
        <VantagensAdvogado />
        <AutoridadeAdvogado />
        <ComoFunciona />
        <CTAFinal />
        <FAQAposentar />
        <ContatoAposentar />`
);

// ─── 2. RECOLOR SECTIONS to alternate nicely ───────────────────────────────
// AlertaAposentar: keep bg-[#F4F4F2] ✓
// TiposAposentadoria: change from bg-[#F4F4F2] → bg-white
// TriagemAposentadoriaV2: keep bg-[#091D39] ✓ (blue – do not touch)
// VantagensAdvogado: change from bg-white → bg-[#F4F4F2]
// AutoridadeAdvogado: change from bg-[#F4F4F2] → bg-white
// ComoFunciona: change from bg-white → bg-[#F4F4F2]
// CTAFinal: keep bg-[#091D39] ✓ (blue – do not touch)
// FAQAposentar: keep bg-white ✓
// ContatoAposentar: keep bg-white ✓

// --- Fix TiposAposentadoria bg ---
// The current TiposAposentadoria function has bg-[#F4F4F2] in its section
const tiposStart = code.indexOf('function TiposAposentadoria()');
const tiposEnd = code.indexOf('\nfunction ', tiposStart + 10);
let tiposBlock = code.substring(tiposStart, tiposEnd);
tiposBlock = tiposBlock.replace(/bg-\[#F4F4F2\]/, 'bg-white');
// also the card hover background
code = code.substring(0, tiposStart) + tiposBlock + code.substring(tiposEnd);

// --- Fix VantagensAdvogado bg ---
const vanStart = code.indexOf('function VantagensAdvogado()');
const vanEnd = code.indexOf('\nfunction ', vanStart + 10);
let vanBlock = code.substring(vanStart, vanEnd);
// change first bg-white in section tag to bg-[#F4F4F2]
vanBlock = vanBlock.replace('className="py-[80px] md:py-[100px] bg-white', 'className="py-[80px] md:py-[100px] bg-[#F4F4F2]');
// card hover background: keep bg-white since it's for the card itself
code = code.substring(0, vanStart) + vanBlock + code.substring(vanEnd);

// --- Fix AutoridadeAdvogado bg ---
const autStart = code.indexOf('function AutoridadeAdvogado()');
const autEnd = code.indexOf('\nfunction ', autStart + 10);
let autBlock = code.substring(autStart, autEnd);
autBlock = autBlock.replace('className="py-[80px] md:py-[100px] bg-[#F4F4F2]', 'className="py-[80px] md:py-[100px] bg-white');
// the credential cards: change bg-white to bg-[#F4F4F2]
autBlock = autBlock.replace(/flex items-center gap-4 bg-white border/g, 'flex items-center gap-4 bg-[#F4F4F2] border');
code = code.substring(0, autStart) + autBlock + code.substring(autEnd);

// --- Fix ComoFunciona bg ---
const comoStart = code.indexOf('function ComoFunciona()');
const comoEnd = code.indexOf('\nfunction ', comoStart + 10);
let comoBlock = code.substring(comoStart, comoEnd);
comoBlock = comoBlock.replace('className="py-[80px] md:py-[100px] bg-white', 'className="py-[80px] md:py-[100px] bg-[#F4F4F2]');
// inner cards: currently bg-[#F4F4F2] → bg-white
comoBlock = comoBlock.replace(/className="bg-\[#F4F4F2\] p-8 border-t-4/g, 'className="bg-white p-8 border-t-4');
code = code.substring(0, comoStart) + comoBlock + code.substring(comoEnd);

fs.writeFileSync('client/src/pages/AposentarV2.tsx', code);
console.log('AposentarV2 reordered and recolored successfully');
