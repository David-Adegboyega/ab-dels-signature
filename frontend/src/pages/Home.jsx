import { Link } from 'react-router';
import './Home.css';

function Home() {
  return (
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
  );
}

export default Home;