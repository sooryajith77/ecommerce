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




// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
// import Link from "next/link";

// export default function SearchPage() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("query") || "";
//   const [loading, setLoading] = useState(false);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     if (!query) return;

//     setLoading(true);

//     fetch(`https://dummyjson.com/products/search?q=${query}`)
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products || []))
//       .finally(() => setLoading(false));
//   }, [query]);

//   return (
//     <Container className="mt-4">
//       <h2>Search Results for: "{query}"</h2>

//       {loading ? (
//         <div className="text-center mt-4">
//           <Spinner animation="border" />
//         </div>
//       ) : products.length === 0 ? (
//         <p className="mt-4">No products found.</p>
//       ) : (
//         <Row className="mt-3">
//           {products.map((p) => (
//             <Col md={4} key={p.id} className="mb-3">
//               <Card>
//                 <Card.Img variant="top" src={p.thumbnail} />
//                 <Card.Body>
//                   <Card.Title>{p.title}</Card.Title>
//                   <Card.Text>₹{p.price}</Card.Text>

//                   <Link href={`/products/${p.id}`} className="btn btn-primary">
//                     View Product
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Container>
//   );
// }
