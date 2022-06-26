import React from 'react'

const Card  = ({image, heading, description} ) => {
  return (
    <div className='h-72 flex-column md:flex border-light-gray border-4 rounded-md'>
        <div className='w-full md:w-1/4 px-2 bg-yellow flex items-center justify-center'>
            <div className='w-36 h-36 relative flex items-center justify-center'>
                {image}
            </div>
        </div>
        <div className='w-full px-1 text-center py-4 md:px-8 md:py-10 md:w-3/4 md:text-start'>
            <h3 className='font-montserat text-xl pb-2 font-medium'>{heading}</h3>
            <p className='font-montserat text-base'>{description}</p>
        </div>
    </div>
  )
}

export default Card 