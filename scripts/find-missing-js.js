const fs = require('fs');
const path = require('path');

/**
 * HTML ve JS dosyalarında referans edilen ama eksik olan .mjs dosyalarını bul
 */

function findImports(content) {
  const imports = new Set();
  
  // import("./dosya.mjs") pattern
  const dynamicImportPattern = /import\s*\(\s*[`"']\.\/([^`"']+\.mjs)[`"']\s*\)/g;
  let match;
  while ((match = dynamicImportPattern.exec(content)) !== null) {
    imports.add(match[1]);
  }
  
  // <script type="module" src="/framer-js/dosya.mjs">
  const scriptPattern = /<script[^>]+src=["']\/framer-js\/([^"']+\.mjs)["']/g;
  while ((match = scriptPattern.exec(content)) !== null) {
    imports.add(match[1]);
  }
  
  return Array.from(imports);
}

function scanDirectory(dir, extensions) {
  const files = [];
  
  function scan(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scan(fullPath);
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  scan(dir);
  return files;
}

console.log('🔍 Eksik JavaScript dosyaları aranıyor...\n');

const publicDir = path.join(__dirname, '../public');
const framerJsDir = path.join(publicDir, 'framer-js');

// Mevcut .mjs dosyalarını listele
const existingFiles = new Set(
  fs.readdirSync(framerJsDir)
    .filter(f => f.endsWith('.mjs'))
);

console.log(`✓ ${existingFiles.size} .mjs dosyası mevcut\n`);

// HTML ve JS dosyalarını tara
const allReferences = new Set();
const htmlFiles = scanDirectory(publicDir, ['.html']);
const jsFiles = scanDirectory(framerJsDir, ['.mjs', '.js']);

console.log(`📄 ${htmlFiles.length} HTML dosyası taranıyor...`);
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const imports = findImports(content);
  imports.forEach(imp => allReferences.add(imp));
});

console.log(`📜 ${jsFiles.length} JavaScript dosyası taranıyor...\n`);
jsFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const imports = findImports(content);
  imports.forEach(imp => allReferences.add(imp));
});

// Eksik dosyaları bul
const missingFiles = Array.from(allReferences).filter(ref => !existingFiles.has(ref));

if (missingFiles.length === 0) {
  console.log('✅ Tüm referans edilen dosyalar mevcut!\n');
} else {
  console.log(`❌ ${missingFiles.length} eksik dosya bulundu:\n`);
  missingFiles.forEach(file => {
    console.log(`   - ${file}`);
    console.log(`     URL: https://framerusercontent.com/sites/5a2vPumOxg63KwgmMwTiU6/framer-js/${file}`);
  });
  
  console.log('\n📝 Bu dosyaları indirmek için:');
  console.log('   1. Tarayıcıda orijinal Framer sitesini aç');
  console.log('   2. F12 → Network → JS filtresi');
  console.log('   3. Eksik dosyaları bul ve indir');
  console.log('   4. public/framer-js/ klasörüne kopyala');
}

console.log(`\n📊 Özet:`);
console.log(`   Mevcut dosyalar: ${existingFiles.size}`);
console.log(`   Referans edilen: ${allReferences.size}`);
console.log(`   Eksik dosyalar: ${missingFiles.length}`);
