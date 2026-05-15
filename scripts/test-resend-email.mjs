import { readFileSync } from 'node:fs';

const envFile = readFileSync(new URL('../.env.local', import.meta.url), 'utf8');

for (const line of envFile.split('\n')) {
  const trimmedLine = line.trim();
  if (!trimmedLine || trimmedLine.startsWith('#')) continue;

  const separatorIndex = trimmedLine.indexOf('=');
  if (separatorIndex === -1) continue;

  const key = trimmedLine.slice(0, separatorIndex);
  const value = trimmedLine.slice(separatorIndex + 1);
  process.env[key] = process.env[key] || value;
}

const apiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.RESEND_TO_EMAIL;
const fromEmail = process.env.RESEND_FROM_EMAIL || 'Clear Gut <onboarding@resend.dev>';

if (!apiKey || !toEmail) {
  console.error('Missing RESEND_API_KEY or RESEND_TO_EMAIL in .env.local');
  process.exit(1);
}

const testCustomer = {
  name: 'Test Customer',
  email: 'test@example.com',
  whatsapp: '+1 234 567 8900',
};

const resendHeaders = {
  Authorization: `Bearer ${apiKey}`,
  'Content-Type': 'application/json',
  'User-Agent': 'clear-gut-order-form/1.0',
};

const response = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: resendHeaders,
  body: JSON.stringify({
    from: fromEmail,
    to: [toEmail],
    reply_to: testCustomer.email,
    subject: `Clear Gut order form test from ${testCustomer.name}`,
    html: `
      <h1>Clear Gut form test</h1>
      <p>If you received this, Resend is connected correctly.</p>
      <ul>
        <li><strong>Name:</strong> ${testCustomer.name}</li>
        <li><strong>Email:</strong> ${testCustomer.email}</li>
        <li><strong>WhatsApp:</strong> ${testCustomer.whatsapp}</li>
      </ul>
    `,
    text: [
      'Clear Gut form test',
      'If you received this, Resend is connected correctly.',
      `Name: ${testCustomer.name}`,
      `Email: ${testCustomer.email}`,
      `WhatsApp: ${testCustomer.whatsapp}`,
    ].join('\n'),
  }),
});

const data = await response.json().catch(() => ({}));

if (!response.ok) {
  console.error(data.message || 'Unable to send test email.');
  process.exit(1);
}

console.log(`Test email sent to ${toEmail}. Resend id: ${data.id}`);

const confirmationResponse = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: resendHeaders,
  body: JSON.stringify({
    from: fromEmail,
    to: [testCustomer.email],
    reply_to: toEmail,
    subject: 'We received your Clear Gut inquiry',
    html: `
      <h1>Thanks, ${testCustomer.name}.</h1>
      <p>We received your Clear Gut inquiry and will contact you soon.</p>
      <p><strong>WhatsApp:</strong> ${testCustomer.whatsapp}</p>
      <p>Clear Gut Orders</p>
    `,
    text: [
      `Thanks, ${testCustomer.name}.`,
      'We received your Clear Gut inquiry and will contact you soon.',
      `WhatsApp: ${testCustomer.whatsapp}`,
      'Clear Gut Orders',
    ].join('\n'),
  }),
});

const confirmationData = await confirmationResponse.json().catch(() => ({}));

if (!confirmationResponse.ok) {
  console.warn(confirmationData.message || 'Unable to send confirmation test email.');
  console.warn('Admin email works, but customer confirmations need a verified Resend domain for non-owner recipients.');
  process.exit(0);
}

console.log(`Confirmation test email sent to ${testCustomer.email}. Resend id: ${confirmationData.id}`);
