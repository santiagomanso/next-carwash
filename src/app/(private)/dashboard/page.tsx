import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';

const DashBoard = async () => {
  const session = await auth();

  return (
    <div className='flex flex-col justify-center items-center h-screen gap-5'>
      {JSON.stringify(session)}
      <form
        action={async () => {
          'use server';
          await signOut({
            redirectTo: '/auth/login',
            redirect: true,
          });
        }}
      >
        <Button type='submit'>Sign out</Button>
      </form>
    </div>
  );
};

export default DashBoard;
