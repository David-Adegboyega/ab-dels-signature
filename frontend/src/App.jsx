import './App.css';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;