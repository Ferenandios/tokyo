import { FC } from "react";
import { type IInput } from "../../types/types";
import Input from "./Input/Input";

const Inputs: FC = (): JSX.Element => {
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
      <div className="flex flex-col items-center gap-[8px]">
        {inputList.map((input) => (
          <Input key={input.id} input={input} />
        ))}
      </div>
    </>
  );
};

export default Inputs;
