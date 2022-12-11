import { CommonProps } from '../../types/common-forms';
import styles from './Button.module.css';
import { ButtonProps } from './types';

export const Button = (props: CommonProps & ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
};
