import style from "./passwordInput.module.css";
import { FaCopy } from "react-icons/fa";
import { useContext, useState } from "react";
import { AppContext } from "../../store/context";

export const PasswordInput = () => {
  const { result } = useContext(AppContext);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className={style.input}>
      <input
        className={style.password}
        placeholder="A4!nTF!r5"
        defaultValue={result && result}
      />
      <div className={style.copy}>
        {copied && (
          <div className={style.copyText}>
            {result ? " Copied to clipboard !" : "Nothing to copy !"}
          </div>
        )}
        <button className={style.copyBtn} onClick={handleCopy}>
          <FaCopy color="#74f693" size={18} />
        </button>
      </div>
    </div>
  );
};
