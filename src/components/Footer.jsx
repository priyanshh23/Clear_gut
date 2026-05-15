import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white" style={{ borderTop: '4px solid var(--color-black)', padding: '3.2rem 0 1.6rem 0' }}>
      <div className="container grid-mobile-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.6rem', marginBottom: '1.6rem' }}>
        <div>
          <h2 className="text-lg" style={{ marginBottom: '1rem', lineHeight: '0.9' }}>CLEAR<span className="text-lime" style={{textShadow: '2px 2px 0 var(--color-black)'}}>GUT</span></h2>
          <p style={{ fontSize: '1rem', opacity: 0.9, maxWidth: '400px', fontWeight: 'bold' }}>MURDER YOUR BLOAT. FEED YOUR INNER ECOSYSTEM. ANNIHILATE BAD BACTERIA WITH RAW PLANT POWER.</p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-black)' }}>BUY NOW</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1rem' }}>
            <li><Link to="/shop" className="hover-lime" onMouseEnter={(e) => e.target.style.color = 'var(--color-lime)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>VARIETY PACK</Link></li>
            <li><Link to="/shop" className="hover-lime" onMouseEnter={(e) => e.target.style.color = 'var(--color-lime)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>KIWI LIME</Link></li>
            <li><Link to="/shop" className="hover-lime" onMouseEnter={(e) => e.target.style.color = 'var(--color-lime)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>WATERMELON</Link></li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-black)' }}>PROPAGANDA</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1rem' }}>
            <li><Link to="/about" onMouseEnter={(e) => e.target.style.color = 'var(--color-lime)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>MANIFESTO</Link></li>
            <li><Link to="/about" onMouseEnter={(e) => e.target.style.color = 'var(--color-lime)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>INGREDIENTS</Link></li>
          </ul>
        </div>
      </div>
      <div className="container flex-mobile-col" style={{ borderTop: '4px solid var(--color-black)', paddingTop: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.8rem', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem' }}>&copy; {new Date().getFullYear()} CLEAR GUT. DEATH TO BAD DIGESTION.</p>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-lime)', textShadow: '1px 1px 0 var(--color-black)' }}>ZERO BS.</p>
      </div>
    </footer>
  );
};

export default Footer;
