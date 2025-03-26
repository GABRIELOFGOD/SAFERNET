import React, { useState, useEffect } from 'react';
import useComments from '../../hooks/useComments';
import toast from 'react-hot-toast';
import { baseUrl } from '../../utils/Context';

const CommentSection = ({ blog }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  const { error, loading: commentLoading, postComment } = useComments();

  useEffect(() => {
    if (blog) {
      // console.log(blog);
      setLoading(false);
    }
  }, [blog]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // const handleCommentSubmit = (e) => {
  //   e.preventDefault();
  //   if (comment.trim() && name.trim()) {
  //     const newComment = { name, email, comment };
  //     setComments([...comments, newComment]);
  //     setComment('');
  //     setName('');
  //     setEmail('');
  //   }
  // };

  if (loading) {
    return <p>Loading...</p>;
  }

  const handlePostComment = async (e) => {
    e.preventDefault();
    if (comment.trim() && name.trim()) {
      const res = await postComment(`${baseUrl}/comment/post`, {
        name,
        email,
        body: comment,
        blogId: blog._id
      });
      setComment('');
      setName('');
      setEmail('');
      if (res && res.message) {
        toast.success(res.message);
        location.reload();
      }
    }
  };

  if (error) {
    toast.error(error);
  }

  return (
    <div className="p-4">
      <div className="mb-8">
        <p className="text-3xl font-bold mb-4">Comment</p>
        <form onSubmit={handlePostComment} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Your name"
            className="border p-2 w-full mb-2"
          />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your email (Optional)"
            className="border p-2 w-full mb-2"
          />
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Add a comment"
            className="border p-2 w-full mb-2"
            rows="4"
          />
          <button type="submit" className={`bg-blue-500 text-white p-2 mt-2 ${commentLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
            {commentLoading ? 'Posting...' : 'Post Comment'}
          </button>
        </form>
      </div>
      <div>
        <p className='text-lg font-bold mb-4'>Comments</p>
        <div className="flex flex-col gap-4">
          {blog.comment && blog.comment.length > 0 ? blog.comment.map((comment, i) => (
            <div key={i} className='p-4 border rounded-lg shadow-sm'>
              <div className="flex gap-5">
                {/* <img src={comment.image} alt={comment.name} className='w-12 h-12 rounded-full' /> */}
                <div>
                  <p className='font-semibold'>By: {comment.name}</p>
                  <p>{comment.comment}</p>
                </div>
              </div>
            </div>
          )) : <p>No comments</p>}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
