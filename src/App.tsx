import { FC, useState } from "react";
import Image from "./components/Image/Image";
import Inputs from "./components/Inputs/Inputs";
import Button from "./components/Button/Button";
import { Context } from "./context/DataContext";
import { IData } from "./types/types";

const App: FC = (): JSX.Element => {
  const [data, setData] = useState<IData>({
    name: "",
    phone: "",
    email: "",
    // ! COMPLETE CONTEXT TYPES FOR A FUNCTION
    // ! COMPLETE CONTEXT TYPES FOR A FUNCTION
    // ! COMPLETE CONTEXT TYPES FOR A FUNCTION
    // ! COMPLETE CONTEXT TYPES FOR A FUNCTION
    // ! COMPLETE CONTEXT TYPES FOR A FUNCTION
  });
  return (
    <>
      <Context.Provider value={setData}>
        <section className="flex justify-center items-center w-screen h-screen">
          <form
            className="flex flex-col w-[500px] min-h-[250px] border-4 rounded-[30px] p-[16px] gap-[20px]"
            name="mailTo"
            method="post"
          >
            <Image />
            <Inputs />
            <Button />
          </form>
        </section>
      </Context.Provider>
    </>
  );
};

export default App;
