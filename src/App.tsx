import { FC } from "react";
import Image from "./components/Image/Image";
import Inputs from "./components/Inputs/Inputs";

const App: FC = (): JSX.Element => {
  return (
    <>
      <section className="flex justify-center items-center w-screen h-screen">
        <div className="w-[500px] min-h-[250px] bg-orange-300">
          <Image />
          <Inputs />
        </div>
      </section>
    </>
  );
};

export default App;
