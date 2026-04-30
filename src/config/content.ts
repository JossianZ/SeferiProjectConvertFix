// Site içerik yapılandırması
// Bu dosyadan tüm metinleri kolayca düzenleyebilirsiniz

export const siteContent = {
  tr: {
    // Ana Sayfa
    home: {
      title: 'Seferi',
      subtitle: 'Yapay Zeka Destekli Lojistik Otomasyonu',
      // Diğer metinler buraya eklenebilir
    },
    // Diğer sayfalar
    about: {
      title: 'Hakkımızda',
    },
    contact: {
      title: 'İletişim',
    },
  },
  en: {
    // Ana Sayfa
    home: {
      title: 'Seferi',
      subtitle: 'AI-Powered Logistics Automation',
    },
    // Diğer sayfalar
    about: {
      title: 'About Us',
    },
    contact: {
      title: 'Contact',
    },
  },
}

// Metin değiştirme kuralları
export const contentReplacements = {
  tr: [
    {
      search: 'Seferi: Yapay Zeka Destekli Lojistik Otomasyonu',
      replace: () => `${siteContent.tr.home.title}: ${siteContent.tr.home.subtitle}`,
    },
    // Buraya daha fazla değiştirme kuralı ekleyebilirsiniz
  ],
  en: [
    {
      search: 'Seferi: AI-Powered Logistics Automation',
      replace: () => `${siteContent.en.home.title}: ${siteContent.en.home.subtitle}`,
    },
  ],
}
