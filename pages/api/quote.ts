import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const ADMIN_EMAIL = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: ADMIN_EMAIL,
    pass: EMAIL_PASS,
  },
});

function validate(body: any) {
  if (!body.name || !body.email || !body.description) return false;
  if (!/^\S+@\S+\.\S+$/.test(body.email)) return false;
  return true;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, email, phone, description, budget, contactTime } = req.body;
  if (!validate(req.body)) return res.status(400).json({ error: 'Missing or invalid fields' });

  // Admin email content
  const adminSubject = `🚀 New Quote Request from ${name}`;
  const adminHtml = `
    <h2>New Quote Request</h2>
    <ul>
      <li><b>Name:</b> ${name}</li>
      <li><b>Email:</b> ${email}</li>
      <li><b>Phone:</b> ${phone || '-'}</li>
      <li><b>Budget:</b> ${budget || '-'}</li>
      <li><b>Preferred Time to Contact:</b> ${contactTime || '-'}</li>
      <li><b>Description:</b><br/>${description.replace(/\n/g, '<br/>')}</li>
    </ul>
  `;

  // User confirmation email content
  const userSubject = `✅ We Received Your Quote Request`;
  const userHtml = `
    <h2>Thank you, ${name}!</h2>
    <p>We received your quote request and will get in touch soon.</p>
    <h3>Your Submission:</h3>
    <ul>
      <li><b>Name:</b> ${name}</li>
      <li><b>Email:</b> ${email}</li>
      <li><b>Phone:</b> ${phone || '-'}</li>
      <li><b>Budget:</b> ${budget || '-'}</li>
      <li><b>Preferred Time to Contact:</b> ${contactTime || '-'}</li>
      <li><b>Description:</b><br/>${description.replace(/\n/g, '<br/>')}</li>
    </ul>
    <p>We'll review your request and reach out as soon as possible.</p>
  `;

  try {
    // Send admin email
    await transporter.sendMail({
      from: `Quote Request <${ADMIN_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: adminSubject,
      html: adminHtml,
    });
    // Send user confirmation
    await transporter.sendMail({
      from: `Entalogics <${ADMIN_EMAIL}>`,
      to: email,
      subject: userSubject,
      html: userHtml,
    });
    return res.status(200).json({ ok: true });
  } catch (err: any) {
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
} 