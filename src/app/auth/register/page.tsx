import Link from 'next/link';

import RegisterForm from './_components/RegisterForm';

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
        <RegisterForm />
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-white px-2 text-gray-500 dark:bg-gray-900 dark:text-gray-400'>
              Or
            </span>
          </div>
        </div>

        <div className='text-center text-sm text-gray-500 dark:text-gray-400'>
          Already have an account?{' '}
          <Link className='font-medium underline' href='/auth/login'>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
