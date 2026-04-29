import { loadHTML } from '@/lib/htmlLoader'
import PageWrapper from '@/components/PageWrapper'

export default function CookiePolicyPage() {
  const { styles, scripts, bodyContent, metaTags, linkTags } = loadHTML('cookiepolicy/index.html')
  return <PageWrapper styles={styles} scripts={scripts} bodyContent={bodyContent} metaTags={metaTags} linkTags={linkTags} />
}

export async function generateMetadata() {
  const { title } = loadHTML('cookiepolicy/index.html')
  return { title: title || 'Çerez Politikası - Seferi AI' }
}
