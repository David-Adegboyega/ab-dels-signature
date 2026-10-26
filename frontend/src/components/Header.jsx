import './Header.css';

function Header() {
    return (
         <header className="site-header">
        <div className="brand-name">
          AB-Dels Signature
      </div>
        <nav>
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