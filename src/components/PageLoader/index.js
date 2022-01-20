import images from "../../assets/images";
import styles from "./styles.module.css";
export default function PageLoader() {
  return (
    <div className={styles.container}>
      <img src={images.loader1} alt="loader" className={styles.loader} />
      <h4>Loading...</h4>
    </div>
  );
}
