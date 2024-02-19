import React from 'react'

const AdminCampaignImg = ({image, title, date, border, body}) => {
  return (
    <div className={`border-2 ${border} md:border-0 md:w-[280px] p-2 md:p-0 hover:scale-[105%] duration-300`}>
      <div className='max-h-[200px] overflow-hidden'><img src={image} alt="campaign image" /></div>
        {date && <p>Published: {date}</p>}
        <p className='pb-5 pt-3 font-semibold'>{title}</p>
        <p>{body}</p>
    </div>
  )
}

export default AdminCampaignImg