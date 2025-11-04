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
    firstName,
    lastName,
    company,
    email,
    phone,
    website,
    country,
    description,
    lookingFor,
    budget,
    budgetCustom,
    timeline,
    projectType,
  } = req.body

  // Combine firstName and lastName into name for display
  const name = `${firstName} ${lastName}`.trim()

  // Server-side validation
  if (
    !firstName ||
    !lastName ||
    !email ||
    !country ||
    !description ||
    !lookingFor ||
    !lookingFor.length ||
    !budget ||
    !timeline ||
    !projectType
  ) {
    res.status(400).json({ error: "Missing required fields" })
    return
  }
  if (budget === "Custom budget" && !budgetCustom) {
    res.status(400).json({ error: "Custom budget amount is required" })
    return
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    res.status(400).json({ error: "Invalid email" })
    return
  }

  const budgetDisplay = budget === "Custom budget" ? budgetCustom : budget

  // Format lookingFor as a comma-separated string
  const lookingForDisplay = Array.isArray(lookingFor) ? lookingFor.join(", ") : lookingFor

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
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>
            <p><strong>Services Needed:</strong> ${lookingForDisplay}</p>
            <p><strong>Budget:</strong> ${budgetDisplay}</p>
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
        projectType,
        timeline,
        lookingForDisplay,
        budgetDisplay,
        description,
      }),
    })

    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Email sending failed" })
  }
}
