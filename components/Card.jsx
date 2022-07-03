import React from 'react'

const Card  = ({image, head, desc} ) => {
  return (
    <div className='h-fit w-90 mx-auto flex-column md:flex border-light-gray border-4 rounded-md md:h-60 lg:h-64 md:w-full'>
        <div className='w-full p-3 bg-yellow flex items-center justify-center  md:w-1/3 '>
            <div className='w-32 h-32  relative flex items-center justify-center'>
                {image}
            </div>
        </div>
        <div className='w-full px-2 text-center py-4 md:px-8 md:py-10 md:w-2/3 md:text-start'>
            <h3 className='font-montserat  pb-2 px-5 text-base md:text-xl md:px-0'>{head}</h3>
            <p className='font-montserat text-sm px-5 text-justify md:text-start md:px-0'>{desc}</p>
        </div>
    </div>
  )
}

export default Card 