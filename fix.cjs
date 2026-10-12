const fs = require('fs');
const path = require('path');

function walk(d) {
  let results = [];
  const list = fs.readdirSync(d);
  list.forEach(file => {
    file = path.join(d, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(walk(file));
    else if(file.endsWith('.astro')) results.push(file);
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('Ã')) {
      content = content.replace(/Ã§/g, 'ç')
                       .replace(/Ã£/g, 'ã')
                       .replace(/Ã¡/g, 'á')
                       .replace(/Ã³/g, 'ó')
                       .replace(/Ã­/g, 'í')
                       .replace(/Ãª/g, 'ê')
                       .replace(/Ã©/g, 'é')
                       .replace(/Ãµ/g, 'õ')
                       .replace(/Ã¢/g, 'â')
                       .replace(/Ã´/g, 'ô')
                       .replace(/Ãº/g, 'ú')
                       .replace(/Ã /g, 'à')
                       .replace(/Ã§/g, 'ç')
                       .replace(/Ã£/g, 'ã')
                       .replace(/â ±ï¸ /g, '⏱️')
                       .replace(/â™»ï¸ /g, '♻️')
                       .replace(/ðŸ’²/g, '💲')
                       .replace(/ðŸš§/g, '🚧')
                       .replace(/ðŸŽ¯/g, '🎯')
                       .replace(/ðŸ‘ ï¸ /g, '👁️')
                       .replace(/ðŸ’Ž/g, '💎')
                       .replace(/Ãª/g, 'ê')
                       .replace(/Ã©/g, 'é');
      fs.writeFileSync(file, content, 'utf8');
  }
});
console.log("Fix concluído!");
