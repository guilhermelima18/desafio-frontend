import { Link } from "react-router-dom";
import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome, AiFillIdcard } from "react-icons/ai";

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} _hover={{ backgroundColor: "gray.300" }}>
        <GiHamburgerMenu fontSize={20} color="gray.900" />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.900">
          <DrawerCloseButton color="white" />
          <Flex
            w="100%"
            h="100%"
            flexDir="column"
            justifyContent="center"
            px="10"
            gap="20px"
          >
            <Link to="/">
              <Button w="100%" alignItems="center" gap="10px">
                <AiFillHome fontSize={18} />
                Início
              </Button>
            </Link>
            <Link to="/resume">
              <Button w="100%" alignItems="center" gap="10px">
                <AiFillIdcard fontSize={18} />
                Resumo
              </Button>
            </Link>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};
