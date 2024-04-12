import { type IData } from "./../types/types";
import { createContext, useContext } from "react";

export const Context = createContext<IData>({
  name: "",
  phone: "",
  email: "",
});
export const useAppContext = () => useContext(Context);
