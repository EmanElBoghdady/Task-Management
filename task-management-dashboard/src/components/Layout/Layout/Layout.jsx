import Navbar from '../Navbar/Navbar.jsx';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="layout-main">
        <div className="container">
          <div className="fade-in">
            {children}
          </div>
        </div>
      </main>
      <footer className="layout-footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">
              <i className="bi bi-kanban me-2"></i>
              TaskFlow Dashboard © 2024
            </p>
            <small className="footer-copyright">
              Built with React, Bootstrap & Vite
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;