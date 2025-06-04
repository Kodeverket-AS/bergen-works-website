"use server";

import { contactFormSignup } from "./action";
import { BrevoSchema } from "@/types/brevo.types";

export async function handleContactFormSignup(formData: BrevoSchema) {
  const res = await contactFormSignup(formData);
  return JSON.parse(JSON.stringify(res));
}
