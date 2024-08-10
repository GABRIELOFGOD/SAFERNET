import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Poster from '../components/Poster';
import PostMedia from '../components/additionals/PostMedia';

const AdminMedia = () => {
  const [photos, setPhotos] = useState([]);
  const [postMedia, setPostMedia] = useState(false);

  const baseUrl = 'https://safernet-v1.vercel.app'
  const localUrl = 'http://localhost:3000'

  const photoFetcher = async () => {
    // setIsLoading(true);
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
    }
  }

  useEffect(() => {
    photoFetcher();
  },[])

  return (
    <div className='w-full md:px-28'>
      <div className='w-full flex justify-end py-6 '>
        <button onClick={() => setPostMedia(true)} className='flex items-end justify-end py-3 px-6 bg-primary text-white rounded-sm w-fit'>Post Photo</button>
      </div>
      <div className='my-10'>
        <p className="text-2xl font-bold text-primary text-center">These are the the Photos of our Recent Events and Campaigns</p>
        <div className="flex gap-5 my-5 flex-wrap">
          {
            photos.map((photo, i) => (
              <Link key={i} target='_blank' to={photo.link} className='md:w-[150px] hover:scale-[105%] duration-200'>
                {photo.cover && <div className='md:h-[100px] h-[200px] overflow-hidden'><img src={photo.cover} className='h-fit' alt="Event-img" /></div>}
                <p className="text-primary font-semibold">{photo.title}</p>
              </Link>
            ))
          }
        </div>
      </div>
      <Poster
        show={postMedia}
        children={<PostMedia close={()=>setPostMedia(false)} />}
      />
    </div>
  )
}

export default AdminMedia