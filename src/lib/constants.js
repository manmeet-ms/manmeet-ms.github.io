import {
  ArmchairIcon,
  FolderTreeIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MessageSquareIcon,
  NavigationIcon,
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
    url: 'https://www.linkedin.com/in/manmeets-',
    icon: <LinkedinIcon size={16} />
  },
  readcv: {
    title: 'Read.cv',
    url: 'https://read.cv/manmeet'
  },
  instagram: {
    title: 'Instagram',
    url: 'https://www.instagram.com/manmeets__',
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
  }

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
  //   icon: <InfoIcon size={16} />
  // },

  // {
  //   href: '/writing',
  //   label: 'Writing',
  //   icon: <PencilLineIcon size={16} />
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
  } ,
  // {
  //   href: '/resume',
  //   label: 'Resume',
  //   icon: <PaperclipIcon
  //    size={16} />
  // } ,
]

export const WEB_ProjectCategories = [
  {
    title: 'Mistwrite',
    link: 'https://mistwrite.vercel.app',
    tags: ['AppWrite', 'React', 'Tailwind', 'shadcn/ui'],
    cover: '/assets/project-covers/mistwrite-cover.png',
    domain: 'mistwrite.vercel.app',
    excerpt: 'A curated collection of tools for efficient coding and debugging workflows.'
  },
  
  
  
  {
    title: 'Linktrix',
    link: 'https://github.com/manmeet-ms/Linktrix.git',
    tags: [ 'React', 'Tailwind', 'shadcn/ui', 'template'],
    cover: '/assets/project-covers/linktrix-cover.png',
    domain: 'linktrix.vercel.app',
    excerpt: 'All links at one place, fully responsive template for any use case.'
  },
  // {
  //   title: 'Frontend Mentor solutions',
  //   link: '',
  //   tags: [''],
  //   cover: 'https://placehold.co/600x400',
  //   domain: 'Previews',
  //   excerpt: 'Optimized setups for seamless browsing and developer tool integration.'
  // },
  // {
  //   title: 'Marketplace Dashboard',
  //   link: '',
  //   tags: [''],
  //   cover: 'https://placehold.co/600x400',
  //   domain: 'Previews',
  //   excerpt: 'A curated collection of tools for efficient coding and debugging workflows.'
  // },
  // {
  //   title: 'RPG Level Up UI',
  //   link: '',
  //   tags: [''],
  //   cover: 'https://placehold.co/600x400',
  //   domain: 'Previews',
  //   excerpt: 'A curated collection of tools for efficient coding and debugging workflows.'
  // },
  // {
  //   title: 'Currency converter',
  //   link: '',
  //   tags: [''],
  //   cover: 'https://placehold.co/600x400',
  //   domain: 'Previews',
  //   excerpt: 'A curated collection of tools for efficient coding and debugging workflows.'
  // },

  // {
  //   title: 'Productivity Dashboard',
  //   link: '',
  //   tags: [''],
  //   cover: 'https://placehold.co/600x400',
  //   domain: 'Previews',
  //   excerpt: 'Optimized setups for seamless browsing and developer tool integration.'
  // },

  // {
  //   title: 'Quotes API PWA Notifications',
  //   link: '',
  //   tags: [''],
  //   cover: 'https://placehold.co/600x400',
  //   domain: 'Previews',
  //   excerpt: 'Optimized setups for seamless browsing and developer tool integration.'
  // }
]

