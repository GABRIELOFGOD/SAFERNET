import { CiEdit } from "react-icons/ci";

const FellowDashboardHeader = ({ coverPhoto, profilePhoto }) => {
  return (
    <div className="w-full relative">
      <div className="flex w-full h-[150px] md:h-[250px] bg-primary/30 relative overflow-hidden">
        {coverPhoto && <img src={coverPhoto} alt="" className="w-full h-full absolute object-cover" />}
      </div>
      <div className="flex justify-between">
        <div className="md:h-52 md:w-52 w-40 h-40 bg-gray-300 md:left-10 left-3 absolute overflow-hidden -bottom-20 flex rounded-full border border-primary">
          {profilePhoto && <img src={profilePhoto} alt="" className="w-full h-full object-cover" />}
        </div>
        <button>
          <div className="bg-gray-300/80 border border-primary/80 text-slate-900 px-4 py-2 rounded-md absolute -bottom-5 right-3 md:right-10">
            <CiEdit size={20} className="inline" />
            Edit Profile
          </div>
        </button>
      </div>
    </div>
  )
}
export default FellowDashboardHeader