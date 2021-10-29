import React from 'react';
import { HStack,Text, VStack, Box} from "native-base"
import { Heading, ChevronRightIcon, Pressable } from 'native-base';
import { Avatar, Modal, FormControl, Input, Button } from 'native-base';
// In a React Native application
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StatusBar, Alert} from 'react-native'

//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('FOSsiQss4pqdZKSslWmrKi9mU7fVg7uAO6GLaBgp','VmNQh75FclmlYqQln9kMrGG6zAV1fYQS2YMcheHa');
Parse.serverURL = 'https://parseapi.back4app.com/';

export default function ListAssets(props) {
    const [showModal, setShowModal] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [amount, setAmount] = React.useState(1)

    const spendmoney = async function () {
        setLoading(true)
        // Creates a new Todo parse object instance
        let Todo = new Parse.Object('stocks_Owner');
        Todo.set('email', 'jagbomeikhe@gmail.com');
        Todo.set('amount', props.value * amount);
        Todo.set('symbol', props.ticker.slice(0,5));
        Todo.set('name', props.name);
        // After setting the todo values, save it on the server
        try {
          await Todo.save();
          // Success
          setLoading(false)

          Alert.alert('Success!', 'Purchase Successful');
          // Refresh todos list to show the new one (you will create this function later)
          return true;
        } catch (error) {
          // Error can be caused by lack of Internet connection
          Alert.alert('Error!', error.message);
          setLoading(false)

          return false;
        };
      };

    return (
    <Pressable onPress={() => setShowModal(true)}>
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
        <VStack px={5} py={2}>
        <Box rounded='xl' w='full' shadow={2} p={2} bg='orange.100'>
        <HStack space={4} justifyContent='space-between' alignItems='center'>
        <HStack space={2} alignItems='center'>
        <Avatar bg="black">{props.ticker.slice(0,5)}</Avatar>
        <VStack justifyContent='center' w='2/3' alignItems='flex-start'>    
        <Text fontSize="xs" color='gray.500'>{props.name}</Text>
        <Heading color='teal.500'>${props.value}</Heading>
        </VStack>
        </HStack>
        <ChevronRightIcon color='gray.300' size={7}/>
        </HStack>
        </Box>
        </VStack>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="450px">
          <Modal.CloseButton />
          <Modal.Header><Text>Purchase {props.name} Stocks</Text></Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Amount</FormControl.Label>
              <Input value={amount.toString()} onChangeText={setAmount} keyboardType='numeric' placeholder='0.00' InputRightElement={
                (
                  <Text mr={2}>Units @ ${props.value * amount}</Text>
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
              <Button isLoading={loading}
                onPress={() => {spendmoney()}}
              >
                Proceed
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

        </Box>
          )
        }}
        </Pressable>
        );
    }