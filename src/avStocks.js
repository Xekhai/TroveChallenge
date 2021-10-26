import React from 'react';
import { Divider, HStack,Text, NativeBaseProvider, VStack, Button, Box} from "native-base"
import { Heading, ChevronLeftIcon } from 'native-base';
import {StatusBar} from 'react-native'
import { Circle, AddIcon, Pressable, FlatList, FormControl, Input,Modal} from 'native-base';
import ListAssets from './components/listtickers'
import AvailableStocks from './components/listasts'


export default function AvStocks(props, { navigation }) {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <NativeBaseProvider>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <FlatList data={AvailableStocks} renderItem={({ item }) => (
    <ListAssets name={item.companyName} value={item.latestPrice} ticker={item.symbol}/>
    )}
    ListHeaderComponent={
        <VStack space={4} p={5} pb={0} pt={10}>
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
        <Heading>Joshua Praise</Heading>
        </VStack>
        </HStack>
    
        <Pressable onPress={() => setShowModal(true)}>
    {({ isHovered, isPressed }) => {
    return (
        <Box rounded='xl' w='full' shadow={2} p={2} bg='teal.300'
        bg={isPressed ? "teal.900" : isHovered ? "teal.800" : "teal.400"} 
    style={{
      transform: [
        {
          scale: isPressed ? 0.99 : 1,
        },
      ],
    }}>
        <HStack space={4} justifyContent='space-between' alignItems='center'>
        <VStack space={2}>    
        <Text fontSize="xs" color='gray.500'>Account Balance</Text>
        <Heading color='white'>$15,345</Heading>
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
        <Text fontSize="xs" color='gray.500'>Available Stocks</Text>
        <Divider my="2" />
        </VStack>
        </VStack>
    }
    />
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Add Money</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Amount</FormControl.Label>
              <Input keyboardType='numeric' placeholder='0.00' InputLeftElement={
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
                onPress={() => {
                  setShowModal(false)
                }}
              >
                Proceed
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

    </NativeBaseProvider>
  );
}