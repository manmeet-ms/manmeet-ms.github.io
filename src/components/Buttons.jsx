import React from 'react'
import { accent, lightModeText, lightModeBG, darkModeText, darkModeBG, darkBG } from '../theme.jsx'
import GamepadIcon from '@mui/icons-material/Gamepad';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
let commonStyle = " py-3 px-6 mr-2 mt-2 rounded-full transition-all duration-400 ease-in-out"

export const ButtonPri = (props) => {
    return (
        // <button className={`inline-flex items-center justify-center text-${accent}-950 bg-${accent}-300 border-0 ${commonStyle} hover:bg-${accent}-500  ${props.xtraClass}`}>{props.text}{props.icon}</button>
        <button className={`inline-flex items-center text-slate-100 bg-${accent}-700 border-0 ${commonStyle} hover:bg-${accent}-500  ${props.xtraClass}`}>{props.text}{props.icon}</button>
        )
}

export const ButtonSec = (props) => {
    return (
        <button className={`inline-flex items-center text-${accent}-500 bg-${accent}-400/30 ${commonStyle} hover:bg-opacity-25   ${props.xtraClass}`}>{props.text}
            {props.icon}
        </button>)
}

export const ButtonTer = (props) => {
    return (
        <button className={`inline-flex items-center text-${accent}-600 border-2 border-${accent}-600 py-1.5 px-6 hover:bg-${accent}-600 hover:text-${accent}-50 rounded-full ${props.xtraClass}`}>{props.text}
            {props.icon}
        </button>)
}
export const ButtonWhi = (props) => {
    return (
        <button className={`inline-flex bg-slate-50 text-${accent}-950 border-0 ${commonStyle} hover:bg-${accent}-50  ${props.xtraClass}`}>{props.text}
            {props.icon}
        </button>)
}

export const Anchor = (props) => {
    return (
        <a href={props.link} className={`inline-flex inline-flex items-center mr-2 text-${accent}-950  font-medium hover:text-${accent}-600 border-${accent}-600 ${props.xtraClass} transition-all duration-400 ease-in-out`}>{props.text}{props.icon}</a>)
}
ButtonPri.defaultProps = {
    text: "Button",
    icon: <ArrowOutwardOutlinedIcon fontSize="small" className='ml-2' />
}
ButtonSec.defaultProps = {
    text: "Button",
    icon: <ArrowOutwardOutlinedIcon fontSize="small" className='ml-2' />
}
ButtonTer.defaultProps = {
    text: "Button",
    icon: <ArrowOutwardOutlinedIcon fontSize="small" className='ml-2' />
}
ButtonWhi.defaultProps = {
    text: "White",
    icon: <ArrowOutwardOutlinedIcon fontSize="small" className='ml-2' />
}

Anchor.defaultProps = {
    text: "Link",
}
icon: <ArrowOutwardOutlinedIcon fontSize="small" className='ml-2' />