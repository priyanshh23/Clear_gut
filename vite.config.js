import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { sendOrderEmail } from './api/send-order-core.js'

const readJsonBody = (req) =>
  new Promise((resolve, reject) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('error', reject);
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error('Invalid JSON body.'));
      }
    });
  });

const sendJson = (res, statusCode, payload) => {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
};

const localApiPlugin = () => ({
  name: 'clear-gut-local-api',
  configureServer(server) {
    server.middlewares.use('/api/send-order', async (req, res) => {
      if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        sendJson(res, 405, { message: 'Method not allowed' });
        return;
      }

      try {
        const body = await readJsonBody(req);
        const result = await sendOrderEmail(body);
        sendJson(res, 200, result);
      } catch (error) {
        sendJson(res, error.statusCode || 500, {
          message: error.message || 'Unable to send customer details right now.',
        });
      }
    });
  },
})

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return {
    plugins: [react(), localApiPlugin()],
  };
})
