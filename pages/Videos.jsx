import React from 'react'
import { Link } from 'react-router-dom';
const photo = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706613006/safernet/bl0ha14iypbfr8wyy2v8_rpmhyx.jpg';
const video = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706568108/safernet/about3_st3mu3.jpg';

const Videos = () => {

  const item = [
    {
      id: 1,
      text: 'PHOTO',
      image: photo,
      path: ''
    },
    {
      id: 2,
      text: 'VIDEO',
      image: video,
      path: ''
    }
  ]

  return (
    <div className='py-12 bg-secondary'>
      <p className="text-4xl text-primary mb-10 text-center font-bold">Photos & Videos</p>
      <div className="md:flex-row flex gap-5 px-6 md:px-32 flex-col">
        {
          item.map(foto => (
            <Link className={`rounded-lg wow relative overflow-hidden`} to={foto.path} key={foto.id}>
              <img src={foto.image} alt="foto" />
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Videos