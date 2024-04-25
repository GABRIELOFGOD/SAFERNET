import React, { useEffect } from 'react'
import { ContextUser } from '../utils/Context'
import { useParams } from 'react-router-dom'

const CampaignDetails = () => {
  const { id } = useParams()
  const { singleCampaign, getSingleCampaign } = ContextUser()

  useEffect(() => {
    getSingleCampaign(id)
  }, [])

  console.log(singleCampaign)
  
  return (
    <div className='py-12 flex w-full flex-col justify-center items-center'>
      <div>
        <p className="text-4xl font-bold text-center">{singleCampaign?.title}</p>
      </div>
      <div className='w-full flex justify-center h-[300px] overflow-hidden'>
        <img className='w-fit flex h-full' src={singleCampaign?.image} alt="" />
      </div>
      <p>{singleCampaign?.body}</p>
    </div>
  )
}

export default CampaignDetails