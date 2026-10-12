const fs = require('fs');
const path = require('path');

const bairrosDir = path.join(__dirname, '..', 'src', 'pages', 'bairros');
const files = fs.readdirSync(bairrosDir).filter(f => f.endsWith('.astro') && f !== 'index.astro');

let updatedFiles = 0;

for (const file of files) {
  const filePath = path.join(bairrosDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;

  // 1. Substituir pares de caçambas (ex: Água Azul)
  content = content.replace(
    /<strong>Caçamba de 4m³ e 5m³:<\/strong>/g,
    '<strong><a href="/servicos/cacamba-4m3" class="text-green-700 hover:underline">Caçamba de 4m³</a> e <a href="/servicos/cacamba-5m3" class="text-green-700 hover:underline">5m³</a>:</strong>'
  );
  content = content.replace(
    /<strong>Caçamba de 6m³ e 7m³:<\/strong>/g,
    '<strong><a href="/servicos/cacamba-6m3" class="text-green-700 hover:underline">Caçamba de 6m³</a> e <a href="/servicos/cacamba-7m3" class="text-green-700 hover:underline">7m³</a>:</strong>'
  );
  content = content.replace(
    /<strong>Caçamba de 8m³ e Caçamba Roll-on:<\/strong>/g,
    '<strong><a href="/servicos/cacamba-8m3" class="text-green-700 hover:underline">Caçamba de 8m³</a> e <a href="/servicos/cacamba-roll-on" class="text-green-700 hover:underline">Caçamba Roll-on</a>:</strong>'
  );

  // 2. Substituir caçambas individuais (ex: Cumbica, Vila Galvão, etc.)
  content = content.replace(
    /<strong>Caçamba de 4m³:<\/strong>/g,
    '<strong><a href="/servicos/cacamba-4m3" class="text-green-700 hover:underline">Caçamba de 4m³</a>:</strong>'
  );
  content = content.replace(
    /<strong>Caçamba de 5m³:<\/strong>/g,
    '<strong><a href="/servicos/cacamba-5m3" class="text-green-700 hover:underline">Caçamba de 5m³</a>:</strong>'
  );
  content = content.replace(
    /<strong>Caçamba de 6m³:<\/strong>/g,
    '<strong><a href="/servicos/cacamba-6m3" class="text-green-700 hover:underline">Caçamba de 6m³</a>:</strong>'
  );
  content = content.replace(
    /<strong>Caçamba de 7m³:<\/strong>/g,
    '<strong><a href="/servicos/cacamba-7m3" class="text-green-700 hover:underline">Caçamba de 7m³</a>:</strong>'
  );
  content = content.replace(
    /<strong>Caçamba de 8m³:<\/strong>/g,
    '<strong><a href="/servicos/cacamba-8m3" class="text-green-700 hover:underline">Caçamba de 8m³</a>:</strong>'
  );
  content = content.replace(
    /<strong>Caçamba Roll-on:<\/strong>/g,
    '<strong><a href="/servicos/cacamba-roll-on" class="text-green-700 hover:underline">Caçamba Roll-on</a>:</strong>'
  );

  // 3. Substituir títulos H3 de caçambas em cards (ex: Cabuçu, Jardim Itaim, etc.)
  content = content.replace(
    /<h3 class="text-xl font-black text-gray-900 mb-2">Caçamba de 4m³<\/h3>/g,
    '<h3 class="text-xl font-black text-gray-900 mb-2"><a href="/servicos/cacamba-4m3" class="hover:text-green-700 hover:underline transition-colors">Caçamba de 4m³</a></h3>'
  );
  content = content.replace(
    /<h3 class="text-xl font-black text-gray-900 mb-2">Caçamba de 5m³<\/h3>/g,
    '<h3 class="text-xl font-black text-gray-900 mb-2"><a href="/servicos/cacamba-5m3" class="hover:text-green-700 hover:underline transition-colors">Caçamba de 5m³</a></h3>'
  );
  content = content.replace(
    /<h3 class="text-xl font-black text-gray-900 mb-2">Caçamba de 6m³<\/h3>/g,
    '<h3 class="text-xl font-black text-gray-900 mb-2"><a href="/servicos/cacamba-6m3" class="hover:text-green-700 hover:underline transition-colors">Caçamba de 6m³</a></h3>'
  );
  content = content.replace(
    /<h3 class="text-xl font-black text-gray-900 mb-2">Caçamba de 7m³<\/h3>/g,
    '<h3 class="text-xl font-black text-gray-900 mb-2"><a href="/servicos/cacamba-7m3" class="hover:text-green-700 hover:underline transition-colors">Caçamba de 7m³</a></h3>'
  );
  content = content.replace(
    /<h3 class="text-xl font-black text-gray-900 mb-2">Caçamba de 8m³<\/h3>/g,
    '<h3 class="text-xl font-black text-gray-900 mb-2"><a href="/servicos/cacamba-8m3" class="hover:text-green-700 hover:underline transition-colors">Caçamba de 8m³</a></h3>'
  );
  content = content.replace(
    /<h3 class="text-xl font-black text-gray-900 mb-2">Caçamba Roll-on<\/h3>/g,
    '<h3 class="text-xl font-black text-gray-900 mb-2"><a href="/servicos/cacamba-roll-on" class="hover:text-green-700 hover:underline transition-colors">Caçamba Roll-on</a></h3>'
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    updatedFiles++;
  }
}

console.log(`Sucesso: ${updatedFiles} páginas de bairros atualizadas com links para os serviços de caçambas.`);
