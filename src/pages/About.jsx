import { Skull } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white section-padding" style={{ minHeight: '100vh', position: 'relative' }}>
      
      <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 10 }}>
        <h1 className="text-hero" style={{ textAlign: 'center', marginBottom: '3.2rem', color: 'var(--color-black)', textShadow: '6px 6px 0 var(--color-lime)', lineHeight: 0.9 }}>
          THE <br/><span className="text-lime" style={{textShadow: '6px 6px 0 var(--color-black)'}}>MANIFESTO</span>
        </h1>

        <div className="text-body" style={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', gap: '2.4rem', borderLeft: '8px solid var(--color-black)', paddingLeft: '1.6rem' }}>
          <p>
            MOST FIBRE DRINKS ARE WEAK. THEY TASTE LIKE CARDBOARD AND ARE MARKETED TO YOUR GRANDMA. <strong style={{ color: 'var(--color-lime)', textShadow: '1px 1px 0 var(--color-black)' }}>CLEAR GUT IS DIFFERENT.</strong>
          </p>
          <p>
            WE CREATED A BEVERAGE THAT MERCILESSLY MURDERS BAD BACTERIA AND BRUTALIZES BLOAT. WE PACK 12 GRAMS OF PURE, UNADULTERATED PREBIOTIC FIBRE INTO A SICK LOOKING CAN OF CRISP, REFRESHING, CARBONATED GOODNESS SO YOU DON'T HAVE TO FEEL EMBARRASSED ABOUT FIXING YOUR INSIDES.
          </p>
          
          <div className="brutal-border" style={{ padding: '1.6rem', backgroundColor: 'var(--color-white)', marginTop: '1.6rem', textAlign: 'center', transform: 'rotate(1deg)' }}>
            <Skull size={64} className="text-black" style={{ margin: '0 auto 1.6rem' }} />
            <h3 className="text-subtitle" style={{ marginBottom: '0.8rem', lineHeight: 1 }}>YOUR GUT CALLED. IT'S PISSED OFF.</h3>
            <p className="text-body" style={{ textTransform: 'uppercase' }}>FEED IT CLEAR GUT OR SUFFER THE CONSEQUENCES OF A WEAK DIGESTIVE TRACT.</p>
          </div>

          <h2 className="text-title" style={{ marginTop: '3.2rem', color: 'var(--color-black)' }}>RAW <span className="text-lime" style={{textShadow: '2px 2px 0 var(--color-black)'}}>POWER</span></h2>
          <p>
            WE USE CHICORY ROOT FIBRE AND ACACIA FIBRE. NO ARTIFICIAL CHEMICALS. NO LAB-GROWN BS. JUST RAW PLANT POWER DESIGNED TO ANNIHILATE SLUGGISH DIGESTION AND KEEP YOU RUNNING LIKE A WELL-OILED MACHINE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
