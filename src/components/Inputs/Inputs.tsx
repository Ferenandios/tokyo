import { FC } from "react";
import { type IInput } from "../../types/types";
import Input from "./Input/Input";

const Inputs: FC = (): JSX.Element => {
  const inputList: IInput[] = [
    { id: 0, title: "Имя", placeholder: "Введите свое имя" },
    { id: 1, title: "Телефон", placeholder: "Введите свой телефон" },
    { id: 2, title: "Почта", placeholder: "Введите свою почту" },
  ];
  return (
    <>
      <div className="flex flex-col items-center">
        {inputList.map((input) => (
          <Input key={input.id} input={input} />
        ))}
      </div>
    </>
  );
};

export default Inputs;
