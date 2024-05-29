'use server';
import * as z from 'zod';

import { signIn } from '@/auth';
import { LoginSchema } from '@/app/auth/_schemas';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  console.log('LOGIN SERVER ACTION!!!!');
  const validated = LoginSchema.safeParse(values);

  if (!validated.success) {
    return {
      error: true,
      message: 'Invalid email or password.',
    };
  }

  const { email, password } = validated.data;
  console.log('SERVER ACTION LOGIN');
  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    }).then((response) => {
      return {
        error: false,
        message: 'Welcome back!',
      };
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            error: true,
            message: 'Invalid email or password.',
          };
        default:
          return {
            error: true,
            message: 'Error logging in.',
          };
      }
    }
    throw error;
  }

  return {
    error: false,
    message: 'Welcome back!',
  };
};
