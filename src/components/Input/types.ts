import React from 'react';

export type InputProps = {
  value: string | undefined;
  type: string | undefined;
  error?: string | undefined | null;
  name?: string | undefined | null;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: ({ target }: { target: any }) => void;
  validate: () => boolean;
  onBlur: () => boolean;
};
