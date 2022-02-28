import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

export const InputSearch = () => {
  return (
    <InputGroup w="100%">
      <InputLeftElement
        pointerEvents="none"
        children={<AiOutlineSearch color="gray.300" fontSize={22} />}
      />
      <Input
        type="text"
        placeholder="Busca pelo nome do cliente"
        _focus={{ borderColor: "gray.900", borderWidth: "2px" }}
      />
    </InputGroup>
  );
};
