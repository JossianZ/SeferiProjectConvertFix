'use client'

interface FramerPageProps {
  bodyContent: string
  scripts: string[]
}

export default function FramerPage({ bodyContent, scripts }: FramerPageProps) {
  // Framer scriptleri zaten HTML içinde olduğu için ayrıca yüklemeye gerek yok
  // Sadece body içeriğini render ediyoruz
  
  return (
    <div 
      style={{ width: '100%', minHeight: '100vh', position: 'relative' }}
      dangerouslySetInnerHTML={{ __html: bodyContent }} 
      suppressHydrationWarning
    />
  )
}
