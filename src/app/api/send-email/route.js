import { NextResponse } from "next/server";
import SibApiV3Sdk from "sib-api-v3-sdk";

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

export async function POST(request) {
  if (!process.env.BREVO_API_KEY) {
    return NextResponse.json(
      { success: false, error: "API key not configured" },
      { status: 500 }
    );
  }

  if (!process.env.CONTACT_EMAIL) {
    return NextResponse.json(
      { success: false, error: "Contact email not configured" },
      { status: 500 }
    );
  }

  try {
    const { name, email, message, checked } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    const selectedCategories = Object.entries(checked)
      .filter(([_, value]) => value)
      .map(([key]) => key);

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.subject = "Ny henvendelse fra kontaktskjema";
    sendSmtpEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #253A1A;">Ny henvendelse fra kontaktskjema</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Navn:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>E-post:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Melding:</strong></p>
          <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
          ${selectedCategories.length > 0 ? `
            <p style="margin: 10px 0;"><strong>Valgte kategorier:</strong></p>
            <ul style="margin: 10px 0;">
              ${selectedCategories.map(category => `<li>${category}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
        <p style="color: #666; font-size: 12px;">
          Denne e-posten ble sendt fra kontaktskjemaet på Bergen Works nettside.
        </p>
      </div>
    `;
    sendSmtpEmail.sender = {
      name: "Bergen Works",
      email: "noreply@bergenworks.no",
    };
    sendSmtpEmail.to = [{ email: process.env.CONTACT_EMAIL }];
    sendSmtpEmail.replyTo = { email: email, name: name };

    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to send email",
        details: error.message 
      },
      { status: 500 }
    );
  }
}
