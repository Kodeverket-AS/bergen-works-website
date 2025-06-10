"use server";

import { ContactFormSchema } from "@/schema/brevo";
import { contactFormSignup } from "./action";

export async function handleContactFormSignup(formData: ContactFormSchema) {
  const res = await contactFormSignup(formData);
  return JSON.parse(JSON.stringify(res));
}
