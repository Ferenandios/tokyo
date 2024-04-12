import { FC } from "react";

const Image: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-center">
        <img className="w-[176px] h-[176px]" src="/ersh.jpg" alt="App Icon" />
      </div>
    </>
  );
};

export default Image;
