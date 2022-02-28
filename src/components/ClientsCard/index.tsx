import { VStack, SimpleGrid, HStack } from "@chakra-ui/react";
import { Button } from "../Button";
import { BoxCard } from "./BoxCard";

export const ClientsCard = () => {
  return (
    <VStack spacing="8">
      <SimpleGrid minChildWidth="350px" width="100%" mb="10">
        <BoxCard />
        <BoxCard />
        <BoxCard />
        <BoxCard />
      </SimpleGrid>
      <HStack>
        <Button
          backgroundColor="gray.900"
          width="100px"
          color="white"
          bgHover="gray.700"
        >
          Anterior
        </Button>
        <Button
          backgroundColor="gray.900"
          width="100px"
          color="white"
          bgHover="gray.700"
        >
          Próxima
        </Button>
      </HStack>
    </VStack>
  );
};
