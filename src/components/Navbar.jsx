import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  /* Mobile Menu Logic */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">Vertex Media</div>
        <div className="nav-right">
          <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/web-design" onClick={() => setIsMobileMenuOpen(false)}>WebDesign</Link>
            <Link to="/pitch-deck" onClick={() => setIsMobileMenuOpen(false)}>PitchDeck</Link>
            <Link to="/automation" onClick={() => setIsMobileMenuOpen(false)}>Automation</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="menu-btn" aria-label="Menu" onClick={toggleMenu}>
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <circle cx="3" cy="6" r="1" fill="currentColor"></circle>
                <circle cx="3" cy="12" r="1" fill="currentColor"></circle>
                <circle cx="3" cy="18" r="1" fill="currentColor"></circle>
              </svg>
            )}
          </button>

          <a href="#contact" className="btn btn-white nav-cta">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
