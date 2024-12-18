
import { FloatingHeader } from '@/components/floating-header'
import { GradientBg2 } from '@/components/gradient-bg'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll-area'
import { ProjectCard } from './project-card'
import { Button } from '@/components/ui/button'
import { Download, DownloadIcon, FolderIcon, Link2Icon } from 'lucide-react'
import {WEB_ProjectCategories
  ,WP_ProjectCategories
  ,UI_ProjectCategories
  ,OTHER_ProjectCategories} from "../../lib/constants"
import { MarkdownRenderer } from '@/components/markdown-renderer'

  
  export default async function Projects() {


  return (
    <ScrollArea useScrollAreaId>
      <GradientBg2 />
      <FloatingHeader scrollTitle="Projects" />
      <div className="content-wrapper">
        <div className="content">
          <div className='flex items-start justify-between' >
          <PageTitle title="Projects" />
          <a className="hidden lg:block" target='_blank' href='/manmeetsingh-resume.pdf' download>
<Button className="inline-flex gap-2 items-center justify-center" >
    <DownloadIcon  size={14} strokeWidth={3} />
    Resume
</Button>
</a>
          </div>
        <MarkdownRenderer>
        Explore the categorized content below or access all demos and mockups [here](https://drive.google.com/open?id=1-1Fc9mpxTfLETmfo5FW-VOjlAE4rttbQ&usp=drive_fs). Live versions are hinted with the 

        </MarkdownRenderer><Link2Icon className='mx-1 text-slate-900 p-1 inline-flex -mt-0.5 bg-slate-300/80 border border-slate-600/20 rounded' strokeWidth={3} size={20}/>icon, the previews one have the <FolderIcon className='text-slate-900 p-1 inline-flex -mt-0.5 bg-slate-300/80 border border-slate-600/20 rounded' strokeWidth={3.5} size={20}/> icon.
          <div>
            <section className="body-font py-12 text-slate-600">
              <div className="container mx-auto ">
                
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
          <div>
          
          </div>
          <div>
           
          </div>
          <div>
         
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
