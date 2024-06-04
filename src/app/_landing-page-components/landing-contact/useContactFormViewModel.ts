import React from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { login } from '@/actions/auth/login';
import { signIn } from 'next-auth/react';

type State = {
  error: boolean;
  message: string;
  isLoading: boolean;
};

const Schema = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email(),
  message: z.string().min(10).max(300),
});

export default function useContactFormViewModel() {
  const [state, setState] = React.useState<State>({
    error: false,
    message: '',
    isLoading: false,
  });

  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  const onSubmit = React.useCallback(async (values: z.infer<typeof Schema>) => {
    try {
      setState((prevState) => ({
        ...prevState,
        isLoading: true,
      }));

      //TODO - implement the logic for sending the contact email

      // if (response) {
      //   setState((prevState) => ({
      //     ...prevState,
      //     error: response.error ? response.error : false,
      //     message: response.message ? response.message : '',
      //   }));
      // }
    } catch (error) {
      console.error(error);
    } finally {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  }, []);

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
