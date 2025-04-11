import axios from "axios";
import { baseUrl } from "../utils/Context";

const useCampaign = () => {
  const getCampaigns = async () => {
    const { data } = await axios.get(`${baseUrl}/campaign`);
    return data;
  };
  
  const getCampaign = async (id) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/campaign/${id}`);
    return data;
  };

  return {
    getCampaigns,
    getCampaign,
  };
}

export default useCampaign;