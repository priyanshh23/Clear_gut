import { Skull, Zap, Flame, Crosshair } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white" style={{ minHeight: '100vh', position: 'relative' }}>

      {/* Hero Section */}
      <section className="hero-bg section-padding" style={{
        display: 'flex',
        alignItems: 'flex-start',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url("/hero_bg.png")',
        backgroundSize: 'cover',
        backgroundColor: '#F3EEEB'
      }}>
        <div style={{ width: '100%' }}>
          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ maxWidth: '520px' }}>
              <h1 className="text-hero" style={{ color: 'var(--color-black)', textShadow: '4px 4px 0 var(--color-lime)', marginBottom: '1.6rem', lineHeight: 0.9 }}>
                MURDER <br />YOUR <span className="text-lime" style={{ textShadow: '4px 4px 0 var(--color-black)' }}>BLOAT.</span>
              </h1>
<<<<<<< HEAD
            <div className="flex-mobile-col" style={{ display: 'flex', gap: '1.6rem' }}>
              <Link to="/shop" className="btn" style={{ width: '100%', padding: '1.6rem 3.2rem', fontSize: '2rem', backgroundColor: 'transparent', color: 'var(--color-black)', border: '4px solid var(--color-lime)' }}>
=======
            <p className="text-body" style={{ marginBottom: '3rem', fontWeight: 'bold', textShadow: '0 2px 10px rgba(255,255,255,0.8)' }}>
              YOUR GUT CALLED. IT'S PISSED OFF. ANNIHILATE BAD DIGESTION WITH PURE, UNADULTERATED PREBIOTIC FIBRE IN A CRISP, REFRESHING CARBONATED DRINK. NO WEIRD CHEMICALS. NO BS.
            </p>
            <div className="flex-mobile-col" style={{ display: 'flex', gap: '2rem' }}>
              <Link to="/signup#order-form" className="btn btn-primary" style={{ padding: '2rem 4rem', fontSize: '2rem' }}>
>>>>>>> 6b4073e (done)
                BUY NOW
              </Link>
            </div>
          </div>

          {/* Mobile-only product showcase */}
          <div className="mobile-hero-img">
            <img className="mobile-hero-image" src="/mobile_hero.png" alt="Clear Gut Can and Box" />
          </div>
        </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-content">
          <span>DEATH TO PLASTIC DIGESTION</span>
          <span>ANNIHILATE BAD BACTERIA</span>
          <span>BRUTALIZE YOUR BLOAT</span>
          <span>FEED YOUR INNER DEMONS (THE GOOD ONES)</span>
          <span>ZERO SUGAR ADDED. ZERO BS.</span>
          <span>DEATH TO PLASTIC DIGESTION</span>
          <span>ANNIHILATE BAD BACTERIA</span>
          <span>BRUTALIZE YOUR BLOAT</span>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="bg-white section-padding" style={{ borderTop: '4px solid var(--color-black)' }}>
        <div className="container">
          <h2 className="text-title" style={{ marginBottom: '3.2rem', textAlign: 'center', textShadow: '4px 4px 0 var(--color-lime)' }}>WHY <span className="text-lime" style={{ textShadow: '4px 4px 0 var(--color-black)' }}>CLEAR GUT?</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.6rem' }}>
            {[
              { icon: <Crosshair size={64} />, title: 'TARGET DIGESTION', desc: 'A BRUTAL ASSAULT ON SLUGGISH BOWELS.' },
              { icon: <Flame size={64} />, title: 'PREBIOTIC FIRE', desc: 'FUEL FOR THE GOOD BACTERIA TRYING TO SURVIVE IN YOUR GUT.' },
              { icon: <Skull size={64} />, title: 'NO FAKE SUGAR', desc: 'WE DON\'T POISON YOU WITH ARTIFICIAL SWEETENERS.' },
              { icon: <Zap size={64} />, title: 'REFRESHINGLY\nCARBONATED', desc: 'A CRISP, SPARKLING DRINK THAT\'S 100% VEGAN WITH 0% BS.' },
            ].map((benefit, i) => (
              <div key={i} className="brutal-border" style={{ padding: '2.4rem', backgroundColor: 'var(--color-white)', transition: 'all 0.6s', position: 'relative', overflow: 'hidden', textAlign: 'center' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-black)'; e.currentTarget.style.color = 'var(--color-white)'; e.currentTarget.querySelector('svg').style.color = 'var(--color-lime)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-white)'; e.currentTarget.style.color = 'var(--color-black)'; e.currentTarget.querySelector('svg').style.color = 'var(--color-black)'; }}>
                <div className="text-black" style={{ marginBottom: '1.6rem', transition: 'color 0.2s', display: 'flex', justifyContent: 'center' }}>{benefit.icon}</div>
                <h3 className="text-lg" style={{ marginBottom: '0.8rem', lineHeight: 1, textAlign: 'center', whiteSpace: 'pre-line', fontSize: benefit.title.includes('\n') ? '1.8rem' : undefined }}>{benefit.title}</h3>
                <p style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavors Section */}
      <section className="bg-black section-padding" style={{ color: 'var(--color-white)', borderTop: '4px solid var(--color-lime)' }}>
        <div className="container">
          <div className="flex-mobile-col" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4.8rem', gap: '1.6rem' }}>
            <div>
              <h2 className="text-title" style={{ lineHeight: 0.9, textShadow: '4px 4px 0 var(--color-silver)' }}>CHOOSE YOUR <br /><span className="text-lime" style={{ textShadow: '4px 4px 0 var(--color-white)' }}>POISON</span></h2>
            </div>
            <Link to="/shop" className="btn" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-black)', border: '4px solid var(--color-white)' }}>VIEW ALL</Link>
          </div>

          <div style={{ display: 'grid', gap: '1.6rem' }}>
            {[
              { name: 'KIWI LIME', color: '#BBC34A' },
              { name: 'BLUE RASPBERRY', color: '#4A90E2' },
              { name: 'WATERMELON', color: '#FF6B6B' },
              { name: 'MANGO', color: '#F5A623' },
              { name: 'BLACKCURRANT', color: '#9013FE' }
            ].map((flavor, i) => (
              <Link to="/shop" key={i} className="brutal-border flavor-card" style={{ padding: '2.4rem', backgroundColor: 'var(--color-white)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.1s', border: `4px solid ${flavor.color}`, color: flavor.color }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = flavor.color; e.currentTarget.style.color = 'var(--color-white)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-white)'; e.currentTarget.style.color = flavor.color; }}>
                <h3 className="text-subtitle flavor-title" style={{ margin: 0, textShadow: '2px 2px 0 var(--color-black)' }}>{flavor.name}</h3>
                <Zap size={48} style={{ filter: 'drop-shadow(2px 2px 0 var(--color-black))' }} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
