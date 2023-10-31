import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react';

const AbusiveRelationshipSigns = () => {
  return (
    <Box className="glass-overlay" p={8} textAlign="center">
      <Heading as="h2" fontSize="2rem" fontWeight="bold" mb={4}>
        Sinais de um relacionamento abusivo
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <Card title="Silêncio">
          Se sentir como se sua voz não fosse ouvida ou ser punido por compartilhar
          seus pensamentos e opiniões é um forte sinal de um relacionamento abusivo.
        </Card>
        <Card title="Promessas falsas">
          Se seu parceiro faz promessas que não pode cumprir, ou promete mudar mas
          depois não cumpre, isso pode ser uma forma manipulativa de controle.
        </Card>
        <Card title="Altos e baixos">
          Se você passa por uma montanha russa emocional constante com o seu
          parceiro, pode ser um sinal de um relacionamento abusivo.
        </Card>
        <Card title="Ciúmes exagerado">
          Um parceiro ciumento que tenta controlar suas ações é um sinal de alerta em
          um relacionamento abusivo.
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

export default AbusiveRelationshipSigns;
