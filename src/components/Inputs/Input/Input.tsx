import { FC } from "react";
import { type IInput } from "../../../types/types";

const Input: FC<{ input: IInput }> = ({ input }): JSX.Element => {
  return (
    <>
      <div>
        <h3>{input.title}</h3>
      </div>
    </>
  );
};

export default Input;
