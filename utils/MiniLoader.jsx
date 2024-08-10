import React from 'react'
import { Circles } from 'react-loader-spinner'

const MiniLoader = ({color, size}) => {
  return (
    <div className='w-full justify-center items-center flex'>
      <Circles
        color={color ? color : "white"}
        height={size ? size : 30}
        width={size ? size : 30}
      />
    </div>
  )
}

export default MiniLoader