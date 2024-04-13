import { FC } from "react";
import { type IInput } from "../../types/types";
import Input from "./Input/Input";
import styles from "./Inputs.module.css";

const Inputs: FC = (): JSX.Element => {
  // List of Input-components
  const inputList: IInput[] = [
    { id: 0, title: "Имя", placeholder: "Введите свое имя", type: "name" },
    {
      id: 1,
      title: "Телефон",
      placeholder: "Введите свой телефон",
      type: "phone",
    },
    {
      id: 2,
      title: "Почта",
      placeholder: "Введите свою почту",
      type: "email",
    },
  ];
  return (
    <>
      <div className={styles.inner}>
        {inputList.map((input) => (
          <Input key={input.id} input={input} />
        ))}
      </div>
    </>
  );
};

export default Inputs;
