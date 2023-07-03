import React, { useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
  Icon,
  Image,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaRegHeart, FaRegUser, FaListUl, FaHeart } from 'react-icons/fa';
import { AiOutlineMessage, AiOutlineQuestionCircle, AiOutlineWallet, AiOutlineShop, AiOutlinePlusSquare } from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';
import { GoPackage } from 'react-icons/go';
import { RiLogoutBoxRLine } from 'react-icons/ri';

export function NavBar() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/*  */}
          <Box>
            <Image maxW='200px' boxSize='sm' height={32} src='https://www.adevinta.com/app/uploads/sites/2/2021/10/milanuncios.png' />     
          </Box>
          {/*  */}
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={2}>
              <Button onClick={handleFavoriteClick}>
                {isFavorite ? (
                  <Icon boxSize='5' as={FaHeart} color="red" />
                ) : (
                  <Icon boxSize='5' as={FaRegHeart} />
                )}
              </Button>
              {/*  */}
              <Button>
                <Icon boxSize='5' as={AiOutlineMessage} />
              </Button>
              {/*  */}
              <Button>
                <Icon boxSize='5' as={BsBell} />
              </Button>
              <Menu>
                <Button leftIcon={<Icon boxSize='5' as={AiOutlinePlusSquare} />} colorScheme='yellow'>Publicar</Button>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar  ml={2} 
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                  <ChevronDownIcon boxSize='6' />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <MenuItem>
                    <Icon mr={2} boxSize='4' as={FaRegUser} />
                    Mi cuenta
                  </MenuItem>
                  <MenuItem>
                    <Icon mr={2} boxSize='4' as={FaListUl} />
                    Mis anuncios
                  </MenuItem>
                  <MenuItem>
                    <Icon mr={2} boxSize='4' as={FaRegHeart} />
                    Mis favoritos
                  </MenuItem>
                  <MenuItem>
                    <Icon mr={2} boxSize='4' as={AiOutlineMessage} />
                    Mis mensajes
                  </MenuItem>
                  <MenuItem>
                    <Icon mr={2} boxSize='4' as={BsBell} />
                    Mis alertas
                  </MenuItem>
                  <MenuItem>
                    <Icon mr={2} boxSize='4' as={GoPackage} />
                    Mis envíos
                  </MenuItem>
                  <MenuItem>
                    <Icon mr={2} boxSize='4' as={AiOutlineWallet} />
                    Mi monedero
                  </MenuItem>
                  <MenuItem>
                    <Icon mr={2} boxSize='4' as={AiOutlineShop} />
                    ¿Eres profesional?
                  </MenuItem>
                  <MenuItem>
                    <Icon mr={2} boxSize='4' as={AiOutlineQuestionCircle} />
                    Ayuda
                  </MenuItem>
                  <MenuItem>
                    <Icon mr={2} boxSize='4' as={RiLogoutBoxRLine} />
                    Cerrar sesión
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
