import './ProductCard.css';

function ProductCard({ name, price }) {
  return (
    <article className="product-card">
      <h3>{name}</h3>
      <p>{price}</p>
    </article>
  );
}

export default ProductCard;