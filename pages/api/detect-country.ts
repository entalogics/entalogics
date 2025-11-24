import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" })
    return
  }

  try {
    // Get client IP from request headers
    const forwarded = req.headers["x-forwarded-for"]
    const ip = forwarded
      ? (Array.isArray(forwarded) ? forwarded[0] : forwarded.split(",")[0].trim())
      : req.headers["x-real-ip"] || req.socket.remoteAddress || ""

    // For localhost, use empty string to let API detect automatically
    const ipToUse = ip === "::1" || ip === "127.0.0.1" || ip === "::ffff:127.0.0.1" ? "" : ip

    // Map country code to country name
    const countryCodeToName: { [key: string]: string } = {
      PK: "Pakistan",
      US: "United States",
      GB: "United Kingdom",
      CA: "Canada",
      AU: "Australia",
      DE: "Germany",
      FR: "France",
      AE: "United Arab Emirates",
      IN: "India",
      SG: "Singapore",
      MY: "Malaysia",
      SA: "Saudi Arabia",
      QA: "Qatar",
      KW: "Kuwait",
      BH: "Bahrain",
      OM: "Oman",
      JO: "Jordan",
      EG: "Egypt",
      ZA: "South Africa",
      NZ: "New Zealand",
      IE: "Ireland",
      NL: "Netherlands",
      BE: "Belgium",
      CH: "Switzerland",
      AT: "Austria",
      SE: "Sweden",
      NO: "Norway",
      DK: "Denmark",
      FI: "Finland",
      PL: "Poland",
      IT: "Italy",
      ES: "Spain",
      PT: "Portugal",
      GR: "Greece",
      TR: "Turkey",
      JP: "Japan",
      KR: "South Korea",
      CN: "China",
      HK: "Hong Kong",
      TW: "Taiwan",
      TH: "Thailand",
      ID: "Indonesia",
      PH: "Philippines",
      VN: "Vietnam",
      BR: "Brazil",
      MX: "Mexico",
      AR: "Argentina",
      CL: "Chile",
      CO: "Colombia",
    }

    // Try ipapi.co first
    try {
      const apiUrl = ipToUse ? `https://ipapi.co/${ipToUse}/json/` : "https://ipapi.co/json/"
      const response = await fetch(apiUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      })

      if (response.ok) {
        const data = await response.json()
        if (!data.error) {
          const countryCode = data.country_code || data.country
          const countryName = countryCodeToName[countryCode] || data.country_name || "Other"
          return res.status(200).json({ country: countryName, ip })
        }
      }
    } catch (error) {
      // Try fallback API
    }

    // Fallback: Try ip-api.com
    try {
      const fallbackUrl = ipToUse
        ? `http://ip-api.com/json/${ipToUse}?fields=country,countryCode`
        : "http://ip-api.com/json/?fields=country,countryCode"
      const fallbackResponse = await fetch(fallbackUrl)

      if (fallbackResponse.ok) {
        const fallbackData = await fallbackResponse.json()
        if (fallbackData.status !== "fail") {
          const countryCode = fallbackData.countryCode
          const countryName =
            countryCodeToName[countryCode] || fallbackData.country || "Other"
          return res.status(200).json({ country: countryName, ip })
        }
      }
    } catch (error) {
      // Both APIs failed
    }

    // Default fallback
    res.status(200).json({ country: "Other", ip: ipToUse || "Not detected" })
  } catch (error) {
    console.error("Error detecting country:", error)
    res.status(200).json({ country: "Other", ip: "Error" })
  }
}

