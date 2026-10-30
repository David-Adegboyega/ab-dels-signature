
import './Footer.css';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <h2>AB-Dels Signature</h2>
        <p>Your Brand. Our Signature.</p>
      </div>

      <nav
        className="site-footer__nav"
        aria-label="Footer navigation"
      >
        <Link to="/how-to-order">How to order</Link>
        <a href="/delivery">Delivery</a>
        <a href="/policies">Policies</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      <div className="site-footer__socials">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>

        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noreferrer"
        >
          TikTok
        </a>
      </div>

      <p className="site-footer__copyright">
        © 2026 AB-Dels Signature
      </p>
    </footer>
  );
}

export default Footer;