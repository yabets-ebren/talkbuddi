import Link from 'next/link';
import React, {useState, useEffect} from 'react'
import { getCategories } from '../services'



const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className='bg-white rounded-lg shadow-big p-8 mb-8'>
      <h3 className='text-xl font-poppins mb-3'> Categories</h3>
      {categories.map((cat) =>(
        <Link key={cat.slug} href={`/category/${cat.slug}`}>
          <div className='flex gap-x-2 items-center mb-3 '>
            <div className='cursor-pointer group text-xl font-semibold md:text-2xl peer order-1'>
              <h4>{cat.name}</h4>
            </div>
            <div className='w-6 h-6 rounded-full border-1 border-2 cursor-pointer transition ease-in-out duration-500  hover:bg-black peer-hover:bg-black'></div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Categories