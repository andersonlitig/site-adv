const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./client/src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Simple inline replacements for common cases
    content = content.replace(/<Link([^>]*)>\s*<a([^>]*)>([\s\S]*?)<\/a>\s*<\/Link>/g, '<Link$1$2>$3</Link>');
    
    if (content !== original) {
      console.log('Fixed', filePath);
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
});
