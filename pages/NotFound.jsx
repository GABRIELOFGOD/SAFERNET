import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <div>
        <p className="text-8xl font-bold mb-10 text-gray-900 text-center">404 Page not found</p>
        <p className="text-center text-primary">Go back to <Link className='underline' to='/'>Home Page.</Link></p>
      </div>
    </div>
  )
}

export default NotFound