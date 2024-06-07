export default function LandingFeatures() {
  return (
    <section
      className='w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800'
      id='features'
    >
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block bg-gray-100 border-slate-400 border-[1px] dark:border-slate-700/70 rounded-md  px-3 py-1 text-sm dark:bg-gray-900'>
              Features
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Streamline Your Car Wash Operations
            </h2>
            <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              Unlock the power of our car wash SaaS platform and transform your
              business.
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <div className='flex flex-col items-start justify-between rounded-lg bg-gradient-to-br p-6 from-white to-gray-100 via-white shadow-gray-400 hover:shadow-gray-500 dark:shadow-gray-950 shadow-md hover:shadow-lg hover:dark:shadow-slate-950 border-[1px] dark:border-gray-700/80  transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-slate-950'>
            <div className='flex items-center justify-center border-[1px] dark:border-gray-800/80 rounded-full bg-gray-100 p-4 dark:bg-gray-900'>
              <MenuIcon className='h-6 w-6 text-gray-500 dark:text-gray-100' />
            </div>
            <div className='mt-4 space-y-2'>
              <h3 className='text-lg font-bold'>Manage Washes</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Effortlessly manage all your car wash operations from a single
                platform.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start justify-between rounded-lg bg-gradient-to-tr p-6 from-white to-gray-100 via-white shadow-gray-400 hover:shadow-gray-500 dark:shadow-gray-950 shadow-md hover:shadow-lg hover:dark:shadow-slate-950 border-[1px] dark:border-gray-700/80  transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-slate-950'>
            <div className='flex items-center justify-center border-[1px] dark:border-gray-800/80 rounded-full bg-gray-100 p-4 dark:bg-gray-900'>
              <BadgeAlertIcon className='h-6 w-6 text-gray-500 dark:text-gray-100' />
            </div>
            <div className='mt-4 space-y-2'>
              <h3 className='text-lg font-bold'>Notify Customers</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Keep your customers informed with automated notifications and
                updates.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start justify-between rounded-lg bg-gradient-to-br p-6 from-white to-gray-100 via-white shadow-gray-400 hover:shadow-gray-500 dark:shadow-gray-950 shadow-md hover:shadow-lg hover:dark:shadow-slate-950 border-[1px] dark:border-gray-700/80  transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-slate-950'>
            <div className='flex items-center justify-center border-[1px] dark:border-gray-800/80 rounded-full bg-gray-100 p-4 dark:bg-gray-900'>
              <CalendarIcon className='h-6 w-6 text-gray-500 dark:text-gray-100' />
            </div>
            <div className='mt-4 space-y-2'>
              <h3 className='text-lg font-bold'>Schedule</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Easily manage and schedule appointments for your customers.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start justify-between rounded-lg bg-gradient-to-tr p-6 from-white to-gray-100 via-white shadow-gray-400 hover:shadow-gray-500 dark:shadow-gray-950 shadow-md hover:shadow-lg hover:dark:shadow-slate-950 border-[1px] dark:border-gray-700/80  transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-slate-950'>
            <div className='flex items-center justify-center border-[1px] dark:border-gray-800/80 rounded-full bg-gray-100 p-4 dark:bg-gray-900'>
              <CoinsIcon className='h-6 w-6 text-gray-500 dark:text-gray-100' />
            </div>
            <div className='mt-4 space-y-2'>
              <h3 className='text-lg font-bold'>Track Payments</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Monitor and track all of your customer&apos;s payments with an
                intuitive user interface.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start justify-between rounded-lg bg-gradient-to-br p-6 from-white to-gray-100 via-white shadow-gray-400 hover:shadow-gray-500 dark:shadow-gray-950 shadow-md hover:shadow-lg hover:dark:shadow-slate-950 border-[1px] dark:border-gray-700/80  transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-slate-950'>
            <div className='flex items-center justify-center border-[1px] dark:border-gray-800/80 rounded-full bg-gray-100 p-4 dark:bg-gray-900'>
              <InfoIcon className='h-6 w-6 text-gray-500 dark:text-gray-100' />
            </div>
            <div className='mt-4 space-y-2'>
              <h3 className='text-lg font-bold'>Detailed Analytics</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Gain valuable insights into your business with our comprehensive
                analytics.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start justify-between rounded-lg bg-gradient-to-tr p-6 from-white to-gray-100 via-white shadow-gray-400 hover:shadow-gray-500 dark:shadow-gray-950 shadow-md hover:shadow-lg hover:dark:shadow-slate-950 border-[1px] dark:border-gray-700/80  transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-slate-950'>
            <div className='flex items-center justify-center border-[1px] dark:border-gray-800/80 rounded-full bg-gray-100 p-4 dark:bg-gray-900'>
              <WorkflowIcon className='h-6 w-6 text-gray-500 dark:text-gray-100' />
            </div>
            <div className='mt-4 space-y-2'>
              <h3 className='text-lg font-bold'>Workflows</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Streamline your operations with our powerful automation
                features.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start justify-between rounded-lg bg-gradient-to-br p-6 from-white to-gray-100 via-white shadow-gray-400 hover:shadow-gray-500 dark:shadow-gray-950 shadow-md hover:shadow-lg hover:dark:shadow-slate-950 border-[1px] dark:border-gray-700/80  transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-slate-950'>
            <div className='flex items-center justify-center border-[1px] dark:border-gray-800/80 rounded-full bg-gray-100 p-4 dark:bg-gray-900'>
              <TruckIcon className='h-6 w-6 text-gray-500 dark:text-gray-100' />
            </div>
            <div className='mt-4 space-y-2'>
              <h3 className='text-lg font-bold'>Multi-Vehicle</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Manage different types of vehicles like cars, bikes, and trucks
                with our comprehensive platform.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start justify-between rounded-lg bg-gradient-to-tr p-6 from-white to-gray-100 via-white shadow-gray-400 hover:shadow-gray-500 dark:shadow-gray-950 shadow-md hover:shadow-lg hover:dark:shadow-slate-950 border-[1px] dark:border-gray-700/80  transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-slate-950'>
            <div className='flex items-center justify-center border-[1px] dark:border-gray-800/80 rounded-full bg-gray-100 p-4 dark:bg-gray-900'>
              <AwardIcon className='h-6 w-6 text-gray-500 dark:text-gray-100' />
            </div>
            <div className='mt-4 space-y-2'>
              <h3 className='text-lg font-bold'>Customer Rewards</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Reward your loyal customers with special offers and incentives
                for their continued business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardIcon(props: { className: string }) {
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
      <path d='m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526' />
      <circle cx='12' cy='8' r='6' />
    </svg>
  );
}

function BadgeAlertIcon(props: { className: string }) {
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
      <path d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z' />
      <line x1='12' x2='12' y1='8' y2='12' />
      <line x1='12' x2='12.01' y1='16' y2='16' />
    </svg>
  );
}

