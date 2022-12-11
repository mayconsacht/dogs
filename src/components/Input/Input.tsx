import React from 'react';
import { CommonProps } from '../../types/common-forms';
import Error from '../Helper/Error';
import styles from './Input.module.css';
import { InputProps } from './types';

export const Input = (props: CommonProps & InputProps) => {
  const { label, type, name, value, onChange, error, onBlur } = props;

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className={styles.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error error={error} />}
    </div>
  );
};
