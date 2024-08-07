import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {


  return (
    <div className="my-3 mb-5 shadow-md py-2 px-2 flex flex-col w-full">
      <NavLink className="font-bold text-lg" to={`/blog/${post.id}`}>
        {post.title}</NavLink>

      <div
      className="text-sm  flex text-gray-900"
      >{"By " }<p className="italic mx-1"> {post.author}</p> { " On " } 

<NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
<p className="ml-1"> { post.category}</p></NavLink>
      
      </div>

      <div
        className="text-sm  flex text-gray-900 mb-3"
      >Posted On {post.date}</div>

      <p>{post.content}</p>

  {
    post.tags &&
    <div className="text-xs underline flex sm:flex-row flex-col text-blue-700 gap-2 mt-3">
    {
         post.tags.map(
             (tag, index) =>(
             <NavLink to={`/tags/${tag.replaceAll(" ","-")}`} key={index}>#{tag}</NavLink>
            )

         )
     }
    </div>
  }

    </div>
  );
};

export default BlogDetails;
