import { useContext, useEffect, useState } from "react";

import { AppContext, AppDispatchContext } from "../../store/context";
import { Input } from "../Input/Input";
import style from "./generator.module.css";

export const Options = () => {
  const dispatch = useContext(AppDispatchContext);
  const { options } = useContext(AppContext);
  const [upperLetters, setUpperLetters] = useState(false);
  const [lowerCaseLetters, setLowerCaseLetters] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const newOptions = {
    upperCaseLetter: upperLetters,
    lowerCaseLetter: lowerCaseLetters,
    numbers,
    symbols,
  };

  useEffect(() => {
    dispatch({ type: "option", payload: newOptions });
  }, [upperLetters, lowerCaseLetters, numbers, symbols]);

  const handldeUpperLetters = () => {
    setUpperLetters(!upperLetters);
  };

  const handleLowercaseLetters = () => {
    setLowerCaseLetters(!lowerCaseLetters);
  };
  const handleNumbers = () => {
    setNumbers(!numbers);
  };
  const handleSymbols = () => {
    setSymbols(!symbols);
  };

  return (
    <div className={style.options}>
      <Input
        labelText="Include Uppercase Letters"
        name="upperLetters"
        onChange={handldeUpperLetters}
        checked={upperLetters}
      />
      <Input
        labelText="Include Lowercase Letters"
        name="lowerLeters"
        onChange={handleLowercaseLetters}
        checked={lowerCaseLetters}
      />
      <Input
        labelText="Include Numbers"
        name="numbers"
        onChange={handleNumbers}
        checked={numbers}
      />
      <Input
        labelText="Include Symbols"
        name="symbols"
        onChange={handleSymbols}
        checked={symbols}
      />
    </div>
  );
};
