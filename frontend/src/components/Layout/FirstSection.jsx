import { Box, Button, Flex, HStack, Heading, Image, Text, Link as ChakraLink } from "@chakra-ui/react";
import landingPageImage from '../../assets/landing_image.png'
import {Link as ReactRouterLink} from 'react-router-dom';

const FirstSection = () => {
    return(
        <Box backgroundColor='landingbg.100'>
            <Box className="container">
                <Flex p={'4rem'}>
                    <HStack spacing={'20'}>
                        <Box flex='0 0 50%'>
                            <Image maxW={'400px'} margin={'0 auto'} borderRadius={'10px'} src={landingPageImage} />
                        </Box>
                        <Box flex='0 0 35%'>
                            <Heading lineHeight={'1'} mb={'30px'} fontSize={'7xl'} color={"white"}>Schedule <br />like a <span style={{color: '#231F20'}}>pro.</span></Heading>
                            <Text fontSize={'2xl'} color={'white'}>Appointy empowers independent beauty, wellness, and lifestyle professionals to grow their businesses with ease and consistency</Text>
                            <ChakraLink as={ReactRouterLink} to={'/signup'}>
                                <Button mt={'2rem'} bg={"white"} color='landingbg.100'>Get Started</Button>
                            </ChakraLink>
                        </Box>
                    </HStack>  
                </Flex>
            </Box>
        </Box>
    )
}

export default FirstSection;