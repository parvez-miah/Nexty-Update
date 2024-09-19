"use client"; // Ensures this component is only rendered on the client-side

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Social media icons
import "./SocialSharing.css";

const SocialSharing = ({ url, title }) => {
  const shareUrl = encodeURIComponent(url);
  const shareText = encodeURIComponent(title);

  return (
    <div className="social-share">
      <h3>Share this post:</h3>
      <div className="social-icons">
        {/* <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles["social-icon"]} ${styles["facebook"]}`}
        >
          <FaFacebookF /> Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles["social-icon"]} ${styles["twitter"]}`}
        >
          <FaTwitter /> Twitter
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles["social-icon"]} ${styles["linkedin"]}`}
        >
          <FaLinkedinIn /> LinkedIn
        </a> */}
      </div>
    </div>
  );
};

export default SocialSharing;
