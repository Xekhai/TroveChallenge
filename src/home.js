import React from 'react';
import { Divider, HStack,Text, Image, NativeBaseProvider, VStack, Button, Box} from "native-base"
import { Heading, ChevronDownIcon } from 'native-base';
import {StatusBar} from 'react-native'
import { Circle, AddIcon, ScrollView } from 'native-base';


export default function Home() {
  return (
    <NativeBaseProvider>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <ScrollView>
    <VStack space={4} p={5} pt={10}>
    <HStack space={4} justifyContent='space-between' alignItems='center'>
    <VStack space={2}>
    <Text fontSize="sm" color='gray.500'>Good Morning,</Text>
    <Heading>Joshua Praise</Heading>
    </VStack>
    <Circle borderWidth={1} borderColor={'gray.400'} size={'sm'} bg='gray.100'>
    <ChevronDownIcon color='gray.600' size={10}/>
    </Circle>
    </HStack>

    <VStack space={0}>
    <Image
    roundedTop='xl'
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/tikka-1f350.appspot.com/o/bgimgs%2Fpexels-nick-collins-1293120.jpg?alt=media&token=4b1dcfb2-0d30-480e-bac5-196afe34d8d7"
      }}
      alt="Alternate Text"
      size='xl'
      w='full'
    />
    <Box roundedBottom='xl' w='full' shadow={2} p={2} bg='teal.300'>
    <HStack space={4} justifyContent='space-between' alignItems='center'>
    <VStack space={2}>    
    <Text fontSize="xs" color='gray.500'>Account Balance</Text>
    <Heading color='white'>$10,000</Heading>
    </VStack>
    <Circle borderWidth={1} borderColor={'gray.400'} size={'sm'} bg='gray.100'>
    <AddIcon color='gray.600' size={5}/>
    </Circle>
    </HStack>
    </Box>
    </VStack>

    <Box rounded='xl' w='full' shadow={2} p={2} bg='white'>
    <HStack space={4} justifyContent='space-between' alignItems='center'>
    <Image
    rounded='full'
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/tikka-1f350.appspot.com/o/icons%2Fpie-chart%20(2).png?alt=media&token=df5bce75-fe5a-469b-92cc-9a37dbbba66f"
      }}
      alt="Alternate Text"
      size='xs'
    />
    <VStack space={2} alignItems='flex-end'>    
    <Text fontSize="xs" color='gray.500'>Portfolio Total Value</Text>
    <Heading color='teal.500'>$37,000</Heading>
    </VStack>
    </HStack>
    </Box>

    <VStack space={0}>    
    <Text fontSize="xs" color='gray.500'>Loans</Text>
    <Divider my="2" />
    </VStack>

    <HStack space={0} justifyContent='space-between' alignItems='center'>
    <VStack space={2} alignItems='center'>    
    <Image
    rounded='full'
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/tikka-1f350.appspot.com/o/icons%2Fmoney.png?alt=media&token=f285c415-0f66-4c82-84da-15cd4a5d90bc"
      }}
      alt="Alternate Text"
      size='xs'
    />
    <Text fontSize="xs" color='gray.500'>Request</Text>
    </VStack>
    <VStack space={2} alignItems='center'>    
    <Image
    rounded='full'
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/tikka-1f350.appspot.com/o/icons%2Fpay.png?alt=media&token=8810d377-e441-498a-8382-b4933ac101dc"
      }}
      alt="Alternate Text"
      size='xs'
    />
    <Text fontSize="xs" color='gray.500'>Pay</Text>
    </VStack>
    <VStack space={2} alignItems='center'>    
    <Image
    rounded='full'
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/tikka-1f350.appspot.com/o/icons%2Fdevelopment.png?alt=media&token=2ea6007d-bc2d-41e8-b839-fdf78feb74ec"
      }}
      alt="Alternate Text"
      size='xs'
    />
    <Text fontSize="xs" color='gray.500'>Manage</Text>
    </VStack>
    </HStack>


    <Box rounded='xl' w='full' shadow={2} p={2} bg='orange.200'>
    <HStack space={0} justifyContent='space-between' alignItems='center'>
    <Image
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/tikka-1f350.appspot.com/o/Illustrations%2F1635187092246.png?alt=media&token=699818ec-ea52-4ea0-98d0-699db38feef8"
      }}
      alt="Alternate Text"
      resizeMode='center'
      size='md'
    />
    <VStack space={0}>    
    <Text fontSize="xs" color='gray.500'>Total Loan Balance</Text>
    <Heading color='teal.500'>$47,000</Heading>
    <Text mt={2} fontSize="xs" color='gray.500'>Next Due Date</Text>
    <Heading color='teal.500'>Nov 2, 2021</Heading>
    <Text mt={2} fontSize="xs" color='gray.500'>Next Due Amount</Text>
    <Heading color='teal.500'>$7,000</Heading>
    </VStack>
    </HStack>
    </Box>

    <Heading>Recent Transactions</Heading>
    <Divider mr="2" />

    </VStack>
    </ScrollView>
    </NativeBaseProvider>
  );
}