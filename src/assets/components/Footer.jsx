import React from 'react'
import { accent, lightModeText, lightModeBG, darkModeText, darkModeBG, darkBG } from '../../theme.jsx'
const Footer = () => {
  return (
  <>
  <footer className={`text-gray-400 bg-${accent}-950 body-font`}>
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
      <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
    </p>
  </div>
</footer>
</>
  )
}

export default Footer