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
import ResponseMsg from './ResponseMsg';
import useLoginViewModel from '../useLoginViewModel';
import Spinner from '@/components/ui/spinner';

type Props = {
  viewModel: ReturnType<typeof useLoginViewModel>;
};

const LoginForm = ({ viewModel }: Props) => {
  return (
    <Form {...viewModel.form}>
      <form
        className='space-y-4'
        onSubmit={viewModel.form.handleSubmit(viewModel.onSubmit)}
      >
        <FormField
          control={viewModel.form.control}
          name='email'
          disabled={viewModel.isLoading}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder='john@example.com' type='email' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={viewModel.form.control}
          name='password'
          disabled={viewModel.isLoading}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder='john@example.com'
                  type='password'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ResponseMsg message={viewModel.message} error={viewModel.error} />

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

export default LoginForm;
