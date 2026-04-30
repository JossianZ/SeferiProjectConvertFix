const fs = require('fs');
const path = require('path');

/**
 * SADECE MEDYA DOSYALARINI YERELLEŞTİR
 * CMS, modules ve diğer Framer fonksiyonlarına DOKUNMA!
 */

function replaceMediaUrlsOnly(content) {
  let modified = content;
  let changeCount = 0;

  // 1. RESİMLER - framerusercontent.com/images/
  const imagePattern = /https:\/\/framerusercontent\.com\/images\/([a-zA-Z0-9_-]+\.(png|jpg|jpeg|gif|webp|svg))(\?[^`"'\s)]*)?/g;
  modified = modified.replace(imagePattern, (match, filename) => {
    changeCount++;
    return `/images/${filename}`;
  });

  // 2. VİDEOLAR - framerusercontent.com/assets/*.mp4 (sadece video uzantıları)
  const videoPattern = /https:\/\/framerusercontent\.com\/assets\/([a-zA-Z0-9_-]+\.(mp4|webm|mov))(\?[^`"'\s)]*)?/g;
  modified = modified.replace(videoPattern, (match, filename) => {
    changeCount++;
    return `/videos/${filename}`;
  });

  // 3. FONTLAR - framerusercontent.com/assets/*.woff2 (sadece font uzantıları)
  const fontPattern = /https:\/\/framerusercontent\.com\/assets\/([a-zA-Z0-9_-]+\.(woff2|woff|ttf|otf))/g;
  modified = modified.replace(fontPattern, (match, filename) => {
    changeCount++;
    return `/fonts/${filename}`;
  });

  // 4. RESİMLER (assets klasöründe) - sadece resim uzantıları
  const assetImagePattern = /https:\/\/framerusercontent\.com\/assets\/([a-zA-Z0-9_-]+\.(png|jpg|jpeg|gif|webp|svg))(\?[^`"'\s)]*)?/g;
  modified = modified.replace(assetImagePattern, (match, filename) => {
    changeCount++;
    return `/images/${filename}`;
  });

  // NOT: CMS, modules, third-party-assets gibi URL'lere DOKUNMUYORUZ!
  // Bunlar Framer'ın çalışması için gerekli

  return { modified, changeCount };
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { modified, changeCount } = replaceMediaUrlsOnly(content);
    
    if (content !== modified) {
      fs.writeFileSync(filePath, modified, 'utf8');
      console.log(`✓ ${path.relative(process.cwd(), filePath)}: ${changeCount} medya URL'si yerelleştirildi`);
      return changeCount;
    } else {
      return 0;
    }
  } catch (error) {
    console.error(`✗ Hata: ${filePath}:`, error.message);
    return 0;
  }
}

function findFiles(dir, extensions, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findFiles(filePath, extensions, fileList);
    } else if (extensions.some(ext => file.endsWith(ext))) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Ana işlem
console.log('🔧 SADECE medya dosyaları yerelleştiriliyor...');
console.log('   (CMS, modules ve Framer fonksiyonlarına dokunulmayacak)\n');

const publicDir = path.join(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  console.error('❌ public klasörü bulunamadı!');
  process.exit(1);
}

// HTML dosyalarını işle
console.log('📄 HTML dosyaları işleniyor...');
const htmlFiles = findFiles(publicDir, ['.html']);
let totalChanges = 0;
let modifiedFiles = 0;

htmlFiles.forEach(file => {
  const changes = processFile(file);
  if (changes > 0) {
    totalChanges += changes;
    modifiedFiles++;
  }
});

console.log(`   ${modifiedFiles} HTML dosyası değiştirildi, ${totalChanges} URL yerelleştirildi\n`);

// JavaScript dosyalarını işle
console.log('📜 JavaScript dosyaları işleniyor...');
const framerJsDir = path.join(publicDir, 'framer-js');
if (fs.existsSync(framerJsDir)) {
  const jsFiles = findFiles(framerJsDir, ['.mjs', '.js']);
  let jsChanges = 0;
  let jsModified = 0;

  jsFiles.forEach(file => {
    const changes = processFile(file);
    if (changes > 0) {
      jsChanges += changes;
      jsModified++;
    }
  });

  console.log(`   ${jsModified} JS dosyası değiştirildi, ${jsChanges} URL yerelleştirildi\n`);
  totalChanges += jsChanges;
  modifiedFiles += jsModified;
}

console.log(`\n✅ Tamamlandı!`);
console.log(`   Toplam ${modifiedFiles} dosya değiştirildi`);
console.log(`   Toplam ${totalChanges} medya URL'si yerelleştirildi`);
console.log('\n📝 Sonraki adım:');
console.log('   1. npm run serve-public');
console.log('   2. Gizli pencerede test et (CTRL+SHIFT+N)');
console.log('   3. Animasyonlar çalışmalı + medya localden yüklenmeli!');
