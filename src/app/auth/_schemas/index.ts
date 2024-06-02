import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string({ message: 'Password is required' })
    .min(1, 'Password is required'),
});

export const RegisterSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string({ message: 'Password is required' })
      .min(1, 'Password is required'),
    confirmPassword: z
      .string({ message: 'Password is required' })
      .min(1, 'Password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });
