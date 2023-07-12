import styles from './Footer.module.css';
import { ReactComponent as Dogs } from '../../assets/dogs-footer.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. All rights reserved.</p>
    </footer>
  );
};
