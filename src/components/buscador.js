import React from 'react';
import { Badge, Button, Flex, Box, InputGroup, InputLeftElement, Input, HStack } from '@chakra-ui/react';
import { Search2Icon, ChevronDownIcon } from '@chakra-ui/icons';
import { VscSettings } from 'react-icons/vsc';
import { useBreakpointValue } from '@chakra-ui/react';
import { CustomModal } from './modalFiltro';

export function Buscador() {
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const justifyContent = useBreakpointValue({ base: 'center', md: 'space-between' });
  const alignItems = useBreakpointValue({ base: 'center', md: 'flex-end' });

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box pt={3} mb={4}>
      <Flex flexDirection={flexDirection} justifyContent={justifyContent} alignItems={alignItems}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon />
          </InputLeftElement>
          <Input type="tel" placeholder="Buscar en Motor" />
        </InputGroup>
        <HStack>
          <Button leftIcon={<VscSettings />} rightIcon={<ChevronDownIcon />} variant="outline" ml={2} onClick={handleOpenModal}>
            Filtros
            <Badge colorScheme="green" fontSize="xs" variant="subtle" ml={1} borderRadius="full">
  1
</Badge>
          </Button>
        </HStack>
      </Flex>
      <CustomModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
}