export const WP_ProjectCategories = [
  {
    title: 'TheRefurbStore',
    link: 'https://therefurbstore.in/',
    tags: ['WordPress','E-commerce',  'Freelance'],
    cover: '/portfolio_ss/1_websites/Wordpress_Websites/TheRefurbStore_Ecommerce/threfurbstore-cover.jpeg',
    domain: 'therefurbstore.in',
    excerpt: 'Business site - A robust platform tailored for impactful business workflows and collaborations.'
  },
  {
    title: 'ImpactHQ',
    link: 'https://drive.google.com/open?id=17ksTbHXZEQ2K6iN-id9F-fBXLq7cSWmP&usp=drive_fs',
    tags: ['WordPress','Business', 'Landing page'],
    cover: '/portfolio_ss/1_websites/Wordpress_Websites/ImpactHQ_Business/Business_landing_page_full_site.jpeg',
    domain: 'Previews',
    excerpt: 'Business site - A robust platform tailored for impactful business workflows and collaborations.'
  },
  {
    title: 'Shopphoria',
    link: 'https://drive.google.com/open?id=17Dftt0r2aG8zpC4B2rccPL3zuNJPrGh2&usp=drive_fs',
    tags: ['WordPress','E-commerce', 'Store'],
    cover: '/portfolio_ss/1_websites/Wordpress_Websites/Shopporia_Ecommerce/cover_full.jpeg',
    domain: 'Previews',
    excerpt: 'E-commerce site - Streamlined solutions for modern e-commerce needs with an intuitive design.'
  },
  {
    title: 'DevDiary',
    link: 'https://drive.google.com/open?id=17PSll2PnEhLBIVrSL8Dyzz1DC4XqwG4Q&usp=drive_fs',
    tags: ['WordPress','Personal Portfolio'],
    cover: '/portfolio_ss/1_websites/Wordpress_Websites/DevDiary_Personal_Portfolio/Screenshot_25-7-2024_162114_localhost.jpeg',
    domain: 'Previews',
    excerpt: 'Personal Portfolio site - Your ultimate companion for showcasing projects and professional growth.'
  },
  {
    title: 'LeadGen',
    link: 'https://drive.google.com/open?id=17UvBc4z41csYkbESArB9IohGIeRHdUtM&usp=drive_fs',
    tags: ['WordPress','Markeking','CRM'],
    cover: '/portfolio_ss/1_websites/Wordpress_Websites/LeadGen_Marketing/Marketing lead generation full site.jpeg',
    domain: 'Previews',
    excerpt: 'Marketing Agency site - Innovative tools to generate leads and manage marketing campaigns effectively.'
  },
  {
    title: 'RxReady',
    link: 'https://drive.google.com/open?id=17CBDUOjXrYIrFqwWR6Jdmh-ia3R0h2U6&usp=drive_fs',
    tags: ['WordPress','Medical store'],
    cover: '/portfolio_ss/1_websites/Wordpress_Websites/MedicalStore/Screenshot_25-9-2024_181142_localhost.jpeg',
    domain: 'Previews',
    excerpt: 'Medical Store site - Custom solutions for managing medical inventories and appointments.'
  },
  {
    title: 'Newsreader',
    link: 'https://drive.google.com/open?id=107FnX_WnTCMbk6CiNy5sJSLd50cr_nVe&usp=drive_fs',
    tags: ['WordPress','News'],
    cover: '/portfolio_ss/1_websites/Wordpress_Websites/Newsreader_News/Newsreader - News Site.jpeg',
    domain: 'Previews',
    excerpt: 'News site - A clean and responsive theme designed for delivering breaking news effortlessly.'
  },
  {
    title: 'RiskRadar',
    link: 'https://drive.google.com/open?id=17TnQikx61M_08U3kppE_cAgJk6JjEtGr&usp=drive_fs',
    tags: ['WordPress','Finance','Consultancy'],
    cover: '/portfolio_ss/1_websites/Wordpress_Websites/RiskRadar_Financial_Consultancy/Finance Insurance Consultancy 4 21-7-2024_164622_localhost.png',
    domain: 'Previews',
    excerpt: 'Finance Consultancy site - A sleek framework for risk management and financial consulting firms.'
  },
  // {
  //   title: 'Labofy',
  //   link: '',
  //   tags: ['WordPress',''],
  //   cover: '',
  //   domain: 'Previews',
  //   excerpt: 'Healthcare site - Advanced solutions for laboratory management and patient booking systems.'
  // },
  // {
  //   title: 'JethiTech',
  //   link: '',
  //   tags: ['WordPress',''],
  //   cover: '',
  //   domain: 'Previews',
  //   excerpt: 'Agency/Consulting site - An all-in-one suite for agencies to manage clients and projects seamlessly.'
  // }
  {
    title: 'Past experiences',
    link: 'https://drive.google.com/open?id=108o8SnP691gngeeH-KTwYu5efmNssxBN&usp=drive_fs',
    tags: ['Intership'],
    // cover: 'https://img.freepik.com/free-photo/door-leading-magical-world_23-2151038219.jpg?ga=GA1.1.342254830.1718120885&semt=ais_hybrid',
    cover: 'https://img.freepik.com/premium-photo/digital-illustration-girl-falling-through-clock-futuristic-cityscape_1371881-3362.jpg?ga=GA1.1.342254830.1718120885&semt=ais_hybrid',
    domain: 'Drive Links',
    excerpt: 'As an intern, I have worked with Labofy and Jethitech Solutions, managing and creating new websites while improving UX.'
  } 
]

