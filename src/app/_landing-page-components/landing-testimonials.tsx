export default function LandingTestimonials() {
  return (
    <section
      className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'
      id='testimonials'
    >
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block border-[1px] dark:border-slate-700/70 rounded-md bg-white px-3 py-1 text-sm dark:bg-gray-900'>
              Testimonials
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              What Our Customers Say
            </h2>
            <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              Dive into reviews from certified shop owners and read their
              anecdotes of how our software help them with their buisnesses.
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
          <article className='bg-gradient-to-br p-4 rounded-lg from-white to-gray-300 via-white shadow-gray-400 hover:shadow-gray-500 dark:shadow-gray-950 shadow-md hover:shadow-lg hover:dark:shadow-slate-950 border-[1px] dark:border-gray-700/80  transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-slate-950'>
            <div className='flex items-center gap-4'>
              <div className='rounded-full w-12 h-12 bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
                <UserIcon className='h-6 w-6 text-gray-500 dark:text-gray-400' />
              </div>
              <div>
                <p className='text-sm font-medium'>John Doe</p>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  123 Main St, Anytown USA
                </p>
              </div>
            </div>
            <p className='mt-4 text-sm text-gray-800 dark:text-gray-200'>
              &quot;The car wash service was excellent. The staff was friendly
              and the results were amazing. I highly recommend this place!&quot;
            </p>
          </article>
          <article className='bg-gradient-to-tr p-4 rounded-lg from-white to-gray-300 via-white shadow-gray-400 hover:shadow-gray-500 dark:shadow-gray-950 shadow-md hover:shadow-lg hover:dark:shadow-slate-950 border-[1px] dark:border-gray-700/80  transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-slate-950'>
            <div className='flex items-center gap-4'>
              <div className='rounded-full w-12 h-12 bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
                <UserIcon className='h-6 w-6 text-gray-500 dark:text-gray-400' />
              </div>
              <div>
                <p className='text-sm font-medium'>Jane Smith</p>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  123 Main St, Anytown USA
                </p>
              </div>
            </div>
            <p className='mt-4 text-sm text-gray-800 dark:text-gray-200'>
              &quot;I&apos;ve been coming to this car wash for years and they
              never disappoint. The attention to detail is outstanding.&quot;
            </p>
          </article>
          <article className='bg-gradient-to-tr p-4 rounded-lg from-white to-gray-300 via-white shadow-gray-400 hover:shadow-gray-500 dark:shadow-gray-950 shadow-md hover:shadow-lg hover:dark:shadow-slate-950 border-[1px] dark:border-gray-700/80  transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-slate-950'>
            <div className='flex items-center gap-4'>
              <div className='rounded-full w-12 h-12 bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
                <UserIcon className='h-6 w-6 text-gray-500 dark:text-gray-400' />
              </div>
              <div>
                <p className='text-sm font-medium'>John Doe</p>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  123 Main St, Anytown USA
                </p>
              </div>
            </div>
            <p className='mt-4 text-sm text-gray-800 dark:text-gray-200'>
              &quot;The car wash service was excellent. The staff was friendly
              and the results were amazing. I highly recommend this place!&quot;
            </p>
          </article>
          <article className='bg-gradient-to-tr p-4 rounded-lg from-white to-gray-300 via-white shadow-gray-400 hover:shadow-gray-500 dark:shadow-gray-950 shadow-md hover:shadow-lg hover:dark:shadow-slate-950 border-[1px] dark:border-gray-700/80  transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-slate-950'>
            <div className='flex items-center gap-4'>
              <div className='rounded-full w-12 h-12 bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
                <UserIcon className='h-6 w-6 text-gray-500 dark:text-gray-400' />
              </div>
              <div>
                <p className='text-sm font-medium'>Jane Smith</p>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  123 Main St, Anytown USA
                </p>
              </div>
            </div>
            <p className='mt-4 text-sm text-gray-800 dark:text-gray-200'>
              &quot;I&apos;ve been coming to this car wash for years and they
              never disappoint. The attention to detail is outstanding.&quot;
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function UserIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  );
}
