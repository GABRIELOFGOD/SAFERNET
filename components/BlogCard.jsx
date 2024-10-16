// import React from 'react'
// import { titleTrunc, wrap } from '../utils/truncator'

// const BlogCard = ({image, topic, content, author, date}) => {
//   return (
//     <div className='md:w-[300px] duration-200 bg-white shadow-md rounded-md overflow-hidden mb-3'>
//         {image && <div className='max-h-[200px] overflow-hidden'><img className='w-fit hover:scale-105 duration-300' src={image} alt="blog image" /></div>}
//         <div className='p-5 shadow-sm'>
//             <p className="font-bold capitalize text-primary">{titleTrunc(topic)}</p>
//             <div className="flex gap-3 justify-between">
//               <p className="font-semibold text-[10px] py-2 text-gray-600">Posted by: {author}</p>
//               <p className='h-full w-2 bg-gray-500'></p>
//               <p className="font-semibold text-[10px] py-2 text-gray-600">Date: {date}</p>
//             </div>
//             <p className=' text-[12px]'>{wrap(content)}</p>
//         </div>
//     </div>
//   )
// }

// export default BlogCard

import React from 'react';
import { titleTrunc } from '../utils/truncator';

const BlogCard = ({ image, topic, content, author, date }) => {
  // Sanitize content to remove any HTML tags and unsafe content
  // const wrappedContent = wrap(content)
  // const sanitizedContent = DOMPurify.sanitize(wrappedContent);

  return (
    <div className='w-full duration-200 bg-white shadow-md md:h-[100px] flex rounded-md overflow-hidden mb-3'>
      {image && (
        <div className='max-h-full flex-1 overflow-hidden'>
          <img className='w-full h-full object-cover hover:scale-105 duration-300' src={image} alt="blog image" />
        </div>
      )}
      <div className='p-5 md:flex-[5] flex-[2] shadow-sm'>
        <p className="font-bold capitalize text-primary">{titleTrunc(topic)}</p>
        <div className="flex gap-3 justify-between">
          <p className="font-semibold text-[10px] py-2 text-gray-600">Posted by: {author}</p>
          <p className='h-full w-2 bg-gray-500'></p>
          <p className="font-semibold text-[10px] py-2 text-gray-600">Date: {date}</p>
        </div>
        {/* <p className='text-[12px]'>{content}</p> */}
      </div>
    </div>
  );
};

export default BlogCard;
