import { useState } from 'react';
import { Skull } from 'lucide-react';

const SignUp = () => {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    setStatus('sending');
    setMessage('');

    const formData = new FormData(form);
    const customerDetails = {
      name: formData.get('name'),
      email: formData.get('email'),
      whatsapp: formData.get('whatsapp'),
    };

    try {
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 15000);
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customerDetails),
        signal: controller.signal,
      });
      window.clearTimeout(timeoutId);
      const data = await response.json().catch(() => ({
        message: 'Email API did not return JSON. Restart npm run dev and try again.',
      }));

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Try again.');
      }

      form.reset();
      setStatus('success');
      setMessage(
        data.confirmationSent
          ? 'DETAILS SENT. CONFIRMATION EMAIL SENT.'
          : data.confirmationMessage || 'DETAILS SENT. WE WILL CONTACT YOU SOON.'
      );
    } catch (error) {
      setStatus('error');
      setMessage(error.name === 'AbortError' ? 'EMAIL SERVICE IS NOT RESPONDING. TRY AGAIN.' : error.message);
    }
  };

  return (
    <div className="bg-white section-padding" style={{ minHeight: '100vh', position: 'relative' }}>
      
      <div className="container signup-container" style={{ maxWidth: '600px', position: 'relative', zIndex: 10 }}>
        <h1 className="text-title signup-title" style={{ textAlign: 'center', marginBottom: '1.6rem', color: 'var(--color-black)', textShadow: '4px 4px 0 var(--color-lime)', lineHeight: 0.9 }}>
          JOIN <br/><span className="text-lime" style={{textShadow: '4px 4px 0 var(--color-black)'}}>THE CULT</span>
        </h1>

        <p className="text-body signup-copy" style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '3.2rem' }}>
          ENTER YOUR DETAILS TO COMPLETE YOUR PURCHASE. WE DON'T SPAM. WE JUST SELL FIBRE.
        </p>

        <form id="order-form" onSubmit={handleSubmit} className="brutal-border signup-form" style={{ padding: '2.4rem', backgroundColor: 'var(--color-white)', display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label className="signup-label" htmlFor="name" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>FULL NAME <span aria-hidden="true" style={{ color: 'var(--color-blood)' }}>*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              required
              pattern="[A-Za-z\s]+"
              title="Name can contain letters and spaces only."
              className="brutal-border signup-input"
              style={{ padding: '0.8rem', fontSize: '1.5rem', fontFamily: 'var(--font-body)', outline: 'none' }}
              placeholder=""
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s]/g, '');
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label className="signup-label" htmlFor="email" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>EMAIL ID <span aria-hidden="true" style={{ color: 'var(--color-blood)' }}>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              required
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              title="Enter a valid email address."
              className="brutal-border signup-input"
              style={{ padding: '0.8rem', fontSize: '1.5rem', fontFamily: 'var(--font-body)', outline: 'none' }}
              placeholder=""
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label className="signup-label" htmlFor="whatsapp" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>WHATSAPP NO. <span aria-hidden="true" style={{ color: 'var(--color-blood)' }}>*</span></label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              required
              inputMode="numeric"
              pattern="[0-9]{10}"
              minLength="10"
              maxLength="10"
              title="Enter exactly 10 digits."
              className="brutal-border signup-input"
              style={{ padding: '0.8rem', fontSize: '1.5rem', fontFamily: 'var(--font-body)', outline: 'none' }}
              placeholder=""
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '').slice(0, 10);
              }}
            />
          </div>

          {message && (
            <p
              className="signup-message"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                color: status === 'error' ? 'var(--color-blood)' : 'var(--color-black)',
              }}
            >
              {message}
            </p>
          )}

          <button type="submit" disabled={status === 'sending'} className="btn btn-primary signup-submit" style={{ padding: '1.6rem', fontSize: '2rem', marginTop: '0.8rem', width: '100%', opacity: status === 'sending' ? 0.7 : 1 }}>
            {status === 'sending' ? 'SENDING...' : 'SUBMIT'}
          </button>
        </form>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.4rem' }}>
          <Skull size={48} className="text-black" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
