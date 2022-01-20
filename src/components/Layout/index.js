import Header from "../Header";
import styles from "./layout.module.css";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.body}>{children}</main>
    </>
  );
}
