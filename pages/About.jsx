import React from 'react'
import WhoWhat from '../components/WhoWhat';
import { whyChooseUs } from '../utils/Constants';
import { LuDot } from "react-icons/lu";
import WhatWeDo from '../components/WhatWeDo';
const imgOne = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706568108/safernet/about3_st3mu3.jpg';
const imgTwo = "https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706568105/safernet/about1_cxudxl.jpg";
const imgThree = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706568099/safernet/about2_ghpy4a.png';
const whyImg = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706603820/safernet/why_yckwrk.jpg';
const joinImg = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706603823/safernet/join-us_zjvdsn.jpg';

const About = () => {
  return (
    <div>
      <div className='md:grid p-6 grid-cols-2 bg-secondary'>
        <div className='md:px-28 m-auto '>
          <p className='text-4xl pb-6 font-bold'>Safeguarding Digital Spaces for Children and Women</p>
          <p>Welcome to TechSocietal, where trust and safety for children and women online is not just a mission—it's our unwavering commitment. We are dedicated to crafting a safer, more secure digital world for the most vulnerable members of our society. Our journey is driven by a passion to ensure that every child and woman can navigate the digital realm without fear, harassment, or exploitation.</p>
          <div className="flex uppercase">
            <button className='p-3 my-5 uppercase bg-button font-semibold text-[12px]'>donate now</button>
            <button className='p-3 my-5 mx-3 uppercase bg-greener font-semibold text-[12px]'>get involved</button>
          </div>
        </div>
        <div className='flex py-24 px-12'>
          <div className='hidden md:flex flex-col'>
            <img className='h-fit mb-2 my-auto' src={imgOne} alt="aboutHeroe" />
            <img className='h-fit mt-2 my-auto' src={imgTwo} alt="aboutHeroe" />
          </div>
          <img className='h-fit mx-2 my-auto' src={imgThree} alt="aboutHeroe" />
        </div>
      </div>
      <div className="md:grid grid-cols-2 bg-primary py-12 px-6 md:px-24">
        <div>
          <p className="text-4xl text-greener mb-5 font-bold">Our Vision</p>
          <ul className='px-8 flex text-white flex-col gap-5 list-disc'>
            <li>At the heart of our organisation's vision lies a digital world where children and women can explore, learn, and connect without fear or harassment. We envision an internet that empowers, educates, and enriches lives while upholding fundamental rights, privacy, and dignity.</li>
            <li>We dream of a world where online experiences empower and protect, where trust and safety are not luxuries but fundamental rights.</li>
          </ul>
        </div>

        <div>
          <p className="text-4xl text-greener mb-5 font-bold">Our Mission</p>
          <ul className='px-8 flex text-white flex-col gap-5 list-disc'>
            <li>Our mission is to foster trust and safety online through policy engagement and advocacy, ensuring that the internet becomes a secure space for everyone, especially our most vulnerable members of society.</li>
            <li>Our undertaking is to be the foremost advocate and catalyst for trust and safety policy engagement in the digital domain in Africa. We strive to create a comprehensive framework that safeguards the innocence of childhood and the dignity of womanhood online.</li>
          </ul>
        </div>
      </div>
      <WhoWhat />
      <div className='md:grid bg-primary grid-cols-2'>
        <img className='h-full' src={whyImg} alt="why-img" />
        <div className='md:px-24 px-6 text-white py-12'>
          <p className="font-bold text-greener mb-10 text-4xl">Why Choose Us?</p>
          <div className='flex flex-col gap-5'>
            {whyChooseUs.map(({id, title, text}) => (
              <WhatWeDo
                key={id}
                title={title}
                text={text}
                icon={<LuDot className='text-2xl' />}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='md:grid p-6 md:p-0 bg-secondary grid-cols-2'>
        <div className='py-12 md:px-28 my-auto'>
          <p className="text-4xl py-5 text-primary font-bold">Join Us in Creating a Safer Digital World</p>
          <div className='flex flex-col gap-5'>
            <p>We invite you to join us in our mission to make the internet a safer place for children and women. Whether you are a concerned citizen, a tech industry leader, a policymaker, or an educator, your support and collaboration are vital in achieving our vision.</p>
            <p>Together, we can build trust, foster safety, and create a digital world where every child and woman can explore, learn, and connect without fear. Contact us today to learn more about our initiatives, get involved, or contribute to this critical cause. Together, we can make a profound difference in the lives of countless individuals, one digital space at a time.”</p>
          </div>
        </div>
        <img className='h-full' src={joinImg} alt="join-img" />
      </div>
    </div>
  )
}

export default About;