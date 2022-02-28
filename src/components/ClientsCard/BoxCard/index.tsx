import { Flex, Heading, Text, HStack } from "@chakra-ui/react";
import { Button } from "../../Button";
import { AiFillEdit } from "react-icons/ai";
import { ImBin } from "react-icons/im";

export const BoxCard = () => {
  return (
    <Flex
      flexDir="column"
      border="1px solid rgba(200, 200, 200, 0.8)"
      m="3"
      p="3"
      borderRadius="lg"
    >
      <Text fontWeight="bold" my="1">
        Nome:{" "}
        <Text as="span" fontSize="sm" fontWeight="normal">
          Guilherme Lima
        </Text>
      </Text>
      <Text fontWeight="bold" my="1">
        Telefone:{" "}
        <Text as="span" fontSize="sm" fontWeight="normal">
          (14) 99886-3973
        </Text>
      </Text>
      <Text fontWeight="bold" my="1">
        E-mail:{" "}
        <Text as="span" fontSize="sm" fontWeight="normal">
          guilhermelima18@hotmail.com
        </Text>
      </Text>
      <Heading fontSize="lg" my="3">
        Grupo: Tecnologia
      </Heading>
      <HStack justifyContent="center" mt="5">
        <Button
          backgroundColor="blue.500"
          width="50px"
          color="white"
          bgHover="blue.700"
        >
          <AiFillEdit color="white" fontSize={24} />
        </Button>
        <Button
          backgroundColor="red.500"
          width="50px"
          color="white"
          bgHover="red.700"
        >
          <ImBin color="white" fontSize={24} />
        </Button>
      </HStack>
    </Flex>
  );
};
