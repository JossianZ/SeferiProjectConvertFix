import { loadHTML } from '@/lib/htmlLoader'
import PageWrapper from '@/components/PageWrapper'

export default function HakkimizdaPage() {
  const { styles, scripts, bodyContent, metaTags, linkTags } = loadHTML('hakkimizda/index.html')
  return <PageWrapper styles={styles} scripts={scripts} bodyContent={bodyContent} metaTags={metaTags} linkTags={linkTags} />
}

export async function generateMetadata() {
  const { title } = loadHTML('hakkimizda/index.html')
  return { title: title || 'Hakkımızda - Seferi AI' }
}
