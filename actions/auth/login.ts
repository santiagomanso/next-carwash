'use server';
import { LoginSchema } from '@/app/auth/_schemas';
import * as z from 'zod';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validated = LoginSchema.safeParse(values);

  if (!validated.success) {
    return {
      error: true,
      message: 'Invalid email or password.',
    };
  }

  return {
    error: false,
    message: 'Welcome back!',
  };
};
