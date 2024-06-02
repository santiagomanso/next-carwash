import React from 'react';

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <main className='h-screen bg-gradient-to-br from-slate-900 justify-center items-center to-neutral-950 flex flex-col gap-7'>
      <div className='bg-slate-800 rounded-md flex flex-col gap-7 border-[1px] border-slate-700 shadow-md shadow-neutral-800'>
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
