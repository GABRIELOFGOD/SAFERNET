import React, { useEffect } from 'react'
import MissionCard from '../components/MissionCard'
import { missionCard } from '../utils/Constants'
import Abuse from '../components/Abuse'
import { ContextUser } from '../utils/Context'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
const heroeImg = '/images/homeHero.jpg'
const crush = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706563649/safernet/crush_llslrd.jpg'
const consult = '/images/contact.jpg'
// const heroeImg = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1707148421/safernet/multiethnic-business-partners-discussing-contract-terms-min_kcts12.jpg'
// const crush = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706563649/safernet/crush_llslrd.jpg'
// const consult = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1707148421/safernet/multiethnic-business-partners-discussing-contract-terms-min_kcts12.jpg'

const Home = () => {
  const { viewBlog, blogs } = ContextUser();

  useEffect(() => {
    viewBlog()
  },[])

  return (
    <div>
      <div className='md:grid grid-cols-2'>
        <div className='bg-primary text-white flex flex-col items-center justify-center gap-5 px-6 py-12 md:px-24'>
          <p className="text-4xl font-bold">Safety in the Digital Realm, Societal Rights</p>
          <p className="">Our goal is to diminish digital disparities by shaping a digital world that is safer and more secure, especially for women and children.</p>
        </div>
        <img src={heroeImg} alt="" />
      </div>
      <div className='md:grid bg-secondary py-12 grid-cols-2'>
        <p className="text-3xl pb-5 md:pb-0 px-6 md:px-20 my-auto text-primary font-bold">What's the Emphasis on Online Safety and Equality?</p>
        <p className='md:px-20 px-6 md:w-[600px] font-semibold'>Neglecting the reduction of digital inequalities through the promotion of inclusion, online safety, and rights—particularly for vulnerable groups—poses the risk of intensifying disparities, creating new digital divides, and/or worsening those that have persisted over the years.</p>
      </div>
      <div className='py-20 flex flex-col gap-5 items-center md:flex-row justify-center md:px-6'>
        {
          missionCard?.map((card, i) => (
            <MissionCard
              key={i}
              image={card.image}
              title={card.title}
              body={card.body}
            />
          ))
        }
      </div>
      <div className='bg-primary py-6 px-6 md:py-12 md:px-24'>
        <Abuse />
      </div>
      <div className=' py-10'>
        <p className='px-20 flex text-4xl font-semibold text-primary my-5'>Recent Blog</p>
        <div className='flex flex-wrap px-10 md:px-28 justify-center gap-10'>
          {
            blogs?.slice().reverse().slice(0, 3).map((card, i) => (
              <Link to={`/details/${card?._id}`} key={i}>
                <BlogCard
                  topic={card.title}
                  image={card.image}
                  author={card.postedBy}
                  content={card.body}
                />
              </Link>
            ))
          }
        </div>
        <div className="w-full flex justify-end items-end"><Link to='/blog' className="hover:scale-x-105 duration-200 font-semibold py-3 text-sm px-8 bg-primary text-white mx-20">Read more...</Link></div>
      </div>
      <div className='bg-secondary flex flex-col-reverse md:grid grid-cols-2 p-6 gap-5 md:py-14 md:px-28'>
        <div className='my-auto md:px-6 '>
          <p className="text-4xl font-bold pb-5 text-primary">Consulting</p>
          <p className='font-semibold'>We provide support to internet-based organizations, tech-driven businesses, civil society organizations, and government partners in the following domains:</p>
        </div>
        <img src={consult} alt="consult" />
      </div>
    </div>
  )
}

export default Home