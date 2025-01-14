import { list } from 'postcss';
import React from 'react'

const BlogContentBody = ({block}) => {
  // block && console.log("block", block);
  return (
    <div className='gap-5 flex flex-col text-neutral-800'>
      {block?.map((data, i) => (
        data.type == "paragraph" ? <p key={i} dangerouslySetInnerHTML={{ __html: data.data.text }}></p> :
        data.type == "list" ? data.data.style == "ordered" ?
        <ol key={i} className='list-decimal pl-5'>
          {data.data.items.map((list, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: list }}></li>
          ))}
        </ol> :
        <ul key={i} className='list-disc pl-6'>
          {data.data.items.map((list, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: list }}></li>
          ))}
        </ul> : data.type == "header" ? data.data.level == 2 ? <p key={i} className='font-semibold text-3xl text-black' dangerouslySetInnerHTML={{ __html: data.data.text }}></p> :
        <p key={i} className='font-semibold text-2xl text-black' dangerouslySetInnerHTML={{ __html: data.data.text }}></p> : data.type == "image" ? 
          <div className="flex gap-5 flex-wrap"><img key={i} className='max-w-full' src={data.data.file.url} alt={data.data.caption} /></div>
        : data.type == "quote" ? <p key={i} className='font-semibold text-black' dangerouslySetInnerHTML={{ __html: `"${data.data.text}"` }}></p> : data.type == "table" ?
        <table key={i}></table>
        : <p key={i} dangerouslySetInnerHTML={{ __html: data.data.text }}></p>
      ))}
    </div>
  )
}

export default BlogContentBody