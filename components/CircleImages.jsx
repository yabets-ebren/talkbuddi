import React from 'react'


const CircleImages = ({size, name, position, title, image, border}) => {
  return (
      <>
        <div className='mx-auto w-90 text-center flex flex-col justify-center items-center'>
            <div className={`${size ? size : 'w-52 h-52'} ${position ? position : ""} rounded-full ${border ? border : "border-4 border-yellow"} bg-purple overflow-hidden`}>
              {image}
            </div>
            {name ? <p className='font-montserat text-xl pt-4'>{name}</p> : ""}
            {title ? <p className='font-montserat text-sm pt-1'>{title}</p>: ""}
        </div>
      </>
  )
}

export default CircleImages

// propTypes.default