import React from 'react'
import styles from './Input.module.css'

const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name} name={name}>{label}</label>
      <input id={name} className={styles.input} type={type} name={name}/>
      <p className={styles.error}>Error</p>
    </div>
  )
}

export default Input