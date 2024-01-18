import React, { useState } from 'react';
import './PostForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from "../../config";

const PostForm = ({ post }) => {
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');
  const [author, setAuthor] = useState(post ? post.author : '')
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !author) {
      setError('Please fill in all fields');
      return;
    }

    const postData = { title, content, author };
    try {
      if (post) {
        await axios.put(`${API_BASE_URL}/posts/${post._id}`, postData);
      } else {
        await axios.post(`${API_BASE_URL}/posts`, postData);
      }
      navigate('/');
    } catch (error) {
      setError('An error occurred while saving the post');
      console.error(error);
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          className="form-control"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="submit-btn-wrapper">
        <button type="submit" className="btn submit-btn">Save Post</button>
      </div>
    </form>
  );
};

export default PostForm;
