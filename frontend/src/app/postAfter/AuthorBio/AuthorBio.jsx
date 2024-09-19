"use client"; // To ensure client-side rendering in Next.js

import React from "react";
import Image from "next/image"; // For optimized images
import "./AuthorBio.css";

const AuthorBio = ({ author }) => {
  return (
    <div className= "author-bio" >
      <div className= "author-info" >
        {author.avatar_urls && (
          <Image
            src={author.avatar_urls[96 
            alt={`${author.name}'s avatar`}
            width={96}
            height={96}
            className= "author-avatar" 
            priority // Ensures image loads quickly
          />
        )}
        <div className= "author-details" >
          <h3 className= "author-name" >
            About the Author: {author.name}
          </h3>
          <p className= "author-description" >{author.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
