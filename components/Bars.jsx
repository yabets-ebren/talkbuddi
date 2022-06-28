import React from 'react'

const Bars = ( {heading, desc}) => {
  return (
    <div className='flex md:flex-row border-4 border-gray rounded-md'>
        <div className="bg-yellow w-1/12 h-full"></div>
        <div className="w-11/12 h-full py-5 px-6  md:px-8">
          <h4 className='font-montserat text-2xl text-center  pb-3 md:text-2xl md:text-start'>{heading}</h4>
          <p className='font-montserat'>{desc}</p>
        </div>        
    </div>
  )
}

export default Bars