import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { ExperienceListLayout } from '@/components/experience-list-layout'
import { EXPERIENCE_POSTS } from '@/lib/experience-posts'
import { Button } from '@/components/ui/button'
import { DownloadIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
export const metadata = {
  title: 'Experience',
  description: 'Notes and articles by Manmeet Singh.'
}
const logos   =  [
    {
      src: "https://images.seeklogo.com/logo-png/39/1/linkedin-new-2020-logo-png_seeklogo-393964.png",
      alt: "linkedin",
      className: "h-7 w-auto",
      href: "https://www.linkedin.com/in/manmeet-ms/",
    },
    // {
    //   src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/logos/fictional-company-logo-2.svg",
    //   alt: "Company logo 2",
    //   className: "h-7 w-auto",
    //   href: "https://www.shadcnblocks.com",
    // },
    // {
    //   src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/logos/fictional-company-logo-3.svg",
    //   alt: "Company logo 3",
    //   className: "h-7 w-auto",
    //   href: "https://www.shadcnblocks.com",
    // },
    
  ];
export default function ExperiencePage() {
  return (
    <>
      <ScrollArea className="lg:hidden">
        <FloatingHeader title="Experience" />
        <ExperienceListLayout list={EXPERIENCE_POSTS} isMobile passedType="company" />
        EXPERIENCE_POSTS
        <ExperienceListLayout list={EXPERIENCE_POSTS} isMobile passedType="projects" />

      </ScrollArea>
      <main className="hidden px-8 py-12 lg:block">
        <h1 className="text-2xl font-semibold tracking-tight">Experience</h1>
        <p className="mt-2 max-w-xl text-sm text-gray-600">
          Notes on the work, ideas, and details behind the experiences I build.
        </p>
         
 
         <section className={cn("py-32")}>
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl opacity-40">&middot;&nbsp; &middot;&nbsp; &middot;</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-12">
            {logos.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="flex aspect-3/1 w-28 items-center justify-center sm:w-32"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={cn(
                    logo.className,
                    "h-auto max-h-7 w-auto object-contain rounded-none  border-none dark:invert",
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      </main>
    </>
  )
}