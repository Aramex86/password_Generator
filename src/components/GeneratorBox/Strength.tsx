import { useContext } from "react";
import { AppContext } from "../../store/context";
import style from "./generator.module.css";

export const Strength = () => {
  const { options } = useContext(AppContext);

  const strength: boolean[] = [];

  for (let x in options) {
    strength.push(options[x as keyof typeof options]);
  }

  return (
    <div className={style.strength}>
      <div>Strength</div>
      <div>
        {strength
          .sort((a: any, b: any) => b - a)
          .map((el, i) => (
            <div
              className={`${el ? style.scaleActive : style.scale} `}
              key={i}
            ></div>
          ))}
      </div>
    </div>
  );
};
