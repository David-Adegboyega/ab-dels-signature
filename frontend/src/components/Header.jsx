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
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">How to order</a></li>
                <li><a href="#">Request a quote</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;