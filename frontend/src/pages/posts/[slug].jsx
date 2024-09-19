import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PostDetail = () => {
  const router = useRouter();
  const { slug } = router.query; // This is the dynamic slug from the URL

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      const url = process.env.NEXT_PUBLIC_POST_URL;

      axios
        .get(`${url}?slug=${slug}&_embed`) // Fetch the post by slug
        .then((response) => {
          if (response.data.length > 0) {
            setPost(response.data[0]); // WordPress returns an array, so we grab the first item
          } else {
            setError("Post not found");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
          setError("Failed to load post");
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return <Container className="text-center">{error}</Container>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col md={12}>
          <h1>{post.title.rendered}</h1>
          {post._embedded?.["wp:featuredmedia"] && (
            <img
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={post.title.rendered}
              className="img-fluid mb-4"
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </Col>
      </Row>
    </Container>
  );
};

export default PostDetail;
