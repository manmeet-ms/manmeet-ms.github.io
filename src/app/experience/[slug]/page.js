import { notFound } from 'next/navigation'

import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { EXPERIENCE_POSTS, getExperiencePost } from '@/lib/experience-posts'
import { getDateTimeFormat } from '@/lib/utils'
import Link from 'next/link'
import { ArrowUpRight, ArrowUpRightIcon, ExternalLinkIcon } from 'lucide-react'

export function generateStaticParams() {
  return EXPERIENCE_POSTS.map(({ slug }) => ({ slug }))
}

export default function ExperienceArticlePage({ params }) {
  const post = getExperiencePost(params.slug)
  if (!post) notFound()

  return (
    <ScrollArea className="bg-white" useScrollAreaId>
      <FloatingHeader scrollTitle={post.title} goBackLink="/experience" />
      <div className="content-wrapper @container/experience">
        <article className="content">
          <PageTitle
            title={post.title}
            subtitle={<time className='italic text-sm opacity-60' dateTime={post.date}>Written {getDateTimeFormat(post.date)}</time>}
            className="mb-6 flex flex-col gap-3"
          />
          <p className="mb-6 text-gray-600">
            {post.role} &middot; {post.location}
            </p>
          <MarkdownRenderer>{post.summary}</MarkdownRenderer>
          <MarkdownRenderer>{post.content}</MarkdownRenderer>
        <Link  className='text-blue-500 p-2 mt-4 underline underline-offset-2 '   href={"/experience"}>Go to Experiences <ArrowUpRightIcon className='inline-flex size-4' /></Link>
        </article>
      </div>
    </ScrollArea>
  )
}

export function generateMetadata({ params }) {
  const post = getExperiencePost(params.slug)
  if (!post) return {}

  const url = `/experience/${post.slug}`
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      url
    },
    alternates: { canonical: url }
  }
}