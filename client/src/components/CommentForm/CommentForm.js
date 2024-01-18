// CommentForm.js
import React, { useState } from "react";
import axios from "axios";
import "./CommentForm.css";
import API_BASE_URL from "../../config";

const CommentForm = ({ postId, onCommentAdded }) => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API_BASE_URL }/comments/${postId}`, {
        text,
        author,
      });
      const commentData = {
        text: data.data.comment.text,
        author: data.data.comment.author,
        _id: data.data.comment._id,
        createdAt: data.data.comment.createdAt,
        __v: data.data.comment.__v,
      };
      onCommentAdded(commentData);
      setText("");
      setAuthor("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Your name"
        required
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment..."
        required
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
