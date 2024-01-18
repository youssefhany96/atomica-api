// CommentList.js
import React from 'react';
import Comment from '../Comment/Comment';

import './CommentList.css';

const CommentList = ({ comments, onDelete, onUpdate }) => {
  return (
    <div className="comments-section">
      <h5>Comments:</h5>
      {comments.map((comment) => (
        <Comment
          key={comment._id}
          comment={comment}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default CommentList;
