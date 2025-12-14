import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Dashboard', icon: 'bi-house' },
    { path: '/add-project', label: 'Add Project', icon: 'bi-plus-circle' },
  ];

  return (
    <nav className="navbar-custom">
      <div className="container">
        <Link className="navbar-brand-custom" to="/">
          <i className="bi bi-kanban-fill me-2"></i>
          TaskFlow
        </Link>
        
        <button
          className="navbar-toggler-custom"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon-custom"></span>
        </button>
        
        <div className="collapse navbar-collapse-custom" id="navbarContent">
          <ul className="navbar-nav-custom">
            {navLinks.map((link) => (
              <li className="nav-item-custom" key={link.path}>
                <Link
                  className={`nav-link-custom ${
                    location.pathname === link.path ? 'active' : ''
                  }`}
                  to={link.path}
                >
                  <i className={`${link.icon} me-1`}></i>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="navbar-user-custom">
            <span className="user-badge">
              <i className="bi bi-check-circle me-1"></i>
              Task Manager
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;