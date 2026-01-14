/// <reference types="@cloudflare/workers-types" />

export interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  TO_EMAIL: string;
  FROM_EMAIL?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          status: 204,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        });
      }

      if (request.method === 'POST') {
        return handleContact(request, env);
      }

      return new Response('Method not allowed', { status: 405 });
    }

    // Serve static assets by default
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;

async function handleContact(request: Request, env: Env): Promise<Response> {
  try {
    const payload = await request.json();

    const name = (payload?.name ?? '').toString().trim();
    const email = (payload?.email ?? '').toString().trim();
    const interest = (payload?.interest ?? '').toString().trim();
    const message = (payload?.message ?? '').toString().trim();

    if (!name || !email || !message) {
      return json({ error: 'Missing required fields.' }, 400);
    }
    const toEmail = env.TO_EMAIL || 'irfanwz@gmail.com';

    const htmlBody = `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Interest:</strong> ${escapeHtml(interest || 'N/A')}</p>
      <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    `;

    const textBody = `New Contact Request
Name: ${name}
Email: ${email}
Interest: ${interest || 'N/A'}
Message:
${message}`;

    const mailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: toEmail }],
          },
        ],
        from: {
          // MailChannels requires a domain you control as the sender
          email: env.FROM_EMAIL || 'no-reply@customsoftware.irfanwz.workers.dev',
          name: 'Custom Software Contact',
        },
        reply_to: {
          email,
          name,
        },
        subject: `New inquiry: ${interest || 'General'}`,
        content: [
          { type: 'text/plain', value: textBody },
          { type: 'text/html', value: htmlBody },
        ],
      }),
    });

    if (!mailResponse.ok) {
      const errorText = await mailResponse.text();
      return json({ error: 'Failed to send email', details: errorText }, 502);
    }

    return json({ ok: true });
  } catch (err) {
    return json({ error: 'Unexpected error', details: (err as Error).message }, 500);
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
