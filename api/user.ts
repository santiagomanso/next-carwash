import { prisma } from '@/lib/prisma';

export const getUserByEmail = async (email: string) => {
  try {
    return prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (id: string) => {
  try {
    return prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
