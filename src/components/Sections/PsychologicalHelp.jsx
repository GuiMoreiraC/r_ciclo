import { Box, Heading, Text } from '@chakra-ui/react';

const PsychologicalHelp = () => {
  return (
    <Box bg="var(--background)" p={8} textAlign="center">
      <Heading as="h2" fontSize="2rem" fontWeight="bold" mb={4} pt="2rem">
        A importância de buscar ajuda psicológica para se livrar do ciclo do abuso
      </Heading>
      <Card>
        É fundamental que os agressores busquem apoio e ajuda psicológica para lidar
        com seus comportamentos abusivos. Existem recursos e programas disponíveis
        que podem auxiliá-los a reconhecer e modificar seus padrões de comportamento,
        promovendo relacionamentos saudáveis e livres de violência.
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

export default PsychologicalHelp;
