"server-only";

import { BrevoSchema } from "@/types/brevo.types";

export class BrevoClient {
  private config;

  constructor({ login, key, apikey }: { [key: string]: string }) {
    this.config = {
      server: "smtp-relay.brevo.com",
      port: 587,
      login,
      key,
      apikey,
    };
  }

  /**
   * This function sends a transactional email trough brevo to the designated postmaster for project
   * @param contact contact details of {@link ContactFormSchema|user} making the request
   * @param subject type of request, can either be general or specific subject
   * @param templateID id of the template this email should use. Check for {@link https://app.brevo.com/templates/listing|available} templates
   * @returns
   */
  async sendEmail(contact: BrevoSchema, templateID: number) {
    const request = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": this.config.apikey,
        "X-Sib-Sandbox": "drop",
      },
      body: JSON.stringify({
        sender: { email: "kunkristoffer@gmail.com", name: "kun kristoffer" },
        to: [{ email: "post@teamwork.no", name: "postmaster teamwork" }],
        subject: `${contact.fullName} ønsker mer informasjon om: ${contact.subject}`,
        templateID,
        params: { ...contact },
      }),
    };

    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", request);
      if (response.ok) {
        return { code: 200, message: "Successfully sent email to staff" };
      } else {
        return { code: response.status, message: response.statusText };
      }
    } catch (err) {
      return { code: 500, message: err };
    }
  }
}
