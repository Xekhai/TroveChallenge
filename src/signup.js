import React from 'react';
import { Input, Checkbox, Pressable, Text, Image, NativeBaseProvider, VStack, Button, HStack} from "native-base"
import { Heading, ScrollView } from 'native-base';
import {StatusBar, Alert} from 'react-native'

import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('FOSsiQss4pqdZKSslWmrKi9mU7fVg7uAO6GLaBgp','VmNQh75FclmlYqQln9kMrGG6zAV1fYQS2YMcheHa');
Parse.serverURL = 'https://parseapi.back4app.com/';

export default function Signup(props, { navigation }) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [fname, setFname] = React.useState('')
  const [loading, setLoading] = React.useState(false)



const doUserRegistration = async function () {

  const user = new Parse.User();

  user.set('username', email);
  user.set('email', email);
  user.set('password', password);
  user.set('fname', fname);
  user.set('balance', '0');
  user.set('loan_balance', '0');
  user.set('totport', '0');
  user.set('nextDate', '-');
  user.set('nextAmount', '-');
  setLoading(true)
  // Note that these values come from state variables that we've declared before

  // Since the signUp method returns a Promise, we need to call it using await
  return await user.signUp()
    .then((createdUser) => {
      // Parse.User.signUp returns the already created ParseUser object if successful
      Alert.alert(
        "Registration Successful!",
        `Proceed to Login now!`,
        [
          { text: "OK", onPress: () => props.navigation.navigate('Login')}
        ],
        {
          cancelable: false,
        }
      );
      return true;
    })
    .catch((error) => {
      // signUp can fail if any parameter is blank or failed an uniqueness check on the server
      Alert.alert("Error!", error.message);
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

    <Heading>Welcome,</Heading>
    <Heading>Let's get you started!.</Heading>
    <Pressable onPress={() => props.navigation.navigate('Login')}>
    <Text fontSize="sm" color='gray.500'>Existing User? / <Text bold>Click Here</Text></Text>
    </Pressable>
    <Input variant="filled" value={fname} onChangeText={setFname} placeholder="Full Name" />
    <Input variant="filled" value={email} onChangeText={setEmail} placeholder="Email" />
    <Input variant="filled" value={password} onChangeText={setPassword} placeholder="Password" />
    <HStack space={3} alignItems='center' w='full'>
    <Checkbox value="test" colorScheme='orange'/>
    <Text fontSize="xs" color='gray.500'>Subscribe to Our Daily newsletter</Text>
    </HStack>
    <Button isLoading={loading} onPress={() => doUserRegistration()} colorScheme='teal'>Register</Button>
    <VStack space={3} alignItems='center' w='full'>
    </VStack>
    </VStack>
    </ScrollView>
    </NativeBaseProvider>
  );
}