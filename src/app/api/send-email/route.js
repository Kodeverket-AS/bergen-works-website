import { NextResponse } from "next/server";

export async function POST(request) {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

  if (!BREVO_API_KEY) {
    return NextResponse.json(
      { success: false, error: "API key not configured" },
      { status: 500 }
    );
  }

  if (!CONTACT_EMAIL) {
    return NextResponse.json(
      { success: false, error: "Contact email not configured" },
      { status: 500 }
    );
  }

  try {
    const { name, email, message, checked } = await request.json();


    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    const selectedCategories = Object.entries(checked || {})
      .filter(([, value]) => value)
      .map(([key]) => key);

    const emailData = {
      sender: {
        name: "Bergen Works",
        email: "noreply@bergenworks.no",
      },
      to: [{ email: CONTACT_EMAIL }],
      replyTo: { email: email, name: name },
      subject: "Ny henvendelse fra kontaktskjema",
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #253A1A;">Ny henvendelse fra kontaktskjema</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Navn:</strong> ${name}</p>
            <p><strong>E-post:</strong> ${email}</p>
            <p><strong>Melding:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
            ${
              selectedCategories.length > 0
                ? `<p><strong>Valgte kategorier:</strong></p><ul>${selectedCategories
                    .map((cat) => `<li>${cat}</li>`)
                    .join("")}</ul>`
                : ""
            }
          </div>
          <p style="color: #666; font-size: 12px;">
            Denne e-posten ble sendt fra kontaktskjemaet på Bergen Works nettside.
          </p>
        </div>
      `,
    };

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { success: false, error: "Failed to send email", details: errorData },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Unexpected error while sending email",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
