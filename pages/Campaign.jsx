import React, { useEffect } from 'react';
import { campaign } from '../utils/Constants';
import { Link } from 'react-router-dom';
import CampaignImg from '../components/CampaignImg';
import { ContextUser } from '../utils/Context';

const Campaign = () => {
  const { campaigns, campaignGetter } = ContextUser();

  useEffect(() => {
    campaignGetter();
  }, [])

  return (
    <div className='bg-button flex flex-col items-center px-5 justify-center py-20 text-white'>
      {campaigns ? <div>
        <p className="text-4xl pb-10 font-bold">Crush #IBSA Campaign</p>
        {
          campaigns?.length >=1 ? <div className='md:flex-row flex flex-col gap-10'>
          {
            campaigns?.map(({ id, image, topic, path }) => (
              <Link className='md:w-[250px]' to={path} key={id}>
                <CampaignImg
                  image={image}
                  title={topic}
                  border={'border-white'}
                />
              </Link>
            ))
          }
        </div>: <p className='text-gray-500 text-2xl md:text-6xl text-center font-bold'>No Campaign Posted Yet</p>
        }
        </div> : <div>
          <p className='text-gray-500 text-2xl md:text-6xl text-center font-bold'>Fetching Campagins ....</p>
          <p className="text-center mt-5 text-black font-bold">If this is taking to long, kindly check your internet and refresh the page.</p>
          </div>}
    </div>
  )
}

export default Campaign