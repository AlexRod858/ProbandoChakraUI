// import { ReactNode } from 'react';
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
// 
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaRegHeart } from 'react-icons/fa'
import { AiOutlineMessage } from 'react-icons/ai'
import { BsBell } from 'react-icons/bs'
import { AiOutlinePlusSquare } from 'react-icons/ai'


export function NavBar() {
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
            <Stack direction={'row'} spacing={0}>
              <Button>
                <Icon boxSize='5' as={FaRegHeart} />
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
                   <ChevronDownIcon boxSize='6'></ChevronDownIcon>

                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                    
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}