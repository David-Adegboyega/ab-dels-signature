import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
         <header className="site-header">
        <div className="brand-name">
          AB-Dels Signature
      </div>
        <nav className={`navigation ${isOpen ? 'open' : ''}`}>
            <button 
            className="menu-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
         >
            {isOpen ? '✕' : '☰'}
        </button>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/how-to-order">How to order</Link></li>
                <li><a href="/request-a-quote">Request a quote</a></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;