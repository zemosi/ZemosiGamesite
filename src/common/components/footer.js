import React from 'react';
import { Box, Text } from '@chakra-ui/layout';

export default function Footer(props) {
    return (
        <>
            <Box pt="4" pb="4" bottom="0" position="relative" as="footer" textAlign="center" bg="palette.900">
                <Text textColor="white">
                    Copyright 2021 Zemosi
                </Text>
            </Box>
        </>
    )
}