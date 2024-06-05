import React from 'react'
import { Link } from 'react-router-dom'

const Education = () => {
  return (
    <div className='flex justify-center items-center flex-col h-screen'>
      <p className="text-center text-8xl font-extrabold text-gray-600">COMING SOON...</p>
      <p className="text-center py-5">OUR EDUCATIONAL WEBSITE IS COMING VERY SOON...</p>
      <Link className='text-xl text-center text-primary' to='/'>Back Home</Link>
    </div>
  )
}

export default Education