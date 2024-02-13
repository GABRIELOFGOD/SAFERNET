import React from 'react'

const EventCard = ({image, title, date, time, venue, about}) => {
  return (
    <div className='rounded-sm bg-gray-300 p-2 max-w-[250px]'>
        {image && <img src={image} alt="Events-flyer" />}
        <div>
            <p className="text-xl font-bold">{title}</p>
            {about && <p>{about}</p>}
            <div className="flex text-[12px] gap-3">
                <div>
                    {date && <div className='flex'>
                        <p className='font-bold'>Date: </p>
                        <p>{date}</p>
                    </div>}
                    {
                        time &&
                        <div className='flex'>
                            <p className="font-bold">Time: </p>
                            <p>{time}</p>
                        </div>
                    }
                </div>
                {
                    venue &&
                    <p className="font-bold">venue: {venue}</p>
                }
            </div>
        </div>
    </div>
  )
}

export default EventCard