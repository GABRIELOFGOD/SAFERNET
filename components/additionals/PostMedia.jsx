import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { IoCloseSharp } from 'react-icons/io5';
import { baseUrl } from '../../utils/Context';
import MiniLoader from '../../utils/MiniLoader';

const PostMedia = ({ close }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState({
    title: '',
    link: '',
    desc: '',
    cover_photo: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setInputData({
      ...inputData,
      cover_photo: e.target.files[0],
    });
  };

  const mediaPoster = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append('title', inputData.title);
    formData.append('desc', inputData.desc);
    formData.append('link', inputData.link);
    formData.append('cover_photo', inputData.cover_photo);

    try {
      const res = await fetch(`${baseUrl}/media`, {
        method: "POST",
        body: formData,
        credentials: "include"
      })
      const response = await res.json();
      if(!res.ok){
        toast.error(response.error, {
          duration: 5000,
          position: "top-right",
          // className: "text-[12px]"
        });
      }
      if(res.ok){
        toast.success(response.message, {
          duration: 5000,
          position: "top-right",
          // className: "text-[12px]"
        });
        setTimeout(()=> {
          location.reload();
        }, 300);
      }
    } catch (error) {
      console.log(error);
      toast.error("You're doing something wrong comrade!", {
        duration: 5000,
        position: "top-right",
        className: "text-[12px]"
      });
    } finally {
      setIsLoading(false);
    }
  }

  const inputClass = 'w-full border-2 h-12 px-3 bg-transparent outline-none text-white text-[12px] border-white rounded-md';

  return (
    <div className="bg-button w-full max-w-[500px] relative py-20 px-12 max-h-[580px] overflow-auto rounded-md">
      <IoCloseSharp onClick={close} className="absolute top-8 right-10 text-white text-2xl cursor-pointer" />
      <form onSubmit={e=>mediaPoster(e)} className='w-full flex flex-col gap-5'>
        <p className="text-xl text-white font-bold">Post media photo</p>
        <input
          name="title"
          type="text"
          value={inputData.title}
          onChange={handleInputChange}
          placeholder="Title"
          className={inputClass}
        />
        <input
          name="link"
          type="text"
          value={inputData.link}
          onChange={handleInputChange}
          placeholder="Link"
          className={inputClass}
        />
        <input
          name="desc"
          type="text"
          value={inputData.desc}
          onChange={handleInputChange}
          placeholder="Description"
          className={inputClass}
        />
        <input
          name="cover_photo"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={inputClass}
        />
        <button className='w-full bg-primary text-white duration-200 border-primary border-2 rounded-md h-12 hover:bg-button'>{isLoading ? <div><MiniLoader color="white" /></div> : "Post media"}</button>
      </form>
    </div>
  );
};

export default PostMedia;
