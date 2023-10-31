import { Box, Center, Heading, Text } from '@chakra-ui/react';

const AbusiveRelationshipTypes = () => {
  return (
    <Box bg="var(--background)" p={8} textAlign="center">
      <Heading as="h2" fontSize="2rem" fontWeight="bold" mb={4} pt="2rem">
        Tipos de relacionamentos abusivos
      </Heading>
      <Card>
        Existem diferentes tipos de relacionamentos abusivos, como emocional, físico,
        sexual e financeiro. Cada um envolve formas de controle e manipulação que
        prejudicam a saúde e o bem-estar da vítima. É importante reconhecer esses
        padrões para buscar ajuda e sair desse ciclo.
      </Card>
    </Box>
  );
};

const Card = ({ children }) => {
  return (
    <Box p={4} borderRadius="lg" color="var(--text)" pt="2rem" pb="2rem">
      {children}
    </Box>
  );
};

export default AbusiveRelationshipTypes;
