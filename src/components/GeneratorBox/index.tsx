import style from "./generator.module.css";
import { Range } from "./Range";
import { Options } from "./Options";
import { Strength } from "./Strength";
import { FaArrowRight } from "react-icons/fa";
import { AppContext, AppDispatchContext } from "../../store/context";
import { useContext, useEffect, useState } from "react";
import {
  numbers,
  alphabet,
  lowerCaseAlphabet,
  symbols,
} from "../../helpers/optionsHelpers";

export const GeneratoBox = () => {
  const { options, characterLenght, result } = useContext(AppContext);
  const dispatch = useContext(AppDispatchContext);
  const [generatedPassword, setGeneratedPassword] = useState<string>("");

  useEffect(() => {
    const generatePass = () => {
      let result = [];

      for (let i = 0; i < characterLenght; i++) {
        if (options.upperCaseLetter)
          result.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
        if (options.lowerCaseLetter)
          result.push(
            lowerCaseAlphabet[
              Math.floor(Math.random() * lowerCaseAlphabet.length)
            ]
          );
        if (options.numbers)
          result.push(numbers[Math.floor(Math.random() * numbers.length)]);
        if (options.symbols)
          result.push(symbols[Math.floor(Math.random() * symbols.length)]);
      }

      setGeneratedPassword(result.slice(0, characterLenght).join(""));
    };

    generatePass();
  }, [options, characterLenght, result]);

  return (
    <div className={style.container}>
      <Range />
      <Options />
      <Strength />
      <button
        className={characterLenght > 3 ? style.btn : style.btnDisable}
        onClick={() => {
          dispatch({ type: "result", payload: generatedPassword });
        }}
        disabled={characterLenght <= 3}
      >
        Generate <FaArrowRight />
      </button>
    </div>
  );
};
