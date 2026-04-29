import { loadHTML } from '@/lib/htmlLoader'
import PageWrapper from '@/components/PageWrapper'

export default function EnUrunPage() {
  const { styles, scripts, bodyContent, metaTags, linkTags } = loadHTML('en/urun/index.html')
  return <PageWrapper styles={styles} scripts={scripts} bodyContent={bodyContent} metaTags={metaTags} linkTags={linkTags} />
}

export async function generateMetadata() {
  const { title } = loadHTML('en/urun/index.html')
  return { title: title || 'Product - Seferi AI' }
}
