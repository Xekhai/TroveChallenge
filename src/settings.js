import React from 'react';
import { Input, Checkbox,Text, ChevronLeftIcon, NativeBaseProvider, VStack, Button, HStack, Circle} from "native-base"
import { Heading } from 'native-base';
import {StatusBar} from 'react-native'

export default function Settings() {
  return (
    <NativeBaseProvider>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <VStack space={4} mt={3} p={10} pt={10}>

    <Circle borderWidth={1} borderColor={'gray.400'} size={'sm'} bg='gray.100'>
    <ChevronLeftIcon color='gray.600' size={10}/>
    </Circle>

    <Text fontSize="sm" color='gray.500'>Good Morning,</Text>
    <Heading>Joshua Praise</Heading>
    <Text fontSize="sm" color='gray.500'>Edit Profile Name</Text>
    <Input variant="filled" placeholder="Joshua Praise" />
    <VStack space={3} alignItems='flex-end' w='full'>
    <Button colorScheme='teal' onPress={() => console.log("hello world")}>Save</Button>
    </VStack>

    <Text fontSize="sm" color='gray.500'>Edit Profile Name</Text>
    <Input variant="filled" placeholder="Old Password" />
    <Input variant="filled" placeholder="New Password" />
    <VStack space={3} alignItems='flex-end' w='full'>
    <Button colorScheme='teal' onPress={() => console.log("hello world")}>Save</Button>
    </VStack>

    </VStack>
    </NativeBaseProvider>
  );
}