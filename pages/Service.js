"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCode, FaMobileAlt, FaPaintBrush, FaServer } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      desc: "We create modern, fast, and responsive websites.",
      icon: <FaCode size={35} />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      desc: "Build high-performance Android & iOS applications.",
      icon: <FaMobileAlt size={35} />,
    },
    {
      id: 3,
      title: "UI/UX Designing",
      desc: "Beautiful and user-friendly interface designs.",
      icon: <FaPaintBrush size={35} />,
    },
    {
      id: 4,
      title: "Cloud & Deployment",
      desc: "Secure cloud hosting and deployment services.",
      icon: <FaServer size={35} />,
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Our Services</h2>

      <Row>
        {services.map((service) => (
          <Col key={service.id} md={6} lg={3} className="mb-4">
            <Card className="text-center shadow-sm p-3" style={{ borderRadius: "15px" }}>
              <Card.Body>
                <div className="mb-3" style={{ color: "#0d6efd" }}>
                  {service.icon}
                </div>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text style={{ fontSize: "14px", color: "#555" }}>
                  {service.desc}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
