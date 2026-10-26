import { useState } from 'react';
import './Header.css';

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
                <li><a href="/home">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/how-to-order">How to order</a></li>
                <li><a href="/request-a-quote">Request a quote</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;