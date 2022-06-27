import React, { useState } from 'react'


const Board = ({image, bgColor,  desc}) => {

  const [flip, setFlip] = useState(false);

  return (
    <div className='w-90 mx-auto h-96 relative cursor-pointer hover:rotate-180 transition-all ease-in-out delay-150'>
        <div className={`flex flex-col z-20 items-center ${bgColor} absolute  justify-between h-full w-full pt-12`}>
          <div className='text-white font-montserat md:text-xl'>
            {desc}
          </div>
          <div>
            <div className='relative w-80 h-72'>
                {image}
            </div>
          </div>
        </div>
        <div className='absolute z-10 h-full w-full'>
          <h2>Chat with students everywhere</h2>
          <ul>
            <li>Anonymously catch up on the talk around campus!</li>
            <li>Check out what undergraduates across the country are talking about</li>
            <li>Post real-time photos into the feed</li>
          </ul>
        </div>
    </div>
  )
}

export default Board