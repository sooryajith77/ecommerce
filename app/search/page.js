"use client";

import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  // Inline products array
  const products = [
    { id: 1, name: "T-Shirt", category: "Mens Clothing", price: 15 },
    { id: 2, name: "Dress", category: "Womens Clothing", price: 25 },
    { id: 3, name: "Laptop", category: "Electronics", price: 500 },
    { id: 4, name: "Phone", category: "Electronics", price: 300 },
    { id: 5, name: "Shoes", category: "Mens Clothing", price: 50 }
  ];

  // Filter products based on query
  useEffect(() => {
    if (query) {
      const result = products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(result);
    } else {
      setFiltered([]);
    }
  }, [query]);

  return (
    <Container className="mt-4">
      <h2>Search Products</h2>

      <Form className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter product name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form>

      <Row className="mt-3">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <Col md={4} key={product.id} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Category: {product.category}</Card.Text>
                  <Card.Text>Price: ${product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : query ? (
          <p>No products found.</p>
        ) : null}
      </Row>
    </Container>
  );
}
