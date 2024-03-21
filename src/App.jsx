import React, { useRef, useState } from 'react';
// Import Swiper React components
import './style.css';
import { CircularProgress } from '@mui/material';

import cssC from './assets/icons/color/css3.svg'
import figmaC from './assets/icons/color/figma.svg'
import gitC from './assets/icons/color/git.svg'
import htmlC from './assets/icons/color/html.svg'
import jsC from './assets/icons/color/js.svg'
import reactC from './assets/icons/color/react.svg'
import tailwindC from './assets/icons/color/tailwind.svg'
import wordpressC from './assets/icons/color/wordpress.svg'
import materialuiC from './assets/icons/color/materialui.svg'


import { accent, darkBG } from './theme.jsx'
import { ButtonWhi, ButtonPri, ButtonSec, ButtonTer } from './components/Buttons.jsx';
import TestimonialCard from './components/TestimonialCard.jsx';
import Skill from './components/Skill.jsx';

import Brightness6RoundedIcon from '@mui/icons-material/Brightness6Rounded';
import { ArrowOutwardRounded, AutoAwesomeOutlined, Brightness6Rounded, BubbleChart, ChargingStation, ChargingStationOutlined, Chat, ChatBubble, DarkModeRounded, Description, DirectionsWalk, DoneAll, Download, DownloadForOffline, ExpandMore, Explore, Facebook, FormatQuote, GitHub, Instagram, Layers, LinkedIn, Mail, PeopleAlt, PriceCheck, QuestionAnswerOutlined, RoomService, Send, SouthEast, Star, StarHalf, Telegram, Timelapse } from '@mui/icons-material';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function App() {
  let FooterElemStyle = `py-2 transition-all duration-400 ease-in-out text-xs`
  let labelDarkBG = `inline-flex items-center py-2 px-3 text-${accent}-400 bg-${accent}-500/20 m-1 text-xs font-medium rounded-lg capitalize`
  const [chip, setChipLM] = useState(`inline-flex items-center py-2 px-3 text-${accent}-400 bg-${accent}-500/20 m-1 text-xs font-medium rounded-lg capitalize`)
  const [darkModeConfig, setLightModeConfig] = useState(`bg-slate-900 text-slate-200`)
  const [lmIconText, setlmIconText] = useState(`Dark`)
  const [cardDarkModeBG, setCardLightModeBG] = useState(`bg-slate-800/60 backdrop-blur border border-${accent}-700/10 backdrop-brightness-75`)
  const [darkModeIcon, setLightModeIcon] = useState(<Brightness6Rounded />)
  let toggleDarkMode = () => {

    if (darkModeConfig == `bg-slate-900 text-slate-200`) {
      setLightModeConfig(`bg-${accent}-50/40 text-${accent}-950`);
      setCardLightModeBG(`bg-white/40 backdrop-blur border border-${accent}-700/10`)
      setLightModeIcon(<DarkModeRounded />);
      setlmIconText('Light')
      setChipLM(`inline-flex items-center py-2 px-3 text-${accent}-800 bg-${accent}-500/30 m-1 text-xs font-medium rounded-lg capitalize`)
    }
    else {
      setLightModeConfig(`bg-slate-900 text-slate-200`);
      setLightModeIcon(<Brightness6RoundedIcon />);
      setlmIconText('Dark')
      setCardLightModeBG(`bg-slate-800/60 backdrop-blur border border-${accent}-700/10`)
      setChipLM(`inline-flex items-center py-2 px-3 text-${accent}-400 bg-${accent}-500/20 m-1 text-xs font-medium rounded-lg capitalize`)
    }
  }
  return (
    <>
      {/* line background */}

      <main className={`${darkModeConfig} bg-[linear-gradient(to_right,#bae6fd08_1px,transparent_1px),linear-gradient(to_bottom,#bae6fd08_1px,transparent_1px)] bg-[size:32px_32px]`}>

        <header className={`font-bold sticky top-0 ${darkModeConfig} bg-opacity-85 rounded-lg  backdrop-blur`}>
          <div className="container mx-auto flex px-2 py-3 md:flex-row items-center justify-between">
            <h2 className="font-bold ml-3 ">Manmeet Singh</h2>
            <span onClick={toggleDarkMode} >
              <a href="#about" className={`flex flex-col items-center rounded transition-all duration-400 ease-in-out font-medium`}>
                <div className="px-2">{darkModeIcon}</div>
              </a>
            </span>
          </div>
        </header>

        
        <section id='Vantahalo' className='heroBG py-12 ' >
          <div className={`container mx-auto flex px-3 py-6 md:flex-row flex-col items-center `}>

            <div className={`lg:flex-grow md:w-1/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center`}>

              <h1 className={`font-bold text-5xl md:text-6xl capitalize`}>Hi, I am
                <br className="hidden lg:inline-block" /> <h2 className={`font-bold inline text-${accent}-600 font-bold text-transparent bg-clip-text bg-gradient-to-bl from-${accent}-400 to-${accent}-700
`}>Manmeet</h2> Singh
              </h1>
              {/* <h3 className='font-bold mt-2 mb-4 text-4xl' >and I offer services in Frontend Development. </h3> */}
              <p className={` opacity-80 mt-2 mb-4 leading-relaxed`}> Crafting appealing and user-friendly websites and UI designs, with experience gained with freelance and personal projects.</p>
              <div className={`flex justify-center`}>
                <a href="https://www.linkedin.com/in/manmeets-/"><ButtonPri text="LinkedIn" icon={<LinkedIn fontSize='small' className='ml-1' />} /></a>
                <a href="https://github.com/manmeet-ms"><ButtonSec text="GitHub" icon={<GitHub fontSize='small' className='ml-1' />} /></a>
                {/* <section className='flex p-2  bg-green-500/0 space-x-4' >
<GitHub  className={`${darkModeConfig}`} sx={{fontSize:24}} />
<LinkedIn  className={`${darkModeConfig}`} sx={{fontSize:24}} />
<Description  className={`${darkModeConfig}`} sx={{fontSize:24}} />
<Instagram  className={`${darkModeConfig}`} sx={{fontSize:24}} />
</section> */}
              </div>
            </div>
            <div className={`lg:max-w-lg lg:w-full md:w-1/2 w-full`}>
              {/* <img className={`hidden md:block object-cover object-center rounded-xl `} alt="hero" src="./src/assets/images/hero.png" /> */}
              <img className={`hidden md:block object-cover object-center rounded-xl `} alt="hero" src="https://imgur.com/BabWKAg.png" />
            </div>
          </div>
        </section>
        <section className={`text-slate-200 bg-${darkBG} rounded-xl mx-2`}>
          <div className={`container px-5 py-12 mx-auto flex flex-wrap items-center`}>
            <h2 className={`font-bold text-5xl md:text-5xl text-${accent}-50 mb-6 md:w-2/5`}>It is nice to meet you! Here is a brief overview about myself.</h2>
            <div className={`md:w-3/5 p-6 rounded-xl bg-${accent}-50/10`}>
              <div className={`flex flex-col space-y-4 leading-relaxed text-base`}>
                <FormatQuote sx={{ fontSize: 48 }} />
                <hr className='font-bold opacity-30' />
                <p>I treat my clients with the utmost care. I have worked with international clients from various countries. I am serious towards my assignments and work hard to make sure that everyone is happy with my work. Also I am open to work or internship opportunities</p>
              </div>
            </div>
          </div>
        </section>



        <section className='mx-auto' id='service' >
          <div className={`container w-full px-5 py-12 px-0  mx-auto`}>
            <div className={`flex flex-col text-center w-full mb-12`}>

            </div>

            <div className={`flex flex-wrap`}>

              <div className={`p-2 lg:w-1/3 w-full m-2`}>
                <h1 className={`font-bold text-4xl md:text-5xl mb-4`}>Strategic insights, compelling designs, tangible results.</h1>

              </div>

              <div className={`px-4 py-6 lg:w-1/3 ${cardDarkModeBG} m-2 rounded-xl`}>
                {/* <hr className='font-bold opacity-20 ' /> */}
                <div className={`h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center sm:text-left`}>
                  <div className={`flex-grow`}>
                    <h2 className={`font-bold text-xl`}>Website Development/Consultancy</h2>
                    <p className={` opacity-80 mb-4 mt-1 text-slate-400`}>I offer services in building websites with ReactJS or also with CMS tools like WordPress. Let’s bring your online presence to life</p>
                    <hr className='font-bold opacity-10 my-3' />
                    <div className="flex-wrap">

                      <span className={`${chip}`}>Portfolio</span>
                      <span className={`${chip}`}>Business</span>
                      <span className={`${chip}`}>E-Commerce Store</span>
                      <span className={`${chip}`}>Static Pages</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`px-4 py-6 lg:w-1/3 ${cardDarkModeBG} m-2 rounded-xl`}>
                {/* <hr className='font-bold opacity-20 ' /> */}
                <div className={`h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center sm:text-left`}>
                  <div className={`flex-grow`}>
                    <h2 className={`font-bold text-xl`}>UX/UI Design</h2>
                    <p className={` opacity-80 mb-4 mt-1 text-slate-400`}>Expertly design app, website or business landing page with Figma. Versatile, topic-focused, and delivered fast.</p>
                    <hr className='font-bold opacity-10 my-3' />
                    <div className="flex-wrap">

                      <span className={`${chip}`}>Wireframing</span>
                      <span className={`${chip}`}>App UI Design</span>
                      <span className={`${chip}`}>Landing Pages</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`px-4 py-6 lg:w-1/3 ${cardDarkModeBG} m-2 rounded-xl`}>
                {/* <hr className='font-bold opacity-20 ' /> */}
                <div className={`h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center sm:text-left`}>
                  <div className={`flex-grow`}>
                    <h2 className={`font-bold text-xl`}>Discord and Slack Server Creation/Management</h2>
                    <p className={` opacity-80 mb-4 mt-1 text-slate-400`}>Harness the power of Discord’s versatile platform for seamless communication. Includes free custom graphics.</p>
                    <hr className='font-bold opacity-10 my-3' />
                    <div className="flex-wrap">

                      <span className={`${chip}`}>Discord</span>
                      <span className={`${chip}`}>Bot setup</span>
                      <span className={`${chip}`}>Slack</span>
                      <span className={`${chip}`}>Server revamp</span>
                      <span className={`${chip}`}>Channel Headers</span>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </section>
        <section className={`text-slate-300 bg-${darkBG} rounded-xl mx-2`}>
          <div className={`container px-5 py-12 mx-auto`}>
            <div className={`flex flex-col text-center items-center justify-center w-full mb-10`}>
              <h1 className={`font-bold text-4xl md:text-5xl mb-4 text-${accent}-50`}>Core features</h1>
              <p className={` opacity-80 lg:w-2/3 mx-auto leading-relaxed text-base`}>Essential points that cater to diverse needs, ensuring a robust and versatile solution for you.</p>
            </div>
            <div className={`flex flex-wrap items-center justify-center -m-4`}>
              <span className={labelDarkBG}><PriceCheck fontSize='medium' className='mr-1' /> Cost-efficient</span>
              <span className={labelDarkBG}><QuestionAnswerOutlined fontSize='medium' className='mr-1' />Fast Responses</span>
              <span className={labelDarkBG}><AutoAwesomeOutlined fontSize='medium' className='mr-1' /> Reliability</span>
              <span className={labelDarkBG}><Timelapse fontSize='medium' className='mr-1' /> Timely Completions</span>
              <span className={labelDarkBG}><DoneAll fontSize='medium' className='mr-1' /> Satisfaction</span>
            </div>
          </div>
        </section>


        {/* <svg
          className="progress-ring"
          width="120"
          height="120">
          <circle
            className="progress-ring__circle transform translate-x- 50 translate-y-50"
            stroke="white"
            stroke-width="4"
            fill="transparent"
            r="52"
            cx="60"
            cy="60" />
        </svg> */}
        <section className="" id=''>
          <div className={`container px-5 py-12 mx-auto flex flex-col`}>
            <div className={`flex flex-wrap md:flex-col sm:flex-col -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 sm:pr-10`}>
              <div className={`w-full sm:p-4 px-4 mb-6`}>
                <span className={`${chip}`}>Skills</span><h1 className={`font-bold text-4xl md:text-5xl my-2`}>My Skillset</h1>
                <div className={`opacity-80 leading-relaxed`}>A sneak peek into my creative endeavors.</div>
              </div>
            </div>



            <div className="flex flex-wrap items-center justify-center">
              {/* <Skill imgSrc={reactC}  size="w-24 h-24" progress="65"/>   
          <Skill imgSrc={wordpressC}  size="w-20 h-20" progress="95"/>   
          <Skill imgSrc={gitC}  size="w-24 h-24" progress="85"/>   
          <Skill imgSrc={figmaC}  size="w-20 h-20" progress="85"/>   
          <Skill imgSrc={tailwindC}  size="w-24 h-24" progress="80"/>   
          <Skill imgSrc={htmlC}  size="w-24 h-24" progress="80"/>   
          <Skill imgSrc={cssC}  size="w-20 h-20" progress="80"/>   
          <Skill imgSrc={jsC}  size="w-20 h-20" progress="65"/>   
          <Skill imgSrc= {materialuiC} size="w-20 h-20" progress="70"/>    */}


              {/* 
              <div className="relative inline-flex">
                <CircularProgress variant="determinate" value={25} />
                <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                  <img className='w-24 h-24 object-contain object-center' src={reactC} alt="skill" />
                </div>
              </div>
              <div className="relative inline-flex">
                <CircularProgress variant="determinate" value={25} />
                <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                  <img className='w-20 h-20 object-contain object-center' src={wordpressC} alt="skill" />
                </div>
              </div>
              <div className="relative inline-flex">
                <CircularProgress variant="determinate" value={25} />
                <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                  <img className='w-24 h-24 object-contain object-center' src={gitC} alt="skill" />
                </div>
              </div>
              <div className="relative inline-flex">
                <CircularProgress variant="determinate" value={25} />
                <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                  <img className='w-20 h-20 object-contain object-center' src={figmaC} alt="skill" />
                </div>
              </div>
              <div className="relative inline-flex">
                <CircularProgress variant="determinate" value={25} />
                <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                  <img className='w-24 h-24 object-contain object-center' src={tailwindC} alt="skill" />
                </div>
              </div>
              <div className="relative inline-flex">
                <CircularProgress variant="determinate" value={25} />
                <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                  <img className='w-24 h-24 object-contain object-center' src={htmlC} alt="skill" />
                </div>
              </div>
              <div className="relative inline-flex">
                <CircularProgress variant="determinate" value={25} />
                <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                  <img className='w-20 h-20 object-contain object-center' src={cssC} alt="skill" />
                </div>
              </div>
              <div className="relative inline-flex">
                <CircularProgress variant="determinate" value={25} />
                <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                  <img className='w-20 h-20 object-contain object-center' src={jsC} alt="skill" />
                </div>
              </div>
              <div className="relative inline-flex">
                <CircularProgress variant="determinate" value={25} />
                <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                  <img className='w-20 h-20 object-contain object-center' src={materialuiC} alt="skill" />
                </div>
              </div> */}


              {/* original */}
              <div className={`p-6 my-2 mx-2 bg-slate-800/0 hover:bg-${accent}-600/10 transform scale-1 hover:scale-1 rounded-full transition-all duration-500 ease-in-out `}><img className='w-24 h-24 object-contain object-center' src={reactC} alt="skill" /></div>
              <div className={`p-6 my-2 mx-2 bg-slate-800/0 hover:bg-${accent}-600/10 transform scale-1 hover:scale-1 rounded-full transition-all duration-500 ease-in-out `}><img className='w-20 h-20 object-contain object-center' src={wordpressC} alt="skill" /></div>
              <div className={`p-6 my-2 mx-2 bg-slate-800/0 hover:bg-${accent}-600/10 transform scale-1 hover:scale-1 rounded-full transition-all duration-500 ease-in-out `}><img className='w-24 h-24 object-contain object-center' src={gitC} alt="skill" /></div>
              <div className={`p-6 my-2 mx-2 bg-slate-800/0 hover:bg-${accent}-600/10 transform scale-1 hover:scale-1 rounded-full transition-all duration-500 ease-in-out `}><img className='w-20 h-20 object-contain object-center' src={figmaC} alt="skill" /></div>
              <div className={`p-6 my-2 mx-2 bg-slate-800/0 hover:bg-${accent}-600/10 transform scale-1 hover:scale-1 rounded-full transition-all duration-500 ease-in-out `}><img className='w-24 h-24 object-contain object-center' src={tailwindC} alt="skill" /></div>
              <div className={`p-6 my-2 mx-2 bg-slate-800/0 hover:bg-${accent}-600/10 transform scale-1 hover:scale-1 rounded-full transition-all duration-500 ease-in-out `}><img className='w-24 h-24 object-contain object-center' src={htmlC} alt="skill" /></div>
              <div className={`p-6 my-2 mx-2 bg-slate-800/0 hover:bg-${accent}-600/10 transform scale-1 hover:scale-1 rounded-full transition-all duration-500 ease-in-out `}><img className='w-20 h-20 object-contain object-center' src={cssC} alt="skill" /></div>
              <div className={`p-6 my-2 mx-2 bg-slate-800/0 hover:bg-${accent}-600/10 transform scale-1 hover:scale-1 rounded-full transition-all duration-500 ease-in-out `}><img className='w-20 h-20 object-contain object-center' src={jsC} alt="skill" /></div>
              <div className={`p-6 my-2 mx-2 bg-slate-800/0 hover:bg-${accent}-600/10 transform scale-1 hover:scale-1 rounded-full transition-all duration-500 ease-in-out `}><img className='w-20 h-20 object-contain object-center' src={materialuiC} alt="skill" /></div>


            </div>

            {/* <div className={`flex flex-wrap md:flex-col sm:flex-col -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10`}>
              <div className={`w-full sm:p-4 px-4 mb-6`}>
                <div className={`leading-relaxed`}>Offering services on these platforms</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center">
              upwork<div className={`p-6 my-2 mx-4 bg-slate-800/0 hover:bg-${accent}-600/10 transform scale-1 hover:scale-1 rounded-full transition-all duration-500 ease-in-out `}><img className='w-24 h-24 object-contain object-center' src={reactC} alt="skill" /></div>
              fiverr<div className={`p-6 my-2 mx-4 bg-slate-800/0 hover:bg-${accent}-600/10 transform scale-1 hover:scale-1 rounded-full transition-all duration-500 ease-in-out `}><img className='w-20 h-20 object-contain object-center' src={wordpressC} alt="skill" /></div>
              <div className={`p-6 my-2 mx-4 bg-slate-800/0 hover:bg-${accent}-600/10 transform scale-1 hover:scale-1 rounded-full transition-all duration-500 ease-in-out `}><img className='w-24 h-24 object-contain object-center' src={gitC} alt="skill" /></div>
            </div> */}




            <div className={`lg:w-1/2 sm:w-1/3 w-full rounded-lg flex overflow-hidden mt-6 sm:mt-0`}>
              {/* <img className={`object-contain object-center w-64 h-full rotate-90`} src="src\assets\img\discordMobile.png" alt="portfolio" /> */}
            </div>
          </div>
        </section>

        <section className={`bg-${darkBG} rounded-xl mx-3`}>
          <div className={`container px-5 py-12 mx-auto`}>
            <div className="">
              <span className={`${labelDarkBG}`}> Pricing </span>

              <h2 className={`font-bold text-4xl md:text-5xl text-${accent}-50`}>Affordable Pricing,<br /> Superior Returns</h2>
              <p className=" opacity-70 leading-relaxed text-slate-400 mt-2 mb-4">Pricing that fits like a glove, empowering you to harness your full potential, enabling growth and success with a cost-effective investment. I also accept custom offers.</p>
            </div>
            <div className={`flex flex-wrap -m-4`}>
              <div className={`p-4 md:w-1/3`}>
                <div className={`h-full bg-${accent}-700/10 rounded-xl overflow-hidden`}>
                  <img className={`lg:h-48 md:h-36 w-full object-cover object-center`} src='https://imgur.com/1tMU3zX.png' alt="pricing" />
                  <div className={`p-6`}>
                    <h2 className={`font-bold my-2 text-${accent}-500 text-xs font-bold`}>
                      7 days delivery</h2>
                    <h1 className={`font-bold text-lg text-${accent}-50 mb-3`}>WordPress Website</h1>
                    <p className={` opacity-80 leading-relaxed mb-3 text-slate-300`}>Supercharge your online presence. From eye-catching layouts to user-friendly interfaces, effortless content management, tailored solutions for portfolios and businesses.</p>
                    <div className={`flex items-center flex-wrap`}>
                      <a href="https://www.fiverr.com/s/b6rzxa"><ButtonWhi text="Starting from 85 USD" xtraClass={``} /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`p-4 md:w-1/3`}>
                <div className={`h-full bg-${accent}-700/10 rounded-xl overflow-hidden`}>
                  <img className={`lg:h-48 md:h-36 w-full object-cover object-center`} src="https://imgur.com/jeGuHG6.png" alt="pricing" />
                  <div className={`p-6`}>
                    <h2 className={`font-bold my-2 text-${accent}-500 text-xs font-bold`}>
                      7 days delivery</h2>
                    <h1 className={`font-bold text-lg text-${accent}-50 mb-3`}>UI/X Design</h1>
                    <p className={` opacity-80 leading-relaxed mb-3 text-slate-300`}>Increase conversions by combining my design suggestions and work with a user-friendly experience, user engagement and overall user satisfaction with your app.</p>
                    <div className={`flex items-center flex-wrap`}>
                      <a href="https://www.fiverr.com/s/Xy9Y8V"><ButtonWhi text="Starting from 50 USD" xtraClass={``} /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`p-4 md:w-1/3`}>
                <div className={`h-full bg-${accent}-700/10 rounded-xl overflow-hidden`}>
                  <img className={`lg:h-48 md:h-36 w-full object-cover object-center`} src="https://imgur.com/RLztJij.png" alt="pricing" />
                  <div className={`p-6`}>
                    <h2 className={`font-bold my-2 text-${accent}-500 text-xs font-bold`}>
                      3 days delivery</h2>
                    <h1 className={`font-bold text-lg text-${accent}-50 mb-3`}>Discord Server</h1>
                    <p className={` opacity-80 leading-relaxed mb-3 text-slate-300`}>Ignite community engagement, featuring a theme-based Discord server setup, a robust verification system, powerful moderation bots, seamless customer support system.</p>
                    <div className={`flex items-center flex-wrap`}>
                      <a href=""><ButtonWhi text="Starting from 40 USD" xtraClass={``} /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`p-4 md:w-1/3`}>
                <div className={`h-full bg-${accent}-700/10 rounded-xl overflow-hidden`}>
                  <img className={`h-48 lg:h-48 md:h-36 sm:h-24 w-full object-cover object-center`} src="https://imgur.com/xZSJArm.jpg" alt="pricing" />
                  <div className={`p-6`}>
                    <h2 className={`font-bold my-2 text-${accent}-500 text-xs font-bold`}>
                      3 days delivery</h2>
                    <h1 className={`font-bold text-lg text-${accent}-50 mb-3`}>Digital Design</h1>
                    <p className={` opacity-80 leading-relaxed mb-3 text-slate-300`}>Embark on a creative journey. Get an app UI design using Figma, attractive banners for various topics, personalized business cards, and unique designs that truly stand out.</p>
                    <div className={`flex items-center flex-wrap`}>
                      <a href="https://www.fiverr.com/s/3WPv3r"><ButtonWhi text="Starting from 20 USD" xtraClass={``} /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='portfolio'>
          <div className={`container px-5 py-12 mx-auto flex flex-wrap`}>
            <div className={`w-full mb-12 flex-wrap`}>
              <span className={`${chip}`}> Portfolio</span>
              <h1 className={`font-bold text-4xl md:text-5xl flex flex-col lg:w-1/3 lg:mb-0 mb-4`}>Showcasing work from my forté.</h1>
              <p className={` opacity-80 lg:w-2/3 leading-relaxed mt-2 text-base`}>My portfolio showcases my latest work, which highlights my unrivaled design capabilities and attention to detail.</p>
            </div>
            <div className={`flex flex-wrap md:-m-2 -m-1`}>
              <div className={`flex flex-wrap w-1/2`}>
                <div className={`w-1/2`}>
                  <img alt="gallery" className={`w-full p-1 rounded-lg  object-cover h-full object-center block `} src="https://imgur.com/AqBdwSG.png" />
                </div>
                <div className={`w-1/2`}>
                  <img alt="gallery" className={`w-full p-1 rounded-lg  object-cover h-full object-center block `} src="https://imgur.com/JMTM9ds.png" />
                </div>
                <div className={`w-full`}>
                  <img alt="gallery" className={`w-full h-full p-1 rounded-lg  object-cover object-center block `} src="https://imgur.com/1tMU3zX.png" />
                </div>
              </div>
              <div className={`flex flex-wrap w-1/2`}>
                <div className={`w-full`}>
                  <img alt="gallery" className={`w-full h-full p-1 rounded-lg  object-cover object-center block `} src="https://imgur.com/hBRM0Ge.png" />
                </div>
                <div className={`w-full`}>
                  <img alt="gallery" className={`w-full h-full p-1 rounded-lg  object-cover object-center block `} src="https://imgur.com/RLztJij.png" />
                </div>

              </div>
            </div>

            <div className={`flex flex-wrap py-2 md:-m-2 -m-1 `}>
              <div className={`flex flex-wrap w-1/2`}>
                <div className={``}>
                  <img alt="gallery" className={`w-full object-contain  p-1 rounded-lg   h-full object-center block `} src="https://imgur.com/kQtV9EQ.png" />
                  {/* <img alt="gallery" className={`w-full p-1 rounded-lg  object-cover h-full object-center block `} src="./src/assets/images/logo-hiro.png" /> */}
                </div>
                <div className={`w-1/2`}>
                  {/* <img alt="gallery" className={`w-full p-1 rounded-lg  object-cover h-full object-center block `} src="./src/assets/images/logo-devavatar.png" /> */}
                </div>
                <div className={`w-full`}>
                  {/* <img alt="gallery" className={`w-full h-full p-1 rounded-lg  object-cover object-center block `} src="./src/assets/images/BasicPortfolio.png" /> */}
                </div>
              </div>
              <div className={`flex flex-wrap w-1/2`}>
                <div className={`w-full`}>
                  <img alt="gallery" className={`w-full h-full p-1 rounded-lg  object-cover object-center block `} src="https://imgur.com/jeGuHG6.png" />

                </div>
                <div className={`w-full`}>
                  <img alt="gallery" className={`w-full p-1 rounded-lg  object-cover h-full object-center block `} src="https://imgur.com/dNABGjf.png" />
                </div>
                <div className={`w-1/2`}>
                  <img alt="gallery" className={`w-full p-1 rounded-lg  object-cover h-full object-center block `} src="https://imgur.com/QOc8Wl4.png" />
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* clinets */}
        <section id='clients' className={`text-slate-400 bg-${darkBG} rounded-xl mx-2`}>
          <div className={`container px-5 py-12 mx-auto flex flex-wrap`}>
            <div className={`flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10`}>
              <div className={`w-full sm:p-4 px-4 mb-6`}>
                <h1 className={`font-bold text-4xl md:text-5xl mb-2 text-${accent}-50`}>Reviews and Testimonials</h1>
                <div className={`leading-relaxed`}>It is not just me on this site. Here are some valuable words from my clients on my services.</div>
              </div>

              <div className={`p-4 sm:w-1/2 lg:w-1/4 w-1/2`}>
                <h2 className={`font-bold text-3xl text-${accent}-50`}>4.9</h2>
                <p className={` opacity-80 leading-relaxed`}>Average rating </p>
              </div>
              <div className={`p-4 sm:w-1/2 lg:w-1/4 w-1/2`}>
                <h2 className={`font-bold text-3xl text-${accent}-50`}>3</h2>
                <p className={` opacity-80 leading-relaxed`}>y/o Experience </p>
              </div>
              <div className={`p-4 sm:w-1/2 lg:w-1/4 w-1/2`}>
                <h2 className={`font-bold text-3xl text-${accent}-50`}>20+</h2>
                <p className={` opacity-80 leading-relaxed`}>Projects Done</p>
              </div>
              <div className={`p-4 sm:w-1/2 lg:w-1/4 w-1/2`}>
                <h2 className={`font-bold text-3xl text-${accent}-50`}>100%</h2>
                <p className={` opacity-80 leading-relaxed`}>Satistfaction</p>
              </div>
            </div>
            <div className={`lg:w-1/2 sm:w-1/3 w-full inline-flex items-center rounded-lg overflow-hidden mt-6 sm:mt-0`}>
              <Swiper className=' flex justify-center items-center'
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 3000, disableOnInteraction: false, }}
                pagination={{ clickable: true, }}
                navigation={false}
                modules={[Autoplay]}>

                <SwiperSlide><TestimonialCard name="Zain Md."
                  rating="5.0"
                  country="Pakistan"
                  review="A big round of applause for your services, I got what I actually needed. I will be considering to do further more business with you. "
                  star={<Star className={`text-${accent}-200`} fontSize="small" />} />
                </SwiperSlide>

                <SwiperSlide><TestimonialCard name="Abongir"
                  rating="4.7"
                  country="India"
                  review="It was a fantastic experience. I had a particularly challenging problem to solve and he was able to resolve it very well."
                  star={<StarHalf className={`text-${accent}-200`} fontSize="small" />} />
                </SwiperSlide>
                <SwiperSlide><TestimonialCard name="Flashweirdo"
                  rating="5.0"
                  country="Canada"
                  review="Really good, I didn't have to do much and he did all the work for me. Very satisfied."
                  star={<Star className={`text-${accent}-200`} fontSize="small" />} />
                </SwiperSlide>

                <SwiperSlide><TestimonialCard name="Nitin Sachdeva"
                  rating="4.9"
                  country="India"
                  review="You have been a good and a knowledgeable resource. I must appreciate what you have done during the internship. Wish you a great future ahead."
                  star={<StarHalf className={`text-${accent}-200`} fontSize="small" />} />
                </SwiperSlide>

                <SwiperSlide><TestimonialCard name="Zain Md."
                  rating="5.0"
                  country="Pakistan"
                  review="Amazing service, highly talented individual I would recommend anyone to consult or hire for your startup work."
                  star={<Star className={`text-${accent}-200`} fontSize="small" />} />
                </SwiperSlide>

                <SwiperSlide><TestimonialCard name="Brett Goodman"
                  rating="5.0"
                  country="Australia"
                  review="Very responsive and did an amazing job. Always happy to jump on a call and walk me through the work and make changes where necessary. "
                  star={<Star className={`text-${accent}-200`} fontSize="small" />} />
                </SwiperSlide>

                <SwiperSlide><TestimonialCard name="Zain Md."
                  rating="5.0"
                  country="Pakistan"
                  review="I got what I actually needed. I will be considering to do further more business with you because of your extra talented skills in communication, developing, understanding & response. I like how you are connected always for all the small changes and modifications that are needed. In short amazing friendly personality. "
                  star={<Star className={`text-${accent}-200`} fontSize="small" />} />
                </SwiperSlide>

                <SwiperSlide><TestimonialCard
                  rating="5.0"
                  country="Germany"
                  review="Gut Schnell"
                  name="Privatkonto"
                  star={<Star className={`text-${accent}-200`} fontSize="small" />} />
                </SwiperSlide>
              </
              Swiper>
            </div>
          </div>
        </section>
        <section id='contact' className="">
          <div className={`container px-5 py-12 mx-auto`}>
            <div className={`lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto`}>

              <div className="flex flex-col">
                <h1 className={`font-bold flex-grow sm:pr-16 text-4xl md:text-5xl`}>Alone we can do so little, together we can do so much!</h1>
                <p className=' opacity-70 my-2'>Let's connect to combine your enthusiasm and mine. What do you have in mind?
                </p>
              </div>
              <a href="https://t.me/manmeet_ms">
                {/* <ButtonPri icon={<SouthEast className='ml-2 rounded-full ' fontSize='small' />} text="Contact" /> */}
              </a>
            </div>
          </div>
        </section>
        <footer className={`z-99 bg-opacity-80 shadow-md backdrop-blur sticky absolute bottom-0 md:bottom-4 sm:bottom-4 w-full max-w-screen-sm mx-auto rounded-bl-sm rounded-br-sm rounded-tl-2xl rounded-tr-2xl md:rounded-bl-full md:rounded-br-full md:rounded-tl-full md:rounded-tr-full sm:rounded-bl-sm sm:rounded-br-sm sm:rounded-tl-2xl sm:rounded-tr-2xl ${darkModeConfig}`}>
          <nav className={`flex justify-around`}>
            <span className={`${FooterElemStyle}`} >
              <a href="#service" className={`flex flex-col items-center font-medium`}>
                <div className={`px-4 py-1 bg-${accent}-500 bg-opacity-0 hover:bg-opacity-30 rounded-full`}>
                  <Layers /></div>
                <span className={``}>Services</span> </a>
            </span>

            <span className={`${FooterElemStyle}`} >
              <a href="#portfolio" className={`flex flex-col items-center font-medium`}>
                <div className={`px-4 py-1 bg-${accent}-500 bg-opacity-0 hover:bg-opacity-30 rounded-full`}>
                  <BubbleChart />
                </div>
                <span className={``}>Portfolio</span> </a>
            </span>

            <span className={`${FooterElemStyle}`} >
              <a href="#clients" className={`flex flex-col items-center font-medium`}>
                <div className={`px-4 py-1 bg-${accent}-500 bg-opacity-0 hover:bg-opacity-30 rounded-full`}>
                  <PeopleAlt className={`z-1`} />  </div>
                <span className={``}>Clients</span> </a>
            </span>
            <span className={`${FooterElemStyle}`} >
              <a href="https://t.me/manmeet_ms" className={`flex flex-col items-center font-medium`}>
                <div className={`px-4 py-1 bg-${accent}-500 bg-opacity-0 hover:bg-opacity-30 rounded-full`}>
                  <Telegram />  </div>
                <span className={``}>Contact</span> </a>
            </span>
          </nav>
        </footer>
      </main>
    </>
  )
}
export default App

