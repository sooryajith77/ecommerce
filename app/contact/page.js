"use client";

import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function ContactPage() {
  return (
    <main style={{ background: "#f7f7f9" }}>
      
      <section className="py-5 text-center">
        <Container>
          <h1 className="fw-bold display-5">Contact Us</h1>
          <p className="text-muted mt-2">
            We’d love to hear from you. Fill out the form and our team will get
            back to you shortly.
          </p>
        </Container>
      </section>

      
      <section className="py-5">
        <Container>
          <Row className="gy-4">
           
            <Col md={7}>
              <Card className="p-4 shadow-sm border-0">
                <h4 className="fw-bold mb-3">Send us a Message</h4>

                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Write your message..." />
                  </Form.Group>

                  <Button  variant="primary" size="lg" >
                    Send Message
                  </Button>
                </Form>
              </Card>
            </Col>

         
            <Col md={5}>
              <Card className="p-4 shadow-sm border-0">
                <h4 className="fw-bold mb-3">Contact Information</h4>

                <div className="mb-3">
                  <strong>📍 Address</strong>
                  <p className="text-muted small mb-0">
                    123 Creative Street, Tech City, India
                  </p>
                </div>

                <div className="mb-3">
                  <strong>📞 Phone</strong>
                  <p className="text-muted small mb-0">+91 98765 43210</p>
                </div>

                <div className="mb-3">
                  <strong>📧 Email</strong>
                  <p className="text-muted small mb-0">support@example.com</p>
                </div>

                <div className="mb-3">
                  <strong>⏰ Working Hours</strong>
                  <p className="text-muted small mb-0">Mon – Fri: 9:00 AM – 6:00 PM</p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

     
      <section className="py-5 text-white text-center" style={{ background: "#4f46e5" }}>
        <Container>
          <h3 className="fw-bold">Let’s work together!</h3>
          <p className="text-light mt-1">
            Tell us about your idea — we’ll turn it into a product.
          </p>
        </Container>
      </section>

      <footer className="text-center py-4 text-secondary small">
        © {new Date().getFullYear()} Your Company — All rights reserved.
      </footer>
    </main>
  );
}
