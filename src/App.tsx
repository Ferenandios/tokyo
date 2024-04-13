import { createContext, FC, useState } from "react";
import Button from "./components/Button/Button";
import Image from "./components/Image/Image";
import Inputs from "./components/Inputs/Inputs";
import { type IState } from "./types/types";

export const Context = createContext<IState>({
  data: { name: "", phone: "", email: "" },
  setData: () => {},
});

const App: FC = (): JSX.Element => {
  const [state, setState] = useState<IState>({
    data: { name: "", phone: "", email: "" },
    setData: (payload) => {
      setState((prevState) => ({
        data: { ...prevState.data, [payload.type]: payload.value },
        setData: prevState.setData,
      }));
    },
  });
  return (
    <>
      <Context.Provider value={state}>
        <section className="flex justify-center items-center w-screen h-screen">
          <div className="flex flex-col w-[500px] min-h-[250px] border-4 rounded-[30px] p-[16px] gap-[20px]">
            <Image />
            <Inputs />
            <Button />
          </div>
        </section>
      </Context.Provider>
    </>
  );
};

export default App;
