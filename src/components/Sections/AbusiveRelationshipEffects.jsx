import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react';

const AbusiveRelationshipEffects = () => {
  return (
    <Box className="glass-overlay" p={8} textAlign="center">
      <Heading as="h2" fontSize="2rem" fontWeight="bold" mb={4}>
        Efeitos do relacionamento abusivo na vítima
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <Card title="Saúde mental afetada">
          Um relacionamento abusivo pode levar à ansiedade, depressão, estresse
          pós-traumático e outros problemas de saúde mental.
        </Card>
        <Card title="Isolamento social">
          Os abusadores muitas vezes tentam isolar suas vítimas da família e amigos.
          Isso pode poderia dificultar o processo de busca por ajuda.
        </Card>
        <Card title="Deterioração física">
          Relacionamentos abusivos podem levar à perda de sono, problemas
          gastrointestinais, perda de peso e outros problemas físicos.
        </Card>
        <Card title="Suicídio">
          Muitas vítimas de relacionamentos abusivos consideram o suicídio como uma
          forma de escapar do abuso.
        </Card>
      </SimpleGrid>
    </Box>
  );
};

const Card = ({ title, children }) => {
  return (
    <Box
      className="gradient-bg"
      borderRadius="8px"
      p={4}
      color="var(--text)"
      pt="1rem"
      pb="1rem"
    >
      <Heading as="h3" fontSize="1.5rem" fontWeight="bold" mb={2}>
        {title}
      </Heading>
      <p>{children}</p>
    </Box>
  );
};

export default AbusiveRelationshipEffects;
