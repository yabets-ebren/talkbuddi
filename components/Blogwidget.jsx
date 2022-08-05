import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getRecentPosts, getSimilarPosts } from '../services'
const Blogwidget = ( { categories, slug}) => {

  const [related, setRelated] = useState([])

  useEffect( () => {
    if(slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelated(result))
    } else{
      getRecentPosts()
        .then((result) => setRelated(result))
    }
  }, [slug]) 


  return (
    <div className='bg-white rounded-lg shadow-big p-8 mb-8'>
      <h3 className='text-xl font-poppins mb-3'> {slug? 'Related Blogs': 'Latest Blogs'}</h3>
      {related.map((post) =>(
        <Link href={`/blog/${post.slug}`}>
        <div key={post.title} className='flex cursor-pointer items-center gap-x-3 w-full mb-4 p-2 transition ease-in-out delay-150 hover:scale-105 hover:shadow-md' >
          <div className='w-16'>
            <img
              alt={post.title}
              src={post.featuredImage.url}
              className='align-middle rounded-full w-16 h-16'
              />
        </div>
        <div className='flex flex-col items-start gap-y-1'>
          <p className='p-1 cursor-pointer text-xs bg-light-gray text-gray uppercase rounded-sm hover:shadow-md'>{post.categories[0].name}</p>

          <h4 className='font-semibold font-montserat cursor-pointer'>{post.title}</h4>

        </div>
      </div>
      </Link>
      ))}
    </div>
  )
}

export default Blogwidget