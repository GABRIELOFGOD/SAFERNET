
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../utils/Context";

const CompleteOnboarding = () => {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [data, setData] = useState({
    image: null, // actual file object
    email: "",
    fellowId: "",
    password: "",
    phone: "",
    name: ""
  });

  const navigate = useNavigate();

  const storage = localStorage.getItem("user");
  const localData = JSON.parse(storage);

  useEffect(() => {
    if (!storage) {
      toast.error("Please follow the link sent to your email", {
        position: "top-right"
      });
      navigate(-1);
      return;
    }
    setData(prev => ({
      ...prev,
      email: localData.email,
      fellowId: localData.fellowId
    }));
  }, []);

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setData(prev => ({ ...prev, image: file }));

      // Preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const submitForm = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("fellowId", data.fellowId);
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("password", data.password);
      if (data.image) formData.append("image", data.image);

      const response = await fetch(`${baseUrl}/fellow/onboarding`, {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Something went wrong");

      toast.success("Onboarding complete!");
      navigate("/fellow");
    } catch (error) {
      toast.error(error.message || "Error completing onboarding");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-fit py-10 md:py-24 items-center justify-center flex flex-col px-3">
      <p className="font-semibold text-primary mb-10 text-2xl">Fellow Onboarding</p>
      <div className="flex flex-col gap-5 shadow-md border-gray-500 border-opacity-50 rounded-md bg-white p-5 w-full md:w-[500px]">
        <form onSubmit={submitForm} className="flex flex-col gap-5 w-full">
          <div className="w-full justify-center items-center flex">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="image"
              className="hidden"
            />
            <label
              htmlFor="image"
              className="rounded-full h-56 w-56 border-4 border-gray-500 border-opacity-50 border-dashed flex items-center justify-center overflow-hidden"
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-full w-full object-cover rounded-full"
                />
              ) : (
                <BiUser size={80} className="text-gray-500 opacity-50" />
              )}
            </label>
          </div>

          <input
            type="email"
            value={data.email}
            disabled
            className="border border-gray-300 rounded-md p-2 outline-none font-semibold bg-gray-200 text-gray-600"
          />
          <input
            type="text"
            value={data.fellowId}
            disabled
            className="border border-gray-300 rounded-md p-2 outline-none font-semibold bg-gray-200 text-gray-600"
          />
          <input
            type="text"
            value={data.name}
            onChange={e => setData({ ...data, name: e.target.value })}
            placeholder="Full name"
            className="border border-gray-300 rounded-md p-2 outline-none text-primary font-semibold"
          />
          <input
            type="number"
            value={data.phone}
            onChange={e => setData({ ...data, phone: e.target.value })}
            placeholder="Phone"
            className="border border-gray-300 rounded-md p-2 outline-none text-primary font-semibold"
          />
          <input
            type="password"
            value={data.password}
            onChange={e => setData({ ...data, password: e.target.value })}
            placeholder="Password"
            className="border border-gray-300 rounded-md p-2 outline-none text-primary font-semibold"
          />
          <button
            type="submit"
            className={`bg-primary text-white disabled:opacity-70 py-2 rounded-md ${
              loading ? "cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Complete Onboarding"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteOnboarding;
