import { FC, useContext } from "react";
import { Context } from "../../App";
import styles from "./Button.module.css";

const Button: FC = (): JSX.Element => {
  const data = useContext(Context);
  const handleClick = () => {
    console.log(data.data);
    alert("Результат выведен в консоль");
  };
  return (
    <>
      <div>
        <button className={styles.button} onClick={handleClick}>
          Отправить данные
        </button>
      </div>
    </>
  );
};

export default Button;
