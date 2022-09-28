import { useContext, useState } from "react";
import { AppDispatchContext } from "../../store/context";
import style from "./generator.module.css";

export const Range = () => {
  const dispatch = useContext(AppDispatchContext);

  const [range, setRange] = useState<number>(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange(Number(e.target.value));
    dispatch({ type: "range", payload: Number(e.target.value) });
  };

  return (
    <div className={style.range}>
      <div className={style.title}>
        <div>Character Length </div>
        <div>{range}</div>
      </div>
      <div className={style.inputRange}>
        <input
          type="range"
          onChange={handleChange}
          min={0}
          max={10}
          defaultValue={0}
        />
      </div>
    </div>
  );
};
