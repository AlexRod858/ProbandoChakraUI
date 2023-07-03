import React from 'react';
import { Text, Button, Flex, Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { useBreakpointValue } from '@chakra-ui/react';

export function Orden() {
  const justifyContent = useBreakpointValue({ base: 'center', md: 'space-between' });
  const alignItems = useBreakpointValue({ base: 'center', md: 'flex-end' });

  return (
<Flex pt={4} justifyContent="space-between" alignItems="center">
          <Box >
            <Text fontSize="sm">+10.000 anuncios</Text>
          </Box>
          <Menu>
          <MenuButton fontSize={14} as={Button} variant="unstyled">
            <InfoOutlineIcon /> Ordenado por{' '}
            <Text as="span" color="green.500">relevancia</Text> <ChevronDownIcon />
          </MenuButton>
            <MenuList>
              <MenuItem>Relevancia</MenuItem>
              <MenuItem>Precio: de menor a mayor</MenuItem>
              <MenuItem>Precio: de mayor a menor</MenuItem>
              <MenuItem>Fecha: más nuevos primero</MenuItem>
              <MenuItem>Fecha: más antiguos primero</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
  );
}
