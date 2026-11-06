'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn, getDateTimeFormat, viewCountFormatter } from '@/lib/utils'
import { AxeIcon, MessageCircle, MessageCircleDashedIcon, MessageCircleIcon, NotebookPenIcon } from 'lucide-react'

export const ExperienceListLayout = ({ list, isMobile, passedType }) => {
  const pathname = usePathname()

  return (
    <div className={cn(!isMobile && 'flex flex-col gap-1 text-sm')}>
      {passedType==list.type && list.map((post) => {
        const href = `/experience/${post.slug}`
        const isActive = pathname === href

        return (
          <Link
            key={post.slug}
            href={href}
            className={cn(
              'flex flex-col gap-1 transition-colors duration-300',
              !isMobile && isActive ? 'bg-black text-white' : 'hover:bg-gray-200',
              isMobile ? 'border-b px-4 py-3 text-sm hover:bg-gray-100' : 'rounded-lg p-2'
            )}
          >
            <span className="font-medium">{post.title}</span>
            <span className={cn('transition-colors duration-300', isActive ? 'text-slate-400' : 'text-slate-500')}>
              {/* <time dateTime={post.date}> <NotebookPenIcon   className='inline-flex size-3'/> {getDateTimeFormat(post.date)}</time> */}
              <span >  
                {/* <NotebookPenIcon   className='inline-flex size-3'/> */}
                 {post.role} {post.role&post.location?<span>&middot;</span>:''} {post.location}</span>
              {post.views != null && <span> &middot; {viewCountFormatter.format(post.views)} demo reads</span>}
            </span>
            {isMobile && <span className="text-gray-600">{post.summary}</span>}
          </Link>  
        )
      })}
    </div>
  )
}