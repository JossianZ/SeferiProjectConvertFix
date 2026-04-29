import { loadHTML } from '@/lib/htmlLoader'
import PageWrapper from '@/components/PageWrapper'

export default function TesekkurlerPage() {
  const { styles, scripts, bodyContent, metaTags, linkTags } = loadHTML('tesekkurler/index.html')
  return <PageWrapper styles={styles} scripts={scripts} bodyContent={bodyContent} metaTags={metaTags} linkTags={linkTags} />
}

export async function generateMetadata() {
  const { title } = loadHTML('tesekkurler/index.html')
  return { title: title || 'Teşekkürler - Seferi AI' }
}
