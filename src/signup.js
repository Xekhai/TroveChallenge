import React from 'react';
import { Input, Checkbox,Text, Image, NativeBaseProvider, VStack,Button,HStack} from "native-base"
import { Heading } from 'native-base';
import {StatusBar, Pressable} from 'react-native'

export default function Signup(props, { navigation }) {
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

    <Heading>Welcome,</Heading>
    <Heading>Let's get you started!.</Heading>
    <Pressable onPress={() => props.navigation.navigate('Login')}>
    <Text fontSize="sm" color='gray.500'>Existing User? / <Text bold>Click Here</Text></Text>
    </Pressable>
    <Input variant="filled" placeholder="Full Name" />
    <Input variant="filled" placeholder="Email" />
    <Input variant="filled" placeholder="Password" />
    <HStack space={3} alignItems='center' w='full'>
    <Checkbox value="test" colorScheme='orange'/>
    <Text fontSize="xs" color='gray.500'>Subscribe to Our Daily newsletter</Text>
    </HStack>
    <Button onPress={() => props.navigation.navigate('Home')} colorScheme='teal'>Register</Button>
    <VStack space={3} alignItems='center' w='full'>
    </VStack>
    </VStack>
    </NativeBaseProvider>
  );
}