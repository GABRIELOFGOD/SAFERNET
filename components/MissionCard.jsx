import React from 'react'

const MissionCard = ({title, body, image}) => {
  return (
    <div className='w-[300px] shadow-md mx-4'>
        <img src={image} alt="" />
        <div className='p-5'>
            <p className='text-2xl font-bold mb-5'>{title}</p>
            <p>{body}</p>
        </div>
    </div>
  )
}

export default MissionCard