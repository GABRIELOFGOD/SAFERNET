import React from 'react';
import { campaign } from '../utils/Constants';
import { Link } from 'react-router-dom';
import CampaignImg from '../components/CampaignImg';

const Campaign = () => {
  return (
    <div className='bg-button flex flex-col items-center px-5 justify-center py-20 text-white'>
      <p className="text-4xl pb-10 font-bold">Crush #IBSA Campaign</p>
      <div className='md:flex-row flex flex-col gap-10'>
        {
          campaign.map(({ id, image, topic, path }) => (
            <Link className='md:w-[250px]' to={path} key={id}>
              <CampaignImg
                image={image}
                title={topic}
                border={'border-white'}
              />
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Campaign