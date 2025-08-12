"server-only";

import { BrevoClient } from "@/lib/brevo/client";

export const config = {
  login: process.env.BREVO_SMTP_LOGIN as string,
  key: process.env.BREVO_SMPT_KEY as string,
  apikey: process.env.BREVO_API_KEY as string,
};

export const brevo = new BrevoClient(config);
