import { useReducer } from "react";
import { GeneratoBox, PasswordInput } from "./components";
import { Notification } from "./components/Notification/Notification";
import style from "./css/container.module.css";
import { appReducer, initialState } from "./store";
import { AppContext, AppDispatchContext } from "./store/context";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const { characterLenght } = state;

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        <div className={style.container}>
          <Notification
            text="The lenght of password must be more than 3 characters"
            visible={characterLenght > 1 && characterLenght <= 3}
            duration={3}
          />
          <PasswordInput />
          <div className={style.divider}></div>
          <GeneratoBox />
        </div>
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
