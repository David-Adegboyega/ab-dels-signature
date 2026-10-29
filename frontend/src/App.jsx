import './App.css';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="product-grid">
          <ProductCard name="T-shirt" price="₦13,000" />
          <ProductCard name="Hoodie" price="₦20,000" />
          <ProductCard name="Notebook" price="₦8,000" />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;