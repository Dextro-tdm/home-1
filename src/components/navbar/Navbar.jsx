import './Navbar.css';

function Navbar({ wishlistCount = 0, cartCount = 0 }) {
  return (
    <header className="navbar">
      <div className="logo">cyber</div>
      
      <nav className="nav-links">
        <a href="#" className="active">Home</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
        <a href="#">Blog</a>
      </nav>
      
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <span className="search-icon">🔍</span>
      </div>
      
      <div className="nav-icons">
        <div className="icon-wrapper">
          <span className="icon">❤️</span>
          {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
        </div>
        
        <div className="icon-wrapper">
          <span className="icon">🛒</span>
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </div>
        
        <span className="icon">👤</span>
      </div>
    </header>
  );
}

export default Navbar;