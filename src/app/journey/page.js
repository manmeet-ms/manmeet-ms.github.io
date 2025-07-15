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
      year: 2025,
      logs: [

        {
          id: '',
          title: 'Built Home Server - \'Akaalforge\'',
          description:
            '(Temporarily) Escaped the cost of external storage, so converted this laptop to a little NAS of 500GB.',
          image: {
            url: '/assets/journey-covers/homelab.jpg',
            width: '300',
            height: '600'
          }
        },
        {
          id: '',
          title: 'Made Essentia',
          description:
            ' A quick and feature-rich Ration list exporter. For making monthly lists, paperless and user friendly.<br><br>[Try here](https://list-exporter.vercel.app/)'
,          image: {
            url: '/assets/journey-covers/essentia-journey-cover.png',
            width: '600',
            height: '300'
          }
        },
       
      ]
    },
    {
      year: 2024,
      logs: [

        {
          id: '',
          title: 'Purchased essentials tools to enhance my workflow',
          description:
            'Added a laptop stand and an extended desk mat to enhance the workspace&apos;s aesthetics and functionality. The stand helps with better heat dissipation, while the desk mat significantly improves the gliding experience of the external mouse. Investing in these key tools has been a practical step toward creating a more efficient and productive work environment.'
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
            'Launched Mistwrite, my motive was keep main note keeping app clutter free and use this one for temporary note creation.<br><br>[Try here](https://manmeets.vercel.app/)',
          image: {
            url: '/assets/journey-covers/mistwrite-journey-cover.png',
            width: '600',
            height: '300'
          }
        },
        {
          id: '',
          title: 'Portolfio revamp',
          description:
            'Transitioned from basic HTML templates to using modern tools like React and shadcn/ui, crafting high-quality, interactive portfolios with time. Credits to this site [here](/credits) ',
          // image: {
          //   url: 'https://placehold.co/600x300',
          //   width: '600',
          //   height: '300'
          // }
        },
        {
          id: '',
          title: 'Completed my graduation',
          description:
            'Academic milestone, a testament to years of dedication and effort. Yes there were ups and downs, but self-belief and faith in the almighty carried me through. In the end it is the beginning of new opportunities and professional growth.',
          // image: {
          //   url: 'https://placehold.co/600x300',
          //   width: '600',
          //   height: '300'
          // }
        },     {
          id: '',
          title: 'A new comrade to power through my journey',
          description:
            'Upgrading from a Pentium laptop to a Ryzen 7-powered laptop marks a significant day.',
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
          title: 'Hybrid Wooden Desk',
          description:
            'Crafted a hybrid wooden desk, combining aesthetics with functionality. This setup has transformed my workspace into a more productive and inspiring environment.',
          // image: {
          //   url: 'https://placehold.co/600x300',
          //   width: '600',
          //   height: '300'
          // }
        },
        {
          id: 'first-mechanical-keyboard',
          title: 'Purchased my first mechanical keyboard',
          description:
            'Opted for a high-quality mechanical keyboard to enhance typing efficiency and overall productivity. This small yet impactful upgrade has been a game-changer.',
          image: {
            url: '/assets/journey-covers/mechanical-keyboard-journey-card-cover.jpg',
            width: '600',
            height: '300'
          }
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
            'Secured my first freelance client, marking the beginning of a fulfilling professional journey. This milestone reinforced my confidence and drive to excel.',
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
            'Launched my freelancing journey by setting up my first account. This step opened doors to exciting opportunities and laid the foundation for a dynamic career.',
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
