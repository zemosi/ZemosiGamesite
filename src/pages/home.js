import React, { useEffect } from 'react';
import { Fade, Flip } from 'react-reveal';
import Layout from "../common/components/layout";
import { Box, Text, Container, LinkBox, LinkOverlay, Heading, Center, Image, VStack, HStack, Button, Link, Flex, Spacer, Grid, GridItem } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import image1 from '../assets/images/home-img-1.png';
import imageDota from '../assets/images/dota-logo.png';
import imagePubg from '../assets/images/pubg-logo.png';
import image2 from '../assets/images/home-img-2.png';
import imageYoutube from '../assets/images/youtube-logo.png';
import imageTwitch from '../assets/images/twitch-logo.png';
import imageSteam from '../assets/images/steam-logo.png';
import imageSteam1 from '../assets/images/steam-ava-1.png';
import imageSteam2 from '../assets/images/steam-ava-2.png';

export default function Home(props) {
    return ( 
        <>
            <Layout >
                <Container
                    paddingTop="40"
                    paddingX={{base:"7", md:"unset", lg:"unset" }}
                    maxW={{base:"md", md:"lg", lg:"7xl" }} 
                    id="hero"
                    display={{ base: "block", lg: "block" }}
                    >
                    <Fade bottom>
                    <Center>
                        <Box>
                        <Image 
                            src={image1}
                            alt="Gaming"
                            width={{ base: "360px", md: "360px", lg: "640px" }}
                            objectFit="cover"
                            borderRadius="xl"
                            marginRight="10"
                            display={{ base: "none", lg: "block" }}
                            />
                        </Box>
                        <Fade delay={250} bottom>
                        <VStack spacing={{ base:"7", lg:"10" }} textAlign="center">
                            <Heading
                                size="4xl"
                                textColor="white"
                                display={{ base: "none", lg: "block" }}
                                >
                                Greetings&nbsp;new challengers!
                            </Heading>
                            <Heading
                                size="3xl"
                                textColor="white"
                                display={{ base: "block", lg: "none" }}
                                >
                                Greetings new challengers!
                            </Heading>
                            <Text
                                textColor="#7499C5"
                                fontSize={{ base:"xs", md:"md", lg:"md" }}>
                                Do you love to play online games? Come and <br/>have a new experience with me.
                            </Text>
                            <LinkBox>
                                <Button
                                bg="palette.100"
                                textColor="white"
                                size="lg"
                                display={{ base: "none", lg: "block" }}
                                _hover={{
                                    bg:"white",
                                    textColor:"palette.100",
                                    boxShadow:"xl"
                                }}>
                                <LinkOverlay 
                                    href="/#account">
                                    Let's play
                                </LinkOverlay>
                                </Button>
                                <Button
                                bg="palette.100"
                                textColor="white"
                                size="sm"
                                display={{ base: "block", lg: "none" }}
                                _hover={{
                                    bg:"white",
                                    textColor:"palette.100",
                                    boxShadow:"xl"
                                }}>
                                <LinkOverlay 
                                    href="/#account">
                                    Let's play
                                </LinkOverlay>
                                </Button>
                            </LinkBox>
                            <Box>
                            <Fade delay={500} right>
                            <Image 
                                src={image1}
                                alt="Gaming"
                                width={{ base: "360px", md: "360px", lg: "640px" }}
                                objectFit="cover"
                                borderRadius="xl"
                                marginRight="10"
                                display={{ base: "block", lg: "none" }}
                                />
                            </Fade>
                            </Box>
                        </VStack>
                        </Fade>
                    </Center>
                    </Fade>
                </Container>
                
                <Container
                    paddingTop="20"
                    paddingX={{base:"7", md:"unset", lg:"unset" }}
                    maxW={{base:"md", md:"lg", lg:"7xl"}} 
                    id="favGames"
                    display={{ base: "block", lg: "block"}}
                    >
                        <VStack>
                            <Fade delay={500} left>
                            <Box>
                                <Heading
                                    size="lg"
                                    textColor="white">
                                    My Favorite Games
                                </Heading>
                            </Box>
                            </Fade>
                            <Box
                                textColor="white"
                                paddingTop="7">
                                <Flip delay={1000} top>
                                <Grid 
                                    templateRows={{ base:"repeat(1, 1fr)", lg:"repeat(1, 1fr)" }}
                                    templateColumns={{ base:"repeat(1, 1fr)", lg:"repeat(5, 1fr)" }}
                                    gap={{ base:4, lg:10 }}>
                                    
                                    <GridItem colSpan={{ base:1, lg:2 }}>
                                    <Box
                                        bg="palette.500"
                                        padding="7"
                                        borderRadius="2xl"
                                        height="full"
                                        _hover={{
                                            bg:"palette.300",
                                            boxShadow:"xl"
                                        }}>
                                        <HStack>
                                            <Image 
                                                src={imageDota}
                                                width={{ base:"40px", lg:"80px" }} />
                                            <Box
                                                paddingLeft="4"
                                                justify="center"
                                                width="full"
                                                >
                                                <VStack>
                                                    <Text textAlign="center" fontWeight="semibold" fontSize={{ base:"md", lg:"xl" }}>Dota 2</Text>
                                                    <Text fontWeight="light" fontSize={{ base:"sm", lg:"md" }}>~4,000hrs playtime</Text>
                                                </VStack>
                                            </Box>
                                        </HStack>
                                    </Box>
                                    </GridItem>
                                    <GridItem rowSpan={{ base:1, lg:1 }} colSpan={{ base:1, lg:3 }}>
                                    <Center
                                        bg="palette.500"
                                        padding="7"
                                        borderRadius="2xl"
                                        height="full"
                                        _hover={{
                                            bg:"palette.300",
                                            boxShadow:"xl"
                                        }}>
                                        <HStack
                                            paddingTop="2">
                                            <Image 
                                                src={imagePubg}
                                                width={{ base:"40px", lg:"80px" }} />
                                            <Box
                                                paddingLeft="4"
                                                >
                                                <VStack>
                                                    <Text textAlign="center" fontWeight="semibold" fontSize={{ base:"md", lg:"xl" }}>PlayerUnknown's Battlegrounds</Text>
                                                    <Text fontWeight="light" fontSize={{ base:"sm", lg:"md" }}>~1,400hrs playtime</Text>
                                                </VStack>
                                            </Box>
                                        </HStack>
                                    </Center>
                                    </GridItem>
                                </Grid>
                                </Flip>
                            </Box>
                        </VStack>
                </Container>
                
                <Container
                    paddingTop={{ base: "10", lg: "20"}}
                    paddingX={{base:"7", md:"unset", lg:"unset" }}
                    maxW={{base:"md", md:"lg", lg:"7xl"}} 
                    id="content"
                    display={{ base: "block", lg: "block"}}
                    >
                    <Center
                        align="center">
                        <Fade delay={1000} left>
                        <VStack 
                            spacing={10} 
                            textAlign="center" 
                            marginRight={{ base:"0", lg:"20"}}>
                            <Heading
                                size="4xl"
                                textColor="white"
                                display={{ base: "none", lg: "block"}}>
                                Enjoy my gaming content and livestream
                            </Heading>
                            <Heading
                                size="3xl"
                                textColor="white"
                                display={{ base: "block", lg: "none"}}>
                                Enjoy my gaming content and livestream
                            </Heading>
                            <HStack
                                justify="center"
                                spacing={4}>
                                <LinkBox>
                                    <Button
                                        bg="#FF0000"
                                        textColor="white"
                                        size="lg"
                                        _hover={{
                                            boxShadow:"outline"
                                        }}
                                        display={{ base: "none", lg: "block"}}>
                                    <HStack>
                                    <Image src={imageYoutube} h="32px" marginRight="2"/>
                                    <LinkOverlay href="https://www.youtube.com/channel/UCb192vBYUGDKwVsk1HxuRXw" target="_blank" rel = "noopener noreferrer">Zemosi</LinkOverlay>
                                    </HStack>
                                    </Button>
                                    <Button
                                        bg="#FF0000"
                                        textColor="white"
                                        size="md"
                                        _hover={{
                                            boxShadow:"outline"
                                        }}
                                        display={{ base: "block", lg: "none"}}>
                                    <HStack>
                                    <Image src={imageYoutube} h="16px" marginRight="2"/>
                                    <LinkOverlay href="https://www.youtube.com/channel/UCb192vBYUGDKwVsk1HxuRXw" target="_blank" rel = "noopener noreferrer">Zemosi</LinkOverlay>
                                    </HStack>
                                    </Button>
                                </LinkBox>
                                <LinkBox>
                                    <Button
                                        bg="#5A3E85"
                                        textColor="white"
                                        size="lg"
                                        _hover={{
                                            boxShadow:"outline"
                                        }}
                                        display={{ base: "none", lg: "block"}}>
                                    <HStack>
                                    <Image src={imageTwitch} h="32px" marginRight="2"/>
                                    <LinkOverlay href="https://www.twitch.tv/zemosi" target="_blank" rel = "noopener noreferrer">ttv/zemosi</LinkOverlay>
                                    </HStack>
                                    </Button>
                                    <Button
                                        bg="#5A3E85"
                                        textColor="white"
                                        size="md"
                                        _hover={{
                                            boxShadow:"outline"
                                        }}
                                        display={{ base: "block", lg: "none"}}>
                                    <HStack>
                                    <Image src={imageTwitch} h="16px" marginRight="2"/>
                                    <LinkOverlay href="https://www.twitch.tv/zemosi" target="_blank" rel = "noopener noreferrer">ttv/zemosi</LinkOverlay>
                                    </HStack>
                                    </Button>
                                </LinkBox>

                            </HStack>
                        </VStack>
                        </Fade>
                        <Fade delay={250} bottom>
                        <Image 
                            src={image2}
                            alt="Gaming"
                            width={{ base: "360px", md: "480px", lg: "640px" }}
                            objectFit="cover"
                            borderRadius="xl"
                            display={{ base: "none", lg: "block"}}/>
                        </Fade>
                    </Center>
                </Container>
                
                <Container
                    paddingTop="20" 
                    marginBottom={{ base: "10", md: "15", lg: "20"}}
                    maxW="xl"
                    id="account"
                    textAlign="center"
                    display={{ base: "block", lg: "block"}}
                    >
                        <Fade bottom>
                        <Center>
                            <Box
                                bg="palette.500"
                                padding={{base:"4", md:"7", lg:"10"}} 
                                borderRadius="2xl">
                                <Heading
                                    size="lg"
                                    textColor="white">
                                    Add My Account
                                </Heading>
                                <VStack
                                    marginTop={{base:"4", md:"7", lg:"10"}} 
                                    spacing={4}>
                                    <LinkBox>
                                        <Box>
                                            <Grid 
                                                templateColumns="repeat(8, 1fr)" 
                                                alignItems="center"
                                                bg="#1B2838"
                                                padding={{ base:"4", md:"7" }} 
                                                borderRadius="2xl"
                                                _hover={{
                                                    bg:"#133968",
                                                    shadow:"2xl"
                                                }}>
                                                <GridItem colSpan={2}>
                                                    <Image src={imageSteam1} h={{ base:"48px", md:"64px" }} marginRight="2"/>
                                                </GridItem>
                                                <GridItem colSpan={4}>
                                                    <LinkOverlay 
                                                    textColor="white"
                                                    href="https://steamcommunity.com/id/zemosiii/" target="_blank" rel = "noopener noreferrer" >
                                                        Zemosi-
                                                    </LinkOverlay>
                                                </GridItem>
                                                <GridItem colSpan={2}>
                                                    <Image src={imageSteam} h={{ base:"48px", md:"64px" }} marginRight="2"/>
                                                </GridItem>
                                            </Grid>
                                        </Box>
                                    </LinkBox>
                                    <LinkBox>
                                        <Box>
                                            <Grid 
                                                templateColumns="repeat(8, 1fr)" 
                                                alignItems="center"
                                                bg="#1B2838"
                                                padding={{ base:"4", md:"7" }} 
                                                borderRadius="2xl"
                                                _hover={{
                                                    bg:"#133968",
                                                    shadow:"2xl"
                                                }}>
                                                <GridItem colSpan={2}>
                                                    <Image src={imageSteam2} h={{ base:"48px", md:"64px" }}  marginRight="2"/>
                                                </GridItem>
                                                <GridItem colSpan={4}>
                                                    <LinkOverlay 
                                                    textColor="white"
                                                    href="https://steamcommunity.com/id/zemosi13/" target="_blank" rel = "noopener noreferrer" >
                                                        angop
                                                    </LinkOverlay>
                                                </GridItem>
                                                <GridItem colSpan={2}>
                                                    <Image src={imageSteam} h={{ base:"48px", md:"64px" }} marginRight="2"/>
                                                </GridItem>
                                            </Grid>
                                        </Box>
                                    </LinkBox>
                                </VStack>
                            </Box>
                        </Center>
                        </Fade>
                    </Container>
                
            </Layout>
        </>
    );
}