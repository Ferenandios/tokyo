import { FC, useContext } from "react";
import { type IInput } from "../../../types/types";
import { Context } from "../../../App";

const Input: FC<{ input: IInput }> = ({ input }): JSX.Element => {
  const { setData } = useContext(Context);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ type: input.type, value: event.target.value });
  };
  return (
    <>
      <div className="flex flex-col w-full h-[60px]">
        <h3 className="font-bold ml-[16px]">{input.title}</h3>
        <input
          onChange={handleChange}
          className="w-full h-full border-2 rounded-full px-[16px]"
          placeholder={input.placeholder}
          type="text"
        />
      </div>
    </>
  );
};

export default Input;
