import { loadHTML } from '@/lib/htmlLoader'
import PageWrapper from '@/components/PageWrapper'

export default function DenemePage() {
  const { styles, scripts, bodyContent, metaTags, linkTags } = loadHTML('deneme/index.html')
  return <PageWrapper styles={styles} scripts={scripts} bodyContent={bodyContent} metaTags={metaTags} linkTags={linkTags} />
}

export async function generateMetadata() {
  const { title } = loadHTML('deneme/index.html')
  return { title: title || 'Demo - Seferi AI' }
}
