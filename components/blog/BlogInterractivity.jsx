import React, { useState } from 'react'
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa6";
import { MdOutlineShare } from "react-icons/md";
import ShareModal from './ShareModal';

const BlogInterractivity = ({blog}) => {
  const [showShareModal, setShowShareModal] = useState(false);

  const closeModal = () => {
    setShowShareModal(false);
  }

  if (!blog) {
    return <div></div>;
  }
  
  return (
    <div className='flex justify-between px-6 py-1 border my-10 rounded-full'>
      <div className="flex gap-5">
        <button className="flex gap-2 hover:text-primary my-auto"><span>{2}</span> <span className="my-auto"><BiLike size={20} /></span></button>
        <button
          className="flex gap-2 my-auto"
          onClick={() => {
            const commentsSection = document.getElementById('comments');
            if (commentsSection) {
              commentsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span>{blog?.comment.length}</span> <span className="my-auto"><FaRegCommentDots size={20} /></span>
        </button>
      </div>
      <button
        className="flex my-auto"
        onClick={() => setShowShareModal(true)}
      >
        <MdOutlineShare size={20} />
      </button>
      {showShareModal && <ShareModal closeModal={closeModal} />}
    </div>
  )
}

export default BlogInterractivity