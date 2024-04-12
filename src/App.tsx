import { FC } from "react";
import Image from "./components/Image/Image";
import Inputs from "./components/Inputs/Inputs";

const App: FC = (): JSX.Element => {
  return (
    <>
      <section className="flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col w-[500px] min-h-[250px] border-4 rounded-[30px] p-[16px] gap-[20px]">
          <Image />
          <Inputs />
        </div>
      </section>
    </>
  );
};

export default App;
