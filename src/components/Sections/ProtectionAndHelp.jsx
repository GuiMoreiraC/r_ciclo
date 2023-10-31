import { Box, Heading, Text } from '@chakra-ui/react';

const ProtectionAndHelp = () => {
  return (
    <Box className="glass-overlay" p={8} pb="2rem" textAlign="center">
      <Heading as="h2" fontSize="2rem" fontWeight="bold" mt="1rem" mb="1rem">
        Como se proteger e buscar ajuda
      </Heading>

      <Box p={4}>
        <Heading as="h3" fontSize="1.5rem" fontWeight="bold" mb={2}>
          Conheça seus direitos
        </Heading>
        <Text>
          Leia e se informe sobre as leis e serviços de apoio à vítima de violência
          doméstica. Muitas vezes, há recursos disponíveis próximos a você que você
          pode acessar.
        </Text>
      </Box>
      <Box p={4}>
        <Heading as="h3" fontSize="1.5rem" fontWeight="bold" mb={2}>
          Fale sobre isso
        </Heading>
        <Text>
          Compartilhe sua experiência com alguém em quem você confia, e busque
          orientação de profissionais, se preciso. Não se sinta sozinho ou
          envergonhado.
        </Text>
      </Box>
      <Box p={4}>
        <Heading as="h3" fontSize="1.5rem" fontWeight="bold" mb={2}>
          Planeje a sua saída
        </Heading>
        <Text>
          Planeje sua fuga de forma segura. Se possível, avise alguém em quem confia
          sobre seus planos para que eles possam ajudar.
        </Text>
      </Box>
    </Box>
  );
};

export default ProtectionAndHelp;
