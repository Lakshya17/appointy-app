import { useState } from 'react';
import {Box, Flex, Button, Checkbox, FormControl, FormLabel, Heading, Input , Link as ChakraLink, Text, VStack} from '@chakra-ui/react'
import bg from '../../assets/mainbg.png';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast, Bounce} from 'react-toastify';

const SignUp = () => {

    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const signupFormHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/v1/signup', {email}, {
            headers: {
                "Content-Type": 'application/json'
            }
        })
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
        if(response.data.status == 'warning'){
        toast.warn(response.data.message, {
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
        } catch (error) {
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
                        <Heading borderBottom={'1px'} pb={'10px'}> Sign up with  Appointy Center</Heading>
                        <Text>Enter your email to get started.</Text>
                        <form>
                            <FormControl my={'20px'}>
                                <FormLabel>Email Address</FormLabel>
                                <Input 
                                    color={'black'}
                                    bgColor={'white'} 
                                    type='email'
                                    value={email}    
                                    onChange={(e) => setEmail(e.target.value)}
                                    required='required'
                                />
                            </FormControl>
                            <Button onClick={signupFormHandler} w={'100%'} mt={'10px'}>Get Started</Button>
                        </form>
                        <Text my={'20px'}>OR</Text>
                        <Box>
                            <Text>Already have an account?  <ChakraLink as={ReactRouterLink} to={'/signin'} textDecoration={'underline'}>Login</ChakraLink></Text>
                        </Box>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    )
}

export default SignUp