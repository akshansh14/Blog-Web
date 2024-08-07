import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import BlogDetails from '../components/BlogDetails'
import Pagination from '../components/Pagination'

const HomePage = () => {

  const {posts,loading }=useContext(AppContext)


  return (
    <div className='mb-[100px]  w-6/12 max-w-[672px] mx-auto'>
      
     {
      loading ? (<div className='text-2xl h-[600px] flex items-center justify-center w-[672px]  text-blue-950'>
         Loading..
        </div>) :
         (
          
            posts.map(
              (post)=>(<BlogDetails post={post} key={post.id}/>)
            )
         )
     }
      <Pagination/>
    </div>
  )
}

export default HomePage