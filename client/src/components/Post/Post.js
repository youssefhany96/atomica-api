import React from "react";
import { useNavigate } from "react-router-dom";
import "./Post.css";
import { FaEdit, FaTrash, FaRegEye } from "react-icons/fa";
import axios from "axios";

const Post = ({ post }) => {
  const navigate = useNavigate();

  const handleViewPost = () => {
    navigate(`/posts/${post._id}`);
  };

  const handleEdit = () => {
    navigate(`/posts/${post._id}/edit`);
  };

  const handleDelete = () => {
    axios.delete(`/posts/${post._id}`);
  };

  return (
    <div className="post-container">
      <h4 className="post-title">{post.title}</h4>
      <p className="post-author">By {post.author}</p>
      <p className="post-summary">{post.content.substring(0, 100)}...</p>
      <div className="post-actions">
        <button onClick={handleViewPost} className="view-button">
          <FaRegEye /> View
        </button>
        <button onClick={handleEdit} className="edit-button">
          <FaEdit /> Edit
        </button>
        <button onClick={handleDelete} className="delete-button">
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
