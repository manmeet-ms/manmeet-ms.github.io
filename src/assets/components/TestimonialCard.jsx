import React, { useRef, useState } from 'react';
import { accent, lightModeText, lightModeBG, darkModeText, darkModeBG, darkBG } from '../../theme.jsx'
import { Person, Star, StarHalf } from '@mui/icons-material';




// <div className={`md:w-3/5 p-6 rounded-xl bg-${accent}-50 bg-opacity-10 text-${accent}-100 `}>
//   <div className={`space-y-3 leading-relaxed text-base `}>
//     <div className={`inline-flex items-center `}>
//       <div className={` flex inline rounded-full p-2 text-${accent}-100 bg-${accent}-50 bg-opacity-10`}>
//         <Person sx={{ fontSize: 16 }} />
//       </div>
//       <h1 className={` text-lg text-white ml-2`}>{props.name}</h1>


//     </div>
//     <hr className='opacity-10' />
//     <span className={`inline-block py-2 px-4 bg-${accent}-500 mt-0.5 bg-opacity-20 text-${accent}-500 text-xs font-medium rounded-md`}>{props.tag}</span>
//     <p className='mb-4' >{props.text}</p>
//     <span className={`inline-block py-2 px-4 bg-${accent}-500 mt-0.5 bg-opacity-20 text-${accent}-500 text-xs font-medium rounded-md`}>{props.tag}</span>

//   </div>
// </div>
const TestimonialCard = (props) => {
  return (

    <section className={` bg-${accent}-800/40 p-4 rounded-xl border border-${accent}-700/20  overflow-hidden`}>
      <div className={`container  mx-auto`}>
        <div className={`mx-auto flex flex-wrap`}>
          <div className={` w-full  lg:mt-0`}>
            <div className={`flex items-center `}>
              <Person className={`p-2 rounded-full text-${accent}-200 bg-${accent}-100/10  mr-4 `} sx={{ fontSize: 40 }} />
              <div>
                <h3 className={` text-xl text-${accent}-50 font-medium`}>{props.name}</h3>
                <p>{props.country}</p>
              </div>
            </div>
            <p className={`pt-4 leading-relaxed`}>{props.review}</p>
            <hr className={`my-3 opacity-20`} />
            <div className={`flex items-center  mb-4`}>
              <Star className={`text-${accent}-200`} fontSize="small" />
              <Star className={`text-${accent}-200`} fontSize="small" />
              <Star className={`text-${accent}-200`} fontSize="small" />
              <Star className={`text-${accent}-200`} fontSize="small" />
              {props.star}
              <p className={`text-${accent}-200 mx-2 mt-1 font-bold`} >{props.rating}</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialCard

TestimonialCard.defaultProps = {
  review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officia quaerat expedita dolore, obcaecati adipisci provident earum voluptatem consequatur ipsa neque dicta suscipit sit, quasi, soluta exercitationem ut a vero?`,
  name: `Client`,
  rating: `5`,
  country: `Ratings`,
star:<StarHalf/>
}

