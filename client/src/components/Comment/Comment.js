import React, { useState } from "react";
import "./Comment.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Comment = ({ comment, onDelete, onUpdate }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedText, setEditedText] = useState(comment.text);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    onUpdate({ ...comment, text: editedText });
    setIsEditMode(false);
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div className="comment-container">
      <span className="comment-author">{comment.author}</span>
      {isEditMode ? (
        <textarea
          type="text"
          className="comment-edit-textarea"
          value={editedText}
          onChange={handleTextChange}
        />
      ) : (
        <p className="comment-text">{comment.text}</p>
      )}
      <div className="comment-actions">
        {isEditMode ? (
          <>
            <button
              onClick={() => setIsEditMode(false)}
              className="cancel-button"
            >
              Cancel
            </button>
            <button onClick={handleSaveClick} className="save-button">
              Save
            </button>
          </>
        ) : (
          <>
            <button onClick={handleEditClick} className="edit-button">
              <FaEdit /> Edit
            </button>
            <button
              onClick={() => onDelete(comment._id)}
              className="delete-button"
            >
              <FaTrash /> Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;
