import React, { useRef } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { ContextUser } from '../utils/Context'

const EditBlog = ({title, details, file, close, settingTitle, id, settingFile, settingDetails}) => {
    const { editBlog } = ContextUser();

    const imgUpload = e => {
        try {
          settingFile(e.target.files[0])
        } catch (err) {
          console.log(err)
        }
      }
    
      return (
        <div className='bg-button relative py-20 px-12 max-h-[520px] overflow-auto rounded-md'>
          <IoCloseSharp onClick={close} className='absolute top-8 right-10 text-white text-2xl cursor-pointer' />
          <form className='flex flex-col gap-5' onSubmit={e => editBlog(e, id, close)}>
            <input value={title} onChange={e => settingTitle(e.target.value)} type="text" className='px-3 text-white text-[12px] h-[40px] bg-transparent outline-none border-2 border-white rounded-sm' placeholder='Blog Title' />
            <textarea value={details} onChange={e => settingDetails(e.target.value)} className='h-[100px] text-white bg-transparent border-2 border-white rounded-md p-3 text-[12px] outline-none w-full' placeholder='Blog Contents'></textarea>
            <div>
              <p className="text-[12px] text-white">Blog Image/Flyer</p>
              {file && <div className="h-[100px] overflow-hidden"><img src={file} className='w-[150px]' /></div>}
              <input onChange={e => imgUpload(e)} className='text-white' type="file" />
            </div>
            <button className='bg-white w-full rounded-md text-primary py-3 hover:bg-primary duration-200 hover:text-white text-[12px]'>Post Blog</button>
          </form>
        </div>
      )
}

export default EditBlog