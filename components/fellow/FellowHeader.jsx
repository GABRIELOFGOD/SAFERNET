import { useState } from "react";
import CreateFellowModal from "./CreateFellowModal";

const FellowHeader = () => {
  const [createFellow, setCreateFellow] = useState(false);
  
  return (
    <div className="bg-primary w-full text-white rounded-md px-4 py-2 flex justify-between">
      <div></div>
      <div>
        <button
          className="py-2 px-4 bg-white text-primary font-semibold rounded-md"
          onClick={() => setCreateFellow(true)} 
        >Add Fellow</button>
      </div>

      {createFellow && (
        <CreateFellowModal closeModal={() => setCreateFellow(false)} />
      )}
    </div>
  )
}
export default FellowHeader