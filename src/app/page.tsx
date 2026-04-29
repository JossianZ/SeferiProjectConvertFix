import { loadHTML } from '@/lib/htmlLoader'
import FramerPage from '@/components/FramerPage'

export default function Home() {
  const { styles, bodyContent, metaTags, linkTags } = loadHTML('index.html')
  
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} suppressHydrationWarning />
      
      {metaTags.map((meta, i) => (
        <meta key={`meta-${i}`} {...meta} />
      ))}
      
      {linkTags.map((link, i) => (
        <link key={`link-${i}`} {...link} />
      ))}
      
      <FramerPage bodyContent={bodyContent} scripts={[]} />
    </>
  )
}

export async function generateMetadata() {
  const { title } = loadHTML('index.html')
  return {
    title: title || 'Seferi AI'
  }
}