export const UI_ProjectCategories = [
  {
    title: '    Payment App',
    link: 'https://drive.google.com/open?id=11AxvOmMyNdj9AE5NVvpcKwaP6ZlZMVpR&usp=drive_fs',
    tags: ['Figma', 'UI'],
    cover: '/assets/project-covers/payment-app-cover.png',
    domain: 'Previews',
    excerpt: 'Comprehensive tools for creating and refining stunning user interfaces.'
  },
  {
    title: 'Skill-up platform',
    link: 'https://drive.google.com/open?id=1-P8oOprY_S3M6y4ONKVk3a5sVc1r3M0n&usp=drive_fs',
    tags: ['Hackathon', 'Figma', 'UI'],
    cover: '/assets/project-covers/skillhashi-cover.png',
    domain: 'Previews',
    excerpt: 'Comprehensive tools for creating and refining stunning user interfaces.'
  },
  // {
    //   title: 'Expense Tracking App',
    //   link: 'https://drive.google.com/open?id=1-P8oOprY_S3M6y4ONKVk3a5sVc1r3M0n&usp=drive_fs',
    // tags: ['Hackathon', 'Figma', 'UI'],
  //   cover: '/assets/project-covers',
  //   domain: 'Previews',
  //   excerpt: 'Comprehensive tools for creating and refining stunning user interfaces.'
  // },
  // {
  //   title: 'Inventory Management Dashboard',
  //   link: 'https://drive.google.com/open?id=1-P8oOprY_S3M6y4ONKVk3a5sVc1r3M0n&usp=drive_fs',
  //   tags: [''],
  //   cover: '/assets/project-covers',
  //   domain: 'Previews',
  //   excerpt: 'A modern workspace for building and testing prototypes with real-world interactions.'
  // }
]

export const OTHER_ProjectCategories = [
  {
    title: 'Logo Designs',
    tags:['hobby'],
    link: 'https://drive.google.com/open?id=1-T58bYcS2L_QG8D7fxJCf9V0s1alXPh0&usp=drive_fs',
    cover: '/assets/project-covers/logo-design-cover.png',
    domain: 'Previews',
    excerpt: 'Essential utilities for photographers to organize and enhance their workflows.'
  },
  {
    title: 'Discord servers',
    link: 'https://drive.google.com/open?id=1-Au5xZWU2yx3IIPJ7h0iIjNrrudWE3fy&usp=drive_fs',
    tags: ['freelance', 'international'],
    cover: '/assets/project-covers/dc-cover.png',
    domain: 'Previews',
    excerpt: 'Essential utilities for photographers to organize and enhance their workflows.'
  },
  {
    title: 'Gig Thumbnails and social media posts',
    link: 'https://drive.google.com/open?id=1-9lPkY3TGo9d06umyZc9E_VDKpnxRq_5&usp=drive_fs',
    tags: ['freelance','thumbnails','self'],
    cover: '/assets/project-covers/gig-thumbnails-cover.png',    domain: 'Previews',
    excerpt: 'Essential utilities for photographers to organize and enhance their workflows.'
  },
  // {
  //   title: 'Social Media post designs',
  //   link: 'https://drive.google.com/open?id=1-EeivEx1iQDo_ceEoJkMEu06MCvkTzz6&usp=drive_fs',
  //   tags: ['self'],
  //   cover: '/assets/project-covers/posts-cover.png',    
  //   domain: 'Previews',
  //   excerpt: 'Essential utilities for photographers to organize and enhance their workflows.'
  // },
  // {
  //   title: 'Personal Portfolio',
  //   link: '',
  //   tags: [''],
  //   cover: 'https://placehold.co/600x400',
  //   domain: 'manmeets.vercel.app',
  //   excerpt: 'A collection of indispensable utilities for day-to-day productivity.'
  // }
]

