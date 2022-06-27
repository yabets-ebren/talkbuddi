import React, { useState } from 'react'


const Board = ({image, bgColor, fontColor,borderColor, title, backTitle, backdesc}) => {

  const [flip, setFlip] = useState('');
  return (
      <div onClick={()=>{setFlip('rotate-y-180')}} className={`w-90 mx-auto h-96 relative cursor-pointer ${flip} transition-all ease-in-out duration-1000  transfrom-style3d`}>
          <div className={` flex flex-col z-20 items-center justify-between ${bgColor}  absolute delay-1000 pt-10 md:pt-12  h-full w-full  backface-hidden`}>
            <div className='text-white font-montserat text-center px-5 text-xl md:px-0'>
              {title}
            </div>
            <div>
              <div className=' w-64 h-60  relative md:w-80 md:h-72'>
                  {image}
              </div>
            </div>
          </div>
          <div className={`rotate-y-180 absolute z-10 border-8 ${borderColor} h-full overflow-y-scroll w-full p-10`}>
            <h2 className={`text-xl ${fontColor} text-center font-montserat`}>
              {backTitle}
            </h2>
            <ul className='mt-4 space-y-3 font-montserat list-disc'>
              {backdesc.map((desc) => 
                <li>{desc}</li>
              )}
            </ul>
          </div>
      </div>

  )
}

export default Board