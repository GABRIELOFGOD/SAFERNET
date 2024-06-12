import React from 'react'
import { ScrollRestoration } from 'react-router-dom'

const Poster = ({show, children}) => {

  if(show){
    <ScrollRestoration />
  }

  return (
    <div className={`z-50 h-full fixed w-full items-center px-10 justify-center left-0 top-0 bg-white bg-opacity-90 ${show ? 'flex' : 'hidden'}`}>
        {children}
    </div>
  )
}

export default Poster