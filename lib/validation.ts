import { z } from "zod";
export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters.")
    .max(100, "Please use 100 characters or fewer."),
  email: z.email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters.")
    .max(2000, "Please use 2,000 characters or fewer."),
});
export type Enquiry = z.infer<typeof enquirySchema>;
