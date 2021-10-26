import React from 'react';
import { Divider, HStack,Text, NativeBaseProvider, VStack, Button, Box} from "native-base"
import { Heading, ChevronLeftIcon } from 'native-base';
import {StatusBar} from 'react-native'
import { Circle, AddIcon, ScrollView, FlatList } from 'native-base';
import ListAssets from './components/listtickers'
import AvailableStocks from './components/listasts'


export default function AvStocks() {

    console.log(AvailableStocks);

  return (
    <NativeBaseProvider>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <FlatList data={AvailableStocks} renderItem={({ item }) => (
    <ListAssets name={item.companyName} value={item.latestPrice} ticker={item.symbol}/>
    )}
    ListHeaderComponent={
        <VStack space={4} p={5} pb={0} pt={10}>
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
        <Heading color='white'>$15,345</Heading>
        </VStack>
        <Circle borderWidth={1} borderColor={'gray.400'} size={'sm'} bg='gray.100'>
        <AddIcon color='gray.600' size={5}/>
        </Circle>
        </HStack>
        </Box>
    
        <VStack space={0}>    
        <Text fontSize="xs" color='gray.500'>Available Stocks</Text>
        <Divider my="2" />
        </VStack>
        </VStack>
    }
    />
    </NativeBaseProvider>
  );
}