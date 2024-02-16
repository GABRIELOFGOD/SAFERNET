import React, { useState } from 'react'
import { ContextUser } from '../utils/Context';
import { Circles } from 'react-loader-spinner';
const GetInvolved = () => {
  const {makeReport, setFile, setReport, setTitle, setInformation, setUrl, file, report, title, information, url, reportLoading} = ContextUser();

  const imageUpload = e => {
    try {
      setFile(e.target.files[0])
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className='md:py-12 px-6 md:px-20'>
      <p className="text-4xl font-bold text-center text-primary">Make a Report</p>
      <form onSubmit={e => makeReport(e)} className='py-6'>
        <div className='md:flex gap-5 capitalize w-full'>
          <p className="font-bold my-auto text-primary whitespace-nowrap">Report Type:</p>
          <select value={report} onChange={e => setReport(e.target.value)} className='capitalize outline-none w-full bg-primary rounded-md text-white h-fit py-2 md:px-6' id="">
            <option value="no">  -- Select an option --  </option>
            <option value="gbv">Gender base violence</option>
            <option value="rp">Rape</option>
            <option value="cb">cyber bullying</option>
            <option value="casa">Child abuse and sexual arrassment</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className='flex mt-5 flex-col gap-5 text-[12px]'>
          <input value={title} onChange={e => setTitle(e.target.value)} type="text" className='w-full border-2 border-primary outline-none h-10 rounded-md px-6' placeholder='Report Title' />
          <textarea value={information} onChange={e => setInformation(e.target.value)} className='h-[100px] py-2 px-6 outline-none rounded-md border-2 border-primary w-full' placeholder='Report information'></textarea>
          <div className="md:flex w-full justify-between gap-5">
            <div className='w-full'>
              <label className='text-primary font-bold' htmlFor="url">Got a website Url?</label>
              <input value={url} onChange={e => setUrl(e.target.value)} type="text" id='url' className='w-full border-2 border-primary outline-none h-10 rounded-md px-6' placeholder='Website Url' />
            </div>
            <div className='w-full'>
              <label className='text-primary font-bold' htmlFor="file">Upload a File Evidence</label>
              <input onChange={e => imageUpload(e)} type="file" id='file' className='w-full border-2 border-primary outline-none h-10 rounded-md px-6' placeholder='Website Url' />
            </div>
          </div>
        </div>
        {
          reportLoading ?
          <button disabled className='bg-gray-400 rounded-md flex justify-center py-3 w-full mt-5'><Circles color='#1a3855' ariaLabel='loading' width={20} height={20} /></button> :
          <button className='bg-primary rounded-md py-3 w-full text-white mt-5'>Submit Report</button>
        }
      </form>
    </div>
  )
}

export default GetInvolved;