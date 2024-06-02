import { useCallback, useReducer } from 'react';

/**
 * It takes an initial state and returns a reducer function and the current state
 * @param initialState - The initial state of the reducer.
 * @returns A function that takes a state and a payload and returns a new state.
 */
export const useSingleState = <T>(initialState = {} as T) => {
  const reducer = useCallback(
    (state: T, payload: { [key in keyof T]?: T[key] }) => ({
      ...state,
      ...payload,
    }),
    [],
  );
  return useReducer(reducer, initialState);
};
