import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  inputName: string;
  inputType: string;
  inputPlaceholder?: string;
}

export const InputGroup = ({
  labelText,
  inputName,
  inputType,
  inputPlaceholder,
  ...rest
}: InputGroupProps) => {
  return (
    <InputContainer>
      <label htmlFor={inputName}>{labelText}</label>
      <input
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        {...rest}
      />
    </InputContainer>
  );
};
