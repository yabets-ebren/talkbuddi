import React from 'react'

const Board = ({image, desc}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div>{desc}</div>
        <div>
            <div className='relative w-full bg-pink'>
                {image}
            </div>
        </div>
    </div>
  )
}

export default Board