


"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import { Button, Card, Row, Col, Placeholder } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";

export default function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
 
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();

        
        data.image = data.images?.[0] || "";
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-4">
        <Row className="gy-4">
          <Col md={6}>
            <Card className="p-4" style={{ borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
              <Placeholder animation="glow">
                <Placeholder className="w-100" style={{ height: "400px" }} />
              </Placeholder>
            </Card>
          </Col>
          <Col md={6}>
            <Placeholder animation="glow">
              <Placeholder as="h2" xs={8} />
              <Placeholder as="p" xs={6} className="mt-2" />
              <Placeholder as="h3" xs={4} className="mt-2" />
              <Placeholder as="p" xs={12} className="mt-3" />
              <div className="d-flex gap-2 mt-3">
                <Placeholder.Button variant="warning" style={{ width: "120px", height: "45px" }} />
                <Placeholder.Button variant="danger" style={{ width: "120px", height: "45px" }} />
              </div>
            </Placeholder>
          </Col>
        </Row>
      </div>
    );
  }

  if (!product) {
    return <p className="text-center mt-5">Product not found!</p>;
  }

  return (
    <div className="container mt-4">
      <Row className="gy-4">
      
        <Col md={6}>
          <Card className="p-4" style={{ borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <Card.Img
              src={product.image}
              alt={product.title}
              style={{ height: "400px", objectFit: "contain", backgroundColor: "#f8f8f8" }}
            />
          </Card>
        </Col>

        <Col md={6}>
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <h3 className="text-success">₹ {product.price.toFixed(2)}</h3>
          <p>{product.description}</p>

          <div className="d-flex gap-2 mt-3">
            <Button
              variant="warning"
              size="lg"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </Button>
            <Button
              variant="danger"
              size="lg"
            >
              Buy Now
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
