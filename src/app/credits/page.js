import { Suspense } from 'react'
import { PlusIcon } from 'lucide-react'

import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export default async function Credits() {
  const creditItems = [
   
    
    {
      name: 'Images',
      link: 'https://code.visualstudio.com',
      description:
        '[Freepik]()'
    },
    {
      name: 'Site inpirations',
      link: 'https://code.visualstudio.com',
      description:
        ' onur.dev, dribbble'
    },
    {
      name: 'Vectors',
      link: 'https://code.visualstudio.com',
      description:
        'svgrepo.'
    },
    {
      name: 'Codebase on', //on descriiton and company on the list title
      link: 'https://code.visualstudio.com',
      description:
        'github.'
    },
    {
      name: 'Hosting on', //on descriiton and company on the list title
      link: 'https://code.visualstudio.com',
      description:
        'vercel.'
    },
   
  ]


  return (
    
    <ScrollArea useScrollAreaId>
      <GradientBg3 />
      <FloatingHeader scrollTitle="Credits" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Credits" />
          Credi desctiton thask them all
          <Suspense fallback={<ScreenLoadingSpinner />}>
          <div className="flex flex-col items-stretch gap-12">
              <ul className="mb-4 flex list-disc flex-col gap-0.5 pl-6">
                {creditItems.map((item, index) => (
                  <li key={index}>
                    <div className="[&amp;:has(+ul)]:mb-1 mb-4 leading-slacker last:mb-0">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link break-words after:content-['_↗']"
                        // className="link break-words"
                      >
                        {item.name}
                      </a>{' '}
                      —&nbsp;
                      {/* <Balancer> */}
                      <MarkdownRenderer>{item.description}</MarkdownRenderer>
                      {/* </Balancer> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          
          
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}
 