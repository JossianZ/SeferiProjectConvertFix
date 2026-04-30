const fs = require('fs');
const path = require('path');
const https = require('https');

// Klasörleri oluştur
const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(__dirname, '../public/images');
const videosDir = path.join(__dirname, '../public/videos');
const fontsDir = path.join(__dirname, '../public/fonts');

[imagesDir, videosDir, fontsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Medya URL'lerini bul
const mediaUrls = new Set();
const mediaMap = {}; // URL -> local path mapping

function getMediaType(url) {
  if (url.includes('/images/')) return 'image';
  if (url.match(/\.(mp4|webm|mov|avi)(\?|$)/i)) return 'video';
  if (url.match(/\.(woff2|woff|ttf|otf|eot)(\?|$)/i)) return 'font';
  return 'other';
}

function getLocalPath(url, type) {
  const filename = url.split('/').pop().split('?')[0];
  
  switch(type) {
    case 'image':
      return `/images/${filename}`;
    case 'video':
      return `/videos/${filename}`;
    case 'font':
      return `/fonts/${filename}`;
    default:
      return `/assets/${filename}`;
  }
}

function findMediaInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Resimler
  const imageRegex = /https:\/\/framerusercontent\.com\/images\/([a-zA-Z0-9_-]+\.(png|jpg|jpeg|gif|webp|svg)(\?[^"'\s]*)?)/g;
  let match;
  
  while ((match = imageRegex.exec(content)) !== null) {
    const fullUrl = match[0];
    mediaUrls.add(fullUrl);
    mediaMap[fullUrl] = getLocalPath(fullUrl, 'image');
  }
  
  // Videolar
  const videoRegex = /https:\/\/framerusercontent\.com\/assets\/([a-zA-Z0-9_-]+\.(mp4|webm|mov)(\?[^"'\s]*)?)/g;
  while ((match = videoRegex.exec(content)) !== null) {
    const fullUrl = match[0];
    mediaUrls.add(fullUrl);
    mediaMap[fullUrl] = getLocalPath(fullUrl, 'video');
  }
  
  // Fontlar
  const fontRegex = /https:\/\/framerusercontent\.com\/assets\/([a-zA-Z0-9_-]+\.(woff2|woff|ttf|otf)(\?[^"'\s]*)?)/g;
  while ((match = fontRegex.exec(content)) !== null) {
    const fullUrl = match[0];
    mediaUrls.add(fullUrl);
    mediaMap[fullUrl] = getLocalPath(fullUrl, 'font');
  }
}

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      scanDirectory(filePath);
    } else if (file.endsWith('.html')) {
      findMediaInFile(filePath);
    }
  });
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        fs.unlink(filepath, () => {});
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAllMedia() {
  console.log('🔍 HTML dosyaları taranıyor...');
  scanDirectory(publicDir);
  
  // Kategorilere ayır
  const images = [];
  const videos = [];
  const fonts = [];
  
  for (const url of mediaUrls) {
    const type = getMediaType(url);
    if (type === 'image') images.push(url);
    else if (type === 'video') videos.push(url);
    else if (type === 'font') fonts.push(url);
  }
  
  console.log(`\n📊 Bulunan medya dosyaları:`);
  console.log(`   🖼️  Resimler: ${images.length}`);
  console.log(`   🎬 Videolar: ${videos.length}`);
  console.log(`   🔤 Fontlar: ${fonts.length}`);
  console.log(`   📦 Toplam: ${mediaUrls.size}\n`);
  
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;
  
  for (const url of mediaUrls) {
    const localPath = mediaMap[url];
    const filename = localPath.split('/').pop();
    const type = getMediaType(url);
    
    let targetDir;
    if (type === 'image') targetDir = imagesDir;
    else if (type === 'video') targetDir = videosDir;
    else if (type === 'font') targetDir = fontsDir;
    else continue;
    
    const filepath = path.join(targetDir, filename);
    
    // Eğer dosya zaten varsa atla
    if (fs.existsSync(filepath)) {
      console.log(`⏭  Zaten var: ${filename}`);
      skipped++;
      continue;
    }
    
    try {
      const cleanUrl = url.split('?')[0];
      await downloadFile(cleanUrl, filepath);
      
      const icon = type === 'image' ? '🖼️' : type === 'video' ? '🎬' : '🔤';
      console.log(`${icon} İndirildi: ${filename}`);
      downloaded++;
    } catch (error) {
      console.error(`✗ Hata: ${filename} - ${error.message}`);
      failed++;
    }
    
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log(`\n✅ Tamamlandı!`);
  console.log(`   İndirilen: ${downloaded}`);
  console.log(`   Atlanan: ${skipped}`);
  console.log(`   Başarısız: ${failed}`);
  console.log(`   Toplam: ${mediaUrls.size}`);
  
  // Mapping dosyasını kaydet
  const mappingPath = path.join(__dirname, 'media-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(mediaMap, null, 2));
  console.log(`\n📝 Mapping dosyası kaydedildi: ${mappingPath}`);
}

downloadAllMedia().catch(console.error);
