"use client";

import Link from "next/link";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

export default function AboutPage() {
  return (
    <main style={{ background: "#f7f7f9" }}>
     
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="fw-bold display-5">
                We build delightful digital products
              </h1>
              <p className="mt-3 text-secondary">
                Beautifully crafted interfaces, human-centred design, and
                high-performance engineering — all in one place.
              </p>

              <div className="d-flex gap-3 mt-4">
                <Link href="/contact">
                  <Button variant="primary">Get in Touch</Button>
                </Link>

                <Link href="/work">
                  <Button variant="outline-primary">Our Work</Button>
                </Link>
              </div>

              <Row className="mt-5">
                <Col xs={3} className="text-center">
                  <h4 className="fw-bold">12+</h4>
                  <small className="text-muted">Years</small>
                </Col>
                <Col xs={3} className="text-center">
                  <h4 className="fw-bold">120+</h4>
                  <small className="text-muted">Projects</small>
                </Col>
                <Col xs={3} className="text-center">
                  <h4 className="fw-bold">40+</h4>
                  <small className="text-muted">Team</small>
                </Col>
                <Col xs={3} className="text-center">
                  <h4 className="fw-bold">98%</h4>
                  <small className="text-muted">Satisfaction</small>
                </Col>
              </Row>
            </Col>

            <Col md={6}>
              <Card className="shadow-lg border-0">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  height="400"
                  style={{ objectFit: "cover" }}
                  rounded
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

 
      <section className="py-5 bg-white">
        <Container>
          <h2 className="fw-bold mb-4">What we do</h2>

          <Row>
            <Col md={4}>
              <ServiceCard
                title="Product Design"
                desc="Research-led design, prototypes, and polished UI systems."
              />
            </Col>

            <Col md={4}>
              <ServiceCard
                title="Engineering"
                desc="Modern React & Next.js stacks with performance-first architecture."
              />
            </Col>

            <Col md={4}>
              <ServiceCard
                title="Growth"
                desc="Data-driven growth, analytics, and optimisation."
              />
            </Col>
          </Row>
        </Container>
      </section>

   
      <section className="py-5">
        <Container>
          <Row className="gy-4">
            <Col md={6}>
              <h3 className="fw-bold mb-3">Our values</h3>

              <ul className="list-unstyled">
                <ValueItem title="People first" desc="Design decisions that prioritize users." />
                <ValueItem title="Speed with care" desc="Fast delivery without sacrificing quality." />
                <ValueItem title="Measure & learn" desc="Data-driven decisions backed by real feedback." />
              </ul>
            </Col>

            <Col md={6}>
              <h3 className="fw-bold mb-3">Timeline</h3>

              <Timeline year="2013" title="Founded" desc="Started as a two-person design studio." />
              <Timeline year="2016" title="First Product" desc="Launched our first SaaS product." />
              <Timeline year="2020" title="Scale" desc="Expanded to a multi-discipline team." />
              <Timeline year="2024" title="Now" desc="Serving global founders and brands." />
            </Col>
          </Row>
        </Container>
      </section>

     
      <section className="py-5 bg-white">
        <Container>
          <h2 className="fw-bold mb-4">Meet the team</h2>

          <Row className="gy-4">
            <Col md={3}>
              <TeamCard name="Arjun Rao" role="Product Designer" img="https://images.unsplash.com/photo-1545996124-6a5b0b1a8b3d" />
            </Col>
            <Col md={3}>
              <TeamCard name="Leah Nguyen" role="Frontend Engineer" img="https://images.unsplash.com/photo-1544005313-94ddf0286df2" />
            </Col>
            <Col md={3}>
              <TeamCard name="Kavita Singh" role="Engineering Lead" img="https://images.unsplash.com/photo-1524504388940-b1c1722653e1" />
            </Col>
            <Col md={3}>
              <TeamCard name="Noah Park" role="Growth" img="https://images.unsplash.com/photo-1527980965255-d3b416303d12" />
            </Col>
          </Row>
        </Container>
      </section>

   
      <section className="py-5 text-white" style={{ background: "#4f46e5" }}>
        <Container className="text-center">
          <h3 className="fw-bold">Let’s build something great together</h3>
          <p className="text-light mt-2">
            Tell us about your project and we’ll send a proposal.
          </p>

          <Link href="/contact">
            <Button variant="light" className="mt-3 px-4">
              Contact Us
            </Button>
          </Link>
        </Container>
      </section>

      <footer className="text-center py-4 text-secondary small">
        © {new Date().getFullYear()} Your Company — Crafted with passion.
      </footer>
    </main>
  );
}



function ServiceCard({ title, desc }) {
  return (
    <Card className="p-4 shadow-sm border-0 mb-3">
      <Card.Body>
        <h5 className="fw-bold">{title}</h5>
        <p className="text-muted">{desc}</p>
      </Card.Body>
    </Card>
  );
}

function ValueItem({ title, desc }) {
  return (
    <li className="mb-3">
      <strong>{title}</strong>
      <div className="text-muted small">{desc}</div>
    </li>
  );
}

function Timeline({ year, title, desc }) {
  return (
    <div className="border-start ps-3 mb-3">
      <strong>{year} — {title}</strong>
      <div className="text-muted small">{desc}</div>
    </div>
  );
}

function TeamCard({ name, role, img }) {
  return (
    <Card className="text-center shadow-sm border-0 p-3">
      <Image
        src={img}
        roundedCircle
        width={90}
        height={90}
        style={{ objectFit: "cover" }}
        className="mx-auto mb-3"
      />
      <h6 className="fw-bold">{name}</h6>
      <small className="text-muted">{role}</small>
    </Card>
  );
}
