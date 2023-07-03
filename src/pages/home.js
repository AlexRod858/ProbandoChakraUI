import React from 'react';
import {
  Container,
  Heading,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  Button,
  Flex,
  Badge,
  useBreakpointValue,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { NavBar } from '../components/navbar';
import { Search2Icon, ChevronDownIcon } from '@chakra-ui/icons';
import { VscSettings } from 'react-icons/vsc';
import { Anuncio } from '../components/anuncio';
import { Buscador } from '../components/buscador';
import { Orden } from '../components/orden';

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
      </Container>
    </div>
  );
}

export default Home;
