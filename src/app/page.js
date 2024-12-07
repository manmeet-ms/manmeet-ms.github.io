import Image from 'next/image'

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.jsx'
import { getPageSeo } from '@/lib/contentful'
import { isExternalLink } from '@/lib/utils'
import { RESUME_ITEMS } from '@/lib/constants'
import { Suspense } from 'react'
import Link from 'next/link'

import { ScrollArea } from '@/components/scroll-area'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { WritingList } from '@/components/writing-list'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button.jsx'
import { getAllPosts } from '@/lib/contentful'
import { getSortedPosts, getItemsByYear } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

// async function fetchData() {
//   const allPosts = await getAllPosts()
//   const sortedPosts = getSortedPosts(allPosts)
//   const items = getItemsByYear(sortedPosts)
//   return { items }
// }

export default async function Home() {
  // const { items } = await fetchData()

  return (
    <ScrollArea useScrollAreaId>
      <FloatingHeader scrollTitle="Manmeet Singh" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Home" className="lg:hidden" />
          <p>
            Hi 👋 I'm Manmeet Singh, an aspiring software engineer, Wordpress Developer, UI/X enthusiast, and minimalist based in
            Delhi, India.
          </p>
          <p>
            I remotely worked as an intern Wordpress Developer in my academic year. Presently, I am helping people with their brands as a freelancer.
          
          {/* <a className='text-blue-500' href="/about"> Read more <ChevronRight className='inline-flex' size={14}/></a> */}

           </p>
          {/* <Button asChild variant="link" className="inline px-0">
            <Link href="/writing">
              <h2 className="mb-4 mt-8">Writing</h2>
            </Link>
          </Button>
          <Suspense fallback={<ScreenLoadingSpinner />}>
            <WritingList items={items} header="Writing" />  
          </Suspense> */}
        <div className="mt-2 overflow-hidden rounded-lg border bg-white md:mt-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[300px] px-4">Project</TableHead>
                  <TableHead className="min-w-[300px] px-4">Description</TableHead>
                  <TableHead className="min-w-[70px] px-4 text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {RESUME_ITEMS.map((item, itemIndex) => {
                  const isExternal = isExternalLink(item.url)

                  return (
                    <TableRow key={`workspace-item-${itemIndex}`}>
                      <TableCell className="px-4 py-3 font-medium">
<div className='flex flex-col' >
<span>{item.title}</span>
<span className='text-green-600' >{item.cateogory}</span>

</div>

                      </TableCell>
                      <TableCell className="px-4 py-3">{item.description}</TableCell>
                      <TableCell className="px-4 py-3 font-medium">
                        <Link href={item.url}>{isExternal ? 'Visit' : 'Preview'}</Link>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
              <TableCaption className="py-3">
                For other cool stuff, check{' '}
                <a
                  href="https://some.wtf"
                  className="link break-words after:content-['_↗']"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  some.wtf
                </a>
              </TableCaption>    
            </Table>
          </div>

        </div>
      </div>
    </ScrollArea>
  )
}
