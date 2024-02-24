import { Box, Flex, HStack, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import FooterLogo from '../../assets/footer_logo.png'

const Footer = () => {
    return(
        <Box bgColor='footerbg.100' color={'white'} >
            <Box className="container">
                <Flex gridGap={'50px'} alignItems={'flex-start'} justifyContent={'space-between'}>
                    <Box w={'25%'} py={'10'}>
                        <Image mb={5} src={FooterLogo} />
                        <Text>
                        Lorem Ipsum is simply dummy text of the printing
                        </Text>
                    </Box> 
                    <Box  w={'25%'} padding={'10'}>
                        <Heading fontSize={'xl'} mb={'3'}>Community</Heading>
                        <VStack alignItems={'flex-start'}>
                            <Link>Community</Link>
                        </VStack>
                    </Box> 
                    <Box  w={'25%'} padding={'10'}>
                        <Heading fontSize={'xl'} mb={'3'}>Site Map</Heading>
                        <VStack alignItems={'flex-start'}>
                            <Link>Home</Link>
                            <Link>Solutions</Link>
                            <Link>Team & Companies</Link>
                            <Link>Pricing</Link>
                            <Link>Resources</Link>
                        </VStack>    
                    </Box> 
                    <Box  w={'25%'} padding={'10'}>
                        <Heading fontSize={'xl'} mb={'3'}>Contacts</Heading>
                        <VStack alignItems={'flex-start'}>
                            <Text>+555 5678 12340</Text>
                            <Text>info@yourmail.com</Text>
                            <Text>appointy.pro.com</Text>
                        </VStack>    
                    </Box> 
                </Flex>
            </Box>
            <Box borderTop={'1px'} borderColor={'white'}>
               <Box className="container">
                    <Flex py={'4'} justifyContent={'space-between'}>
                        <Box>
                            <Text>Copyright © 2023 CipherSol. All Rights Reserved</Text>
                        </Box>
                        <HStack>
                            <Link>Terms of Service</Link>
                            <Link>Privacy Policy</Link>
                            <Link>Login & Register</Link>
                        </HStack>
                    </Flex>
               </Box>
            </Box>
        </Box>
    )
}

export default Footer;