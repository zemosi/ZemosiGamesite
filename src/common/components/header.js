import React, { useState, useEffect } from 'react';
import { Box, Heading, Flex, Button, useDisclosure, Spacer, color } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Text,
    Divider
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Header(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { innerWidth: width, innerHeight: height } = window;

    return ( 
        <>
        <Flex
            as="header"
            align="center"
            position="fixed"
            zIndex="9999"
            padding="1.5rem"
            width="full"
            bgGradient="linear(to-b, palette.300, palette.900)"
            textColor="white"
            {...props}
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="md" letterSpacing={"-.0.01rem"} fontSize={{ base: "sm", md: "md", sm: "md", lg: "md" }}>
                    Zemosi
                </Heading>
                <Box
                    display={{ base: "flex", md: "flex" }}
                    mt={{ base: 0, md: 0 }}
                    pl="12"
                >
                    <Button 
                        mt={{ base: 0, md: 0 }} 
                        mr={6} 
                        display="block" 
                        size="xs" 
                        backgroundColor="transparent" 
                        _hover={{
                            textColor:"palette.600",
                            backgroundColor:"white"
                        }}
                    >
                    <Link to="/">Home</Link> 
                    </Button>
                    <Button 
                        mt={{ base: 0, md: 0 }} 
                        mr={6} 
                        display="block" 
                        size="xs" 
                        backgroundColor="transparent" 
                        _hover={{
                            textColor:"palette.600",
                            backgroundColor:"white"
                        }}
                    >
                    <Link to="/esports">Esports</Link> 
                    </Button>
                    <Button 
                        mt={{ base: 0, md: 0 }} 
                        mr={6} 
                        display="block" 
                        size="xs" 
                        backgroundColor="transparent"
                        _hover={{
                            textColor:"palette.600",
                            backgroundColor:"white"
                        }} 
                    >
                    <Link to="/about">About</Link> 
                    </Button>
                </Box>
            </Flex>
           
            <Spacer />
            <Box display={{ base: "none", md: "none", lg: "none" }}>
                <Button 
                    size="xs" 
                    bg="transparent" 
                    _hover={{
                        textColor:"palette.600",
                        backgroundColor:"white"
                    }}
                    onClick={onOpen}>Menu</Button>
            </Box>
        </Flex>
        <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            size="xs"
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Flex
                        align="center"
                        width="full"
                        wrap="wrap"
                        heigth="full"
                    >
                        <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1">
                            <Text fontSize="xs" paddingX="1" fontWeight="bold"> <Link to="/">Home</Link> </Text>
                        </Box>
                        <Divider />
                        <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1">
                            <Text fontSize="xs" paddingX="1" fontWeight="bold"><Link to="/esports">Esports</Link> </Text>
                        </Box>
                        <Divider />
                        <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1">
                            <Text fontSize="xs" paddingX="1" fontWeight="bold"><Link to="/about">About</Link> </Text>
                        </Box>
                        <Spacer />
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
    );
}
 
export default Header;