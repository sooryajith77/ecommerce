"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";

export default function CategoryPage() {
  const params = useParams();
  const { id } = params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const categoryMap = {
    "mens-clothing": "men's clothing",
    "womens-clothing": "women's clothing",
    ornaments: "jewelery",
    accessories: "electronics", // example
  };

  const apiCategory = categoryMap[id] || id;

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${apiCategory}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [apiCategory]);

  if (loading) return <Spinner animation="border" />;

  if (!products.length) return <h3 className="text-center mt-4">No products found</h3>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-capitalize">{id.replace("-", " ")}</h2>
      <Row>
        {products.map(product => (
          <Col md={4} lg={3} key={product.id} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
