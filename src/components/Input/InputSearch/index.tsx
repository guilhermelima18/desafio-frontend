import { InputHTMLAttributes } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { InputContainer } from "./styles";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  placeholderText: string;
}

export const InputSearch = ({
  width,
  placeholderText,
  ...rest
}: InputSearchProps) => {
  return (
    <InputContainer>
      <AiOutlineSearch fontSize={24} color="#333" />
      <input
        style={{ width: `${width}` }}
        type="search"
        placeholder={placeholderText}
        {...rest}
      />
    </InputContainer>
  );
};
