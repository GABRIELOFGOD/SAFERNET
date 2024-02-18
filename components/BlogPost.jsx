import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { ContextUser } from '../utils/Context'

const BlogPost = ({close}) => {
  const { blogPoster, blogTitle, blogDetails, setBlogTitle, setBlogDetails, setBlogFile } = ContextUser();

  const imgUpload = e => {
    try {
      setBlogFile(e.target.files[0])
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='bg-button relative py-20 px-12 max-h-[520px] overflow-auto rounded-md'>
      <IoCloseSharp onClick={close} className='absolute top-8 right-10 text-white text-2xl cursor-pointer' />
      <form className='flex flex-col gap-5' onSubmit={e => blogPoster(e, close)}>
        <input value={blogTitle} onChange={e => setBlogTitle(e.target.value)} type="text" className='px-3 text-white text-[12px] h-[40px] bg-transparent outline-none border-2 border-white rounded-sm' placeholder='Blog Title' />
        <textarea value={blogDetails} onChange={e => setBlogDetails(e.target.value)} className='h-[100px] text-white bg-transparent border-2 border-white rounded-md p-3 text-[12px] outline-none w-full' placeholder='Blog Contents'></textarea>
        <div>
          <p className="text-[12px] text-white">Blog Image/Flyer</p>
          <input onChange={e => imgUpload(e)} className='text-white' type="file" />
        </div>
        <button className='bg-white w-full rounded-md text-primary py-3 hover:bg-primary duration-200 hover:text-white text-[12px]'>Post Blog</button>
      </form>
    </div>
  )
}

export default BlogPost