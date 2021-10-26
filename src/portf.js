import React from 'react';
import { Divider, HStack,Text, Image, NativeBaseProvider, VStack, Button, Box} from "native-base"
import { Heading, ChevronLeftIcon, ChevronRightIcon } from 'native-base';
import {StatusBar} from 'react-native'
import { Circle, AddIcon, ScrollView, Avatar } from 'native-base';
import ListAssets from './components/listtickers'


export default function Portfolio() {

  return (
    <NativeBaseProvider>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <ScrollView>
    <VStack space={4} p={5} pt={10}>
    <HStack space={4} justifyContent='space-between' alignItems='center'>
    <Circle borderWidth={1} borderColor={'gray.400'} size={'sm'} bg='gray.100'>
    <ChevronLeftIcon color='gray.600' size={10}/>
    </Circle>
    <VStack space={2} alignItems='flex-end'>
    <Text fontSize="sm" color='gray.500'>Good Morning,</Text>
    <Heading>Joshua Praise</Heading>
    </VStack>
    </HStack>

    <Box rounded='xl' w='full' shadow={2} p={2} bg='teal.300'>
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
    <Text fontSize="xs" color='gray.500'>Your Portfolio</Text>
    <Divider my="2" />
    </VStack>

    <ListAssets name='Apple Technologies' value='7,850' ticker='AAPL'/>
    <ListAssets name='Apple Technologies' value='7,850' ticker='AAPL'/>
    <ListAssets name='Apple Technologies' value='7,850' ticker='AAPL'/>
    <ListAssets name='Apple Technologies' value='7,850' ticker='AAPL'/>
    <ListAssets name='Apple Technologies' value='7,850' ticker='AAPL'/>
    <ListAssets name='Apple Technologies' value='7,850' ticker='AAPL'/>
    <ListAssets name='Apple Technologies' value='7,850' ticker='AAPL'/>
    <ListAssets name='Apple Technologies' value='7,850' ticker='AAPL'/>

    </VStack>
    </ScrollView>
    </NativeBaseProvider>
  );
}