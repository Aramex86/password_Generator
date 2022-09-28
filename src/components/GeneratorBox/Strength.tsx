import { useContext } from "react";
import { AppContext } from "../../store/context";
import style from "./generator.module.css";

export const Strength = () => {
  const passwordLength = useContext(AppContext);

  return (
    <div className={style.strength}>
      <div>Strength</div>
      <div>
        <div
          className={`${
            passwordLength.characterLenght >= 2
              ? style.scaleActive
              : style.scale
          } `}
        ></div>
        <div
          className={`${
            passwordLength.characterLenght > 5 ? style.scaleActive : style.scale
          } `}
        ></div>
        <div
          className={`${
            passwordLength.characterLenght > 8 ? style.scaleActive : style.scale
          } `}
        ></div>
        <div
          className={`${
            passwordLength.characterLenght >= 10
              ? style.scaleActive
              : style.scale
          } `}
        ></div>
      </div>
    </div>
  );
};
