import { z } from 'zod';

export const BodySchema = z
  .object({
    type: z.enum(['post', 'event']),
    cause: z.enum(['create', 'update', 'deleted']),
    slug: z.string().min(1).optional(),
    secret: z.string().min(1),
  })
  .superRefine((val, ctx) => {
    if (val.cause === 'update' && !val.slug) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['slug'], message: 'slug is required when cause is "update"' });
    }
    if (val.cause !== 'update' && val.slug) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['slug'],
        message: 'slug must not be provided unless cause is "update"',
      });
    }
  });

// Infer type of form
export type BodySchemaType = z.infer<typeof BodySchema>;
