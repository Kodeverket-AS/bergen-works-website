"use server";

import { brevo } from "@/lib/brevo/app";
import { BrevoSchema } from "@/types/brevo.types";

export async function contactFormSignup(formData: BrevoSchema) {
  // Validate form bindings and values
  /* const validate = contactFormSchema.safeParse(content);
  if (!validate.success) {
    return { code: 400, message: validate.error };
  } */

  // Notify staff on new response trough e-mail
  const response = await brevo.sendEmail(formData, 1);
  return response;
}
