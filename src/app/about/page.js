import { Suspense } from 'react'
import { PlusIcon } from 'lucide-react'

import { ScrollArea } from '@/components/scroll-area'
import { JourneyCard } from '@/components/journey-card'
import { FloatingHeader } from '@/components/floating-header'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'
 

export default async function Journey() {

  return (
    <ScrollArea useScrollAreaId>
      <GradientBg3 />
      <FloatingHeader scrollTitle="About" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="About" />
          <Suspense fallback={<ScreenLoadingSpinner />}>
ABout
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}
 