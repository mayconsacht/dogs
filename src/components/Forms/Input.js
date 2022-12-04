import React from 'react';
import Error from '../Helper/Error';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name} name={name}>
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

export default Input;
