import { FaArrowLeftLong } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";

const FellowCreateCampaign = () => {
  
  return (
    <div>
      <nav className="bg-button text-white py-2 px-3 flex md:hidden">
        <div className="flex gap-3 justify-between w-full">
          <div>
            <FaArrowLeftLong size={20} />
          </div>
          <p className="font-bold text-xl">Create Post</p>
          <button className="bg-white text-button px-3 py-1 rounded-md font-semibold">
            Publish
          </button>
        </div>
      </nav>

      <div className="flex flex-col gap-5 py-28 md:py-36 px-3 w-full md:w-[700px] mx-auto">
        <div className="flex flex-col gap-2 w-full cursor-pointer bg-white/80 rounded-md shadow-md p-5 hover:shadow-lg transition-all duration-200 ease-in-out">
          <div className="text-gray-700/80 w-full flex gap-5 px-3 justify-between md:justify-start">
            <div className="flex gap-3">
              <FaPen size={20} />
              Write
            </div>
          </div>
          <div className="flex relative flex-col gap-5">
            <input type="text" placeholder="Where did you do this outreach?" className="w-full border-2 border-black outline-none rounded-md h-12 px-4" />
            <textarea placeholder="Write about your campaign" className="w-full h-[100px] border bg-primary/15 border-primary/90 p-4 rounded-md"></textarea>
          </div>
          <div className="flex w-full">
            <input type="file" multiple className="w-full h-[100px] border bg-primary/15 border-primary/90 p-4 rounded-md hidden" id="images" />
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default FellowCreateCampaign