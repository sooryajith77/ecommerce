"use client";

import { Card, Col, Row } from "react-bootstrap";

export default function ProductSkeleton() {
  const skeletonArray = Array.from({ length: 8 });

  return (
    <Row>
      {skeletonArray.map((_, index) => (
        <Col key={index} md={3} className="mb-4">
          <Card
            style={{
              borderRadius: "12px",
              padding: "10px",
              animation: "pulse 1.5s infinite",
            }}
          >
            <div
              style={{
                height: "200px",
                background: "#e3e3e3",
                borderRadius: "10px",
              }}
            ></div>

            <div
              style={{
                marginTop: "15px",
                height: "20px",
                width: "70%",
                background: "#e3e3e3",
                borderRadius: "6px",
              }}
            ></div>

            <div
              style={{
                marginTop: "10px",
                height: "20px",
                width: "40%",
                background: "#e3e3e3",
                borderRadius: "6px",
              }}
            ></div>

            <div
              style={{
                marginTop: "20px",
                height: "45px",
                width: "100%",
                background: "#d1d1d1",
                borderRadius: "8px",
              }}
            ></div>
          </Card>
        </Col>
      ))}

      {/* Skeleton Animation */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </Row>
  );
}
