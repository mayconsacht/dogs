import React from 'react';

type Props = {
  title: string;
  description?: string;
};

export const Head = ({ title, description }: Props) => {
  React.useEffect(() => {
    document.title = title + ' | Dogs';
    document
      .querySelector("meta[name='description']")
      ?.setAttribute('content', description || '');
  }, [title, description]);

  return null;
};
