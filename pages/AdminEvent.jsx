import React, { useEffect } from 'react'
import { ContextUser } from '../utils/Context'
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';

const AdminEvent = () => {

  const { viewEvents, event } = ContextUser();

  useEffect(() => {
    viewEvents();
  }, [])

  return (
    <div className='p-12'>
      {
        event ? <div>
          <p className="text-2xl font-bold capitalize">This are the recent blogs</p>
        <div className='mt-10 flex flex-wrap gap-5'>
          {
            event?.map(blog => (
              <Link
                key={blog._id}
                to={`/details/${blog._id}`}
              >
                <EventCard
                  title={blog.title}
                  about={blog.about}
                  image={blog.image}
                  venue={blog.venue}
                  time={blog.time}
                  date={blog.date}
                />
              </Link>
            ))
          }
        </div>
        </div>
        :<p className="text-4xl font-bold text-center text-gray-400">No Event posted</p>
      }
      
    </div>
  )
}

export default AdminEvent;