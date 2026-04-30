import { contentReplacements } from '@/config/content'

/**
 * HTML içeriğindeki metinleri config dosyasındaki değerlerle değiştirir
 * Ayrıca Framer medya URL'lerini yerel URL'lere çevirir
 */
export function replaceContent(html: string, locale: 'tr' | 'en' = 'tr'): string {
  let modifiedHtml = html
  const replacements = contentReplacements[locale]

  // Config'deki metin değişikliklerini uygula
  for (const rule of replacements) {
    const replaceValue = typeof rule.replace === 'function' ? rule.replace() : rule.replace
    modifiedHtml = modifiedHtml.replace(new RegExp(rule.search, 'g'), replaceValue)
  }

  // Framer medya URL'lerini yerel URL'lere çevir (fallback olarak)
  // Not: HTML dosyaları zaten güncellenmiş olmalı, bu sadece güvenlik için
  
  // Resimler
  modifiedHtml = modifiedHtml.replace(
    /https:\/\/framerusercontent\.com\/images\/([a-zA-Z0-9_-]+\.(png|jpg|jpeg|gif|webp|svg))(\?[^"'\s]*)?/g,
    '/images/$1'
  )
  
  // Videolar
  modifiedHtml = modifiedHtml.replace(
    /https:\/\/framerusercontent\.com\/assets\/([a-zA-Z0-9_-]+\.(mp4|webm|mov))(\?[^"'\s]*)?/g,
    '/videos/$1'
  )
  
  // Fontlar
  modifiedHtml = modifiedHtml.replace(
    /https:\/\/framerusercontent\.com\/assets\/([a-zA-Z0-9_-]+\.(woff2|woff|ttf|otf))(\?[^"'\s]*)?/g,
    '/fonts/$1'
  )

  return modifiedHtml
}
