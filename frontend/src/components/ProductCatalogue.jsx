import { useState } from 'react';
import './ProductCatalogue.css';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { useSearchParams } from 'react-router';

const categories = ['All', 'Clothing', 'Caps', 'Books', 'Souvenirs'];

function ProductCatalogue() {
  const [searchParams] = useSearchParams();
const requested = searchParams.get('category');
const [selected, setSelected] = useState(
  categories.includes(requested) ? requested : 'All'
);

  const visibleProducts =
    selected === 'All'
      ? products
      : products.filter((product) => product.category === selected);

  return (
    <section className="catalogue">
      <div className="filter-bar">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-button ${selected === category ? 'active' : ''}`}
            onClick={() => setSelected(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductCatalogue;