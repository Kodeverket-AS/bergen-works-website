import { z, ZodError } from 'zod';

// Initial values for form, used in component
export const contactFormSchemaInitial: ContactFormSchema = {
  name: '',
  email: '',
  phone: '',
  message: '',
  category: 'annet',
  consent: false,
};

// Initial values for form subject, used in component
export const contactFormSchemaSubjects = ['åpen plass', 'fast plass', 'kontor', 'annet'] as const;

// Validation rules
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Du må skrive inn navnet ditt' })
    .max(69, { message: "Navnet ditt er for langt :'>" }),
  email: z
    .string()
    .email({ message: 'Sjekk at e-post addresse er skrevet riktig' })
    .max(69, { message: 'E-posten din er for alt langt!' }),
  phone: z.string().regex(/^\+?[0-9]{8,10}$/, { message: 'Sjekk at telefon nummeret er skrevet riktig' }),
  message: z
    .string()
    .min(10, { message: 'Du må skrive et mer utfyllende spørsmål' })
    .max(1000, { message: 'Du trenger ikke å skrive en så lang novelle!' }),
  category: z.preprocess(
    (val) => (typeof val === 'string' && val.trim() === '' ? undefined : val),
    z.enum(contactFormSchemaSubjects).refine((val) => !!val, { message: 'Du må velge et alternativ' })
  ),
  consent: z
    .boolean()
    .refine((val) => val === true, { message: 'Du må gi ditt samtykke for at vi lagrer din kontakt informasjon' }),
});

// Infer type of form
export type ContactFormSchema = z.infer<typeof contactFormSchema>;

// Create read-only array of form keys and types
export const contactFormKeys = z.enum(contactFormSchema.keyof().options);
export type ContactFormKeys = z.infer<typeof contactFormKeys>;
export type ContactFormSchemaSubjects = (typeof contactFormSchemaSubjects)[number];

// Validdation helper function
export function contactFormValidateField(field: ContactFormKeys, value: string | boolean) {
  try {
    const validated = contactFormSchema.shape[field].parse(value);
    return { field, validated };
  } catch (error) {
    if (error instanceof ZodError) {
      return { field, error: error.errors[0].message };
    }
  }
}
