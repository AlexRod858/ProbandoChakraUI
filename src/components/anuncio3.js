import React from 'react';
import {
  Badge,
  Button,
  Flex,
  Box,
  Image,
  Center,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export function Anuncio3() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Center pt={6}>
      <Link
        as={Stack}
        borderWidth="1px"
        borderRadius="lg"
        w={{ lg: '100%', md: '540px' }}
        height={{ sm: '476px', md: '16rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="md"
        padding={0}
        to="/anuncio"
        _hover={{
            textDecoration: 'none',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)' 
          }}
      >
        <Flex flex={1}>
          <Image
            objectFit="cover"
            boxSize="100%"
            src={'https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2020/12/Mitsubishi-L200-Gen-4.jpg'}
          />
        </Flex>
        <Stack
          flex={2}
          flexDirection="column"
          justifyContent="top"
          alignItems="left"
          p={4} 
        >
          <Flex justifyContent="space-between" alignItems="center" mb={2}>
            <Heading fontWeight={400} fontSize={'md'} fontFamily={'body'}>
              MITSUBISHI L200 GEN4
            </Heading>
            <Button
              variant="ghost"
              size="xl"
              onClick={handleFavoriteClick}
            >
              {isFavorite ? <AiFillHeart color="green" /> : <AiOutlineHeart />}
            </Button>
          </Flex>
          <Heading fontSize={'xl'} fontFamily={'body'}>
            19.000 €
          </Heading>
          <Flex alignItems="center" mb={4}>
            <HiOutlineLocationMarker />
            <Text size="xs" ml={1}>
              Cuenca (Cuenca)
            </Text>
          </Flex>
          <Text
            textAlign={'left'}
            color={useColorModeValue('gray.700', 'gray.400')}
          >
            Lo vendo por cambio a furgoneta camperizada. Perfecta como vehículo de trabajo o para camperizar. 68cv, 145214 km reales. 
            ITV recién pasada, correa distribución nueva, 4 filtros calentadores nuevos. Características: 2 plazas, 4 puertas, claraboya, 
            bola para remolque, baca. Se encuentra en Valladolid. Posibilidad de financiar.
          </Text>
        </Stack>
      </Link>
    </Center>
  );
}
