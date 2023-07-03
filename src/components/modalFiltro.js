import React, { useState } from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  VStack,
  HStack,
  Icon,
  Switch,
  Flex,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FcShipped } from 'react-icons/fc';
import { BiEuro } from 'react-icons/bi';

export function CustomModal({ isOpen, onClose }) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [activeVendedor, setActiveVendedor] = useState('Todos');
  const [activeAnuncio, setActiveAnuncio] = useState('Todos');

  const handleVendedorButtonClick = (buttonName) => {
    setActiveVendedor(buttonName);
  };

  const handleAnuncioButtonClick = (buttonName) => {
    setActiveAnuncio(buttonName);
  };

  return (
    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Filtros</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={4} align="start">
            <Button colorScheme='white' textColor={'blackAlpha.800'} size="sm" w="full" justifyContent="space-between" rightIcon={<Icon as={ChevronRightIcon} />}>
              Todas las categorías
            </Button>
            <Button colorScheme='white' textColor={'blackAlpha.800'} size="sm" w="full" justifyContent="space-between" rightIcon={<Icon as={ChevronRightIcon} />}>
              Toda España
            </Button>
            <FormControl>
              <Flex justifyContent="space-between" alignItems="center">
                <FormLabel htmlFor="email-alerts" mb="2" mt="2">
                  <Icon mr={2} boxSize="6" as={FcShipped} />
                  Solo anuncios con envíos
                </FormLabel>
                <Switch id="email-alerts" />
              </Flex>
            </FormControl>

            <VStack spacing={2} align="start">
              <FormControl>
                <FormLabel>Precio</FormLabel>
                <HStack spacing={0}>
                  <InputGroup>
                    <Input placeholder="Desde" />
                    <InputRightElement pointerEvents="none" children={<BiEuro />} />
                  </InputGroup>
                  <InputGroup>
                    <Input placeholder="Hasta" />
                    <InputRightElement pointerEvents="none" children={<BiEuro />} />
                  </InputGroup>
                </HStack>
              </FormControl>

              <FormControl>
                <FormLabel>Tipo de vendedor</FormLabel>
                <HStack spacing={0}>
                  <Button
                    colorScheme={activeVendedor === 'Todos' ? 'white' : undefined}
                    textColor={activeVendedor === 'Todos' ? 'green.400' : undefined}
                    flex="1"
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    onClick={() => handleVendedorButtonClick('Todos')}
                  >
                    Todos
                  </Button>
                  <Button
                    flex="1"
                    colorScheme={activeVendedor === 'Particular' ? 'white' : undefined}
                    textColor={activeVendedor === 'Particular' ? 'green.400' : undefined}
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    onClick={() => handleVendedorButtonClick('Particular')}
                  >
                    Particular
                  </Button>
                  <Button
                    flex="1"
                    colorScheme={activeVendedor === 'Profesional' ? 'white' : undefined}
                    textColor={activeVendedor === 'Profesional' ? 'green.400' : undefined}
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    onClick={() => handleVendedorButtonClick('Profesional')}
                  >
                    Profesional
                  </Button>
                </HStack>
              </FormControl>
            </VStack>

            <VStack spacing={2} align="start">
  <FormControl>
    <FormLabel>Tipo de anuncio</FormLabel>
    <HStack spacing={0} w="full">
      <Button
        colorScheme={activeAnuncio === 'Todos' ? 'white' : undefined}
        textColor={activeAnuncio === 'Todos' ? 'green.400' : undefined}
        flex="1"
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        onClick={() => handleAnuncioButtonClick('Todos')}
      >
        Todos
      </Button>
      <Button
        flex="1"
        colorScheme={activeAnuncio === 'Oferta' ? 'white' : undefined}
        textColor={activeAnuncio === 'Oferta' ? 'green.400' : undefined}
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        onClick={() => handleAnuncioButtonClick('Oferta')}
      >
        Oferta
      </Button>
      <Button
        flex="1"
        colorScheme={activeAnuncio === 'Demanda' ? 'white' : undefined}
        textColor={activeAnuncio === 'Demanda' ? 'green.400' : undefined}
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        onClick={() => handleAnuncioButtonClick('Demanda')}
      >
        Demanda
      </Button>
    </HStack>
  </FormControl>
</VStack>

          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button textColor={'green.400'} mr={3}>
            Limpiar filtros
          </Button>
          <Button colorScheme="green" onClick={onClose}>
            Aplicar filtros
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
