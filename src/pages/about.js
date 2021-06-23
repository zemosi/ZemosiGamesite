import React from 'react';
import { Fade, Roll, Flip } from 'react-reveal';
import Layout from '../common/components/layout';
import { Box, Center, Container, Image, Heading, Text, VStack } from '@chakra-ui/react';

import profileImg from '../assets/images/profile-img.png';

export default function About(props) {
    return (
        <>
            <Layout >
                <Container 
                    maxW="7xl" 
                    paddingTop={{ base: "7", md: "20", lg: "40" }} 
                    // paddingLeft={{ base: "7", md: "20", lg: "20" }} 
                    // paddingRight={{ base: "7", md: "20", lg: "20" }} 
                    // paddingBottom={{ base: "20" }} 
                    minHeight="90vh"
                    textColor="white">
                        <Center>
                            <VStack
                                spacing={4}>
                                <Roll top>
                                <Image 
                                src={profileImg} 
                                alt="Ragajiwa Asa"
                                marginTop={{ base: "20", md: "20", lg: "0" }} 
                                boxSize={{ base: "160px", md: "240px", lg: "240px" }}
                                objectFit="cover"
                                borderRadius="full"
                                shadow="2xl"/>
                                </Roll>
                                <Flip delay={500} top cascade>
                                <Heading
                                    size="lg"
                                    >
                                    Ragajiwa Asa
                                </Heading>
                                <Text fontWeight="light">
                                    Nick: Zemosi-
                                </Text>
                                <Text fontWeight="light">
                                    Age: 20y.o.
                                </Text>
                                </Flip>
                            </VStack>
                        </Center>
                        <Fade delay={500} bottom>
                        <Center>
                            <Box
                            marginTop={{ base: "10", md: "15", lg: "20"}}
                            marginBottom={{ base: "10", md: "15", lg: "20"}}
                            // paddingLeft={{ base: "7", md: "20", lg: "20" }} 
                            // paddingRight={{ base: "7", md: "20", lg: "20" }} 
                            padding={{ base: "7", md: "20", lg: "20"}}
                            borderRadius="2xl"
                            bgColor="palette.500"
                            bgGradient="50%">
                                <Fade delay={750} bottom cascade>
                                <Heading
                                    size="lg">
                                    A bit of my gaming journey...
                                </Heading>
                                <Text
                                    marginTop="7"
                                    textAlign="justify"
                                    fontSize={{ base: "sm", md: "md", lg: "unset"}}>
                                I have played games since I was 4 years old. Started with mobile phone games, like Snakes and Bounce. I finished Age of Empires, Age of Empires II, NFS Underground, and NFS Underground 2 before I went to elementary school on my family’s old computer. My parents bought me PS2 when I was in the 2nd Grade. Then, I got my current computer when I was in highschool.<br /><br />
I started playing Dota 2 in 2017 and a year after I made a team called “GrimM” with my highschool friends to compete in a tournament. We won our first ever tournament in Jogja Expo Center. In 2019, I created GrimM PUBG to compete in PUBG esports scene. I occasionally compete in esports ever since.<br /><br/>
In 2020, I got a chance to represent UGM in the International Esports Festival 2020 PUBG tournament to compete against another university from South Korea, China, Japan, Vietnam, Malaysia, and Philippines. It held in Gangnam, South Korea, but unfortunately because of the pandemic we couldn’t flew there and had to play online.
                                </Text>
                                </Fade>
                            </Box>

                        </Center>
                        </Fade>
                </Container>
            </Layout>
        </>
    );
}