import React from 'react'
import WhatWeDo from './WhatWeDo'
import { whatWeDo } from '../utils/Constants';

import { IoMdCheckboxOutline } from "react-icons/io";

const WhoWhat = () => {
  return (
    <div className='md:grid flex flex-col gap-5 p-12 grid-cols-2'>
        <div className="md:px-20 flex flex-col gap-12">
            <div>
                <p className="text-4xl text-primary mb-5 font-bold">Who We Are</p>
                <p className='font-semibold'>We are a dedicated team of experts, activists, and enthusiasts, united by a shared commitment to making the internet a safer place. Our backgrounds encompass technology, law, psychology, and education, giving us a well-rounded perspective on the complex challenges facing online safety. We combine our skills, knowledge, and passion to drive positive change in the digital realm.</p>
            </div>
            <div>
                <p className="text-4xl text-primary mb-5 font-bold">What We Do</p>
                <p className='font-semibold'>Our work revolves around trust and safety policy engagement, where we engage with governments, tech companies, educators, and communities to create a comprehensive and effective framework for online safety. Here's a glimpse of our key initiatives:</p>
            </div>
        </div>
        <div className="md:px-20 px-0 flex flex-col gap-5">
            {whatWeDo.map(item => (
                <WhatWeDo
                    key={item.id}
                    title={item.title}
                    text={item.text}
                    icon={<IoMdCheckboxOutline />}
                />
            ))}
        </div>
    </div>
  )
}

export default WhoWhat