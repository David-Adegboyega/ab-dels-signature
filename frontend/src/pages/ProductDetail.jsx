import { useState } from 'react';
import { Link, useParams } from 'react-router';
import './ProductDetail.css';
import { products } from '../data/products';
import { siteInfo } from '../data/siteInfo';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const [size, setSize] = useState('');
  const [colour, setColour] = useState('');
  const [wording, setWording] = useState('');

  if (!product) {
    return (
      <div className="container product-detail">
        <h1>Product not found</h1>
        <Link to="/shop" className="back-link">Back to shop</Link>
      </div>
    );
  }

  const needsSize = product.sizes.length > 0;
  const needsColour = product.colours.length > 0;
  const ready = (!needsSize || size) && (!needsColour || colour);
  const price = product.price.toLocaleString('en-NG');

  const message = [
    "Hello AB-Dels Signature, I'd like to order:",
    `Product: ${product.name}`,
    `Price: ₦${price}`,
    needsSize ? `Size: ${size}` : null,
    needsColour ? `Colour: ${colour}` : null,
    `Wording to print: ${wording || 'I will send it in this chat'}`,
    'I will send my design in this chat.',
  ]
    .filter(Boolean)
    .join('\n');

  const whatsappLink = `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="container product-detail">
      <Link to="/shop" className="back-link">← Back to shop</Link>
      <h1>{product.name}</h1>
      <p className="category">{product.category}</p>
      <p className="price">₦{price}</p>

      {needsSize && (
        <div className="field">
          <label htmlFor="size">Size</label>
          <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Choose a size</option>
            {product.sizes.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      )}

      {needsColour && (
        <div className="field">
          <label htmlFor="colour">Colour</label>
          <select id="colour" value={colour} onChange={(e) => setColour(e.target.value)}>
            <option value="">Choose a colour</option>
            {product.colours.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      )}

      <div className="field">
        <label htmlFor="wording">Wording to print</label>
        <textarea
          id="wording"
          rows="3"
          value={wording}
          onChange={(e) => setWording(e.target.value)}
          placeholder="Type the exact wording you want printed"
        />
      </div>

      <p className="note">
        You will send your design or logo on WhatsApp after you tap the button.
      </p>

      {ready ? (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="button button-primary"
        >
          Order on WhatsApp
        </a>
      ) : (
        <button type="button" className="button button-primary" disabled>
          Choose your options to order
        </button>
      )}
    </div>
  );
}

export default ProductDetail;