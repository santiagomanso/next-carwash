/**
 * v0 by Vercel.
 * @see https://v0.dev/t/syZ6bZeODNW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Assets } from '@/assets';

export default function LandingPageHero() {
  return (
    <section className='w-full pt-12 md:pt-24 lg:pt-32 dark:bg-gray-950'>
      <div className=' space-y-10 xl:space-y-16 '>
        <section className='w-full py-12 md:py-24 lg:py-32' id='home'>
          <div className='container'>
            <Carousel className='w-full'>
              <CarouselContent>
                <CarouselItem>
                  <div className='grid gap-4 px-4 md:grid-cols-2 md:gap-16'>
                    <div>
                      <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                        Notifications
                      </div>
                      <h2 className='mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                        Notify upon successfull wash
                      </h2>
                      <p className='mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                        Keep your customers informed about the status of their
                        car wash with automated notifications.
                      </p>
                    </div>
                    <Image
                      src={Assets.images.EmployeeLaptop}
                      alt='notification'
                      className='w-[500px] aspect-video object-cover rounded-md'
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className='grid gap-4 px-4 md:grid-cols-2 md:gap-16'>
                    <div>
                      <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                        Multi-vehicles
                      </div>
                      <h2 className='mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                        Wash cars/bikes/trucks
                      </h2>
                      <p className='mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                        Our state-of-the-art car wash equipment and experienced
                        staff can handle any vehicle, from compact cars to large
                        trucks.
                      </p>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                      <Image
                        src={Assets.images.Car}
                        width='170'
                        height='170'
                        alt='Wash Cars'
                        className='mx-auto aspect-square overflow-hidden rounded-md object-cover'
                      />
                      <Image
                        src={Assets.images.Bike}
                        width='170'
                        height='170'
                        alt='Wash Bikes'
                        className='mx-auto aspect-square overflow-hidden rounded-md object-cover'
                      />
                      <Image
                        src={Assets.images.Truck}
                        width='170'
                        height='170'
                        alt='Wash Trucks'
                        className='mx-auto aspect-square overflow-hidden rounded-md object-cover'
                      />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className='grid gap-4 px-4 md:grid-cols-2 md:gap-16'>
                    <div>
                      <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                        Before/After Results
                      </div>
                      <h2 className='mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                        Before/after results
                      </h2>
                      <p className='mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                        See the amazing transformation of your vehicle with our
                        before and after photos.
                      </p>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                      <img
                        src='/placeholder.svg'
                        width='270'
                        height='170'
                        alt='Before'
                        className='mx-auto aspect-[16/10] overflow-hidden rounded-xl object-cover'
                      />
                      <img
                        src='/placeholder.svg'
                        width='270'
                        height='170'
                        alt='After'
                        className='mx-auto aspect-[16/10] overflow-hidden rounded-xl object-cover'
                      />
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section
          className='bg-gray-100 dark:bg-gray-900  w-full py-12 md:py-24 lg:py-32'
          id='features'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='inline-block rounded-lg bg-white px-3 py-1 text-sm dark:bg-gray-950'>
                Convenience
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Convenient Car Wash Options
              </h2>
              <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                We offer a variety of car wash packages to fit your needs, from
                a quick exterior wash to a full-service detailing.
              </p>
              <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
                <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 '>
                  <h3 className='text-lg font-bold'>Exterior Wash</h3>
                  <p className='mt-2 text-gray-500 dark:text-gray-400'>
                    A quick and affordable way to keep your car looking clean.
                  </p>
                  <div className='mt-4 flex items-center justify-between'>
                    <span className='text-2xl font-bold'>$9.99</span>
                    <Button>Book Now</Button>
                  </div>
                </div>
                <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 '>
                  <h3 className='text-lg font-bold'>Interior Cleaning</h3>
                  <p className='mt-2 text-gray-500 dark:text-gray-400'>
                    A thorough cleaning of your car&apos;s interior to keep it
                    looking its best.
                  </p>
                  <div className='mt-4 flex items-center justify-between'>
                    <span className='text-2xl font-bold'>$29.99</span>
                    <Button>Book Now</Button>
                  </div>
                </div>
                <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 '>
                  <h3 className='text-lg font-bold'>Full-Service Detailing</h3>
                  <p className='mt-2 text-gray-500 dark:text-gray-400'>
                    A complete cleaning and restoration of your car&apos;s
                    exterior and interior.
                  </p>
                  <div className='mt-4 flex items-center justify-between'>
                    <span className='text-2xl font-bold'>$99.99</span>
                    <Button>Book Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='  w-full py-12 md:py-24 lg:py-32' id='pricing'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm '>
                Quality
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Uncompromising Quality
              </h2>
              <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                We use only the highest-quality products and equipment to ensure
                your car looks its best.
              </p>
              <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
                <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 '>
                  <CheckIcon className='h-8 w-8 text-green-500' />
                  <h3 className='mt-4 text-lg font-bold'>
                    Professional-Grade Equipment
                  </h3>
                  <p className='mt-2 text-gray-500 dark:text-gray-400'>
                    Our state-of-the-art car wash equipment ensures a thorough
                    and efficient clean.
                  </p>
                </div>
                <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 '>
                  <CheckIcon className='h-8 w-8 text-green-500' />
                  <h3 className='mt-4 text-lg font-bold'>
                    Eco-Friendly Cleaning Products
                  </h3>
                  <p className='mt-2 text-gray-500 dark:text-gray-400'>
                    We use biodegradable and environmentally-friendly cleaning
                    products to protect your car and the environment.
                  </p>
                </div>
                <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 '>
                  <CheckIcon className='h-8 w-8 text-green-500' />
                  <h3 className='mt-4 text-lg font-bold'>
                    Experienced Technicians
                  </h3>
                  <p className='mt-2 text-gray-500 dark:text-gray-400'>
                    Our team of skilled technicians ensures your car is treated
                    with the utmost care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='bg-gray-100 dark:bg-gray-900  w-full py-12 md:py-24 lg:py-32'
          id='contact'
        >
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='inline-block rounded-lg bg-white dark:bg-gray-950 px-3 py-1 text-sm '>
                Convenience
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Convenient Booking and Payment
              </h2>
              <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                Book your car wash online or through our mobile app, and pay
                securely with your preferred payment method.
              </p>
              <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 '>
                  <CalendarDaysIcon className='h-8 w-8 text-gray-500 dark:text-gray-400' />
                  <h3 className='mt-4 text-lg font-bold'>Convenient Booking</h3>
                  <p className='mt-2 text-gray-500 dark:text-gray-400'>
                    Book your car wash online or through our mobile app in just
                    a few clicks.
                  </p>
                </div>
                <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 '>
                  <CreditCardIcon className='h-8 w-8 text-gray-500 dark:text-gray-400' />
                  <h3 className='mt-4 text-lg font-bold'>Secure Payment</h3>
                  <p className='mt-2 text-gray-500 dark:text-gray-400'>
                    Pay for your car wash securely with your preferred payment
                    method.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

function CalendarDaysIcon(props: { className: string }) {
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
      <path d='M8 14h.01' />
      <path d='M12 14h.01' />
      <path d='M16 14h.01' />
      <path d='M8 18h.01' />
      <path d='M12 18h.01' />
      <path d='M16 18h.01' />
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

function CreditCardIcon(props: { className: string }) {
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
      <rect width='20' height='14' x='2' y='5' rx='2' />
      <line x1='2' x2='22' y1='10' y2='10' />
    </svg>
  );
}
