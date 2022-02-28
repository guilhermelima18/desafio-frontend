import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex
      as="div"
      w="100%"
      maxW="1200px"
      flexDir="column"
      mx="auto"
      my="10"
      p="10"
      border="1px solid rgba(200, 200, 200, 0.8)"
      boxShadow="0 0 10px rgba(200, 200, 200, 0.9)"
      borderRadius="lg"
    >
      {children}
    </Flex>
  );
};
