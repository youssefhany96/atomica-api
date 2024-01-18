import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./DetailedPostView.css";
import CommentList from "../../components/CommentList"
import CommentForm from "../../components/CommentForm";
import API_BASE_URL from "../../config";

const DetailedPostView = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPostAndComments = async () => {
      const postResponse = await axios.get(`${API_BASE_URL}/posts/${id}`)
      setPost(postResponse.data.data.post);
      const commentsResponse = await axios.get(`${API_BASE_URL}/comments/${id}`);
      setComments(commentsResponse.data.data.comments);
    };
    fetchPostAndComments();
  }, [id]);

  const handleAddComment = (comment) => {
    console.log("comment", comment);
    setComments([...comments, comment]);
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`${API_BASE_URL}/comments/${commentId}`);
      setComments(comments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleUpdateComment = async (updatedComment) => {
    try {
      await axios.put(`${API_BASE_URL}/comments/${updatedComment._id}`, updatedComment);
      setComments(comments.map((comment) => comment._id === updatedComment._id ? updatedComment : comment));
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };
  

  if (!post) return <div>Loading...</div>;

  return (
    <div className="detailed-post-container">
      <h1 className="detailed-post-title">{post.title}</h1>
      <p className="post-author">By {post.author}</p>
      <p className="detailed-post-content">{post.content}</p>
      <CommentList comments={comments} onDelete={handleDeleteComment} onUpdate={handleUpdateComment} />
      <CommentForm postId={post._id} onCommentAdded={handleAddComment} />
    </div>
  );
};

export default DetailedPostView;
