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
    
    // Fix instances of <Link><span...></Link> back to <Link><a...></Link> 
    // And then add asChild to Link or let wouter handle it
    // Latest wouter allows standard a tags with className directly without asChild in many versions,
    // But the Hydration issue usually comes from a > a nesting
    
    // Check if we have `<Link href="..."> <span ` pattern and convert to proper standard Link
    // Actually the hydration issue was `<a><a>` nesting. 
    // This happens when `<Link href="...">` renders an `<a>` and we put another `<a>` inside it.
    
    // Wouter v3 explicitly says <Link href="..."><a className="...">...</a></Link> is supported
    // But React DOM hydration might complain if server renders differently than client.
    
    // Let's just convert all `<Link href="/foo"><a className="bar">Baz</a></Link>`
    // to `<Link href="/foo" className="bar">Baz</Link>` 
    // This is the cleanest way and avoids ALL nesting issues
    
    // First, let's fix the `<Link><span...>` ones we created earlier and make them `<Link className="...">`
    const linkSpanRegex = /<Link([^>]*)>\s*<span([^>]*)>([\s\S]*?)<\/span>\s*<\/Link>/g;
    content = content.replace(linkSpanRegex, (match, linkAttrs, spanAttrs, innerContent) => {
      // Merge attributes, avoiding duplicate classNames
      // We'll just append spanAttrs to Link
      return `<Link${linkAttrs}${spanAttrs}>${innerContent}</Link>`;
    });

    const linkARegex = /<Link([^>]*)>\s*<a([^>]*)>([\s\S]*?)<\/a>\s*<\/Link>/g;
    content = content.replace(linkARegex, (match, linkAttrs, aAttrs, innerContent) => {
      return `<Link${linkAttrs}${aAttrs}>${innerContent}</Link>`;
    });
    
    if (content !== original) {
      console.log('Cleaned links in', filePath);
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
});
