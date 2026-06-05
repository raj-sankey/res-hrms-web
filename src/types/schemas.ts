import { z } from "zod";

// Login Form Schema
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email format." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export type LoginInput = z.infer<typeof loginSchema>;

// Profile Update Schema
export const profileSchema = z.object({
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number." })
    .optional()
    .or(z.literal("")),
  department: z.string().min(1, { message: "Department is required." }),
  designation: z.string().min(1, { message: "Designation is required." }),
});

export type ProfileInput = z.infer<typeof profileSchema>;
