import React, { useState } from 'react'
import { ContextUser } from '../utils/Context';
const GetInvolved = () => {
  const {makeReport, setFile, setReport, setTitle, setInformation, setUrl} = ContextUser();

  
  return (
    <div className='md:py-12 md:px-20'>
      <p className="text-4xl font-bold text-center text-primary">Make a Report</p>
      <form onSubmit={e => makeReport(e)} className='py-6'>
        <div className='md:flex gap-5 capitalize w-full'>
          <p className="font-bold my-auto text-primary whitespace-nowrap">Report Type:</p>
          <select onChange={e => setReport(e.target.value)} className='capitalize outline-none w-full bg-primary rounded-md text-white h-fit py-2 px-6' id="">
            <option value="no">  -- Select an option --  </option>
            <option value="gbv">Gender base violence</option>
            <option value="rp">Rape</option>
            <option value="cb">cyber bullying</option>
            <option value="casa">Child abuse and sexual arrassment</option>

          </select>
        </div>
        <div className='flex mt-5 flex-col gap-5 text-[12px]'>
          <input onChange={e => setTitle(e.target.value)} type="text" className='w-full border-2 border-primary outline-none h-10 rounded-md px-6' placeholder='Report Title' />
          <textarea onChange={e => setInformation(e.target.value)} className='h-[100px] py-2 px-6 outline-none rounded-md border-2 border-primary w-full' placeholder='Report information'></textarea>
          <div className="md:flex w-full justify-between gap-5">
            <div className='w-full'>
              <label className='text-primary font-bold' htmlFor="url">Got a website Url?</label>
              <input onChange={e => setUrl(e.target.value)} type="text" id='url' className='w-full border-2 border-primary outline-none h-10 rounded-md px-6' placeholder='Website Url' />
            </div>
            <div className='w-full'>
              <label className='text-primary font-bold' htmlFor="file">Upload a File Evidence</label>
              <input onChange={e => setFile(e.target.value)} type="file" id='file' className='w-full border-2 border-primary outline-none h-10 rounded-md px-6' placeholder='Website Url' />
            </div>
          </div>
        </div>
        <button className='bg-primary rounded-md py-3 w-full text-white mt-5'>Submit Report</button>
      </form>
    </div>
  )
}

export default GetInvolved;