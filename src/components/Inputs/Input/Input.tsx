import { FC, useContext } from "react";
import { Context } from "../../../App";
import { type IInput } from "../../../types/types";
import styles from "./Input.module.css";

const Input: FC<{ input: IInput }> = ({ input }): JSX.Element => {
  const { setData } = useContext(Context);
  // Function changes state.data[payload.type]
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ type: input.type, value: event.target.value });
  };
  return (
    <>
      <div className={styles.inner}>
        <h3 className={styles.title}>{input.title}</h3>
        <input
          onChange={handleChange}
          className={styles.input}
          placeholder={input.placeholder}
          type="text"
        />
      </div>
    </>
  );
};

export default Input;
