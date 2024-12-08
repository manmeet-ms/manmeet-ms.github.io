import { Suspense } from 'react'
import { PlusIcon } from 'lucide-react'

import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'

export default async function Contact() {


  return (
    <ScrollArea useScrollAreaId>
      <GradientBg3 />
      <FloatingHeader scrollTitle="Contact" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Contact" />
          <Suspense fallback={<ScreenLoadingSpinner />}>
           Contact me
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}
 