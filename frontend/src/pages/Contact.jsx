import { siteInfo } from '../data/siteInfo';

function Contact() {
  return (
    <div className="container text-page">
      <h1>Contact us</h1>
      <p>
        The fastest way to reach us is on WhatsApp. Send your questions, your
        design or your order details.
      </p>
      <p>
        <a
          href={`https://wa.me/${siteInfo.whatsappNumber}`}
          className="button button-primary"
          target="_blank"
          rel="noreferrer"
        >
          Chat on WhatsApp
        </a>
      </p>
      <h2>Find us</h2>
      <ul>
        <li>{siteInfo.location}</li>
        <li>
          <a href={siteInfo.instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href={siteInfo.tiktokUrl} target="_blank" rel="noreferrer">
            TikTok
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;