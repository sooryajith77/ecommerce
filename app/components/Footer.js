import Styles from "../styles/footer.module.css"

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.container}>

        <div>
          <h3 className={Styles.sectionTitle}>E-Shop</h3>
          <p className={Styles.text}>
            Your one-stop online store for clothing, electronics, accessories, and more. Quality products delivered to your door.
          </p>
        </div>

        <div>
          <h3 className={Styles.sectionTitle}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><a href="/" className={Styles.link}>Home</a></li>
            <li><a href="/products" className={Styles.link}>Products</a></li>
            <li><a href="/about" className={Styles.link}>About</a></li>
            <li><a href="/contact" className={Styles.link}>Contact</a></li>
            <li><a href="/login" className={Styles.link}>Login</a></li>
          </ul>
        </div>

        <div>
          <h3 className={Styles.sectionTitle}>Follow Us</h3>
          <div className={Styles.social}>
            <a href="#" className={Styles.link}>🐦 Twitter</a>
            <a href="#" className={Styles.link}>📘 Facebook</a>
            <a href="#" className={Styles.link}>📸 Instagram</a>
          </div>
        </div>

      </div>

      <div className={Styles.bottomBar}>
        © {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>
    </footer>
  );
}
