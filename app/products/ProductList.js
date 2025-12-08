


"use client";

import { Card, Button, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

export default function ProductList({ products }) {
  const dispatch = useDispatch();

  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} md={3} className="mb-4">
          <Card
            className="h-100 shadow-sm"
            style={{
              borderRadius: "12px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }}
          >
            <Link href={`/products/${product.id}`}>
              <Card.Img
                src={product.image}
                alt={product.title}
                style={{
                  height: "200px",
                  objectFit: "contain",
                  padding: "10px",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </Link>

            <Card.Body className="d-flex flex-column">
              <Card.Title className="fw-bold" style={{ fontSize: "1rem" }}>
                {product.title.length > 30
                  ? product.title.slice(0, 27) + "..."
                  : product.title}
              </Card.Title>
              <Card.Text className="text-muted fs-6 mb-3">₹ {product.price}</Card.Text>

              <Button
                variant="primary"
                className="mb-2 w-100"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </Button>

              <Link href={`/products/${product.id}`} className="btn btn-outline-secondary w-100">
                View Details
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
