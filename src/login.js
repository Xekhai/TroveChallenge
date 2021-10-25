import React from 'react';
import { Input, HStack,Text, Image, NativeBaseProvider, VStack,Button} from "native-base"
import { Heading } from 'native-base';
import {StatusBar} from 'react-native'

export default function Login() {
  return (
    <NativeBaseProvider>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <VStack space={4} mt={3} p={10} pt={10}>
    <VStack h='1/3'>
    <Image
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/tikka-1f350.appspot.com/o/icons%2Fsem.png?alt=media&token=c3d9b622-f2da-4b27-a6f9-f2d7f635a6bb"
      }}
      alt="Alternate Text"
      size='xs'
      resizeMode='cover'
    />      
    </VStack>

    <Heading>Hey,</Heading>
    <Heading>Login Now.</Heading>
    <Text fontSize="sm" color='gray.500'>If you are new / <Text bold>Click Here</Text></Text>
    <Input variant="filled" placeholder="Email" />
    <Input variant="filled" placeholder="Password" />
    <Text fontSize="sm" color='gray.500'>Forgot Password? / <Text bold>Reset</Text></Text>
    <Button onPress={() => console.log("hello world")} colorScheme='teal'>Login</Button>
    <VStack space={3} alignItems='center' w='full'>
    <Text fontSize="xs" color='gray.500'>(c) 2021</Text>
    </VStack>
    </VStack>
    </NativeBaseProvider>
  );
}