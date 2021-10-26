import React from 'react';
import { HStack,Text, VStack, Box} from "native-base"
import { Heading, ChevronRightIcon } from 'native-base';
import { Avatar } from 'native-base';

export default function ListAssets(props) {
 
    return (
        <VStack px={5} py={2}>
        <Box rounded='xl' w='full' shadow={2} p={2} bg='orange.100'>
        <HStack space={4} justifyContent='space-between' alignItems='center'>
        <HStack space={2} alignItems='center'>
        <Avatar bg="black">{props.ticker.slice(0,5)}</Avatar>
        <VStack justifyContent='center' w='2/3' alignItems='flex-start'>    
        <Text fontSize="xs" color='gray.500'>{props.name}</Text>
        <Heading color='teal.500'>${props.value}</Heading>
        </VStack>
        </HStack>
        <ChevronRightIcon color='gray.300' size={7}/>
        </HStack>
        </Box>
        </VStack>
        );
    }