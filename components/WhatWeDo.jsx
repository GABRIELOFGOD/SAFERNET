import React from 'react';

const WhatWeDo = ({title, text, icon}) => {
  return (
    <div className='flex gap-3'>
        <div>{icon}</div>
        <div>
            <p className='font-[400]'><b className='font-bold'>{title}:</b> {text}</p>
        </div>
    </div>
  )
}

export default WhatWeDo