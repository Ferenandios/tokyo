import { FC } from "react";
import styles from "./Image.module.css";
import ersh from "/ersh.jpg";

const Image: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <img className={styles.image} src={ersh} alt="App Icon" />
      </div>
    </>
  );
};

export default Image;
