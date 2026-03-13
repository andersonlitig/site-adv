const fs = require('fs');

const content = fs.readFileSync('client/src/components/layout/Navbar.tsx', 'utf8');
if (content.includes('<a') && content.includes('<Link')) {
  console.log('Still has anchor tags inside Link components in Navbar');
}
