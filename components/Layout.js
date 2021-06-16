import Navbar from "../components/Navbar";
import Header from "../components/Header";
import styles from '../styles/Home.module.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
