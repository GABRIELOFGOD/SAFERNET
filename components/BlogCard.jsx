import React from 'react'
import { titleTrunc, wrap } from '../utils/truncator'

const BlogCard = ({image, topic, content, author}) => {
  return (
    <div className='md:w-[300px] hover:scale-[105%] duration-200 bg-white shadow-md rounded-md overflow-hidden mb-5'>
        {image && <div className='max-h-[200px] overflow-hidden'><img className='w-fit' src={image} alt="blog image" /></div>}
        <div className='p-3 shadow-sm'>
            <p className="font-bold capitalize text-primary">{titleTrunc(topic)}</p>
            <p className="font-semibold text-[10px] py-2 text-gray-600">Posted by: {author}</p>
            <p className=' text-[12px]'>{wrap(content)}</p>
        </div>
    </div>
  )
}

export default BlogCard