import { loadHTML } from '@/lib/htmlLoader'
import PageWrapper from '@/components/PageWrapper'

export default function EnHakkimizdaPage() {
  const { styles, scripts, bodyContent, metaTags, linkTags } = loadHTML('en/hakkimizda/index.html')
  return <PageWrapper styles={styles} scripts={scripts} bodyContent={bodyContent} metaTags={metaTags} linkTags={linkTags} />
}

export async function generateMetadata() {
  const { title } = loadHTML('en/hakkimizda/index.html')
  return { title: title || 'About - Seferi AI' }
}
