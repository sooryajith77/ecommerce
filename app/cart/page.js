"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeProduct,
  clearCart,
} from "../Redux/CartSlice";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Card,
  ListGroup,
} from "react-bootstrap";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, totalAmount, totalQty } = useSelector((state) => state.cart);

  return (
    <Container style={{ padding: "2rem 0" }}>
      <h1 className="mb-4 text-center">🛒 Your Cart</h1>

      {items.length === 0 ? (
        <h3 className="text-center">Your cart is empty.</h3>
      ) : (
        <>
          <ListGroup variant="flush">
            {items.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="mb-3 p-3 rounded shadow-sm"
                style={{ transition: "transform 0.2s" }}
              >
                <Row className="align-items-center">
                 
                  <Col xs={12} md={2} className="text-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fluid
                      style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                  </Col>

                  
                  <Col xs={12} md={5} className="mt-2 mt-md-0">
                    <h5>{item.title}</h5>
                    <p className="mb-1">Price: ₹ {item.price}</p>
                  </Col>

                  
                  <Col
                    xs={12}
                    md={3}
                    className="d-flex align-items-center gap-2 mt-2 mt-md-0"
                  >
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => dispatch(decreaseQty(item.id))}
                    >
                      -
                    </Button>
                    <span className="fw-bold">{item.qty}</span>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => dispatch(increaseQty(item.id))}
                    >
                      +
                    </Button>
                  </Col>

                 
                  <Col xs={12} md={2} className="text-end mt-2 mt-md-0">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => dispatch(removeProduct(item.id))}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>

        
          <Card className="mt-4 shadow-sm p-3">
            <h5>Total Quantity: {totalQty}</h5>
            <h5>Total Amount: ₹ {totalAmount.toFixed(2)}</h5>
            <Button
              variant="danger"
              onClick={() => dispatch(clearCart())}
              className="mt-2"
            >
              Clear Cart
            </Button>
          </Card>
        </>
      )}
    </Container>
  );
}
