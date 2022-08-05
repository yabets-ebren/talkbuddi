import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const Blogcard = ({post}) => {
    console.log()
  return (
      <div className='shadow-big  rounded-md mb-8 cursor-pointer transition duration-700 hover:shadow-2xl'>
       
        <Link href={`/blog/${post.slug}`}>
            <div>
                <div className=' relative overflow-hidden shadow-lg pb-80 mb-6'>
                    <img 
                    src={post.featuredImage.url}
                    alt={post.title}
                    className=' object-cover w-full object-top absolute rounded-md h-96'
                    />
                </div>
                <div className=' px-4 flex items-center justify-start gap-x-4 pb-2'>
                    <div className='flex items-center justify-center gap-x-2 '>
                        <div className='flex items-center justify-center'>
                                <img
                                    src={post.author.photo.url}
                                    className='rounded-full object-cover w-7 h-7'
                                />
                        </div>
                        <p className='text-gray text-sm capitalize font-poppins'>{post.author.name}</p>
                    </div>
                    <div className='px-2 py-1 cursor-pointer text-xs bg-light-gray text-gray uppercase rounded-sm transition ease-in-out duration-150 hover:bg-black hover:text-white'>{post.categories[0].name}</div>
                    <div><p className='text-sm uppercase text-gray font-sm font-poppins self-end'>{moment(post.createdAt).format('MMM DD, YYYY')}</p></div>
                </div>

                <h1 className='pl-3 capitalize font-semibold font-montserat text-2xl pb-3 md:text-3xl'>{post.title}</h1>
                <p className='pl-3 text-gray pb-6'>{post.snippet}</p>

            </div>
        </Link>
    </div>
  )
}

export default Blogcard