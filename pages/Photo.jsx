import React from 'react'
import { photos } from '../utils/Constants'
import { Link } from 'react-router-dom'

const Photo = () => {
  return (
    <div className='my-10 px-6 md:px-32'>
      <p className="text-2xl font-bold text-primary text-center">These are the the Photos of our Recent Events and Campaigns</p>
      <div className="flex gap-5 my-5 flex-wrap">
        {
          photos.map(photo => (
            <Link target='_blank' to={photo.link} className='md:w-[150px] hover:scale-[105%] duration-200' key={photo.id}>
              {photo.cover && <div className='md:h-[100px] h-[200px] overflow-hidden'><img src={photo.cover} className='h-fit' alt="Event-img" /></div>}
              <p className="text-primary font-semibold">{photo.title}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Photo