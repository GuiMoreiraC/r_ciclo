import { Box } from '@chakra-ui/react';
import Hero from './components/Hero';
import AbusiveRelationship from './components/Sections/AbusiveRelationship.jsx';
import AbusiveRelationshipSigns from './components/Sections/AbusiveRelationshipSigns';
import AbusiveRelationshipCycle from './components/Sections/AbusiveRelationshipCycle';
import AbusiveRelationshipTypes from './components/Sections/AbusiveRelationshipTypes';
import AbusiveRelationshipEffects from './components/Sections/AbusiveRelationshipEffects';
import ProtectionAndHelp from './components/Sections/ProtectionAndHelp';
import PsychologicalHelp from './components/Sections/PsychologicalHelp';
import ConclusionAndResources from './components/Sections/ConclusionAndResources';

function App() {
  return (
    <>
      <Hero />
      <AbusiveRelationship />
      <AbusiveRelationshipSigns />
      <AbusiveRelationshipCycle />
      <AbusiveRelationshipTypes />
      <AbusiveRelationshipEffects />
      <ProtectionAndHelp />
      <PsychologicalHelp />
      <ConclusionAndResources />
      <Box height="100vh">
        <h1>Vite + React</h1>
      </Box>
    </>
  );
}

export default App;
