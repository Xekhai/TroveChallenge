import React from 'react';
import  { Paystack }  from 'react-native-paystack-webview';

import LoadingIndicator from './components/loadingIndicator'
import { Divider, HStack,Text, Image, NativeBaseProvider, VStack, Button, Box, Slider} from "native-base"
import { Heading, ChevronDownIcon } from 'native-base';
import {StatusBar, Alert} from 'react-native'
import { Circle, AddIcon, ScrollView, Pressable, Modal, FormControl, Input, Radio} from 'native-base';
// In a React Native application
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('FOSsiQss4pqdZKSslWmrKi9mU7fVg7uAO6GLaBgp','VmNQh75FclmlYqQln9kMrGG6zAV1fYQS2YMcheHa');
Parse.serverURL = 'https://parseapi.back4app.com/';

export default function Home(props, { route, navigation }) {
  const [showModal, setShowModal] = React.useState(false)
  const [showModal2, setShowModal2] = React.useState(false)
  const [showModal3, setShowModal3] = React.useState(false)
  const [showModal4, setShowModal4] = React.useState(false)
  const [userInfo, setInfo] = React.useState(null)
  const [value, setValue] = React.useState("one")
  const [amount, setAmount] = React.useState()
  const [pStatus, setpStatus] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [onChangeValue, setOnChangeValue] = React.useState(9)
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(9)

  const getCurrentUser = async function () {
    const currentUser = await Parse.User.currentAsync();
    if (currentUser !== null) {

      const userInfo = {
        email: currentUser.get('email'),
        fname: currentUser.get('fname'),
        uID: currentUser.id,
        balance: currentUser.get('balance'),
        loan_balance: currentUser.get('loan_balance'),
        nextDate: currentUser.get('nextDate'),
        nextAmount: currentUser.get('nextAmount'),
      }

      setInfo(userInfo)
    }
  };

  const updateUser = async function() {
    const User = new Parse.User();
    const query = new Parse.Query(User);

    try {
      // Finds the user by its ID
      let user = await query.get(userInfo.uID);
      // Updates the data we want
      let amnt = Number(userInfo.balance) + Number(amount)
      console.log(amnt)
      let samnt = amnt.toString()
      console.log(samnt)

      user.set('balance', samnt);
      try {
        // Saves the user with the updated data
        let response = await user.save();
        console.log('Updated user', response);
        getCurrentUser()


      } catch (error) {
        Alert.alert('Error while updating user', error.message);

      }
    } catch (error) {
      Alert.alert('Error while retrieving user', error.message);

    }
  }
  


  if(userInfo=== null){
    getCurrentUser()
    return (
      <LoadingIndicator/>
    )
  }

  function addMooney() {
    setpStatus(true)
    setShowModal(false)
    console.log(pStatus)
  }
  function Pay() {
    return (
      <NativeBaseProvider>
      <VStack style={{ flex: 1 }}>
        <Paystack  
          paystackKey="pk_test_783c3e34af0cc770226788d2511df5b281ea3dd4"
          amount={amount}
          billingEmail={userInfo.email}
          activityIndicatorColor="green"
          onCancel={(e) => {
            setpStatus(false)
          }}
          onSuccess={(res) => {
            updateUser()
            getCurrentUser()
            setpStatus(false)
          }}
          autoStart={true}
        />
      </VStack>
      </NativeBaseProvider>
    );
  }


if(!pStatus){
  return (
    <NativeBaseProvider>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <ScrollView>
    <VStack space={4} p={5} pt={10}>
    <HStack space={4} justifyContent='space-between' alignItems='center'>
    <VStack space={2}>
    <Text fontSize="sm" color='gray.500'>Good Morning,</Text>
    <Heading>{userInfo.fname}</Heading>
    </VStack>
    <Pressable onPress={() => props.navigation.navigate('Settings')}>
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
    <ChevronDownIcon color='gray.600' size={10}/>
    </Circle>
    </Box>
        )
      }}
      </Pressable>
  
    </HStack>

    <VStack space={0}>
    <Image
    roundedTop='xl'
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/tikka-1f350.appspot.com/o/bgimgs%2Fpexels-nick-collins-1293120.jpg?alt=media&token=4b1dcfb2-0d30-480e-bac5-196afe34d8d7"
      }}
      alt="Alternate Text"
      size='xl'
      w='full'
    />
    <Pressable onPress={() => setShowModal(true)}>
    {({ isHovered, isPressed }) => {
        return (
    <Box roundedBottom='xl' w='full' shadow={2} p={2} 
    bg={isPressed ? "teal.900" : isHovered ? "teal.800" : "teal.500"}
    style={{
      transform: [
        {
          scale: isPressed ? 0.99 : 1,
        },
      ],
    }}>
    <HStack space={4} justifyContent='space-between' alignItems='center'>
    <VStack space={2}>    
    <Text fontSize="xs" color='gray.300'>Account Balance</Text>
    <Heading color='white'>${Number(userInfo.balance).toLocaleString('en-US')}</Heading>
    </VStack>
    <Circle borderWidth={1} borderColor={'gray.400'} size={'sm'} bg='gray.100'>
    <AddIcon color='gray.600' size={5}/>
    </Circle>
    </HStack>
    </Box>
     )
    }}
    </Pressable>
    </VStack>

    <Pressable onPress={() => props.navigation.navigate('Portfolio')}>
    {({ isPressed }) => {
        return (
    <Box rounded='xl' w='full' shadow={2} p={2} bg='white'
    style={{
      transform: [
        {
          scale: isPressed ? 0.96 : 1,
        },
      ],
    }}>
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
    )
    }}
    </Pressable>

    <VStack space={0}>    
    <Text fontSize="xs" color='gray.500'>Loans</Text>
    <Divider my="2" />
    </VStack>

    <HStack space={0} justifyContent='space-between' alignItems='center'>

    <Pressable onPress={() => setShowModal2(true)}>
    <VStack space={2} alignItems='center'>    
    <Image
    rounded='full'
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/tikka-1f350.appspot.com/o/icons%2Fmoney.png?alt=media&token=f285c415-0f66-4c82-84da-15cd4a5d90bc"
      }}
      alt="Alternate Text"
      size='xs'
    />
    <Text fontSize="xs" color='gray.500'>Request</Text>
    </VStack>
    </Pressable>

    <Pressable onPress={() => setShowModal3(true)}>
    <VStack space={2} alignItems='center'>    
    <Image
    rounded='full'
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/tikka-1f350.appspot.com/o/icons%2Fpay.png?alt=media&token=8810d377-e441-498a-8382-b4933ac101dc"
      }}
      alt="Alternate Text"
      size='xs'
    />
    <Text fontSize="xs" color='gray.500'>Pay</Text>
    </VStack>
    </Pressable>

    <Pressable onPress={() => setShowModal4(true)}>
    <VStack space={2} alignItems='center'>    
    <Image
    rounded='full'
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/tikka-1f350.appspot.com/o/icons%2Fdevelopment.png?alt=media&token=2ea6007d-bc2d-41e8-b839-fdf78feb74ec"
      }}
      alt="Alternate Text"
      size='xs'
    />
    <Text fontSize="xs" color='gray.500'>Manage</Text>
    </VStack>
    </Pressable>

    </HStack>


    <Box rounded='xl' w='full' shadow={2} p={2} bg='orange.200'>
    <HStack space={0} justifyContent='space-between' alignItems='center'>
    <Image
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/tikka-1f350.appspot.com/o/Illustrations%2F1635187092246.png?alt=media&token=699818ec-ea52-4ea0-98d0-699db38feef8"
      }}
      alt="Alternate Text"
      resizeMode='center'
      size='md'
    />
    <VStack space={0}>    
    <Text fontSize="xs" color='gray.500'>Total Loan Balance</Text>
    <Heading color='teal.500'>${userInfo.loan_balance}</Heading>
    <Text mt={2} fontSize="xs" color='gray.500'>Next Due Date</Text>
    <Heading color='teal.500'>{userInfo.nextDate}</Heading>
    <Text mt={2} fontSize="xs" color='gray.500'>Next Due Amount</Text>
    <Heading color='teal.500'>${userInfo.nextAmount}</Heading>
    </VStack>
    </HStack>
    </Box>

    <Heading>Recent Transactions</Heading>
    <Divider mr="2" />

    </VStack>
    </ScrollView>

    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Add Money</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Amount</FormControl.Label>
              <Input value={amount} onChangeText={setAmount} keyboardType='numeric' placeholder='0.00' InputLeftElement={
                (
                  <Text ml={2}>$</Text>
                )
              }/>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false)
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {addMooney()}}
              >
                Proceed
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

    <Modal isOpen={showModal2} onClose={() => setShowModal2(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Request Loan</Modal.Header>
          <Modal.Body>
          <Text fontSize="sm" color='gray.500'>Available Credit</Text>
          <Heading>$22,200</Heading>
          <Divider my={2}/>
            <FormControl>
              <FormControl.Label>Amount</FormControl.Label>
              <Input keyboardType='numeric' placeholder='0.00' InputLeftElement={
                (
                  <Text ml={2}>$</Text>
                )
              }/>
            </FormControl>
            
      <Text mt={4} fontSize="sm" color='gray.500'>Duration</Text>
      <Slider
        defaultValue={9}
        minValue={6}
        maxValue={12}
        step={1}
        p={1}

        onChange={(v) => {
          setOnChangeValue(Math.floor(v))
        }}
        onChangeEnd={(v) => {
          v && setOnChangeEndValue(Math.floor(v))
        }}
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
      <Heading>{onChangeValue} Months</Heading>

          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal2(false)
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal2(false)
                }}
              >
                Proceed
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

    <Modal isOpen={showModal3} onClose={() => setShowModal3(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Pay Loan</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Amount</FormControl.Label>
              <Radio.Group
      name="myRadioGroup"
      accessibilityLabel="favorite number"
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue)
      }}
    >
      <Radio value="one" my={1}>
        Next Due Amount
      </Radio>
      <Radio value="two" my={1}>
        Total Loan
      </Radio>
    </Radio.Group>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal3(false)
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal3(false)
                }}
              >
                Proceed
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

    <Modal isOpen={showModal4} onClose={() => setShowModal4(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Manage Loan</Modal.Header>
          <Modal.Body>
            <Text my = {2}>Current Loan Details</Text>
            <Divider my={1}/>
            <HStack justifyContent='space-between'>
            <Text my = {2} color='orange.400'>Payment Date</Text>
            <Text my = {2} color='orange.400'>Amount Due</Text>
            </HStack>
            <HStack justifyContent='space-between'>
            <Text my = {2} color='teal.400'>October 29, 2021</Text>
            <Text my = {2} color='teal.400'>$7,000</Text>
            </HStack>
            <HStack justifyContent='space-between'>
            <Text my = {2} color='teal.400'>November 29, 2021</Text>
            <Text my = {2} color='teal.400'>$7,000</Text>
            </HStack>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal4(false)
                }}
              >
                Cancel
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

    </NativeBaseProvider>
  );
}else{return(
  <Pay/>
)}


}