const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

// Find all React components using wouter Link
walkDir('./client/src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Convert `<Link href="/foo"><a className="bar">Baz</a></Link>`
    // to `<Link href="/foo" className="bar">Baz</Link>` 
    
    const linkARegex = /<Link([^>]*)>\s*<a([^>]*)>([\s\S]*?)<\/a>\s*<\/Link>/g;
    content = content.replace(linkARegex, (match, linkAttrs, aAttrs, innerContent) => {
      // Add aAttrs to linkAttrs
      return `<Link${linkAttrs}${aAttrs}>${innerContent}</Link>`;
    });
    
    if (content !== original) {
      console.log('Cleaned links in', filePath);
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
});
