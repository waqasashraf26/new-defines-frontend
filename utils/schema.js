import * as z from "zod";

export const ContactUsSchema = z.object({
  firstName: z.string().min(1, {
    message: "Please Enter Your Name",
  }),
  lastName: z.string().min(1, {
    message: "Please Enter Your Name",
  }),
  email: z.string().email().min(1, {
    message: "Please Enter Your Email",
  }),
  phone: z
    .string()
    .min(10, { message: "Must be a valid mobile number" })
    .max(13, { message: "Must be a valid mobile number" }),
  message: z.string().min(1, {
    message: "Please Write Your Query",
  }),
});
