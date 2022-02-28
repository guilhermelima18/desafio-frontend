import { HStack, Heading } from "@chakra-ui/react";
import { InputSearch } from "../../components/InputSearch";
import { Layout } from "../../components/Layout";
import { Button } from "../../components/Button";
import { ClientsCard } from "../../components/ClientsCard";
import { IoIosPersonAdd } from "react-icons/io";

const Home = () => {
  return (
    <Layout>
      <HStack as="header" w="100%" justifyContent="space-between">
        <Heading fontWeight="bold" fontSize="3xl">
          Clientes
        </Heading>
        <Button
          backgroundColor="green.400"
          width="250px"
          color="white"
          bgHover="green.500"
        >
          <IoIosPersonAdd fontSize={22} style={{ marginRight: "10px" }} />
          Novo cliente
        </Button>
      </HStack>
      <HStack as="main" w="100%" my="8" justifyContent="flex-end">
        <InputSearch />
      </HStack>
      <ClientsCard />
    </Layout>
  );
};

export default Home;
