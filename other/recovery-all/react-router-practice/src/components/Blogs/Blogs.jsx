import React from "react";
import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div>
      <h1>Blog: {blogs.length}</h1>
      <div>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
