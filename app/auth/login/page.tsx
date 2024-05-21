/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8Y82fPe407W
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Assets } from '@/assets';
import LoginForm from './_components/LoginForm';

export default function Component() {
  return (
    <div className='w-[500px] rounded border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900'>
      <div className='space-y-4'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>Welcome Back</h1>
          <p className='text-gray-500 dark:text-gray-400'>
            Sign in to your account
          </p>
        </div>
        <LoginForm />
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-white px-2 text-gray-500 dark:bg-gray-900 dark:text-gray-400'>
              Or continue with
            </span>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <Button className='w-full flex gap-1 items-center' variant='outline'>
            <Assets.icons.Google width={20} height={20} />
            Google
          </Button>
          <Button className='w-full flex gap-1 items-center' variant='outline'>
            <Assets.icons.Apple width={20} height={20} />
            Apple
          </Button>
        </div>
        <div className='text-center text-sm text-gray-500 dark:text-gray-400'>
          Don&apos;t have an account?{' '}
          <Link className='font-medium underline' href='register'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
