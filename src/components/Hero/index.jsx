import { Box, Center, Heading, Text } from '@chakra-ui/react';
import backgroundImage from '../../assets/images/bg-01.png'; // Importe a imagem aqui

const Hero = () => {
  return (
    <Center
      bg={`url(${backgroundImage}) center center/cover no-repeat`}
      color="var(--text)"
      p={8}
      textAlign="center"
      height="75vh"
      position="relative"
    >
      <Box position="relative" zIndex="1">
        <Heading as="h1" fontWeight="200" fontSize="2.5rem">
          Rompa o Ciclo
        </Heading>
        <Text fontSize="xl" fontWeight="bold" mt={16}>
          Entender para se defender de relacionamentos abusivos
        </Text>
        <Text fontSize="lg" mt={4}>
          Relacionamentos abusivos podem ser difíceis de identificar e se defender,
          mas com o conhecimento certo, podemos nos proteger e cuidar de nós mesmos.
          Aprenda a identificar os sinais de um relacionamento abusivo e como buscar
          ajuda.
        </Text>
      </Box>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.7)" // Cor escura de overlay
        zIndex="0"
      />
    </Center>
  );
};

export default Hero;
