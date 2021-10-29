import React from 'react';
import { Input, Box, Text, ChevronLeftIcon, NativeBaseProvider, VStack, Button, Pressable, Circle} from "native-base"
import { Heading } from 'native-base';
import {StatusBar} from 'react-native';
import { Alert } from 'react-native';
import LoadingIndicator from './components/loadingIndicator'

// In a React Native application
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('FOSsiQss4pqdZKSslWmrKi9mU7fVg7uAO6GLaBgp','VmNQh75FclmlYqQln9kMrGG6zAV1fYQS2YMcheHa');
Parse.serverURL = 'https://parseapi.back4app.com/';

export default function Settings(props, { navigation }) {
  const [userInfo, setInfo] = React.useState(null)
  const [fullname, setFname] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const getCurrentUser = async function () {
    const currentUser = await Parse.User.currentAsync();
    if (currentUser !== null) {
      const userInfo = {
        fname: currentUser.get('fname'),
        uID: currentUser.id,
      }
      setInfo(userInfo)
    }
  };

  const updateUser = async function() {
    setLoading(true)
    const User = new Parse.User();
    const query = new Parse.Query(User);

    try {
      // Finds the user by its ID
      let user = await query.get(userInfo.uID);
      // Updates the data we want
      user.set('fname', fullname);
      try {
        // Saves the user with the updated data
        let response = await user.save();
        console.log('Updated user', response);
        getCurrentUser()
        setLoading(false)


      } catch (error) {
        Alert.alert('Error while updating user', error.message);
        setLoading(false)

      }
    } catch (error) {
      Alert.alert('Error while retrieving user', error.message);
      setLoading(false)

    }
  }
  

  if(userInfo=== null){
    getCurrentUser()
    return (
      <LoadingIndicator/>
    )
  }

  const showAlert = () =>
  Alert.alert(
    "",
    "Updated Successfully",
    [
      {
        text: "Cancel",
      },
    ],
    {
      cancelable: true,
    }
  );

  return (
    <NativeBaseProvider>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <VStack space={4} mt={3} p={10} pt={10}>
    <Pressable onPress={() => props.navigation.push('Home')}>
    {({ isPressed }) => {
        return (
    <Box
     style={{
      transform: [
        {
          scale: isPressed ? 0.96 : 1,
        },
      ],
    }}>
    <Circle borderWidth={1} borderColor={'gray.400'} size={'sm'} bg='gray.100'>
    <ChevronLeftIcon color='gray.600' size={10}/>
    </Circle></Box>
        )}}
    </Pressable>

    <Text fontSize="sm" color='gray.500'>Good Morning,</Text>
    <Heading>{userInfo.fname}</Heading>
    <Text fontSize="sm" color='gray.500'>Edit Profile Name</Text>
    <Input variant="filled" value={fullname} onChangeText={setFname} placeholder={userInfo.fname} />
    <VStack space={3} alignItems='flex-end' w='full'>
    <Button colorScheme='teal' isLoading={loading} onPress={()=>{updateUser()}}>Save</Button>
    </VStack>

    <Text fontSize="sm" color='gray.500'>Edit Profile Name</Text>
    <Input variant="filled" placeholder="Old Password" />
    <Input variant="filled" placeholder="New Password" />
    <VStack space={3} alignItems='flex-end' w='full'>
    <Button colorScheme='teal' onPress={showAlert}>Save</Button>
    </VStack>

    </VStack>
    </NativeBaseProvider>
  );

 }