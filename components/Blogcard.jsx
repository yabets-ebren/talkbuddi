import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const Blogcard = ({post}) => {
    console.log(post)
  return (
      <div className='shadow-big  rounded-md mb-8 cursor-pointer transition duration-700 hover:scale-105 hover:shadow-2xl'>
       
        <Link href={`/blog/${post.slug}`}>
            <div>
                <div className='relative overflow-hidden shadow-lg pb-80 mb-6'>
                    <img 
                    src={post.featuredImage.url}
                    alt={post.title}
                    className='h-80 object-cover w-full object-top absolute rounded-md'
                    />
                </div>
                <div className=' px-4 flex items-center justify-start gap-x-3'>
                    <div>
                        <div className='flex items-center justify-center mb-4'>
                            <img
                                src={post.author.photo.url}
                                height='10px'
                                width='25px'
                                className='rounded-full object-cover'
                            />
                        </div>
                    </div>
                    <div className='px-10 py-6'><h1>{post.categories.name}</h1></div>
                    <div><p className='text-sm uppercase text-gray'>{moment(post.createdAt).format('MMM DD, YYYY')}</p></div>
                </div>

            </div>
        </Link>
    </div>
  )
}

export default Blogcard