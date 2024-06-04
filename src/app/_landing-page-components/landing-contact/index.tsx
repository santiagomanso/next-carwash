import ContactForm from './contact-form';

export default function LandingContact() {
  return (
    <section className='  w-full py-12 md:py-24 lg:py-32' id='contact'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center  md:max-w-2xl md:px-14 md:py-10 md:mx-auto'>
          <div className='inline-block rounded-lg bg-gray-100 border-[1px] dark:border-gray-700/70 px-3 py-1 text-sm dark:bg-gray-800'>
            Contact Us
          </div>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
            Doubts? Reach out!
          </h2>
          <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
            If you&apos;re a shop owner and you would like more information,
            feel free to reach out!
          </p>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
