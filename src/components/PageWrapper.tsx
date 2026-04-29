import FramerPage from './FramerPage'

interface PageWrapperProps {
  styles: string
  scripts: string[]
  bodyContent: string
  metaTags: Array<{ name?: string; property?: string; content: string }>
  linkTags: Array<{ rel: string; href: string; [key: string]: string }>
}

export default function PageWrapper({
  styles,
  scripts,
  bodyContent,
  metaTags,
  linkTags
}: PageWrapperProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} suppressHydrationWarning />
      
      {metaTags.map((meta, i) => (
        <meta key={`meta-${i}`} {...meta} />
      ))}
      
      {linkTags.map((link, i) => (
        <link key={`link-${i}`} {...link} />
      ))}
      
      {/* Scripts parametresini kullanmıyoruz çünkü scriptler zaten bodyContent içinde */}
      <FramerPage bodyContent={bodyContent} scripts={[]} />
    </>
  )
}
