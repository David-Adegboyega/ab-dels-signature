
import './Footer.css';
import { Link } from 'react-router';
import { siteInfo } from '../data/siteInfo';

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
        <Link to="/delivery">Delivery</Link>
        <Link to="/policies">Policies</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="site-footer__socials">
        <a href={siteInfo.instagramUrl} target="_blank" rel="noreferrer"
        >
          Instagram
        </a>

        <a href={siteInfo.tiktokUrl} target="_blank" rel="noreferrer"
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