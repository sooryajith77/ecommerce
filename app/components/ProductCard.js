"use client";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card
      className="mb-4"
      style={{
        borderRadius: "12px",
        border: "1px solid #e0e0e0",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
        backgroundColor: "#fff",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
      }}
    >
      <div
        style={{
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          borderBottom: "1px solid #f0f0f0",
          backgroundColor: "#f8f8f8",
        }}
      >
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.title}
          style={{ maxHeight: "100%", objectFit: "contain" }}
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title
          style={{
            fontSize: "0.95rem",
            fontWeight: "600",
            minHeight: "3em",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.title}
        </Card.Title>

       
        <Card.Text
          style={{
            fontSize: "1.05rem",
            fontWeight: "700",
            color: "#2874f0", 
            marginBottom: "1rem",
          }}
        >
          ${product.price.toFixed(2)}
        </Card.Text>

       
        <div className="mt-auto d-flex gap-2">
         
          <Button
            variant="primary"
            onClick={handleAddToCart}
            style={{ borderRadius: "6px", fontSize: "0.85rem", flexGrow: 1 }}
          >
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
