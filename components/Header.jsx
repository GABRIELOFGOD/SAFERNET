import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ListItems from './ListItems';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [navShow, setNavShow] = useState(false)
  const lists = [
    {
      id: 1,
      text: 'Nigeria IBSA Stakeholder Workshop',
      path: 'stackholders'
    },
    {
      id: 2,
      text: 'campaign',
      path: 'campaign'
    }
  ]

  const toggleNav = () => {
    setNavShow(!navShow)
  }

  const closeNav = () => {
    setNavShow(false)
  }

  return (
    <div className='flex sticky z-50 top-0 justify-between px-6 md:px-20 py-5 bg-white uppercase shadow-sm'>
      <Link onClick={closeNav} to='/' className={`md:text-4xl text-3xl my-auto font-extrabold`}>safernet</Link>
      <ul className={`md:flex-row flex flex-col activa duration-300 text-white md:text-black md:top-0 md:w-fit w-full left-0 md:py-0 py-5 absolute md:relative gap-5 md:gap-3 my-auto ${navShow ? 'top-[80px] bg-primary' : 'top-[-500px]'}`}>
        <li onClick={closeNav} className='w-full my-auto md:w-fit'><NavLink to='about' className='hover:bg-button text-[12px] p-3 hover:text-white font-bold rounded-sm duration-300'>about us</NavLink></li>
        <li><ListItems
          title='updates'
          lists={[
            {
              id: 1,
              text: 'media',
              path: 'media'
            },
            {
              id: 2,
              text: 'news',
              path: 'news'
            },
            // {
            //   id: 3,
            //   text: 'events',
            //   path: 'events'
            // }
          ]}
        /></li>
        {/* <li><ListItems
          title='#EndIMBS'
          lists={lists}
        /></li> */}
        <li><ListItems
          title='publications'
          lists={[
            {
              id: 1,
              text: 'publications',
              path: 'publications'
            },
            {
              id: 2,
              text: 'blog',
              path: 'blog'
            },
            {
              id: 3,
              text: 'campaign',
              path: 'campaign'
            }
          ]}
        /></li>
        <li onClick={closeNav} className='my-auto mb-4 md:mb-auto'><NavLink className='hover:bg-button hover:text-white text-[12px] p-3 font-bold rounded-sm duration-300' to='make-report'>make a report</NavLink></li>
        <li onClick={closeNav} className='my-auto'><NavLink className='hover:bg-button hover:text-white text-[12px] p-3 font-bold rounded-sm duration-300' to='contact'>contact us</NavLink></li>
      </ul>
      <div onClick={toggleNav} className='my-auto text-2xl flex md:hidden p-2 rounded-md border border-primary hover:text-white hover:bg-primary cursor-pointer duration-300'>{navShow ? <IoCloseSharp /> : <HiMenuAlt3 />}</div>
    </div>
  )
}

export default Header