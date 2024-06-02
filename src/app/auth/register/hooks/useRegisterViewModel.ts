import { useSingleState } from '@/hooks/useSingleState';
import React from 'react';
import * as z from 'zod';
import { signup } from '@/actions/auth/signup';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '../../_schemas';

type State = {
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  message: string;
};

export default function useRegisterViewModel() {
  const [state, setState] = useSingleState<State>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
  });

  const onSubmit = React.useCallback(
    (values: z.infer<typeof RegisterSchema>) => {
      setState({
        isLoading: true,
      });

      signup(values)
        .then((response) => {
          console.log('response', response);
          setState({
            isLoading: false,
            isError: response.error,
            message: response.message,
          });
        })
        .catch(() => {
          setState({
            isLoading: false,
          });
        });
    },
    [setState],
  );

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  return React.useMemo(
    () => ({
      isLoading: state.isLoading,
      isSuccess: state.isSuccess,
      isError: state.isError,
      message: state.message,
      onSubmit,
      setState,
      form,
    }),
    [
      form,
      state.isLoading,
      state.isSuccess,
      state.isError,
      setState,
      state.message,
      onSubmit,
    ],
  );
}
