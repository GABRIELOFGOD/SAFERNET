import React from 'react'
import { Circles } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='w-full h-full absolute z-50 bg-white flex items-center justify-center'>
        <Circles color='#1a3855' ariaLabel='loading' width={100} height={100} />
    </div>
  )
}

export default Loader