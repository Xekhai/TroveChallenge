import React from 'react';
import { Divider, HStack,Text, NativeBaseProvider, VStack, Button, Box} from "native-base"
import { Heading, ChevronLeftIcon, Pressable, Modal } from 'native-base';
import {StatusBar} from 'react-native'
import { Circle, AddIcon, ScrollView, FormControl, Input } from 'native-base';
import ListAssets from './components/listtickers'
import LoadingIndicator from './components/loadingIndicator'

// In a React Native application
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('FOSsiQss4pqdZKSslWmrKi9mU7fVg7uAO6GLaBgp','VmNQh75FclmlYqQln9kMrGG6zAV1fYQS2YMcheHa');
Parse.serverURL = 'https://parseapi.back4app.com/';

export default function Portfolio(props, { navigation }) {
  const [userInfo, setInfo] = React.useState(null)

  const getCurrentUser = async function () {
    const currentUser = await Parse.User.currentAsync();
    if (currentUser !== null) {

      const userInfo = {
        email: currentUser.get('email'),
        fname: currentUser.get('fname'),
        balance: currentUser.get('balance'),
      }

      setInfo(userInfo)
    }
  };

  if(userInfo=== null){
    getCurrentUser()
    return (
      <LoadingIndicator/>
    )
  }


  return (
    <NativeBaseProvider>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <ScrollView>
    <VStack space={4} p={5} pt={10}>
    <HStack space={4} justifyContent='space-between' alignItems='center'>

    <Pressable onPress={() => props.navigation.goBack()}>
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
    </Circle>
    </Box>
        )
      }}
      </Pressable>
    <VStack space={2} alignItems='flex-end'>
    <Text fontSize="sm" color='gray.500'>Good Morning,</Text>
    <Heading>{userInfo.fname}</Heading>
    </VStack>
    </HStack>


    <Box rounded='xl' w='full' shadow={2} p={2} px={4} bg="teal.400">
    <HStack space={4} justifyContent='space-between' alignItems='center'>
    <VStack space={2}>    
    <Text fontSize="xs" color='gray.500'>Account Balance</Text>
    <Heading color='white'>${Number(userInfo.balance).toLocaleString('en-US')}</Heading>
    </VStack>
    </HStack>
    </Box>


    <Pressable onPress={() => props.navigation.navigate('AvStocks')}>
    {({ isHovered, isPressed }) => {
    return (    
    <Box rounded='xl' w='full' shadow={2} p={2} px={4} bg='white' 
    style={{
      transform: [
        {
          scale: isPressed ? 0.96 : 1,
        },
      ],
    }}>
    <HStack space={4} justifyContent='space-between' alignItems='center'>
    <VStack space={2} alignItems='flex-start'>    
    <Text fontSize="xs" color='gray.500'>Portfolio Total Value</Text>
    <Heading color='teal.500'>$37,000</Heading>
    </VStack>
    <Circle borderWidth={1} borderColor={'gray.400'} size={'sm'} bg='gray.100'>
    <AddIcon color='gray.600' size={5}/>
    </Circle>
    </HStack>
    </Box>
     )
    }}
    </Pressable>

    <VStack space={0}>    
    <Text fontSize="xs" color='gray.500'>Your Portfolio</Text>
    <Divider my="2" />
    </VStack>

    <ListAssets name='Apple Technologies' value='7,850' ticker='AAPL'/>

    </VStack>
    </ScrollView>
    </NativeBaseProvider>
  );
}