import { FloatingHeader } from '@/components/floating-header'
import { GradientBg2 } from '@/components/gradient-bg'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll-area'
import { ProjectCard } from './project-card'
import { Button } from '@/components/ui/button'
import { Download, DownloadIcon } from 'lucide-react'
import {WEB_ProjectCategories
  ,WP_ProjectCategories
  ,UI_ProjectCategories
  ,OTHER_ProjectCategories} from "../../lib/constants"

  export default async function Projects() {


  return (
    <ScrollArea useScrollAreaId>
      <GradientBg2 />
      <FloatingHeader scrollTitle="Projects" />
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
                  {WEB_ProjectCategories.map((project, index) => (
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
                  {WP_ProjectCategories.map((project, index) => (
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
                  {UI_ProjectCategories.map((project, index) => (
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
                  {OTHER_ProjectCategories.map((project, index) => (
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
