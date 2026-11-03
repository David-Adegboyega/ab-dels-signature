import { Link } from 'react-router';
import './Home.css';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const categories = ['Clothing', 'Caps', 'Books', 'Souvenirs'];

const steps = [
  { title: 'Choose', text: 'Pick your product, size and colour.' },
  { title: 'Send your design', text: 'Share your logo or artwork on WhatsApp.' },
  { title: 'Pay', text: 'We confirm the price, then you pay by bank transfer.' },
  { title: 'Delivery', text: 'We print your order and deliver it to you.' },
];

function Home() {
  const featured = products.filter((product) => product.featured);

  return (
    <>
      <section className="hero">
        <h1>Your Brand. Our Signature.</h1>
        <p>
          Premium customised merchandise. Professional branding. Quality that
          represents your name.
        </p>
        <div className="hero__actions">
          <Link to="/shop" className="button button-primary">Shop</Link>
          <Link to="/quote" className="button button-secondary">Request a quote</Link>
        </div>
      </section>

      <section className="container">
        <h2>Featured products</h2>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </section>

      <section className="container">
        <h2>Shop by category</h2>
        <div className="category-tiles">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/shop?category=${category}`}
              className="category-tile"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2>How it works</h2>
          <ol className="steps">
            {steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export default Home;