import { Box, Heading, Table, Tbody, Tr, Td } from '@chakra-ui/react';

const ConclusionAndResources = () => {
  return (
    <Box className="glass-overlay" p={8} textAlign="center">
      <Heading as="h2" fontSize="2rem" fontWeight="bold" mb={4} pt="2rem">
        Conclusão e recursos úteis
      </Heading>
      <Box p={4}>
        <p>
          Abusos não são normais, e é importante saber como identificá-los e
          pará-los. É possível buscar recursos e mudar sua vida para melhor. Aqui
          estão alguns recursos úteis:
        </p>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>0800 771 0156</Td>
              <Td>Ligue 180 (Central de atendimento à mulher)</Td>
            </Tr>
            <Tr>
              <Td>0800 643 2333</Td>
              <Td>Ligue (Centro de Valorização da Vida)</Td>
            </Tr>
            <Tr>
              <Td>190</Td>
              <Td>Ligue para a polícia em caso de emergência</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default ConclusionAndResources;
