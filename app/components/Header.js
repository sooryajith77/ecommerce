
// "use client";
// import { useSelector } from "react-redux";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Navbar, Nav, Form, FormControl, Container, Dropdown } from "react-bootstrap";
// import { FaSearch } from "react-icons/fa";
// import Styles from "../styles/header.module.css";

// export default function Header() {
//   const { totalQty } = useSelector((state) => state.cart);
//   const [search, setSearch] = useState("");        
//   const [isClient, setIsClient] = useState(false);  // Client check
//   const router = useRouter();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!search.trim()) return;
//     router.push(`/search?query=${search}`);
//     setSearch("");
//   };

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <Navbar bg="primary" variant="dark" expand="lg" className={Styles.navbar}>
//       <Container className={Styles.container}>
//         <Link href="/" className={Styles.brand}>
//           <Navbar.Brand>E-KART</Navbar.Brand>
//         </Link>

//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav" className="justify-content-between">

//           <Form
//             className={Styles.form}
//             onSubmit={handleSearch}
//             style={{ position: "relative", width: "300px" }}
//           >
//             <FormControl
//               type="text"
//               placeholder="Search for products..."
//               className={Styles.formControl}
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               style={{ paddingRight: "35px" }}
//             />
//             <FaSearch
//               size={18}
//               style={{
//                 position: "absolute",
//                 right: "10px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 color: "yellow",
//                 cursor: "pointer",
//               }}
//               onClick={handleSearch}
//             />
//           </Form>

//           <Nav className={Styles.navLinks}>
//             <Link href="/" className="nav-link">🏠 Home</Link>
//             <Link href="/products" className="nav-link">📦 Products</Link>
//             <Link href="/about" className="nav-link">ℹ️ About</Link>
//             <Link href="/contact" className="nav-link">📞 Contact</Link>
//             <Link href="/login" className="nav-link">👤 Login</Link>
//             <Link href="/cart" className="nav-link">🛒 Cart {totalQty}</Link>

//             {isClient && (
//               <Dropdown align="end">
//                 <Dropdown.Toggle id="flag-dropdown" className={Styles.dropdownToggle}>
//                   <img
//                     src="https://flagcdn.com/w40/in.png"
//                     alt="India"
//                     width={30}
//                     height={20}
//                     className={Styles.flagImage}
//                   />
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   <Dropdown.Item href="#">
//                     <img
//                       src="https://flagcdn.com/w40/in.png"
//                       alt="India"
//                       width={30}
//                       height={20}
//                       style={{ marginRight: "0.5rem" }}
//                     />
//                     India
//                   </Dropdown.Item>
//                   <Dropdown.Item href="#">
//                     <img
//                       src="https://flagcdn.com/w40/us.png"
//                       alt="USA"
//                       width={30}
//                       height={20}
//                       style={{ marginRight: "0.5rem" }}
//                     />
//                     USA
//                   </Dropdown.Item>
//                   <Dropdown.Item href="#">
//                     <img
//                       src="https://flagcdn.com/w40/gb.png"
//                       alt="UK"
//                       width={30}
//                       height={20}
//                       style={{ marginRight: "0.5rem" }}
//                     />
//                     UK
//                   </Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }


"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar, Nav, Form, FormControl, Container, Spinner } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5"; 
import Styles from "../styles/header.module.css";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { totalQty } = useSelector((state) => state.cart);

  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      // Filter products that match search query
      const filteredProducts = data.products.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );

      // Extract unique categories
      const uniqueCategories = [
        ...new Set(filteredProducts.map((p) => p.category))
      ];

      setResults(filteredProducts);
      setCategories(uniqueCategories);
    } catch (err) {
      console.error("Error fetching products:", err);
      setResults([]);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className={Styles.navbar}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container className={Styles.container}>
        <Link href="/" className={Styles.brand}>
          <Navbar.Brand>E-KART</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          
          {/* SEARCH BAR */}
          <Form
            className={Styles.form}
            onSubmit={handleSearch}
            style={{ position: "relative", width: "300px" }}
          >
            <FormControl
              type="text"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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

            {/* DROPDOWN: PRODUCTS + CATEGORIES */}
            {search && (
              <div
                style={{
                  position: "absolute",
                  top: "105%",
                  left: 0,
                  right: 0,
                  background: "white",
                  zIndex: 1000,
                  maxHeight: "300px",
                  overflowY: "auto",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              >
                {loading ? (
                  <div className="text-center p-2">
                    <Spinner animation="border" size="sm" />
                  </div>
                ) : results.length === 0 && categories.length === 0 ? (
                  <div className="p-2">No products found</div>
                ) : (
                  <>
                    {/* Categories */}
                    {categories.length > 0 && (
                      <div className="p-2 border-bottom">
                        <strong>Categories:</strong>
                        {categories.map((cat, index) => (
                          <Link
                            href={`/products/category/${cat}`}
                            key={index}
                            className="d-block text-decoration-none text-dark p-1"
                            onClick={() => {
                              setSearch("");
                              setResults([]);
                              setCategories([]);
                              setExpanded(false);
                            }}
                          >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Products */}
                    {results.length > 0 && (
                      <div className="p-2">
                        <strong>Products:</strong>
                        {results.map((p) => (
                          <Link
                            href={`/products/${p.id}`}
                            key={p.id}
                            className="d-block text-decoration-none text-dark p-1 border-top"
                            onClick={() => {
                              setSearch("");
                              setResults([]);
                              setCategories([]);
                              setExpanded(false);
                            }}
                          >
                            {p.title} - ₹{p.price}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </Form>

          {/* NAV LINKS */}
          <Nav className={Styles.navLinks}>
            <Link href="/" className="nav-link">🏠 Home</Link>
            <Link href="/products" className="nav-link">📦 Products</Link>
            <Link href="/about" className="nav-link">ℹ️ About</Link>
            <Link href="/contact" className="nav-link">📞 Contact</Link>
            <Link href="/login" className="nav-link">👤 Login</Link>
            <Link href="/cart" className="nav-link d-flex align-items-center">
              <IoCartOutline size={22} style={{ marginRight: "6px" }} />
              Cart ({totalQty})
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
