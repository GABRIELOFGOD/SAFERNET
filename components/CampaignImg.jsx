import React from 'react'

const CampaignImg = ({image, title, date, border}) => {
  return (
    <div className={`border-2 ${border} md:border-0 shadow-md p-2 md:p-0 hover:scale-[105%] duration-300`}>
        <div className='max-h-[200px] overflow-hidden'><img src={image} alt="campaign image" /></div>
        {date && <p>Published: {date}</p>}
        <p className='pb-5 text-center pt-3 font-semibold'>{title}</p>
    </div>
  )
}

export default CampaignImg