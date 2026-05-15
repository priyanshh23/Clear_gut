const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const namePattern = /^[A-Za-z\s]{1,10}$/;
const phonePattern = /^[0-9]{10}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const createApiError = (statusCode, message) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

export const sendOrderEmail = async ({ name = '', email = '', whatsapp = '' }, env = process.env) => {
  const apiKey = env.RESEND_API_KEY;
  const toEmail = env.RESEND_TO_EMAIL;
  const fromEmail = env.RESEND_FROM_EMAIL || 'Clear Gut Orders <onboarding@resend.dev>';
  const fallbackFromEmail = env.RESEND_FALLBACK_FROM_EMAIL || 'Clear Gut Orders <onboarding@resend.dev>';

  if (!apiKey || !toEmail) {
    throw createApiError(500, 'Email service is not configured yet.');
  }

  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim();
  const trimmedWhatsapp = String(whatsapp).trim();

  if (!namePattern.test(trimmedName) || !emailPattern.test(trimmedEmail) || !phonePattern.test(trimmedWhatsapp)) {
    throw createApiError(400, 'Please enter valid customer details.');
  }

  const submittedAt = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const resendHeaders = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    'User-Agent': 'clear-gut-order-form/1.0',
  };

  const buildAdminEmailPayload = (senderEmail) => ({
    from: senderEmail,
    to: [toEmail],
    reply_to: trimmedEmail,
    subject: `New Clear Gut order inquiry from ${trimmedName}`,
    html: `
      <h1>New order inquiry</h1>
      <p>A customer submitted the Clear Gut order form.</p>
      <table cellpadding="8" cellspacing="0" border="0">
        <tr>
          <td><strong>Name</strong></td>
          <td>${escapeHtml(trimmedName)}</td>
        </tr>
        <tr>
          <td><strong>Email</strong></td>
          <td>${escapeHtml(trimmedEmail)}</td>
        </tr>
        <tr>
          <td><strong>WhatsApp</strong></td>
          <td>${escapeHtml(trimmedWhatsapp)}</td>
        </tr>
        <tr>
          <td><strong>Submitted</strong></td>
          <td>${escapeHtml(submittedAt)}</td>
        </tr>
      </table>
    `,
    text: [
      'New order inquiry',
      'A customer submitted the Clear Gut order form.',
      `Name: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
      `WhatsApp: ${trimmedWhatsapp}`,
      `Submitted: ${submittedAt}`,
    ].join('\n'),
  });

  let adminEmailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: resendHeaders,
    body: JSON.stringify(buildAdminEmailPayload(fromEmail)),
  });

  if (!adminEmailResponse.ok) {
    const error = await adminEmailResponse.json().catch(() => ({}));
    const canUseFallback = fromEmail !== fallbackFromEmail && /domain is not verified/i.test(error.message || '');

    if (canUseFallback) {
      adminEmailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: resendHeaders,
        body: JSON.stringify(buildAdminEmailPayload(fallbackFromEmail)),
      });

      if (adminEmailResponse.ok) {
        return {
          message: 'Customer details sent.',
          confirmationSent: false,
          confirmationMessage: 'Customer confirmation will work after cleargut.in is verified in Resend.',
        };
      }
    }

    throw createApiError(502, error.message || 'Unable to send customer details right now.');
  }

  const customerEmailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: resendHeaders,
    body: JSON.stringify({
      from: fromEmail,
      to: [trimmedEmail],
      reply_to: toEmail,
      subject: 'We received your Clear Gut inquiry',
      html: `
        <h1>Thanks, ${escapeHtml(trimmedName)}.</h1>
        <p>We received your Clear Gut inquiry and will contact you soon.</p>
        <p><strong>WhatsApp:</strong> ${escapeHtml(trimmedWhatsapp)}</p>
        <p>Clear Gut Orders</p>
      `,
      text: [
        `Thanks, ${trimmedName}.`,
        'We received your Clear Gut inquiry and will contact you soon.',
        `WhatsApp: ${trimmedWhatsapp}`,
        'Clear Gut Orders',
      ].join('\n'),
    }),
  });

  if (!customerEmailResponse.ok) {
    const error = await customerEmailResponse.json().catch(() => ({}));
    return {
      message: 'Customer details sent.',
      confirmationSent: false,
      confirmationMessage: error.message || 'Customer confirmation email could not be sent.',
    };
  }

  return { message: 'Customer details sent.', confirmationSent: true };
};
