import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.jsx'
// import { getPageSeo } from '@/lib/contentful'
import { FEATURED_ProjectTable_Home } from '@/lib/constants'
import { isExternalLink } from '@/lib/utils'
import Link from 'next/link'

import { ScrollArea } from '@/components/scroll-area'
// import { WritingList } from '@/components/writing-list'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button.jsx'
// import { getAllPosts } from '@/lib/contentful'
// import { getSortedPosts, getItemsByYear } from '@/lib/utils'
import { AsteriskIcon } from 'lucide-react'

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
          Hi 👋 I'm Manmeet Singh, an aspiring software engineer, WordPress developer, UI/UX enthusiast, and a minimalist by nature, based in Delhi, India.

          </p>
          <p>
          During my academic years, I gained experience as a remote WordPress Developer intern. Currently, I am leveraging my skills as a freelancer, helping individuals bring their ideas to life. Below is a glimpse into my latest projects, showcasing projects and work with diverse tech

            {/* <a className='text-blue-500' href="/about"> Read more <ChevronRight className='inline-flex' size={14}/></a> */}
          </p>
          <iframe  className='w-full rounded-md'  src="https://git-graph.vercel.app/embed/manmeet-ms?showColorLegend=true&showWeekdayLabels=true&showMonthLabels=true&showTotalCount=true&blockMargin=2&blockRadius=0&blockSize=12&fontSize=8&weekStart=0&year=2024"></iframe>
          <div className="container py-2 flex w-full items-center justify-center gap-6 text-muted-foreground/30">
            <AsteriskIcon/>
            {/* <AsteriskIcon/>
            <AsteriskIcon/> */}
            {/* <DotIcon /> <DotIcon /> <DotIcon /> */}
          </div>
          
          <Button asChild variant="link" className="inline px-0">
            <a href="/projects">
              <h2>Projects</h2>
            </a>
          </Button>
          {/* <div className="mb-4  mt-8 flex items-center justify-between">
            <Link href="/projects">
            <Button variant="ghost" className="inline-flex items-center justify-center gap-2">
              View All

              <ArrowRight size={14} strokeWidth={3} />
            </Button>
            </Link>
          </div> */}
          {/*<Suspense fallback={<ScreenLoadingSpinner />}>
            <WritingList items={items} header="Writing" />  
          </Suspense> */}

          {/* Laest updates and featured projects will be listd here */}
          
          <div className="mt-2 overflow-hidden rounded-lg border bg-white md:mt-8">
            <Table className="h-64 max-h-64 w-full overflow-scroll">
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[100px] px-4 ">Project</TableHead>
                  <TableHead className="min-w-[300px] px-4">Description</TableHead>
                  <TableHead className="min-w-[70px] px-4 text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {FEATURED_ProjectTable_Home.map((item, itemIndex) => {
                  const isExternal = isExternalLink(item.url)

                  return (
                    <TableRow key={`workspace-item-${itemIndex}`}>
                      <TableCell className="px-4 py-3 font-medium">{item.title}</TableCell>
                      <TableCell className="px-4 py-3">
                        <div className="flex flex-col">
                          <span>{item.excerpt}</span>
                          {/* <div className="flex flex-wrap gap-1 ">
                            {item.tags?(item.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="cursor-pointer mt-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary"
                              >
                                {tag}
                              </span>
                            ))):null}
                          </div> */}
                        </div>
                      </TableCell>
                      <TableCell className="px-4 py-3 font-medium">
                        <Link className='text-primary' href={item.url}>{isExternal ? 'Visit' : 'View'}</Link>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
              <TableCaption className="bg-primary/5 py-3">
                View categorized projects list
                <Link
                  href="/projects"
                  className="link break-words after:content-['_↗']"

                  rel="noopener noreferrer"
                >
                  &nbsp;here
                </Link>
              </TableCaption>
            </Table>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
