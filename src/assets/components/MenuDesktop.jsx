import React, { useState } from 'react'
import { accent, lightModeText, lightModeBG, darkModeText, darkModeBG, darkBG } from '../../theme.jsx'
import { Anchor, ButtonPri, ButtonSec, ButtonTer } from "./Buttons.jsx";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const MenuDesktop = () => {

  
 let navStyle = `mr-4 my-3 border-b-2 border-${accent}-600 border-opacity-0 hover:border-opacity-100`
 return (
    <>
      <header className={`text-gray-600 sticky top-0  body-font bg-${accent}-100 rounded-bl-xl rounded-br-xl bg-opacity-85 backdrop-blur`}>
        <div className="container mx-auto flex flex-wrap py-3 px-5 flex-col md:flex-row items-center">
          <a className="flex title-font  items-center text-gray-900 mb-2 md:mb-0">
            <span className="ml-1 text-xl font-bold ">Manmeet Singh</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Anchor link="#" xtraClass={`${navStyle}`} icon="" text="About" />
            <Anchor link="#" xtraClass={`${navStyle}`} icon="" text="Portfolio" />
            <Anchor link="#" xtraClass={`${navStyle}`} icon="" text="Services" />
            <Anchor link="#" xtraClass={`${navStyle}`} icon="" text="Clients" />
          </nav>
          <ButtonSec text="Contact" icon=<ArrowForwardOutlinedIcon fontSize="small" className='ml-1' /> />
        </div>
      </header>

    </>
  )
}


export default MenuDesktop