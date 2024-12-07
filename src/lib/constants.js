import {
  ArmchairIcon,
  FolderTreeIcon,
  GithubIcon,
  InfoIcon,
  InstagramIcon,
  LinkedinIcon,
  MessageSquareIcon,
  NavigationIcon,
  Notebook,
  PencilLineIcon,
  SparklesIcon,
  Wand2Icon
} from 'lucide-react'

export const PROFILES = {

  github: {
    title: 'GitHub',
    url: 'https://github.com/manmeet-ms',
    icon: <GithubIcon size={16} />
  },
  linkedin: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/manmeets-/',
    icon: <LinkedinIcon size={16} />
  },
  readcv: {
    title: 'Read.cv',
    url: 'https://read.cv/manmeet'
  },
  instagram: {
    title: 'Instagram',
    url: 'https://www.instagram.com/manmeets__/',
    icon: <InstagramIcon size={16} />
  },
  twitter: {
    title: 'X (Twitter)',
    username: 'onurschu',
    url: 'https://x.com/manmeets_dev',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    )
  },
 
  // medium: {
  //   title: 'Medium',
  //   url: 'https://suyalcinkaya.medium.com'
  // },
  // soundcloud: {
  //   title: 'Soundcloud',
  //   url: 'https://soundcloud.com/jagerman'
  // },
  // youtube: {
  //   title: 'YouTube',
  //   url: 'https://www.youtube.com/c/jagermanmusic',
  //   icon: <YoutubeIcon size={16} />
  // },
  // bluesky: {
  //   title: 'Bluesky',
  //   url: 'https://staging.bsky.app/profile/manmeets.vercel.app'
  // },
  
  // pinterest: {
  //   title: 'Pinterest',
  //   url: 'https://nl.pinterest.com/onurschu'
  // }
}

export const TWEETS_COLLECTION_ID = 15896982

export const COLLECTION_IDS = [
  18259129,
  15968768,
  23598938,
  16949672,
  15807896,
  15807897,
  15969648,
  16338467,
  TWEETS_COLLECTION_ID,
  25589709,
  17139082,
  22029101,
  39696243
]

export const LINKS = [
  {
    href: '/',
    label: 'Home',
    icon: <SparklesIcon size={16} />
  },
  // {
  //   href: '/about',
  //   label: 'About',
  //   icon: <Notebook size={16} />
  // },
  
  // {
  //   href: '/writing',
  //   label: 'Writing',
  //   icon: <PencilLineIcon size={16} />
  // },
  // {
  //   href: '/about',
  //   label: 'About',
  //   icon: <InfoIcon size={16} />
  // },
  {
    href: '/projects',
    label: 'Projects',
    icon: <FolderTreeIcon size={16} />
  },
  {
    href: '/testimonials',
    label: 'Testimonials',
    icon: <MessageSquareIcon size={16} />
  },
  {
    href: '/stack',
    label: 'Stack',
    icon: <Wand2Icon size={16} />
  },
  
  {
    href: '/journey',
    label: 'Journey',
    icon: <NavigationIcon size={16} />
  },
  {
    href: '/workspace',
    label: 'Workspace',
    icon: <ArmchairIcon size={16} />
  }, // used as about page
 

]

export const RESUME_ITEMS = [


  {
    title: 'Wordpress Website',
    description: 'I remotely worked as an intern Wordpress Developer in my academic year. Presently, I am helping people with their brands as a freelancer.',
    cateogory: ['Wordpress', 'Wordpress', 'Wordpress', 'Wordpress'],
    url: 'RE'
  },
  {
    title: 'Wordpress Website',
    description: 'I remotely worked as an intern Wordpress Developer in my academic year. Presently, I am helping people with their brands as a freelancer.',
    cateogory: ['Wordpress', 'Wordpress', 'Wordpress', 'Wordpress'],
    url: 'RE'
  },
  {
    title: 'Wordpress Website',
    description: 'I remotely worked as an intern Wordpress Developer in my academic year. Presently, I am helping people with their brands as a freelancer.',
    cateogory: ['Wordpress', 'Wordpress', 'Wordpress', 'Wordpress'],
    url: 'RE'
  },
  {
    title: 'Wordpress Website',
    description: 'I remotely worked as an intern Wordpress Developer in my academic year. Presently, I am helping people with their brands as a freelancer.',
    cateogory: ['Wordpress', 'Wordpress', 'Wordpress', 'Wordpress'],
    url: 'RE'
  },
]
export const WORKSPACE_ITEMS = [

  {
    title: 'IKEA Övning Footrest',
    url: 'https://www.ikea.com/nl/en/p/oevning-multifunctional-ergonomic-footrest-00552020/',
    specs: 'Gray/Blue'
  }
]

export const SCROLL_AREA_ID = 'scroll-area'
export const MOBILE_SCROLL_THRESHOLD = 20
export const SUPABASE_TABLE_NAME = 'pages'

export const SUBMIT_BOOKMARK_FORM_TITLE = 'Submit a bookmark'
export const SUBMIT_BOOKMARK_FORM_DESCRIPTION =
  "Send me a website you like and if I like it too, you'll see it in the bookmarks list. With respect, please do not submit more than 5 websites a day."
export const MAX_BOOKMARK_SUBMISSIONS_PER_DAY = 5
export const BOOKMARK_SUBMISSION_COUNT_COOKIE_NAME = 'formSubmissionCount'

export const CONTENT_TYPES = {
  PAGE: 'page',
  POST: 'post',
  LOGBOOK: 'logbook'
}
