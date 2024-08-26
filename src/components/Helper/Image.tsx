import React, { ReactEventHandler } from 'react';
import styles from './Image.module.css';

type Props = { alt: string; src: string };

const Image = ({ alt, ...props }: Props) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad(event: React.SyntheticEvent<HTMLImageElement>) {
    event.currentTarget.style.opacity = '1';
    setSkeleton(false);
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img
        onLoad={handleLoad}
        className={styles.img}
        alt={alt}
        {...props}
      ></img>
    </div>
  );
};

export default Image;
