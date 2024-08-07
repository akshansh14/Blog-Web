import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useLocation, useNavigate } from 'react-router-dom';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

  const{newBaseUrl,loading}=useContext(AppContext)

  const location=useLocation();
  const navigate=useNavigate()

  const [blog,setBlog]=useState([])
  const [relatedBlogs,setRelatedBlogs]=useState([])

  const blogID=location.pathname.split("/").at(-1)

  
  async function fetchRelated(){
  const url=`${newBaseUrl}${blogID}`

try{
  const response= await fetch(url);
const data=await response.json()

setBlog(data.blog)
setRelatedBlogs(data.relatedBlogs)
}
catch{
  alert("Can't fetch Blogs")
}
}

useEffect(()=>{
  fetchRelated()
},[location.pathname])

  return (
    <div className='flex flex-col  w-6/12 max-w-[672px] mx-auto mt-2'>


{
        loading ?
        (<div className='text-2xl h-[600px] flex items-center justify-center w-[672px]  text-blue-950'>
          Loading..
         </div>) :
         (
          relatedBlogs.length === 0 ? (
            <div className="min-h-[80vh] w-full flex justify-center items-center">
              <p className="text-center font-bold text-3xl">No Blogs Found !</p>
            </div>
          ) :

          (
             <>
                <div className='flex sm:flex-row flex-col gap-5 items-center mb-3'>
                  <button onClick={() => navigate(-1)}
                  className="text-blue-900 font-semibold hover:text-white border border-blue-900 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-700 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-900 dark:text-blue-900 dark:hover:text-white dark:hover:bg-blue-900 dark:focus:ring-blue-700">
                    Back
                  </button>
                </div>
                <div>
                        <BlogDetails post={blog} key={blogID}/>
                </div>

                <div className='mt-5'> <h1 className='text-3xl font-semibold'>Related Blogs</h1>
                      {
                        relatedBlogs.map(
                          (post)=>(<BlogDetails post={post} key={post.id}/>)
                        )
                      }
                </div>
                      
              </>
          ) 
         )
      }

                     
    </div>
  )
}

export default BlogPage