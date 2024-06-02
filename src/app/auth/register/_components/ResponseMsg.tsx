import React from 'react';
import { CircleCheck, TriangleAlert } from 'lucide-react';

type Props = {
  message: string | undefined;
  error?: boolean;
};

const ResponseMsg = ({ message, error }: Props) => {
  if (!message) return null;

  return (
    <div
      className={`${
        error
          ? 'bg-destructive/15 text-destructive border-red-300'
          : 'bg-emerald-400/30 text-green-700 border-green-300'
      }  p-2 border-[1px]  rounded-md flex items-center gap-x-2 text-sm `}
    >
      {error ? <TriangleAlert size={24} /> : <CircleCheck size={24} />}
      <p>{message}</p>
    </div>
  );
};

export default ResponseMsg;
