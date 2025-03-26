import { useState, useEffect } from 'react';

const useComments = () => {
  // const [comments, setComments] = useState(initialComments);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const fetchComments = async (url) => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setComments(data);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const addComment = (comment) => {
  //   setComments([...comments, comment]);
  // };

  const postComment = async (url, {
    name, email, body, blogId
  }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          comment: body,
          blogId
        })
      });
      const data = await response.json();
      return data;
      // setComments([...comments, data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // const deleteComment = (id) => {
  //   setComments(comments.filter(comment => comment.id !== id));
  // };

  return {
    // comments,
    loading,
    error,
    // fetchComments,
    postComment,
    // deleteComment
  };
};

export default useComments;