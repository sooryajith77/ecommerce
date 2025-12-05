"use client";


import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import Link from "next/link";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || ""; // default to empty string
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        const filtered = data.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        );
        setProducts(filtered);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  if (!query) return <p className="text-center mt-5">Enter a search query.</p>;

  if (loading)
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );

  return (
    <Container className="mt-4">
      <h2>Search results for: "{query}"</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <Row className="mt-4">
          {products.map((p) => (
            <Col key={p.id} md={3} className="mb-4">
              <Card>
                <Card.Img
                  src={p.image}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text>₹ {p.price}</Card.Text>
                  <Link href={`/products/${p.id}`} passHref>
                    <Button variant="primary" className="w-100">
                      View Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
