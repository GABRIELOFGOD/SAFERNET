import { useEffect, useState } from "react"
import MiniLoader from "../../utils/MiniLoader";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { baseUrl } from "../../utils/Context";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const [onboardingData, setOnboardingData] = useState({
    email: "",
    fellowId: ""
  });
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const emailFromQuery = searchParams.get("email") || "";

  useEffect(() => {
    if (emailFromQuery !== null && emailFromQuery !== ""){
      setOnboardingData({ ...onboardingData, email: emailFromQuery });
    }
  }, []);

  const navigate = useNavigate();

  const submitOnboarding = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!onboardingData.email) return toast.error("Email is required", {
        position: "top-right"
      });
      if (!onboardingData.fellowId) return toast.error("FellowId is required", {
        position: "top-right"
      });
      const request = await fetch(`${baseUrl}/fellow/confirm-fellow`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: onboardingData.email, fellowId: onboardingData.fellowId }),
        credentials: "include",
      });

      const response = await request.json();
      if (!request.ok) throw new Error(response.error);

      if (response.status && response.status === false) throw new Error(response.error);
      const payload = {
        email: response.fellow.email,
        fellowId: response.fellow.fellowId
      }
      localStorage.setItem("user", JSON.stringify(payload));
      navigate("/complete-onboarding");
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Fail to complete", {
        position: "top-right"
      })
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <div className="h-fit py-10 md:py-24 items-center justify-center flex flex-col px-3">
      <div className="flex flex-col gap-5 shadow-md border-gray-500 border-opacity-50 rounded-md bg-white p-5 w-full md:w-[500px]">
        <p className="font-semibold text-primary text-2xl">Welcome great mind!</p>
        <form
          onSubmit={submitOnboarding}
          className="flex flex-col gap-5 w-full"
        >
          <input
            type="email"
            value={onboardingData.email}
            onChange={e => setOnboardingData({ ...onboardingData, email: e.target.value })}
            placeholder="Email"
            className="border border-gray-300 rounded-md p-2 outline-none text-primary font-semibold"
          />
          <input
            type="text"
            value={onboardingData.fellowId}
            onChange={e => setOnboardingData({ ...onboardingData, fellowId: e.target.value })}
            placeholder="Fellow Id"
            className="border border-gray-300 rounded-md p-2 outline-none text-primary font-semibold"
          />
          <button type="submit" className={`bg-primary text-white disabled:opacity-70 py-2 rounded-md ${loading ? "cursor-not-allowed" : ""}`} disabled={loading}>
            {loading ? <MiniLoader size={20} /> : "Verify"}
          </button>
        </form>
      </div>
    </div>
  )
}
export default Onboarding