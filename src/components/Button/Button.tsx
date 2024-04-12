import { FC } from "react";

const Button: FC = (): JSX.Element => {
  const handleClick = () => {
    alert("Данные отправлены!");
  };
  return (
    <>
      <div>
        <button
          className="w-full h-[50px] bg-[#E5E7EB] bg-opacity-40 border-2 border-[#E5E7EB] rounded-full"
          onMouseUp={handleClick}
          type="submit"
        >
          Отправить данные
        </button>
      </div>
    </>
  );
};

export default Button;
