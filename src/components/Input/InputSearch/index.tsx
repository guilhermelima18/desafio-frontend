import { InputHTMLAttributes } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { InputContainer } from "./styles";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
}

export const InputSearch = ({ width, ...rest }: InputSearchProps) => {
  return (
    <InputContainer>
      <AiOutlineSearch fontSize={24} color="#333" />
      <input
        style={{ width: `${width}` }}
        type="search"
        placeholder="Busque por nome"
        {...rest}
      />
    </InputContainer>
  );
};
