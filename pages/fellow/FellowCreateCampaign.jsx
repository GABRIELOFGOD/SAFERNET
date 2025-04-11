import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaPen, FaImages } from "react-icons/fa";
import { baseUrl } from "../../utils/Context";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FellowCreateCampaign = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [location, setLocation] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setSelectedImages(imagePreviews);
  };

  const removeImage = (index) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!location) return toast.error("Campaign Location is required");

    if (!body) return toast.error("Write something about the campaign");
    
    const token = localStorage.getItem("fellow");
    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    setLoading(true);
  
    try {
      const formData = new FormData();
  
      // Append text fields
      formData.append("location", location); // assuming you have a `location` state
      formData.append("body", body);         // assuming you have a `body` state
  
      // Append each file to FormData
      selectedImages.forEach((img) => {
        formData.append("files", img.file); // The backend expects "files" as the key
      });
  
      const response = await fetch(`${baseUrl}/campaign`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const result = await response.json();
      if (response.ok) {
        toast.success("Upload successful!");
        console.log("Upload successful:", result);
        navigate("/fellow");
      } else {
        toast.error("Upload failed. Please try again.");
        console.error("Upload failed:", result);
      }
  
    } catch (error) {
      toast.error("Error uploading images. Please try again.");
      console.error("Error uploading images:", error);
    } finally {
      setLoading(false);
    }
  };  

  return (
    <div>
      <nav className="bg-button text-white py-2 px-3 flex md:hidden">
        <div className="flex gap-3 justify-between w-full">
          <div className="my-auto cursor-pointer" onClick={() => navigate(-1)}>
            <FaArrowLeftLong size={20} />
          </div>
          <p className="font-bold text-xl">Create Post</p>
          <button
            className="bg-white text-button px-3 py-1 rounded-md font-semibold"
            onClick={handleSubmit}
          >
            Publish
          </button>
        </div>
      </nav>

      <div className="flex flex-col gap-5 py-28 md:py-36 px-3 w-full md:w-[700px] mx-auto">
        <div className="flex flex-col gap-4 w-full bg-white/80 rounded-md shadow-md p-5 hover:shadow-lg transition-all duration-200 ease-in-out">
          <div className="flex justify-between">
          <p className="font-bold text-xl">Create Post</p>
          <button
            className="bg-button text-white px-3 py-1 rounded-md font-semibold hidden md:flex text-center w-fit justify-end items-end"
            onClick={handleSubmit}
          >
            Publish
          </button>
          </div>
          <div className="text-gray-700/80 w-full flex gap-5 px-3 justify-between md:justify-start">
            <div className="flex gap-3">
              <FaPen size={20} />
              Write
            </div>
          </div>

          <div className="flex relative flex-col gap-5">
            <input
              type="text"
              placeholder="Where did you do this outreach?"
              className="w-full border-2 border-black outline-none rounded-md h-12 px-4"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <textarea
              placeholder="Write about your campaign"
              className="w-full h-[100px] border bg-primary/15 border-primary/90 p-4 rounded-md"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>

          {/* Image Preview Collage */}
          {selectedImages.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {selectedImages.map((img, index) => (
                <div key={index} className="relative group">
                  <img
                    src={img.preview}
                    alt={`preview-${index}`}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-black/50 text-white rounded-full px-2 py-0 text-xs opacity-0 group-hover:opacity-100 transition"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* File Input */}
          <div className="flex w-full">
            <input
              type="file"
              multiple
              id="images"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label htmlFor="images" className="flex cursor-pointer justify-right border border-black rounded-md px-4 py-2 bg-gray-200 text-black font-semibold hover:bg-gray-100 duration-200 gap-3">
              <FaImages size={20} />
              Select files
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FellowCreateCampaign;
