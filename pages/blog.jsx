import React from 'react'
import Blogcard from '../components/Blogcard'
import Blogwidget from '../components/Blogwidget'
import Categories from '../components/Categories'
import { getPosts } from '../services'

const blog = ( {posts}) => {
  return (
    <div className='container mx-auto my-12'>
      <h1 className='text-center pb-10 text-4xl md:text-6xl font-nunito '><span className='font-poppins font-semibold'>Buddi </span>Blog</h1>
      <div className=' border-gray border-t-2 grid grid-cols-1 md:grid-cols-12'> 
        <div className='col-span-1 p-10 pl-0 md:col-span-8'>
          {posts.map((post, index) => <Blogcard post={post.node} key={post.title} />)}
        </div>
        <div className='col-span-1 md:col-span-4'>
          <div className='relative top-8 md:sticky'>
            <Categories/>
            <Blogwidget/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default blog

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {posts}
  }
}