import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">Vertex Media</div>
        <div className="nav-right">
          <div className="nav-links">
            <Link to="/web-design">WebDesign</Link>
            <Link to="/pitch-deck">PitchDeck</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="menu-btn" aria-label="Menu">
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
