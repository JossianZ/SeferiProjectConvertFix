import { loadHTML } from '@/lib/htmlLoader'
import PageWrapper from '@/components/PageWrapper'

export default function BlogPost2() {
  const { styles, scripts, bodyContent, metaTags, linkTags } = loadHTML('blog/logistics-automation-streamlining-processes-for-peak-efficiency/index.html')
  return <PageWrapper styles={styles} scripts={scripts} bodyContent={bodyContent} metaTags={metaTags} linkTags={linkTags} />
}

export async function generateMetadata() {
  const { title } = loadHTML('blog/logistics-automation-streamlining-processes-for-peak-efficiency/index.html')
  return { title: title || 'Blog - Seferi AI' }
}
