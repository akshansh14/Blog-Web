import { createContext, useState } from "react";
import { baseUrl,newBaseUrl } from "../baseUrl";
import { useLocation, useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading ,setLoading]=useState(false)
    const [posts,setPosts]=useState([])
    const [page,setPage]=useState(1)
    const [totalpage,setTotalpage]=useState(null)
    const location=useLocation();
    const navigate=useNavigate()

    
    async function fetchBlogs(page,tag,category){
        setLoading(true)
        let url =`${baseUrl}?page=${page}`;
        if(tag){
            url+=`&tag=${tag}`
        }
        if(category){
            url += `&category=${category}`;
        }
        try{
           
        const response = await fetch(url)
        const data = await response.json()
        setPosts(data.posts)
        setPage(data.page)
        setTotalpage(data.totalPages)
       }
       catch(error){
        alert("error fetching")
        setPosts([])
        setPage(1)
        setTotalpage(null)
       }
       setLoading(false)
        
    }

    function handlePage(page,tag,category){

        setPage(page)
        fetchBlogs(page,tag,category)
    }

    const Value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalpage,
        setTotalpage,
        fetchBlogs,
        handlePage,
        newBaseUrl,
        location,
        navigate
    }

    return <AppContext.Provider value={Value}>
        {children}
        </AppContext.Provider>
}