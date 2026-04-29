import { loadHTML } from '@/lib/htmlLoader'
import PageWrapper from '@/components/PageWrapper'

export default function BlogPost1() {
  const { styles, scripts, bodyContent, metaTags, linkTags } = loadHTML('blog/ais-travel-revolution-logistics-enhanced-journeys-transformed/index.html')
  return <PageWrapper styles={styles} scripts={scripts} bodyContent={bodyContent} metaTags={metaTags} linkTags={linkTags} />
}

export async function generateMetadata() {
  const { title } = loadHTML('blog/ais-travel-revolution-logistics-enhanced-journeys-transformed/index.html')
  return { title: title || 'Blog - Seferi AI' }
}
