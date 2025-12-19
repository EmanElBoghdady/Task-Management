import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">
          <h1>404</h1>
          <div className="error-icon">
            <i className="bi bi-exclamation-triangle"></i>
          </div>
        </div>
        <h2>Page Not Found</h2>
        <p className="error-message">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="action-buttons">
          <Link to="/" className="btn btn-primary">
            <i className="bi bi-house me-2"></i>
            Go to Dashboard
          </Link>
          <button 
            className="btn btn-outline-secondary ms-2"
            onClick={() => window.history.back()}
          >
            <i className="bi bi-arrow-left me-2"></i>
            Go Back
          </button>
        </div>
        
        <div className="help-section mt-4">
          <p className="text-muted">
            <small>
              If you believe this is an error, check the URL or navigate using the menu.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;