import { loadHTML } from '@/lib/htmlLoader'
import PageWrapper from '@/components/PageWrapper'

export default function BlogPage() {
  const { styles, scripts, bodyContent, metaTags, linkTags } = loadHTML('blog/index.html')
  return <PageWrapper styles={styles} scripts={scripts} bodyContent={bodyContent} metaTags={metaTags} linkTags={linkTags} />
}

export async function generateMetadata() {
  const { title } = loadHTML('blog/index.html')
  return { title: title || 'Blog - Seferi AI' }
}
