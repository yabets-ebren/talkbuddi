import React from 'react'


const CircleImages = ({width, height, name, title}) => {
  return (
      <>
        <div className='mx-auto w-90 text-center flex flex-col justify-center items-center'>
            <div className='w-52 h-52 rounded-full border-4 border-yellow bg-purple'>
            </div>
            <p className='font-montserat text-xl pt-4'>{name}</p>
            <p className='font-montserat text-sm pt-1'>{title}</p>
        </div>
      </>
  )
}

export default CircleImages

