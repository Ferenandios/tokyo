import { FC, useContext } from "react";
import { Context } from "../../App";

const Button: FC = (): JSX.Element => {
  const data = useContext(Context);
  const handleClick = () => {
    console.log(data.data);
    alert("Результат выведен в консоль");
  };
  return (
    <>
      <div>
        <button
          className="w-full h-[50px] bg-[#E5E7EB] bg-opacity-40 border-2 border-[#E5E7EB] rounded-full"
          onMouseUp={handleClick}
        >
          Отправить данные
        </button>
      </div>
    </>
  );
};

export default Button;
