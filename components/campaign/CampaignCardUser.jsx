import { CiMenuKebab } from "react-icons/ci"
import { IoLocation } from "react-icons/io5";

const CampaignCardUser = ({ fellow, location }) => {
  return (
    <div className="flex justify-between border-b pb-2 border-gray-500/30">
      <div className="flex gap-3">
        <img
          src={fellow?.image}
          alt="profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1">
          <div className="text-gray-700 font-bold">{fellow?.name}</div>
          <div className="flex gap-3">
            <IoLocation size={10} />
            <div className="text-gray-500 text-sm">{location}</div>
          </div>
        </div>
      </div>

      <div className="my-auto mr-3">
        <CiMenuKebab size={20} />
      </div>
    </div>
  )
}
export default CampaignCardUser