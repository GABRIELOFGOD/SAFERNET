import React from 'react'
import MissionCard from '../components/MissionCard'
import { missionCard } from '../utils/Constants'
const heroeImg = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706561599/safernet/homeHero_jcsock.png'
const crush = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706563649/safernet/crush_llslrd.jpg'
const consult = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706563664/safernet/image1_iaqsum.jpg'

const Home = () => {
  return (
    <div>
      <div className='md:grid grid-cols-2'>
        <div className='bg-primary text-white flex flex-col items-center justify-center gap-5 px-6 py-12 md:px-24'>
          <p className="text-4xl font-bold">Digital Safety, Rights and Society</p>
          <p className="">We are on a mission to reduce digital inequalities by crafting a safer, more secure digital world for women and children.</p>
        </div>
        <img src={heroeImg} alt="" />
      </div>
      <div className='md:grid bg-secondary py-12 grid-cols-2'>
        <p className="text-3xl pb-5 md:pb-0 px-6 md:px-20 my-auto text-primary font-bold">Why Focus on Safety & Equality Online?</p>
        <p className='md:px-20 px-6 md:w-[600px] font-semibold'>Failure to reduce digital inequalities by fostering inclusion, safety and rights online, especially for vulnerable groups risks deepening inequalities, opening new digital divides and/or exacerbating those that have proved persistent over the years.</p>
      </div>
      <div className='py-20 flex flex-col gap-5 items-center md:flex-row justify-center md:px-6'>
        {
          missionCard?.map(card => (
            <MissionCard
              image={card.image}
              title={card.title}
              body={card.body}
            />
          ))
        }
      </div>
      <div className='bg-primary py-6 px-12 md:py-12 md:px-24'>
        <img src={crush} alt="crush" />
      </div>
      <div className='bg-secondary flex flex-col-reverse md:grid grid-cols-2 p-6 gap-5 md:py-14 md:px-28'>
        <div className='my-auto md:px-6 '>
          <p className="text-4xl font-bold pb-5 text-primary">Consulting</p>
          <p className='font-semibold'>We support internet-based organizations, tech-driven businesses, civil society organizations, and government partners in the following areas:</p>
        </div>
        <img src={consult} alt="consult" />
      </div>
    </div>
  )
}

export default Home