import { Link } from 'react-router';

function NotFound() {
  return (
    <div className="container">
      <h1>Page not found</h1>
      <p>
        Sorry, we couldn't find that page. It may have moved, or the address
        may have a typo.
      </p>
      <Link to="/" className="button button-primary">
        Back to home
      </Link>
    </div>
  );
}

export default NotFound;