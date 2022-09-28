import { InitialState } from "./index";
import { createContext, Dispatch } from "react";

export const AppContext = createContext({} as InitialState);
export const AppDispatchContext = createContext((() => {}) as Dispatch<any>);
