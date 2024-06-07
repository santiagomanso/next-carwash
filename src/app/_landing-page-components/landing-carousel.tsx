import { Assets } from '@/assets';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function LandingCarousel() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-48' id='home'>
      <div className='container'>
        <Carousel className='w-full'>
          <CarouselContent>
            <CarouselItem>
              <div className='grid gap-4 px-4 md:grid-cols-2 md:gap-16'>
                <div>
                  <div className='inline-block rounded-lg bg-white border-slate-400 border-[1px] dark:border-gray-700/70 px-3 py-1 text-sm dark:bg-gray-800'>
                    Notifications
                  </div>
                  <h2 className='mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                    Notify upon successfull wash
                  </h2>
                  <p className='mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                    Keep your customers informed about the status of their car
                    wash with automated notifications.
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
                  <div className='inline-block rounded-lg bg-white border-slate-400 border-[1px] dark:border-gray-700/70 px-3 py-1 text-sm dark:bg-gray-800'>
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
                    className='mx-auto aspect-[12/17] w-full overflow-hidden rounded-md object-cover'
                  />
                  <Image
                    src={Assets.images.Bike}
                    width='170'
                    height='170'
                    alt='Wash Bikes'
                    className='mx-auto aspect-[12/17] w-full overflow-hidden rounded-md object-cover'
                  />
                  <Image
                    src={Assets.images.Truck}
                    width='170'
                    height='170'
                    alt='Wash Trucks'
                    className='mx-auto aspect-[12/17] w-full overflow-hidden rounded-md object-cover'
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='grid gap-4 px-4 md:grid-cols-2 md:gap-16'>
                <div>
                  <div className='inline-block rounded-lg bg-white border-slate-400 border-[1px] dark:border-gray-700/70 px-3 py-1 text-sm dark:bg-gray-800'>
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
                  <Image
                    src={Assets.images.Before}
                    width='340'
                    height='240'
                    alt='Before'
                    className='aspect-[14/10] overflow-hidden rounded-xl object-cover'
                  />
                  <Image
                    src={Assets.images.After}
                    width='340'
                    height='240'
                    alt='After'
                    className='aspect-[14/10] overflow-hidden rounded-xl object-cover'
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
  );
}
