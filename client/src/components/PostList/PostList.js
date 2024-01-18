import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Post from "../Post/Post";
import "./PostList.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data.data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="post-list-container">
      <div className="post-list-header">
        <h3 className="post-list-title">Blog Posts</h3>
      </div>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <p>No posts to display.</p>
      )}
    </div>
  );
};

export default PostList;
