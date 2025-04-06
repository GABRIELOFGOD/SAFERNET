import { IoMdClose } from "react-icons/io";
import useFellow from "../../hooks/useFellow";
import toast from "react-hot-toast";
import MiniLoader from "../../utils/MiniLoader";
import { useState } from "react";

const CreateFellowModal = ({closeModal}) => {
  const [loading, setLoading] = useState(false);
  const { initializeFellow } = useFellow();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
  
    try {
      const response = await initializeFellow(email);
      toast.success(response.message, {
        position: "top-right",
      });
      closeModal();
    } catch (error) {
      console.error("Error creating fellow:", error);
      toast.error(error.message || "Something went wrong", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <div
      className="flex fixed top-0 left-0 w-full h-full bg-black/70 justify-center items-center z-50"
    >
      <div className="bg-white w-full md:w-[50%] lg:w-[30%] shadow-sm h-fit rounded-md flex flex-col gap-4 p-4">
        <div className="text-center text-xl font-bold text-primary flex justify-between">
          <p>Create Fellow</p>
          <button
            className="text-2xl text-gray-500 hover:text-gray-700"
            onClick={closeModal}
          >
            <IoMdClose />
          </button>
        </div>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Fellow Email"
            className="border border-gray-300 rounded-md p-2 outline-none text-primary font-semibold"
          />
          <button type="submit" className={`bg-primary text-white disabled:opacity-70 py-2 rounded-md ${loading ? "cursor-not-allowed" : ""}`} disabled={loading}>
            {loading ? <MiniLoader size={20} /> : "Create Fellow"}
          </button>
        </form>
      </div>
    </div>
  )
}
export default CreateFellowModal