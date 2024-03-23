import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {

  const [blogs, setBlog] = useState([]);
  
  useEffect(() => {
    const localBlogs = getBlogs();
    setBlog(localBlogs)
  },[]);

  const handleDelete = id => {
    deleteBlog(id)
    const localBlogs = getBlogs();
    setBlog(localBlogs)
  }

  if(blogs.length < 1 ) return <EmptyState lable={'Go To Blogs'} address={'/blogs'} message={'No Bookmarks Available'}/>

  return (
    <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {blogs.map(blog =>
      <BlogCard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog} />)}      
    </div>
  );
};

export default Bookmarks;