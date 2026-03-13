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
    
    // We need to fix cases where we messed up link formatting due to missing anchors inside Links
    // In standard HTML wouter, Link does render an anchor tag but accepts a string child, however 
    // the problem was hydration mismatch because people were using <Link href="/"><a className="...">...</a></Link>
    // Wouter documentation says: <Link href="/users/1"><a className="link">Profile</a></Link> is supported in wouter v3
    // But in newer React with wouter, you can just do <Link href="/" className="...">Home</Link>
    
    // The previous script replaced: <Link href="/"><a className="...">Home</a></Link>
    // with: <Link href="/" className="...">Home</Link>
    // Let's verify we don't have dangling <a tags inside Link
    
    content = content.replace(/<Link([^>]*)>\s*<a/g, '<Link$1 asChild><a');
    
    if (content !== original) {
      console.log('Added asChild to', filePath);
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
});
