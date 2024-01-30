import React from 'react'
import { publications } from '../utils/Constants'
import { Link } from 'react-router-dom'
import CampaignImg from '../components/CampaignImg'

const Publications = () => {
  return (
    <div className='bg-secondary md:py-20 py-6 px-6 md:px-28'>
      <p className='md:text-4xl text-2xl font-bold text-primary py-10'>Recent Publications</p>
      <div className="md:flex-row flex flex-col justify-center items-center md:justify-between gap-5 md:gap-10 flex-wrap">
        {
          publications.map(({ id, image, topic, path, date }) => (
            <Link className='hover:text-greener w-[300px] duration-100' to={path} key={id}>
              <CampaignImg
                date={date}
                image={image}
                title={topic}
                border={'border-black'}
              />
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Publications