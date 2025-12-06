

"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";

export default function CategoryPage() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

 
  const categoryMap = {
    "mens-clothing": "mens-shirts",
    "womens-clothing": "womens-dresses",
    ornaments: "jewelery",
    accessories: "smartphones",
    "home-appliance": "home-decoration",
    vegetables: "groceries",
    meat: "groceries",
    "skin-care": "beauty", 
    home: "home-decoration",
    furniture: "furniture",
  };

  const apiCategory = categoryMap[id] || id;

  useEffect(() => {
    setLoading(true);

    fetch(`https://dummyjson.com/products/category/${apiCategory}`)
      .then(res => res.json())
      .then(data => {
        const formattedProducts = data.products?.map(p => ({
          ...p,
          image: p.images?.[0] || "/images/default.jpg",
        })) || [];
        setProducts(formattedProducts);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setProducts([]);
        setLoading(false);
      });
  }, [apiCategory]);

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  if (!products.length)
    return <h3 className="text-center mt-4">No products found</h3>;

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
