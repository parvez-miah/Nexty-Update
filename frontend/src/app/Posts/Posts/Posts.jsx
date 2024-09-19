"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Card, Button, Container, Row, Col, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const url = process.env.NEXT_PUBLIC_POST_URL;

  useEffect(() => {
    axios
      .get(`${url}?_embed`) // Fetch posts along with media
      .then((response) => {
        setPosts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setIsLoading(false);
      });
  }, [url]);

  if (isLoading) {
    return <>Loading</>;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center">Latest Posts</h1>
      <Row>
        {currentPosts.map((post) => {
          const fromCurrency = post.from_currency || "Not set";
          const toCurrency = post.to_currency || "Not set";
          return (
            <Col md={4} key={post.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                {post._embedded?.["wp:featuredmedia"] && (
                  <Card.Img
                    variant="top"
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    alt={post.title.rendered}
                  />
                )}

                <Card.Body>
                  <Card.Title>{post.title.rendered}</Card.Title>
                  <Card.Text>From: {fromCurrency}</Card.Text>
                  <Card.Text>To: {toCurrency}</Card.Text>
                  <Link href={`/posts/${post.slug}`}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Pagination className="justify-content-center mt-4">
        {[...Array(totalPages).keys()].map((page) => (
          <Pagination.Item
            key={page + 1}
            active={page + 1 === currentPage}
            onClick={() => paginate(page + 1)}
          >
            {page + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default Posts;
