import { FC } from "react";
import { type IInput } from "../../../types/types";

const Input: FC<{ input: IInput }> = ({ input }): JSX.Element => {
  return (
    <>
      <div className="flex flex-col w-full h-[60px]">
        <h3 className="font-bold ml-[16px]">{input.title}</h3>
        <input
          className="w-full h-full border-2 rounded-full px-[16px]"
          placeholder={input.placeholder}
          type="text"
        />
      </div>
    </>
  );
};

export default Input;
