import { useState } from 'react';
import './Quote.css';
import { siteInfo } from '../data/siteInfo';

const productTypes = ['Clothing', 'Caps', 'Books', 'Souvenirs', 'Other'];

function Quote() {
  const [form, setForm] = useState({
    name: '',
    organisation: '',
    product: '',
    quantity: '',
    deadline: '',
    location: '',
    details: '',
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const ready =
    form.name && form.product && Number(form.quantity) >= 1 && form.location;

  const message = [
    "Hello AB-Dels Signature, I'd like a quote:",
    `Name: ${form.name}`,
    form.organisation ? `Organisation: ${form.organisation}` : null,
    `Product: ${form.product}`,
    `Quantity: ${form.quantity}`,
    form.deadline ? `Needed by: ${form.deadline}` : null,
    `Delivery location: ${form.location}`,
    form.details ? `Details: ${form.details}` : null,
    'I will send my design in this chat.',
  ]
    .filter(Boolean)
    .join('\n');

  const whatsappLink = `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
  const saveQuote = () => {
  fetch(`${API_URL}/api/quotes/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
    keepalive: true,
  }).catch((error) => console.error('Could not save quote request', error));
};

  return (
    <div className="container text-page quote-form">
      <h1>Request a quote</h1>
      <p>
        Ordering for a church, company, school or event? Tell us what you need,
        and we will confirm the price and delivery on WhatsApp.
      </p>

      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" type="text" value={form.name} onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="organisation">Organisation (optional)</label>
        <input id="organisation" name="organisation" type="text" value={form.organisation} onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="product">Product</label>
        <select id="product" name="product" value={form.product} onChange={handleChange}>
          <option value="">Choose a product type</option>
          {productTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="quantity">Quantity</label>
        <input id="quantity" name="quantity" type="number" min="1" value={form.quantity} onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="deadline">Needed by (optional)</label>
        <input id="deadline" name="deadline" type="date" value={form.deadline} onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="location">Delivery location</label>
        <input id="location" name="location" type="text" value={form.location} onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="details">Details (wording, colours, anything else)</label>
        <textarea id="details" name="details" rows="4" value={form.details} onChange={handleChange} />
      </div>

      <p className="note">
        You will send your design or logo on WhatsApp after you tap the button.
      </p>

      {ready ? (
        <a href={whatsappLink} onClick={saveQuote} target="_blank" rel="noreferrer" className="button button-primary">
          Send request on WhatsApp
        </a>
      ) : (
        <button type="button" className="button button-primary" disabled>
          Fill in the required fields
        </button>
      )}
    </div>
  );
}

export default Quote;