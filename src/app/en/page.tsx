import { loadHTML } from '@/lib/htmlLoader'
import PageWrapper from '@/components/PageWrapper'

export default function EnHomePage() {
  const { styles, scripts, bodyContent, metaTags, linkTags } = loadHTML('en/index.html')
  return <PageWrapper styles={styles} scripts={scripts} bodyContent={bodyContent} metaTags={metaTags} linkTags={linkTags} />
}

export async function generateMetadata() {
  const { title } = loadHTML('en/index.html')
  return { title: title || 'Seferi AI' }
}
