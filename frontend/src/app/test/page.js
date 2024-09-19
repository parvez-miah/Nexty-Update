"use client";
import React, { useEffect, useState } from "react";

function PostContent() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the post content from the custom API endpoint
    fetch("http://reactnextjs.local/wp-json/custom/v1/render-post/11")
      .then((response) => response.json())
      .then((data) => {
        // Set the post data
        setPost(data);
      })
      .catch((error) => {
        console.error("Error fetching the post:", error);
      });
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  // Function to decode HTML entities
  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div>
      {/* Display the post title */}
      <h1>{post.title}</h1>

      {/* Render the decoded content as HTML */}
      <div dangerouslySetInnerHTML={{ __html: decodeHTML(post.content) }} />
    </div>
  );
}

export default PostContent;
