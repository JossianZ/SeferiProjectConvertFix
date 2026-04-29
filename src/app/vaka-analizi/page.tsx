import { loadHTML } from '@/lib/htmlLoader'
import PageWrapper from '@/components/PageWrapper'

export default function VakaAnaliziPage() {
  const { styles, scripts, bodyContent, metaTags, linkTags } = loadHTML('vaka-analizi/index.html')
  return <PageWrapper styles={styles} scripts={scripts} bodyContent={bodyContent} metaTags={metaTags} linkTags={linkTags} />
}

export async function generateMetadata() {
  const { title } = loadHTML('vaka-analizi/index.html')
  return { title: title || 'Vaka Analizi - Seferi AI' }
}
