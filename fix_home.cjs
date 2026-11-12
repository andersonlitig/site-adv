const fs = require('fs');
let c = fs.readFileSync('client/src/pages/HomeV2.tsx', 'utf8');

c = c.replace(/function GuiasProfissoesV2\(\) \{[\s\S]*?\}\n\nfunction ProcessV2/g, 'function ProcessV2');
c = c.replace(/<GuiasProfissoesV2 \/>\n\s*/g, '');
c = c.replace(/link: '\/negado'/g, "link: '/beneficio-negado'");
c = c.replace(/src="\/elderly_couple2\.png"/g, 'src={heroImage}');

fs.writeFileSync('client/src/pages/HomeV2.tsx', c, 'utf8');
console.log('Fixed HomeV2!');
