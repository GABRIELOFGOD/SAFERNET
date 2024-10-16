import React, { useState, useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

const Notification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const popupRef = useRef(null);

  const notifications = [
    {
      image: '/images/savernet.jpg',
      title: 'SAFELEGAL is launched 🚀',
      content: 'You can now access the SAFELEGAL platform to get legal advice and support.'
    },
    {
      image: '/images/5.png',
      title: 'Ambassador Program is coming 🔜',
      content: 'Anticipate for our ambassadorship program that will be launched soon. Where you can register and share your experience and idea with us. you might be selected to be a SAFERNET FELOW through this program.'
    }
  ];

  useEffect(() => {
    if (!sessionStorage.getItem('popupDisplayed')) {
      setIsVisible(true);
      sessionStorage.setItem('popupDisplayed', 'true');
    }

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % notifications.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + notifications.length) % notifications.length);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50 px-3 bg-opacity-50">
      <div ref={popupRef} className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-5 relative md:w-96 w-full">
        <h1 className="text-2xl font-bold text-center">Notice Board</h1>
        <button onClick={handleClose} className="absolute top-2 right-2">
          <IoClose className="h-6 w-6 text-gray-500" />
        </button>
        <img src={notifications[currentIndex].image} alt={notifications[currentIndex].title} className="w-full object-cover rounded-md" />
        <h2 className="text-lg font-semibold mt-4">{notifications[currentIndex].title}</h2>
        <p className="mt-2 text-xs text-gray-600">{notifications[currentIndex].content}</p>
        <div className="flex justify-between mt-4">
          <button onClick={handlePrevious} className="bg-blue-500 text-white px-4 py-2 rounded-md">Previous</button>
          <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Notification;