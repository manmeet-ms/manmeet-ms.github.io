import Image from 'next/image'

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.jsx'
import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { GradientBg4 } from '@/components/gradient-bg'
import { Link } from '@/components/link'
import { isExternalLink } from '@/lib/utils'
import { WORKSPACE_ITEMS } from '@/lib/constants'

export default async function Workspace() {
  return (
    <ScrollArea>
      <GradientBg4 />
      {/* <FloatingHeader scrollTitle="Workspace" /> */}
            <FloatingHeader title="Workspace" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Workspace" />
          <div className="mt-2 overflow-hidden rounded-lg border bg-white md:mt-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[300px] px-4">Product</TableHead>
                  <TableHead className="min-w-[300px] px-4">Specs</TableHead>
                  <TableHead className="min-w-[70px] px-4 text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {WORKSPACE_ITEMS.map((item, itemIndex) => {
                  const isExternal = isExternalLink(item.url)

                  return (
                    <TableRow key={`workspace-item-${itemIndex}`}>
                      <TableCell className="px-4 py-3 font-medium">{item.title}</TableCell>
                      <TableCell className="px-4 py-3">{item.specs}</TableCell>
                      <TableCell className="px-4 py-3 font-medium">
                        <Link href={item.url}>{isExternal ? 'Buy' : 'Read'}</Link>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
              <TableCaption className=" bg-primary/5 py-3">
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

          {/* <figure>
            <Image
              src="/assets/workspace.avif"
              alt="Workspace"
              className="mt-2 w-full object-cover"
              width={766}
              height={901}
              loading="eager"
              priority
            />
            <figcaption className="mt-2 break-all text-center text-xs font-light text-gray-500">Workspace</figcaption>
          </figure> */}
        </div>
      </div>
    </ScrollArea>
  )
}

const EmptyPlaceholder = () => (
  <div className="shrink-0 snap-center md:hidden">
    <div className="w-px shrink-0" />
  </div>
)
 