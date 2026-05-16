import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const closeMenu = () => setIsMenuOpen(false);

  const navigateToPageTop = (path) => {
    closeMenu();
    navigate(path);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
    });
  };

  return (
    <nav className="bg-white" style={{ borderBottom: '4px solid var(--color-black)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container nav-inner" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1rem', gap: '1rem' }}>
        <Link to="/" onClick={(e) => { e.preventDefault(); navigateToPageTop('/'); }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <h1 className="text-subtitle" style={{ margin: 0, letterSpacing: '-0.05em' }}>CLEAR<span className="text-lime">GUT</span></h1>
        </Link>

        <button
          type="button"
          className="nav-menu-button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg className="nav-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#151515" aria-hidden="true">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        <div className={`nav-links ${isMenuOpen ? 'is-open' : ''}`} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', fontFamily: 'var(--font-heading)', fontSize: '1rem', textTransform: 'uppercase', justifyContent: 'center' }}>
          <button type="button" className="nav-close-button" aria-label="Close menu" onClick={closeMenu}>
            <svg className="nav-close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#151515" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
          <Link to="/" onClick={(e) => { e.preventDefault(); navigateToPageTop('/'); }} style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-lime)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Home</Link>
          <Link to="/about" onClick={(e) => { e.preventDefault(); navigateToPageTop('/about'); }} style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-lime)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Manifesto</Link>
          <Link to="/shop" onClick={(e) => { e.preventDefault(); navigateToPageTop('/shop'); }} style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-lime)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Products</Link>
          <Link to="/shop" onClick={closeMenu} className="btn btn-primary nav-buy-button" style={{ padding: '0.5rem 1.5rem', fontSize: '1rem', width: 'auto' }}>
            <ShoppingCart size={20} style={{ marginRight: '0.5rem' }} /> BUY
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
