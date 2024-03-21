import React from 'react'
import reactIco from '../assets/icons/color/react.svg'
import { CircularProgress} from '@mui/material';
import '../style.css';
import { accent, darkBG } from '../theme.jsx'

const Skill = (props) => {
    return (
        <>
            <div className={`relative text-${accent}-600 inline-flex m-2`}>
                <CircularProgress  color="inherit" size="5rem" variant="determinate" value={props.progress} />
                <div className={`absolute top-0 right-0 bottom-0 left-0 p-4  flex justify-center items-center`}>
                    <img className={`${props.size} object-contain object-center`} src={props.imgSrc} alt="skill" />
                </div>
            </div>

        </>
    )
}

Skill.defaultProps={
    size:"w-24 h-24",
    imgSrc:{reactIco},
}
export default Skill
