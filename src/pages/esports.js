import React from 'react';
import { Fade, Flip } from 'react-reveal';
import Layout from "../common/components/layout";
import { Box, Text, Container, List, ListItem, ListIcon, Heading, Center, Image, VStack, HStack, Button, Link, Flex, Spacer, Grid, GridItem } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

import image1 from "../assets/images/esports-img-1.png";
import image2 from "../assets/images/esports-img-2.png";
import imageAchievement from "../assets/images/achievements-img.png";

export default function Esports(props) {
    return (
        <>
            <Layout>
                <Container
                    paddingTop="40" 
                    paddingX={{base:"7", md:"unset", lg:"unset" }}
                    maxW={{base:"md", md:"lg", lg:"7xl" }} 
                    id="hero"
                    display={{ base: "block", lg: "block" }}>
                    <Fade bottom>
                    <Center
                        alignContent="left">
                        <VStack spacing={10} textAlign="center">
                            <Heading
                                size="3xl"
                                textColor="white">
                                Compete in tournaments
                            </Heading>
                            <Text
                                textColor="#7499C5"
                                paddingX={{ base:"4", lg:"20" }}
                                fontSize={{ base:"xs", md:"md", lg:"unset" }}>
                                I’m playing games competitively as well, so here is my experience in esports.
                            </Text>
                            <Image 
                            src={image1}
                            alt="Gaming"
                            width={{ base: "360px", md: "360px", lg: "640px" }}
                            objectFit="cover"
                            borderRadius="xl"
                            marginRight="10"
                            display={{ base: "block", lg: "none" }} />
                        </VStack>
                        <Fade delay={250} right>
                        <Image 
                            src={image1}
                            alt="Gaming"
                            width={{ base: "360px", md: "360px", lg: "640px" }}
                            objectFit="cover"
                            borderRadius="xl"
                            marginRight="10"
                            display={{ base: "none", lg: "block" }} />
                        </Fade>
                    </Center>
                    </Fade>
                </Container>
                <Container
                    paddingTop="20"
                    maxW={{base:"md", md:"lg", lg:"5xl"}} >
                    <VStack>
                        <Fade delay={500} bottom>
                        <Heading
                            size="lg"
                            textColor="white">
                            Achievements
                        </Heading>
                        </Fade>
                        <Fade delay={500} bottom cascade>
                        <Grid 
                            templateRows={{ base:"repeat(4,1fr)", lg:"repeat(3, 1fr)" }}
                            templateColumns={{ base:"repeat(1, 1fr)", lg:"repeat(8, 1fr)" }}
                            gap={7}
                            paddingTop="10">
                                
                                <GridItem rowSpan={{ base:2, lg:3 }} colSpan={{ base:1, lg:5 }}>
                                    <Fade delay={500} clear>
                                    <Box
                                        bg="palette.500"
                                        padding="7" 
                                        align="center"
                                        borderRadius="2xl"
                                        height="full">
                                        <Image 
                                            src={imageAchievement} 
                                            alt="Gaming"
                                            width={{ base: "360px", md: "360px", lg: "480px" }}
                                            objectFit="cover"
                                            borderRadius="xl"/>
                                        <Text
                                            textColor="white"
                                            textAlign="center"
                                            fontSize={{ base:"md", md:"lg", lg:"lg" }}
                                            fontWeight="semibold"
                                            marginTop="7">
                                            1st Place<br/>Dota 2 Highschool Cup Yogyakarta<br/>2018
                                        </Text>
                                    </Box>
                                    </Fade>
                                </GridItem>
                                
                                <GridItem colSpan={{ base:1, lg:3 }}>
                                    <Center
                                        bg="palette.500"
                                        padding="7"
                                        align="center"
                                        borderRadius="2xl"
                                        height="full">
                                        <Text
                                            textColor="white"
                                            textAlign="center"
                                            fontSize={{ base:"md", md:"lg", lg:"lg" }}
                                            fontWeight="semibold">
                                            2nd Place<br/>IES Smartfren Dota 2 Yogyakarta<br/>2020
                                        </Text>
                                    </Center>
                                </GridItem>
                                <GridItem colSpan={{ base:1, lg:3 }}>
                                    <Center
                                        bg="palette.500"
                                        padding="7"
                                        align="center"
                                        borderRadius="2xl"
                                        height="full">
                                        <Text
                                            textColor="white"
                                            textAlign="center"
                                            fontSize={{ base:"md", md:"lg", lg:"lg" }}
                                            fontWeight="semibold">
                                            2nd Place<br/>Dota 2 Solo Mid TGES<br/>2021
                                        </Text>
                                    </Center>
                                </GridItem>
                                
                            </Grid>
                            </Fade>
                    </VStack>
                </Container>
                <Container
                    paddingTop="20" 
                    paddingX={{ base:"7", md:"unset", lg:"unset" }}
                    maxW={{ base:"md", md:"lg", lg:"5xl" }} 
                    id="experience"
                    marginBottom={{ base: "10", md: "15", lg: "20"}}
                    >
                    <Center
                        alignContent="left">
                        <VStack>
                        <Fade delay={0} bottom>
                        
                        <Heading
                            size="lg"
                            textColor="white">
                            Esports Experience
                        </Heading>
                        </Fade>
                        <Fade delay={0} left>
                        <Flex paddingTop="10" align="center" justify="center">
                        <Center 
                            flex={{ base:"1", lg:"2" }}
                            marginRight={{ base:"0", md:"0", lg:"10" }}>
                            <List 
                                spacing={3}
                                bg="palette.500"
                                width="max-content"
                                borderRadius="2xl"
                                padding={{ base:"4", md:"7", lg:"10" }}
                                textColor="white"
                                fontSize={{ base:"xs", md:"md", lg:"lg" }}>
                            <Fade delay={500} top cascade>
                                <ListItem>
                                    <HStack>
                                    <ListIcon as={CheckCircleIcon} color="green.500" />
                                    <Text>
                                        Top 8 MAGE 4 ITS Dota 2 Competition 2018
                                    </Text>
                                    </HStack>
                                </ListItem>
                                <ListItem>
                                    <HStack>
                                    <ListIcon as={CheckCircleIcon} color="green.500" />
                                    <Text>
                                        Top 8 IENC Dota 2 Yogyakarta 2019
                                    </Text>
                                    </HStack>
                                </ListItem>
                                <ListItem>
                                    <HStack>
                                    <ListIcon as={CheckCircleIcon} color="green.500" />
                                    <Text>
                                        Lenovo: Rise of Legion Dota 2 Yogyakarta 2019
                                    </Text>
                                    </HStack>
                                </ListItem>
                                <ListItem>
                                    <HStack>
                                    <ListIcon as={CheckCircleIcon} color="green.500" />
                                    <Text>
                                        6th Place Lenovo: Rise of Legion PUBG 2019
                                    </Text>
                                    </HStack>
                                </ListItem>
                                <ListItem>
                                    <HStack>
                                    <ListIcon as={CheckCircleIcon} color="green.500" />
                                    <Text>
                                        MAGE 5 ITS Dota 2 Competition 2019
                                    </Text>
                                    </HStack>
                                </ListItem>
                                <ListItem>
                                    <HStack>
                                    <ListIcon as={CheckCircleIcon} color="green.500" />
                                    <Text>
                                        Road to IEL University Series UGM 2020
                                    </Text>
                                    </HStack>
                                </ListItem>
                                <ListItem>
                                    <HStack>
                                    <ListIcon as={CheckCircleIcon} color="green.500" />
                                    <Text>
                                        International Esports Festival PUBG 2020
                                    </Text>
                                    </HStack>
                                </ListItem>
                            </Fade>
                            </List>
                            
                        </Center>
                        <Box
                            flex="1"
                            display={{ base: "none", lg: "block"}}>
                            <Fade delay={750} right>
                            <Image 
                                src={image2}
                                alt="Gaming"
                                width={{ base: "360px", md: "480px", lg: "480px" }}
                                objectFit="cover"
                                borderRadius="xl"/>
                            </Fade>

                        </Box>
                        </Flex>
                        </Fade>

                        </VStack>
                        
                    </Center>
                
                </Container>
            </Layout>
        </>
    )
}