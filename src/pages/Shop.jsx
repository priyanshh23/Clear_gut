import { Skull, Droplet, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div className="bg-white section-padding" style={{ minHeight: '100vh', position: 'relative' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <h1 className="text-hero shop-hero-title" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-black)', textShadow: '6px 6px 0 var(--color-lime)' }}>BUY <br/>THIS <span className="text-lime" style={{textShadow: '6px 6px 0 var(--color-black)'}}>S***</span></h1>
        
        <div className="grid-mobile-stack shop-product-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '6rem', alignItems: 'center', marginTop: '6rem' }}>
          <div className="shop-product-image-wrap" style={{ position: 'relative' }}>
            <img className="shop-product-image" src="/five_cans.png" alt="Clear Gut Five Flavour Pack" />
          </div>
          
          <div>
            <div style={{ display: 'inline-block', backgroundColor: 'var(--color-black)', color: 'var(--color-white)', padding: '0.5rem 1.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '2rem', transform: 'rotate(2deg)' }}>TOP SELLER</div>
            <h2 className="text-subtitle" style={{ marginBottom: '1rem', lineHeight: 1 }}>VARIETY PACK <br/><span className="text-lime" style={{textShadow: '2px 2px 0 var(--color-black)'}}>5-CANS</span></h2>
            
            <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--color-lime)', marginBottom: '2rem' }}>
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <span style={{ color: 'var(--color-black)', marginLeft: '1rem', fontFamily: 'var(--font-heading)' }}>666 REVIEWS</span>
            </div>
            
            <p className="text-body" style={{ fontWeight: 'bold', marginBottom: '3rem', opacity: 0.9 }}>
              CAN'T DECIDE HOW TO MURDER YOUR THIRST AND BLOAT? GET THEM ALL. 5 CANS OF PURE, HIGHLY-CARBONATED, REFRESHING PREBIOTIC POWER.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><Skull className="text-lime" size={28} style={{filter: 'drop-shadow(1px 1px 0 var(--color-black))'}} /> 12G TOTAL FIBRE TO DESTROY WEAK DIGESTION</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><Droplet className="text-lime" size={28} style={{filter: 'drop-shadow(1px 1px 0 var(--color-black))'}} /> NO FAKE SUGAR GARBAGE</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><Skull className="text-lime" size={28} style={{filter: 'drop-shadow(1px 1px 0 var(--color-black))'}} /> 100% VEGAN FRIENDLY</li>
            </ul>
            
            <div className="flex-mobile-col" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <Link to="/signup" className="btn btn-primary" style={{ flex: 1, padding: '2rem', fontSize: '2rem', textAlign: 'center' }}>ADD TO CART</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
