import React, { useEffect, useState } from 'react'
import { ContextUser } from '../utils/Context';
import AdminCampaignImg from '../components/AdminCampaignImg';
import Poster from '../components/Poster';
import CampaignPost from '../components/CampaignPost';
import { Link } from 'react-router-dom';

const AdminCampaign = () => {
  const { campaigns, campaignGetter } = ContextUser();
  const [post, setPost] = useState(false)

  useEffect(() => {
    campaignGetter();
  }, [])

  const closer = () => setPost(false)

  return (
    <div className='p-12'>
      {
        campaigns ? <div>
        <button onClick={() => setPost(true)} className='bg-primary hover:bg-button duration-200 rounded-md py-3 px-4 text-[12px] whitespace-nowrap text-white h-fit'>Post New Campaign</button>
        <div className='mt-10 flex flex-wrap gap-5'>
          {
            campaigns?.map(blog => (
              <Link
                key={blog._id}
                to={`/details/${campaigns._id}`}
              >
                <AdminCampaignImg
                  image={blog.image}
                  title={blog.title}
                  body={blog.blog}
                />
              </Link>
            ))
          }
        </div>
        </div>
        :<p className="text-4xl font-bold text-center text-gray-400">No Blog posted</p>
      }
        <Poster
          show={post}
          children={<CampaignPost close={closer} />}
        />
    </div>
  )
}

export default AdminCampaign