import { Box, Heading, Text } from '@chakra-ui/react';

const AbusiveRelationship = () => {
  return (
    <Box className="glass-overlay" p={8} pb="2rem" textAlign="center">
      <Heading as="h2" fontSize="2rem" fontWeight="bold" mt="1rem" mb="1rem">
        O que é um relacionamento abusivo?
      </Heading>

      <Box p={4}>
        <Heading as="h3" fontSize="1.5rem" fontWeight="bold" mb={2}>
          Controle
        </Heading>
        <Text>
          Um sinal de alerta é quando um parceiro tenta controlar a vida do outro,
          limitando a sua liberdade e autonomia.
        </Text>
      </Box>
      <Box p={4}>
        <Heading as="h3" fontSize="1.5rem" fontWeight="bold" mb={2}>
          Violência
        </Heading>
        <Text>
          A violência não é apenas física, pode ser emocional. É importante
          identificar comportamentos agressivos e manipuladores.
        </Text>
      </Box>
      <Box p={4}>
        <Heading as="h3" fontSize="1.5rem" fontWeight="bold" mb={2}>
          Desrespeito
        </Heading>
        <Text>
          Em um relacionamento saudável, as escolhas do outro são respeitadas. No
          abusivo, o parceiro não enxerga o outro como um indivíduo autônomo.
        </Text>
      </Box>
    </Box>
  );
};

export default AbusiveRelationship;
