import { useState } from "react";
import CampaignCardUser from "./CampaignCardUser";

const CampaignCard = ({ campaign }) => {
  const images = campaign?.images || [];
  const [showModal, setShowModal] = useState(false);
  const [imageViewerIndex, setImageViewerIndex] = useState(null);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const openImageViewer = (index) => {
    setImageViewerIndex(index);
  };

  const closeImageViewer = () => {
    setImageViewerIndex(null);
  };

  const renderImages = () => {
    const count = images.length;

    if (count === 1) {
      return (
        <div className="w-full h-[400px] cursor-pointer" onClick={handleImageClick}>
          <img src={images[0]} alt="campaign" className="w-full h-full object-cover rounded-md" />
        </div>
      );
    }

    if (count === 2) {
      return (
        <div className="grid grid-cols-2 gap-1 h-[300px] cursor-pointer" onClick={handleImageClick}>
          {images.map((img, idx) => (
            <img key={idx} src={img} alt="campaign" className="w-full h-full object-cover rounded-md" />
          ))}
        </div>
      );
    }

    if (count === 3) {
      return (
        <div className="grid grid-cols-2 grid-rows-2 gap-1 h-[400px] cursor-pointer" onClick={handleImageClick}>
          <img src={images[0]} alt="img1" className="col-span-1 row-span-2 w-full h-full object-cover rounded-md" />
          <img src={images[1]} alt="img2" className="w-full h-full object-cover rounded-md" />
          <img src={images[2]} alt="img3" className="w-full h-full object-cover rounded-md" />
        </div>
      );
    }

    if (count === 4) {
      return (
        <div className="grid grid-cols-2 gap-1 h-[400px] cursor-pointer" onClick={handleImageClick}>
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`img${idx}`} className="w-full h-full object-cover rounded-md" />
          ))}
        </div>
      );
    }

    if (count >= 5) {
      return (
        <div className="grid grid-cols-2 gap-1 h-[400px] cursor-pointer" onClick={handleImageClick}>
          {images.slice(0, 4).map((img, idx) => (
            <div key={idx} className="relative">
              <img src={img} alt={`img${idx}`} className="w-full h-full object-cover rounded-md" />
              {idx === 3 && (
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center text-xl font-bold rounded-md">
                  +{images.length - 4}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <div className="bg-white p-4 rounded-md shadow mb-5">
        <CampaignCardUser
          fellow={campaign.postedBy}
          location={campaign.location}
        />
        <div className="mt-3">
          <p className="font-medium">{campaign?.body}</p>
        </div>

        <div className="mt-3">{renderImages()}</div>
      </div>

      {/* Modal (Sheet) for full post */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-xl max-h-[90vh] overflow-y-auto p-4 relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <CampaignCardUser
              fellow={campaign.postedBy}
              location={campaign.location}
            />
            <div className="my-4">
              <p className="font-medium">{campaign?.body}</p>
            </div>
            <div className="flex flex-col gap-3">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`img-${index}`}
                  className="w-full rounded-md object-cover cursor-pointer"
                  onClick={() => openImageViewer(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Viewer */}
      {imageViewerIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeImageViewer}
          >
            ✕
          </button>
          <div className="w-full h-full flex items-center justify-center relative">
            <button
              onClick={() =>
                setImageViewerIndex((prev) => (prev > 0 ? prev - 1 : prev))
              }
              className="absolute left-4 text-white text-3xl font-bold"
            >
              ‹
            </button>
            <img
              src={images[imageViewerIndex]}
              alt={`viewer-${imageViewerIndex}`}
              className="max-h-[90%] max-w-[95%] object-contain"
            />
            <button
              onClick={() =>
                setImageViewerIndex((prev) =>
                  prev < images.length - 1 ? prev + 1 : prev
                )
              }
              className="absolute right-4 text-white text-3xl font-bold"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CampaignCard;
