import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Navbar from "./components/Navbar";



export default function App() {

  const location =useLocation();
  const [searchParam ]=useSearchParams();
  

  const {fetchBlogs}  =useContext(AppContext)

  useEffect(()=>{
const page1=Number(searchParam.get("page")) || 1

if(location.pathname.includes("tags")){
  const tag =location.pathname.split("/").at(-1).replaceAll("-"," ")
  fetchBlogs(page1,tag)
}
else if(location.pathname.includes("categories")){
  const category =location.pathname.split("/").at(-1).replaceAll("-"," ")
  fetchBlogs(page1, null , category)
}
else{
  fetchBlogs(page1)
}
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[location.pathname ,location.search])

 
  
  return (
   <div className="w-screen  mt-[100px] pb-[50px] overflow-x-hidden scroll-smooth">
    <Navbar/>
   

   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/blog/:blogId" element={<BlogPage/>} />
    <Route path="/tags/:tag" element={<TagPage/>} />
    <Route path="/categories/:category" element={<CategoryPage/>} />
   </Routes>
   </div>
  )
}
