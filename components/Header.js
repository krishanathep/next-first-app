import Image from 'next/image'
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.title}>

      <Image className={styles.image} src='/images/koi.jpg' width={100} height={100} />

      <h1 className={styles.title}>
        Hello, <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </div>
  );
};

export default Header;
