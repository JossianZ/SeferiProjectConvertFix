import fs from 'fs'
import path from 'path'
import { cache } from 'react'

export interface ParsedHTML {
  styles: string
  scripts: string[]
  bodyContent: string
  title: string
  metaTags: Array<{ name?: string; property?: string; content: string }>
  linkTags: Array<{ rel: string; href: string; [key: string]: string }>
}

export const loadHTML = cache((htmlPath: string): ParsedHTML => {
  const fullPath = path.join(process.cwd(), 'public', htmlPath)
  const htmlContent = fs.readFileSync(fullPath, 'utf-8')
  
  // Extract title
  const titleMatch = htmlContent.match(/<title[^>]*>(.*?)<\/title>/i)
  const title = titleMatch ? titleMatch[1] : 'Seferi AI'
  
  // Extract all styles
  const styleMatches = htmlContent.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || []
  const styles = styleMatches.map(s => s.replace(/<\/?style[^>]*>/gi, '')).join('\n')
  
  // Extract all scripts (including src and inline)
  const scriptMatches = htmlContent.match(/<script[^>]*>[\s\S]*?<\/script>|<script[^>]*\/>/gi) || []
  const scripts = scriptMatches.map(s => s.trim())
  
  // Extract meta tags (filter out viewport and charset as they're in layout)
  const metaMatches = htmlContent.match(/<meta[^>]*>/gi) || []
  const metaTags = metaMatches.map(meta => {
    const nameMatch = meta.match(/name=["']([^"']*)["']/)
    const propertyMatch = meta.match(/property=["']([^"']*)["']/)
    const contentMatch = meta.match(/content=["']([^"']*)["']/)
    
    const tag: any = {}
    if (nameMatch) tag.name = nameMatch[1]
    if (propertyMatch) tag.property = propertyMatch[1]
    if (contentMatch) tag.content = contentMatch[1]
    
    return tag
  }).filter(tag => 
    tag.content && 
    tag.name !== 'viewport' && 
    tag.name !== 'color-scheme' &&
    !tag.content.includes('charset')
  )
  
  // Extract link tags (for favicons, etc.)
  const linkMatches = htmlContent.match(/<link[^>]*>/gi) || []
  const linkTags = linkMatches.map(link => {
    const relMatch = link.match(/rel=["']([^"']*)["']/)
    const hrefMatch = link.match(/href=["']([^"']*)["']/)
    const sizesMatch = link.match(/sizes=["']([^"']*)["']/)
    const typeMatch = link.match(/type=["']([^"']*)["']/)
    
    const tag: any = {}
    if (relMatch) tag.rel = relMatch[1]
    if (hrefMatch) tag.href = hrefMatch[1]
    if (sizesMatch) tag.sizes = sizesMatch[1]
    if (typeMatch) tag.type = typeMatch[1]
    
    return tag
  }).filter(tag => tag.rel && tag.href)
  
  // Extract body content
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i)
  const bodyContent = bodyMatch ? bodyMatch[1] : ''
  
  return {
    styles,
    scripts,
    bodyContent,
    title,
    metaTags,
    linkTags
  }
})
