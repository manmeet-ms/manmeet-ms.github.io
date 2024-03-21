import React from 'react'
import { accent, lightModeText, lightModeBG, darkModeText, darkModeBG, darkBG } from '../theme.jsx'


const LabelChip = (props) => {
  return (
    <span class={`inline-block py-2 px-4 rounded-full bg-${accent}-100 text-${accent}-500 text-xs font-medium`}>{props.text}</span>
  )
}


LabelChip.defaultProps={
    text:"Lorem"
}

export default LabelChip