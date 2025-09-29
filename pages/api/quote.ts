import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const { name, email, phone, country, description, lookingFor, budget, budgetCustom } = req.body;

  // Server-side validation
  if (!name || !email || !country || !description || !lookingFor || !lookingFor.length || !budget) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }
  if (budget === 'Custom budget' && !budgetCustom) {
    res.status(400).json({ error: 'Custom budget amount is required' });
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    res.status(400).json({ error: 'Invalid email' });
    return;
  }

  const budgetDisplay = budget === 'Custom budget' ? budgetCustom : budget;

  // Format lookingFor as a comma-separated string
  const lookingForDisplay = Array.isArray(lookingFor) ? lookingFor.join(', ') : lookingFor;

  try {
    // 1. Send to Admin (You)
    await resend.emails.send({
      from: 'quote@entalogics.com', // Must be a verified sender domain!
      to: 'entalogics@gmail.com',
      subject: `🚀 New Quote from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <ul>
          <li><b>Name:</b> ${name}</li>
          <li><b>Email:</b> ${email}</li>
          <li><b>Country:</b> ${country}</li>
          <li><b>Phone:</b> ${phone || '-'}</li>
          <li><b>What Are You Looking For:</b> ${lookingForDisplay}</li>
          <li><b>Budget:</b> ${budgetDisplay}</li>
          <li><b>Description:</b><br/>${description.replace(/\n/g, '<br/>')}</li>
        </ul>
      `,
    });

    // 2. Confirmation to User
    await resend.emails.send({
      from: 'info@entalogics.com',
      to: email,
      subject: '✅ We received your quote request',
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We received your quote request and will get in touch soon.</p>
        <h3>Your Submission:</h3>
        <ul>
          <li><b>Name:</b> ${name}</li>
          <li><b>Email:</b> ${email}</li>
          <li><b>Country:</b> ${country}</li>
          <li><b>Phone:</b> ${phone || '-'}</li>
          <li><b>What Are You Looking For:</b> ${lookingForDisplay}</li>
          <li><b>Budget:</b> ${budgetDisplay}</li>
          <li><b>Description:</b><br/>${description.replace(/\n/g, '<br/>')}</li>
        </ul>
        <p>We'll review your request and reach out as soon as possible.</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Email sending failed' });
  }
} 