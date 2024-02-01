import React from 'react'
import { theNews } from '../utils/Constants'
import { Link } from 'react-router-dom'
import NewsCard from '../components/NewsCard'

const News = () => {
  return (
    <div className='bg-secondary py-6 px-6 md:py-12 md:px-16'>
      <p className='font-bold text-4xl text-center capitalize text-primary'>in the news</p>
      <div className="flex gap-10 my-10 justify-center flex-wrap">
        {theNews.map(news => (
          <Link to={news.path} key={news.id}>
            <NewsCard topic={news.topic} image={news.image} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default News