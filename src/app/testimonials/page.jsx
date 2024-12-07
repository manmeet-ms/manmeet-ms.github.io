import { Suspense } from 'react'
import { PlusIcon, StarIcon } from 'lucide-react'
import { Masonry } from '@mui/lab'
import { ScrollArea } from '@/components/scroll-area'
import { JourneyCard } from '@/components/journey-card'
import { FloatingHeader } from '@/components/floating-header'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { PageTitle } from '@/components/page-title'
import { GradientBg3 } from '@/components/gradient-bg'
import { getAllLogbook, getPageSeo } from '@/lib/contentful'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const reviews = [
  {
    client: 'boazoo',
    country: 'Israel',
    ratings: '5',
    comment: '👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻'
  },

  {
    client: 'abongir',
    country: 'India',
    ratings: '4.7',
    comment:
      'It was a fantastic experience. I had a particularly challenging problem to solve and he was able to resolve it very well.'
  },
  {
    client: 'privatkonto192',
    country: 'Germany',
    ratings: '5',
    comment: 'Gut Schnell'
  },
  {
    client: 'brettgoodman07',
    country: 'Australia',
    ratings: '5',
    comment:
      'Very responsive and did an amazing job. Always happy to jump on a call and walk me through the work and make changes where necessary.'
  },
  {
    client: '  bv1s1ble',
    country: 'Pakistan',
    ratings: '5',
    comment:
      'The Personality & Overall Communication skills of such a talented individual cannot be described in words. We are 100% satisfied for what Wavewalker (Manmeet) have done for us. Amazing Service , Highly Talented Individual i would recommend anyone to Consult or Hire Manmeet for your Startup work.'
  },
  {
    client: 'bv1s1ble',
    country: 'Pakistan',
    ratings: '5',
    comment:
      'Thanku Wavewalker ( Dear Manmeet ) its been a Pleasure doing Business with you. I will give you a big round of Applause for your services , I got what I actually needed. I will be Considering to do further more business with you because of your... See more'
  },
  {
    client: 'flashweirdo',
    country: 'Canada',
    ratings: '5',
    comment: "Really good, I didn't have to do much and he did all the work for me. Very satisfied."
  }
]

export default async function Journey() {
  return (
    <ScrollArea useScrollAreaId>
      <GradientBg3 />
      <FloatingHeader scrollTitle="Contact" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Testimonials" />

          <Suspense fallback={<ScreenLoadingSpinner />}>
            <section className="body-font text-gray-600">
              <div className="container mx-auto px-5 py-12">
                <div className="-mx-4 -my-8 flex flex-wrap">
                  <Masonry columns={3} spacing={1}>
                    {reviews.map((items) => (
                      <>
                        <div className="rounded-lg border px-4 py-8 lg:w-1/3">
                          <div className="flex h-full items-start">
                            {/* <div className="flex w-12 flex-shrink-0 flex-col text-center leading-none">
                              <span className="mb-2 border-b-2 border-gray-200 pb-2 text-gray-500">
                                {items.date[0]}
                              </span>
                              <span className="title-font text-lg font-medium leading-none text-gray-800">
                                {items.date[1]}
                              </span>
                            </div> */}
                            <div className="flex-grow">
                              <h2 className="mb-1 text-xs inline-flex items-center justify-center gap-1 py-0.5 px-1 rounded-sm bg-indigo-400/20 text-indigo-600">
                                <StarIcon size={12}/> {items.ratings}
                              </h2>
                              {/* <h1 className="title-font mb-3 text-xl font-medium text-gray-900">The 400 Blows</h1> */}
                              <p className="mb-5 leading-relaxed">{items.comment}</p>
                              <a className="inline-flex items-center">
                                {/* <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"> */}
                                <span className="flex flex-grow flex-col  ">
                                  <span className="title-font font-medium text-gray-900">@{items.client}</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* <Card className="">
                          <CardHeader>
                            <CardTitle className="text-sm">@{items.client}</CardTitle>
                            <CardDescription>{items.ratings}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid w-full items-center">
                              <div className="flex flex-col space-y-1.5">{items.comment}</div>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between"></CardFooter>
                        </Card> */}
                      </>
                    ))}
                  </Masonry>
                </div>
              </div>
            </section>
       
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}
