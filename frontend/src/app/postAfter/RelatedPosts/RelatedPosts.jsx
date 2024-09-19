"use client"; // To ensure this runs on the client-side

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link"; // Import Link from Next.js
import "./RelatedPosts.css";

const RelatedPosts = ({ categories }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (categories.length > 0) {
      const categoryIds = categories.map((cat) => cat.id).join(",");
      axios
        .get(
          `http://reactnextjs.local/wp-json/wp/v2/posts?categories=${categoryIds}&per_page=3`
        )
        .then((response) => setRelatedPosts(response.data))
        .catch((error) => console.error("Error fetching related posts", error));
    }
  }, [categories]);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="related-posts">
      <h3 className="related-title">Related Posts</h3>
      <div className="related-post-list">
        {relatedPosts.map((post) => (
          <div key={post.id} className="related-post">
            <Link href={`/${post.slug}`}>
              <p className="related-post-link">{post.title.rendered}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
