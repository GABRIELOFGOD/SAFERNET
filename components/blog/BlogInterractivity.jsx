import React from 'react'
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa6";
import { MdOutlineShare } from "react-icons/md";

const BlogInterractivity = () => {
  return (
    <div className='flex justify-between px-6 py-1 border my-10 rounded-full'>
      <div className="flex gap-5">
        <button className="flex gap-2 hover:text-primary my-auto"><span>{2}</span> <span className="my-auto"><BiLike size={20} /></span></button>
        <button className="flex gap-2 my-auto"><span>{4}</span> <span className="my-auto"><FaRegCommentDots size={20} /></span></button>
      </div>
      <button className="flex my-auto">
        <MdOutlineShare size={20} />
      </button>
    </div>
  )
}

export default BlogInterractivity