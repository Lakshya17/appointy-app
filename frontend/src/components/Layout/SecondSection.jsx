import { Box, Card, Flex, Heading, Image, Text } from "@chakra-ui/react";

import Image1 from '../../assets/image_1.png';
import Image2 from '../../assets/image_2.png';
import Image3 from '../../assets/image_3.png';

const SecondSection = () => {

    const elements = [
        {
            image: Image1,
            title: 'Online Appointment Scheduling',
            text: '2meetup saves you time and keeps track of your clients'
        },
        {
            image: Image2,
            title: 'Messenger reminders',
            text: '2meetup finds a client in Telegram or WhatsApp and reminds about the meeting'
        },
        {
            image: Image3,
            title: 'Coach CRM',
            text: 'Client log, contacts, notes and more'
        }
    ]

    return(
        <>
            <Box>
                <Box className="container">
                    <Flex py={'5rem'} gap={'5rem'}>
                        {
                            elements.length > 0 ? 
                                elements.map((element, index) => 
                                <Cards 
                                    key={index} 
                                    image={element.image}
                                    title={element.title}
                                    text={element.text}
                                />) : 
                                (<Heading>Not Found</Heading>)
                        }
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

function Cards({image, title, text}){
    return(
        <Box justifyContent={'center'} alignItems={'center'} textAlign={'center'} flex={'0 1 33.33%'}>
            <Image margin={'0 auto'} w={'100%'} maxW={'70px'} src={image} />
            <Heading mt={'2rem'}  mb={'1rem'} fontSize={'2xl'} >{title}</Heading>
            <Text maxW={'80%'} margin={'0 auto'}>{text}</Text>
        </Box>
    )
}

export default SecondSection;