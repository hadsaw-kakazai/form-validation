import logo from './logo.svg';
import './App.css';
import HeaderOne from './Components/HeaderOne';
import Form from './Form';
import { Box, Input, Stack } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading ,Text} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'

import { Flex, Spacer } from '@chakra-ui/react'

function App() {
  return (

      <Flex  ml={120}>
        <Box  w="1000px">
          <Flex pt={5}>
          <Box w="50%">
          <Text fontSize="3xl" as="b">Haze</Text>
          </Box>
          <Box w="50%" ml={200}>
            <span>Already Have An Account?  </span>
    <Button colorScheme='blue' variant="outline" borderRadius="full" p={5}>Login</Button>
          </Box>
          </Flex>
          
   
   <Container mt={200} maxW="md">
   <Stack spacing={4}>
<Heading>Sign Up Here!</Heading>
<Input  type="text" placeholder='Full Name' />
  <Input  type="email" placeholder='Email' />
  <Input type="password" placeholder='Password' />
  <Input type="number" placeholder='Phone Number' />
  <Button colorScheme='blue'>Get Started</Button>

</Stack>

    </Container>     

        </Box>

        <Box  height="980px" w="1000px">
        
      <Image src='../assests/astronaut.jpg' h="auto" maxH="980px" w="full" maxW="1000px" objectFit='cover' ></Image>
      

        </Box>
      </Flex>



     


    
  );
}

export default App;
