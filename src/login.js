import React from 'react';
import { Input, ScrollView, Text, Image, NativeBaseProvider, VStack,Button,Pressable} from "native-base"
import { Heading } from 'native-base';
import {StatusBar, Alert} from 'react-native'

import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';


//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('FOSsiQss4pqdZKSslWmrKi9mU7fVg7uAO6GLaBgp','VmNQh75FclmlYqQln9kMrGG6zAV1fYQS2YMcheHa');
Parse.serverURL = 'https://parseapi.back4app.com/';

export default function Login(props, { navigation }) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)


  const doUserLogIn = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = email;
    const passwordValue = password;

    setLoading(true)


    return await Parse.User.logIn(usernameValue, passwordValue)
      .then(async (loggedInUser) => {
        // logIn returns the corresponding ParseUser object
        // To verify that this is in fact the current user, currentAsync can be used
        const currentUser = await Parse.User.currentAsync();
        console.log(loggedInUser === currentUser);
        setLoading(false)

        props.navigation.navigate('Home')
        return true;
      })
      .catch((error) => {
        // Error can be caused by wrong parameters or lack of Internet connection
        Alert.alert('Error!', error.message);
        setLoading(false)
        return false;
      });
  };

  return (
    <NativeBaseProvider>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <ScrollView>
    <VStack space={4} mt={3} p={10} pt={10}>
    <VStack h={200}>
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
    <Pressable onPress={() => props.navigation.navigate('Signup')}>
    <Text fontSize="sm" color='gray.500'>If you are new / <Text bold>Click Here</Text></Text>
    </Pressable>
    <Input variant="filled" value={email} onChangeText={setEmail} placeholder="Email" />
    <Input variant="filled" value={password} onChangeText={setPassword} placeholder="Password" />
    <Text fontSize="sm" color='gray.500'>Forgot Password? / <Text bold>Reset</Text></Text>
    <Button isLoading={loading} onPress={() => doUserLogIn()} colorScheme='teal'>Login</Button>
    <VStack space={3} alignItems='center' w='full'>
    </VStack>
    </VStack>
    </ScrollView>
    </NativeBaseProvider>
  );
}