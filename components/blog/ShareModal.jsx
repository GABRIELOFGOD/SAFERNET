import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";

const ShareModal = ({closeModal}) => {
  const currentUrl = window.location.href;
  
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className='bg-black bg-opacity-30 fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center'
      onClick={handleClose}
    >
      <div
        className='bg-white p-5 rounded-md flex flex-col gap-5'
      >
        <p className='text-center font-bold text-2xl'>Share this blog</p>
        <div className='flex gap-3 justify-center'>
          <FacebookShareButton url={currentUrl}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={currentUrl}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <WhatsappShareButton url={currentUrl}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <EmailShareButton url={currentUrl}>
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
          <TelegramShareButton url={currentUrl}>
            <TelegramIcon size={32} round={true} />
          </TelegramShareButton>
          <LinkedinShareButton url={currentUrl}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <RedditShareButton url={currentUrl}>
            <RedditIcon size={32} round={true} />
          </RedditShareButton>
          <PinterestShareButton url={currentUrl}>
            <PinterestIcon size={32} round={true} />
          </PinterestShareButton>
        </div>        
      </div>
    </div>
  )
}

export default ShareModal