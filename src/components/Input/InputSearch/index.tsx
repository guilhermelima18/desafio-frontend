import { AiOutlineSearch } from "react-icons/ai";
import { InputContainer } from "./styles";

export const InputSearch = () => {
  return (
    <InputContainer>
      <AiOutlineSearch fontSize={24} color="#333" />
      <input type="search" placeholder="Busque por nome" />
    </InputContainer>
  );
};
