import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.topnav} id="myTopnav">
      <Link href="/" class="active">
        Home
      </Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
