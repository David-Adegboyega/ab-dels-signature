import { Link } from 'react-router';
import './ProductCard.css';

function ProductCard({ id, name, price }) {
  return (
    <article className="product-card">
      <Link to={`/shop/${id}`}>
        <h3>{name}</h3>
        <p>₦{price.toLocaleString('en-NG')}</p>
      </Link>
    </article>
  );
}

export default ProductCard;