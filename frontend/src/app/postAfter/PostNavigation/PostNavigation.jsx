"use client"; // Ensure client-side behavior for scroll effects

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Use Next.js routing
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"; // Import icons
import "./PostNavigation.css";

const PostNavigation = ({ prevPost, nextPost }) => {
  const router = useRouter(); // Get the router object for Next.js

  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [router.asPath]); // Triggers when the pathname changes

  return (
    <div className="post-navigation">
      {prevPost && (
        <div className="prev-post">
          <Link href={`/${prevPost.slug}`}>
            <FiArrowLeft className="nav-icon" />
            <span className="nav-text">
              Previous: {prevPost.title.rendered}
            </span>
          </Link>
        </div>
      )}
      {nextPost && (
        <div className="next-post">
          <Link href={`/${nextPost.slug}`}>
            <span className="nav-text">Next: {nextPost.title.rendered}</span>
            <FiArrowRight className="nav-icon" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default PostNavigation;
