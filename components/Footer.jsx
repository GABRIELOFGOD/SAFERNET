import React from 'react'
import { ourProjects, quickLinks, social } from '../utils/Constants';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-primary uppercase flex flex-col md:flex-row gap-10 justify-between text-white px-6 md:px-24 py-12'>
      <div className='flex-1'>
        <p className="text-2xl flex-1 font-bold">SUBSCRIBE TO OUR NEWSLETTER</p>
        <form className='flex my-3' onSubmit={e => e.preventDefault()}>
          <input className='h-[40px] text-[12px] outline-0 w-full px-6 text-black font-bold' type="text" placeholder='example@youremail.com' />
          <button className='bg-button h-[40px] px-2 hover:bg-black duration-200'>SUBSCRIBE</button>
        </form>
        <div className="flex gap-5 text-2xl">
          {
            social?.map(media => (
              <Link className='hover:text-black duration-200' key={media.id} to={media.path}>{media.icon}</Link>
            ))
          }
        </div>
      </div>
      <div className='md:ml-20 flex-1'>
        <p className="text-white font-semibold mb-5 text-xl">Our links</p>
        <div className='flex link flex-col gap-3'>
          {
            quickLinks.map(link => (
              <NavLink className='hover:text-button font-bold text-[12px] duration-200' key={link.id} to={link.path}>{link.label}</NavLink>
            ))
          }
        </div>
      </div>
      <div className='flex-1'>
        <p className="text-white font-semibold mb-5 text-xl">Our projects</p>
        <div className='flex link flex-col gap-3'>
          {
            ourProjects.map(link => (
              <NavLink className='hover:text-button font-bold text-[12px] duration-200' key={link.id} to={link.path}>{link.label}</NavLink>
            ))
          }
        </div>
      </div>
      <div className='flex-1'>
        <Link to='/' className={`md:text-4xl text-3xl my-auto font-extrabold pb-5`}>safernet</Link>
        <div className="flex gap-5">
          <div className='flex gap-1'>
            <p>&copy;</p>
            <p>{new Date().getFullYear()}</p>
          </div>
          <p>safernet</p>
        </div>
        <p className='pt-5 text-gray-200'>The safernet is an initiative of The Brain Builders Youth Development Initiative.</p>
      </div>
    </div>
  )
}

export default Footer;