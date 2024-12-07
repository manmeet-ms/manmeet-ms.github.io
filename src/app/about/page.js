import { Suspense } from 'react'
import { PlusIcon } from 'lucide-react'

import { ScrollArea } from '@/components/scroll-area'
import { JourneyCard } from '@/components/journey-card'
import { FloatingHeader } from '@/components/floating-header'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'
import { getAllLogbook, getPageSeo } from '@/lib/contentful'

// async function fetchData() {
//   const allLogbook = await getAllLogbook()

//   const mappedLogbook = []

//   allLogbook.map((log) => {
//     const year = new Date(log.date).getFullYear()
//     const existingYear = mappedLogbook.find((item) => item?.year === year)
//     if (!existingYear) mappedLogbook.push({ year, logs: [log] })
//     else existingYear.logs.push(log)
//   })

//   return { allLogbook: mappedLogbook }
// }

export default async function Journey() {
  // const { allLogbook } = await fetchData()

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

export async function generateMetadata() {
  const seoData = await getPageSeo('journey')
  if (!seoData) return null

  const {
    seo: { title, description }
  } = seoData
  const siteUrl = '/about'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteUrl
    },
    alternates: {
      canonical: siteUrl
    }
  }
}


