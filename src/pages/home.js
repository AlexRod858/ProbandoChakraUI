import React from 'react';
import {
  Container,
  Heading,
  Text,
  Box,
} from '@chakra-ui/react';
import { NavBar } from '../components/navbar';
import { Anuncio } from '../components/anuncio';
import { Anuncio2 } from '../components/anuncio2';
import { Anuncio3 } from '../components/anuncio3';
import { Buscador } from '../components/buscador';
import { Orden } from '../components/orden';
import { ChevronDownIcon } from '@chakra-ui/icons';

function Home() {

  return (
    <div>
      <Container maxW="980px">
        <NavBar></NavBar>
        <Text fontSize="sm">
          Explora Mil anuncios <ChevronDownIcon /> Motor
        </Text>
        <Box pt={3}>
          <Heading fontSize="xl">Motor</Heading>
        </Box>
        <Buscador/>
        <hr />
        <Orden/>
        <Anuncio />
        <Anuncio2 />
        <Anuncio3 />
      </Container>
    </div>
  );
}

export default Home;
