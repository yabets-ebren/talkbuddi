import React from 'react'
import Blogwidget from '../../components/Blogwidget'
import PostDetail from '../../components/PostDetail'
import { getPostDetails, getPosts } from '../../services'


const BlogDetails = ({posts}) => {
  return (
    <div className='container mx-auto px-10 my-12 max-w-6xl'>
        <div className='grid grid-cols-1 gap-y-12'>
            <div className=' col-span-1'>
                <PostDetail posts={posts} />
            </div>
            <div className='col-span-1'>
                <Blogwidget slug={posts.slug}  categories={posts.categories.map((category) => category.slug)}/>
            </div>
        </div>
    </div>
  )
}

export default BlogDetails

export async function getStaticProps({params}) {
    const data =  await getPostDetails(params.slug);
  
    return {
      props: {posts: data}
    }
  }

  export async function getStaticPaths() {
      const posts = await getPosts();

      return{
          paths: posts.map(({node: {slug}}) => ({ params: {slug}}) ),
          fallback:false 
      }
  }