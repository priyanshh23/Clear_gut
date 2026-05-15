import { sendOrderEmail } from './send-order-core.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const result = await sendOrderEmail(req.body || {});
    return res.status(200).json(result);
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message || 'Unable to send customer details right now.',
    });
  }
}
