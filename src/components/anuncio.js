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

export function Anuncio() {
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
            src={'https://i.pinimg.com/736x/31/e8/3f/31e83f200cb0935e17f4e9a08872d689--tractors-mania.jpg'}
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
              SEMBRADOR KVERNELAND OPTIMA HD-7
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
            SEMBRADORA KV MODELO OPTIMA HD-7 CUERPOS
            SIEMBRA DE DISCO
            EXTENSIBLE E HIDRAULICA Y
            CON MARCADORES
            ** NUEVA** PRECIO MAS 21%
          </Text>
        </Stack>
      </Link>
    </Center>
  );
}
