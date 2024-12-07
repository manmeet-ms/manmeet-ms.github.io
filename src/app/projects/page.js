import { Button } from '@/components/ui/button.jsx'
import { Suspense } from 'react'
import Link from 'next/link'

import { Link2Icon, PlusIcon } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ScrollArea } from '@/components/scroll-area'
import { JourneyCard } from '@/components/journey-card'
import { FloatingHeader } from '@/components/floating-header'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { PageTitle } from '@/components/page-title'
import { GradientBg, GradientBg2, GradientBg3, GradientBg4 } from '@/components/gradient-bg'
import { getAllLogbook, getPageSeo } from '@/lib/contentful'

export default async function Projects() {
  const ui_projectCategories = [
    // vscode, edge, obsidian, git for sync , virtualbox, phtoshop, dngrep, other utilities,extensions and tools for android (great way to credit them)
    {
      name: 'VoDScEe',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'My most recently used theme, inspired by Vercel Theme ▲ and One Dark Pro.'
    },
    {
      name: 'VoDScEe',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'My most recently used theme, inspired by Vercel Theme ▲ and One Dark Pro.'
    },
    {
      name: 'VoDScEe',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'My most recently used theme, inspired by Vercel Theme ▲ and One Dark Pro.'
    },
    {
      name: 'VoDScEe',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'My most recently used theme, inspired by Vercel Theme ▲ and One Dark Pro.'
    },
    {
      name: 'RaDroipn',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: "The best all-on-one bookmark manager I've ever seen and used."
    },
    {
      name: 'MdHaonr',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'A one-click camera check, right from the menu bar'
    }
  ]
  const wp_projectCategories = [
    // vscode, edge, obsidian, git for sync , virtualbox, phtoshop, dngrep, other utilities,extensions and tools for android (great way to credit them)
    {
      name: 'VoDScEe',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'My most recently used theme, inspired by Vercel Theme ▲ and One Dark Pro.'
    },
    {
      name: 'VoDScEe',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'My most recently used theme, inspired by Vercel Theme ▲ and One Dark Pro.'
    },
    {
      name: 'VoDScEe',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'My most recently used theme, inspired by Vercel Theme ▲ and One Dark Pro.'
    },
    {
      name: 'VoDScEe',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'My most recently used theme, inspired by Vercel Theme ▲ and One Dark Pro.'
    },
    {
      name: 'RaDroipn',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: "The best all-on-one bookmark manager I've ever seen and used."
    },
    {
      name: 'MdHaonr',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'A one-click camera check, right from the menu bar'
    }
  ]
  const web_projectCategories = [
    // vscode, edge, obsidian, git for sync , virtualbox, phtoshop, dngrep, other utilities,extensions and tools for android (great way to credit them)
    {
      name: 'VoDScEe',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'My most recently used theme, inspired by Vercel Theme ▲ and One Dark Pro.'
    },
    {
      name: 'VoDScEe',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'My most recently used theme, inspired by Vercel Theme ▲ and One Dark Pro.'
    },
    {
      name: 'VoDScEe',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'My most recently used theme, inspired by Vercel Theme ▲ and One Dark Pro.'
    },
    {
      name: 'VoDScEe',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'My most recently used theme, inspired by Vercel Theme ▲ and One Dark Pro.'
    },
    {
      name: 'RaDroipn',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: "The best all-on-one bookmark manager I've ever seen and used."
    },
    {
      name: 'MdHaonr',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'A one-click camera check, right from the menu bar'
    }
  ]
  const other_projectCategories = [
    // vscode, edge, obsidian, git for sync , virtualbox, phtoshop, dngrep, other utilities,extensions and tools for android (great way to credit them)
    {
      name: 'VoDScEe',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'My most recently used theme, inspired by Vercel Theme ▲ and One Dark Pro.'
    },
    {
      name: 'VoDScEe',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'My most recently used theme, inspired by Vercel Theme ▲ and One Dark Pro.'
    },
    {
      name: 'VoDScEe',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'My most recently used theme, inspired by Vercel Theme ▲ and One Dark Pro.'
    },
    {
      name: 'VoDScEe',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'My most recently used theme, inspired by Vercel Theme ▲ and One Dark Pro.'
    },
    {
      name: 'RaDroipn',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: "The best all-on-one bookmark manager I've ever seen and used."
    },
    {
      name: 'MdHaonr',
      link: '#',
      cover: 'https://placehold.co/600x400',
      title: 'Lorem title',
      domain: 'Lorem domain',
      excerpt: 'Lorem excert',
      note: 'Lorem note',
      description: 'A one-click camera check, right from the menu bar'
    }
  ]
  return (
    <ScrollArea useScrollAreaId>
      <GradientBg2 />
      <FloatingHeader scrollTitle="Stack" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Projects" />
  

          <div>
            <Button asChild variant="link" className="inline px-0">
              <Link href="#">
                <h2 className="mb-4 mt-8">Web Projects</h2>
              </Link>
            </Button>
            <Suspense fallback={<ScreenLoadingSpinner />}>
              <div className="flex flex-col items-stretch gap-12">
                <Carousel>
                  <CarouselContent>
                    {wp_projectCategories.map((item, index) => (
                      <>
                        <CarouselItem className="basis-1/2">
                          <a
                            key={index}
                            className="thumbnail-shadow flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 transition-colors duration-300 hover:bg-gray-100"
                            href={`${item.link}?ref=manmeets.vercel.app`}
                            target="_blank"
                            rel="noopener noreferrer"
                            // data-bookmark-order={order}
                          >
                            <span className="aspect-[1200/630] overflow-hidden rounded-lg">
                              <img
                                src={item.cover || '/assets/fallback.avif'}
                                alt={item.title}
                                width={1200}
                                height={630}
                                // loading={order < 2 ? 'eager' : 'lazy'}
                                className="aspect-[1200/630] animate-reveal rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
                                // onError={(e) => {
                                //   e.target.onerror = null
                                //   e.target.src = '/assets/fallback.avif'
                                // }}
                                // eslint-disable-next-line react/no-unknown-property
                                nopin="nopin"
                              />
                            </span>
                            <div className="flex flex-col gap-1">
                              <h2 className="line-clamp-4 text-lg leading-snug">{item.title}</h2>
                              <span className="line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-500">
                                <Link2Icon size={16} />
                                {item.domain}
                              </span>
                              <span className="line-clamp-6 text-sm">{item.excerpt || item.note}</span>
                            </div>
                          </a>
                        </CarouselItem>
                      </>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </Suspense>
          </div>

          <div>
            <Button asChild variant="link" className="inline px-0">
              <Link href="#">
                <h2 className="mb-4 mt-8">Wordpress Websites</h2>
              </Link>
            </Button>
            <Suspense fallback={<ScreenLoadingSpinner />}>
              <div className="flex flex-col items-stretch gap-12">
                <Carousel>
                  <CarouselContent>
                    {wp_projectCategories.map((item, index) => (
                      <>
                        <CarouselItem className="basis-1/2">
                          <a
                            key={index}
                            className="thumbnail-shadow flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 transition-colors duration-300 hover:bg-gray-100"
                            href={`${item.link}?ref=manmeets.vercel.app`}
                            target="_blank"
                            rel="noopener noreferrer"
                            // data-bookmark-order={order}
                          >
                            <span className="aspect-[1200/630] overflow-hidden rounded-lg">
                              <img
                                src={item.cover || '/assets/fallback.avif'}
                                alt={item.title}
                                width={1200}
                                height={630}
                                // loading={order < 2 ? 'eager' : 'lazy'}
                                className="aspect-[1200/630] animate-reveal rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
                                // onError={(e) => {
                                //   e.target.onerror = null
                                //   e.target.src = '/assets/fallback.avif'
                                // }}
                                // eslint-disable-next-line react/no-unknown-property
                                nopin="nopin"
                              />
                            </span>
                            <div className="flex flex-col gap-1">
                              <h2 className="line-clamp-4 text-lg leading-snug">{item.title}</h2>
                              <span className="line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-500">
                                <Link2Icon size={16} />
                                {item.domain}
                              </span>
                              <span className="line-clamp-6 text-sm">{item.excerpt || item.note}</span>
                            </div>
                          </a>
                        </CarouselItem>
                      </>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </Suspense>
          </div>
          <div>
            <Button asChild variant="link" className="inline px-0">
              <Link href="#">
                <h2 className="mb-4 mt-8">User Interfaces</h2>
              </Link>
            </Button>
            <Suspense fallback={<ScreenLoadingSpinner />}>
              <div className="flex flex-col items-stretch gap-12">
                <Carousel>
                  <CarouselContent>
                    {wp_projectCategories.map((item, index) => (
                      <>
                        <CarouselItem className="basis-1/2">
                          <a
                            key={index}
                            className="thumbnail-shadow flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 transition-colors duration-300 hover:bg-gray-100"
                            href={`${item.link}?ref=manmeets.vercel.app`}
                            target="_blank"
                            rel="noopener noreferrer"
                            // data-bookmark-order={order}
                          >
                            <span className="aspect-[1200/630] overflow-hidden rounded-lg">
                              <img
                                src={item.cover || '/assets/fallback.avif'}
                                alt={item.title}
                                width={1200}
                                height={630}
                                // loading={order < 2 ? 'eager' : 'lazy'}
                                className="aspect-[1200/630] animate-reveal rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
                                // onError={(e) => {
                                //   e.target.onerror = null
                                //   e.target.src = '/assets/fallback.avif'
                                // }}
                                // eslint-disable-next-line react/no-unknown-property
                                nopin="nopin"
                              />
                            </span>
                            <div className="flex flex-col gap-1">
                              <h2 className="line-clamp-4 text-lg leading-snug">{item.title}</h2>
                              <span className="line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-500">
                                <Link2Icon size={16} />
                                {item.domain}
                              </span>
                              <span className="line-clamp-6 text-sm">{item.excerpt || item.note}</span>
                            </div>
                          </a>
                        </CarouselItem>
                      </>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </Suspense>
          </div>
          
          <div>
            <Button asChild variant="link" className="inline px-0">
              <Link href="#">
                <h2 className="mb-4 mt-8">Others</h2>
              </Link>
            </Button>
            <Suspense fallback={<ScreenLoadingSpinner />}>
              <div className="flex flex-col items-stretch gap-12">
                <Carousel>
                  <CarouselContent>
                    {wp_projectCategories.map((item, index) => (
                      <>
                        <CarouselItem className="basis-1/2">
                          <a
                            key={index}
                            className="thumbnail-shadow flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 transition-colors duration-300 hover:bg-gray-100"
                            href={`${item.link}?ref=manmeets.vercel.app`}
                            target="_blank"
                            rel="noopener noreferrer"
                            // data-bookmark-order={order}
                          >
                            <span className="aspect-[1200/630] overflow-hidden rounded-lg">
                              <img
                                src={item.cover || '/assets/fallback.avif'}
                                alt={item.title}
                                width={1200}
                                height={630}
                                // loading={order < 2 ? 'eager' : 'lazy'}
                                className="aspect-[1200/630] animate-reveal rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
                                // onError={(e) => {
                                //   e.target.onerror = null
                                //   e.target.src = '/assets/fallback.avif'
                                // }}
                                // eslint-disable-next-line react/no-unknown-property
                                nopin="nopin"
                              />
                            </span>
                            <div className="flex flex-col gap-1">
                              <h2 className="line-clamp-4 text-lg leading-snug">{item.title}</h2>
                              <span className="line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-500">
                                <Link2Icon size={16} />
                                {item.domain}
                              </span>
                              <span className="line-clamp-6 text-sm">{item.excerpt || item.note}</span>
                            </div>
                          </a>
                        </CarouselItem>
                      </>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </Suspense>
          </div>

        </div>
      </div>
    </ScrollArea>
  )
}

export async function generateMetadata() {
  const seoData = await getPageSeo('projects')
  if (!seoData) return null

  const {
    seo: { title, description }
  } = seoData
  const siteUrl = '/projects'

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
