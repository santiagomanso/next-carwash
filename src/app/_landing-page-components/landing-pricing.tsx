import { Button } from '@/components/ui/button';

export default function LandingPricing() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32' id='pricing'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-gray-100 border-[1px] dark:border-gray-700/70 px-3 py-1 text-sm dark:bg-gray-800'>
              Pricing
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Affordable Packages
            </h2>
            <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              Choose the package that best fits your needs and budget.
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12'>
          <div className='bg-gradient-to-br p-6 from-white to-gray-100 via-white shadow-gray-400 hover:shadow-gray-500 dark:shadow-gray-950 shadow-md hover:shadow-lg hover:dark:shadow-slate-700 border-[1px] dark:border-gray-700/80  transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-slate-950 rounded-md'>
            <h3 className='text-2xl font-bold'>Basic</h3>
            <p className='text-4xl font-bold my-4'>$9.99</p>
            <p className='text-gray-500 dark:text-gray-400 mb-4'>
              Includes a basic exterior wash and dry.
            </p>
            <ul className='space-y-2 text-sm text-gray-500 dark:text-gray-400'>
              <li>
                <CheckIcon className='mr-2 inline-block h-4 w-4 text-green-500' />
                Exterior Wash
              </li>
              <li>
                <CheckIcon className='mr-2 inline-block h-4 w-4 text-green-500' />
                Tire Dressing
              </li>
              <li>
                <XIcon className='mr-2 inline-block h-4 w-4 text-red-500' />
                Interior Vacuum
              </li>
              <li>
                <XIcon className='mr-2 inline-block h-4 w-4 text-red-500' />
                Window Cleaning
              </li>
            </ul>
            <Button className='w-full mt-4'>Book Now</Button>
          </div>
          <div className='bg-gradient-to-br p-6 from-white to-gray-100 via-white shadow-gray-400 hover:shadow-gray-500 dark:shadow-gray-950 shadow-md hover:shadow-lg hover:dark:shadow-slate-700 border-[1px] dark:border-gray-700/80  transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-slate-950 rounded-md'>
            <h3 className='text-2xl font-bold'>Premium</h3>
            <p className='text-4xl font-bold my-4'>$19.99</p>
            <p className='text-gray-500 dark:text-gray-400 mb-4'>
              Includes a full-service wash and detailing.
            </p>
            <ul className='space-y-2 text-sm text-gray-500 dark:text-gray-400'>
              <li>
                <CheckIcon className='mr-2 inline-block h-4 w-4 text-green-500' />
                Exterior Wash
              </li>
              <li>
                <CheckIcon className='mr-2 inline-block h-4 w-4 text-green-500' />
                Tire Dressing
              </li>
              <li>
                <CheckIcon className='mr-2 inline-block h-4 w-4 text-green-500' />
                Interior Vacuum
              </li>
              <li>
                <CheckIcon className='mr-2 inline-block h-4 w-4 text-green-500' />
                Window Cleaning
              </li>
            </ul>
            <Button className='w-full mt-4'>Book Now</Button>
          </div>
          <div className='bg-gradient-to-br p-6 from-white to-gray-100 via-white shadow-gray-400 hover:shadow-gray-500 dark:shadow-gray-950 shadow-md hover:shadow-lg hover:dark:shadow-slate-700 border-[1px] dark:border-gray-700/80  transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-slate-950 rounded-md'>
            <h3 className='text-2xl font-bold'>Deluxe</h3>
            <p className='text-4xl font-bold my-4'>$29.99</p>
            <p className='text-gray-500 dark:text-gray-400 mb-4'>
              Includes a full-service wash, detailing, and waxing.
            </p>
            <ul className='space-y-2 text-sm text-gray-500 dark:text-gray-400'>
              <li>
                <CheckIcon className='mr-2 inline-block h-4 w-4 text-green-500' />
                Exterior Wash
              </li>
              <li>
                <CheckIcon className='mr-2 inline-block h-4 w-4 text-green-500' />
                Tire Dressing
              </li>
              <li>
                <CheckIcon className='mr-2 inline-block h-4 w-4 text-green-500' />
                Interior Vacuum
              </li>
              <li>
                <CheckIcon className='mr-2 inline-block h-4 w-4 text-green-500' />
                Window Cleaning
              </li>
              <li>
                <CheckIcon className='mr-2 inline-block h-4 w-4 text-green-500' />
                Waxing
              </li>
            </ul>
            <Button className='w-full mt-4'>Book Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function XIcon(props: { className: string }) {
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
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
    </svg>
  );
}

function CheckIcon(props: { className: string }) {
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
      <path d='M20 6 9 17l-5-5' />
    </svg>
  );
}
