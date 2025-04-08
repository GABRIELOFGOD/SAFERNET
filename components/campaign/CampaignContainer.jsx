import CampaignCard from "./CampaignCard"

const CampaignContainer = ({ campaigns }) => {
  return (
    <div className=" w-full flex flex-col gap-5">
      {campaigns?.map((campaign, index) => (
        <CampaignCard
          key={index}
          campaign={campaign}
        />
      ))}
    </div>
  )
}
export default CampaignContainer