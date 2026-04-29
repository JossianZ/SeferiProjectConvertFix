import { loadHTML } from '@/lib/htmlLoader'
import PageWrapper from '@/components/PageWrapper'

export default function EnTesekkurlerPage() {
  const { styles, scripts, bodyContent, metaTags, linkTags } = loadHTML('en/tesekkurler/index.html')
  return <PageWrapper styles={styles} scripts={scripts} bodyContent={bodyContent} metaTags={metaTags} linkTags={linkTags} />
}

export async function generateMetadata() {
  const { title } = loadHTML('en/tesekkurler/index.html')
  return { title: title || 'Thank You - Seferi AI' }
}
