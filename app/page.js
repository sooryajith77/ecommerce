"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Carousel, Card, Row, Col, Button, Placeholder } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "./Redux/CartSlice";
import CategoryList from "./components/CategoryList";
import Styles from "./styles/page.module.css";

export default function HomePage() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading delay for skeleton effect
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const slides = [
    {
      id: 1,
      image:
        "https://images.vexels.com/media/users/3/194732/raw/90137aa80ed4d208bc0cda1fc224cfff-online-shopping-web-slider.jpg",
      title: "Summer Collection Pure PU Ladies Shoulder Bag",
    },
    {
      id: 2,
      image:
        "https://t4.ftcdn.net/jpg/04/86/72/71/360_F_486727138_LIbtjQYhz2nwYFoziXPeUIFSpdz5tiHZ.jpg",
      title: "100% Cotton Men Black Suits",
    },
    {
      id: 3,
      image:
        "https://t4.ftcdn.net/jpg/16/03/29/35/360_F_1603293569_7CpMLJlWyCrf0ddXrX7U95GNBwjDbXN1.jpg",
      title: "Decorate Your Smart Kitchen",
    },
  ];

  const productImages = [
    { id: 1, src: "https://barringtonwatchwinders.com/cdn/shop/articles/Rolex_Prices_Falling.jpg?v=1721762101", title: "Rolex Watch", price: 1200 },
    { id: 2, src: "https://t4.ftcdn.net/jpg/05/06/36/71/240_F_506367145_aTN8tLqtKXDYxzHQs5DH4HGsbVT9OgMn.jpg", title: "Men’s Suit", price: 899 },
    { id: 3, src: "https://t4.ftcdn.net/jpg/04/10/65/53/240_F_410655365_MjietOoPZAMAdqA74M6EXqRL3F8g5dHH.jpg", title: "Smart Kitchen Tool", price: 399 },
    { id: 4, src: "https://t3.ftcdn.net/jpg/00/14/49/42/240_F_14494201_ZYX9KvAhOp5aeY2p0efpBGBQEZUYnO8D.jpg", title: "Leather Bag", price: 499 },
    { id: 5, src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000", title: "Headphones", price: 499 },
    { id: 6, src: "https://welpix.com/wp-content/uploads/2024/06/A-guide-to-skincare-product-photography.webp", title: "Sun cream", price: 499 },
    { id: 7, src: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg", title: "Earpodes", price: 499 },
    { id: 8, src: "https://www.jiomart.com/images/product/original/rv1cezadcf/jiebo-uv-protection-riding-square-silver-sunglasses.jpg", title: "Sun glass", price: 499 },
  ];

  return (
    <Fragment>
      {/* CATEGORY LIST */}
      <div style={{ margin: "20px 0" }}>
        {loading ? (
          <Row>
            {[...Array(6)].map((_, i) => (
              <Col key={i} md={2} className="text-center">
                <Placeholder animation="wave">
                  <Placeholder xs={12} style={{ height: "80px", borderRadius: "50%" }} />
                </Placeholder>
                <Placeholder animation="wave">
                  <Placeholder xs={6} />
                </Placeholder>
              </Col>
            ))}
          </Row>
        ) : (
          <CategoryList />
        )}
      </div>

      {/* CAROUSEL */}
      {loading ? (
        <Placeholder animation="wave">
          <Placeholder xs={12} style={{ height: "400px", borderRadius: "10px" }} />
        </Placeholder>
      ) : (
        <Carousel interval={3000} fade controls indicators>
          {slides.map((slide) => (
            <Carousel.Item key={slide.id}>
              <img
                className="d-block w-100"
                src={slide.image}
                alt={slide.title}
                style={{ height: "400px", objectFit: "fill", marginTop: "20px" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )}

      {/* FEATURED PRODUCTS */}
      <section className={Styles.section} style={{ padding: "20px" }}>
        <h2 className={Styles.title}>
          <center>Featured Products</center>
        </h2>

        <Row className="gy-4">
          {loading
            ? [...Array(8)].map((_, i) => (
                <Col key={i} md={3}>
                  <Card className="h-100 p-2">
                    <Placeholder animation="wave">
                      <Placeholder xs={12} style={{ height: "200px" }} />
                    </Placeholder>
                    <Card.Body>
                      <Placeholder animation="wave">
                        <Placeholder xs={8} />
                        <Placeholder xs={6} />
                      </Placeholder>
                      <Placeholder.Button xs={12} variant="warning" />
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : productImages.map((product) => (
                <Col key={product.id} md={3}>
                  <Card className="h-100 p-2">
                    <Card.Img
                      src={product.src}
                      style={{ height: "200px", objectFit: "contain", cursor: "pointer" }}
                    />

                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="fs-6">{product.title}</Card.Title>
                      <Card.Text>₹ {product.price}</Card.Text>

                      <Button
                        variant="warning"
                        className="mt-auto"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
        </Row>
      </section>
    </Fragment>
  );
}
