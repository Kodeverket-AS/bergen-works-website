"use server";

import { brevo } from "@/lib/brevo/app";
import { contactFormSchema, ContactFormSchema } from "@/schema/brevo";

export async function contactFormSignup(formData: ContactFormSchema) {
  // Validate form bindings and values
  const validate = contactFormSchema.safeParse(formData);
  if (!validate.success) {
    return { code: 400, message: validate.error };
  }

  // Notify staff on new response trough e-mail
  const response = await brevo.sendEmail(formData, 2);
  return response;
}
