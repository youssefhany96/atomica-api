import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/comments/${postId}`);
        setComments(response.data.comments);
      } catch (error) {
        console.error('Error fetching comments', error);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <div>
      {comments && comments.map((comment) => (
        <div key={comment._id}>
          <p>{comment.text}</p>
          {/* Add buttons or links for editing/deleting comments */}
        </div>
      ))}
      {/* Add form or input for posting new comments */}
    </div>
  );
};

export default Comments;
