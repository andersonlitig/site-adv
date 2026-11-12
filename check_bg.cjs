const fs = require('fs');
const c = fs.readFileSync('client/src/pages/AposentarV2.tsx', 'utf-8');

// Find each section's background color
const comps = ['HeroAposentar', 'AlertaAposentar', 'VantagensAdvogado', 'TriagemAposentadoriaV2', 'AutoridadeAdvogado', 'TiposAposentadoria', 'CTAFinal', 'ComoFunciona', 'FAQAposentar', 'ContatoAposentar'];

comps.forEach(name => {
  const funcIdx = c.indexOf(`function ${name}()`);
  if (funcIdx === -1) return;
  const sectionIdx = c.indexOf('<section', funcIdx);
  const chunk = c.substring(sectionIdx, sectionIdx + 150);
  const bgMatch = chunk.match(/bg-\[([^\]]+)\]|bg-(\w+)/);
  console.log(`${name}: ${bgMatch ? bgMatch[0] : 'no bg found'}`);
});
