import style from "./input.module.css";

interface IInput {
  labelText?: string;
  name?: string;
  onChange?: (e: any) => void;
  checked?: boolean;
}

export const Input = ({ labelText, name, onChange, checked }: IInput) => {
  return (
    <label className={style.container}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
      />
      <span className={style.checkmark}></span>
      {labelText}
    </label>
  );
};
