import React from 'react';

export type ButtonProps = {
  onClick?: () => void | React.MouseEventHandler<HTMLButtonElement> | undefined;
};
