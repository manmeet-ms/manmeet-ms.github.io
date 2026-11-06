import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Suspense } from 'react'

import { FloatingHeader } from '@/components/floating-header'
import { GradientBg } from '@/components/gradient-bg'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { PageTitle } from '@/components/page-title'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { ScrollArea } from '@/components/scroll-area'

export default async function Stack() {
  const stackItems = [
   
    
    {
      name: 'VSCode',
      link: 'https://code.visualstudio.com',
      description:
        'Visual Studio Code is a streamlined code editor with support for development operations like debugging, task running, and version control, I have also used JetBrains IDEs.'
    },
    // {
    //   name: 'Edge',
    //   link: 'https://www.microsoft.com/en-us/edge/download',
    //   description: 'A decent browser for daily tasks. Occasionally, I switch to Mozilla Firefox for development purposes.'
    // },
    {
      name: 'Obsidian',
      link: 'https://obsidian.md',
      description: 'An exceptional tool for knowledge management and cross platform note-taking.'
    },

    {
      name: 'Todoist',
      link: 'https://todoist.com',
      description: 'I am able to capture tasks with its smart date recongnition feature.'
    },

    {
      name: 'Mistwrite',
      link: 'https://mistwrite.vercel.app',
      description: 'Fastest way to create self-destructing notes  .'
    },
    {
      name: 'OBS Studio',
      link: 'https://obsproject.com',
      description: 'Open-source software for recording and live streaming during meetings.'
    },
    {
      name: 'Figma',
      link: 'https://figma.com',
      description:
        'I use Figma for creating user interfaces. It has got commendable offline-work features.'
    },
 
    {
      name: 'Fontbase',
      link: 'https://fontba.se',
      description: 'An lightning-fast tool for activating, organizing fonts with a beautiful UI.'
    },
    {
      name: 'Oh-My-Zsh',
      link: 'https://ohmyz.sh',
      description:
        'An open-source zsh framework packed with plugins, themes, and helpers to increase terminal aesthetics and efficiency.'
    },

    {
      name: 'PowerToys',
      link: 'https://learn.microsoft.com/en-us/windows/powertoys',
      description:
        'Superuseful set of utilities that increase productivity in my workflow. Frequently used tools are Color Picker, Image Resizer, Power Rename, Text Extractor.'
    },


    {
      name: 'Bitwarden',
      link: 'https://bitwarden.com',
      description: 'A trusted password manager with cross platform support.'
    },
   
    {
      name: 'Termux',
      link: 'https://f-droid.org/packages/com.termux',
      description:
        'Terminal environment on Android'
    },
  ]


  const notableItems = [
    {
      name: 'Upscayl',
      link: 'https://upscayl.org',
      description: 'An open-source, one-click solution for bulk image upscaling with great results.'
    },
    {
      name: 'ADM',
      link: 'https://play.google.com/store/apps/details?id=com.dv.adm',
      description: 'Significantly increases download speed for large files, on Android.'
    },
    {
      name: 'Adobe Photoshop',
      link: 'https://www.adobe.com/in/products/photoshop.html',
      description: 'My go-to tool for bulk editing and image processing.'
    },

    {
      name: 'VMs',
      link: 'https://www.virtualbox.org/wiki/Downloads',
      description: 'Ideal for testing new OSes and software in a sandboxed environment.'
    },

    {
      name: 'Localsend',
      link: 'https://localsend.org/download',
      description: 'Decent file transfer software between PC and mobile'
    },

    {
      name: 'MixPlorer',
      link: 'https://mixplorer.com/',
      description: 'Android file manager with tons of customizations and useful features at one place,you can even create server with that!'
    },

    {
      name: 'TreeSize',
      link: 'https://www.jam-software.com/treesize',
      description:
        'A powerful graphical tool to manage storage systems, showing folder sizes with an Explorer-like interface.'
    },
    {
      name: 'dnGrep',
      link: 'https://dngrep.github.io',
      description:
        'A powerful search tool for text, RegEx, XPath, and phonetic queries across files, archives, and PDFs.'
    }
  ]
  return (
    <ScrollArea useScrollAreaId>
      <GradientBg />
      <FloatingHeader scrollTitle="Stack" />
      
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Stack" />
          <p>List of tools in my daily workflow.</p>
          <Suspense fallback={<ScreenLoadingSpinner />}>
            <div className="flex flex-col items-stretch gap-12">
              <ul className="mb-4 flex list-disc flex-col gap-0.5 pl-6">
                {stackItems.map((item, index) => (
                  <li key={index}>
                    <div className="[&amp;:has(+ul)]:mb-1 mb-4 leading-slacker last:mb-0">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link break-words after:content-['_↗']"
                        // className="link break-words"
                      >
                        {item.name}
                      </a>{' '}
                      —&nbsp;
                      {/* <Balancer> */}
                      <MarkdownRenderer>{item.description}</MarkdownRenderer>
                      {/* </Balancer> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Suspense>
          

          
          <div>
            <p className="inline mr-1">
            Other notable tools include 
            </p> 
            {notableItems.map((item)=>(
              <>
              
              <TooltipProvider>
              <Tooltip >
                <TooltipTrigger >
                <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" mr-1 link break-words after:content-[',']"
                        // className="link break-words"
                      >
                        {item.name}
                      </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

          
          </>
            ))}
            
            
            etc. Hover to know about them.
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
