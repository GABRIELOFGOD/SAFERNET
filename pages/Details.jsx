import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ContextUser } from '../utils/Context';
import { IoArrowBack } from "react-icons/io5";

const Details = () => {
  const {id} = useParams();
  const { singleBlog, blog } = ContextUser();

  useEffect(() => {
    singleBlog(id);
  }, [])

  return (
    <div className='md:px-52 px-6 py-12'>
      <Link to='/blog' className="flex w-fit pb-3 gap-3">
        <IoArrowBack className='my-auto' />
        <p className="semi-bold">Back</p>
      </Link>
      {blog ? <div>
        <p className="text-3xl capitalize font-bold text-black">{blog.theBlog.title}</p>
        {blog.theBlog.postedBy && <p className="text-[15px] pl-6 font-mono py-2 text-gray-600">Posted by: {blog.theBlog.postedBy}</p>}
        {blog.theBlog.image && <img src={blog.theBlog.image} alt="blog Img" />}
        <p className='text-justify text-[16px] pt-10 pb-3'>{blog.theBlog.body}</p>
      </div> : <p className='text-4xl font-bold text-center text-gray-400'>Loading Blog...</p>}
    </div>
  )
}

export default Details