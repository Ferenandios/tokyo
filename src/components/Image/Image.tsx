import { FC } from "react";
import styles from "./Image.module.css";

const Image: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <img className={styles.image} src="/ersh.jpg" alt="App Icon" />
      </div>
    </>
  );
};

export default Image;
