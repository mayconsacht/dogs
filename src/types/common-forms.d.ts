import React from 'react';

export type CommonProps = {
  children?: undefined | string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  label?: string;
  name?:
    | DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
    | undefined;
};
