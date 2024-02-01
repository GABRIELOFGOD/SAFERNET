import React from 'react';
import TheNews from '../components/TheNews';
import { news } from '../utils/Constants';
const StackHolderHeroImg = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706606276/safernet/workshop1_urjnkq.png';
const followHero = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706606276/safernet/report_j4bpmf.jpg'

const StackHolder = () => {
  return (
    <div>
      <div className="md:flex">
        <p className="md:text-5xl text-3xl py-6 leading-8 md:leading-[60px] font-bold md:w-[60%] px-6 md:px-44 bg-primary flex items-center justify-center text-white">Nigeria IBSA Stakeholder Workshop</p>
        <img className='md:w-[40%]' src={StackHolderHeroImg} alt="heroe image" />
      </div>
      <div className="md:flex py-6 md:py-12 bg-secondary flex-row-reverse">
        <div className="md:w-[60%] px-6 md:px-20 font-semibold flex flex-col my-auto gap-10 text-primary">
          <p>The Nigeria Image-Based Sexual Abuse Stakeholder Workshop is committed to forging a collaborative and multi-stakeholder approach to mitigating digital harms, a significant impediment faced by girls and women. This initiative aims to address the challenges that restrict their use of digital technologies and hinder broader participation in online spaces.</p>
          <p>The inaugural edition took place in Lagos, Nigeria, spanning from Tuesday, July 18, to Thursday, July 20, 2023. The event witnessed the active participation of 61 stakeholders representing various sectors, including government, the private sector, civil society organizations, law enforcement, and the media.</p>
        </div>
        <div className='md:w-[40%] mt-6 md:mt-0 px-20 md:px-32'>
          <img className='w-fit mx-auto' src={followHero} alt="heroe image" />
        </div>
      </div>
      <div className='py-12 mb-3 bg-primary text-white'>
        <p className="text-4xl font-bold py-6 text-center">In the News</p>
        <div className='md:flex-row flex flex-col items-center justify-center md:px-24'>
          {
            news.map(item => (
              <TheNews
                key={item.id}
                text={item.text}
                textColor={item.textColor}
                linkTo={item.linkTo}
                background={item.background}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default StackHolder;