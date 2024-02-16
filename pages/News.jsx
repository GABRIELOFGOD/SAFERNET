import React from 'react'
import { theNews } from '../utils/Constants'
import { Link } from 'react-router-dom'
import NewsCard from '../components/NewsCard'
import { ContextUser } from '../utils/Context'

const News = () => {
  const {news} = ContextUser()
  return (
    <div className='bg-secondary py-6 px-6 md:py-12 md:px-16'>
      {news ? <div>
        <p className='font-bold text-4xl text-center capitalize text-primary'>in the news</p>
      <div className="flex gap-10 my-10 justify-center flex-wrap">
        {theNews.map(news => (
          <Link to={news.path} key={news.id}>
            <NewsCard topic={news.topic} image={news.image} />
          </Link>
        ))}
      </div>
      </div> : <p className='font-bold text-center text-4xl text-gray-400'>No news Posted Yet</p>}
    </div>
  )
}

export default News