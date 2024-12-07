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
  const journeyBook = [
    {
      year: 2024,
      logs: [
        {
          title: 'Launched New Initiative',
          description:
            'We introduced a new initiative aimed at redefining user engagement. The project focuses on delivering seamless experiences across all platforms. Early feedback has been overwhelmingly positive.<br><br>[Portfolio Link](https://manmeets.vercel.app/)',
          image: {
            url: 'https://placehold.co/600x400',
            // title: 'Dummy Image',
            // description: 'Dummy Description',
            width: '500',
            height: '300'
          }
        },
        {
          title: 'Team Expansion',
          description:
            'Our team grew significantly with the addition of talented professionals. This has allowed us to diversify our skills and accelerate innovation. Together, we are setting new benchmarks in the industry.',
          image: {
            url: 'https://placehold.co/600x400',
            // title: 'Dummy Image',
            // description: 'Dummy Description',
            width: '500',
            height: '300'
          }
        },
        {
          title: 'Milestone Achievement',
          description:
            'This year marked a major milestone as we surpassed 1 million active users. It is a testament to the dedication of our team and the trust of our users. We remain committed to growing and innovating further.',
          image: {
            url: 'https://placehold.co/600x400',
            // title: 'Dummy Image',
            // description: 'Dummy Description',
            width: '500',
            height: '300'
          }
        }
      ]
    },
    {
      year: 2023,
      logs: [
        {
          title: 'Product Launch',
          description:
            'We successfully launched our flagship product, creating waves in the industry. The launch was accompanied by a robust marketing campaign and glowing reviews. Customers praised its ease of use and innovative features.',
          image: {
            url: 'https://placehold.co/600x400',
            // title: 'Dummy Image',
            // description: 'Dummy Description',
            width: '500',
            height: '300'
          }
        },
        {
          title: 'New Partnerships',
          description:
            'Collaborating with leading organizations, we forged strategic partnerships. These alliances have opened doors to new opportunities and expanded our market reach. Together, we aim to create solutions that drive impact.',
          image: {
            url: 'https://placehold.co/600x400',
            // title: 'Dummy Image',
            // description: 'Dummy Description',
            width: '500',
            height: '300'
          }
        },
        {
          title: 'First Conference',
          description:
            'Our debut at a global conference was a highlight of the year. We showcased our cutting-edge solutions to an enthusiastic audience. The event established us as an emerging leader in the tech landscape.',
          image: {
            url: 'https://placehold.co/600x400',
            // title: 'Dummy Image',
            // description: 'Dummy Description',
            width: '500',
            height: '300'
          }
        }
      ]
    },
    {
      year: 2022,
      logs: [
        {
          title: 'Company Founded',
          description:
            'Our journey began with a vision to revolutionize the industry. Starting small, we laid a strong foundation with innovative ideas and a passionate team. From day one, our focus has been on delivering excellence.',
          image: {
            url: 'https://placehold.co/600x400',
            // title: 'Dummy Image',
            // description: 'Dummy Description',
            width: '500',
            height: '300'
          }
        },
        {
          title: 'First Client Acquired',
          description:
            'We secured our first client, marking an important milestone in our story. This partnership reinforced our belief in our solutions and their market relevance. It set the stage for future successes.',
          image: {
            url: 'https://placehold.co/600x400',
            // title: 'Dummy Image',
            // description: 'Dummy Description',
            width: '500',
            height: '300'
          }
        },
        {
          title: 'Office Setup',
          description:
            'We established our first office, creating a collaborative space for the team. It became the hub of creativity, planning, and execution. This environment played a key role in shaping our early growth.',
          image: {
            url: 'https://placehold.co/600x400',
            // title: 'Dummy Image',
            // description: 'Dummy Description',
            width: '500',
            height: '300'
          }
        }
      ]
    }
  ]

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

export async function generateMetadata() {
  const seoData = await getPageSeo('journey')
  if (!seoData) return null

  const {
    seo: { title, description }
  } = seoData
  const siteUrl = '/contact'

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

// import { Suspense } from 'react'
// import { PlusIcon } from 'lucide-react'

// import { ScrollArea } from '@/components/scroll-area'
// import { JourneyCard } from '@/components/journey-card'
// import { FloatingHeader } from '@/components/floating-header'
// import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
// import { PageTitle } from '@/components/page-title'
// import { GradientBg3 } from '@/components/gradient-bg'
// import { getAllLogbook, getPageSeo } from '@/lib/contentful'

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

// export default async function Journey() {
//   const { allLogbook } = await fetchData()

//   return (
//     <ScrollArea useScrollAreaId>
//       <GradientBg3 />
//       <FloatingHeader scrollTitle="Journey" />
//       <div className="content-wrapper">
//         <div className="content">
//           <PageTitle title="Journey" />
//           <Suspense fallback={<ScreenLoadingSpinner />}>
//             <div className="flex flex-col items-stretch gap-12">
//               {allLogbook.map((item, itemIndex) => (
//                 <div key={`data_${itemIndex}`} className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12">
//                   <div className="flex items-center">
//                     <h2>{item.year}</h2>
//                     <hr className="my-0 ml-4 flex-1 border-dashed border-gray-200" />
//                   </div>
//                   <section>
//                     {item.logs.map((log, logIndex) => (
//                       <div key={`data_${itemIndex}_log_${logIndex}`} className="relative flex pb-8 last:pb-0">
//                         {logIndex !== item.logs.length - 1 && (
//                           <div className="absolute inset-0 flex w-6 items-center justify-center">
//                             <div className="pointer-events-none h-full w-px border-l border-gray-200"></div>
//                           </div>
//                         )}
//                         <div className="z-0 flex size-6 shrink-0 items-center justify-center rounded-full bg-black align-middle text-white">
//                           <PlusIcon size={16} />
//                         </div>
//                         <div className="grow pl-8">
//                           <JourneyCard {...log} index={logIndex} />
//                         </div>
//                       </div>
//                     ))}
//                   </section>
//                 </div>
//               ))}
//             </div>
//           </Suspense>
//         </div>
//       </div>
//     </ScrollArea>
//   )
// }

// export async function generateMetadata() {
//   const seoData = await getPageSeo('journey')
//   if (!seoData) return null

//   const {
//     seo: { title, description }
//   } = seoData
//   const siteUrl = '/journey'

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       url: siteUrl
//     },
//     alternates: {
//       canonical: siteUrl
//     }
//   }
// }