export const FEATURED_ProjectTable_Home = [
  {
    title: 'Mistwrite',
    excerpt: 'I recently made this utility to provide quick, clutter-free temporary note-taking.',
    url: 'https://mistwrite.vercel.app'
  },
  {
    title: 'Linktrix',
    excerpt: 'Easy to use, LinkInBio/professional type links management open-source template',
    url: 'https://github.com/manmeet-ms/Linktrix.git'
  },

  {
    title: 'WordPress Sites',
    excerpt: 'Showcase WordPress sites I managed during my internships as well as personal projects, tailored for various needs.',
    url: '/projects#wordpress'
  },

  // {
  //   title: 'Discord Servers',
  //   excerpt: 'Servers I setup for my freelance international as well as Indian clients, priortizinf their requirements, server aesthetics and funtionality in mind.',
  //   url: '/projects#others'
  // },

  // {
  //   title: 'Frontend Mentor Solutions',
  //   excerpt: 'Started back in 2019, will be resumed soon, contains solutions to frontend projects at the platform.',
  //   url: 'https://fms-projects.vercel.app'
  // ,},  
  {
    title: 'Thumbnails & Posts for my Social Media',
    excerpt: 'I also design posts, thumbnails and other graphic art as per needs for my gigs and Instagram posts.',
    url: '/projects#others'
  },
  // {
  //   title: 'Personal Portfolio',
  //   description: 'A collection of indispensable utilities for day-to-day productivity.',
  //   tags: [''],
  //   url: ''
  // },
  // {
  //   title: 'Discord servers',
  //   description: 'Essential utilities for photographers to organize and enhance their workflows.',
  //   tags: [''],
  //   url: 'https://www.example.com'
  // }
]

export const WORKSPACE_ITEMS = [
  {
    title: 'Lenovo LOQ 15 Ryzen 7 7840HS',
    specs: 'My main powerhouse for work and play.',
    url: 'https://amzn.to/3ONcpX6'
  },
  {
    title: 'Aluminium Laptop Stand',
    specs: 'Enhances airflow and improves viewing comfort.',
    url: 'https://amzn.to/41lem4r'
  },
  {
    title: 'Archer Tech Lab Astra M200',
    specs: 'Primary keyboard. Full size, customizable per-key RGB and highly responsive blue switches.',
    url: 'https://amzn.to/3OJIG10'
  },
  {
    title: 'EvoFox Blaze Gaming Mouse',
    specs: 'Responsive mouse with 8 fully programmable buttons, offering customizable RGB and DPI settings.',
    url: 'https://amzn.to/49rIlcS'
  },
  {
    title: 'Extended Size Mousepad',
    specs: 'Spacious 800 mm x 300 mm x 2 mm dimensions to keep my keybaord and mouse together.',
    url: 'https://amzn.to/3VtRXhq'
  },

  {
    title: '360 Degree Rotating Desk Organizer',
    specs: 'To keep my desk clean by keeping daily use items in one place, organized and fast access ',
    url: 'https://amzn.to/3B9ke6h'
  },

  {
    title: 'Hybrid Wooden Desk',
    specs: '6ft. space to put all of the items above with drawer',
    url: '/journey#wooden-desk'
  },
  {
    title: 'Cable Management Box ',
    specs: 'Keeps cables organized and hidden neatly. Also works as an extension to my devices',
    url: 'https://amzn.to/41ryTEA'
  }
  // {
  //   title: 'Data Cable Organizer and Storage Box',
  //   specs: 'Gray/Blue',
  //   url: 'https://amzn.to/4fbRNT5'
  // }
]

export const SCROLL_AREA_ID = 'scroll-area'
export const MOBILE_SCROLL_THRESHOLD = 20
// export const SUPABASE_TABLE_NAME = 'pages'

// export const SUBMIT_BOOKMARK_FORM_TITLE = 'Submit a bookmark'
// export const SUBMIT_BOOKMARK_FORM_DESCRIPTION =
// "Send me a website you like and if I like it too, you'll see it in the bookmarks list. With respect, please do not submit more than 5 websites a day."
// export const MAX_BOOKMARK_SUBMISSIONS_PER_DAY = 5
// export const BOOKMARK_SUBMISSION_COUNT_COOKIE_NAME = 'formSubmissionCount'

export const CONTENT_TYPES = {
  PAGE: 'page',
  POST: 'post',
  LOGBOOK: 'logbook'
}
