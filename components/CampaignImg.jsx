import React from 'react'

const CampaignImg = ({image, title, date, border}) => {
  return (
    <div className={`border-2 ${border} md:border-0 p-2 md:p-0 hover:scale-[105%] duration-300`}>
        <img src={image} alt="campaign image" />
        {date && <p>Published: {date}</p>}
        <p className='pb-5 pt-3 font-semibold'>{title}</p>
    </div>
  )
}

export default CampaignImg