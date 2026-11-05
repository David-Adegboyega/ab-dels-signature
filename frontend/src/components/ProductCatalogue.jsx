import { useState } from 'react';
import './ProductCatalogue.css';
import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';
import { useSearchParams } from 'react-router';

const categories = ['All', 'Clothing', 'Caps', 'Books', 'Souvenirs'];

function ProductCatalogue() {
  const [searchParams] = useSearchParams();
const requested = searchParams.get('category');
const { products, loading, error } = useProducts();
const [selected, setSelected] = useState(
  categories.includes(requested) ? requested : 'All'
);

  const visibleProducts =
    selected === 'All'
      ? products
      : products.filter((product) => product.category === selected);
    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Sorry, we couldn't load the products. Please try again.</p>;

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