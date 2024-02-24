import Logo from '../../assets/appointy_logo.png'
import { Box, Button, Flex, HStack, Image, Link as ChakraLink} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const Header = () => {
    return(
        <div className='container'>
            <Flex maxW={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                <Box m={2}>
                   <ReactRouterLink to={'/'}>
                        <Image w={200} src={Logo}  />
                    </ReactRouterLink>
                </Box>
                <Box>
                    <HStack>
                        <ChakraLink as={ReactRouterLink} px={'5'}>Home</ChakraLink>
                        <ChakraLink as={ReactRouterLink} px={'5'}>Solution</ChakraLink>
                        <ChakraLink as={ReactRouterLink} px={'5'}>Pricing</ChakraLink>
                        <ChakraLink as={ReactRouterLink} px={'5'}>Resource</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to={'/signin'}>
                            <Button px={'5'} bg={'teal'} color={'white'}>Sign In</Button>
                        </ChakraLink>
                    </HStack>
                </Box>
            </Flex>
        </div>
    )
}

export default Header