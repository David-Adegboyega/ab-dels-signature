import { Link, useParams } from 'react-router';
import './ProductDetail.css';
import { products } from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="container product-detail">
        <h1>Product not found</h1>
        <Link to="/shop" className="back-link">Back to shop</Link>
      </div>
    );
  }

  return (
    <div className="container product-detail">
      <Link to="/shop" className="back-link">← Back to shop</Link>
      <h1>{product.name}</h1>
      <p className="category">{product.category}</p>
      <p className="price">₦{product.price.toLocaleString('en-NG')}</p>
    </div>
  );
}

export default ProductDetail;