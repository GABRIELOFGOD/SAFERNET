import FellowDashboardHeader from "../../components/fellow/FellowDashboardHeader";
import { FaImages, FaPen, FaVideo } from "react-icons/fa";
import CampaignContainer from "../../components/campaign/CampaignContainer";
import { ContextUser } from "../../utils/Context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useCampaign from "../../hooks/useCampaign";

const FellowHome = () => {
  const { fellow } = ContextUser();
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);

  const goCreateCampaign = () => {
    navigate("post");
  };

  const { getCampaigns } = useCampaign();

  useEffect(() => {
    const fetchCampaigns = async () => {
      setLoading(true);
      try {
        const data = await getCampaigns();
        const fellowCampaigns = data.allCampaign.filter(campaign => campaign.postedBy._id === fellow._id);
        setCampaigns(fellowCampaigns);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false);
      }
    };

    fellow && fetchCampaigns();
  }, [fellow]);
  
  return (
    <div>
      <FellowDashboardHeader
        profilePhoto={fellow?.image}
        coverPhoto={"/images/5.png"}
      />
      <div className="py-28 md:py-36 px-3 flex flex-col gap-10 w-full md:w-[700px] mx-auto">
        <div
          className="flex flex-col gap-2 w-full cursor-pointer bg-white/80 rounded-md shadow-md p-5 hover:shadow-lg transition-all duration-200 ease-in-out"
          onClick={goCreateCampaign}
        >
          <div className="text-gray-700/80 w-full flex gap-5 px-3 justify-between md:justify-start">
            <div className="flex gap-3">
              <FaPen size={20} />
              Write
            </div>
            <div className="flex gap-3">
              <FaImages size={20} />
              Images
            </div>
            <div className="flex gap-3">
              <FaVideo size={20} />
              Video
            </div>
          </div>
          <div className="flex relative">
            <div className="w-full h-full absolute top-0 left-0 bg-gray-200/20 rounded-md"></div>
            <textarea placeholder="Write about your campaign" disabled className="w-full h-[100px] border bg-primary/15 border-primary/90 p-4 rounded-md" onClick={goCreateCampaign}></textarea>
          </div>
        </div>
        <CampaignContainer campaigns={campaigns} />
      </div>
      {/* {loading ? (
        <div className="flex fixed top-0 left-0 gap-5 w-full h-screen bg-white/80 z-50 items-center justify-center">
          <MiniLoader color="black" />
        </div>
      ) : (null)} */}
    </div>
  )
}
export default FellowHome