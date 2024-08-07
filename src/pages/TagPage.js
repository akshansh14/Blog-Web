import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import BlogDetails from '../components/BlogDetails';
import Pagination from '../components/Pagination';

const TagPage = () => {

  const location=useLocation();
  const tag=location.pathname.split("/").at(-1)

  const navigate=useNavigate()


  const { posts, loading } = useContext(AppContext);


  return (
    <div className='flex flex-col w-6/12 max-w-[672px] mx-auto mt-2'> 

{
        loading ?
        (<div className='text-2xl h-[600px] flex items-center justify-center w-[672px]  text-blue-950'>
          Loading..
         </div>) :
         (
          posts.length === 0 ? (
            <div className="min-h-[80vh] w-full flex justify-center items-center">
              <p className="text-center font-bold text-3xl">No Blogs Found !</p>
            </div>
          ) :

          (
             <>
                 <div className='flex gap-5 sm:flex-row flex-col items-center mb-3'>
                  <button onClick={()=>navigate(-1)}
                  className="text-blue-900 font-semibold hover:text-white border border-blue-900 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-700 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-900 dark:text-blue-900 dark:hover:text-white dark:hover:bg-blue-900 dark:focus:ring-blue-700">
                    Back</button>
                    <p className='text-2xl font-semibold'>
                      Blog Tagged {" "} <span className='text-blue-700 underline'>#{tag}</span>
                    </p>
              </div>

                {posts.map((post) => (
                  <BlogDetails key={post.id} post={post} />
                ))}
              </>
          ) 
         )
      }


        <Pagination/>
    </div>
  )
}

export default TagPage