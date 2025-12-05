
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
import { Navbar, Nav, Form, FormControl, Container, Dropdown } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5"; // ✅ NEW CART ICON
import Styles from "../styles/header.module.css";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const { totalQty } = useSelector((state) => state.cart);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/search?query=${search}`);
    setSearch("");
    setExpanded(false);
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
              className={Styles.formControl}
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
          </Form>
            <Dropdown align="end">
              <Dropdown.Toggle id="flag-dropdown" className={Styles.dropdownToggle}>
                <img
                  src="https://flagcdn.com/w40/in.png"
                  alt="India"
                  width={30}
                  height={20}
                  className={Styles.flagImage}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">
                  <img src="https://flagcdn.com/w40/in.png" width={30} height={20} /> India
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <img src="https://flagcdn.com/w40/us.png" width={30} height={20} /> USA
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <img src="https://flagcdn.com/w40/gb.png" width={30} height={20} /> UK
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          {/* NAV LINKS */}
          <Nav className={Styles.navLinks}>
            <Link href="/" className="nav-link">🏠 Home</Link>
            <Link href="/products" className="nav-link">📦 Products</Link>
            <Link href="/about" className="nav-link">ℹ️ About</Link>
            <Link href="/contact" className="nav-link">📞 Contact</Link>
            <Link href="/login" className="nav-link">👤 Login</Link>

            {/* UPDATED CART ICON */}
            <Link href="/cart" className="nav-link d-flex align-items-center">
              <IoCartOutline size={22} style={{ marginRight: "6px" }} />
              Cart ({totalQty})
            </Link>

            {/* FLAG DROPDOWN */}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
