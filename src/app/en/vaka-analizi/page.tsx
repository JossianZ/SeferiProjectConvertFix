import { loadHTML } from '@/lib/htmlLoader'
import PageWrapper from '@/components/PageWrapper'

export default function EnVakaAnaliziPage() {
  const { styles, scripts, bodyContent, metaTags, linkTags } = loadHTML('en/vaka-analizi/index.html')
  return <PageWrapper styles={styles} scripts={scripts} bodyContent={bodyContent} metaTags={metaTags} linkTags={linkTags} />
}

export async function generateMetadata() {
  const { title } = loadHTML('en/vaka-analizi/index.html')
  return { title: title || 'Case Studies - Seferi AI' }
}
