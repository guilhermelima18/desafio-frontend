import { Link } from "react-router-dom";
import { Flex, HStack, Box, Text, useMediaQuery } from "@chakra-ui/react";
import { Sidebar } from "../Sidebar";

export const Header = () => {
  const [isLessThan600] = useMediaQuery("(max-width: 600px)");

  return (
    <Flex as="header" bg="gray.900" w="100%" h="20vh" px="5">
      <Flex
        as="nav"
        w="100%"
        maxW="1200px"
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
      >
        <Box as="div">
          <Text color="white">Desafio Front-end</Text>
        </Box>
        {isLessThan600 ? (
          <Sidebar />
        ) : (
          <HStack as="nav" color="white" gap="20px">
            <Link to="/">Início</Link>
            <Link to="/resume">Resumos</Link>
          </HStack>
        )}
      </Flex>
    </Flex>
  );
};
