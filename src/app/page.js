import Image from 'next/image'

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.jsx'
// import { getPageSeo } from '@/lib/contentful'
import { isExternalLink } from '@/lib/utils'
import { RESUME_ITEMS } from '@/lib/constants'
import { Suspense } from 'react'
import Link from 'next/link'

import { ScrollArea } from '@/components/scroll-area'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
// import { WritingList } from '@/components/writing-list'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button.jsx'
// import { getAllPosts } from '@/lib/contentful'
// import { getSortedPosts, getItemsByYear } from '@/lib/utils'
import { ArrowRight, ChevronRight, Dot, DotIcon, DownloadIcon, Ellipsis } from 'lucide-react'
import { GradientBg2 } from '@/components/gradient-bg'

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
            Hi 👋 I'm Manmeet Singh, an aspiring software engineer, Wordpress Developer, UI/X enthusiast, and minimalist
            based in Delhi, India.
          </p>
          <p>
            I remotely worked as an intern Wordpress Developer in my academic year. Presently, I am helping people with
            their brands as a freelancer. Below is an overview of my experience in the form of projects built and work
            using various technologies
            {/* <a className='text-blue-500' href="/about"> Read more <ChevronRight className='inline-flex' size={14}/></a> */}
          </p>

          <div className="container flex w-full items-center justify-center gap-6 text-muted-foreground/30">
            <DotIcon /> <DotIcon /> <DotIcon />
          </div>
          <div className="mb-4  mt-8 flex items-center justify-between">
            <Button asChild variant="link" className="inline px-0">
              <Link href="/projects">
                <h2>Projects</h2>
              </Link>
            </Button>
            <Link href="/projects">
            <Button variant="ghost" className="inline-flex items-center justify-center gap-2">
              View All

              <ArrowRight size={14} strokeWidth={3} />
            </Button>
            </Link>
          </div>
          {/*<Suspense fallback={<ScreenLoadingSpinner />}>
            <WritingList items={items} header="Writing" />  
          </Suspense> */}
          Laest updates and featured projects will be listd here 
          <div className="mt-2 overflow-hidden rounded-lg border bg-white md:mt-8">
            <Table className="h-64 max-h-64 w-full overflow-scroll">
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[100px] px-4  md:min-w-[200px]">Project</TableHead>
                  <TableHead className="min-w-[300px] px-4">Description</TableHead>
                  <TableHead className="min-w-[70px] px-4 text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {RESUME_ITEMS.map((item, itemIndex) => {
                  const isExternal = isExternalLink(item.url)

                  return (
                    <TableRow key={`workspace-item-${itemIndex}`}>
                      <TableCell className="px-4 py-3 font-medium">{item.title}</TableCell>
                      <TableCell className="px-4 py-3">
                        
                        <div className="flex flex-col">
                          <span>{item.description}</span>
                          <div className="flex flex-wrap gap-1 ">
                            {item.tags.map((categoryItem, idx) => (
                              <span
                                key={idx}
                                className="mt-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary"
                              >
                                {categoryItem}
                              </span>
                            ))}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="px-4 py-3 font-medium">
                        <Link href={item.url}>{isExternal ? 'Visit' : 'Preview'}</Link>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
              <TableCaption className="bg-primary/5 py-3">
                For other cool stuff, check
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
