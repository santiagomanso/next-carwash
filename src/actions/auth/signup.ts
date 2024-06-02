'use server';
import * as z from 'zod';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { RegisterSchema } from '@/app/auth/_schemas';

export const signup = async (values: z.infer<typeof RegisterSchema>) => {
  const validated = RegisterSchema.safeParse(values);
  if (!validated.success) {
    return {
      error: true,
      message: 'Invalid email or password.',
    };
  }

  const { email, password } = validated.data;

  const existingUser = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (existingUser) {
    return {
      error: true,
      message: 'Email already in use.',
    };
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  if (!newUser) {
    return {
      error: true,
      message: 'Error creating user.',
    };
  } else {
    return {
      error: false,
      message: 'Verification email sent succesfully.',
    };
  }
};
