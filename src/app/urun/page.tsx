import { loadHTML } from '@/lib/htmlLoader'
import PageWrapper from '@/components/PageWrapper'

export default function UrunPage() {
  const { styles, scripts, bodyContent, metaTags, linkTags } = loadHTML('urun/index.html')
  return <PageWrapper styles={styles} scripts={scripts} bodyContent={bodyContent} metaTags={metaTags} linkTags={linkTags} />
}

export async function generateMetadata() {
  const { title } = loadHTML('urun/index.html')
  return { title: title || 'Ürün - Seferi AI' }
}
