# Seferi AI - Next.js Website

Seferi AI lojistik platformunun resmi web sitesi.

## 🚀 Özellikler

- ✅ **Yerel Medya Dosyaları**: Tüm resimler, videolar ve fontlar yerel olarak sunuluyor
- ✅ **Framer Animasyonları**: Orijinal Framer animasyonları ve etkileşimler korundu
- ✅ **Çok Dilli**: Türkçe ve İngilizce dil desteği
- ✅ **Beautified JavaScript**: Düzenlenebilir JavaScript dosyası
- ✅ **SEO Optimizasyonu**: Meta tag'ler ve sosyal medya paylaşımları için optimize edildi

## 📁 Proje Yapısı

```
seferi-nextjs/
├── public/                 # Statik dosyalar
│   ├── images/            # Resimler (36 dosya)
│   ├── videos/            # Videolar (1 dosya)
│   ├── fonts/             # Fontlar (246 dosya)
│   ├── framer-js/         # Framer JavaScript modülleri (beautified)
│   └── *.html             # Statik HTML sayfaları
├── src/
│   ├── app/               # Next.js sayfaları
│   ├── components/        # React bileşenleri
│   └── lib/               # Yardımcı fonksiyonlar
├── scripts/               # Yardımcı scriptler
│   ├── download-images.js        # Medya dosyalarını indir
│   ├── localize-media-only.js    # Medya URL'lerini yerelleştir
│   └── serve-public.js           # Test sunucusu
└── package.json
```

## 🛠️ Kurulum

### 1. Bağımlılıkları Yükle
```bash
npm install
```

### 2. Geliştirme Sunucusunu Başlat

#### Next.js (React) Sunucusu:
```bash
npm run dev
```
Tarayıcıda aç: http://localhost:3000

#### Statik HTML Sunucusu (Test için):
```bash
npm run serve-public
```
Tarayıcıda aç: http://localhost:3002

## 📝 İçerik Düzenleme

Site metinleri beautified JavaScript dosyasında bulunuyor:

**Dosya:** `public/framer-js/2c1TCg2uvsjjjNrz0eqL6wpvgJosf_M-KVJsxNZf4tI.B5erhKoJ.mjs`

### Metin Düzenleme:
1. Dosyayı bir metin editöründe aç (VS Code önerilir)
2. `children: \`metin burada\`` pattern'ini ara
3. Metni düzenle
4. Kaydet
5. Sayfayı yenile

### Örnek:
```javascript
children: `Lojistik Operasyonlarınızı Optimize Edin`
```

**⚠️ Önemli Notlar:**
- Düzenleme yapmadan önce dosyanın yedeğini alın
- JavaScript syntax'ını bozmayın
- Backtick (\`) karakterlerini koruyun
- Özel karakterleri escape edin (örn: `\'` için `\\'`)

## 🎨 Medya Dosyaları

### Mevcut Medya:
- **Resimler**: `public/images/` (36 dosya)
- **Videolar**: `public/videos/` (1 dosya)
- **Fontlar**: `public/fonts/` (246 dosya)

### Yeni Medya Eklemek:
1. Dosyayı ilgili klasöre koy (`public/images/`, `public/videos/`, vb.)
2. HTML veya React bileşeninde kullan:
   ```html
   <img src="/images/yeni-resim.png" alt="Açıklama">
   <video src="/videos/yeni-video.mp4"></video>
   ```

## 🔧 Scriptler

### `npm run dev`
Next.js geliştirme sunucusunu başlatır (port 3000)

### `npm run build`
Production için Next.js uygulamasını derler

### `npm run start`
Production sunucusunu başlatır

### `npm run serve-public`
Statik HTML dosyalarını test sunucusunda çalıştırır (port 3002)

### `npm run localize-media-only`
HTML ve JS dosyalarındaki medya URL'lerini yerelleştirir

## 🌐 Dil Desteği

Site iki dilde mevcut:
- **Türkçe**: `/` (ana sayfa)
- **İngilizce**: `/en/`

Dil değiştirmek için:
- Header'daki dil seçiciyi kullan
- URL'ye `/en/` ekle

## 📦 Production Build

```bash
# Next.js build
npm run build
npm run start

# Veya statik export
npm run export
```

## 🎯 Önemli Notlar

### Medya Dosyaları
- Tüm medya dosyaları **yerel** olarak sunuluyor
- Framer CDN'den sadece CMS ve modül dosyaları yükleniyor (animasyonlar için gerekli)
- Medya dosyaları için CDN bağımlılığı yok ✅

### Animasyonlar
- Framer animasyonları korundu
- CSS animasyonları çalışıyor
- Hover efektleri aktif

### İçerik Düzenleme
- Metinler beautified JavaScript dosyasında
- Doğrudan düzenlenebilir
- Yedek almayı unutmayın

## 🐛 Sorun Giderme

### Animasyonlar Çalışmıyor
1. Sunucuyu yeniden başlat: `CTRL + C` sonra `npm run serve-public`
2. Tarayıcı cache'ini temizle: `CTRL + SHIFT + DELETE`
3. Gizli pencerede test et: `CTRL + SHIFT + N`

### Resimler Görünmüyor
1. `public/images/` klasöründe dosya var mı kontrol et
2. URL doğru mu: `/images/dosya-adi.png`
3. Dosya adı büyük/küçük harf duyarlı

### Port Zaten Kullanımda
```bash
# Port 3000 kullanımda ise:
npm run dev -- -p 3001

# Port 3002 kullanımda ise:
# serve-public.js dosyasında PORT değişkenini değiştir
```

## 📄 Lisans

[LICENSE](LICENSE) dosyasına bakın.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📞 İletişim

Seferi AI - [https://seferi.ai](https://seferi.ai)

---

**Not**: Bu proje Framer'dan export edilmiş ve Next.js ile entegre edilmiştir. Orijinal Framer animasyonları ve etkileşimleri korunmuştur.
