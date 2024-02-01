import React from 'react'

const NewsCard = ({image, topic}) => {
  return (
    <div className='md:w-[200px] hover:scale-[105%] duration-200 hover:text-greener'>
        <img src={image} alt="news-image" />
        <p className="font-bold text-lg">{topic}</p>
    </div>
  )
}

export default NewsCard