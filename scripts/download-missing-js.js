const https = require('https');
const fs = require('fs');
const path = require('path');

const SITE_ID = '5a2vPumOxg63KwgmMwTiU6';
const BASE_URL = `https://framerusercontent.com/sites/${SITE_ID}/`;
const OUTPUT_DIR = path.join(__dirname, '../public/framer-js');

const missingFiles = [
  'FMPs1lZHTdTv4huImakWxIS3En4HRMchv_q1_HjwEdY.6rD62bRC.mjs',
  'W9BMKi8vPMfccBSaCNlt12oDmG8AxIREr6GtcA6Da7Y.ZkX5sdxS.mjs',
  'augiA20Il-0.2GjQNoFh.mjs',
  'MAFa0zsSJ-0.B2a8fuUT.mjs',
  'jI_frNSTV-0.DCqVG60T.mjs',
  'google-OGWBHVGI.Bl-eSXrP.mjs',
  'fontshare-LTYJMI6Q.Dp-PqOLJ.mjs',
  'google-BHSMRPXK.BEAX1heG.mjs',
  'fontshare-XMKN2FOD.BeCTK4Kg.mjs',
  'framer-font-D6RMCRV4.CGf1LlZO.mjs',
  'google-5NZOMG37.DC5_hQBL.mjs',
  'fontshare-X63NXWGB.BVAenCTb.mjs',
  'a25WX62NH-0.DlRHbt1T.mjs',
  'SitesNotFoundPage.js@1.4.BG-7UaPK.mjs',
  'XvY2yhBX7-0.CuuxA-BQ.mjs',
  'Blf0sjosZ.CnSktL_h.mjs',
  'Icons.DN9UzyWy.mjs',
  'taYDKbZkL-0.bhXyRRT4.mjs',
  'cus9k6_2w-0.CpymBHUX.mjs',
  'ftj9Wtl0w-0.BZEvWRvW.mjs'
];

function downloadFile(filename) {
  return new Promise((resolve, reject) => {
    const url = BASE_URL + filename;
    const outputPath = path.join(OUTPUT_DIR, filename);
    
    // @ karakterini encode et
    const encodedUrl = url.replace('@', '%40');
    
    https.get(encodedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://seferi.framer.website/',
        'Accept': '*/*'
      }
    }, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(outputPath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ ${filename}`);
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Redirect takip et
        const redirectUrl = response.headers.location;
        https.get(redirectUrl, (redirectResponse) => {
          if (redirectResponse.statusCode === 200) {
            const fileStream = fs.createWriteStream(outputPath);
            redirectResponse.pipe(fileStream);
            
            fileStream.on('finish', () => {
              fileStream.close();
              console.log(`✓ ${filename} (redirected)`);
              resolve();
            });
          } else {
            console.log(`✗ ${filename} - Status: ${redirectResponse.statusCode}`);
            resolve(); // Devam et
          }
        }).on('error', reject);
      } else {
        console.log(`✗ ${filename} - Status: ${response.statusCode}`);
        resolve(); // Devam et
      }
    }).on('error', (err) => {
      console.log(`✗ ${filename} - Error: ${err.message}`);
      resolve(); // Devam et
    });
  });
}

async function downloadAll() {
  console.log(`🔽 ${missingFiles.length} eksik dosya indiriliyor...\n`);
  
  let success = 0;
  let failed = 0;
  
  for (const file of missingFiles) {
    try {
      await downloadFile(file);
      success++;
      // Rate limiting için kısa bekle
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      failed++;
    }
  }
  
  console.log(`\n✅ Tamamlandı!`);
  console.log(`   Başarılı: ${success}`);
  console.log(`   Başarısız: ${failed}`);
  
  if (failed > 0) {
    console.log(`\n⚠️  Bazı dosyalar indirilemedi.`);
    console.log(`   Manuel indirmek için:`);
    console.log(`   1. https://seferi.framer.website/ sitesini aç`);
    console.log(`   2. F12 → Network → JS filtresi`);
    console.log(`   3. Sayfayı yenile ve eksik dosyaları bul`);
    console.log(`   4. Dosyalara sağ tıklayıp "Save as" ile indir`);
    console.log(`   5. public/framer-js/ klasörüne kopyala`);
  }
}

downloadAll().catch(console.error);
