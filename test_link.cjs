const fs = require('fs');

function checkFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/<Link ([^>]*)>\s*<a ([^>]*)>([\s\S]*?)<\/a>\s*<\/Link>/g, '<Link $1><span $2>$3</span></Link>');
  fs.writeFileSync(filePath, content, 'utf8');
}

['client/src/components/layout/Navbar.tsx', 'client/src/components/layout/Footer.tsx'].forEach(checkFile);
