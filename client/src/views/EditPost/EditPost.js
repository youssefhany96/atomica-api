import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostForm from '../../components/PostForm';
import axios from 'axios';
import API_BASE_URL from "../../config";

const EditPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
        setPost(response.data.data.post);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching post', err);
        setError('Error fetching post for editing');
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return post && <PostForm post={post} />;
};

export default EditPost;
