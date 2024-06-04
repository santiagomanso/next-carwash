'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import Spinner from '@/components/ui/spinner';
import useContactFormViewModel from './useContactFormViewModel';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  const viewModel = useContactFormViewModel();

  return (
    <Form {...viewModel.form}>
      <form
        className='space-y-4 w-full md:max-w-xl flex flex-col items-start'
        onSubmit={viewModel.form.handleSubmit(viewModel.onSubmit)}
      >
        <FormField
          control={viewModel.form.control}
          name='email'
          disabled={viewModel.isLoading}
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormControl>
                <Input
                  className='dark:bg-gray-800'
                  {...field}
                  placeholder='john@example.com'
                  type='email'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={viewModel.form.control}
          name='name'
          disabled={viewModel.isLoading}
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel htmlFor='name'>name</FormLabel>
              <FormControl>
                <Input
                  className='dark:bg-gray-800'
                  {...field}
                  placeholder='john@example.com'
                  type='text'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={viewModel.form.control}
          name='message'
          disabled={viewModel.isLoading}
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel htmlFor='message'>message</FormLabel>
              <FormControl>
                <Textarea
                  className='dark:bg-gray-800'
                  {...field}
                  placeholder='john@example.com'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <ResponseMsg message={viewModel.message} error={viewModel.error} /> */}

        <Button
          className={'w-full flex items-center gap-2'}
          disabled={viewModel.isLoading}
          type='submit'
        >
          Sign In
          {viewModel.isLoading && <Spinner />}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