function CalendarIcon(props: { className: string }) {
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
      <path d='M8 2v4' />
      <path d='M16 2v4' />
      <rect width='18' height='18' x='3' y='4' rx='2' />
      <path d='M3 10h18' />
    </svg>
  );
}

function CoinsIcon(props: { className: string }) {
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
      <circle cx='8' cy='8' r='6' />
      <path d='M18.09 10.37A6 6 0 1 1 10.34 18' />
      <path d='M7 6h1v4' />
      <path d='m16.71 13.88.7.71-2.82 2.82' />
    </svg>
  );
}

function InfoIcon(props: { className: string }) {
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
      <circle cx='12' cy='12' r='10' />
      <path d='M12 16v-4' />
      <path d='M12 8h.01' />
    </svg>
  );
}

function MenuIcon(props: { className: string }) {
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
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}

function TruckIcon(props: { className: string }) {
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
      <path d='M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2' />
      <path d='M15 18H9' />
      <path d='M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14' />
      <circle cx='17' cy='18' r='2' />
      <circle cx='7' cy='18' r='2' />
    </svg>
  );
}

function WorkflowIcon(props: { className: string }) {
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
      <rect width='8' height='8' x='3' y='3' rx='2' />
      <path d='M7 11v4a2 2 0 0 0 2 2h4' />
      <rect width='8' height='8' x='13' y='13' rx='2' />
    </svg>
  );
}
