import React from 'react';
import { Image, HStack,Text, Box, NativeBaseProvider, VStack,Button} from "native-base"
import { Heading } from 'native-base';
import {StatusBar} from 'react-native'

export default function Init() {
  return (
    <NativeBaseProvider>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <VStack space={4} mt={3} p={10} pt={0}>
      <Image
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/tikka-1f350.appspot.com/o/Illustrations%2F1635187092246.png?alt=media&token=699818ec-ea52-4ea0-98d0-699db38feef8"
      }}
      alt="Alternate Text"
      w='full'
      h='3/4'
      resizeMode='center'
    />
    <Text fontSize="xs" color='gray.500'>Get Started</Text>
    <HStack space={3} alignItems='flex-end' w='2/3'>
    <Heading>Manage your Portfolio, take loans and more.</Heading>
    </HStack>
    <VStack space={3} alignItems='flex-end' w='full'>
    <Button colorScheme='teal' onPress={() => console.log("hello world")}>Next</Button>
    </VStack>
    </VStack>
    </NativeBaseProvider>
  );
}