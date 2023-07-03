import React from 'react';
import { Container, Heading, Text, InputGroup, InputLeftElement, Input, Box, Button, Flex, Badge, useBreakpointValue, HStack } from '@chakra-ui/react';
import { NavBar } from '../components/navbar';
import { Search2Icon, ChevronDownIcon } from '@chakra-ui/icons';
import { VscSettings } from "react-icons/vsc";
import { Anuncio } from '../components/anuncio';

function Home() {
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const justifyContent = useBreakpointValue({ base: 'center', md: 'space-between' });
  const alignItems = useBreakpointValue({ base: 'center', md: 'flex-end' });

  return (
    <div>
      <Container maxW='980px'>
        <NavBar></NavBar>
        <Text fontSize='sm'>Explora Mil anuncios <ChevronDownIcon /> Motor </Text>
        <Box pt={3}>
          <Heading fontSize='xl'>Motor</Heading>
        </Box>
        <Box pt={3} mb={4}>
          <Flex
            flexDirection={flexDirection}
            justifyContent={justifyContent}
            alignItems={alignItems}
          >
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <Search2Icon />
              </InputLeftElement>
              <Input type='tel' placeholder='Buscar en Motor' />
            </InputGroup>
            <HStack>
              <Button
                leftIcon={<VscSettings />}
                rightIcon={<ChevronDownIcon />}
                variant='outline'
                ml={2}
              // mt={{ base: 2, md: 0 }}
              >
                Filtros
                <Badge colorScheme='green' fontSize='xs' variant='subtle' ml={1}>
                  1
                </Badge>
              </Button>
            </HStack>
          </Flex>
        </Box>
        <hr/>
        <Anuncio/>
        {/* SEGUIR AQUI HACIENDO PAGINA */}
      </Container>
    </div>
  );
}

export default Home;
