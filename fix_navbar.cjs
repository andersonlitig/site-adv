const fs = require('fs');

let content = fs.readFileSync('client/src/components/layout/Navbar.tsx', 'utf8');

// The hydration error was specifically about <a> inside <a>.
// Since wouter <Link> components render <a> tags, anything inside them should NOT be an <a> tag.
// We must ensure that inside <Link href="...">, there is NO <a ...>

content = content.replace(/<Link href="\/">\s*<a className="flex items-center cursor-pointer">/g, '<Link href="/"><span className="flex items-center cursor-pointer">');
content = content.replace(/<\/a>\s*<\/Link>/g, '</span></Link>');

fs.writeFileSync('client/src/components/layout/Navbar.tsx', content, 'utf8');
