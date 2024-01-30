import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const ListItems = ({title, lists}) => {
    const [showList, setShowList] = useState(false)

    const showUs = () => {
        setShowList(true)
    }

    const donot = () => {
        setShowList(false)
    }
    
    const closeNav = () => {
        setNavShow(false)
    }

  return (
    <div className='relative cursor-pointer my-auto duration-300' onMouseEnter={showUs} onMouseLeave={donot}>
        <div className="flex my-auto text-[12px] p-3 font-bold gap-2"><p>{title}</p> <IoMdArrowDropdown className='my-auto text-button' /></div>
        <div className={`md:bg-primary py-3 relative md:absolute w-fit whitespace-nowrap left-0 rounded-md text-white text-[12px] mx-3 flex-col ${showList ? 'flex' : 'hidden'}`}>
            {lists?.map((list) => (
                <NavLink onClick={closeNav} key={list.id} to={list.path} className='hover:bg-button my-[1px] py-2 px-6'>{list.text}</NavLink>
            ))}
        </div>
    </div>
  )
}

export default ListItems