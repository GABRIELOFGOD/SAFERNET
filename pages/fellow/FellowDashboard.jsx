import { useNavigate, Outlet } from "react-router-dom";
import useFellow from "../../hooks/useFellow";
import { ContextUser } from "../../utils/Context";
import { useEffect, useState } from "react";
import MiniLoader from "../../utils/MiniLoader";

const FellowDashboard = () => {
  const { fellow, setFellow } = ContextUser();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  
  const { fellowProfile } = useFellow();

  const fetchFellowProfile = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("fellow");
      if (!token) {
        navigate("/sign-in");
        return;
      }

      const response = await fellowProfile();
      localStorage.setItem("fellow", response.token);
      setFellow(response.fellow);
    } catch (error) {
      console.log("Error fetching fellow profile:", error.message);
      setFellow(null);
      localStorage.removeItem("fellow");
      navigate("/sign-in");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFellowProfile();
  }, []);
  
  // if (loading) {
  //   return (
  //     <div className="flex fixed top-0 left-0 gap-5 w-full h-screen bg-white/80 z-50 items-center justify-center">
  //       <MiniLoader color="black" />
  //     </div>
  //   )
  // }
  
  return (
    <div>
      <Outlet />
    </div>
  )
}
export default FellowDashboard;