import { Suspense } from 'react'
import { PlusIcon } from 'lucide-react'

import { ScrollArea } from '@/components/scroll-area'
import { JourneyCard } from '@/components/journey-card'
import { FloatingHeader } from '@/components/floating-header'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'

export default async function Journey() {
  const journeyBook = [
    {
      year: 2024,
      logs: [
        {
          id: '',
          title: 'Check discord logs',
          description:
            'This year marked a major milestone as we surpassed 1 million active users. It is a testament to the dedication of our team and the trust of our users. We remain committed to growing and innovating further.'
          // image: {
          //   url: 'https://placehold.co/600x300',
          //   width: '600',
          //   height: '300'
          // }
        },
        {
          id: '',
          title: 'purchased essentials items to enhance my workflow',
          description:
            'This year marked a major milestone as we surpassed 1 million active users. It is a testament to the dedication of our team and the trust of our users. We remain committed to growing and innovating further.'
          // image: {
          //   url: 'https://placehold.co/600x300',
          //   width: '600',
          //   height: '300'
          // }
        },

        {
          id: '',
          title: 'New Portolfio revamp',
          description:
            'from static basic , html templates -> html+tailwind -> using learning react -> now react + shadcn ui Our team grew significantly with the addition of talented professionals. This has allowed us to diversify our skills and accelerate innovation. Together, we are setting new benchmarks in the industry.',
          // image: {
          //   url: 'https://placehold.co/600x300',
          //   width: '600',
          //   height: '300'
          // }
        },
        {
          id: '',
          title: 'Made Mistwrite',
          description:
            'We introduced a new initiative aimed at redefining user engagement. The project focuses on delivering seamless experiences across all platforms. Early feedback has been overwhelmingly positive.<br><br>[Portfolio Link](https://manmeets.vercel.app/)',
          image: {
            url: '/portfolio_ss/covers/mistwrite-cover-alt.png',
            width: '600',
            height: '300'
          }
        },

        {
          id: '',
          title: 'bought new laptop',
          description:
            'This year marked a major milestone as we surpassed 1 million active users. It is a testament to the dedication of our team and the trust of our users. We remain committed to growing and innovating further.',
          // image: {
          //   url: 'https://placehold.co/600x300',
          //   width: '600',
          //   height: '300'
          // }
        }
      ]
    },
    {
      year: 2023,
      logs: [
        {
          id: 'wooden-desk',
          title: 'Hybrid Wooden Desk story',
          description:
            'We successfully launched our flagship product, creating waves in the industry. The launch was accompanied by a robust marketing campaign and glowing reviews. Customers praised its ease of use and innovative features.',
          // image: {
          //   url: 'https://placehold.co/600x300',
          //   width: '600',
          //   height: '300'
          // }
        }
      ]
    },

    {
      year: 2019,
      logs: [
        {
          id: '',
          title: 'First Client Acquired',
          description:
            'We secured our first client, marking an important milestone in our story. This partnership reinforced our belief in our solutions and their market relevance. It set the stage for future successes.',
          // image: {
          //   url: 'https://placehold.co/600x300',
          //   width: '600',
          //   height: '300'
          // }
        },
        {
          id: '',
          title: 'Setup first freelancing account',
          description:
            'Our journey began with a vision to revolutionize the industry. Starting small, we laid a strong foundation with innovative ideas and a passionate team. From day one, our focus has been on delivering excellence.',
          // image: {
          //   url: 'https://placehold.co/600x300',
          //   width: '600',
          //   height: '300'
          // }
        }
      ]
    }
  ]

  return (
    <ScrollArea useScrollAreaId>
      <GradientBg3 />
      <FloatingHeader scrollTitle="Journey" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Journey" />
          <Suspense fallback={<ScreenLoadingSpinner />}>
            <div className="flex flex-col items-stretch gap-12">
              {/* {allLogbook.map((item, itemIndex) => (
                <div key={`data_${itemIndex}`} className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12">
                  <div className="flex items-center">
                    <h2>{item.year}</h2>
                    <hr className="my-0 ml-4 flex-1 border-dashed border-gray-200" />
                  </div>
                  <section>
                    {item.logs.map((log, logIndex) => (
                      <div key={`data_${itemIndex}_log_${logIndex}`} className="relative flex pb-8 last:pb-0">
                        {logIndex !== item.logs.length - 1 && (
                          <div className="absolute inset-0 flex w-6 items-center justify-center">
                            <div className="pointer-events-none h-full w-px border-l border-gray-200"></div>
                          </div>
                        )}
                        <div className="z-0 flex size-6 shrink-0 items-center justify-center rounded-full bg-black align-middle text-white">
                          <PlusIcon size={16} />
                        </div>
                        <div className="grow pl-8">
                          <JourneyCard {...log} index={logIndex} />
                        </div>
                      </div>
                    ))}
                  </section>
                </div>
              ))} */}
              {journeyBook.map((item, itemIndex) => (
                <div key={`data_${itemIndex}`} className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12">
                  <div className="flex items-center">
                    <h2>{item.year}</h2>
                    <hr className="my-0 ml-4 flex-1 border-dashed border-gray-200" />
                  </div>
                  <section>
                    {item.logs.map((log, logIndex) => (
                      <div key={`data_${itemIndex}_log_${logIndex}`} className="relative flex pb-8 last:pb-0">
                        {logIndex !== item.logs.length - 1 && (
                          <div className="absolute inset-0 flex w-6 items-center justify-center">
                            <div className="pointer-events-none h-full w-px border-l border-gray-200"></div>
                          </div>
                        )}
                        <div className="z-0 flex size-6 shrink-0 items-center justify-center rounded-full bg-black align-middle text-white">
                          <PlusIcon size={16} />
                        </div>
                        <div className="grow pl-8">
                          <JourneyCard {...log} index={logIndex} />
                        </div>
                      </div>
                    ))}
                  </section>
                </div>
              ))}
            </div>
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}
