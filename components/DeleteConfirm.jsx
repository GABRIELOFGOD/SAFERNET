import React from 'react'
import { ContextUser } from '../utils/Context'

const DeleteConfirm = ({ id, setDeleter }) => {
  const { blogDeleter } = ContextUser();

  const closer = () => {
    setDeleter(false)
  }

  const final = () => {
    blogDeleter(id, closer);
  }

  return (
    <div className='bg-white py-6 px-10 rounded-md shadow-md'>
      <p className="text-primary text-2xl font-bold text-center">Are you sure you want to delete this blog?</p>
      <div className="flex justify-between pt-10 px-20">
        <button onClick={() => setDeleter(false)} className='py-2 px-4 rounded-md text-primary shadow-md border font-semibold hover:bg-primary duration-200 hover:text-white border-primary'>Cancel</button>
        <button onClick={final} className='py-2 px-4 rounded-md text-white shadow-md bg-red-500 border font-semibold hover:bg-opacity-80 duration-200 hover:text-white border-red-500'>Delete</button>
      </div>
    </div>
  )
}

export default DeleteConfirm