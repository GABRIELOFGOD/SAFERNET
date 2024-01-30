import React from 'react'
import { Link } from 'react-router-dom'

const TheNews = ({text, textColor, background, linkTo}) => {
  return (
    <div className={`${textColor && textColor} flex font-bold hover:scale-[105%] duration-300 flex-col gap-10 w-[250px] h-[300px] ${background} w-fit items-center justify-center px-6`}>
        <p>{text}</p>
        <Link to={linkTo}>Read more...</Link>
    </div>
  )
}

export default TheNews