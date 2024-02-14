import React from 'react'
const abuseIne = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1707918481/safernet/4003619_zaf3tk.jpg'
const abuseTwo = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1707918454/safernet/4048871_tfzjx4.jpg'

const Abuse = () => {
  return (
    <div className='flex justify-between gap-5 bg-white'>
        <img className='w-[50px] md:w-[150px]' src={abuseIne} alt="abuse-Image" />
        <p className="md:text-3xl text-xl my-auto font-extrabold">Combact Image-Based Sexual Abuse</p>
        <img className='w-[50px] md:w-[150px]' src={abuseTwo} alt="abuse-image" />
    </div>
  )
}

export default Abuse;