import React from 'react'
import { Link, Outlet } from 'react-router-dom';
const photo = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1708379324/safernet/WSD_25_of_111_cxdyy1.jpg';
const video = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1708379325/safernet/WSD_23_of_111_s33kxk.jpg';

const Media = () => {

  const item = [
    {
      id: 1,
      text: 'PHOTO',
      image: photo,
      path: 'photo'
    },
    {
      id: 2,
      text: 'VIDEO',
      image: video,
      path: 'video'
    }
  ]

  return (
    <div className='py-12 bg-secondary'>
      <p className="text-4xl text-primary mb-10 text-center font-bold">Photos & Videos</p>
      <div className="md:flex-row flex gap-5 px-6 md:px-32 flex-col">
          <Link className={`rounded-lg wow relative overflow-hidden`} to={'photo'}>
            <img src={photo} className='-z-10' alt="foto" />
          </Link>
          <Link className={`rounded-lg wow1 relative overflow-hidden`} to={'video'}>
            <img src={video} alt="foto" />
          </Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Media;