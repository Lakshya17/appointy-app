import React, { useState } from 'react';
import {Box, Flex, Button, Checkbox, FormControl, FormLabel, HStack, Heading, Input, Link as ChakraLink, Text, VStack} from '@chakra-ui/react'
import bg from '../../assets/mainbg.png';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast, Bounce} from 'react-toastify'

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const signinFormHandler = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/api/v1/signin', {email, password}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response)
            if(response.data.status == 'error'){
                toast.error(response.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    style: {
                        color: 'black',
                      },
                    });
            }
            if(response.data.status == 'success'){
                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    style: {
                        color: 'black',
                      },
                    });
                    navigate('/')
                }
        }catch(error){
            toast.error(error.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                style: {
                    color: 'black',
                  },
                });
        }
    }

    return(
        <Flex alignItems={'center'} justifyContent={'flex-end'} bgImage={bg} bgSize="cover" bgPosition="center" bgRepeat="no-repeat" w="100%" h="700px">
            <Box className='container' mr={'10%'}>
                <Box ml={'auto'} justifyContent={'flex-end'} alignItems={'center'} color={'white'}>
                    <VStack>
                        <Heading borderBottom={'1px'} pb={'10px'}> Sign in to Appointy Center</Heading>
                        <Text>By continuing, you agree to our Terms of Use and Privacy Policy.</Text>
                        <form>
                            <FormControl my={'20px'}>
                                <FormLabel>Email Address</FormLabel>
                                <Input 
                                    bgColor={'white'} 
                                    type='email'
                                    color={'black'}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}    
                                />
                            </FormControl>
                            <FormControl mt={'20px'} mb={'10px'}>
                                <FormLabel>Password</FormLabel>
                                <Input 
                                    bgColor={'white'} 
                                    type='password' 
                                    color={'black'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FormControl>
                            <HStack justifyContent={'space-between'}>
                                <Checkbox>Remember Me</Checkbox>
                                <ChakraLink as={ReactRouterLink}>Forgot Password ?</ChakraLink>
                            </HStack>
                            <Button onClick={signinFormHandler} w={'100%'} mt={'20px'}>Login</Button>
                        </form>
                        <Text my={'20px'}>OR</Text>
                        <Box>
                            <Text>Don’t have an account? <ChakraLink as={ReactRouterLink} to={'/signup'} textDecoration={'underline'}>Sign up</ChakraLink></Text>
                        </Box>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    )
}

export default Signin