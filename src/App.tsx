import { createContext, FC, useState } from "react";
import styles from "./App.module.css";
import Button from "./components/Button/Button";
import Image from "./components/Image/Image";
import Inputs from "./components/Inputs/Inputs";
import { type IState } from "./types/types";

// Creating Empty Context
export const Context = createContext<IState>({
  data: { name: "", phone: "", email: "" },
  setData: () => {},
});

const App: FC = (): JSX.Element => {
  // Creating State
  const [state, setState] = useState<IState>({
    data: { name: "", phone: "", email: "" }, // default value of data
    setData: (payload) => {
      // state.data[payload.type] = payload.value
      setState((prevState) => ({
        data: { ...prevState.data, [payload.type]: payload.value },
        setData: prevState.setData,
      }));
    },
  });
  return (
    <>
      <Context.Provider value={state}>
        <section className={styles.app}>
          <div className={styles.inner}>
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
