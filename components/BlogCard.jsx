import React from 'react'

const BlogCard = ({image, topic, content, author}) => {
  return (
    <div className='md:w-[300px] mb-5'>
        <img src={image} alt="blog image" />
        <div className='p-3 shadow-sm'>
            <p className="font-bold">{topic}</p>
            <p className="font-semibold">{author}</p>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default BlogCard