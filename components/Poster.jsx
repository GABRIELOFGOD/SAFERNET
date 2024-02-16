import React from 'react'

const Poster = ({show, children}) => {
  return (
    <div className={`z-50 h-full w-full items-center justify-center absolute left-0 top-0 bg-white bg-opacity-90 ${show ? 'flex' : 'hidden'}`}>
        {children}
    </div>
  )
}

export default Poster