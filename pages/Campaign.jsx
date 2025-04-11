import React, { useEffect, useState } from 'react';
import { campaign } from '../utils/Constants';
import { Link } from 'react-router-dom';
import CampaignImg from '../components/CampaignImg';
import { ContextUser } from '../utils/Context';
import CampaignContainer from '../components/campaign/CampaignContainer';
import useCampaign from '../hooks/useCampaign';

const Campaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);

  const { getCampaigns } = useCampaign();

  useEffect(() => {
    const fetchCampaigns = async () => {
      setLoading(true);
      try {
        const data = await getCampaigns();
        setCampaigns(data.allCampaign);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    // <div className='bg-button flex flex-col items-center px-5 justify-center py-20 text-white'>
    //   {campaigns ? <div>
    //     {/* <p className="text-4xl pb-10 font-bold">Crush #IBSA Campaign</p> */}
    //     {
    //       campaigns?.length >=1 ? <div className='md:flex-row flex-wrap flex flex-col gap-10'>
    //       {
    //         campaigns?.map((campaign, i) => (
    //           <Link className='md:w-[250px]' to={`${campaign?._id}`} key={i}>
    //             <CampaignImg
    //               image={campaign?.image}
    //               title={campaign?.title}
    //               border={'border-white'}
    //             />
    //           </Link>
    //         ))
    //       }
    //     </div>: <p className='text-gray-500 text-2xl md:text-6xl text-center font-bold'>No Campaign Posted Yet</p>
    //     }
    //     </div> : <div>
    //       <p className='text-gray-500 text-2xl md:text-6xl text-center font-bold'>Fetching Campagins ....</p>
    //       <p className="text-center mt-5 text-black font-bold">If this is taking to long, kindly check your internet and refresh the page.</p>
    //       </div>}
    // </div>
    <div className='md:w-[700px] w-full mx-auto py-10 px-3 flex flex-col gap-10'>
      <p className='text-2xl md:text-3xl font-bold text-primary'>Our Campaigns</p>
      <CampaignContainer campaigns={campaigns} />
    </div>
  )
}

export default Campaign