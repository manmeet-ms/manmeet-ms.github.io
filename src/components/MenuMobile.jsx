import React from 'react'
import { accent, lightModeText, lightModeBG, darkModeText, darkModeBG, darkBG } from '../theme.jsx'
import { ButtonPri, ButtonSec, ButtonTer, Anchor } from "./Buttons.jsx";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { ArrowOutwardOutlined } from '@mui/icons-material';

const MenuMobile = () => {
    let style = `px-6 py-4 bg-${accent}-400 bg-opacity-0 border-opacity-0 border border-${accent}-900 text-${accent}-900 rounded-full hover:bg-opacity-60 hover:border-opacity-20 transition-all duration-400 ease-in-out`
    return (
        <>
            <header className={`absolute bottom-0 w-full px-5 text-gray-600 body-font bg-${accent}-100 rounded-bl-xl rounded-br-xl bg-opacity-85 backdrop-blur`}>
                <section className="text-gray-600 rounded-bl rounded-tr">
                    <nav className="flex list-none -mb-1">
                        <span className={`${style}`} >
                            <a href="" className={`flex flex-col items-center font-medium`}>
                                <ArrowOutwardOutlined fontSize="small" className='mr-2' />
                                About</a>
                        </span>

                        <span className={`${style}`} >
                            <a href="" className={`flex flex-col items-center font-medium`}>
                                <ArrowOutwardOutlined fontSize="small" className='mr-2' />
                                Portfolio</a>
                        </span>

                        <span className={`${style}`} >
                            <a href="" className={`flex flex-col items-center font-medium`}>
                                <ArrowOutwardOutlined fontSize="small" className='mr-2' />
                                Services</a>
                        </span>

                        <span className={`${style}`} >
                            <a href="" className={`flex flex-col items-center font-medium`}>
                                <ArrowOutwardOutlined fontSize="small" className='mr-2' />
                                Clients</a>
                        </span>
                    </nav>
                </section>
            </header>
        </>
    )
}

export default MenuMobile