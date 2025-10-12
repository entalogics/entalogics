interface EmailTemplateProps {
    name: string
    email: string
    company: string
    country: string
    phone: string
    website: string
    projectType: string
    timeline: string
    lookingForDisplay: string
    budgetDisplay: string
    description: string
  }
  
  export function createConfirmationEmailHtml({
    name,
    email,
    company,
    country,
    phone,
    website,
    projectType,
    timeline,
    lookingForDisplay,
    budgetDisplay,
    description,
  }: EmailTemplateProps): string {
    return `
      <!DOCTYPE html>
<html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quote Request Confirmation</title>
      </head>
<body style="font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;padding:20px;background-color:#f8fafc">
<div style="background:white;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,0.1);overflow:hidden">
<div style="background:linear-gradient(135deg,#3b82f6 0%,#8b5cf6 100%);color:white;padding:20px;text-align:center">
<h1 style="margin:0;font-size:24px;font-weight:700">✅ Request Received!</h1>
<p style="margin:10px 0 0 0;opacity:0.9;font-size:14px">Thank you for choosing Entalogics</p>
          </div>
<div style="padding:20px">
<div style="font-size:18px;font-weight:600;color:#1f2937;margin-bottom:15px">Hello ${name}!</div>
<div style="font-size:14px;color:#4b5563;margin-bottom:20px;line-height:1.6">Thank you for reaching out to us! We've successfully received your project quote request and our team is excited to learn more about your vision.</div>
<div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:6px;padding:15px;margin:15px 0">
<div style="font-size:16px;font-weight:600;color:#1f2937;margin-bottom:15px">📋 Your Project Details</div>
<div style="margin-bottom:8px;padding:4px 0;border-bottom:1px solid #e5e7eb"><strong>Name:</strong> ${name}</div>
<div style="margin-bottom:8px;padding:4px 0;border-bottom:1px solid #e5e7eb"><strong>Email:</strong> ${email}</div>
<div style="margin-bottom:8px;padding:4px 0;border-bottom:1px solid #e5e7eb"><strong>Company:</strong> ${company || "Not provided"}</div>
<div style="margin-bottom:8px;padding:4px 0;border-bottom:1px solid #e5e7eb"><strong>Country:</strong> ${country}</div>
<div style="margin-bottom:8px;padding:4px 0;border-bottom:1px solid #e5e7eb"><strong>Phone:</strong> ${phone || "Not provided"}</div>
<div style="margin-bottom:8px;padding:4px 0;border-bottom:1px solid #e5e7eb"><strong>Website:</strong> ${website || "Not provided"}</div>
<div style="margin-bottom:8px;padding:4px 0;border-bottom:1px solid #e5e7eb"><strong>Project Type:</strong> ${projectType}</div>
<div style="margin-bottom:8px;padding:4px 0;border-bottom:1px solid #e5e7eb"><strong>Timeline:</strong> ${timeline}</div>
<div style="margin-bottom:8px;padding:4px 0;border-bottom:1px solid #e5e7eb"><strong>Services:</strong> ${lookingForDisplay}</div>
<div style="margin-bottom:8px;padding:4px 0;border-bottom:1px solid #e5e7eb"><strong>Budget:</strong> ${budgetDisplay}</div>
<div style="margin-bottom:0;padding:4px 0"><strong>Description:</strong><br><div style="background:white;border:1px solid #d1d5db;border-radius:4px;padding:10px;margin-top:5px;font-style:italic;color:#6b7280">${description.replace(/\n/g, "<br/>").replace(/<br><br>/g, "<br/>")}</div></div>
            </div>
<div style="background:linear-gradient(135deg,#ecfdf5 0%,#f0fdf4 100%);border:1px solid #bbf7d0;border-radius:6px;padding:15px;margin:15px 0">
<h3 style="color:#065f46;margin:0 0 10px 0;font-size:16px">🚀 What Happens Next?</h3>
<ul style="margin:0;padding-left:20px;color:#047857;font-size:14px">
<li style="margin-bottom:5px">Our team will review your project requirements within 24 hours</li>
<li style="margin-bottom:5px">We'll prepare a detailed proposal tailored to your needs</li>
<li style="margin-bottom:5px">You'll receive a comprehensive quote with timeline and deliverables</li>
                <li>We'll schedule a free consultation call to discuss your project</li>
              </ul>
            </div>
          </div>
<div style="background-color:#1a1a1a;padding:15px;text-align:center">
<div style="font-size:18px;font-weight:bold;margin-bottom:8px"><span style="color:#3b82f6">EntaLogics</span> <span style="color:#a0a0a0">| IT Solutions</span></div>
<p style="color:#a0a0a0;font-size:12px;line-height:1.4;margin-bottom:15px">We Build Custom Chromium Browsers, Extensions, AI/ML • Web & Apps | Custom Software & SaaS Product Development</p>
<div style="border-top:1px solid #444;margin:15px 0"></div>
<div style="color:#a0a0a0;font-size:12px;margin-top:10px">
<p style="margin:0 0 5px 0;font-weight:600">Need Immediate Assistance?</p>
<p style="margin:0">Contact us at <strong>entalogics.com</strong> or WhatsApp: <strong>+92 320 7385471</strong></p>
            </div>
          </div>
        </div>
      </body>
</html>`
  }
  