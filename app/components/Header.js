


"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Dropdown,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Styles from "../styles/header.module.css";

export default function Header() {
  const router = useRouter();
  const { totalQty } = useSelector((state) => state.cart);

  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;


  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    router.push(`/search?query=${search}`);
    setSearch("");
  };

  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className={Styles.navbar}
      style={{ width: "100%", maxWidth: "100vw" }}
    >
      <Container fluid className="px-4">
        <Link href="/" className={Styles.brand}>
          <Navbar.Brand className="fs-4 fw-bold">E-KART</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          
      
          <Form
            className="position-relative w-100 my-3 my-lg-0 mx-lg-3"
            style={{ maxWidth: "600px" }}
            onSubmit={handleSearch}
          >
            <FormControl
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-100"
              style={{ paddingRight: "35px" }}
            />

            <FaSearch
              size={18}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "yellow",
                cursor: "pointer",
              }}
              onClick={handleSearch}
            />
          </Form>

          <Dropdown align="end">
            <Dropdown.Toggle id="flag-dropdown" className={Styles.dropdownToggle}>
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India"
                width={30}
                height={20}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">
                <img
                  src="https://flagcdn.com/w40/in.png"
                  width={30}
                  height={20}
                  style={{ marginRight: "0.5rem" }}
                />
                India
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <img
                  src="https://flagcdn.com/w40/us.png"
                  width={30}
                  height={20}
                  style={{ marginRight: "0.5rem" }}
                />
                USA
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <img
                  src="https://flagcdn.com/w40/gb.png"
                  width={30}
                  height={20}
                  style={{ marginRight: "0.5rem" }}
                />
                UK
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav className="ms-lg-auto d-flex align-items-lg-center gap-2 flex-column flex-lg-row">
            <Link href="/" className="nav-link text-light">🏠 Home</Link>
            <Link href="/products" className="nav-link text-light">📦 Products</Link>
            <Link href="/about" className="nav-link text-light">ℹ️ About</Link>
            <Link href="/contact" className="nav-link text-light">📞 Contact</Link>
            <Link href="/login" className="nav-link text-light">👤 Login</Link>

            <Link
              href="/cart"
              className="nav-link text-light d-flex align-items-center"
            >
              <IoCartOutline size={22} className="me-1" />
              Cart ({totalQty})
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
