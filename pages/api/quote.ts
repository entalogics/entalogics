import type { NextApiRequest, NextApiResponse } from "next"
import { Resend } from "resend"
import { createConfirmationEmailHtml } from "@/lib/email-template" // Import the new email template function

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).end()
    return
  }

  const {
    fullName,
    company,
    email,
    phone,
    website,
    country,
    description,
    consent,
  } = req.body

  // Use fullName as name for display
  const name = fullName?.trim() || ""

  // Server-side validation
  if (
    !fullName ||
    !email ||
    !country ||
    !description ||
    !consent
  ) {
    res.status(400).json({ error: "Missing required fields" })
    return
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    res.status(400).json({ error: "Invalid email" })
    return
  }

  try {
    // 1. Send to Admin (You)
    await resend.emails.send({
      from: "quote@entalogics.com", // Must be a verified sender domain!
      to: "entalogics@gmail.com",
      subject: `🚀 New Quote from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">🚀 New Quote Request</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Website:</strong> ${website || "Not provided"}</p>
          </div>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Project Details</h3>
            <p><strong>Message:</strong> See description below</p>
          </div>
          
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Project Description</h3>
            <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b;">
              ${description.replace(/\n/g, "<br/>").replace(/<br\/><br\/>/g, "<br/>")}
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #ecfdf5; border-radius: 8px;">
            <p style="margin: 0; color: #065f46; font-weight: 600;">⏰ Please respond within 24 hours</p>
          </div>
        </div>
      `,
    })

    // 2. Confirmation to User
    await resend.emails.send({
      from: "info@entalogics.com",
      to: email,
      subject: "✅ Thank you for your quote request - Entalogics",
      html: createConfirmationEmailHtml({
        // Use the new email template function
        name,
        email,
        company: company || "Not provided",
        country,
        phone: phone || "Not provided",
        website: website || "Not provided",
        description: description || "No description provided",
      }),
    })

    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Email sending failed" })
  }
}
