'use client';
import React, { startTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { LoginSchema } from '../../_schemas';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import ResponseMsg from './ResponseMsg';
import { login } from '@/actions/auth/login';

type State = {
  error: boolean;
  message: string;
};

const LoginForm = () => {
  const [isPending, starTransition] = React.useTransition();
  const [state, setState] = React.useState<State>({
    error: false,
    message: '',
  });

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values).then((response) => {
        setState({
          error: response.error,
          message: response.message,
        });
      });
    });
  };

  return (
    <Form {...form}>
      <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='email'
          disabled={isPending}
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
          control={form.control}
          name='password'
          disabled={isPending}
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

        <ResponseMsg message={state.message} error={state.error} />

        <Button className='w-full' disabled={isPending} type='submit'>
          Sign In
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
