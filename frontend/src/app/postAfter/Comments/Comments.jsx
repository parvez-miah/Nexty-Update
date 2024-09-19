"use client"; // To ensure client-side rendering

import { useState, useEffect } from "react";
import axios from "axios";
import "./Comments.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState("");
  const [error, setError] = useState("");

  // Use environment variables for API URL
  const COMMENTS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_COMMENTS_API;

  useEffect(() => {
    axios
      .get(`${COMMENTS_API_URL}?post=${postId}`)
      .then((response) => setComments(response.data))
      .catch((error) => {
        console.error("Error fetching comments", error);
        setError("Failed to load comments.");
      });
  }, [postId, COMMENTS_API_URL]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentContent.trim()) {
      setError("Comment cannot be empty.");
      return;
    }

    axios
      .post(COMMENTS_API_URL, {
        post: postId,
        content: commentContent,
        author_name: "Anonymous", // You can replace this with dynamic author data if available
      })
      .then((response) => {
        setComments([...comments, response.data]);
        setCommentContent("");
        setError(""); // Clear errors on success
      })
      .catch((error) => {
        console.error("Error posting comment", error);
        setError("Failed to post comment.");
      });
  };

  return (
    <div className="comments-section">
      <h3>Comments</h3>
      {error && <p className="error-message">{error}</p>}
      {comments.length > 0 ? (
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p className="comment-author">{comment.author_name}</p>
              <div
                className="comment-content"
                dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="no-comments">No comments yet.</p>
      )}
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <textarea
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Add your comment"
          className="comment-input"
        />
        <button type="submit" className="comment-submit">
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default Comments;
