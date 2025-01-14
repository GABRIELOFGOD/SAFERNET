import React, { useEffect } from 'react'
import MissionCard from '../components/MissionCard'
import { blog, missionCard } from '../utils/Constants'
import Abuse from '../components/Abuse'
import { ContextUser } from '../utils/Context'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import { formatDate, urlFormatter } from '../utils/formatter'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import SimpleSlider from '../components/Swiperrer'

// import SwiperCore, {Autoplay, Pagination, Navigation } from 'swiper';
// SwiperCore.use([Autoplay, Pagination, Navigation]);


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
      {/* <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        allowTouchMove={false}
        slidesPerView="auto"
        pagination={{
          clickable: true,
        }}
        loop
        // navigation={true}
        className="mySwiper"
      >
      <SwiperSlide>
        <div className='relative w-full h-fit md:h-[90vh] bg-[url("images/h1.JPG")] bg-cover bg-center text-white flex flex-col items-center justify-center gap-5 px-6 py-12 md:px-24'>
          <div className='absolute inset-0 bg-primary opacity-80'></div>
          <div className='relative justify-center items-center flex flex-col gap-5 z-10 text-center'>
            <p className="md:text-5xl text-3xl font-bold">Safety in the Digital Realm, Societal Rights</p>
            <p className='md:text-xl text-base w-full md:w-[800px]'>We aim to enhance digital inclusion by creating a more accessible and supportive online space, particularly for vulnerable groups.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative w-full h-fit md:h-[90vh] bg-cover bg-center text-white flex flex-col items-center justify-center gap-5 px-6 py-12 md:px-24  bg-[url("images/h2.JPG")]'>
          <div className='absolute inset-0 bg-primary opacity-80'></div>
          <div className='relative justify-center items-center flex flex-col gap-5 z-10 text-center'>
            <p className="md:text-5xl text-3xl font-bold">Promoting Cybersecurity and Digital Equity</p>
            <p className='md:text-xl text-base w-full md:w-[800px]'>Our goal is to diminish digital disparities by shaping a digital world that is safer and more secure, especially for women and children.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative w-full h-fit md:h-[90vh] bg-cover bg-center text-white flex flex-col items-center justify-center gap-5 px-6 py-12 md:px-24  bg-[url("images/h3.JPG")]'>
          <div className='absolute inset-0 bg-primary opacity-80'></div>
          <div className='relative justify-center items-center flex flex-col gap-5 z-10 text-center'>
            <p className="md:text-5xl text-3xl font-bold">Advancing Online Protection and Community Welfare</p>
            <p className='md:text-xl text-base w-full md:w-[800px]'>Our mission is to bridge the digital divide by fostering an inclusive and protective online environment for all.</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper> */}
      <SimpleSlider />
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
        <div className='flex flex-col md:flex-row gap-10 md:px-20'>
          <div className='flex-[2] h-[400px] relative shadow-md overflow-hidden'>
            {blogs?.slice().reverse().slice(0, 1).map((card, i) => (
              <Link to={`/details/${urlFormatter(card.title)}`} key={i}>
                <div className='h-full overflow-hidden'><img className='h-full w-full' src={card.image} alt={card.title} /></div>
                <div className="absolute bg-primary bg-opacity-20 h-full w-full top-0 left-0">
                  <div className='absolute items-baseline justify-end p-10 left-0 w-full h-full flex flex-col gap-5 text-white'>
                    <p className='text-3xl font-semibold'>{card.title}</p>
                    <p className='text-sm font-semibold'>{formatDate(card.createdAt)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className='flex flex-col flex-[2] h-fit px-5 justify-center gap-10'>
            {
              blogs?.slice().reverse().slice(1, 4).map((card, i) => (
                <Link to={`/details/${urlFormatter(card.title)}`} key={i}>
                  <BlogCard
                    topic={card.title}
                    image={card.image}
                    author={card.postedBy}
                    content={card.body}
                    date={formatDate(card.createdAt)}
                  />
                </Link>
              ))
            }
          </div>
        </div>
        <div className="w-full flex justify-end items-end"><Link to='/blog' className="hover:scale-x-105 duration-200 font-semibold py-3 text-sm px-8 bg-primary text-white mx-20">Read more...</Link></div>
      </div>
      <div className='bg-secondary flex flex-col-reverse md:grid grid-cols-2 p-6 gap-5 md:py-14 md:px-28'>
        <div className='my-auto md:px-6 '>
          <p className="text-4xl font-bold pb-5 text-primary">Consulting</p>
          <p className='font-semibold'>We provide support to internet-based organizations, tech-driven businesses, civil society organizations, and government partners.</p>
        </div>
        <img src={consult} alt="consult" />
      </div>
    </div>
  )
}

export default Home