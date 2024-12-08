import { FloatingHeader } from '@/components/floating-header'
import { GradientBg2 } from '@/components/gradient-bg'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll-area'
import { ProjectCard } from './project-card'
import { Button } from '@/components/ui/button'
import { Download, DownloadIcon } from 'lucide-react'

export default async function Projects() {
  const web_projectCategories = [
    {
      title: 'MistWrite',
      link: '#',
      tags: ['Frontend UI', 'React'],
      cover: 'https://placehold.co/600x400',
      domain: 'manmeets.vercel.app',
      excerpt: 'A curated collection of tools for efficient coding and debugging workflows.'
    },

    {
        title: 'Frontend Mentor solutions',
        link: '#',
        tags: ['Frontend UI', 'React'],
        cover: 'https://placehold.co/600x400',
        domain: 'manmeets.vercel.app',
        excerpt: 'Optimized setups for seamless browsing and developer tool integration.'
      },
    // {
    //   title: 'NFT Marketplace Dashboard',
    //   link: '#',
    //   tags: ['Frontend UI', 'React'],
    //   cover: 'https://placehold.co/600x400',
    //   domain: 'manmeets.vercel.app',
    //   excerpt: 'A curated collection of tools for efficient coding and debugging workflows.'
    // },
    // {
    //     title: 'RPG Level Up UI',
    //     link: '#',
    //     tags: ['Frontend UI', 'React'],
    //     cover: 'https://placehold.co/600x400',
    //     domain: 'manmeets.vercel.app',
    //     excerpt: 'A curated collection of tools for efficient coding and debugging workflows.'
    //   },
    // {
    //   title: 'Currency converter',
    //   link: '#',
    //   tags: ['Frontend UI', 'React'],
    //   cover: 'https://placehold.co/600x400',
    //   domain: 'manmeets.vercel.app',
    //   excerpt: 'A curated collection of tools for efficient coding and debugging workflows.'
    // },
    
    // {
    //   title: 'Productivity Dashboard',
    //   link: '#',
    //   tags: ['Frontend UI', 'React'],
    //   cover: 'https://placehold.co/600x400',
    //   domain: 'manmeets.vercel.app',
    //   excerpt: 'Optimized setups for seamless browsing and developer tool integration.'
    // },
    

    // {
    //   title: 'Quotes API PWA Notifications',
    //   link: '#',
    //   tags: ['Frontend UI', 'React'],
    //   cover: 'https://placehold.co/600x400',
    //   domain: 'manmeets.vercel.app',
    //   excerpt: 'Optimized setups for seamless browsing and developer tool integration.'
    // }
  ]

  const wp_projectCategories = [
    {
      title: 'ImpactHQ',
      cover: 'https://placehold.co/600x400',
      domain: 'Screenshots',
      excerpt: 'Business site - A robust platform tailored for impactful business workflows and collaborations.'
    },
    {
      title: 'Shopphoria',
      cover: 'https://placehold.co/600x400',
      domain: 'Screenshots',
      excerpt: 'E-commerce site - Streamlined solutions for modern e-commerce needs with an intuitive design.'
    },
    {
      title: 'DevDiary',
      cover: 'https://placehold.co/600x400',
      domain: 'Screenshots',
      excerpt: 'Personal Portfolio site - Your ultimate companion for showcasing projects and professional growth.'
    },
    {
      title: 'LeadGen',
      cover: 'https://placehold.co/600x400',
      domain: 'Screenshots',
      excerpt: 'Marketing Agency site - Innovative tools to generate leads and manage marketing campaigns effectively.'
    },
    {
      title: 'RxReady',
      cover: 'https://placehold.co/600x400',
      domain: 'Screenshots',
      excerpt: 'Medical Store site - Custom solutions for managing medical inventories and appointments.'
    },
    {
      title: 'Newsreader',
      cover: 'https://placehold.co/600x400',
      domain: 'Screenshots',
      excerpt: 'News site - A clean and responsive theme designed for delivering breaking news effortlessly.'
    },
    {
      title: 'RiskRadar',
      cover: 'https://placehold.co/600x400',
      domain: 'Screenshots',
      excerpt: 'Finance Consultancy site - A sleek framework for risk management and financial consulting firms.'
    },
    {
      title: 'Labofy',
      cover: 'https://placehold.co/600x400',
      domain: 'Screenshots',
      excerpt: 'Healthcare site - Advanced solutions for laboratory management and patient booking systems.'
    },
    {
      title: 'JethiTech',
      cover: 'https://placehold.co/600x400',
      domain: 'Screenshots',
      excerpt: 'Agency/Consulting site - An all-in-one suite for agencies to manage clients and projects seamlessly.'
    }
  ]

  const ui_projectCategories = [




    {
      title: '    Payment App',
      link: '#',
      tags: ['Frontend UI', 'React'],
      cover: 'https://placehold.co/600x400',
      domain: 'manmeets.vercel.app',
      excerpt: 'Comprehensive tools for creating and refining stunning user interfaces.'
    },
    {
      title: 'Skill-up platform',
      link: '#',
      tags: ['Frontend UI', 'React'],
      cover: 'https://placehold.co/600x400',
      domain: 'manmeets.vercel.app',
      excerpt: 'Comprehensive tools for creating and refining stunning user interfaces.'
    },
    {
      title: 'Expense Tracking App',
      link: '#',
      tags: ['Frontend UI', 'React'],
      cover: 'https://placehold.co/600x400',
      domain: 'manmeets.vercel.app',
      excerpt: 'Comprehensive tools for creating and refining stunning user interfaces.'
    },
    {
      title: 'Inventory Management Dashboard',
      link: '#',
      tags: ['Frontend UI', 'React'],
      cover: 'https://placehold.co/600x400',
      domain: 'manmeets.vercel.app',
      excerpt: 'A modern workspace for building and testing prototypes with real-world interactions.'
    }
  ]

  const other_projectCategories = [





    {
      title: 'Logo Designs',
      link: '#',
      tags: ['Frontend UI', 'React'],
      cover: 'https://placehold.co/600x400',
      domain: 'manmeets.vercel.app',
      excerpt: 'Essential utilities for photographers to organize and enhance their workflows.'
    },
    {
      title: 'Discord servers',
      link: '#',
      tags: ['Frontend UI', 'React'],
      cover: 'https://placehold.co/600x400',
      domain: 'manmeets.vercel.app',
      excerpt: 'Essential utilities for photographers to organize and enhance their workflows.'
    },
    {
      title: 'Gig Thumbnails',
      link: '#',
      tags: ['Frontend UI', 'React'],
      cover: 'https://placehold.co/600x400',
      domain: 'manmeets.vercel.app',
      excerpt: 'Essential utilities for photographers to organize and enhance their workflows.'
    },
    {
      title: 'Social Media post designs',
      link: '#',
      tags: ['Frontend UI', 'React'],
      cover: 'https://placehold.co/600x400',
      domain: 'manmeets.vercel.app',
      excerpt: 'Essential utilities for photographers to organize and enhance their workflows.'
    },
    {
      title: 'Personal Portfolio',
      link: '#',
      tags: ['Frontend UI', 'React'],
      cover: 'https://placehold.co/600x400',
      domain: 'manmeets.vercel.app',
      excerpt: 'A collection of indispensable utilities for day-to-day productivity.'
    }
  ]

  return (
    <ScrollArea useScrollAreaId>
      <GradientBg2 />
      <FloatingHeader scrollTitle="Stack" />
      <div className="content-wrapper">
        <div className="content">
          <div className='flex items-start justify-between' >
          <PageTitle title="Projects" />
<Button className="inline-flex gap-2 items-center justify-center" >
    <DownloadIcon  size={14} strokeWidth={3} />
    Resume
</Button>
          </div>
          Projects made so far
          Projects by Manmeet Singh ( @manmeet-ms ).
Explore the categorized content below or use the  above for all demos and mockups.
Click the  next to each project to view live projects.
          <div>
            <section className="body-font py-12 text-gray-600">
              <div className="container mx-auto ">
                <div className="mb-4 flex w-full flex-wrap">
                  <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
                    <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">Web Projects</h1>
                    <div className="h-1 w-20 rounded bg-primary "></div>
                  </div>
                  <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
                    Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
                    farm-to-table
                  </p>
                </div>
                <div className="-m-4 flex flex-wrap">
                  {web_projectCategories.map((project, index) => (
                    <>
                      <ProjectCard
                        key={index}
                        link={project.link}
                        cover={project.cover}
                        title={project.title}
                        tags={project.tags}
                        domain={project.domain}
                        excerpt={project.excerpt}
                        note={project.note}
                      />
                    </>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className="body-font py-12 text-gray-600">
              <div className="container mx-auto ">
                <div className="mb-4 flex w-full flex-wrap">
                  <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
                    <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">WordPress Sites</h1>
                    <div className="h-1 w-20 rounded bg-primary "></div>
                  </div>
                  <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
                    Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
                    farm-to-table
                  </p>
                </div>
                <div className="-m-4 flex flex-wrap">
                  {wp_projectCategories.map((project, index) => (
                    <>
                      <ProjectCard
                        key={index}
                        link={project.link}
                        cover={project.cover}
                        title={project.title}
                        tags={project.tags}
                        domain={project.domain}
                        excerpt={project.excerpt}
                        note={project.note}
                      />
                    </>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className="body-font py-12 text-gray-600">
              <div className="container mx-auto ">
                <div className="mb-4 flex w-full flex-wrap">
                  <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
                    <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
                      User Interface Designs
                    </h1>
                    <div className="h-1 w-20 rounded bg-primary "></div>
                  </div>
                  <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
                    Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
                    farm-to-table
                  </p>
                </div>
                <div className="-m-4 flex flex-wrap">
                  {ui_projectCategories.map((project, index) => (
                    <>
                      <ProjectCard
                        key={index}
                        link={project.link}
                        cover={project.cover}
                        title={project.title}
                        tags={project.tags}
                        domain={project.domain}
                        excerpt={project.excerpt}
                        note={project.note}
                      />
                    </>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className="body-font py-12 text-gray-600">
              <div className="container mx-auto ">
                <div className="mb-4 flex w-full flex-wrap">
                  <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
                    <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">Others</h1>
                    <div className="h-1 w-20 rounded bg-primary "></div>
                  </div>
                  <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
                    Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
                    farm-to-table
                  </p>
                </div>
                <div className="-m-4 flex flex-wrap">
                  {other_projectCategories.map((project, index) => (
                    <>
                      <ProjectCard
                        key={index}
                        link={project.link}
                        cover={project.cover}
                        title={project.title}
                        tags={project.tags}
                        domain={project.domain}
                        excerpt={project.excerpt}
                        note={project.note}
                      />
                    </>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
