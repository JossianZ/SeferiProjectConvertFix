# Seferi AI - Next.js Website

A fully converted Next.js 14 application from a Framer export, preserving all original styles, scripts, and functionality.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## 📁 Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   └── lib/              # Utility functions
├── public/               # Static assets (original Framer HTML files)
└── package.json
```

## 🌐 Available Routes

### Turkish (Default)
- `/` - Ana Sayfa (Homepage)
- `/urun` - Ürün (Product)
- `/hakkimizda` - Hakkımızda (About)
- `/vaka-analizi` - Vaka Analizi (Case Studies)
- `/blog` - Blog
- `/iletisim` - İletişim (Contact)
- `/tesekkurler` - Teşekkürler (Thank You)
- `/cookiepolicy` - Çerez Politikası (Cookie Policy)
- `/deneme` - Demo

### English
- `/en` - Homepage
- `/en/urun` - Product
- `/en/hakkimizda` - About
- `/en/vaka-analizi` - Case Studies
- `/en/blog` - Blog
- `/en/iletisim` - Contact
- `/en/tesekkurler` - Thank You
- `/en/cookiepolicy` - Cookie Policy
- `/en/deneme` - Demo

## 🛠️ Technology Stack

- **Framework**: Next.js 14.2.0
- **Runtime**: React 18.3.0
- **Language**: TypeScript 5.3.3
- **Build**: Static Export (SSG)

## ✨ Features

- ✅ Full Framer content preservation
- ✅ All original styles and animations
- ✅ JavaScript functionality intact
- ✅ SEO-optimized with meta tags
- ✅ Responsive design
- ✅ Static site generation
- ✅ TypeScript support
- ✅ Bilingual (Turkish/English)

## 📝 How It Works

The conversion uses a custom HTML loader that:
1. Reads original Framer HTML files from `public/` directory
2. Parses and extracts styles, scripts, and content
3. Injects them into Next.js pages
4. Executes Framer scripts client-side for full functionality

See `CONVERSION_COMPLETE.md` for detailed technical documentation.

## 🚢 Deployment

This project is configured for static export and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

```bash
npm run build
# Upload the 'out' directory to your hosting provider
```

## 📄 License

See LICENSE file for details.

## 🤝 Contributing

See CONTRIBUTING.md for contribution guidelines.
