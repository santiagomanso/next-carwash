import React from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { LoginSchema } from '../_schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { login } from '@/actions/auth/login';
import { signIn } from 'next-auth/react';

type State = {
  error: boolean;
  message: string;
  isLoading: boolean;
};

export default function useLoginViewModel() {
  const [state, setState] = React.useState<State>({
    error: false,
    message: '',
    isLoading: false,
  });

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = React.useCallback(
    async (values: z.infer<typeof LoginSchema>) => {
      try {
        setState((prevState) => ({
          ...prevState,
          isLoading: true,
        }));

        const response = await login(values);

        if (response) {
          setState((prevState) => ({
            ...prevState,
            error: response.error ? response.error : false,
            message: response.message ? response.message : '',
          }));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
      }
    },
    [],
  );

  const socialSignIn = React.useCallback(
    async (provider: 'google' | 'apple') => {
      try {
        setState((prevState) => ({
          ...prevState,
          isLoading: true,
        }));

        const response = await signIn(provider, { callbackUrl: '/' });

        if (response) {
          setState((prevState) => ({
            ...prevState,
            error: !!response.error, // convert to boolean
          }));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
        }));
      }
    },
    [],
  );

  return React.useMemo(
    () => ({
      isLoading: state.isLoading,
      message: state.message,
      error: state.error,
      onSubmit,
      setState,
      form,
      socialSignIn,
    }),
    [
      form,
      state.isLoading,
      setState,
      state.message,
      onSubmit,
      state.error,
      socialSignIn,
    ],
  );
}
