// types.ts
import { z } from "zod";

export const UserSchema = z
  .object({
    id: z.number().or(z.undefined()),
    firstName: z
      .string()
      .min(2, { message: "Firstname should be at least 2 characters long." })
      .default(""),
    lastName: z
      .string()
      .min(2, { message: "Lastname should be at least 2 characters long." }),
    email: z.string().email(),
    confirmEmail: z.string().email(),
    phoneNumber: z.string(),
    dob: z.date(),
    gender: z.enum(["Male", "Female"]),
  })
  .required();

export type UserType = z.infer<typeof UserSchema>;
