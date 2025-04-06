import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
// import { photos } from '../utils/Constants'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader';
import { baseUrl } from '../utils/Context';

const Photo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const photoFetcher = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${baseUrl}/media`);
      const response = await res.json();
      setPhotos(response);
      // toast.success("Got 'em", {
      //   position: 'top-right',
      //   className: 'text-[12px]',
      //   duration: '500'
      // });
    } catch (error) {
      toast.error(response.error, {
          position: 'top-right',
          className: 'text-[12px]',
          duration: '500'
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    photoFetcher();
  },[]);
  
  return (
    <div>
      {isLoading ? <div><Loader /></div> : <div className='my-10 px-6 md:px-32'>
      <p className="text-2xl font-bold text-primary text-center">These are the the Photos of our Recent Events and Campaigns</p>
      <div className="flex gap-5 my-5 flex-wrap">
        {
          photos.map((photo, i) => (
            <Link target='_blank' to={photo.link} className='md:w-[150px] hover:scale-[105%] duration-200' key={i}>
              {photo.cover && <div className='md:h-[100px] h-[200px] overflow-hidden'><img src={photo.cover} className='h-fit' alt="Event-img" /></div>}
              <p className="text-primary font-semibold">{photo.title}</p>
            </Link>
          ))
        }
      </div>
    </div>}
    </div>
  )
}

export default Photo