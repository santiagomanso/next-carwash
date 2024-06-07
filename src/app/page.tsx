import Navbar from '@/components/navbar';
import {
  LandingCarousel,
  LandingContact,
  LandingFeatures,
  LandingPricing,
  LandingTestimonials,
} from './_landing-page-components';

export default function Splash() {
  return (
    <>
      <Navbar />
      <section className='w-full pt-12 md:pt-24 lg:pt-32 bg-gray-100 dark:bg-gray-950'>
        <div className=' space-y-10 xl:space-y-16 '>
          <LandingCarousel />
          <LandingFeatures />
          <LandingPricing />
          <LandingTestimonials />
          <LandingContact />
        </div>
      </section>
    </>
  );
}
