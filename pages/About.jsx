import React from 'react'
import WhoWhat from '../components/WhoWhat';
import { whyChooseUs } from '../utils/Constants';
import { LuDot } from "react-icons/lu";
import WhatWeDo from '../components/WhatWeDo';
const imgOne = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706568108/safernet/about3_st3mu3.jpg';
const imgTwo = "https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706568105/safernet/about1_cxudxl.jpg";
const imgThree = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1706568099/safernet/about2_ghpy4a.png';
const whyImg = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1707150403/safernet/online-school-equipment-home_uru9sp.jpg';
const joinImg = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1707150827/safernet/business-report-graphs-charts-business-reports-pile-documents-business-concept_lyezhs.jpg';

const About = () => {
  return (
    <div>
      <div className='md:grid p-6 grid-cols-2 bg-secondary'>
        <div className='md:px-28 m-auto '>
          <p className='text-4xl pb-6 font-bold'>Ensuring the Security of Digital Environments for Children and Women</p>
          <p>Welcome to Safernet, where the assurance of trust and safety for children and women online transcends being merely a mission—it stands as our steadfast commitment. We are wholeheartedly devoted to shaping a digital world that is safer and more secure, particularly for the most vulnerable members of our society. Our path is fueled by a fervent dedication to guarantee that every child and woman can traverse the digital realm devoid of fear, harassment, or exploitation.</p>
          <div className="flex uppercase">
            <button className='p-3 my-5 text-white uppercase bg-button font-semibold text-[12px]'>donate now</button>
            <button className='p-3 my-5 text-white mx-3 uppercase bg-greener font-semibold text-[12px]'>get involved</button>
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
            <li>Central to our organization's vision is a digital world where children and women can explore, learn, and connect without encountering fear or harassment. We aspire to a digital landscape that empowers, educates, and enriches lives, all while upholding fundamental rights, privacy, and dignity.</li>
            <li>Our vision encompasses a world where online experiences both empower and protect, where trust and safety are not considered luxuries but fundamental rights.</li>
          </ul>
        </div>

        <div>
          <p className="text-4xl text-greener mb-5 font-bold">Our Mission</p>
          <ul className='px-8 flex text-white flex-col gap-5 list-disc'>
            <li>Our mission is to cultivate trust and safety online through policy engagement and advocacy, with the aim of ensuring that the internet evolves into a secure space for everyone, particularly for our most vulnerable members of society.</li>
            <li>Our commitment is to be the leading advocate and catalyst for trust and safety policy engagement in the digital domain in Africa. We endeavor to establish a comprehensive framework that safeguards the innocence of childhood and upholds the dignity of womanhood online.</li>
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
          <p className="text-4xl py-5 text-primary font-bold">Join us in the mission to forge a safer digital world.</p>
          <div className='flex flex-col gap-5'>
            <p>We extend an invitation for you to join us in our mission to create a safer internet for children and women. Whether you're a concerned citizen, a leader in the tech industry, a policymaker, or an educator, your support and collaboration are crucial in realizing our vision.</p>
            <p>Together, let's build trust, nurture safety, and shape a digital world where every child and woman can explore, learn, and connect without fear. Contact us today to discover more about our initiatives, engage with us, or contribute to this crucial cause. United, we can make a profound difference in the lives of countless individuals, one digital space at a time.</p>
          </div>
        </div>
        <img className='h-full' src={joinImg} alt="join-img" />
      </div>
    </div>
  )
}

export default About;