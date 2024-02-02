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
                <div className='flex flex-col gap-2'>
                    <p>We constitute a devoted team of experts, activists, and enthusiasts bound together by a collective dedication to making the internet a safer space.</p>
                    <p>Our diverse backgrounds span technology, law, psychology, and education, providing us with a comprehensive perspective on the intricate challenges related to online safety. By synergizing our skills, knowledge, and passion, we strive to propel positive change in the digital realm.</p>
                </div>
            </div>
            <div>
                <p className="text-4xl text-primary mb-5 font-bold">What We Do</p>
                <p className=''>Our focus centers on trust and safety policy engagement, involving collaboration with governments, tech companies, educators, and communities. Together, we aim to establish a comprehensive and effective framework for online safety. Here's an overview of our key initiatives:</p>
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