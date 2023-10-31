import { Box, Center, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

const AbusiveRelationshipCycle = () => {
  return (
    <Box bg="var(--secondary)" p={8} textAlign="center" pt="1.5rem" pb="1.5rem">
      <Heading as="h2" fontSize="2rem" fontWeight="bold" mb={4}>
        Ciclo do relacionamento abusivo
      </Heading>
      <UnorderedList textAlign="left">
        <ListItem>
          <strong>Fase da lua de mel:</strong> O início do relacionamento é uma fase
          de romance e felicidade, mas no ciclo do relacionamento abusivo essa fase
          pode servir de falsa sensação de que tudo é perfeito.
        </ListItem>
        <ListItem>
          <strong>Fase de tensão:</strong> A tensão no relacionamento começa a
          aumentar, com brigas e discussões constantes. O abusador vai tentar
          controlar e manipular cada vez mais.
        </ListItem>
        <ListItem>
          <strong>Fase da explosão:</strong> Nessa fase, o abusador pode se tornar
          violento ou colocar a vítima em situações perigosas ou humilhantes. A
          vítima sente medo e precisa da ajuda de outras pessoas.
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default AbusiveRelationshipCycle;
