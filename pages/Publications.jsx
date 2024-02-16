import React from 'react'
import { publications } from '../utils/Constants'
import { Link } from 'react-router-dom'
import CampaignImg from '../components/CampaignImg'
import { ContextUser } from '../utils/Context'

const Publications = () => {
  const {publication} = ContextUser()
  return (
    <div className='bg-secondary md:py-20 py-6 px-6 md:px-28'>
      {
        publication ?
        <div>
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
        </div> : <p className='font-bold text-center text-4xl text-gray-400'>No publication yet</p>
      }
    </div>
  )
}

export default Publications