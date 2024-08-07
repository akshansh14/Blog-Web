import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useLocation } from 'react-router-dom';

const Pagination = () => {

  const {page,totalpage,handlePage}=useContext(AppContext);
  const location=useLocation();
  let tag =null
  let category=null
if(location.pathname.includes("tags")){

   tag=location.pathname.split("/").at(-1).replaceAll("-"," ")
}
if(location.pathname.includes("categories")){

    category=location.pathname.split("/").at(-1)
}


  return (
    <div
    className=' bg-white py-3 -shadow-md inset-x-0 tracking-wide border-gray-300 border-t border-2 shadow-lg uppercase fixed bottom-0 flex text-center w-full'
    >
    <div className='max-w-[672px] w-6/12 flex mx-auto px-2 items-center justify-between'>
    <div className='flex gap-3 transition-all ease-in duration-300'>
    {
      page <6 &&
      <button
      className="text-blue-900 font-semibold hover:text-white border border-blue-900 hover:bg-blue-900 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-900 dark:text-blue-900 dark:hover:text-white dark:hover:bg-blue-900 "
      onClick={()=>handlePage(page+1,tag,category)}
      >Next</button>
     }
      {
      page >1 &&
      <button
      className="text-blue-900 font-semibold hover:text-white border border-blue-900 hover:bg-blue-900 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-900 dark:text-blue-900 dark:hover:text-white dark:hover:bg-blue-900 "
      onClick={()=>handlePage(page-1,tag,category)}
      >Prev</button>
     } 
    </div>
     <div> <p>Page {" "+page+" of "+totalpage}</p></div>
    </div>

    </div>
  )
}

export default Pagination